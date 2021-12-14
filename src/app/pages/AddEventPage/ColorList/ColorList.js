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
				onPress={() => setColorChoose('#ffa348')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#ffa348'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#7eccff')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#7eccff'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#ffa6c4')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#ffa6c4'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#1ecdc4')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#1ecdc4'
			/>
			<MaterialIcons
				onPress={() => setColorChoose('#fea4a3')}
				size={40}
				style={colorStyles.color}
				name='circle'
				color='#fea4a3'
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
		backgroundColor: '#f3f4f5',
		marginRight: 30,
		marginLeft: 20,
		marginBottom: 20,
		flexDirection: 'row',
	},
});
