import React, { useState } from 'react'

export type UncontrolledSwitchType = {
	defaultValue?: boolean
	onChange: (on: boolean) => void
}

export function UncontrolledSwitch({ defaultValue, onChange }: UncontrolledSwitchType) {
	const [on, setOn] = useState<boolean>(defaultValue ? defaultValue : true)

	const onStyle = {
		display: 'inline-block',
		border: '1px solid #333',
		borderRadius: '2px',
		padding: '3px 10px',
		cursor: 'pointer',
		backgroundColor: on ? 'green' : 'white'
	}

	const offStyle = {
		display: 'inline-block',
		border: '1px solid #333',
		borderRadius: '2px',
		padding: '3px 10px',
		cursor: 'pointer',
		backgroundColor: !on ? 'red' : 'white'
	}

	const indicatorStyle = {
		display: 'inline-block',
		width: '10px',
		height: '10px',
		marginLeft: '10px',
		border: '1px solid #333',
		borderRadius: '50%',
		backgroundColor: on ? 'green' : 'red'
	}

	return (
		<div className='item'>
			<h5>Uncontrolled Switch</h5>
			<div>
				<span style={onStyle} onClick={() => { setOn(true); onChange(true) }}>on</span>
				<span style={offStyle} onClick={() => { setOn(false); onChange(false) }}>off</span>
				<span style={indicatorStyle} />
			</div>
		</div>
	)
}
