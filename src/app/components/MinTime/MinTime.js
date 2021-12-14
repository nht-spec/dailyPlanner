import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import minTimeStyle from '../../../shared/styles/minTimeStyle';

export default function MinTime({ mintime, success }) {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [minTime, setMinTime] = useState(0);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
		let tempDate = new Date(currentDate);
		let fTime = tempDate.getTime();
		mintime && mintime(fTime);
		setMinTime(fTime);
	};

	useEffect(() => {
		success && setMinTime(0);
	}, [success]);

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		// <View style={minTimeStyle.minTimeControl}>
		// 	{/* <TouchableHighlight activeOpacity={0} onPress={() => showMode('time')}>
		// 		<Text>
		// 			{minTime
		// 				? moment(minTime).format('HH:mm a')
		// 				: moment().format('HH:mm a')}
		// 		</Text>
		// 	</TouchableHighlight> */}
		// </View>

		<DateTimePicker
			style={{ width: '25%', marginRight: 40 }}
			testID='dateTimePicker'
			value={date}
			mode={'time'}
			is24Hour={true}
			display='default'
			onChange={onChange}
		/>
	);
}
