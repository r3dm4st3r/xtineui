import { type MantineThemeComponents, Switch } from "@xtineui/base";

export const themeSwitch: Partial<MantineThemeComponents> = {
  Switch: Switch.extend({
    defaultProps: {
      display: "inline-flex",
    },
  }),
};
