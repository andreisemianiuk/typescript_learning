import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { ControlledAccordion, ControlledAccordionType } from './ControlledAccordion';

export default {
	title: 'Accordion',
	component: ControlledAccordion,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta

const callback = action('accordion mode try to change')

const Template: Story<ControlledAccordionType> = (args) => <ControlledAccordion {...args} />

export const AccordionChanging = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	return <ControlledAccordion title={'Accordion'} collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)} />
}

export const AccordionCollapsed = Template.bind({});
AccordionCollapsed.args = {
	collapsed: true,
	changeCollapsed: callback,
	title: 'Accordion (Collapsed)',
}

export const AccordionUncollapsed = Template.bind({});
AccordionUncollapsed.args = {
	collapsed: false,
	changeCollapsed: callback,
	title: 'Accordion (Uncollapsed)',
}