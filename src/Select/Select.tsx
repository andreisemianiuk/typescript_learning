import React, { useState, KeyboardEvent, MouseEvent } from 'react'
import s from './Select.module.css'


type ItemType = {
	name: string
	value: number
}

export type SelectType = {
	title: string
	items: ItemType[]
}

export function Select(props: SelectType) {
	let [value, setValue] = useState<number>(0)
	const [collapsed, setCollapsed] = useState<boolean>(true)

	const currentFriend = props.items.find(i => i.value === value)?.name

	const collapseHandler = () => {
		setCollapsed(!collapsed)
	}

	const chooseFriend = (v: number) => {
		setValue(v)
		setCollapsed(true)
	}

	const pressHandler = (e: KeyboardEvent<HTMLDivElement>) => {

		if (e.key === 'Enter') {
			setCollapsed(!collapsed)
		} else if (e.key === 'ArrowDown') {
			if (value < props.items.length - 1) {
				setValue(++value)
			} else {
				setValue(0)
			}
		} else if (e.key === 'ArrowUp') {
			if (value) {
				setValue(--value)
			} else {
				setValue(4)
			}
		} else if (e.key === 'Escape') {
			setCollapsed(true)
		}
	}

	const mouseHandler = (e: MouseEvent<HTMLDivElement>) => {
		const current = props.items.find(v => v.name === e.currentTarget.innerText)

		if (current?.value || current?.name === 'None') {
			setValue(current.value)
		}
	}

	return (
		<div>
			<h3>{props.title}</h3>
			<div className={s.box}
				onClick={collapseHandler}
				tabIndex={0}
				onKeyUp={pressHandler}
			>
				{!value ?
					<i className={s.none}>
						{props.items[0].name}
					</i>
					: currentFriend}
				{collapsed ? <span className={s.drop}>&#9662;</span> : <span className={s.drop}>&#9652;</span>}
			</div>
			{!collapsed &&
				<div className={s.list}>
					{props.items.map(m =>
						<div className={`${s.friend} ${m.value === value ? `${s.hover}` : ''}`}
							onClick={() => chooseFriend(m.value)}
							tabIndex={0}
							onKeyUp={pressHandler}
							onMouseOver={mouseHandler}
						>
							{m.name}
						</div>)
					}
				</div>
			}
		</div>
	)
}