import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function useUserLogin(params) {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		Object.keys(params).length !== 0 &&
			(async () => {
				try {
					const result = await dailyPlannerApi.login(params);
					setUserData(result.data);
				} catch (err) {
					if (err.message) {
						return Alert.alert('Incorrect username or password');
					}
				}
			})();
	}, [params]);
	return {
		userData,
	};
}
