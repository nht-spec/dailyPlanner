import React from 'react';
import { ImageBackground, SafeAreaView, Text } from 'react-native';
import stylesAboutPage from './stylesAboutPage';

function AboutPage() {
	return (
		<SafeAreaView
			style={{ backgroundColor: '#ffffff', width: '100%', height: '100%' }}
		>
			<Text style={stylesAboutPage.head}>About Us</Text>

			<Text style={stylesAboutPage.textview}>Last updated</Text>
			<Text style={stylesAboutPage.textview1}>December 01 2021</Text>
			<Text style={stylesAboutPage.text}>Imprint</Text>

			<Text style={stylesAboutPage.textview}>
				The app was developed and published by Nhom 5:
			</Text>
			<Text style={stylesAboutPage.textview}>Email: support@daily.planner</Text>

			<Text style={stylesAboutPage.textview1}>
				Postal address: UIT, 6 Town, Thu Đuc District, Ho Chi Minh City
			</Text>
			<ImageBackground
				style={stylesAboutPage.logo}
				source={{
					uri: 'https://www.linkpicture.com/q/8454371_virtual-reality_vr_work_workflow_icon.png',
				}}
			/>
		</SafeAreaView>
	);
}

export default AboutPage;
