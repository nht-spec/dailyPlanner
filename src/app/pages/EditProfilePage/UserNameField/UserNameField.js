import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';

export default function UserNameField({ name, form, errors }) {
	return (
		<View>
			<InputField
				placeholder='Change your name here...'
				name={name}
				form={form}
				size={15}
				fontFamily='RobotoBold'
				weight='bold'
				messErrRequired={'Username is required'}
				errors={errors}
				multiline={true}
			/>
			<View style={styles.borderBottom} />
			{Object.keys(errors).length !== 0 && (
				<Text style={{ color: '#ab003c' }}>{errors.username?.message}</Text>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	borderBottom: {
		marginTop: 4,
		marginBottom: 4,
		borderWidth: 0.5,
	},
});
