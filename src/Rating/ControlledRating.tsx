import React from 'react'

type ControlledRatingType = {
	title: string
	rating: number
	toggleRating: (value: number) => void
}

function ControlledRating(props: ControlledRatingType) {
	return (
		<div className='item'>
			<h5>{props.title}</h5>
			<StarBody rating={props.rating} toggleRating={props.toggleRating} />
		</div>
	)
}

type StarBodyType = {
	rating: number
	toggleRating: (value: number) => void
}

function StarBody(props: StarBodyType) {
	return <div className={'star-line'}>
		<StarItem rating={props.rating} toggleRating={props.toggleRating} value={1} />
		<StarItem rating={props.rating} toggleRating={props.toggleRating} value={2} />
		<StarItem rating={props.rating} toggleRating={props.toggleRating} value={3} />
		<StarItem rating={props.rating} toggleRating={props.toggleRating} value={4} />
		<StarItem rating={props.rating} toggleRating={props.toggleRating} value={5} />
	</div>
}

type StarItemType = {
	rating: number
	value: number
	toggleRating: (value: number) => void
}


function StarItem(props: StarItemType) {
	const rating = props.rating
	const tagClass = `${rating >= props.value ? 'selected' : null}`
	const toggleRatingHandler = () => {
		props.toggleRating(props.value)
	}


	return (
		<span className={tagClass}>
			star<button onClick={toggleRatingHandler}>{props.value}</button>
		</span>
	)
}

export default ControlledRating