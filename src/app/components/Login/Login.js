import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import btnSubmit from '../../../shared/styles/btnSubmit';
import ImageBackGround from '../ImageBackGround/ImageBackGround';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import PasswordLogin from './PasswordLogin/PasswordLogin';
import RememberLogin from './RememberLogin/RememberLogin';
import styles from './styles';
import UserNameLogin from './UserNameLogin/UserNameLogin';

export default function Login({ handlesubmit }) {
	const form = useForm({
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const handleSubmit = (values) => {
		handlesubmit && handlesubmit(values);
		form.reset();
		if (form.reset) {
			isResetLogin && isResetLogin(true);
		}
	};

	return (
		<SafeAreaView style={{ marginTop: 47 }}>
			<UserNameLogin
				name='username'
				form={form}
				errors={form.formState.errors}
			/>
			<PasswordLogin
				name='password'
				form={form}
				errors={form.formState.errors}
			/>

			<View style={styles.reandforgotPassWord}>
				<RememberLogin />
				<ForgotPassword />
			</View>

			<TouchableHighlight
				style={btnSubmit.btnControl}
				onPress={form.handleSubmit(handleSubmit)}
				underlayColor='#fff'
			>
				<Text style={btnSubmit.btn}>Login</Text>
			</TouchableHighlight>

			<ImageBackGround />
		</SafeAreaView>
	);
}
