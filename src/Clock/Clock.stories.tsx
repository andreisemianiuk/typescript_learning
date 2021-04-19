import { Meta, Story } from '@storybook/react/types-6-0';
import { Clock } from './Clock';

export default {
	title: 'Clock',
	component: Clock,
} as Meta;

const Template: Story<any> = () => <Clock />

export const ClockWithUseEffect = Template.bind({})

