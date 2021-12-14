import { useEffect, useState } from 'react';
import dailyPlannerApi from '../../api/dailyPlannerApi';

export default function usePostNote(username, input, pinned, color) {
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		username &&
			input.title &&
			input.desc &&
			(async () => {
				try {
					await dailyPlannerApi.postNote({
						username,
						title: input.title,
						note: input.desc,
						pinned,
						color,
					});
					setIsSuccess(true);
				} catch (err) {
					console.log(err);
				}
			})();
	}, [username, input.title, input.desc, pinned, color]);
	return {
		isSuccess,
	};
}
