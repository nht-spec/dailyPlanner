import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'http://40.65.182.95/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		mode: 'no-cors',
	},
});

export default axiosApi;
