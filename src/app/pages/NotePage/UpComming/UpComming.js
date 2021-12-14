import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import useDeletedNote from '../../../hooks/useDeletedNote';

export default function UpComming({
	pinned,
	title,
	note,
	id,
	color,
	username,
	navigation,
}) {
	const [idNote, setIdNote] = useState('');
	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});
	const { isDeleted } = useDeletedNote(idNote, username);

	return (
		<>
			{pinned === false && (
				<>
					<Text style={{ paddingBottom: 10 }}>Upcomming</Text>
					<View
						key={id}
						style={{
							flexDirection: 'row',
							padding: 12,
							backgroundColor: color ? color : '#ffffff',
							marginBottom: 25,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'space-between',
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 1,
							},
							marginLeft: 1,
							marginRight: 1,
							shadowOpacity: 0.22,
							shadowRadius: 2.22,
							elevation: 3,
						}}
					>
						<View>
							<Text
								style={{
									fontFamily: 'RobotoBold',
									fontSize: 20,
									paddingBottom: 15,
									textTransform: 'capitalize',
								}}
							>
								{title}
							</Text>
							<Text
								style={{
									textDesc: {
										fontFamily: 'RobotoMedium',
										fontSize: 15,
									},
								}}
							>
								{note}
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<MaterialIcons
								onPress={() =>
									navigation.navigate('UpdateNote', {
										username,
										id,
									})
								}
								size={28}
								style={{ paddingRight: 5 }}
								color='#004940'
								name='settings'
							/>
							<MaterialIcons
								onPress={() => setIdNote(id)}
								size={28}
								color='#004940'
								name='delete'
							/>
						</View>
					</View>
				</>
			)}
		</>
	);
}
