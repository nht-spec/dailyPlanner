import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Alert,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import useEditUser from '../../hooks/useEditUser';
import PasswordField from './PasswordField/PasswordField';
import UserNameField from './UserNameField/UserNameField';

export default function EditProfilePage({ route, navigation }) {
	const { userId, userName, status } = route.params;
	const [input, setInput] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const { isChange } = useEditUser(isSubmit, userId, input, status);
	const imgProfile = require('./profile.jpg');
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	const form = useForm({
		defaultValues: {
			username: '',
			password: '',
		},
	});

	useEffect(() => {
		isChange &&
			Alert.alert('Change Profile Success', 'Please login again', [
				{
					text: 'Login Now',
					onPress: () => navigation.navigate('Auth'),
				},
			]);
	}, [isChange]);

	const handleSubmit = (values) => {
		setIsSubmit(true);
		form.reset();
		setInput(values);
	};

	return (
		<SafeAreaView style={styles.control}>
			<View style={styles.content}>
				<View style={styles.header}>
					<MaterialIcons
						size={40}
						onPress={() => navigation.goBack()}
						name='arrow-back'
					/>
					<Text style={styles.titleText}>Edit Profile</Text>
					<MaterialIcons
						name='save'
						size={40}
						onPress={form.handleSubmit(handleSubmit)}
					/>
				</View>
				<View style={styles.info}>
					<Image style={styles.img} source={imgProfile} />
					<Text style={styles.username}>{userName}</Text>
				</View>

				<View style={styles.input}>
					<Text style={styles.usernameTitle}>Username</Text>
					<UserNameField
						name='username'
						form={form}
						errors={form.formState.errors}
					/>
				</View>

				<View style={styles.input}>
					<Text style={styles.usernameTitle}>Password</Text>
					<PasswordField
						name='password'
						form={form}
						errors={form.formState.errors}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	control: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
	},
	content: {
		padding: 30,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleText: {
		fontFamily: 'RobotoBold',
		fontSize: 25,
	},
	info: {
		paddingTop: 30,
		alignItems: 'center',
	},
	img: {
		marginBottom: 10,
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	username: {
		fontFamily: 'RobotoBold',
		fontSize: 19,
		textTransform: 'capitalize',
	},
	input: {
		paddingTop: 40,
		width: '100%',
	},
	usernameTitle: {
		fontFamily: 'RobotoBold',
		color: '#5d95ca',
		fontSize: 20,
		paddingBottom: 5,
	},
});
