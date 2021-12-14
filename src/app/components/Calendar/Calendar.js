import moment from 'moment';
import React, { useEffect, useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';

export default function Calendar({ date }) {
	const [changeTime, setChangeTime] = useState(new Date());
	const [dateData, setDateData] = useState(
		moment(new Date()).format('MMM Do YY')
	);

	const handleSelectDate = (date) => {
		setChangeTime(date._d);
		setDateData(moment(date._d).format('MMM Do YY'));
	};

	useEffect(() => {
		date && date(dateData);
	}, [dateData]);

	return (
		<CalendarStrip
			scrollable
			selectedDate={changeTime}
			onDateSelected={handleSelectDate}
			style={{ height: 230, paddingTop: 40, paddingBottom: 30 }}
			calendarColor={'#1c1c1e'}
			calendarHeaderStyle={{
				color: 'white',
				fontSize: 24,
				marginTop: 20,
				position: 'absolute',
				left: 44,
			}}
			dateNumberStyle={{ color: '#e7e7e7', fontSize: 17, paddingTop: 10 }}
			dateNameStyle={{ color: '#5c5b61', fontSize: 10 }}
			highlightDateNumberStyle={{
				color: '#8b5953',
				paddingTop: 10,
				fontSize: 17,
			}}
			highlightDateNameStyle={{
				color: '#5c5b61',
				fontSize: 10,
			}}
			iconContainer={{ flex: 0.1 }}
		/>
	);
}
