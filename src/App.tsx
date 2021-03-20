import React, { useState } from 'react'
import { UncontrolledRating } from './Rating/UncontrolledRating'
import { ControlledRating, RatingType } from './Rating/ControlledRating'
import { UncontrolledSwitch } from './Switch/UncontrolledSwitch'
import { ControlledSwitch } from './Switch/ControlledSwitch'
import './App.css'
import { Accordion } from './Accordion/Accordion'
import { UncontrolledAccordion } from './Accordion/UncontrolledAccordion'
import { Select } from './Select/Select'
import ChampionsLeague from './stories/React_Memo/ReactMemo'


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
	const people = [
		{ name: 'None', value: 0 },
		{ name: 'Kolya', value: 1 },
		{ name: 'Petya', value: 2 },
		{ name: 'Vova', value: 3 },
		{ name: 'Sasha', value: 4 }
	]
	const onClick = (value: number, name: string) => {
		alert(`Hello ${name}!Your value is ${value}`)
	}

	return (
		<div className='App'>
			<ChampionsLeague />
			<Select title={'Friends'} items={people} />
			<ControlledSwitch title={'Controlled Switch'} on={on} changeOn={changeOn} />
			<UncontrolledSwitch onChange={x => x} />
			<hr />
			<ControlledRating title={'Controlled Rating'} rating={rating} toggleRating={changeRatingValue} />
			<UncontrolledRating onChange={x => x} />
			<hr />
			<Accordion
				title={'Contolled Accordion'}
				collapsed={collapsed}
				changeCollapsed={changeCollapsed}
				items={people}
				onClick={onClick}
			/>
			<UncontrolledAccordion />
		</div>
	)
}

export default App
