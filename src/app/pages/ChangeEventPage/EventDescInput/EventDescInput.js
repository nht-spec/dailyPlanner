import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';

export default function EventDescInput({ form, name, errors, color }) {
	const [loaded] = useFonts({
		RobotoBold: require('../../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	return (
		<View style={eventDescStyle.eventDescControl}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: color ? color : '#f98e86',
					height: 50,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					paddingLeft: 15,
				}}
			>
				<MaterialIcons size={25} color='#ffffff' name='add-circle-outline' />
				<Text style={eventDescStyle.text}>Change SubEvent</Text>
			</View>
			<View style={eventDescStyle.inputFiled}>
				<InputField
					placeholder='Change notes, meeting links or phone numbers...'
					size={20}
					width={'100%'}
					color={'#545355'}
					name={name}
					form={form}
					messageError={'Event desc title is required'}
					errors={errors}
				/>
			</View>
		</View>
	);
}
const eventDescStyle = StyleSheet.create({
	eventDescControl: {
		marginRight: 30,
		marginLeft: 20,
	},
	text: {
		fontSize: 23,
		fontFamily: 'RobotoBold',
		marginLeft: 10,
		color: '#ffffff',
	},
	inputFiled: {
		backgroundColor: '#2c2c2e',
		height: '44%',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		padding: 12,
	},
});
