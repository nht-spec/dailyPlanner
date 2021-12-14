import React, { useEffect, useRef, useState } from 'react';

import { View, Animated } from 'react-native';

function Progress({ step, steps, height, currentTime }) {
	const [width, setWidth] = useState(0);
	const animatedValue = useRef(new Animated.Value(-1000)).current;
	const reactive = useRef(new Animated.Value(-1000)).current;

	useEffect(() => {
		Animated.timing(animatedValue, {
			toValue: reactive,
			duration: 300,
			useNativeDriver: true,
		}).start();
	}, []);

	useEffect(() => {
		reactive.setValue(-width + (width * step) / steps);
	}, [step, width]);

	return (
		<View
			style={{ width: '50%', marginTop: 10, marginBottom: 7, marginRight: 15 }}
		>
			<View
				onLayout={(e) => {
					const newWidth = e.nativeEvent.layout.width;
					setWidth(newWidth);
				}}
				style={{
					height,
					backgroundColor: currentTime <= 0 ? '#ab003c' : 'rgba(0,0,0,0.1)',
					borderRadius: height,
					overflow: 'hidden',
				}}
			>
				<Animated.View
					style={{
						height,
						width: '100%',
						backgroundColor: 'rgb(123,156,238)',
						borderRadius: height,
						overflow: 'hidden',
						position: 'absolute',
						top: 0,
						left: 0,
						transform: [
							{
								translateX: animatedValue,
							},
						],
					}}
				/>
			</View>
		</View>
	);
}

export default Progress;
