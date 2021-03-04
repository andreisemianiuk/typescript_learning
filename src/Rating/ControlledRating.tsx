import React from 'react'

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export type ControlledRatingType = {
	title: string
	rating: RatingType
	toggleRating: (value: RatingType) => void
}

export function ControlledRating(props: ControlledRatingType) {
	return (
		<div className='item'>
			<h5>{props.title}</h5>
			<StarBody rating={props.rating} toggleRating={props.toggleRating} />
		</div>
	)
}

type StarBodyType = {
	rating: RatingType
	toggleRating: (value: RatingType) => void
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
	rating: RatingType
	value: RatingType
	toggleRating: (value: RatingType) => void
}


function StarItem({ rating, toggleRating, value }: StarItemType) {
	const toggleRatingHandler = () => {
		toggleRating(value)
	}

	return (
		<span>
			{rating >= value ? <b>star</b> : 'star'}<button onClick={toggleRatingHandler}>{value}</button>
		</span>
	)
}
