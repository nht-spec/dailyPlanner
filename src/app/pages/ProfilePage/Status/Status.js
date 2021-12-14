import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
export default function Status({ staTus, statusData }) {
	const [status, setStatus] = useState('away');
	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	useEffect(() => {
		statusData && setStatus(statusData);
	}, [statusData]);

	useEffect(() => {
		staTus && staTus(status);
	}, [status]);

	return (
		<View style={styles.control}>
			<Text style={styles.text}>My Status</Text>
			<View style={styles.list}>
				<ScrollView horizontal>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#000000',
							opacity: status === 'away' ? 1 : 0.4,
							padding: 10,
							borderRadius: 30,
							marginRight: 10,
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
							onPress={() => setStatus('away')}
						>
							<Text style={{ fontSize: 20 }}>😴</Text>
							<Text
								style={{
									color: '#ffffff',
									fontSize: 20,
									fontFamily: 'RobotoBold',
									paddingLeft: 10,
								}}
							>
								Away
							</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#59bd7d',
							opacity: status === 'work' ? 1 : 0.4,
							padding: 10,
							borderRadius: 30,
							marginRight: 10,
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
							onPress={() => setStatus('work')}
						>
							<Text style={{ fontSize: 20 }}>💻</Text>
							<Text
								style={{
									color: '#ffffff',
									fontSize: 20,
									fontFamily: 'RobotoBold',
									paddingLeft: 10,
								}}
							>
								At Work
							</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#ff6839',
							opacity: status === 'playing' ? 1 : 0.4,
							padding: 10,
							borderRadius: 30,
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
							onPress={() => setStatus('playing')}
						>
							<Text style={{ fontSize: 20 }}>🎮</Text>
							<Text
								style={{
									color: '#ffffff',
									fontSize: 20,
									fontFamily: 'RobotoBold',
									paddingLeft: 10,
								}}
							>
								Playing
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	control: {
		paddingTop: 50,
		paddingBottom: 30,
	},
	list: {
		flexDirection: 'row',
	},
	text: {
		fontSize: 17,
		paddingLeft: 2,
		fontFamily: 'RobotoBold',
		paddingBottom: 17,
		color: '#d1d3d9',
	},
});
