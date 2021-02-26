import React from 'react'

type ControlledSwitchType = {
	title: string
	isOn: boolean
	changeIsOn: (event: React.MouseEvent) => void
}

function ControlledSwitch(props: ControlledSwitchType) {
	return (
		<div className='item'>
			<h5>{props.title}</h5>
			<SwitchItem isOn={props.isOn} switchHandler={props.changeIsOn} />
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


export default ControlledSwitch