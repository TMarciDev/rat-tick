import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Pressable } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestartButton = (props) => {
	if (!props.isFinished()) {
		return null;
	}

	const [good, setGood] = useState(false);
	setTimeout(() => {
		setGood(true);
	}, 1000);

	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					good && props.restart();
				}}
				style={styles.button}
			>
				<Text style={styles.text}>
					{good
						? 'New Game'
						: 'Winner: ' + (props.isFirstWinner ? 'Blue' : 'Red')}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 999,
		position: 'absolute',
		height: windowHeight,
		width: windowWidth,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		marginVertical: 10,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});

export default RestartButton;
