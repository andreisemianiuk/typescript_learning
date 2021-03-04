import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { ControlledRating, ControlledRatingType, RatingType } from './ControlledRating'
import { action } from '@storybook/addon-actions'

export default {
	title: 'Rating',
	component: ControlledRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta

const callback = action('rating button clicked')

const Template: Story<ControlledRatingType> = (args) => <ControlledRating {...args} />

export const RatingChanging = () => {
	const [value, setValue] = useState<RatingType>(0)
	return <ControlledRating title={'Rating'} rating={value} toggleRating={setValue} />
}

export const Rating0 = Template.bind({});
Rating0.args = {
	rating: 0,
	toggleRating: callback,
	title: 'Rating',
}

export const Rating1 = Template.bind({});
Rating1.args = {
	rating: 1,
	toggleRating: callback,
	title: 'Rating',
}

export const Rating2 = Template.bind({});
Rating2.args = {
	rating: 2,
	toggleRating: callback,
	title: 'Rating',
}

export const Rating3 = Template.bind({});
Rating3.args = {
	rating: 3,
	toggleRating: callback,
	title: 'Rating',
}

export const Rating4 = Template.bind({});
Rating4.args = {
	rating: 4,
	toggleRating: callback,
	title: 'Rating',
}

export const Rating5 = Template.bind({});
Rating5.args = {
	rating: 5,
	toggleRating: callback,
	title: 'Rating',
}