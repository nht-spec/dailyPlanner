import React, { useEffect, useState } from 'react';
import {
	Button,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import useDeletedEvent from '../../hooks/useDeletedEvent';
import useGetDetailEvent from '../../hooks/useGetDetailEvent';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function DetailPage({ route, navigation }) {
	const [deletEvent, setDeletEvent] = useState('');
	const { idData, username, color } = route.params;
	const { eventDetail } = useGetDetailEvent(idData);
	const { isDeleted } = useDeletedEvent(deletEvent, username);
	const editImg = require('./pencil.png');

	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	useEffect(() => {
		isDeleted && navigation.goBack();
	}, [isDeleted]);

	const handeDeleted = () => {
		if (eventDetail.event !== undefined) {
			setDeletEvent(eventDetail.event._id);
		}
	};

	return (
		<SafeAreaView
			style={{ backgroundColor: '#ffffff', width: '100%', height: '100%' }}
		>
			<View style={{ padding: 20 }}>
				<View style={styles.header}>
					<MaterialIcons
						style={styles.image}
						onPress={() => navigation.goBack()}
						size={30}
						name='close'
					/>
					<Text style={styles.titleText}>Event Detail</Text>
					<TouchableOpacity
						style={styles.edit}
						onPress={() =>
							navigation.navigate('ChangeEvent', {
								username,
								idData,
							})
						}
					>
						<Image style={styles.image} source={editImg} />
					</TouchableOpacity>
				</View>
				{eventDetail.event !== undefined && (
					<View style={styles.content}>
						<View style={styles.infotitle}>
							<Text
								style={{
									fontFamily: 'RobotoBold',
									fontSize: 20,
									color,
									paddingBottom: 25,
								}}
							>
								Event Name
							</Text>
							<Text
								style={{
									fontSize: 50,
									fontWeight: '700',
									color: '#3e4247',
									fontFamily: 'RobotoBold',
								}}
							>
								{eventDetail?.event.title}
							</Text>
						</View>

						<View style={styles.infotitle}>
							<Text
								style={{
									fontFamily: 'RobotoBold',
									fontSize: 20,
									color,
									paddingBottom: 25,
								}}
							>
								Sub Event
							</Text>
							<Text
								style={{
									fontSize: 35,
									fontWeight: '500',
									color: '#3e4247',
									fontFamily: 'RobotoMedium',
								}}
							>
								{eventDetail?.event.desc}
							</Text>
						</View>

						<View style={styles.infoEvent}>
							<MaterialIcons
								style={styles.icon}
								color={color}
								name='calendar-today'
							/>
							<Text
								style={{
									fontSize: 19,
									fontWeight: '500',
									color: '#3e4247',
									fontFamily: 'RobotoMedium',
								}}
							>
								{eventDetail?.event.date}
							</Text>
						</View>

						<View style={styles.infoEvent}>
							<MaterialIcons
								style={styles.icon}
								color={color}
								name='schedule'
							/>
							<Text
								style={{
									fontSize: 19,
									fontWeight: '500',
									color: '#3e4247',
									fontFamily: 'RobotoMedium',
								}}
							>
								{eventDetail?.event.rangetime.range}
							</Text>
						</View>
						<Button onPress={handeDeleted} title='Deleted' />
					</View>
				)}
				<View
					style={{
						height: 30,
						width: 100,

						borderTopRightRadius: 40,
						borderBottomRightRadius: 40,
						top: 157,
						left: 0,
						backgroundColor: color,
						position: 'absolute',
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 100,
	},
	titleText: {
		fontFamily: 'RobotoBold',
		fontSize: 20,
		textTransform: 'uppercase',
		letterSpacing: 2,
	},

	image: {
		width: 25,
		height: 25,
	},
	infoEvent: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 40,
	},
	icon: {
		paddingLeft: 40,
		paddingRight: 40,
		fontSize: 25,
		// color: '#d3d5d7',
	},
	infotitle: {
		paddingLeft: 106,
		paddingBottom: 30,
	},
	titleEvent: {
		fontFamily: 'RobotoBold',
		fontSize: 20,
		color: '#c2c3c5',
		paddingBottom: 25,
	},
	edit: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		width: 40,
		height: 40,
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		backgroundColor: '#ffffff',
		elevation: 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
});
