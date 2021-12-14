import React from 'react';
import { Image, View } from 'react-native';
import url from '../../../constants/url';
import inputStyle from '../../../shared/styles/inputStyle';

function ImageBackGround() {
	return (
		<View style={inputStyle.imgControl}>
			<Image source={{ uri: `${url.LOGIN_IMG}` }} style={inputStyle.img} />
		</View>
	);
}

export default ImageBackGround;
