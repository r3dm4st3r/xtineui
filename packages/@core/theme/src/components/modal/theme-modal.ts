import { type MantineThemeComponents, Modal } from "@xtineui/base";

export const themeModal: Partial<MantineThemeComponents> = {
  Modal: Modal.extend({
    defaultProps: {
      size: "md",
    },
  }),
};
