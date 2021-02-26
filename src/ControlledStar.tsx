import React from 'react'

type ControlledStarType = {
	thick: boolean
	toggleThickness: () => void
}

function ControlledStar(props: ControlledStarType) {
	return (
		<div className='item'>
			<ControlledStarBody thick={props.thick} toggleThickness={props.toggleThickness} />
			<ControlledStarBody thick={props.thick} toggleThickness={props.toggleThickness} />
			<ControlledStarBody thick={props.thick} toggleThickness={props.toggleThickness} />
			<ControlledStarBody thick={props.thick} toggleThickness={props.toggleThickness} />
			<ControlledStarBody thick={props.thick} toggleThickness={props.toggleThickness} />
		</div>
	)
}

type ControlledStarBodyType = {
	thick: boolean
	toggleThickness: () => void
}

function ControlledStarBody(props: ControlledStarBodyType) {
	return <div className={'star-line'}>
		<ControlledStarItem thick={props.thick} toggleThickness={props.toggleThickness} />
		<ControlledStarItem thick={props.thick} toggleThickness={props.toggleThickness} />
		<ControlledStarItem thick={props.thick} toggleThickness={props.toggleThickness} />
		<ControlledStarItem thick={props.thick} toggleThickness={props.toggleThickness} />
		<ControlledStarItem thick={props.thick} toggleThickness={props.toggleThickness} />
	</div>
}

type ControlledStarItemType = {
	thick: boolean
	toggleThickness: () => void
}


function ControlledStarItem(props: ControlledStarItemType) {
	const thick = props.thick
	const tagClass = `${thick ? 'selected' : null}`


	return <div className={tagClass}>
		star<button onClick={props.toggleThickness}>@</button>
	</div>
}

export default ControlledStar