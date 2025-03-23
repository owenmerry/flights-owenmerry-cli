import React from 'react';
import SelectInput from 'ink-select-input';
import { Box, Text } from 'ink';

interface SelectInputProps {
	onFinished: (item: string) => void;
    title: string;
}

export const SelectNavigation = ({onFinished, title}: SelectInputProps) => {
	const handleSelect = (item: {label: string; value: string}) => {
		onFinished(item.value);
	};

	const items = [
		{
			label: 'First',
			value: 'first',
		},
		{
			label: 'Second',
			value: 'second',
		},
		{
			label: 'Third',
			value: 'third',
		},
	];

	return (
		<>
			<Box>
				<Box marginRight={1}>
					<Text>{title}:</Text>
				</Box>
				<Box marginRight={1}>
					<SelectInput items={items} onSelect={handleSelect} />
				</Box>
			</Box>
		</>
	);
};
