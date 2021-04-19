import React from 'react'
import { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';

const addZerosToClock = (time: number) => {
	if (time < 10) {
		return '0' + time
	}
	return time.toString()
}

export const Clock = () => {
	const [date, setDate] = useState(new Date())
	const [mode, setMode] = useState('analog')

	useEffect(() => {
		const id = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => clearInterval(id)
	}, [])

	let seconds: string = addZerosToClock(date.getSeconds())
	let minutes: string = addZerosToClock(date.getMinutes())
	let hours: string = addZerosToClock(date.getHours())


	const changeMode = () => {
		if (mode === 'digital') setMode('analog')
		if (mode === 'analog') setMode('digital')
	}

	return (
		<div style={{ padding: '10px' }}>
			{mode === 'digital' ?
				<div>
					{hours}
					: {minutes}
					: {seconds}
				</div>
				: <AnalogClock seconds={seconds} minutes={minutes} hours={hours} />
			}
			<button style={{ marginTop: '10px' }} onClick={changeMode}>Change mode</button>
		</div>
	)
}
