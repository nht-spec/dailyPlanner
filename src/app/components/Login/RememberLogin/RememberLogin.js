import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function RememberLogin() {
	const [checked, setChecked] = useState(false);

	return (
		<View style={styles.rememberPassWord}>
			<Checkbox
				style={styles.checkboxInput}
				value={checked}
				onValueChange={setChecked}
			/>
			<Text style={styles.rememberPassWordText}>Remember password</Text>
		</View>
	);
}

export default RememberLogin;
