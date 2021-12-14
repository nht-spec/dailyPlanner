import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import profilePage from '../../../shared/styles/profilePage';
import useGetUser from '../../hooks/useGetUser';
import Account from './Account/Account';
import Header from './Header/Header';
import InfoUser from './InfoUser/InfoUser';
import Status from './Status/Status';

export default function ProfilePage({ route, navigation }) {
	const { userId, userName } = route.params;
	const [status, setStatus] = useState('away');
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});
	const { userData } = useGetUser(userId);

	return (
		<SafeAreaView style={profilePage.profileControl}>
			<View style={profilePage.content}>
				<Header navigation={navigation} />

				<InfoUser
					navigation={navigation}
					userData={userData}
					userId={userId}
					userName={userName}
					status={status}
				/>
				<Status staTus={setStatus} statusData={userData.status} />
				<Account navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}
