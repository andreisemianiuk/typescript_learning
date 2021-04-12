import { Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';


const generateData = () => {
	// console.log('generate data')
	let i = 0
	while (i < 1000000) {
		i++
	}
	return i
}

export const SimpleExample = () => {
	// console.log('Component rendered')
	// const data = useMemo(generateData, [])
	// using function. that remeber return value instead using init value,  
	const [counter, setCounter] = useState(generateData)
	return (
		<div>
			Count: {counter}
			<div>
				{/* using callback instead specific value in setCounter */}
				<button onClick={() => setCounter(state => state + 1)}>+</button>
			</div>
		</div>
	)
}

export default {
	title: 'UseState',
	component: SimpleExample,
} as Meta;