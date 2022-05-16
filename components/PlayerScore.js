import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScore = (props) => {
	return (
		<View
			style={[
				{ height: windowHeight * 0.4 },
				props.rotated ? { transform: [{ rotate: '180deg' }] } : null,
			]}
		>
			<Text style={[styles.points]}>Goal: {props.goal}</Text>
			<Text style={styles.points}>Score: {props.stats.score}</Text>
			<Text style={styles.points}>Taps: {props.stats.taps}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	points: {
		fontSize: 50,
		textAlign: 'center',
	},
});

export default PlayerScore;
