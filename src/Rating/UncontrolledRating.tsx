import React, { useState } from 'react'
import { RatingType } from './ControlledRating'

export type UncontrolledRatingType = {
	defaultValue?: RatingType
	onChange: (value: RatingType) => void
}

export function UncontrolledRating({ onChange, defaultValue }: UncontrolledRatingType) {
	const [rating, setRating] = useState<RatingType>(defaultValue ? defaultValue : 0)
	return (
		<div className='item'>
			<h5>Uncontrolled Rating</h5>
			<StarItem selected={rating > 0} setRating={setRating} value={1} onChange={onChange} />
			<StarItem selected={rating > 1} setRating={setRating} value={2} onChange={onChange} />
			<StarItem selected={rating > 2} setRating={setRating} value={3} onChange={onChange} />
			<StarItem selected={rating > 3} setRating={setRating} value={4} onChange={onChange} />
			<StarItem selected={rating > 4} setRating={setRating} value={5} onChange={onChange} />
		</div>
	)
}

type StarItemType = {
	selected: boolean
	value: RatingType
	setRating: (value: RatingType) => void
	onChange: (value: RatingType) => void
}

function StarItem({ value, selected, setRating, onChange }: StarItemType) {
	const ratingHandler = () => {
		setRating(value)
		onChange(value)
	}
	return <span>{selected ? <b>star</b> : 'star'}<button onClick={ratingHandler}>{value}</button></span>
}
