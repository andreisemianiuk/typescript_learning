import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { ControlledSwitch, ControlledSwitchType } from './ControlledSwitch';

export default {
	title: 'Switch',
	component: ControlledSwitch,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta

const callback = action('switch button clicked')

const Template: Story<ControlledSwitchType> = (args) => <ControlledSwitch {...args} />

export const SwitchChanging = () => {
	const [on, setOn] = useState<boolean>(false)
	return <ControlledSwitch title={'Switch'} on={on} changeOn={setOn} />
}

export const SwitchOn = Template.bind({});
SwitchOn.args = {
	on: true,
	changeOn: callback,
	title: 'Switch On',
}

export const SwitchOff = Template.bind({});
SwitchOff.args = {
	on: false,
	changeOn: callback,
	title: 'Switch Off',
}