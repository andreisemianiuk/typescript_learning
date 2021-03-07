import React, { useState, KeyboardEvent } from 'react'
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
	const [value, setValue] = useState<number>(0)
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
						<div className={s.friend}
							onClick={() => chooseFriend(m.value)}
							tabIndex={0}
						>
							{m.name}
						</div>)
					}
				</div>
			}
		</div>
	)
}