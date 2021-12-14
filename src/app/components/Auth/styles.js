import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	content: {
		marginTop: 49,
		marginLeft: 45,
		marginRight: 52,
		backgroundColor: '#ffffff',
	},
	title: {
		fontSize: 40,
		lineHeight: 56,
		textAlign: 'center',
		marginBottom: 10,
	},
	textTerm: {
		fontSize: 20,
		lineHeight: 35,
		textAlign: 'center',

		color: '#6B5E5E',
	},
	textTermLink: {
		color: '#036BB9',
	},
	modeControl: {
		flexDirection: 'row',
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 30,
	},
	modeText: {
		fontSize: 25,
		lineHeight: 35,
		color: '#036BB9',
		marginLeft: 29,
		borderBottomColor: '#000000',
		borderBottomWidth: 1,
	},
	notModeText: {
		fontSize: 25,
		lineHeight: 35,
		color: '#A6A6A6',
		marginLeft: 29,
	},
});

export default styles;
