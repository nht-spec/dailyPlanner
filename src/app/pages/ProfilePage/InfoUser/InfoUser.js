import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
export default function InfoUser({
	navigation,
	userName,
	userId,
	userData,
	status,
}) {
	const imgProfile = require('../profile.jpg');

	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});
	return (
		<View style={infoUser.info}>
			<View style={infoUser.imageControl}>
				<Image style={infoUser.imgUser} source={imgProfile} />
			</View>
			<View style={{ paddingLeft: 20 }}>
				<Text style={infoUser.nameText}>{userData.username}</Text>
				<Text style={infoUser.emailText}>{userData.email}</Text>
			</View>
			<MaterialIcons
				size={21}
				color='#d2d2d2'
				style={{ position: 'absolute', right: 40, bottom: 65 }}
				onPress={() =>
					navigation.navigate('Edit', {
						userName,
						userId,
						status,
					})
				}
				name='edit'
			/>
		</View>
	);
}
const infoUser = StyleSheet.create({
	info: {
		paddingTop: 60,
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageControl: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		width: 110,
		height: 110,
		backgroundColor: '#ffffff',
		borderRadius: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgUser: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},
	nameText: {
		fontFamily: 'RobotoBold',
		fontSize: 20,
		paddingBottom: 20,
		textTransform: 'capitalize',
	},
	emailText: {
		fontFamily: 'RobotoMedium',
		fontSize: 15,
		textTransform: 'capitalize',
		color: '#c8c8c9',
	},
});
