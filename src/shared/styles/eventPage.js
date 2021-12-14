import { StyleSheet } from 'react-native';

const eventPage = StyleSheet.create({
	eventPageControl: {
		backgroundColor: '#000000',
		position: 'relative',
	},
	content: {
		backgroundColor: '#1c1c1e',
	},
	btnCreateControl: {
		position: 'absolute',
		width: '100%',
		height: 50,
		top: 600,
		paddingLeft: 15,
		paddingRight: 15,
	},

	btnText: {
		fontFamily: 'RobotoBold',
		fontSize: 25,
		color: '#ffffff',
	},
	inputEventTile: {
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},

	titleTime: {
		fontFamily: 'RobotoBold',
		fontSize: 25,
		color: '#7e7e80',
		paddingLeft: 15,
		paddingBottom: 20,
	},
});

export default eventPage;
