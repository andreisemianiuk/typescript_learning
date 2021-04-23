import { Meta } from '@storybook/react/types-6-0';
import { useState, useEffect } from 'react';


export const SimpleExample = () => {
	console.log('Component rendered')

	const [key, setKey] = useState('')

	useEffect(() => {
		console.log('Use Effect has worked')
		const handler = (e: KeyboardEvent) => {
			console.log(key);
			setKey(key + e.key)
		}
		window.addEventListener('keypress', handler)
		return () => {
			window.removeEventListener('keypress', handler)
		}
	}, [key])

	return (
		<div>
			Key: {key}
			<div>
				{/* <button onClick={() => setCounter(state => state + 1)}>+Count</button> */}
			</div>
		</div>
	)
}


export default {
	title: 'UseEffectCleanUp',
	component: SimpleExample,
} as Meta;