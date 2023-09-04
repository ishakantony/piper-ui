import { ButtonProps } from "./button";

const base: ButtonProps = {
  variant: "default",
  size: "default",
  children: "Submit",
};

const destructive: ButtonProps = {
  ...base,
  variant: "destructive",
};

const outline: ButtonProps = {
  ...base,
  variant: "outline",
};

const secondary: ButtonProps = {
  ...base,
  variant: "secondary",
};

const ghost: ButtonProps = {
  ...base,
  variant: "ghost",
};

const link: ButtonProps = {
  ...base,
  variant: "link",
};

export const mockButtonProps = {
  base,
  destructive,
  outline,
  secondary,
  ghost,
  link,
};
