import React from "react";
import { StoryFn } from "@storybook/react";
import { Button, IButtonProps, Icons } from "../components";


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      control: "boolean",
      mapping: {
        true: <Icons.ArrowBottom />,
        false: null,
      }
    },
    size: { control: "select" },
    variant: { control: "select" },
  },
  args: {
    icon: <Icons.ArrowBottom />,
    children: "button",
    round: false,
    size: "large",
    variant: "contained",
    disabled: false,
  },
};

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;
Template.bind({})

export const Common = Template.bind({});
Common.args = {
  // children: "button",
  // round: false,
  // size: "large",
  // variant: "contained",
  // disabled: false,
  // icon: <Icons.ArrowBottom />
  // icon: { disable: true }
};

// const meta: Meta<typeof YourComponent> = {
//   component: YourComponent,
//   argTypes: {
//     // foo is the property we want to remove from the UI
//     foo: {
//       table: {
//         disable: true,
//       },
//     },
//   },
// };


// export const All = () => {
//   return (
//     <div className="flex gap-12">
//       some text
//       {/* <Icon /> */}
//       <Button variant="contained" icon={<Icons.Zoom />}>
//         button
//       </Button>
//       <Icons.ArrowBottom />
//     </div>
//   );
// };

// import { Button } from "./Button";

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// export default {
//   title: "Example/Button",
//   component: Button,
//   tags: ["autodocs"],
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// };

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: "Button",
//   },
// };

// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
