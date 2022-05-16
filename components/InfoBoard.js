import React from 'react';
import InfoLines from './InfoLines';
import { View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InfoBoard = (props) => {
	const width1 = (props.score1 / props.goal) * windowWidth;
	const width2 = (props.score2 / props.goal) * windowWidth;
	return (
		<View style={{ width: windowWidth }}>
			<InfoLines width1={width1} width2={width2} />
		</View>
	);
};

export default InfoBoard;
