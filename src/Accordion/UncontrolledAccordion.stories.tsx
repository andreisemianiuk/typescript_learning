import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'
import { UncontrolledAccordion } from './UncontrolledAccordion';

export default {
	title: 'UncontrolledAccordion',
	component: UncontrolledAccordion,
} as Meta

export const AccordionChanging = () => {
	return <UncontrolledAccordion />
}