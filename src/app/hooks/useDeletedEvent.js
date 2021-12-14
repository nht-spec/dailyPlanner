import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useDeletedEvent(id, username) {
	const [isDeleted, setIsDeleted] = useState(false);

	useEffect(() => {
		id &&
			username &&
			axios
				.delete(`http://40.65.182.95/api/events/${id}`, {
					data: {
						username,
					},
				})
				.then((response) => setIsDeleted(true))
				.catch((error) => {
					setErrorMessage(error.message);
					console.error('There was an error!', error);
				});
	}, [id]);

	return {
		isDeleted,
	};
}
