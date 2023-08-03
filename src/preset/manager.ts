import { addons, types } from "@storybook/addons";

import { ToolContextTheme } from "../tools";
import { ADDON_ID, TOOL_ID } from "../tools/constants";


// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "context_theme",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ToolContextTheme,
  });
});
