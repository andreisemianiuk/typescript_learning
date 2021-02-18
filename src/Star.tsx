import React, { useState } from 'react'



function Star() {
	// let [collapsed, setCollapsed] = useState<boolean>(true)

	// const changeCollapsed = () => {
	// 	setCollapsed(!collapsed)
	// }

	return (
		<div className='item'>
			<StarBody value={0} />
			<StarBody value={1} />
			<StarBody value={2} />
			<StarBody value={3} />
			<StarBody value={4} />
			<StarBody value={5} />
		</div>
	)
}


type StarBodyType = {
	value: number
}

function StarBody(props: StarBodyType) {

	return <div className={'star-line'}>
		<StarItem />
		<StarItem />
		<StarItem />
		<StarItem />
		<StarItem />
		<StarItem />
	</div>
}

function StarItem() {
	const [tagged, setTagged] = useState(false)

	return <div className={`${tagged ? 'selected' : null}`}>
		star<button onClick={() => setTagged(!tagged)}>@</button>
	</div>
}

export default Star