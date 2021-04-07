import { Meta } from '@storybook/react/types-6-0';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';

export const UseCallback = () => {
	console.log('UseCallback Componenet has rendered')
	const [value, setValue] = useState(0)
	const [books, setBooks] = useState<string[]>(['HTML', 'CSS', 'JS'])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.currentTarget.value)
	}

	const memoisedAddbookWithMemo = useMemo(() => {
		return () => {
			setBooks([...books, `React-${Date.now()}`])
		}
	}, [books])

	const memoisedAddbookWithUseCallback = useCallback(() => {
		setBooks([...books, `React-${Date.now()}`])
	}, [books])

	return (
		<div>
			<BooksWithReactMemo books={books} addBook={memoisedAddbookWithUseCallback} />
			<hr />
			<div>
				<input type='number' value={value} onChange={onChange} />
				<div>Square of number: {value ** 2}</div>
			</div>
		</div>
	)
}

type BooksType = {
	books: string[]
	addBook: () => void
}

const Books = ({ books, addBook }: BooksType) => {
	console.log('Books has rendered');

	return <div>
		<ul>
			{books.map((b, i) => (<li key={`${i}-${b}`}>{b}</li>))}
		</ul>
		<button onClick={addBook}>Add book</button>
	</div>
}


const BooksWithReactMemo = React.memo(Books)

export default {
	title: 'UseCallback',
	component: UseCallback
} as Meta

