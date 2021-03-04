import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'
import { UncontrolledRating, UncontrolledRatingType } from './UncontrolledRating';
import { action } from '@storybook/addon-actions';

export default {
	title: 'UncontrolledRating',
	component: UncontrolledRating,
} as Meta

const callback = action('rating try to change value')

const Template: Story<UncontrolledRatingType> = (args) => <UncontrolledRating {...args} />

export const RatingChanging = Template.bind({});
RatingChanging.args = {
	onChange: callback
}