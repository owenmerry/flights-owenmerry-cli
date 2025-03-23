import React from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

interface HeadingProps {
	title: string;
}

export const Heading = ({title}: HeadingProps) => {
	return (
		<>
			<Gradient name='retro'>
				<BigText text={title} />
			</Gradient>
		</>
	);
};
