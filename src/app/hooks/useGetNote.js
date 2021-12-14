import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function useGetNote(username) {
	const [data, setData] = useState({});

	useEffect(() => {
		username &&
			setInterval(() => {
				(async () => {
					try {
						const result = await dailyPlannerApi.getNote(username);
						setData(result.data);
					} catch (err) {
						console.log(err);
					}
				})();
			}, 3000);
	}, [username]);

	return {
		data,
	};
}
