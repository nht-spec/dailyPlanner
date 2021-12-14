import { StyleSheet } from 'react-native';

const stylesAboutPage = StyleSheet.create({
	head:{
		marginTop:50,
		marginLeft: 20,
		paddingRight: 30,
		paddingLeft: 30,
		color:'#0E82B7',
		fontSize: 40,
		fontWeight: 'bold'
	},
	textview:
	{
		marginTop: 15,
		paddingLeft: 50,
		paddingRight: 50,
		marginLeft: 10,
		color: '#778899',
		fontSize: 18,
	},
    textview1:
	{
        marginTop:1,
		paddingLeft: 50,
		paddingRight: 50,
		marginLeft: 10,
		color: '#778899',
		fontSize: 18,
	},
    text:
	{
		marginTop: 20,
        marginLeft: 50,
		color: '#000000',
		fontSize: 30,
        fontWeight:'bold'
	},
	container: {    
		flex: 1,
	},
	backgroundColour: {
		color: '#FFFFFF',
	},
	btncontinue:{
		color: '#0E82B7',
		height: 50,
		width: 150,
	},
	logo:{
        marginTop:40,
		width: '100%',
		height: 300,
	}
});

export default stylesAboutPage;
