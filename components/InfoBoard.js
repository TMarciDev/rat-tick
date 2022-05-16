import React from 'react';
import InfoLines from './InfoLines';
import { View, Dimensions } from 'react-native';
import PlayerScore from './PlayerScore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InfoBoard = (props) => {
	const width1 = (props.player1.score / props.goal) * windowWidth;
	const width2 = (props.player2.score / props.goal) * windowWidth;

	return (
		<View>
			<PlayerScore goal={props.goal} stats={props.player1} rotated={true} />
			<InfoLines width1={width1} width2={width2} />
			<PlayerScore goal={props.goal} stats={props.player2} />
		</View>
	);
};

export default InfoBoard;
