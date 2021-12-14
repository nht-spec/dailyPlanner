import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ColorPicker({ color }) {
	const [colorPick, setColorPick] = useState('');

	useEffect(() => {
		color && color(colorPick);
	}, [colorPick]);
	return (
		<View style={colorPicker.colorList}>
			<MaterialIcons
				color='#ffa348'
				onPress={() => setColorPick('#ffa348')}
				size={45}
				name='circle'
			/>
			<MaterialIcons
				color='#7eccff'
				onPress={() => setColorPick('#7eccff')}
				size={45}
				name='circle'
			/>
			<MaterialIcons
				color='#ffa6c4'
				onPress={() => setColorPick('#ffa6c4')}
				size={45}
				name='circle'
			/>
			<MaterialIcons
				color='#1ecdc4'
				onPress={() => setColorPick('#1ecdc4')}
				size={45}
				name='circle'
			/>
			<MaterialIcons
				color='#fea4a3'
				onPress={() => setColorPick('#fea4a3')}
				size={45}
				name='circle'
			/>
			<MaterialIcons
				color='#4b6188'
				onPress={() => setColorPick('#4b6188')}
				size={45}
				name='circle'
			/>
		</View>
	);
}

const colorPicker = StyleSheet.create({
	colorList: {
		bottom: 0,
		width: '100%',
		backgroundColor: '#fefefe',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		height: 100,
		position: 'absolute',
		alignItems: 'center',
		alignContent: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
});
