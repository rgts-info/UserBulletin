import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/@ionic/core/dist/esm/overlay-control-label-BSQPZ79H.js
var getOverlayLabelPlacement = (mode, control, interfaceType) => {
  if (mode === "ios" && control === "radio" && interfaceType !== "modal") {
    return "start";
  }
  return "end";
};
var getOverlayLabelJustify = (mode, control, interfaceType) => {
  if (mode === "ios" && control === "radio" && interfaceType !== "modal") {
    return "space-between";
  }
  return "start";
};

export {
  getOverlayLabelPlacement,
  getOverlayLabelJustify
};
//# sourceMappingURL=chunk-VUQPQE5U.js.map
