import React from 'react'

type ItemType = {
	name: string
	value: number
}

export type AccordionType = {
	title: string
	items: ItemType[]
	collapsed: boolean
	changeCollapsed: () => void
	onClick: (value: number, name: string) => void
}

export function Accordion(props: AccordionType) {
	return (
		<div className='item'>
			<AccordionTitle
				title={props.title}
				items={props.items}
				collapsed={props.collapsed}
				onClick={props.onClick}
				changeCollapsed={props.changeCollapsed} />
		</div>
	)
}

function AccordionTitle(props: AccordionType) {
	return <div>
		<h3 className={'acc-title'} onClick={() => props.changeCollapsed()}>
			{props.title}
		</h3>
		{!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
	</div>
}

type AccordionBodyType = {
	items: ItemType[]
	onClick: (value: number, name: string) => void
}

function AccordionBody(props: AccordionBodyType) {
	return <div>
		{props.items.map((p) => <div key={p.value} onClick={() => props.onClick(p.value, p.name)}>{p.name}</div>)}
	</div>
}
