import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Header({ navigation }) {
	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});
	return (
		<View style={header.header}>
			<MaterialIcons
				onPress={() => navigation.goBack()}
				size={30}
				name='arrow-back-ios'
			/>
			<Text style={header.titleText}>My Profile</Text>
			<MaterialIcons size={30} name='more-vert' />
		</View>
	);
}
const header = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleText: {
		fontFamily: 'RobotoBold',
		fontSize: 20,
	},
});
