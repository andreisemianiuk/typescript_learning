import { StateCollapsedType } from './UncontrolledAccordion'

export type ToggleCollapsed = {
	collapsed: boolean
}

export type CollapsedActionType = {
	type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export const reducer = (state: StateCollapsedType, action: CollapsedActionType): StateCollapsedType => {
	switch(action.type) {
		case TOGGLE_COLLAPSED:
			return {
				...state,
				collapsed: !state.collapsed
			}
		default:
			throw new Error('invalid action type') 	
	}
}