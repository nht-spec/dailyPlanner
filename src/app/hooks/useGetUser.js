import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function useGetUser(userid) {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		userid &&
			(async () => {
				try {
					const result = await dailyPlannerApi.getUser(userid);
					setUserData(result.data);
				} catch (err) {
					console.log(err);
				}
			})();
	}, [userid]);
	return {
		userData,
	};
}
