import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useChangeNote(
	username,
	input,
	pinned,
	color,
	isSubmit,
	id
) {
	const [isChange, setIsChange] = useState(false);
	const [data, setData] = useState({});

	useEffect(() => {
		username &&
			setData((prevFilters) => ({
				...prevFilters,
				username,
			}));
	}, [username]);

	useEffect(() => {
		setData((prevFilters) => ({
			...prevFilters,
			pinned,
		}));
	}, [pinned]);

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
				note: input.desc,
			}));

		input.desc === '' &&
			setData((prevFilters) => {
				const newFilter = { ...prevFilters };
				delete newFilter.note;
				return newFilter;
			});
	}, [input]);

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
				url: `http://40.65.182.95/api/notes/${id}`,
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
	}, [data, id]);

	return {
		isChange,
	};
}
