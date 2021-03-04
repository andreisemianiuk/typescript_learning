import React from 'react'

export type ControlledSwitchType = {
	title: string
	on: boolean
	changeOn: (on: boolean) => void
}

export function ControlledSwitch(props: ControlledSwitchType) {
	const onStyle = {
		display: 'inline-block',
		border: '1px solid #333',
		borderRadius: '2px',
		padding: '3px 10px',
		cursor: 'pointer',
		backgroundColor: props.on ? 'green' : 'white'
	}
	const offStyle = {
		display: 'inline-block',
		border: '1px solid #333',
		borderRadius: '2px',
		padding: '3px 10px',
		cursor: 'pointer',
		backgroundColor: !props.on ? 'red' : 'white'
	}
	const indicatorStyle = {
		display: 'inline-block',
		width: '10px',
		height: '10px',
		marginLeft: '10px',
		border: '1px solid #333',
		borderRadius: '50%',
		backgroundColor: props.on ? 'green' : 'red'
	}
	return (
		<div className='item'>
			<h5>{props.title}</h5>
			<div>
				<span style={onStyle} onClick={() => props.changeOn(true)}>on</span>
				<span style={offStyle} onClick={() => props.changeOn(false)}>off</span>
				<span style={indicatorStyle} />
			</div>
		</div>
	)
}