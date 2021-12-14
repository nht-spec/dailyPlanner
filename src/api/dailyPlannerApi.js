import axiosApi from './axiosApi';

const dailyPlannerApi = {
	register(params) {
		const url = 'api/auth/register';
		return axiosApi.post(url, params);
	},

	login(params) {
		const url = 'api/auth/login';
		return axiosApi.post(url, params);
	},

	getUser(id) {
		const url = `api/users/${id}`;
		return axiosApi.get(url);
	},

	postEvent(params) {
		const url = 'api/events';
		return axiosApi.post(url, params);
	},

	getEvent(userName) {
		const url = `/api/events?user=${userName}`;
		return axiosApi.get(url);
	},

	getEventById(id) {
		const url = `/api/events/${id}`;
		return axiosApi.get(url);
	},

	deletedEvent(id, params) {
		const url = `/api/events/${id}`;
		return axiosApi.delete(url, { params });
	},

	postNote(params) {
		const url = `/api/notes`;
		return axiosApi.post(url, params);
	},
	getNote(userName) {
		const url = `/api/notes?user=${userName}`;
		return axiosApi.get(url);
	},
};
export default dailyPlannerApi;
