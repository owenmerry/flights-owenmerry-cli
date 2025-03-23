import React from 'react';
import {Box, Text} from 'ink';

export const Flexbox = () => {
	return (
		<>
			<Box justifyContent="flex-start">
				<Box borderStyle="round" borderColor="blue" paddingX={5} paddingY={1}>
					<Text>X</Text>
				</Box>
				<Box borderStyle="round" borderColor="blue" paddingX={5} paddingY={1}>
					<Text>Y</Text>
				</Box>
			</Box>
			{/* <Box justifyContent="space-between">
				<Box borderStyle="single" paddingX={5} paddingY={1}><Text>X</Text></Box>
				<Box borderStyle="single" paddingX={5} paddingY={1}><Text>Y</Text></Box>
			</Box>
			<Box justifyContent="center">
				<Box borderStyle="single" paddingX={5} paddingY={1}><Text>X</Text></Box>
				<Box borderStyle="single" paddingX={5} paddingY={1}><Text>Y</Text></Box>
			</Box> */}
		</>
	);
};
