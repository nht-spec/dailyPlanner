import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function Account({ navigation }) {
	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});
	return (
		<View style={{ paddingTop: 36 }}>
			<Text style={styles.title}>My Account</Text>
			<Text onPress={() => navigation.navigate('Auth')} style={styles.switch}>
				Switch to Other Account
			</Text>
			<Text onPress={() => navigation.navigate('Intro')} style={styles.logout}>
				Log Out
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	title: {
		fontFamily: 'RobotoBold',
		color: '#d8d9de',
		fontSize: 18,
		paddingBottom: 20,
	},
	switch: {
		color: '#3f77ff',
		fontFamily: 'RobotoBold',
		paddingBottom: 19,
		fontSize: 20,
	},
	logout: {
		color: '#ff6839',
		fontSize: 20,
		fontFamily: 'RobotoBold',
	},
});
