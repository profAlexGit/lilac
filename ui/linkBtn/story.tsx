
import {LinkBtn} from './linkBtn';
import {ILinkBtn} from './types';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
    title: 'UI/linkButton',
    component: LinkBtn,
} as Meta

const Template: Story<ILinkBtn> = (args) => <LinkBtn {...args} />;

export const linkButton = Template.bind({});

linkButton.args = {
    label: 'Нажать',
    href: '/',
}
