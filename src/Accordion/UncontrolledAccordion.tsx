import React, { useReducer } from 'react'
import { reducer, TOGGLE_COLLAPSED } from './reducer'

export type StateCollapsedType = {
	collapsed: boolean
}

export const stateCollapsed: StateCollapsedType = {
	collapsed: false
}

export function UncontrolledAccordion() {
	let [state, dispatch] = useReducer(reducer, stateCollapsed)

	return (
		<div className='item'>
			<AccordionTitle title={'Uncontrolled Accordion'} collapsed={state.collapsed} changeCollapsed={() => dispatch({ type: TOGGLE_COLLAPSED })} />
		</div>
	)
}

export type AccordionTitleType = {
	title: string
	collapsed: boolean
	changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitleType) {
	return <div>
		<h3 className={'acc-title'} onClick={props.changeCollapsed}>
			{props.title}
		</h3>
		{!props.collapsed && <AccordionBody />}
	</div>
}

function AccordionBody() {
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}
