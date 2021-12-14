import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ color, navigation }) {
	return (
		<View style={headerStyle.header}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={headerStyle.titleText}>Create</Text>
				<Text
					style={{
						fontSize: 30,
						fontFamily: 'RobotoBold',
						color: color ? color : '#c6756e',
					}}
				>
					Events
				</Text>
			</View>
			<MaterialIcons
				onPress={() => navigation.goBack()}
				name='close'
				size={30}
				color='#636268'
			/>
		</View>
	);
}

const headerStyle = StyleSheet.create({
	header: {
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		backgroundColor: '#222223',
		height: 70,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	titleText: {
		fontFamily: 'RobotoBold',
		fontSize: 30,
		color: '#ffffff',
		paddingRight: 5,
	},
	titleTexTwo: {
		fontSize: 30,
		fontFamily: 'RobotoBold',
		color: '#c6756e',
	},
});
