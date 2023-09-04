import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { mockButtonProps } from "./button.mocks";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    ...mockButtonProps.base,
  },
};

export const Destructive: Story = {
  args: {
    ...mockButtonProps.destructive,
  },
};

export const Outline: Story = {
  args: {
    ...mockButtonProps.outline,
  },
};

export const Secondary: Story = {
  args: {
    ...mockButtonProps.secondary,
  },
};

export const Ghost: Story = {
  args: {
    ...mockButtonProps.ghost,
  },
};

export const Link: Story = {
  args: {
    ...mockButtonProps.link,
  },
};
