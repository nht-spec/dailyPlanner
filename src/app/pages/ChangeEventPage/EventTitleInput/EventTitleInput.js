import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';

export default function EventTitleInput({ name, form, errors, color }) {
	return (
		<View style={titleInputStyle.inputEventTile}>
			<View style={titleInputStyle.iconControl}>
				<MaterialIcons
					color={color ? color : '#c1797a'}
					size={40}
					name='event-available'
				/>
			</View>
			<View style={{ width: '100%' }}>
				<InputField
					placeholder='Enter Your Event'
					name={name}
					form={form}
					size={20}
					color='#ffffff'
					fontFamily='RobotoBold'
					weight='bold'
					messageError={'Event title is required'}
					errors={errors}
				/>
				<View style={titleInputStyle.borderBottom} />
			</View>
		</View>
	);
}
const titleInputStyle = StyleSheet.create({
	inputEventTile: {
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},

	iconControl: {
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
		backgroundColor: '#2c2c2e',
		width: 50,
		height: 50,
		borderRadius: 12,
	},
	borderBottom: {
		width: '75%',
		paddingRight: 10,
		marginTop: 5,
		borderWidth: 1,
		borderColor: '#434244',
	},
});
