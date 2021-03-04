import React, { useState } from 'react'
import { UncontrolledRating } from './Rating/UncontrolledRating'
import { ControlledRating, RatingType } from './Rating/ControlledRating'
import { UncontrolledSwitch } from './Switch/UncontrolledSwitch'
import { ControlledSwitch } from './Switch/ControlledSwitch'
import './App.css'
import { ControlledAccordion } from './Accordion/ControlledAccordion'
import { UncontrolledAccordion } from './Accordion/UncontrolledAccordion'


function App() {
	// ControlledSwitch
	const [on, setOn] = useState<boolean>(false)
	const changeOn = (on: boolean): void => {
		setOn(on)
	}
	// ControlledStar
	const [rating, setRating] = useState<RatingType>(0)
	const changeRatingValue = (value: RatingType): void => {
		setRating(value)
	}
	// ControlledAccordion
	const [collapsed, setCollapsed] = useState<boolean>(true)
	const changeCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div className='App'>
			<ControlledSwitch title={'Controlled Switch'} on={on} changeOn={changeOn} />
			<UncontrolledSwitch onChange={x => x} />
			<hr />
			<ControlledRating title={'Controlled Rating'} rating={rating} toggleRating={changeRatingValue} />
			<UncontrolledRating onChange={x => x} />
			<hr />
			<ControlledAccordion title={'Contolled Accordion'} collapsed={collapsed} changeCollapsed={changeCollapsed} />
			<UncontrolledAccordion />
		</div>
	)
}

export default App
