import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  getCapacitor
} from "./chunk-SA6RW3T2.js";

// node_modules/@ionic/core/dist/esm/keyboard-DAF8GNJ9.js
var ExceptionCode;
(function(ExceptionCode2) {
  ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
  ExceptionCode2["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var KeyboardResize;
(function(KeyboardResize2) {
  KeyboardResize2["Body"] = "body";
  KeyboardResize2["Ionic"] = "ionic";
  KeyboardResize2["Native"] = "native";
  KeyboardResize2["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var Keyboard = {
  getEngine() {
    const capacitor = getCapacitor();
    if (capacitor?.isPluginAvailable("Keyboard")) {
      return capacitor.Plugins.Keyboard;
    }
    return void 0;
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!engine?.getResizeMode) {
      return Promise.resolve(void 0);
    }
    return engine.getResizeMode().catch((e) => {
      if (e.code === ExceptionCode.Unimplemented) {
        return void 0;
      }
      throw e;
    });
  }
};

export {
  KeyboardResize,
  Keyboard
};
//# sourceMappingURL=chunk-DBPUCF5Y.js.map
