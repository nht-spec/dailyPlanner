import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Platform, Text, TouchableHighlight, View } from 'react-native';

export default function MaxTime({ maxtime, success }) {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [maxTime, setMaxTime] = useState(0);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
		let tempDate = new Date(currentDate);
		let fTime = tempDate.getTime();
		maxtime && maxtime(fTime);
		setMaxTime(fTime);
	};

	useEffect(() => {
		success && setMaxTime(0);
	}, [success]);

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		// <View>
		// 	<TouchableHighlight activeOpacity={0} onPress={() => showMode('time')}>
		// 		<Text>
		// 			{maxTime
		// 				? moment(maxTime).format('HH:mm a')
		// 				: moment().format('HH:mm a')}
		// 		</Text>
		// 	</TouchableHighlight>
		// {show && (
		// 	)}
		// 	</View>
		<DateTimePicker
			style={{ width: '25%' }}
			testID='dateTimePicker'
			value={date}
			mode={'time'}
			is24Hour={true}
			display='default'
			onChange={onChange}
		/>
	);
}
