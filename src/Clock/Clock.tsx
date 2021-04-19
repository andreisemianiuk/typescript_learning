import React from 'react'
import { useState, useEffect } from 'react';

const addZerosToClock = (time: number) => {
	if (time < 10) {
		return '0' + time
	}
	return time
}

export const Clock = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const id = setInterval(() => {
			setDate(new Date())
			console.log('TICK');

		}, 1000)
		return () => clearInterval(id)
	}, [])

	return (
		<div>
			{addZerosToClock(date.getHours())}
			: {addZerosToClock(date.getMinutes())}
			: {addZerosToClock(date.getSeconds())}
		</div>
	)
}
