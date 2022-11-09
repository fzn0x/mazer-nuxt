import { Tooltip } from "bootstrap";

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Tooltip,
    },
  },
}));
