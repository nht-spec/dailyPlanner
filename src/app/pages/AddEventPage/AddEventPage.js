import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import eventPage from '../../../shared/styles/eventPage';
import usePostEvent from '../../hooks/usePostEvent';
import ColorList from './ColorList/ColorList';
import EventDescInput from './EventDescInput/EventDescInput';
import EventTitleInput from './EventTitleInput/EventTitleInput';
import Header from './Header/Header';
import TimeRange from './TimeRange/TimeRange';

export default function AddEventPage({ route, navigation }) {
	const [minTime, setMinTime] = useState(0);
	const [maxTime, setMaxTime] = useState(0);
	const [checkTime, setCheckTime] = useState(false);
	const [input, setInput] = useState({});
	const [color, setColor] = useState('');
	const form = useForm({
		defaultValues: {
			title: '',
			desc: '',
		},
	});
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	const { userName, data, date, userId } = route.params;

	useEffect(() => {
		minTime > maxTime && setCheckTime(true);

		minTime < maxTime && setCheckTime(false);
	}, [minTime, maxTime]);

	const handleSubmit = (values) => {
		if (minTime && maxTime && values) {
			form.reset();
			setInput(values);
		}
	};

	const { eventPost } = usePostEvent(
		date,
		data,
		input,
		minTime,
		maxTime,
		userName,
		color
	);

	useEffect(() => {
		if (Object.keys(eventPost).length !== 0) {
			navigation.goBack();
		}
	}, [eventPost]);

	return (
		<View style={eventPage.eventPageControl}>
			<Header color={color} navigation={navigation} />

			<View style={eventPage.content}>
				<ScrollView style={{ height: '100%', flexGrow: 1 }}>
					<EventTitleInput
						color={color}
						form={form}
						name='title'
						errors={form.formState.errors}
					/>
					<Text style={eventPage.titleTime}>When?</Text>

					<TimeRange color={color} mintime={setMinTime} maxtime={setMaxTime} />

					<Text style={eventPage.titleTime}>What Color?</Text>

					<ColorList colorchoose={setColor} />

					<Text style={eventPage.titleTime}>Any detail?</Text>

					<EventDescInput
						color={color}
						form={form}
						name='desc'
						errors={form.formState.errors}
					/>
				</ScrollView>
				<View style={eventPage.btnCreateControl}>
					<TouchableHighlight
						style={{
							borderRadius: 30,
							height: 60,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: color ? color : '#f98e86',
						}}
						onPress={form.handleSubmit(handleSubmit)}
					>
						<Text style={eventPage.btnText}>Create Events</Text>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
