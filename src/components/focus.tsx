import {useFocus, Text} from 'ink';
import React from 'react';

interface FocusProps {
	text: string;
}

export const Focus = ({text}: FocusProps) => {
	const {isFocused} = useFocus();

	return (
		<>
			<Text>
				{text} <Text italic color={`magenta`}>{isFocused ? '[Press Enter to see details]' : ''}</Text>
			</Text>
		</>
	);
};
