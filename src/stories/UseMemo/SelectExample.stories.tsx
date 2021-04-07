import { Meta } from '@storybook/react/types-6-0';
import React, { ChangeEvent, useMemo, useState } from 'react';

type CityType = {
	name: string
	country: string
	population: string
}


export const SelectExample = () => {
	console.log('SelectExample Componenet has rendered')
	const [cities, setCities] = useState<CityType[]>([
		{
			name: 'Minsk',
			country: 'Belarus',
			population: '8.5'
		},
		{
			name: 'Kiev',
			country: 'Ukraine',
			population: '10'
		},
		{
			name: 'Moscow',
			country: 'Russia',
			population: '15'
		},
		{
			name: 'Brest',
			country: 'Belarus',
			population: '0.3'
		},
		{
			name: 'Gomel',
			country: 'Belarus',
			population: '0.5'
		}
	]
	)
	const [value, setValue] = useState(0)
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.currentTarget.value)
	}

	const mCities = useMemo(() => {
		return cities.filter(c => c.name.toLowerCase().indexOf('m') !== -1)
	}, [cities])
	const more10PopulationCities = useMemo(() => {
		return cities.filter(c => +c.population >= 10)
	}, [cities])
	const belarusCities = useMemo(() => {
		return cities.filter(c => c.country === 'Belarus')
	}, [cities])

	const [сityName, setCityName] = useState('')
	const [сityCountry, setCityCountry] = useState('')
	const [сityPopulation, setCityPopulation] = useState('')

	const [errorName, setErrorName] = useState('')
	const [errorCountry, setErrorCountry] = useState('')
	const [errorPopulation, setErrorPopulation] = useState('')

	const onChangeCityName = (e: ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target.value
		if (currentValue.length === 0) {
			setErrorName('Enter correct name')
			setCityName(currentValue)
		}
		if (currentValue) {
			setCityName(currentValue)
			setErrorName('')
		}
	}
	const onChangeCityCountry = (e: ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target.value
		if (!currentValue) {
			setErrorCountry('Enter correct country')
			setCityCountry(currentValue)
		}
		if (currentValue) {
			setCityCountry(currentValue)
			setErrorCountry('')
		}
	}
	const onChangeCityPopulation = (e: ChangeEvent<HTMLInputElement>) => {
		const currentValue = e.target.value
		if (!currentValue) {
			setErrorPopulation('Enter correct population')
			setCityPopulation(currentValue)
		}
		if (currentValue) {
			setCityPopulation(currentValue)
			setErrorPopulation('')
		}
	}

	const addCity = () => {
		setCities([
			...cities,
			{
				name: сityName,
				country: сityCountry,
				population: сityPopulation
			}
		])
		setCityName('')
		setCityCountry('')
		setCityPopulation('')
	}

	return (
		<div>
			<CitiesWithReactMemo
				mCities={mCities}
				belarusCities={belarusCities}
				more10PopulationCities={more10PopulationCities}
			/>
			<ul>
				{cities.map((c, i) => (<li key={`${i}-${c.name}`}>{JSON.stringify(c)}</li>))}
			</ul>
			<div>
				<input
					type='text'
					placeholder={errorName ? errorName : 'Enter city name'}
					style={errorName ? stylesError : undefined}
					value={сityName}
					onChange={onChangeCityName}
				/>
				<input
					type='text'
					placeholder={errorCountry ? errorCountry : 'Enter city country'}
					style={errorCountry ? stylesError : undefined}
					value={сityCountry}
					onChange={onChangeCityCountry}
				/>
				<input
					type='text'
					placeholder={errorPopulation ? errorPopulation : 'Enter city population'}
					style={errorPopulation ? stylesError : undefined}
					value={сityPopulation}
					onChange={onChangeCityPopulation}
				/>
				<button type='submit' onClick={addCity}>Submit</button>
			</div>
			<hr />
			<div>
				<input type='number' value={value} onChange={onChange} />
				<div>Square of number: {value ** 2}</div>
			</div>
		</div>
	)
}

type CitiesPropsType = {
	mCities: CityType[]
	more10PopulationCities: CityType[]
	belarusCities: CityType[]
}
const Cities = ({ mCities, belarusCities, more10PopulationCities }: CitiesPropsType) => {
	console.log('Cities has rendered')
	return (
		<div>
			<select>
				{mCities.map(c => <option>{c.name}</option>)}
			</select>
			<select>
				{more10PopulationCities.map(c => <option>{c.name}</option>)}
			</select>
			<select>
				{belarusCities.map(c => <option>{c.name}</option>)}
			</select>
		</div>
	)
}

const CitiesWithReactMemo = React.memo(Cities)

const stylesError = {
	color: 'red',
	borderColor: 'red',
	outline: 'none'
}

export default {
	title: 'UseMemo_Select',
	component: SelectExample
} as Meta

