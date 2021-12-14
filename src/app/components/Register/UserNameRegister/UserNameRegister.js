import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';
import inputStyle from '../../../../shared/styles/inputStyle';

function UserNameRegister({ name, form, errors }) {
	return (
		<SafeAreaView style={inputStyle.inputControl}>
			<View
				style={
					errors?.usernameregister ? inputStyle.inputError : inputStyle.input
				}
			>
				<MaterialIcons
					style={
						errors?.usernameregister
							? inputStyle.inputIconError
							: inputStyle.inputIcon
					}
					name='info-outline'
					size={24}
					color={errors?.usernameregister ? '#ab003c' : '#A6A6A6'}
				/>
				<InputField
					name={name}
					form={form}
					messErrRequired={'UserName is required'}
					errors={form.formState.errors}
					placeholder='User Name'
				/>
			</View>

			{Object.keys(errors).length !== 0 && (
				<Text style={inputStyle.textError}>
					{errors?.usernameregister?.message}
				</Text>
			)}
		</SafeAreaView>
	);
}

export default UserNameRegister;
