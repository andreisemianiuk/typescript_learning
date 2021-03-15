// import { useReducer } from 'react'
import { reducer, TOGGLE_COLLAPSED } from './reducer'
import { StateCollapsedType } from './UncontrolledAccordion'

test('collapsed should be true', () => {
	// data
	const state: StateCollapsedType = {
		collapsed: false
	}
	// action
	let newState = reducer(state, {type: TOGGLE_COLLAPSED})
	// expectation
	expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
	// data
	const state: StateCollapsedType = {
		collapsed: true
	}
	// action
	let newState = reducer(state, {type: TOGGLE_COLLAPSED})
	// expectation
	expect(newState.collapsed).toBe(false)
})

test('reducer should throw error cause action type is invalid', () => {
	// data
	const state: StateCollapsedType = {
		collapsed: false
	}
	
	// expectation
	expect(() => {
		reducer(state, {type: 'FAKE_TYPE'})
	}).toThrowError()
})