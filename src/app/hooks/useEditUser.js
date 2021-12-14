import axios from 'axios';
import { useEffect, useState } from 'react';
import useChangeEvent from './useChangeEvent';

export default function useEditUser(isSubmit, id, input, status) {
	const [isChanges, setIsChanges] = useState(false);
	const [data, setData] = useState({});
	const { isChange } = useChangeEvent(
		input.username,
		input,
		minTime,
		maxTime,
		color,
		id,
		isSubmit
	);

	useEffect(() => {
		input.username &&
			setData((prevFilters) => ({
				...prevFilters,
				username: input.username,
			}));
	}, [input.username]);

	useEffect(() => {
		id &&
			setData((prevFilters) => ({
				...prevFilters,
				userId: id,
			}));
	}, [id]);

	useEffect(() => {
		input.password &&
			setData((prevFilters) => ({
				...prevFilters,
				password: input.password,
			}));
	}, [input.password]);

	useEffect(() => {
		status &&
			setData((prevFilters) => ({
				...prevFilters,
				status,
			}));
	}, [status]);

	useEffect(() => {
		isSubmit &&
			axios({
				method: 'put',
				url: `http://40.65.182.95/api/users/${id}`,
				data: data,
				config: { headers: { 'Content-Type': 'multipart/form-data' } },
			})
				.then(function (response) {
					if (response.status === 200) {
						setIsChanges(true);
					}
				})
				.catch(function (response) {
					console.log(response);
				});
	}, [data, id]);

	return {
		isChanges,
	};
}
