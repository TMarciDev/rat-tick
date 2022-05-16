import React from 'react';
import { View, Dimensions } from 'react-native';
import Bar from './Bar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InfoLines = (props) => {
	return (
		<View style={{ width: windowWidth }}>
			<Bar width={props.width1} color='red' />
			<Bar width={props.width2} color='blue' />
		</View>
	);
};

export default InfoLines;
