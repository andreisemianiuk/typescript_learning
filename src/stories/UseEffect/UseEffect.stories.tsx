import { Meta } from '@storybook/react/types-6-0';
import { useState, useEffect } from 'react';


export const SimpleExample = () => {
	console.log('Component rendered')

	const [counter, setCounter] = useState(0)
	const [fake, setFake] = useState(0)

	useEffect(() => {
		console.log('UseEffect without dependencies will be called after every render')
		document.title = counter.toString()
	})

	useEffect(() => {
		console.log('UseEffect with empty array in dependencies will be called only after first render(like as ComponentDidMount in Class Components)')
		document.title = counter.toString()
	}, [])

	useEffect(() => {
		console.log('UseEffect with counter dependency will be called after every counter change')
		document.title = counter.toString()
	}, [counter])

	return (
		<div>
			Count: {counter} Fake: {fake}
			<div>
				{/* using callback instead specific value in setCounter */}
				<button onClick={() => setCounter(state => state + 1)}>+Count</button>
				<button onClick={() => setFake(state => state + 1)}>+Fake</button>
			</div>
		</div>
	)
}


export default {
	title: 'UseEffect',
	component: SimpleExample,
} as Meta;