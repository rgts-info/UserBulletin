import {
  U,
  r
} from "./chunk-4YJDMHIX.js";

// node_modules/@ionic/core/components/p-DM-PrAoh.js
var r2 = (r3, a) => {
  const i = "40px", s = "back" === a.direction, e = a.leavingEl, n = U(a.enteringEl), c = n.querySelector("ion-toolbar"), p = r();
  if (p.addElement(n).fill("both").beforeRemoveClass("ion-page-invisible"), s ? p.duration((a.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : p.duration((a.duration ?? 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${i})`, "translateY(0px)").fromTo("opacity", 0.01, 1), c) {
    const o = r();
    o.addElement(c), p.addAnimation(o);
  }
  if (e && s) {
    p.duration((a.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const r4 = r();
    r4.addElement(U(e)).onFinish(((t) => {
      1 === t && r4.elements.length > 0 && r4.elements[0].style.setProperty("display", "none");
    })).fromTo("transform", "translateY(0px)", `translateY(${i})`).fromTo("opacity", 1, 0), p.addAnimation(r4);
  }
  return p;
};

export {
  r2 as r
};
//# sourceMappingURL=chunk-NSSEW6PM.js.map
