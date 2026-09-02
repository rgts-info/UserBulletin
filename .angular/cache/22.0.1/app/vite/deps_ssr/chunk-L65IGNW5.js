import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/@ionic/core/dist/esm/dir-Dojwmvde.js
var isRTL = (hostEl) => {
  for (let el = hostEl; el; el = el.parentElement) {
    const dir = el.getAttribute("dir")?.toLowerCase();
    if (dir === "rtl") {
      return true;
    }
    if (dir === "ltr") {
      return false;
    }
  }
  return document?.dir?.toLowerCase() === "rtl";
};

export {
  isRTL
};
//# sourceMappingURL=chunk-L65IGNW5.js.map
