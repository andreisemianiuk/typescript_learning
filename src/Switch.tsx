import React, { useState } from 'react'
import SwitchItem from './SwitchItem'

function Switch() {
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
			<SwitchItem isOn={isOn} switchHandler={switchHandler} />
		</div>
	)
}

export default Switch