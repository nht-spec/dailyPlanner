import { MaterialIcons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import homePage from '../../../shared/styles/homePage';
import Calendar from '../../components/Calendar/Calendar';
import EventList from '../../components/EventList/EventList';
import useGetEvent from '../../hooks/useGetEvent';
export default function HomePage({ route, navigation }) {
	const [date, setDate] = useState('');
	const { userId, userName } = route.params;
	const [data, setData] = useState([]);
	const { eventData } = useGetEvent(userName);

	useEffect(() => {
		setData(eventData.event);
	}, [eventData]);

	return (
		<View style={{ position: 'relative' }}>
			<View style={{ position: 'absolute', height: '100%', width: '100%' }}>
				<Calendar navigation={navigation} date={setDate} />
			</View>

			<View style={homePage.homeSreen}>
				<ScrollView style={{ height: '100%', flexGrow: 1 }}>
					<EventList navigation={navigation} data={data} date={date} />
				</ScrollView>

				<View style={homePage.iconControl}>
					<MaterialIcons
						style={homePage.iconAdd}
						name='add-circle'
						size={60}
						color={'#f98e86'}
						onPress={() => {
							navigation.dispatch(
								CommonActions.navigate({
									name: 'Addevent',
									params: {
										data,
										date,
										userName,
										userId,
									},
								})
							);
						}}
					/>
				</View>

				<View style={homePage.iconNoteControl}>
					<MaterialIcons
						style={homePage.iconAddNote}
						name='event-note'
						size={28}
						color={'#f98e86'}
						onPress={() => {
							navigation.navigate('Note', {
								userId,
								userName,
							});
						}}
					/>
				</View>

				<View style={homePage.iconProfileControl}>
					<MaterialIcons
						style={homePage.iconProfileNote}
						name='person-pin'
						size={28}
						color={'#f98e86'}
						onPress={() =>
							navigation.navigate('Profile', {
								userId,
								userName,
							})
						}
					/>
				</View>
			</View>
		</View>
	);
}
