import React from 'react';
import {Text} from 'ink';
import Spinner from 'ink-spinner';

export const Loading = () => {
	return (
		<>
			<Text>
				<Text color="green">
					<Spinner type="dots" />
				</Text>
				{' Loading'}
			</Text>
		</>
	);
};
