import React from 'react'

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

export default SwitchItem