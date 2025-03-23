import React, {useState} from 'react';
import {Box, Text} from 'ink';
import TextInput from 'ink-text-input';

interface SearchQueryProps {
    onFinished: (query: string) => void;
    title: string;
}

export const SearchQuery = ({ onFinished, title } : SearchQueryProps) => {
	const [query, setQuery] = useState('');

    const handleSubmit = () => {
        onFinished(query);
    }

	return (
		<>
			<Box>
				<Box marginRight={1}>
					<Text>{title}:</Text>
				</Box>
				<Box marginRight={1}>
					<TextInput value={query} onChange={setQuery} onSubmit={handleSubmit} />
				</Box>
			</Box>
		</>
	);
};
