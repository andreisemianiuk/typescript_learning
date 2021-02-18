import React, { useState } from 'react'

function Accordion() {
	let [collapsed, setCollapsed] = useState<boolean>(true)

	const changeCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div className='item'>
			<AccordionTitle title={'Accordion'} collapsed={collapsed} changeCollapsed={changeCollapsed} />
		</div>
	)
}

type AccordionTitleType = {
	title: string
	collapsed: boolean
	changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitleType) {
	return <div>
		<h3 className={'acc-title'} onClick={props.changeCollapsed}>
			{props.title}
		</h3>
		{props.collapsed ? <AccordionBody /> : null}
	</div>
}

function AccordionBody() {
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}



export default Accordion