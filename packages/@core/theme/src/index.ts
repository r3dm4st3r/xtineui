import type {
  MantineProviderProps,
  MantineTheme,
  MantineThemeOverride,
} from "@xtineui/base";
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@xtineui/base";
import { themeComponents } from "./components";
import { lscManager } from "./manager/lsc-manager";
import { THEME_COLORS, THEME_PRIMARY } from "./colors";
import { THEME_CONFIG } from "./theme";

const themeOverride: MantineThemeOverride = createTheme({
  colors: THEME_COLORS,
  primaryColor: THEME_PRIMARY,
  primaryShade: 7,
  cursorType: "pointer",
  components: themeComponents,
});

const theme: MantineTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export { theme, THEME_COLORS, THEME_PRIMARY, THEME_CONFIG, lscManager };
export type { MantineTheme, MantineProviderProps, MantineThemeOverride };
