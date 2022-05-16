import React from 'react';
import { View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bar = (props) => {
	return (
		<View
			style={{
				width: props.width,
				backgroundColor: props.color,
				height: windowHeight / 10,
			}}
		/>
	);
};

export default Bar;
