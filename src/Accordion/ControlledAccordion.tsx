import React from 'react'

export type ControlledAccordionType = {
	title: string
	collapsed: boolean
	changeCollapsed: () => void
}

export function ControlledAccordion(props: ControlledAccordionType) {
	return (
		<div className='item'>
			<AccordionTitle title={props.title} collapsed={props.collapsed} changeCollapsed={props.changeCollapsed} />
		</div>
	)
}

function AccordionTitle(props: ControlledAccordionType) {
	return <div>
		<h3 className={'acc-title'} onClick={() => props.changeCollapsed()}>
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
