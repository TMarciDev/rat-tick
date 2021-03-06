import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Game from './screens/Game';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
				<Stack.Screen name='RAT TICK' component={Home} />
				<Stack.Screen
					name='Game'
					component={Game}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
