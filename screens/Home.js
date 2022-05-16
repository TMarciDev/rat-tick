import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	Dimensions,
	Pressable,
	TextInput,
	Image,
} from 'react-native';
import logo from '../assets/man-icon.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
	const [goal, setGoal] = useState(500);
	const [tapLimit, setTapLimit] = useState(50);
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={logo}
				style={{ height: windowHeight / 2.5, marginVertical: 10 }}
				resizeMode='contain'
			/>
			<Text>Goal: {goal}</Text>
			<Text>Tap limit: {tapLimit}</Text>
			<Pressable
				onPress={() => {
					navigation.navigate('Game', { goal: goal, taps: tapLimit });
				}}
				style={styles.button}
			>
				<Text style={styles.text}>Start</Text>
			</Pressable>
			<TextInput
				style={styles.input}
				onChangeText={(e) => {
					e > 1 && setGoal(e);
				}}
				placeholder='Goal'
				keyboardType='numeric'
			/>
			<TextInput
				style={styles.input}
				onChangeText={(e) => {
					e > 1 && setTapLimit(e);
				}}
				placeholder='Tap limit'
				keyboardType='numeric'
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
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
	input: {
		height: 40,
		width: 100,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		textAlign: 'center',
	},
});

export default Home;
