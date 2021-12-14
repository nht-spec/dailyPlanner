import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import dailyPlannerApi from '../../api/dailyPlannerApi';
export default function useUserRegister(params) {
	const [registerSuccess, setRegisterSuccess] = useState(false);
	const [userDataRegister, setUserDataRegister] = useState([]);

	useEffect(() => {
		params.usernameregister &&
			params.passwordregister &&
			(async () => {
				try {
					const result = await dailyPlannerApi.register({
						email: params.emailregister,
						username: params.usernameregister,
						password: params.passwordregister,
					});
					setUserDataRegister(result.data);
					if (result.data) {
						return Alert.alert('Register Success', '', [
							{
								text: 'Login Now',
								onPress: () => setRegisterSuccess(true),
							},
						]);
					}
				} catch (err) {
					if (err.message) {
						return Alert.alert('Register Fail', 'Please try again');
					}
				}
			})();
	}, [params.usernameregister, params.passwordregister]);

	return {
		userDataRegister,
		registerSuccess,
	};
}
