import React from "react";
import { StoryFn } from "@storybook/react";
import { Button, IButtonProps } from "../components";


export default {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "button",
  icon: false
};

export const All = () => {
  return (
    <div className="flex gap-12">
      <Button variant="contained">
        button
      </Button>
    </div>
  );
};

// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// export default {
//   title: 'Example/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
