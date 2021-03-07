// import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
// import { action } from '@storybook/addon-actions'
import { Select, SelectType } from './Select'

export default {
	title: 'Select',
	component: Select,
} as Meta

// const callback = action('accordion mode try to change')
// const callbackClickItem = action('item was clicked')

const Template: Story<SelectType> = (args) => <Select {...args} />


export const Select1 = Template.bind({});
Select1.args = {
	items: [
		{ name: 'Kolya', value: 1 },
		{ name: 'Petya', value: 2 },
		{ name: 'Vova', value: 3 },
		{ name: 'Sasha', value: 4 }
	],
	title: 'Select',
}