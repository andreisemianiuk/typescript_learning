import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Accordion, AccordionType } from './Accordion';

export default {
	title: 'Accordion',
	component: Accordion,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta

const callback = action('accordion mode try to change')
const callbackClickItem = action('item was clicked')

const Template: Story<AccordionType> = (args) => <Accordion {...args} />

export const AccordionChanging = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	return <Accordion
		title={'Accordion'}
		items={[
			{ name: 'Kolya', value: 1 },
			{ name: 'Petya', value: 2 },
			{ name: 'Vova', value: 3 },
			{ name: 'Sasha', value: 4 }
		]}
		collapsed={collapsed}
		changeCollapsed={() => setCollapsed(!collapsed)}
		onClick={callbackClickItem}
	/>
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
	onClick: callbackClickItem,
	title: 'Accordion (Uncollapsed)',
	items: [
		{ name: 'Kolya', value: 1 },
		{ name: 'Petya', value: 2 },
		{ name: 'Vova', value: 3 },
		{ name: 'Sasha', value: 4 }
	]
}