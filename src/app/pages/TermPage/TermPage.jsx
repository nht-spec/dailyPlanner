import React from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import stylesTermPage from './stylesTermPage';

function TermPage() {
	return (
		<SafeAreaView style={stylesTermPage.backgroundColour}>
			<View>
				<Text style={stylesTermPage.head}>Term and Privacy Policy</Text>
			</View>

			<View style={stylesTermPage.textview}>
				<Text>
					The Owner reserves the right to make changes to this privacy policy at
					any time by notifying its Users on this page and possibly within this
					Application and/or - as far as technically and legally feasible -
					sending a notice to Users via any contact information available to the
					Owner. It is strongly recommended to check this page often, referring
					to the date of the last modification listed at the bottom.
				</Text>
			</View>

			<View>
				<ImageBackground
					style={stylesTermPage.logo}
					source={{
						uri: 'https://www.linkpicture.com/q/8159100_protect_shield_sword_icon.png',
					}}
				/>
			</View>
		</SafeAreaView>
	);
}

export default TermPage;
