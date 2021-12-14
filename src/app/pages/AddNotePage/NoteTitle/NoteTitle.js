import React from 'react';
import { View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';

export default function NoteTitle({ name, form, errors }) {
	return (
		<View style={{ paddingTop: 10, paddingBottom: 20 }}>
			<InputField
				placeholder='Title'
				name={name}
				form={form}
				size={40}
				fontFamily='RobotoBold'
				weight='bold'
				messageError={'Note title is required'}
				errors={errors}
				multiline={true}
			/>
		</View>
	);
}
