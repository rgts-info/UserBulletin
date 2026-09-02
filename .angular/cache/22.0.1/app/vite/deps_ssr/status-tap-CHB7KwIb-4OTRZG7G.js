import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-2ALKC222.js";
import {
  componentOnReady
} from "./chunk-KZSWY5U2.js";
import "./chunk-L65IGNW5.js";
import {
  readTask,
  writeTask
} from "./chunk-5XV4S2PZ.js";
import "./chunk-EEKZWN3V.js";

// node_modules/@ionic/core/dist/esm/status-tap-CHB7KwIb.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-CHB7KwIb-4OTRZG7G.js.map
