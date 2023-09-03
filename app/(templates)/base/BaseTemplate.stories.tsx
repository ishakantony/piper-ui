import { Meta, StoryObj } from "@storybook/react";
import BaseTemplate from "./BaseTemplate";

const meta: Meta<typeof BaseTemplate> = {
  title: "template/BaseTemplate",
  component: BaseTemplate,
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Primary: Story = {
  args: {
    sampleTextProp: "Hello World!",
  },
};
