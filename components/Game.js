import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Game = () => {
	const [looter, setLooter] = useState(false);
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setLooter(!looter);
			}}
		>
			<View
				style={[
					styles.container,
					{ backgroundColor: `${looter ? 'blue' : 'red'}` },
				]}
			>
				<Text>e</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		width: windowWidth,
	},
});

export default Game;
