import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import eventList from '../../../shared/styles/eventList';
import useRangeTime from '../../hooks/useRangeTime';
import Events from '../Events/Events';

export default function EventList({ data, date, navigation }) {
	const { rangeTime } = useRangeTime(data, date);
	const [newData, setNewData] = useState([]);

	function dateData(newData) {
		let newDate = '';
		newData &&
			newData.forEach((data) => {
				if (date === data.date) {
					newDate = data.date;
				}
			});
		return newDate;
	}

	useEffect(() => {
		data && setNewData(data);
	}, [data]);

	return (
		<View style={eventList.eventListControl}>
			{date === dateData(newData) &&
				rangeTime &&
				rangeTime.map((time, idx) => (
					<View style={eventList.eventOption} key={idx}>
						<Text style={eventList.timeRange}>
							{time.toString().slice(0, 5)}
						</Text>
						<View style={{ width: '100%' }}>
							{newData &&
								newData.map((data) => (
									<TouchableOpacity
										onPress={() =>
											navigation.navigate('Details', {
												idData: data._id,
												username: data.username,
												color: data.color,
											})
										}
										key={data._id}
									>
										{date === data.date && time === data.rangetime.range && (
											<Events
												title={data.title}
												desc={data.desc}
												max={data.maxtime}
												min={data.mintime}
												color={data.color}
											/>
										)}
									</TouchableOpacity>
								))}
						</View>
						<Text style={eventList.timeRange}>{time.toString().slice(6)}</Text>
					</View>
				))}
		</View>
	);
}
