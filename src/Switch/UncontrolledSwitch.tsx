import React, { useState } from 'react'

function UncontrolledSwitch() {
	let [isOn, setIsOn] = useState<boolean>(true)
	const switchHandler = (e: React.MouseEvent) => {
		const value = e.currentTarget.innerHTML
		if (value === 'on') {
			setIsOn(true)
		}
		if (value === 'off') {
			setIsOn(false)
		}
	}

	return (
		<div className='item'>
			<h5>Uncontrolled Switch</h5>
			<SwitchItem isOn={isOn} switchHandler={switchHandler} />
		</div>
	)
}

type SwitchItemPropsType = {
	isOn: boolean
	switchHandler: (event: React.MouseEvent) => void
}

function SwitchItem(props: SwitchItemPropsType) {
	return (
		<>
			<span className={`btn ${props.isOn ? 'green' : ''}`} onClick={props.switchHandler}>on</span>
			<span className={`btn ${!props.isOn ? 'red' : ''}`} onClick={props.switchHandler}>off</span>
			<span className={`ball ${props.isOn ? 'green' : 'red'}`} />
		</>
	)
}


export default UncontrolledSwitch