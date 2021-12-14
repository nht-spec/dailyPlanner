import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';

export default function InputField({
	placeholder,
	form,
	name,
	hidepass,
	regex,
	errors,
	messErrRequired,
	messErrRegex,
	size,
	fontFamily,
	color,
	height,
	width,
	multiline,
}) {
	return (
		<Controller
			control={form.control}
			name={name}
			rules={{
				required: {
					value: true,
					message: messErrRequired,
				},
				pattern: {
					value: regex,
					message: messErrRegex,
				},
			}}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					blurOnSubmit
					multiline={multiline ? multiline : false}
					style={{ fontSize: size, color, fontFamily, width, height }}
					secureTextEntry={hidepass}
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					placeholderTextColor={
						Object.keys(errors).length !== 0 ? '#ab003c' : color
					}
					placeholder={placeholder}
				/>
			)}
		/>
	);
}
