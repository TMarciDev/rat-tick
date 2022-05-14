import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Alert,
	Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Game = (props) => {
	const [looter, setLooter] = useState(Math.random() >= 0.5);
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			!isFinished() && (looter ? setScore1(score1 + 1) : setScore2(score2 + 1));
		}, 0.01);
		return () => clearInterval(timerId);
	});

	const isFinished = () => {
		return score1 >= props.goal || score2 >= props.goal;
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				!isFinished() && setLooter(!looter);
			}}
		>
			<View
				style={[
					styles.container,
					{ backgroundColor: `${looter ? 'lightblue' : 'pink'}` },
				]}
			>
				<Text style={[styles.points, { transform: [{ rotate: '180deg' }] }]}>
					{score1}
				</Text>
				<Text style={[styles.points]}>{score2}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
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
