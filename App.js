import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoute from './src/app/routes';

export default function App() {
	const MyTheme = {
		...DefaultTheme,
		colors: {
			primary: '#ffffff',
		},
	};
	return (
		<NavigationContainer theme={MyTheme}>
			<AppRoute />
		</NavigationContainer>
	);
}
