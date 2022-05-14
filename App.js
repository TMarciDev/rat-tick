import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';

export default function App() {
	return (
		<View>
			<Game goal={500} />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		/*flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',*/
	},
});
