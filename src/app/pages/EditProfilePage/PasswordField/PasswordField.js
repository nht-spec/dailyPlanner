import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import regex from '../../../../constants/regex';
import InputField from '../../../../shared/InputField/InputField';

export default function PasswordField({ name, form, errors }) {
	return (
		<View>
			<InputField
				placeholder='Change your password here...'
				name={name}
				form={form}
				size={15}
				fontFamily='RobotoBold'
				weight='bold'
				errors={errors}
				hidepass={true}
				regex={regex.PASSWORD_REGEX}
				messErrRequired={'Password is required'}
				messErrRegex={
					'Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
				}
			/>
			<View style={styles.borderBottom} />

			{Object.keys(errors).length !== 0 && (
				<Text style={{ color: '#ab003c' }}>{errors.password?.message}</Text>
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
