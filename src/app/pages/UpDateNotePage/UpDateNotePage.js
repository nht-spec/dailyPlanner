import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, Text, View } from 'react-native';
import addNotePage from '../../../shared/styles/addNotePage';
import useChangeNote from '../../hooks/useChangeNote';
import usePostNote from '../../hooks/usePostNote';
import ColorPicker from './ColorPicker/ColorPicker';
import NoteDesc from './NoteDesc/NoteDesc';
import NoteTitle from './NoteTitle/NoteTitle';
export default function UpDateNotePage({ route, navigation }) {
	const [pinned, setPinned] = useState(false);
	const [color, setColor] = useState('');
	const [isSubmit, setIsSubmit] = useState(false);
	const { id, username } = route.params;
	const [input, setInput] = useState({});
	const { isChange } = useChangeNote(
		username,
		input,
		pinned,
		color,
		isSubmit,
		id
	);

	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
		RobotoMedium: require('../../../../assets/fonts/Roboto-Medium.ttf'),
	});

	const form = useForm({
		defaultValues: {
			title: '',
			desc: '',
		},
	});

	const handleSubmit = (values) => {
		setIsSubmit(true);
		form.reset();
		setInput(values);
	};

	useEffect(() => {
		isChange && navigation.goBack();
	}, [isChange]);

	return (
		<SafeAreaView style={addNotePage.control}>
			<View style={addNotePage.content}>
				<View
					style={{
						height: 30,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<MaterialIcons
						style={addNotePage.btnBack}
						onPress={() => navigation.goBack()}
						name='arrow-back'
						size={30}
					/>
					<View style={{ flexDirection: 'row' }}>
						<MaterialIcons
							onPress={() => setPinned(!pinned)}
							size={30}
							color={pinned ? '#9a3c35' : '#dc7f78'}
							name='push-pin'
						/>
						<MaterialIcons
							style={{ paddingLeft: 10 }}
							color='#dc7f78'
							size={30}
							onPress={form.handleSubmit(handleSubmit)}
							name='note-add'
						/>
					</View>
				</View>
				<Text style={addNotePage.text}>Update Notes</Text>
				<NoteTitle name='title' form={form} errors={form.formState.errors} />
				<NoteDesc name='desc' form={form} errors={form.formState.errors} />
			</View>
			<ColorPicker color={setColor} />
		</SafeAreaView>
	);
}
