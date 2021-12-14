import React from 'react';
import { View } from 'react-native';
import InputField from '../../../../shared/InputField/InputField';

export default function NoteDesc({ name, form, errors }) {
	return (
		<View style={{ width: '100%' }}>
			<InputField
				placeholder='Change sub notes...'
				name={name}
				form={form}
				size={17}
				fontFamily='RobotoBold'
				weight='bold'
				messageError={'Note title is required'}
				errors={errors}
				multiline={true}
			/>
		</View>
	);
}
