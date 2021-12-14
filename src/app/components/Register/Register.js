import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import btnSubmit from '../../../shared/styles/btnSubmit';
import ImageBackGround from '../ImageBackGround/ImageBackGround';
import EmailRegister from './EmailRegister/EmailRegister';
import PasswordRegister from './PasswordRegister/PasswordRegister';
import UserNameRegister from './UserNameRegister/UserNameRegister';

function Register({ handlesubmit }) {
	const form = useForm({
		defaultValues: {
			emailregister: '',
			usernameregister: '',
			passwordregister: '',
		},
	});

	const handleSubmit = (values) => {
		handlesubmit && handlesubmit(values);
		form.reset();
	};

	return (
		<SafeAreaView style={{ marginTop: 47 }}>
			<EmailRegister
				name='emailregister'
				form={form}
				errors={form.formState.errors}
			/>

			<UserNameRegister
				name='usernameregister'
				form={form}
				errors={form.formState.errors}
			/>

			<PasswordRegister
				name='passwordregister'
				form={form}
				errors={form.formState.errors}
			/>

			<TouchableHighlight
				style={btnSubmit.btnControl}
				onPress={form.handleSubmit(handleSubmit)}
				underlayColor='#fff'
			>
				<Text style={btnSubmit.btn}>Register</Text>
			</TouchableHighlight>
			<ImageBackGround />
		</SafeAreaView>
	);
}

export default Register;
