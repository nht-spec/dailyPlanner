import { StyleSheet } from 'react-native';

const btnAddEvent = StyleSheet.create({
	background: {
		color: '#f7dff7',
		borderRadius: 30,
	},

	bold: {
		fontWeight: 'bold',
	},

	border: {
		borderColor: '#000000',
		borderStyle: 'dashed',
		borderRadius: 10,
		borderWidth: 1,
		alignSelf: 'baseline',
		alignItems: 'center',
	},

	borderAddBtn: {
		borderColor: '#e3e3e3',
		borderStyle: 'dashed',
		borderRadius: 10,
		borderWidth: 3,
		alignSelf: 'baseline',
		marginHorizontal: 22,
		marginBottom: 8,
		justifyContent: 'center',
	},

	text: {
		fontSize: 35,
		alignItems: 'center',
		color: '#b5b5b5',
	},

	button: {
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		height: 70,
		width: 70,
	},

	buttonTouchHighlight: {
		height: 70,
		width: 70,
		borderRadius: 10,
	},

	buttonAddName: {
		color: '#b5b5b5',
		fontWeight: 'bold',
	},
});

export default btnAddEvent;
