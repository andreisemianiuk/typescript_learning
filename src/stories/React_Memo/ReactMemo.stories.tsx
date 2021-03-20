import { Story, Meta } from '@storybook/react/types-6-0';
import ChampionsLeague from './ReactMemo';

export default {
	title: 'React_Memo',
	component: ChampionsLeague,
} as Meta;

const Template: Story<any> = (args) => <ChampionsLeague {...args} />;

export const Teams = Template.bind({});
	// Teams.args = {
	//   label: 'Button',
	// };
