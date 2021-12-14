import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import regex from '../../../../constants/regex';
import InputField from '../../../../shared/InputField/InputField';
import inputStyle from '../../../../shared/styles/inputStyle';

function PasswordRegister({ name, form, errors }) {
	const [hidePass, setHidePass] = useState(true);

	return (
		<SafeAreaView style={inputStyle.inputControl}>
			<View
				style={
					errors?.passwordregister
						? inputStyle.inputPasswordError
						: inputStyle.inputPassword
				}
			>
				<View style={inputStyle.inputPasswordIconFlex}>
					<MaterialIcons
						style={inputStyle.inputIcon}
						name='lock-outline'
						size={26}
						color={errors?.passwordregister ? '#ab003c' : '#A6A6A6'}
					/>
					<InputField
						regex={regex.PASSWORD_REGEX}
						name={name}
						form={form}
						hidepass={hidePass}
						messErrRequired={'Password is required'}
						messErrRegex={
							'Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
						}
						errors={form.formState.errors}
						placeholder='Password'
					/>
				</View>
				{!hidePass && (
					<MaterialIcons
						onPress={() => setHidePass(!hidePass)}
						size={28}
						color={errors?.passwordregister ? '#ab003c' : '#A6A6A6'}
						name='visibility'
					/>
				)}
				{hidePass && (
					<MaterialIcons
						onPress={() => setHidePass(!hidePass)}
						size={28}
						color={errors?.passwordregister ? '#ab003c' : '#A6A6A6'}
						name='visibility-off'
					/>
				)}
			</View>
			{Object.keys(errors).length !== 0 && (
				<Text style={inputStyle.textError}>
					{errors.passwordregister?.message}
				</Text>
			)}
		</SafeAreaView>
	);
}

export default PasswordRegister;
