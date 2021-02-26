import React, { useState } from 'react'

function UncontrolledRating() {
	const [rating, setRating] = useState(0)
	return (
		<div className='item'>
			<h5>Uncontrolled Rating</h5>
			<StarItem value={1} rating={rating} setRating={setRating} />
			<StarItem value={2} rating={rating} setRating={setRating} />
			<StarItem value={3} rating={rating} setRating={setRating} />
			<StarItem value={4} rating={rating} setRating={setRating} />
			<StarItem value={5} rating={rating} setRating={setRating} />
		</div>
	)
}

type StarItemType = {
	value: number
	rating: number
	setRating: (value: number) => void
}

function StarItem(props: StarItemType) {


	const tagClass = `${props.value <= props.rating ? 'selected' : null}`
	const toggleRating = () => props.setRating(props.value)

	return <span className={tagClass}>
		star<button onClick={toggleRating}>{props.value}</button>
	</span>
}

export default UncontrolledRating