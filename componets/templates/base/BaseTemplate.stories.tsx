import { Meta, StoryObj } from '@storybook/react';
import { BaseTemplateMocks } from './BaseTemplate.mocks';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';

type Story = StoryObj<typeof BaseTemplate>;

const meta: Meta<typeof BaseTemplate> = {
  component: BaseTemplate,
};


export const Primary: Story = {
  args: {
    ...BaseTemplateMocks.base,
  } as IBaseTemplate,
};

export const Secondary: Story = {
    args: {
        ...BaseTemplateMocks.alt,
    } as IBaseTemplate,
};

export default meta;
