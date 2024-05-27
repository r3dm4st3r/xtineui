import type {
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@xtineui/base";
import { isMantineColorScheme } from "@xtineui/base";

export interface LSColorManagerOptions {
  key?: string;
}

export const lscManager = ({
  key = "system-theme",
}: LSColorManagerOptions = {}): MantineColorSchemeManager => {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      try {
        return (
          (window.localStorage.getItem(key) as MantineColorScheme) ||
          defaultValue
        );
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        throw new Error("LS Manager was unable to save color scheme.");
      }
    },

    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };

      window.addEventListener("storage", handleStorageEvent);
    },

    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },

    clear: () => {
      window.localStorage.removeItem(key);
    },
  };
};
