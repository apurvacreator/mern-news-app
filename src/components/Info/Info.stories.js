import React from 'react';
import Info from './Info';

export default {
    title: 'Info',
    component: Info,
};

const Template = (args) => <Info {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: 'No results found',
    variant: 'primary',
};

export const Error = Template.bind({});
Error.args = {
    message: 'Something went wrong',
    variant: 'danger',
};
