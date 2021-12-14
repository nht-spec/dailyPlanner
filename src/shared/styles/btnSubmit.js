import { StyleSheet } from 'react-native';

const btnSubmit = StyleSheet.create({
	btnControl: {
		justifyContent: 'center',
		backgroundColor: '#0386D0',
		borderRadius: 5,
		height: 45,
	},
	btn: {
		fontSize: 18,
		lineHeight: 35,
		textAlign: 'center',
		color: '#FFFFFF',
	},
	btnLinkControl: {
		paddingLeft: 45,
		paddingRight: 45,
		width: '100%',
		position: 'absolute',
		bottom: 70,
	},
	btnLink: {
		borderRadius: 8,
		alignItems: 'center',
		backgroundColor: '#f98e86',
	},
	btntext: {
		height: 50,
		lineHeight: 50,
		color: '#FFFFFF',
		fontWeight: '800',
		fontSize: 24,
	},
});

export default btnSubmit;
