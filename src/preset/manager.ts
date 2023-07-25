import { addons, types } from "@storybook/addons";

import { Tool } from "../tools/Tool";
import { ADDON_ID, TOOL_ID } from "../tools/constants";


// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Dark Mode Toggle",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});