import moment from 'moment';
import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';
export default function usePostEvent(
	date,
	data,
	input,
	mintime,
	maxtime,
	username,
	color
) {
	const [eventPost, setEventPost] = useState({});
	const [minTime, setMinTime] = useState(0);
	const [maxTime, setMaxTime] = useState(0);
	const [rangeFormat, setRangeFormat] = useState('');

	useEffect(() => {
		if (mintime && maxtime) {
			setRangeFormat(
				`${moment(mintime).format('HH:mm')} ${moment(maxtime).format('HH:mm')}`
			);
			setMinTime(mintime);
			setMaxTime(maxtime);
		}
	}, [data, mintime, maxtime]);

	console.log(color);
	useEffect(() => {
		data &&
			data.length !== 0 &&
			data.forEach((data) => {
				if (data.rangetime.start <= minTime && data.rangetime.end >= maxTime) {
					setMinTime(data.rangetime.start);
					setMaxTime(data.rangetime.end);
					setRangeFormat(data.rangetime.range);
				}
			});
	}, [minTime, maxTime]);

	useEffect(() => {
		maxTime &&
			minTime &&
			input.title &&
			input.desc &&
			rangeFormat &&
			(async () => {
				try {
					const result = await dailyPlannerApi.postEvent({
						date,
						mintime,
						maxtime,
						username,
						title: input.title,
						desc: input.desc,
						rangetime: {
							start: minTime,
							end: maxTime,
							range: rangeFormat,
						},
						color,
					});
					setEventPost(result.data);
				} catch (err) {
					console.log(err);
				}
			})();
	}, [maxTime, minTime, input.title, input.desc, rangeFormat, color]);

	return { eventPost };
}
