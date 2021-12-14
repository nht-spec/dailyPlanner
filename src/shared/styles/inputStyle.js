import { StyleSheet } from 'react-native';
const inputStyle = StyleSheet.create({
	inputControl: {
		marginBottom: 38,
		position: 'relative',
	},

	input: {
		borderBottomColor: '#A6A6A6',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},

	inputError: {
		borderBottomColor: '#ab003c',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},

	inputPassword: {
		borderBottomColor: '#A6A6A6',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	inputPasswordError: {
		borderBottomColor: '#ab003c',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputPasswordIconFlex: {
		flexDirection: 'row',
	},

	inputIcon: {
		paddingRight: 11,
	},
	textError: {
		paddingTop: 5,
		color: '#ab003c',
	},
	inputIconError: {
		paddingRight: 11,
		color: '#ab003c',
	},

	imgControl: {
		height: 321,
		flexDirection: 'column',
		position: 'relative',
		justifyContent: 'center',
	},
	img: {
		width: '100%',
		height: '100%',
	},
});

export default inputStyle;
