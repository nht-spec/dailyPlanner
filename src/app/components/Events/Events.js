import { useFonts } from 'expo-font';
import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import event from '../../../shared/styles/event';
import Progress from './Progress/Progress';

export default function Events({ title, desc, max, min, color }) {
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	if (!loaded) {
		return null;
	}
	let maxTime = new Date(max).getTime();
	let nowTime = new Date().getTime();
	let minTime = new Date(min).getTime();
	let currentTime = maxTime - nowTime;
	let sumTime = maxTime - minTime;

	const convertTime = `${moment(min).format('HH:mm')}-${moment(max).format(
		'HH:mm'
	)}`;
	const timeCount1 = `${moment(max).endOf('minutes').from(min)}`;
	const format = timeCount1.slice(3);
	return (
		<View
			style={{
				marginBottom: 20,
				backgroundColor: color ? color : '#FFE6E4',
				height: 140,
				borderRadius: 15,
				marginLeft: 28,
				padding: 18,
				shadowColor: '#ffd7c8',
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.18,
				shadowRadius: 1.0,
				elevation: 1,
			}}
		>
			<View style={{ flexDirection: 'row', paddingBottom: 5 }}>
				<Text style={event.convert}>{convertTime}</Text>
				<Text style={event.format}>{`( ${format} )`}</Text>
			</View>
			<Text
				style={{
					fontFamily: 'RobotoBold',
					textTransform: 'capitalize',
					fontSize: 18,
					color: '#464648',
				}}
			>
				{title}
			</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Progress
					currentTime={currentTime}
					step={currentTime ? currentTime : 4}
					steps={sumTime ? sumTime : 10}
					height={6}
				/>
				{currentTime <= 0 && <Text>Overlapping</Text>}
			</View>
			<Text
				style={{
					paddingTop: 5,
					color: '#5c5b61',
					fontFamily: 'RobotoMedium',
				}}
			>
				{desc}
			</Text>
		</View>
	);
}
