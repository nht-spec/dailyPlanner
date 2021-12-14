import { useEffect, useState } from 'react';

export default function useRangeTime(data, date) {
	const [rangeTime, setRangTime] = useState([]);
	const [dateTime, setDateTime] = useState([]);
	useEffect(() => {
		let newObj = {};

		data &&
			data.forEach((data) => {
				if (date === data.date) {
					if (newObj[data.rangetime.range]) {
						newObj[data.rangetime.range] += 1;
					} else {
						newObj[data.rangetime.range] = 1;
					}
				}
			});
		setRangTime(Object.keys(newObj));
	}, [data]);

	return { rangeTime, dateTime };
}
