// rnf
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Auth from '../components/Auth/Auth';
import Intro from '../components/Intro/Intro';
import AddEventPage from '../pages/AddEventPage/AddEventPage';
import AddNotePage from '../pages/AddNotePage/AddNotePage';
import ChangeEventPage from '../pages/ChangeEventPage/ChangeEventPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage';
import HomePage from '../pages/HomePage/HomePage';
import NotePage from '../pages/NotePage/NotePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import TermPage from '../pages/TermPage/TermPage';
import UpDateNotePage from '../pages/UpDateNotePage/UpDateNotePage';

const Stack = createNativeStackNavigator();

export default function AppRoute() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Intro' component={Intro} />
			<Stack.Screen name='Auth' component={Auth} />
			<Stack.Screen name='Home' component={HomePage} />
			<Stack.Screen name='Addevent' component={AddEventPage} />
			<Stack.Screen name='Details' component={DetailPage} />
			<Stack.Screen name='ChangeEvent' component={ChangeEventPage} />
			<Stack.Screen name='Note' component={NotePage} />
			<Stack.Screen name='AddNote' component={AddNotePage} />
			<Stack.Screen name='UpdateNote' component={UpDateNotePage} />
			<Stack.Screen name='Profile' component={ProfilePage} />
			<Stack.Screen name='Edit' component={EditProfilePage} />
			<Stack.Screen name='Temp' component={TermPage} />
		</Stack.Navigator>
	);
}
