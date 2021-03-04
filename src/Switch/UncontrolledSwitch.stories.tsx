import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import { UncontrolledSwitch, UncontrolledSwitchType } from './UncontrolledSwitch';
import { action } from '@storybook/addon-actions';

export default {
	title: 'UncontrolledSwitch',
	component: UncontrolledSwitch,
} as Meta

const callback = action('try to change value')

const Template: Story<UncontrolledSwitchType> = (args) => <UncontrolledSwitch {...args} />

export const SwitchOn = Template.bind({});
SwitchOn.args = {
	defaultValue: true,
	onChange: callback
}

export const SwitchOff = Template.bind({});
SwitchOff.args = {
	defaultValue: false,
	onChange: callback
}
