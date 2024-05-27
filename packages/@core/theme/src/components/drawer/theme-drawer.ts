import { Drawer, type MantineThemeComponents } from "@xtineui/base";

export const themeDrawer: Partial<MantineThemeComponents> = {
  Drawer: Drawer.extend({
    defaultProps: {
      size: "xs",
    },
  }),
};
