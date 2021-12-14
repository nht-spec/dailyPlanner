import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaxTime from '../../../components/MaxTime/MaxTime';
import MinTime from '../../../components/MinTime/MinTime';

export default function TimeRange({ mintime, maxtime, color }) {
	const [minTime, setMinTime] = useState(0);
	const [maxTime, setMaxTime] = useState(0);

	useEffect(() => {
		mintime && mintime(minTime);
		maxtime && maxtime(maxTime);
	}, [minTime, maxTime, mintime, maxtime]);

	return (
		<View style={eventPage.timeSetControl}>
			<Text
				style={{
					fontFamily: 'RobotoBold',
					fontSize: 18,
					color: color ? color : '#f98e86',
				}}
			>
				Start:
			</Text>
			<MinTime mintime={setMinTime} />
			<Text
				style={{
					fontFamily: 'RobotoBold',
					fontSize: 18,
					color: color ? color : '#f98e86',
				}}
			>
				End:
			</Text>
			<MaxTime maxtime={setMaxTime} />

			{/* {checkTime && <Text>Invalid Time plese set again</Text>} */}
		</View>
	);
}
const eventPage = StyleSheet.create({
	timeSetControl: {
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 12,
		backgroundColor: '#ebecfa',
		marginRight: 30,
		marginLeft: 20,
		marginBottom: 20,
		flexDirection: 'row',
	},
});
