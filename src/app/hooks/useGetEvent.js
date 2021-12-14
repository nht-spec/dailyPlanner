import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function useGetEvent(userName) {
	const [eventData, setEventData] = useState([]);
	useEffect(() => {
		userName &&
			setInterval(() => {
				(async () => {
					try {
						const result = await dailyPlannerApi.getEvent(userName);
						setEventData(result.data);
					} catch (err) {
						console.log(err);
					}
				})();
			}, 4000);
	}, [userName]);

	return {
		eventData,
	};
}
