import { type MantineThemeComponents, Table } from "@xtineui/base";

export const themeTable: Partial<MantineThemeComponents> = {
  Table: Table.extend({
    defaultProps: {
      withRowBorders: true,
      withColumnBorders: true,
      striped: true,
      style: {
        textTransform: "capitalize",
      },
    },
  }),
};
