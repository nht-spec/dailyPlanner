import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import notePage from '../../../shared/styles/notePage';
import useGetNote from '../../hooks/useGetNote';
import Pinned from './Pinned/Pinned';
import UpComming from './UpComming/UpComming';

export default function NotePage({ route, navigation }) {
	const { userId, userName } = route.params;
	const { data } = useGetNote(userName);
	const imgNote = require('./empty.png');
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	return (
		<SafeAreaView style={notePage.noteControl}>
			<View style={notePage.noteContent}>
				<View style={notePage.noteHeader}>
					<Text style={notePage.noteTitleText}>Notes</Text>
					<MaterialIcons
						size={35}
						onPress={() => navigation.goBack()}
						name='close'
					/>
				</View>

				{data.notes === undefined ||
					(Object.keys(data.notes).length === 0 && (
						<View style={notePage.emptyControl}>
							<Image source={imgNote} />
							<Text style={notePage.titleEmpty}>No Notes</Text>
							<Text style={notePage.descEmpty}>
								Create a notes and it will show up here
							</Text>
						</View>
					))}
				<View contentContainerStyle={{ flexGrow: 1 }}>
					<ScrollView>
						{data.notes &&
							data.notes.map((data) => (
								<Pinned
									navigation={navigation}
									pinned={data.pinned}
									title={data.title}
									note={data.note}
									id={data._id}
									color={data.color}
									username={userName}
								/>
							))}

						{data.notes &&
							data.notes.map((data) => (
								<UpComming
									navigation={navigation}
									pinned={data.pinned}
									title={data.title}
									note={data.note}
									id={data._id}
									color={data.color}
									username={userName}
								/>
							))}
					</ScrollView>
				</View>
			</View>
			<MaterialIcons
				size={55}
				color='#dd7f7b'
				style={notePage.iconAdd}
				onPress={() =>
					navigation.navigate('AddNote', {
						userName,
					})
				}
				name='add-circle'
			/>
		</SafeAreaView>
	);
}
