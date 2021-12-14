import { StyleSheet } from 'react-native';

const addNotePage = StyleSheet.create({
	control: {
		width: '100%',
		height: '100%',
		backgroundColor: '#ffffff',
	},
	content: {
		width: '100%',
		position: 'relative',
		padding: 20,
	},
	btnBack: {
		paddingBottom: 15,
	},
	text: {
		fontSize: 30,
		fontFamily: 'RobotoBold',
	},
	iconAdd: {
		position: 'absolute',
		top: '370%',
		left: '50%',
	},
});

export default addNotePage;
