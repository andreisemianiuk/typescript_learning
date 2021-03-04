import { Meta } from '@storybook/react/types-6-0';
import React, { ChangeEvent, useRef, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
	title: 'input',
} as Meta

export const UncontrolledInput = () => <input />

export const TrackUncontrolledInput = () => {
	const [value, setValue] = useState<string>('')
	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
			{value}
		</div>
	)
}

export const TrackUncontrolledInputOnKeyPress = () => {
	const [value, setValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const save = () => {
		const el = inputRef.current as HTMLInputElement
		setValue(el.value)
	}

	return (
		<div>
			<input ref={inputRef} />
			<button onClick={save}>save</button>
			{value}
		</div>
	)
}

export const FixedInput = () => <input value={'fixed value'} />

export const ControlledInput = () => {
	const [value, setValue] = useState<string>('')
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	return (
		<div>
			<input value={value} onChange={onChange} />
			{value}
		</div>
	)
}

export const ControlledCheckbox = () => {
	const [value, setValue] = useState<boolean>(false)
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.checked)
	}
	return (
		<div>
			<input type={'checkbox'} checked={value} onChange={onChange} />
		</div>
	)
}

export const ControlledSelect = () => {
	const [value, setValue] = useState<string | undefined>('')
	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(e.currentTarget.value)
	}
	return (
		<select value={value} onChange={onChange}>
			<option>none</option>
			<option value='1'>Minsk</option>
			<option value='2'>Kiev</option>
			<option value='3'>Moscow</option>
		</select>
	)
}
