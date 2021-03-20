import React, { ChangeEvent, useState } from 'react'

type TeamsType = {
	teams: string[]
}

const ChampionsLeague = () => {
	let [count, setCount] = useState(0)
	let [value, setValue] = useState('')
	const [teams, setTeam] = useState<Array<string>>(['Bayern', 'Real Madrid', 'Chealsea'])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	const addTeam = () => {
		setTeam([...teams, value])
		setValue('')
	}

	return (
		<div>
			<div>
				<div>Count: {count}</div>
				<button onClick={() => setCount(count + 1)}>Add</button>
			</div>
			<div>
				<input type='text' value={value} onChange={onChange} onBlur={addTeam} />
				<Teams teams={teams} />
			</div>
		</div>
	)
}
const SecretTeams = (props: TeamsType) => {
	console.log('Teams had rendered');

	return (
		<div>
			{props.teams.map((t, i) => <div key={`${t}-${i}`}>{t}</div>)}
		</div>)
}
const Teams = React.memo(SecretTeams)



export default ChampionsLeague