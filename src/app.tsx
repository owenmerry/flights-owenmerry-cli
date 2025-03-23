import React from 'react';
import {Text} from 'ink';
import {SearchQuery} from './components/quick-search.js';
import {SelectNavigation} from './components/select-option.js';
import {Loading} from './components/loading.js';
import {Heading} from './components/heading.js';
import axios from 'axios';

type Props = {
	name: string | undefined;
};

export default function App({}: Props) {
	const [search, setSearch] = React.useState<{
		location: string;
		date: string;
		type: string;
	}>({location: '', date: '', type: ''});
	const [mode, setMode] = React.useState<
		'location' | 'date' | 'type' | 'loading' | 'results'
	>('location');
	const [results, setResults] = React.useState<any>();

	const handleLocation = (value: string) => {
		// console.log(`You searched for: ${value}`);
		setSearch({...search, location: value});
		setMode('date');
	};
	const handleDate = (value: string) => {
		// console.log(`You searched for: ${value}`);
		setSearch({...search, date: value});
		setMode('type');
	};
	const handleType = async (value: string) => {
		setSearch({...search, type: value});
		setMode('loading');
		const {data} = await axios.get(
			'https://api.flights.owenmerry.com/price?from=27544008&to=anywhere&month=3&year=2025&tripType=return&endMonth=1&endYear=2026',
		);
		setResults(data);
		setMode('results');
	};

	return (
		<>
			<Heading title={`Flights.owenmerry.com`} />
			{/* <Flexbox />
			<Text>Form CLI</Text> */}
			{mode === 'location' ? (
				<SearchQuery title="Select your location" onFinished={handleLocation} />
			) : (
				<Text>Location: {search.location}</Text>
			)}
			{mode === 'date' ? (
				<SearchQuery title="Select your date" onFinished={handleDate} />
			) : (
				<Text>Date: {search.date}</Text>
			)}
			{mode === 'type' ? (
				<SelectNavigation title="Select your type" onFinished={handleType} />
			) : (
				<Text>results: {search.type}</Text>
			)}
			{mode === 'loading' ? <Loading /> : ''}
			{mode === 'results' ? (
				<>
					<Text>Results found {results.content.groupingOptions.byDate.quotesOutboundGroups.length}</Text>
					{results.content.groupingOptions.byDate.quotesOutboundGroups.map((result : any, key: number) => (
						<>
							<Text key={key}>
								{key}:{result.monthYearDate.day}/{result.monthYearDate.month}/
								{result.monthYearDate.year} -
								£{results.content.results.quotes[result.quoteIds[0]].minPrice.amount}
							</Text>
						</>
					))}
				</>
			) : (
				''
			)}
		</>
	);
}
