import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';
import inputStyle from '../../../../shared/styles/inputStyle';

export default function UserNameLogin({ form, name, errors }) {
	return (
		<SafeAreaView style={inputStyle.inputControl}>
			<View style={errors?.username ? inputStyle.inputError : inputStyle.input}>
				<MaterialIcons
					style={
						errors?.username ? inputStyle.inputIconError : inputStyle.inputIcon
					}
					name='info-outline'
					size={24}
					color='#A6A6A6'
				/>

				<InputField
					form={form}
					name={name}
					placeholder='User Name'
					messErrRequired={'UserName is required'}
					errors={errors}
				/>
			</View>
			{Object.keys(errors).length !== 0 && (
				<Text style={inputStyle.textError}>{errors.username?.message}</Text>
			)}
		</SafeAreaView>
	);
}
