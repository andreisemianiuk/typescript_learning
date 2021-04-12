import { Meta } from '@storybook/react/types-6-0';
import { useState, useEffect } from 'react';

export const SetIntervalExample = () => {
	console.log('Component rendered')
	const date = new Date()
	const [time, setTime] = useState(date)

	useEffect(() => {
		setInterval(() => {
			setTime(state => state + 1)
		}, 1000)
	}, [])

	return (
		<div>
			Hours: {date.getHours()} Minutes: {date.getMinutes()} Seconds: {date.getSeconds()}
		</div>
	)
}

export default {
	title: 'UseEffect/SetInterval',
	component: SetIntervalExample,
} as Meta;