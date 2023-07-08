import { Toast, Tooltip } from "bootstrap";

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Toast,
      Tooltip,
    },
  },
}));
