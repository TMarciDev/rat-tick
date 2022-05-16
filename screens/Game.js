import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Dimensions,
	TouchableWithoutFeedback,
} from 'react-native';
import InfoBoard from '../components/InfoBoard';

// borderColor: 'red', borderWidth: 8,

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Game = ({ navigation, route }) => {
	const [looter, setLooter] = useState(Math.random() >= 0.5);
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);
	const [tap1, setTap1] = useState(0);
	const [tap2, setTap2] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			!isFinished() && (looter ? setScore1(score1 + 1) : setScore2(score2 + 1));
		}, 1);
		return () => clearInterval(timerId);
	});

	const isFinished = () => {
		return score1 >= route.params.goal || score2 >= route.params.goal;
	};

	const tapped = (y) => {
		const limit = route.params.taps;
		if (y <= windowHeight / 2) {
			setTap1(tap1 + 1);
			return tap1 < limit;
		} else {
			setTap2(tap2 + 1);
			return tap2 < limit;
		}
	};

	return (
		<View
			onTouchStart={(e) => {
				if (!isFinished() && tapped(e.nativeEvent.locationY)) {
					setLooter(!looter);
				}
			}}
		>
			<View
				style={[
					styles.container,
					{
						backgroundColor: `${looter ? 'lightblue' : 'pink'}`,
					},
				]}
			>
				<Text style={[styles.points, { transform: [{ rotate: '180deg' }] }]}>
					{score1}
				</Text>
				<Text
					style={[
						styles.points,
						{ paddingBottom: 0, transform: [{ rotate: '180deg' }] },
					]}
				>
					Goal: {route.params.goal}
				</Text>

				<InfoBoard goal={route.params.goal} score1={score1} score2={score2} />

				<Text style={[styles.points, { paddingBottom: 0 }]}>
					Goal: {route.params.goal}
				</Text>

				<Text style={styles.points}>{score2}</Text>
				<StatusBar hidden={true} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: windowHeight,
		width: windowWidth,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	points: {
		fontSize: 50,
		paddingBottom: 100,
	},
});

export default Game;
