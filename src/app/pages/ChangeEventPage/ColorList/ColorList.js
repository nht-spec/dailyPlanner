import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ColorList({ colorchoose }) {
	const [colorChoose, setColorChoose] = useState('');

	if (colorChoose) {
		colorchoose && colorchoose(colorChoose);
	}

	return (
		<View style={colorStyles.colorControl}>
			<MaterialIcons
				onPress={() => setColorChoose('#f98e88')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#f98e88'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#5d95ca')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#5d95ca'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#54a348')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#54a348'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#aa9dab')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#aa9dab'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#9a3c35')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#9a3c35'
			/>
		</View>
	);
}
const colorStyles = StyleSheet.create({
	colorControl: {
		borderRadius: 20,
		alignItems: 'center',
		padding: 12,
		justifyContent: 'space-around',
		backgroundColor: '#ebecfa',
		marginRight: 30,
		marginLeft: 20,
		marginBottom: 20,
		flexDirection: 'row',
	},
	color: {},
});
