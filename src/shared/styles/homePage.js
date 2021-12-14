import { StyleSheet } from 'react-native';

const homePage = StyleSheet.create({
	homeSreen: {
		backgroundColor: '#29292b',
		borderRadius: 30,
		marginTop: 150,
		position: 'relative',
	},
	iconControl: {
		width: 30,
		height: 30,
		borderRadius: 50,
		backgroundColor: '#ffffff',
		position: 'absolute',
		right: 30,
		top: 600,
	},
	iconAdd: {
		position: 'absolute',
		width: 60,
		height: 60,
		right: -15,
		top: -15,
	},

	iconNoteControl: {
		position: 'absolute',
		right: 85,
		top: -92,
	},
	iconAddNote: {
		position: 'absolute',
	},
	iconProfileControl: {
		position: 'absolute',
		right: 45,
		top: -92,
	},
	iconProfileNote: {
		position: 'absolute',
	},
});

export default homePage;
