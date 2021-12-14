import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';
import inputStyle from '../../../../shared/styles/inputStyle';

function PasswordLogin({ form, name, errors }) {
	const [hidePass, setHidePass] = useState(true);

	return (
		<SafeAreaView style={inputStyle.inputControl}>
			<View
				style={
					errors?.password
						? inputStyle.inputPasswordError
						: inputStyle.inputPassword
				}
			>
				<View style={inputStyle.inputPasswordIconFlex}>
					<MaterialIcons
						style={inputStyle.inputIcon}
						name='lock-outline'
						size={26}
						color={errors?.password ? '#ab003c' : '#A6A6A6'}
					/>

					<InputField
						form={form}
						name={name}
						placeholder='User Name'
						messErrRequired={'Password is required'}
						errors={errors}
						hidepass={hidePass}
						placeholder='Password'
					/>
				</View>
				{!hidePass && (
					<MaterialIcons
						onPress={() => setHidePass(!hidePass)}
						size={28}
						color={errors?.password ? '#ab003c' : '#A6A6A6'}
						name='visibility'
					/>
				)}
				{hidePass && (
					<MaterialIcons
						onPress={() => setHidePass(!hidePass)}
						size={28}
						color={errors?.password ? '#ab003c' : '#A6A6A6'}
						name='visibility-off'
					/>
				)}
			</View>
			{Object.keys(errors).length !== 0 && (
				<Text style={inputStyle.textError}>{errors.password?.message}</Text>
			)}
		</SafeAreaView>
	);
}

export default PasswordLogin;
