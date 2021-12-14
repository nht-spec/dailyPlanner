import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import useUserLogin from '../../hooks/useUserLogin';
import useUserRegister from '../../hooks/useUserRegister';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './styles';

const MODE = {
	LOGIN: 'login',
	REGISTER: 'register',
};

function Auth({ navigation }) {
	const [mode, setMode] = useState(MODE.LOGIN);
	const [loginData, setLoginData] = useState([]);
	const [registerData, setRegisterData] = useState([]);
	const { userData } = useUserLogin(loginData);
	const { registerSuccess } = useUserRegister(registerData);

	const handlesubmit = (values) => {
		values && setLoginData(values);
	};

	useEffect(() => {
		registerSuccess && setMode(MODE.LOGIN);
	}, [registerSuccess]);

	useEffect(() => {
		userData.user &&
			navigation.push('Home', {
				userId: userData.user._id,
				userName: userData.user.username,
			});
	}, [userData]);

	return (
		<View style={{ backgroundColor: '#ffffff' }}>
			<SafeAreaView style={styles.content}>
				<View style={styles.modeControl}>
					<Text
						onPress={() => setMode(MODE.LOGIN)}
						style={mode === MODE.LOGIN ? styles.modeText : styles.notModeText}
					>
						Login
					</Text>

					<Text
						onPress={() => setMode(MODE.REGISTER)}
						style={
							mode === MODE.REGISTER ? styles.modeText : styles.notModeText
						}
					>
						Register
					</Text>
				</View>
				<Text style={styles.textTerm}>
					By signing in you are agreeing our
					<Text
						onPress={() => navigation.navigate('Temp')}
						style={styles.textTermLink}
					>
						{' '}
						Terms and Privacy Policy
					</Text>
				</Text>
				{mode === MODE.LOGIN && <Login handlesubmit={handlesubmit} />}
				{mode === MODE.REGISTER && <Register handlesubmit={setRegisterData} />}
			</SafeAreaView>
		</View>
	);
}

export default Auth;
