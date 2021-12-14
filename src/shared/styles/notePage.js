import { StyleSheet } from 'react-native';
const notePage = StyleSheet.create({
	noteControl: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
	},

	noteContent: {
		padding: 20,
	},
	noteHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 30,
	},

	noteTitleText: {
		fontFamily: 'RobotoBold',
		fontSize: 35,
	},

	notesList: {
		flexGrow: 1,
		height: '100%',
	},

	textUp: {
		paddingBottom: 10,
	},
	iconAdd: {
		position: 'absolute',
		right: 20,
		top: '99%',
	},
	emptyControl: {
		alignItems: 'center',
		marginTop: 40,
	},
	titleEmpty: {
		fontFamily: 'RobotoBold',
		fontSize: 30,
		marginBottom: 10,
	},
	descEmpty: {
		fontFamily: 'RobotoMedium',
		fontSize: 18,
	},
});

export default notePage;
