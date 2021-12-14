import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';
import regex from '../../../../constants/regex';
import inputStyle from '../../../../shared/styles/inputStyle';

function EmailRegister({ name, form, errors }) {
	return (
		<SafeAreaView style={inputStyle.inputControl}>
			<View
				style={errors?.emailregister ? inputStyle.inputError : inputStyle.input}
			>
				<MaterialIcons
					style={
						errors?.emailregister
							? inputStyle.inputIconError
							: inputStyle.inputIcon
					}
					name='mail-outline'
					size={24}
					color='#A6A6A6'
				/>
				<InputField
					name={name}
					form={form}
					regex={regex.EMAIL_REGEX}
					messErrRequired={'Email is required'}
					messErrRegex={'email is invalid'}
					errors={form.formState.errors}
					placeholder='Email Address'
				/>
			</View>
			{Object.keys(errors).length !== 0 && (
				<Text style={inputStyle.textError}>
					{errors.emailregister?.message}
				</Text>
			)}
		</SafeAreaView>
	);
}

export default EmailRegister;
