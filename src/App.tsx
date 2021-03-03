import React, { useState } from 'react'
import UncontrolledRating from './Rating/UncontrolledRating'
import ControlledRating from './Rating/ControlledRating'
import UncontrolledSwitch from './Switch/UncontrolledSwitch'
import ControlledSwitch from './Switch/ControlledSwitch'
import './App.css'
import { ControlledAccordion } from './Accordion/ControlledAccordion'
import { UncontrolledAccordion } from './Accordion/UncontrolledAccordion'


function App() {
	// ControlledSwitch
	const [isOn, setIsOn] = useState<boolean>(false)
	const changeIsOn = () => {
		setIsOn(!isOn)
	}
	// ControlledStar
	const [rating, setRating] = useState<number>(0)
	const onChangeRatingValue = (value: number): void => {
		setRating(value)
	}
	// ControlledAccordion
	const [collapsed, setCollapsed] = useState<boolean>(true)
	const changeCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div className='App'>
			<ControlledSwitch title={'Controlled Switch'} isOn={isOn} changeIsOn={changeIsOn} />
			<UncontrolledSwitch />
			<hr />
			<ControlledRating title={'Controlled Rating'} rating={rating} toggleRating={onChangeRatingValue} />
			<UncontrolledRating />
			<hr />
			<ControlledAccordion title={'Contolled Accordion'} collapsed={collapsed} changeCollapsed={changeCollapsed} />
			<UncontrolledAccordion />
		</div>
	)
}

export default App
