import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ControlledAccordion } from './ControlledAccordion';

export default {
	title: 'ControlledAccordion',
	component: ControlledAccordion,
} as Meta

export const ControlledAcc = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	return (
		<ControlledAccordion title={'ContrAcc'} collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)} />
	)
}
