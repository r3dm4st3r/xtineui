import { type MantineProviderProps } from "@xtineui/base";
import { lscManager } from "./manager/lsc-manager";

const THEME_PREFIX = "xtineui" as const;

const THEME_CONFIG: Partial<MantineProviderProps> = {
  classNamesPrefix: THEME_PREFIX,
  colorSchemeManager: lscManager({ key: "system-theme" }),
  deduplicateCssVariables: true,
  defaultColorScheme: "auto",
  withCssVariables: true,
  withGlobalClasses: true,
  withStaticClasses: true,
};

export { THEME_CONFIG, THEME_PREFIX };
