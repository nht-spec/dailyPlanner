import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	loginControl: {
		marginLeft: 30,
		marginRight: 30,
		marginTop: 70,
	},
	reandforgotPassWord: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 42,
	},
	loginText: {
		textAlign: 'center',
		fontSize: 40,
		lineHeight: 56,
		paddingLeft: 55,
		color: '#747070',
	},
	swapBtn: {
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 50,
	},
	icon: {
		marginTop: 5,
		borderRadius: 10,
		width: 60,
		alignItems: 'center',
		borderColor: 'rgba(0, 0, 0, 0.08)',
		borderWidth: 1,
		transform: [
			{
				rotate: '180deg',
			},
		],
	},
});

export default styles;
