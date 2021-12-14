import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function useChangeEvent(
	username,
	input,
	minTime,
	maxTime,
	color,
	idData,
	isSubmit
) {
	const [isChange, setIsChange] = useState(false);
	const [data, setData] = useState({});

	let formatTime = `${moment(minTime).format('HH:mm')} ${moment(maxTime).format(
		'HH:mm'
	)}`;

	useEffect(() => {
		username &&
			setData((prevFilters) => ({
				...prevFilters,
				username,
			}));
	}, [username]);

	useEffect(() => {
		input.title &&
			setData((prevFilters) => ({
				...prevFilters,
				title: input.title,
			}));
		input.title === '' &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.title;
				return newFilter;
			});

		input.desc &&
			setData((prevFilters) => ({
				...prevFilters,
				desc: input.desc,
			}));

		input.desc === '' &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.desc;
				return newFilter;
			});
	}, [input]);

	useEffect(() => {
		minTime !== 0 &&
			setData((prevFilters) => ({
				...prevFilters,
				mintime: minTime,
			}));

		minTime === 0 &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.mintime;
				return newFilter;
			});
	}, [minTime]);

	useEffect(() => {
		maxTime !== 0 &&
			setData((prevFilters) => ({
				...prevFilters,
				maxtime: maxTime,
			}));

		maxTime === 0 &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.maxtime;
				return newFilter;
			});
	}, [maxTime]);

	useEffect(() => {
		maxTime !== 0 && minTime !== 0;
		setData((prevFilters) => ({
			...prevFilters,
			rangetime: {
				start: minTime,
				end: maxTime,
				range: formatTime,
			},
		}));

		maxTime === 0 &&
			minTime === 0 &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.rangetime;
				return newFilter;
			});
	}, [maxTime, minTime]);

	useEffect(() => {
		color &&
			setData((prevFilters) => ({
				...prevFilters,
				color,
			}));

		color === '' &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.color;
				return newFilter;
			});
	}, [color]);

	useEffect(() => {
		isSubmit &&
			axios({
				method: 'put',
				url: `http://40.65.182.95/api/events/${idData}`,
				data: data,
				config: { headers: { 'Content-Type': 'multipart/form-data' } },
			})
				.then(function (response) {
					if (response.status === 200) {
						setIsChange(true);
					}
				})
				.catch(function (response) {
					console.log(response);
				});
	}, [data, idData]);

	return {
		isChange,
	};
}
