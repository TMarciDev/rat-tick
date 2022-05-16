import React from 'react';
import { View } from 'react-native';

const Bar = (props) => {
	return (
		<View
			style={{
				width: props.width,
				backgroundColor: props.color,
				height: 90,
			}}
		/>
	);
};

export default Bar;
