import React from 'react'

interface IStyleType {
	[key: string]: string
}

const Clock: IStyleType = {
	width: '100px',
	height: '100px',
	border: '1px solid',
	borderRadius: '50%',
	position: 'relative',
}
const Dial: IStyleType = {
	position: 'absolute',
	left: '50%',
	width: '50px',
	height: '50px',
	transformOrigin: 'bottom left',
}
const Center: IStyleType = {
	position: 'absolute',
	left: '46%',
	top: '44%',
	width: '7px',
	height: '7px',
	border: '1px solid',
	borderRadius: '50%',
	backgroundColor: '#333'
}
const Seconds: IStyleType = {
	width: '45px',
	height: '45px',
	top: '5px',
	borderLeft: 'solid 1px green'
}
const Minutes: IStyleType = {
	width: '40px',
	height: '40px',
	top: '10px',
	borderLeft: 'solid 1px #cc0000'
}
const Hours: IStyleType = {
	width: '35px',
	height: '35px',
	top: '15px',
	borderLeft: 'solid 4px #000',
}

interface IAnalogClock {
	seconds: string
	minutes: string
	hours: string
}

const AnalogClock = (props: IAnalogClock) => {
	const { seconds, minutes, hours } = props

	const TransformedSecondsStyle = {
		transform: `rotate(${+seconds * 6}deg)`
	}
	const TransformedMinutesStyle = {
		transform: `rotate(${+minutes * 6}deg)`
	}
	const TransformedHoursStyle = {
		transform: `rotate(${+hours * 30}deg)`
	}

	return (
		<div style={{ ...Clock }}>
			<div style={{ ...Center }}></div>
			<div style={{ ...Dial, ...Seconds, ...TransformedSecondsStyle }}></div>
			<div style={{ ...Dial, ...Minutes, ...TransformedMinutesStyle }}></div>
			<div style={{ ...Dial, ...Hours, ...TransformedHoursStyle }}></div>
			<div style={Dial}></div>
		</div>
	)
}


export default AnalogClock