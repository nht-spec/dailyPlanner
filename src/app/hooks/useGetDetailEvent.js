import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function useGetDetailEvent(id) {
	const [eventDetail, setEventDetail] = useState({});

	useEffect(() => {
		id &&
			(async () => {
				try {
					const result = await dailyPlannerApi.getEventById(id);
					setEventDetail(result.data);
				} catch (err) {
					console.log('some thing wrong try again');
				}
			})();
	}, [id]);

	return {
		eventDetail,
	};
}
