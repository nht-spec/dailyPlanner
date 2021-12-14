import { useFonts } from 'expo-font';
import React from 'react';
import {
	Animated,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import btnSubmit from '../../../shared/styles/btnSubmit';

const { width, height } = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
	{
		key: '0',
		title: 'Welcome to TickTack',
		description: 'Stop wasting time by splitting up your day into small tasks',
		image: 'https://www.linkpicture.com/q/timetable-1.png',
	},

	{
		key: '3571518',
		title: 'The simple Day Planner',
		description:
			'A simple timeline of your day gives you the overview to achieve your goals',
		image: 'https://www.linkpicture.com/q/hourglass.png',
	},

	{
		key: '3571555',
		title: 'A timeline of your day',
		description: 'Get Started Now!!!',
		image: 'https://www.linkpicture.com/q/time-travel.png',
	},
];

const Indicator = ({ scrollX }) => {
	return (
		<View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
			{DATA.map((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
				const scale = scrollX.interpolate({
					inputRange,
					outputRange: [0.8, 1.4, 0.8],
					extrapolate: 'clamp',
				});

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.6, 0.9, 0.6],
					extrapolate: 'clamp',
				});
				return (
					<Animated.View
						key={`indicator-${i}`}
						style={{
							height: 10,
							width: 10,
							borderRadius: 5,
							backgroundColor: '#333',
							opacity,
							backgroundColor: '#fff',
							margin: 10,
							transform: [
								{
									scale,
								},
							],
						}}
					/>
				);
			})}
		</View>
	);
};

const Backdrop = ({ scrollX }) => {
	const backgroundColor = scrollX.interpolate({
		inputRange: bgs.map((_, i) => i * width),
		outputRange: bgs.map((bg) => bg),
	});
	return (
		<Animated.View
			style={[
				StyleSheet.absoluteFillObject,
				{
					backgroundColor,
				},
			]}
		/>
	);
};

const Square = () => {
	return (
		<Animated.View
			style={{
				width: height,
				height: height,
				backgroundColor: '#fff',
				borderRadius: 86,
				position: 'absolute',
				top: -height * 0.6,
				left: -height * 0.3,
				transform: [
					{
						rotate: '35deg',
					},
				],
			}}
		/>
	);
};
export default function Intro({ navigation }) {
	let scrollX = React.useRef(new Animated.Value(0)).current;
	const [loaded] = useFonts({
		RobotoBold: require('../../../../assets/fonts/Roboto-Bold.ttf'),
	});
	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Backdrop scrollX={scrollX} />
			<Square />
			<Animated.FlatList
				data={DATA}
				keyExtractor={(item) => item.key}
				contentContainerStyle={{ paddingBottom: 100 }}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={32}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}
				renderItem={({ item }) => {
					return (
						<View style={{ width, alignItems: 'center', padding: 20 }}>
							<View style={{ flex: 0.8, justifyContent: 'center' }}>
								<Image
									source={{ uri: item.image }}
									style={{
										width: width / 2,
										height: width / 2,
										resizeMode: 'contain',
									}}
								/>
							</View>

							<View style={{ flex: 0.3 }}>
								<Text
									style={{
										fontFamily: 'RobotoBold',
										color: '#FFFFFF',
										fontWeight: '800',
										fontSize: 40,
										marginBottom: 10,
									}}
								>
									{item.title}
								</Text>
								<Text
									style={{
										fontFamily: 'RobotoBold',
										color: '#FFFFFF',
										fontWeight: '500',
										fontSize: 18,
										marginBottom: 10,
									}}
								>
									{item.description}
								</Text>
							</View>
						</View>
					);
				}}
			/>
			<View style={btnSubmit.btnLinkControl}>
				<TouchableHighlight
					onPress={() => navigation.navigate('Auth')}
					style={btnSubmit.btnLink}
					underlayColor='#fff'
				>
					<Text
						style={{
							fontFamily: 'RobotoBold',
							height: 50,
							lineHeight: 50,
							color: '#FFFFFF',
							fontWeight: '800',
							fontSize: 24,
						}}
					>
						Get Started
					</Text>
				</TouchableHighlight>
			</View>
			<View style={{ position: 'absolute', bottom: -90, alignItems: 'center' }}>
				<Indicator scrollX={scrollX} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
