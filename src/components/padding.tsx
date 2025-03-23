import React from 'react';
import {Box, Text} from 'ink';

export const Padding = () => {
	return (
		<>
			<Box paddingTop={2}><Text>Top</Text></Box>
			<Box paddingBottom={2}><Text>Bottom</Text></Box>
			<Box paddingLeft={2}><Text>Left</Text></Box>
			<Box paddingRight={2}><Text>Right</Text></Box>
			<Box paddingX={2}><Text>Left and right</Text></Box>
			<Box paddingY={2}><Text>Top and bottom</Text></Box>
			<Box padding={2}>
				<Text>Top, bottom, left and right</Text>
			</Box>
		</>
	);
};
