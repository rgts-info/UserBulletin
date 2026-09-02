import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  menuController
} from "./chunk-R22EM46F.js";
import {
  iosTransitionAnimation
} from "./chunk-2SEJPSNO.js";
import {
  mdTransitionAnimation
} from "./chunk-T46HQBD6.js";
import {
  getTimeGivenProgression
} from "./chunk-YX3A4LYT.js";
import {
  getIonPageElement
} from "./chunk-V4S7BDV7.js";
import {
  setupConfig
} from "./chunk-GDQNAZUU.js";
import {
  MaxValidator,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-KOGYQL3D.js";
import "./chunk-QFLDR73G.js";
import "./chunk-72W5ORFZ.js";
import {
  Pt,
  a,
  c,
  l,
  n,
  o,
  r,
  r2,
  s,
  t,
  t2
} from "./chunk-3UAHTHJW.js";
import {
  IonicSafeString
} from "./chunk-P4ESFU3W.js";
import {
  createAnimation
} from "./chunk-222YMHD5.js";
import {
  actionSheetController,
  alertController,
  loadingController,
  modalController,
  popoverController,
  toastController
} from "./chunk-JTFYCMFR.js";
import "./chunk-66WL6MP7.js";
import "./chunk-KZSWY5U2.js";
import "./chunk-L65IGNW5.js";
import {
  openURL
} from "./chunk-PYWP5KEC.js";
import {
  getPlatforms,
  initialize,
  isPlatform
} from "./chunk-NP2DGJVA.js";
import {
  createGesture
} from "./chunk-UEHQEWBB.js";
import "./chunk-SND3ZUVW.js";
import "./chunk-PZITNWCM.js";
import "./chunk-IYXP5PUU.js";
import {
  bootstrapLazy
} from "./chunk-5XV4S2PZ.js";
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationCancel,
  NavigationError,
  NavigationStart,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  UrlSerializer
} from "./chunk-2AU5UR3J.js";
import "./chunk-JVPMDQFC.js";
import {
  CommonModule,
  Location,
  LocationStrategy,
  NgIf,
  NgTemplateOutlet
} from "./chunk-DO5RFCXK.js";
import {
  APP_INITIALIZER,
  ApplicationRef,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  createComponent,
  forwardRef,
  inject,
  reflectComponentType,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-NH75V33K.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-EEKZWN3V.js";

// node_modules/@ionic/angular/dist/common/providers/dom-controller.js
var DomController = class _DomController {
  /**
   * Schedules a task to run during the READ phase of the next frame.
   * This task should only read the DOM, but never modify it.
   */
  read(cb) {
    getQueue().read(cb);
  }
  /**
   * Schedules a task to run during the WRITE phase of the next frame.
   * This task should write the DOM, but never READ it.
   */
  write(cb) {
    getQueue().write(cb);
  }
  /** @nocollapse */
  static ɵfac = function DomController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _DomController,
    factory: _DomController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var getQueue = () => {
  const win = typeof window !== "undefined" ? window : null;
  if (win != null) {
    const Ionic = win.Ionic;
    if (Ionic?.queue) {
      return Ionic.queue;
    }
    return {
      read: (cb) => win.requestAnimationFrame(cb),
      write: (cb) => win.requestAnimationFrame(cb)
    };
  }
  return {
    read: (cb) => cb(),
    write: (cb) => cb()
  };
};

// node_modules/@ionic/angular/dist/common/providers/menu-controller.js
var MenuController = class {
  menuController;
  constructor(menuController2) {
    this.menuController = menuController2;
  }
  /**
   * Programmatically open the Menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully opened
   */
  open(menuId) {
    return this.menuController.open(menuId);
  }
  /**
   * Programmatically close the Menu. If no `menuId` is given as the first
   * argument then it'll close any menu which is open. If a `menuId`
   * is given then it'll close that exact menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully closed
   */
  close(menuId) {
    return this.menuController.close(menuId);
  }
  /**
   * Toggle the menu. If it's closed, it will open, and if opened, it
   * will close.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu has been toggled
   */
  toggle(menuId) {
    return this.menuController.toggle(menuId);
  }
  /**
   * Used to enable or disable a menu. For example, there could be multiple
   * left menus, but only one of them should be able to be opened at the same
   * time. If there are multiple menus on the same side, then enabling one menu
   * will also automatically disable all the others that are on the same side.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  enable(shouldEnable, menuId) {
    return this.menuController.enable(shouldEnable, menuId);
  }
  /**
   * Used to enable or disable the ability to swipe open the menu.
   * @param shouldEnable  True if it should be swipe-able, false if not.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  swipeGesture(shouldEnable, menuId) {
    return this.menuController.swipeGesture(shouldEnable, menuId);
  }
  /**
   * @param [menuId] Optionally get the menu by its id, or side.
   * @return Returns true if the specified menu is currently open, otherwise false.
   * If the menuId is not specified, it returns true if ANY menu is currenly open.
   */
  isOpen(menuId) {
    return this.menuController.isOpen(menuId);
  }
  /**
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns true if the menu is currently enabled, otherwise false.
   */
  isEnabled(menuId) {
    return this.menuController.isEnabled(menuId);
  }
  /**
   * Used to get a menu instance. If a `menuId` is not provided then it'll
   * return the first menu found. If a `menuId` is `left` or `right`, then
   * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
   * provided, then it'll try to find the menu using the menu's `id`
   * property. If a menu is not found then it'll return `null`.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu if found, otherwise `null`.
   */
  get(menuId) {
    return this.menuController.get(menuId);
  }
  /**
   * @return Returns the instance of the menu already opened, otherwise `null`.
   */
  getOpen() {
    return this.menuController.getOpen();
  }
  /**
   * @return Returns an array of all menu instances.
   */
  getMenus() {
    return this.menuController.getMenus();
  }
  registerAnimation(name, animation) {
    return this.menuController.registerAnimation(name, animation);
  }
  isAnimating() {
    return this.menuController.isAnimating();
  }
  _getOpenSync() {
    return this.menuController._getOpenSync();
  }
  _createAnimation(type, menuCmp) {
    return this.menuController._createAnimation(type, menuCmp);
  }
  _register(menu) {
    return this.menuController._register(menu);
  }
  _unregister(menu) {
    return this.menuController._unregister(menu);
  }
  _setOpen(menu, shouldOpen, animated) {
    return this.menuController._setOpen(menu, shouldOpen, animated);
  }
};

// node_modules/@ionic/core/components/p-TXPDHL13.js
var t3 = class {
  id;
  name;
  disableScroll;
  ctrl;
  priority;
  constructor(t5, s4, i3, e3, h2) {
    this.id = s4, this.name = i3, this.disableScroll = h2, this.priority = 1e6 * e3 + s4, this.ctrl = t5;
  }
  canStart() {
    return !!this.ctrl && this.ctrl.canStart(this.name);
  }
  start() {
    return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) return false;
    const t5 = this.ctrl.capture(this.name, this.id, this.priority);
    return t5 && this.disableScroll && this.ctrl.disableScroll(this.id), t5;
  }
  release() {
    this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
  }
  destroy() {
    this.release(), this.ctrl = void 0;
  }
};
var s2 = class {
  id;
  disable;
  disableScroll;
  ctrl;
  constructor(t5, s4, i3, e3) {
    this.id = s4, this.disable = i3, this.disableScroll = e3, this.ctrl = t5;
  }
  block() {
    if (this.ctrl) {
      if (this.disable) for (const t5 of this.disable) this.ctrl.disableGesture(t5, this.id);
      this.disableScroll && this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (this.ctrl) {
      if (this.disable) for (const t5 of this.disable) this.ctrl.enableGesture(t5, this.id);
      this.disableScroll && this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock(), this.ctrl = void 0;
  }
};
var i = "backdrop-no-scroll";
var e = new class {
  gestureId = 0;
  requestedStart = /* @__PURE__ */ new Map();
  disabledGestures = /* @__PURE__ */ new Map();
  disabledScroll = /* @__PURE__ */ new Set();
  capturedId;
  createGesture(s4) {
    return new t3(this, this.newID(), s4.name, s4.priority ?? 0, !!s4.disableScroll);
  }
  createBlocker(t5 = {}) {
    return new s2(this, this.newID(), t5.disable, !!t5.disableScroll);
  }
  start(t5, s4, i3) {
    return this.canStart(t5) ? (this.requestedStart.set(s4, i3), true) : (this.requestedStart.delete(s4), false);
  }
  capture(t5, s4, i3) {
    if (!this.start(t5, s4, i3)) return false;
    const e3 = this.requestedStart;
    let h2 = -1e4;
    if (e3.forEach(((t6) => {
      h2 = Math.max(h2, t6);
    })), h2 === i3) {
      this.capturedId = s4, e3.clear();
      const i4 = new CustomEvent("ionGestureCaptured", { detail: { gestureName: t5 } });
      return document.dispatchEvent(i4), true;
    }
    return e3.delete(s4), false;
  }
  release(t5) {
    this.requestedStart.delete(t5), this.capturedId === t5 && (this.capturedId = void 0);
  }
  disableGesture(t5, s4) {
    let i3 = this.disabledGestures.get(t5);
    void 0 === i3 && (i3 = /* @__PURE__ */ new Set(), this.disabledGestures.set(t5, i3)), i3.add(s4);
  }
  enableGesture(t5, s4) {
    const i3 = this.disabledGestures.get(t5);
    void 0 !== i3 && i3.delete(s4);
  }
  disableScroll(t5) {
    this.disabledScroll.add(t5), 1 === this.disabledScroll.size && document.body.classList.add(i);
  }
  enableScroll(t5) {
    this.disabledScroll.delete(t5), 0 === this.disabledScroll.size && document.body.classList.remove(i);
  }
  canStart(t5) {
    return void 0 === this.capturedId && !this.isDisabled(t5);
  }
  isCaptured() {
    return void 0 !== this.capturedId;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(t5) {
    const s4 = this.disabledGestures.get(t5);
    return !!(s4 && s4.size > 0);
  }
  newID() {
    return this.gestureId++, this.gestureId;
  }
}();

// node_modules/@ionic/core/components/p-G0TxqHfe.js
var a2 = (o6) => c2(o6);
var d = (o6, i3) => ("string" == typeof o6 && (i3 = o6, o6 = void 0), a2(o6).includes(i3));
var c2 = (o6 = window) => {
  if (void 0 === o6) return [];
  o6.Ionic = o6.Ionic || {};
  let i3 = o6.Ionic.platforms;
  return null == i3 && (i3 = o6.Ionic.platforms = p(o6), i3.forEach(((i4) => o6.document.documentElement.classList.add(`plt-${i4}`)))), i3;
};
var p = (i3) => {
  const t5 = n.get("platform");
  return Object.keys(g).filter(((o6) => {
    const e3 = t5?.[o6];
    return "function" == typeof e3 ? e3(i3) : g[o6](i3);
  }));
};
var m = (o6) => !!b(o6, /iPad/i) || !(!b(o6, /Macintosh/i) || !f(o6));
var l2 = (o6) => b(o6, /android|sink/i);
var f = (o6) => y(o6, "(any-pointer:coarse)");
var u = (o6) => h(o6) || w(o6);
var h = (o6) => !!(o6.cordova || o6.phonegap || o6.PhoneGap);
var w = (o6) => {
  const i3 = o6.Capacitor;
  return !!i3?.isNativePlatform?.();
};
var b = (o6, i3) => i3.test(o6.navigator.userAgent);
var y = (o6, i3) => o6.matchMedia?.(i3).matches;
var g = { ipad: m, iphone: (o6) => b(o6, /iPhone/i), ios: (o6) => b(o6, /iPhone|iPod/i) || m(o6), android: l2, phablet: (o6) => {
  const i3 = o6.innerWidth, t5 = o6.innerHeight, e3 = Math.min(i3, t5), n4 = Math.max(i3, t5);
  return e3 > 390 && e3 < 520 && n4 > 620 && n4 < 800;
}, tablet: (o6) => {
  const i3 = o6.innerWidth, t5 = o6.innerHeight, e3 = Math.min(i3, t5), n4 = Math.max(i3, t5);
  return m(o6) || ((o7) => l2(o7) && !b(o7, /mobile/i))(o6) || e3 > 460 && e3 < 820 && n4 > 780 && n4 < 1400;
}, cordova: h, capacitor: w, electron: (o6) => b(o6, /electron/i), pwa: (o6) => !(!o6.matchMedia?.("(display-mode: standalone)").matches && !o6.navigator.standalone), mobile: f, mobileweb: (o6) => f(o6) && !u(o6), desktop: (o6) => !f(o6), hybrid: u };
var M;
var v = (o6) => o6 && Pt(o6) || M;

// node_modules/@ionic/core/components/p-CbhUdtjf.js
var c3 = 99;

// node_modules/@ionic/core/components/p-ia3IDdJS.js
var o3 = (t5) => r().duration(t5 ? 400 : 300);
var i2 = (t5) => {
  let e3, n4;
  const r5 = t5.width + 8, i3 = r(), u4 = r();
  t5.isEndSide ? (e3 = r5 + "px", n4 = "0px") : (e3 = -r5 + "px", n4 = "0px"), i3.addElement(t5.menuInnerEl).fromTo("transform", `translateX(${e3})`, `translateX(${n4})`);
  const c7 = "ios" === v(t5), p3 = c7 ? 0.2 : 0.25;
  return u4.addElement(t5.backdropEl).fromTo("opacity", 0.01, p3), o3(c7).addAnimation([i3, u4]);
};
var u2 = (t5) => {
  let e3, n4;
  const r5 = v(t5), i3 = t5.width;
  t5.isEndSide ? (e3 = -i3 + "px", n4 = i3 + "px") : (e3 = i3 + "px", n4 = -i3 + "px");
  const u4 = r().addElement(t5.menuInnerEl).fromTo("transform", `translateX(${n4})`, "translateX(0px)"), c7 = r().addElement(t5.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e3})`), p3 = r().addElement(t5.backdropEl).fromTo("opacity", 0.01, 0.32);
  return o3("ios" === r5).addAnimation([u4, c7, p3]);
};
var c4 = (t5) => {
  const e3 = v(t5), n4 = t5.width * (t5.isEndSide ? -1 : 1) + "px", r5 = r().addElement(t5.contentEl).fromTo("transform", "translateX(0px)", `translateX(${n4})`);
  return o3("ios" === e3).addAnimation(r5);
};
var p2 = (() => {
  const s4 = /* @__PURE__ */ new Map(), a4 = [], o6 = async (t5, e3 = false) => {
    if (await d5(), "start" === t5 || "end" === t5) {
      const r5 = a4.filter(((e4) => e4.side === t5 && !e4.disabled));
      if (r5.length >= 1) return r5.length > 1 && e3 && a(`menuController queried for a menu on the "${t5}" side, but ${r5.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, r5.map(((t6) => t6.el))), r5[0].el;
      const s5 = a4.filter(((e4) => e4.side === t5));
      if (s5.length >= 1) return s5.length > 1 && e3 && a(`menuController queried for a menu on the "${t5}" side, but ${s5.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, s5.map(((t6) => t6.el))), s5[0].el;
    } else if (null != t5) return w2(((e4) => e4.menuId === t5));
    return w2(((t6) => !t6.disabled)) || (a4.length > 0 ? a4[0].el : void 0);
  }, p3 = async () => (await d5(), m2()), f3 = (t5, e3) => {
    s4.set(t5, e3);
  }, m2 = () => w2(((t5) => t5._isOpen)), l5 = () => a4.some(((t5) => t5.isAnimating)), w2 = (t5) => {
    const e3 = a4.find(t5);
    if (void 0 !== e3) return e3.el;
  }, d5 = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(((t5) => new Promise(((e3) => t(t5, e3))))));
  return f3("reveal", c4), f3("push", u2), f3("overlay", i2), o?.addEventListener("ionBackButton", ((t5) => {
    const n4 = m2();
    n4 && t5.detail.register(c3, (() => n4.close()));
  })), { registerAnimation: f3, get: o6, getMenus: async () => (await d5(), a4.map(((t5) => t5.el))), getOpen: p3, isEnabled: async (t5) => {
    const e3 = await o6(t5);
    return !!e3 && !e3.disabled;
  }, swipeGesture: async (t5, e3) => {
    const n4 = await o6(e3);
    return n4 && (n4.swipeGesture = t5), n4;
  }, isAnimating: async () => (await d5(), l5()), isOpen: async (t5) => {
    if (null != t5) {
      const e3 = await o6(t5);
      return void 0 !== e3 && e3.isOpen();
    }
    return void 0 !== await p3();
  }, enable: async (t5, e3) => {
    const n4 = await o6(e3);
    return n4 && (n4.disabled = !t5), n4;
  }, toggle: async (t5) => {
    const e3 = await o6(t5, true);
    return !!e3 && e3.toggle();
  }, close: async (t5) => {
    const e3 = await (void 0 !== t5 ? o6(t5, true) : p3());
    return void 0 !== e3 && e3.close();
  }, open: async (t5) => {
    const e3 = await o6(t5, true);
    return !!e3 && e3.open();
  }, _getOpenSync: m2, _createAnimation: (t5, e3) => {
    const n4 = s4.get(t5);
    if (!n4) throw new Error("animation not registered");
    return n4(e3);
  }, _register: (t5) => {
    a4.indexOf(t5) < 0 && a4.push(t5);
  }, _unregister: (t5) => {
    const e3 = a4.indexOf(t5);
    e3 > -1 && a4.splice(e3, 1);
  }, _setOpen: async (t5, e3, n4, r5) => {
    if (l5()) return false;
    if (e3) {
      const e4 = await p3();
      e4 && t5.el !== e4 && await e4.setOpen(false, false);
    }
    return t5._setOpen(e3, n4, r5);
  } };
})();

// node_modules/@ionic/core/components/p-fruGqVHh.js
var O = (o6) => ({ create: (n4) => N(o6, n4), dismiss: (n4, e3, t5) => G(document, n4, e3, o6, t5), getTop: async () => L(document, o6) });
var x = O("ion-alert");
var j = O("ion-action-sheet");
var k = O("ion-loading");
var C = O("ion-modal");
var A = O("ion-popover");
var I = O("ion-toast");
var N = (o6, n4) => "undefined" != typeof window && void 0 !== window.customElements ? window.customElements.whenDefined(o6).then((() => {
  const t5 = document.createElement(o6);
  return t5.classList.add("overlay-hidden"), Object.assign(t5, __spreadProps(__spreadValues({}, n4), { hasController: true })), V(document).appendChild(t5), new Promise(((o7) => t(t5, o7)));
})) : Promise.resolve();
var G = (o6, n4, e3, t5, i3) => {
  const a4 = L(o6, t5, i3);
  return a4 ? a4.dismiss(n4, e3) : Promise.reject("overlay does not exist");
};
var M2 = (o6, n4) => ((o7, n5) => (void 0 === n5 && (n5 = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover,ion-toast"), Array.from(o7.querySelectorAll(n5)).filter(((o8) => o8.overlayIndex > 0))))(o6, n4).filter(((o7) => !o7.classList.contains("overlay-hidden")));
var L = (o6, n4, e3) => {
  const t5 = M2(o6, n4);
  return (void 0 === e3 ? t5 : t5.filter(((o7) => o7.id === e3))).slice(-1)[0];
};
var V = (o6) => o6.querySelector("ion-app") || o6.body;

// node_modules/@ionic/angular/dist/common/providers/platform.js
var import_rxjs = __toESM(require_cjs());
var Platform = class _Platform {
  doc;
  _readyPromise;
  win;
  /**
   * @hidden
   */
  backButton = new import_rxjs.Subject();
  /**
   * The keyboardDidShow event emits when the
   * on-screen keyboard is presented.
   */
  keyboardDidShow = new import_rxjs.Subject();
  /**
   * The keyboardDidHide event emits when the
   * on-screen keyboard is hidden.
   */
  keyboardDidHide = new import_rxjs.Subject();
  /**
   * The pause event emits when the native platform puts the application
   * into the background, typically when the user switches to a different
   * application. This event would emit when a Cordova app is put into
   * the background, however, it would not fire on a standard web browser.
   */
  pause = new import_rxjs.Subject();
  /**
   * The resume event emits when the native platform pulls the application
   * out from the background. This event would emit when a Cordova app comes
   * out from the background, however, it would not fire on a standard web browser.
   */
  resume = new import_rxjs.Subject();
  /**
   * The resize event emits when the browser window has changed dimensions. This
   * could be from a browser window being physically resized, or from a device
   * changing orientation.
   */
  resize = new import_rxjs.Subject();
  constructor(doc, zone) {
    this.doc = doc;
    zone.run(() => {
      this.win = doc.defaultView;
      this.backButton.subscribeWithPriority = function(priority, callback) {
        return this.subscribe((ev) => {
          return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
        });
      };
      proxyEvent(this.pause, doc, "pause", zone);
      proxyEvent(this.resume, doc, "resume", zone);
      proxyEvent(this.backButton, doc, "ionBackButton", zone);
      proxyEvent(this.resize, this.win, "resize", zone);
      proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
      proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
      let readyResolve;
      this._readyPromise = new Promise((res) => {
        readyResolve = res;
      });
      if (this.win?.["cordova"]) {
        doc.addEventListener("deviceready", () => {
          readyResolve("cordova");
        }, {
          once: true
        });
      } else {
        readyResolve("dom");
      }
    });
  }
  /**
   * @returns returns true/false based on platform.
   * @description
   * Depending on the platform the user is on, `is(platformName)` will
   * return `true` or `false`. Note that the same app can return `true`
   * for more than one platform name. For example, an app running from
   * an iPad would return `true` for the platform names: `mobile`,
   * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
   * from Cordova then `cordova` would be true, and if it was running
   * from a web browser on the iPad then `mobileweb` would be `true`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     if (this.platform.is('ios')) {
   *       // This will only print when on iOS
   *       console.log('I am an iOS device!');
   *     }
   *   }
   * }
   * ```
   *
   * | Platform Name   | Description                        |
   * |-----------------|------------------------------------|
   * | android         | on a device running Android.       |
   * | capacitor       | on a device running Capacitor.     |
   * | cordova         | on a device running Cordova.       |
   * | ios             | on a device running iOS.           |
   * | ipad            | on an iPad device.                 |
   * | iphone          | on an iPhone device.               |
   * | phablet         | on a phablet device.               |
   * | tablet          | on a tablet device.                |
   * | electron        | in Electron on a desktop device.   |
   * | pwa             | as a PWA app.                      |
   * | mobile          | on a mobile device.                |
   * | mobileweb       | on a mobile device in a browser.   |
   * | desktop         | on a desktop device.               |
   * | hybrid          | is a cordova or capacitor app.     |
   *
   */
  is(platformName) {
    return d(this.win, platformName);
  }
  /**
   * @returns the array of platforms
   * @description
   * Depending on what device you are on, `platforms` can return multiple values.
   * Each possible value is a hierarchy of platforms. For example, on an iPhone,
   * it would return `mobile`, `ios`, and `iphone`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     // This will print an array of the current platforms
   *     console.log(this.platform.platforms());
   *   }
   * }
   * ```
   */
  platforms() {
    return a2(this.win);
  }
  /**
   * Returns a promise when the platform is ready and native functionality
   * can be called. If the app is running from within a web browser, then
   * the promise will resolve when the DOM is ready. When the app is running
   * from an application engine such as Cordova, then the promise will
   * resolve when Cordova triggers the `deviceready` event.
   *
   * The resolved value is the `readySource`, which states which platform
   * ready was used. For example, when Cordova is ready, the resolved ready
   * source is `cordova`. The default ready source value will be `dom`. The
   * `readySource` is useful if different logic should run depending on the
   * platform the app is running from. For example, only Cordova can execute
   * the status bar plugin, so the web should not run status bar plugin logic.
   *
   * ```
   * import { Component } from '@angular/core';
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyApp {
   *   constructor(public platform: Platform) {
   *     this.platform.ready().then((readySource) => {
   *       console.log('Platform ready from', readySource);
   *       // Platform now ready, execute any required native code
   *     });
   *   }
   * }
   * ```
   */
  ready() {
    return this._readyPromise;
  }
  /**
   * Returns if this app is using right-to-left language direction or not.
   * We recommend the app's `index.html` file already has the correct `dir`
   * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
   * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
   */
  get isRTL() {
    return this.doc.dir === "rtl";
  }
  /**
   * Get the query string parameter
   */
  getQueryParam(key) {
    return readQueryParam(this.win.location.href, key);
  }
  /**
   * Returns `true` if the app is in landscape mode.
   */
  isLandscape() {
    return !this.isPortrait();
  }
  /**
   * Returns `true` if the app is in portrait mode.
   */
  isPortrait() {
    return this.win.matchMedia?.("(orientation: portrait)").matches;
  }
  testUserAgent(expression) {
    const nav = this.win.navigator;
    return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
  }
  /**
   * Get the current url.
   */
  url() {
    return this.win.location.href;
  }
  /**
   * Gets the width of the platform's viewport using `window.innerWidth`.
   */
  width() {
    return this.win.innerWidth;
  }
  /**
   * Gets the height of the platform's viewport using `window.innerHeight`.
   */
  height() {
    return this.win.innerHeight;
  }
  /** @nocollapse */
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Platform,
    factory: _Platform.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var readQueryParam = (url, key) => {
  key = key.replace(/[[\]\\]/g, "\\$&");
  const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  const results = regex.exec(url);
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
var proxyEvent = (emitter, el, eventName, zone) => {
  if (el) {
    el.addEventListener(eventName, (ev) => {
      zone.run(() => {
        const value = ev != null ? ev.detail : void 0;
        emitter.next(value);
      });
    });
  }
};

// node_modules/@ionic/angular/dist/common/providers/nav-controller.js
var NavController = class _NavController {
  location;
  serializer;
  router;
  topOutlet;
  direction = DEFAULT_DIRECTION;
  animated = DEFAULT_ANIMATED;
  animationBuilder;
  guessDirection = "forward";
  guessAnimation;
  lastNavId = -1;
  constructor(platform, location, serializer, router) {
    this.location = location;
    this.serializer = serializer;
    this.router = router;
    if (router) {
      router.events.subscribe((ev) => {
        if (ev instanceof NavigationStart) {
          const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
          this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
          this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
        }
        if (ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.direction = DEFAULT_DIRECTION;
          this.animated = DEFAULT_ANIMATED;
          this.animationBuilder = void 0;
        }
      });
    }
    platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
      this.pop();
      processNextHandler();
    });
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
   *
   * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
   * and that it will show a "forward" animation by default.
   *
   * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
   * ```
   */
  navigateForward(url, options = {}) {
    this.setDirection("forward", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('back');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
   * and that it will show a "back" animation by default.
   *
   * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="back">Link</a>
   * ```
   */
  navigateBack(url, options = {}) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('root');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **root** means that all existing pages in the stack will be removed,
   * and the navigated page will become the single page in the stack.
   *
   * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="root">Link</a>
   * ```
   */
  navigateRoot(url, options = {}) {
    this.setDirection("root", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * Same as [Location](https://angular.io/api/common/Location)'s back() method.
   * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
   * by default.
   */
  back(options = {
    animated: true,
    animationDirection: "back"
  }) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.location.back();
  }
  /**
   * This methods goes back in the context of Ionic's stack navigation.
   *
   * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
   * This is the recommended way to go back when you are using `ion-router-outlet`.
   *
   * Resolves to `true` if it was able to pop.
   */
  async pop() {
    let outlet = this.topOutlet;
    while (outlet) {
      if (await outlet.pop()) {
        return true;
      } else {
        outlet = outlet.parentOutlet;
      }
    }
    return false;
  }
  /**
   * This methods specifies the direction of the next navigation performed by the Angular router.
   *
   * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
   *
   * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
   */
  setDirection(direction, animated, animationDirection, animationBuilder) {
    this.direction = direction;
    this.animated = getAnimation(direction, animated, animationDirection);
    this.animationBuilder = animationBuilder;
  }
  /**
   * @internal
   */
  setTopOutlet(outlet) {
    this.topOutlet = outlet;
  }
  /**
   * @internal
   */
  consumeTransition() {
    let direction = "root";
    let animation;
    const animationBuilder = this.animationBuilder;
    if (this.direction === "auto") {
      direction = this.guessDirection;
      animation = this.guessAnimation;
    } else {
      animation = this.animated;
      direction = this.direction;
    }
    this.direction = DEFAULT_DIRECTION;
    this.animated = DEFAULT_ANIMATED;
    this.animationBuilder = void 0;
    return {
      direction,
      animation,
      animationBuilder
    };
  }
  navigate(url, options) {
    if (Array.isArray(url)) {
      return this.router.navigate(url, options);
    } else {
      const urlTree = this.serializer.parse(url.toString());
      if (options.queryParams !== void 0) {
        urlTree.queryParams = __spreadValues({}, options.queryParams);
      }
      if (options.fragment !== void 0) {
        urlTree.fragment = options.fragment;
      }
      return this.router.navigateByUrl(urlTree, options);
    }
  }
  /** @nocollapse */
  static ɵfac = function NavController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavController)(ɵɵinject(Platform), ɵɵinject(Location), ɵɵinject(UrlSerializer), ɵɵinject(Router, 8));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _NavController,
    factory: _NavController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: Location
  }, {
    type: UrlSerializer
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var getAnimation = (direction, animated, animationDirection) => {
  if (animated === false) {
    return void 0;
  }
  if (animationDirection !== void 0) {
    return animationDirection;
  }
  if (direction === "forward" || direction === "back") {
    return direction;
  } else if (direction === "root" && animated === true) {
    return "forward";
  }
  return void 0;
};
var DEFAULT_DIRECTION = "auto";
var DEFAULT_ANIMATED = void 0;

// node_modules/@ionic/angular/dist/common/providers/config.js
var Config = class _Config {
  get(key, fallback) {
    const c7 = getConfig();
    if (c7) {
      return c7.get(key, fallback);
    }
    return null;
  }
  getBoolean(key, fallback) {
    const c7 = getConfig();
    if (c7) {
      return c7.getBoolean(key, fallback);
    }
    return false;
  }
  getNumber(key, fallback) {
    const c7 = getConfig();
    if (c7) {
      return c7.getNumber(key, fallback);
    }
    return 0;
  }
  /** @nocollapse */
  static ɵfac = function Config_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Config)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Config,
    factory: _Config.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigToken = new InjectionToken("USERCONFIG");
var getConfig = () => {
  if (typeof window !== "undefined") {
    const Ionic = window.Ionic;
    if (Ionic?.config) {
      return Ionic.config;
    }
  }
  return null;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/nav-params.js
var NavParams = class {
  data;
  constructor(data = {}) {
    this.data = data;
    console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
  }
  /**
   * Get the value of a nav-parameter for the current view
   *
   * ```ts
   * import { NavParams } from 'ionic-angular';
   *
   * export class MyClass{
   *  constructor(public navParams: NavParams){
   *    // userParams is an object we have in our nav-parameters
   *    this.navParams.get('userParams');
   *  }
   * }
   * ```
   *
   * @param param Which param you want to look up
   */
  get(param) {
    return this.data[param];
  }
};

// node_modules/@ionic/angular/dist/common/providers/angular-delegate.js
var IonModalToken = new InjectionToken("IonModalToken");
var AngularDelegate = class _AngularDelegate {
  zone = inject(NgZone);
  applicationRef = inject(ApplicationRef);
  config = inject(ConfigToken);
  create(environmentInjector, injector, elementReferenceKey, customInjector) {
    return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false, customInjector);
  }
  /** @nocollapse */
  static ɵfac = function AngularDelegate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularDelegate)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AngularDelegate,
    factory: _AngularDelegate.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularDelegate, [{
    type: Injectable
  }], null, null);
})();
var AngularFrameworkDelegate = class {
  environmentInjector;
  injector;
  applicationRef;
  zone;
  elementReferenceKey;
  enableSignalsSupport;
  customInjector;
  elRefMap = /* @__PURE__ */ new WeakMap();
  elEventsMap = /* @__PURE__ */ new WeakMap();
  constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport, customInjector) {
    this.environmentInjector = environmentInjector;
    this.injector = injector;
    this.applicationRef = applicationRef;
    this.zone = zone;
    this.elementReferenceKey = elementReferenceKey;
    this.enableSignalsSupport = enableSignalsSupport;
    this.customInjector = customInjector;
  }
  attachViewToDom(container, component, params, cssClasses) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentProps = __spreadValues({}, params);
        if (this.elementReferenceKey !== void 0) {
          componentProps[this.elementReferenceKey] = container;
        }
        const el = attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector);
        resolve(el);
      });
    });
  }
  removeViewFromDom(_container, component) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentRef = this.elRefMap.get(component);
        if (componentRef) {
          componentRef.destroy();
          this.elRefMap.delete(component);
          const unbindEvents = this.elEventsMap.get(component);
          if (unbindEvents) {
            unbindEvents();
            this.elEventsMap.delete(component);
          }
        }
        resolve();
      });
    });
  }
};
var attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport, customInjector) => {
  const providers = getProviders(params);
  if (container.tagName.toLowerCase() === "ion-modal") {
    providers.push({
      provide: IonModalToken,
      useValue: container
    });
  }
  const childInjector = Injector.create({
    providers,
    parent: customInjector ?? injector
  });
  const componentRef = createComponent(component, {
    environmentInjector,
    elementInjector: childInjector
  });
  const instance = componentRef.instance;
  const hostElement = componentRef.location.nativeElement;
  if (params) {
    if (elementReferenceKey && instance[elementReferenceKey] !== void 0) {
      console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
    }
    if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
      const _a = params, {
        modal,
        popover
      } = _a, otherParams = __objRest(_a, [
        "modal",
        "popover"
      ]);
      for (const key in otherParams) {
        componentRef.setInput(key, otherParams[key]);
      }
      if (modal !== void 0) {
        Object.assign(instance, {
          modal
        });
      }
      if (popover !== void 0) {
        Object.assign(instance, {
          popover
        });
      }
    } else {
      Object.assign(instance, params);
    }
  }
  if (cssClasses) {
    for (const cssClass of cssClasses) {
      hostElement.classList.add(cssClass);
    }
  }
  const unbindEvents = bindLifecycleEvents(zone, componentRef.changeDetectorRef, instance, hostElement);
  container.appendChild(hostElement);
  applicationRef.attachView(componentRef.hostView);
  componentRef.changeDetectorRef.detectChanges();
  elRefMap.set(hostElement, componentRef);
  elEventsMap.set(hostElement, unbindEvents);
  return hostElement;
};
var LIFECYCLES = [r2, t2, s, c, l];
var bindLifecycleEvents = (zone, changeDetectorRef, instance, element) => {
  return zone.run(() => {
    const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
      const handler = (ev) => {
        instance[eventName](ev.detail);
        changeDetectorRef.markForCheck();
      };
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    });
    return () => unregisters.forEach((fn) => fn());
  });
};
var NavParamsToken = new InjectionToken("NavParamsToken");
var getProviders = (params) => {
  return [{
    provide: NavParamsToken,
    useValue: params
  }, {
    provide: NavParams,
    useFactory: provideNavParamsInjectable,
    deps: [NavParamsToken]
  }];
};
var provideNavParamsInjectable = (params) => {
  return new NavParams(params);
};

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c7 = arguments.length, r5 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d5 = decorators[i3]) r5 = (c7 < 3 ? d5(r5) : c7 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
  return c7 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
}

// node_modules/@ionic/angular/dist/common/utils/proxy.js
var import_rxjs2 = __toESM(require_cjs());
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      }
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = (0, import_rxjs2.fromEvent)(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

// node_modules/@ionic/angular/dist/common/overlays/modal.js
var MODAL_INPUTS = ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "expandToScroll", "event", "focusTrap", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "translucent", "trigger"];
var MODAL_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss", "setCurrentBreakpoint", "getCurrentBreakpoint"];
var IonModal = class IonModal2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    this.el = r5.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c7.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c7.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "ionBreakpointDidChange", "didPresent", "willPresent", "willDismiss", "didDismiss", "ionDragStart", "ionDragMove", "ionDragEnd"]);
  }
  /** @nocollapse */
  static ɵfac = function IonModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonModal2,
    selectors: [["ion-modal"]],
    contentQueries: function IonModal_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      animated: "animated",
      keepContentsMounted: "keepContentsMounted",
      backdropBreakpoint: "backdropBreakpoint",
      backdropDismiss: "backdropDismiss",
      breakpoints: "breakpoints",
      canDismiss: "canDismiss",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      expandToScroll: "expandToScroll",
      event: "event",
      focusTrap: "focusTrap",
      handle: "handle",
      handleBehavior: "handleBehavior",
      initialBreakpoint: "initialBreakpoint",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      presentingElement: "presentingElement",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger"
    }
  });
};
IonModal = __decorate([
  ProxyCmp({
    inputs: MODAL_INPUTS,
    methods: MODAL_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
    type: Directive,
    args: [{
      selector: "ion-modal",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: MODAL_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/overlays/popover.js
var POPOVER_INPUTS = ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "focusTrap", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"];
var POPOVER_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
var IonPopover = class IonPopover2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    this.el = r5.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c7.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c7.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonPopover_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPopover2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonPopover2,
    selectors: [["ion-popover"]],
    contentQueries: function IonPopover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      alignment: "alignment",
      animated: "animated",
      arrow: "arrow",
      keepContentsMounted: "keepContentsMounted",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      dismissOnSelect: "dismissOnSelect",
      enterAnimation: "enterAnimation",
      event: "event",
      focusTrap: "focusTrap",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger",
      triggerAction: "triggerAction",
      reference: "reference",
      size: "size",
      side: "side"
    }
  });
};
IonPopover = __decorate([
  ProxyCmp({
    inputs: POPOVER_INPUTS,
    methods: POPOVER_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonPopover);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
    type: Directive,
    args: [{
      selector: "ion-popover",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: POPOVER_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/router-outlet.js
var import_rxjs3 = __toESM(require_cjs());
var import_operators = __toESM(require_operators());

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-utils.js
var insertView = (views, view, direction) => {
  if (direction === "root") {
    return setRoot(views, view);
  } else if (direction === "forward") {
    return setForward(views, view);
  } else {
    return setBack(views, view);
  }
};
var setRoot = (views, view) => {
  views = views.filter((v3) => v3.stackId !== view.stackId);
  views.push(view);
  return views;
};
var setForward = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    views = views.filter((v3) => v3.stackId !== view.stackId || v3.id <= view.id);
  } else {
    views.push(view);
  }
  return views;
};
var setBack = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    return views.filter((v3) => v3.stackId !== view.stackId || v3.id <= view.id);
  } else {
    return setRoot(views, view);
  }
};
var getUrl = (router, activatedRoute) => {
  const urlTree = router.createUrlTree(["."], { relativeTo: activatedRoute });
  return router.serializeUrl(urlTree);
};
var isTabSwitch = (enteringView, leavingView) => {
  if (!leavingView) {
    return true;
  }
  return enteringView.stackId !== leavingView.stackId;
};
var computeStackId = (prefixUrl, url) => {
  if (!prefixUrl) {
    return void 0;
  }
  const segments = toSegments(url);
  for (let i3 = 0; i3 < segments.length; i3++) {
    if (i3 >= prefixUrl.length) {
      return segments[i3];
    }
    if (segments[i3] !== prefixUrl[i3]) {
      return void 0;
    }
  }
  return void 0;
};
var toSegments = (path) => {
  return path.split("/").map((s4) => s4.trim()).filter((s4) => s4 !== "");
};
var destroyView = (view) => {
  if (view) {
    view.ref.destroy();
    view.unlistenEvents();
  }
};

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-controller.js
var StackController = class {
  containerEl;
  router;
  navCtrl;
  zone;
  location;
  views = [];
  runningTask;
  skipTransition = false;
  tabsPrefix;
  activeView;
  nextId = 0;
  constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
    this.containerEl = containerEl;
    this.router = router;
    this.navCtrl = navCtrl;
    this.zone = zone;
    this.location = location;
    this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
  }
  createView(ref, activatedRoute) {
    const url = getUrl(this.router, activatedRoute);
    const element = ref?.location?.nativeElement;
    const unlistenEvents = bindLifecycleEvents(this.zone, ref.changeDetectorRef, ref.instance, element);
    return {
      id: this.nextId++,
      stackId: computeStackId(this.tabsPrefix, url),
      unlistenEvents,
      element,
      ref,
      url
    };
  }
  getExistingView(activatedRoute) {
    const activatedUrlKey = getUrl(this.router, activatedRoute);
    const view = this.views.find((vw) => vw.url === activatedUrlKey);
    if (view) {
      view.ref.changeDetectorRef.reattach();
    }
    return view;
  }
  setActive(enteringView) {
    const consumeResult = this.navCtrl.consumeTransition();
    let { direction, animation, animationBuilder } = consumeResult;
    const leavingView = this.activeView;
    const tabSwitch = isTabSwitch(enteringView, leavingView);
    if (tabSwitch) {
      direction = "back";
      animation = void 0;
    }
    const viewsSnapshot = this.views.slice();
    let currentNavigation;
    const router = this.router;
    if (router.getCurrentNavigation) {
      currentNavigation = router.getCurrentNavigation();
    } else if (router.navigations?.value) {
      currentNavigation = router.navigations.value;
    }
    if (currentNavigation?.extras?.replaceUrl) {
      if (this.views.length > 0) {
        this.views.splice(-1, 1);
      }
    }
    const reused = this.views.includes(enteringView);
    const views = this.insertView(enteringView, direction);
    if (!reused) {
      enteringView.ref.changeDetectorRef.detectChanges();
    }
    const customAnimation = enteringView.animationBuilder;
    if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) {
      animationBuilder = customAnimation;
    }
    if (leavingView) {
      leavingView.animationBuilder = animationBuilder;
    }
    return this.zone.runOutsideAngular(() => {
      return this.wait(() => {
        if (leavingView) {
          leavingView.ref.changeDetectorRef.detach();
        }
        enteringView.ref.changeDetectorRef.reattach();
        return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
          enteringView,
          direction,
          animation,
          tabSwitch
        }));
      });
    });
  }
  canGoBack(deep, stackId = this.getActiveStackId()) {
    return this.getStack(stackId).length > deep;
  }
  pop(deep, stackId = this.getActiveStackId()) {
    return this.zone.run(() => {
      const views = this.getStack(stackId);
      if (views.length <= deep) {
        return Promise.resolve(false);
      }
      const view = views[views.length - deep - 1];
      let url = view.url;
      const viewSavedData = view.savedData;
      if (viewSavedData) {
        const primaryOutlet = viewSavedData.get("primary");
        if (primaryOutlet?.route?._routerState?.snapshot.url) {
          url = primaryOutlet.route._routerState.snapshot.url;
        }
      }
      const { animationBuilder } = this.navCtrl.consumeTransition();
      return this.navCtrl.navigateBack(url, __spreadProps(__spreadValues({}, view.savedExtras), { animation: animationBuilder })).then(() => true);
    });
  }
  startBackTransition() {
    const leavingView = this.activeView;
    if (leavingView) {
      const views = this.getStack(leavingView.stackId);
      const enteringView = views[views.length - 2];
      const customAnimation = enteringView.animationBuilder;
      return this.wait(() => {
        return this.transition(
          enteringView,
          // entering view
          leavingView,
          // leaving view
          "back",
          this.canGoBack(2),
          true,
          customAnimation
        );
      });
    }
    return Promise.resolve();
  }
  endBackTransition(shouldComplete) {
    if (shouldComplete) {
      this.skipTransition = true;
      this.pop(1);
    } else if (this.activeView) {
      cleanup(this.activeView, this.views, this.views, this.location, this.zone);
    }
  }
  getLastUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[views.length - 1] : void 0;
  }
  /**
   * @internal
   */
  getRootUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[0] : void 0;
  }
  getActiveStackId() {
    return this.activeView ? this.activeView.stackId : void 0;
  }
  /**
   * @internal
   */
  getActiveView() {
    return this.activeView;
  }
  hasRunningTask() {
    return this.runningTask !== void 0;
  }
  destroy() {
    this.containerEl = void 0;
    this.views.forEach(destroyView);
    this.activeView = void 0;
    this.views = [];
  }
  getStack(stackId) {
    return this.views.filter((v3) => v3.stackId === stackId);
  }
  insertView(enteringView, direction) {
    this.activeView = enteringView;
    this.views = insertView(this.views, enteringView, direction);
    return this.views.slice();
  }
  transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
    if (this.skipTransition) {
      this.skipTransition = false;
      return Promise.resolve(false);
    }
    if (leavingView === enteringView) {
      return Promise.resolve(false);
    }
    const enteringEl = enteringView ? enteringView.element : void 0;
    const leavingEl = leavingView ? leavingView.element : void 0;
    const containerEl = this.containerEl;
    if (enteringEl && enteringEl !== leavingEl) {
      enteringEl.classList.add("ion-page");
      enteringEl.classList.add("ion-page-invisible");
      if (containerEl?.commit) {
        return containerEl.commit(enteringEl, leavingEl, {
          duration: direction === void 0 ? 0 : void 0,
          direction,
          showGoBack,
          progressAnimation,
          animationBuilder
        });
      }
    }
    return Promise.resolve(false);
  }
  async wait(task) {
    if (this.runningTask !== void 0) {
      await this.runningTask;
      this.runningTask = void 0;
    }
    const promise = this.runningTask = task();
    promise.finally(() => this.runningTask = void 0);
    return promise;
  }
};
var cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
  if (typeof requestAnimationFrame === "function") {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        cleanup(activeRoute, views, viewsSnapshot, location, zone);
        resolve();
      });
    });
  }
  return Promise.resolve();
};
var cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
  zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
  views.forEach((view) => {
    const locationWithoutParams = location.path().split("?")[0];
    const locationWithoutFragment = locationWithoutParams.split("#")[0];
    if (view !== activeRoute && view.url !== locationWithoutFragment) {
      const element = view.element;
      element.setAttribute("aria-hidden", "true");
      element.classList.add("ion-page-hidden");
      view.ref.changeDetectorRef.detach();
    }
  });
};

// node_modules/@ionic/angular/dist/common/directives/navigation/router-outlet.js
var IonRouterOutlet = class _IonRouterOutlet {
  parentOutlet;
  nativeEl;
  activatedView = null;
  tabsPrefix;
  _swipeGesture;
  stackCtrl;
  // Maintain map of activated route proxies for each component instance
  proxyMap = /* @__PURE__ */ new WeakMap();
  // Keep the latest activated route in a subject for the proxy routes to switch map to
  currentActivatedRoute$ = new import_rxjs3.BehaviorSubject(null);
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   */
  name = PRIMARY_OUTLET;
  /** @internal */
  stackWillChange = new EventEmitter();
  /** @internal */
  stackDidChange = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  activateEvents = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  deactivateEvents = new EventEmitter();
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  environmentInjector = inject(EnvironmentInjector);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  /** @nodoc */
  supportsBindingToComponentInputs = true;
  // Ionic providers
  config = inject(Config);
  navCtrl = inject(NavController);
  set animation(animation) {
    this.nativeEl.animation = animation;
  }
  set animated(animated) {
    this.nativeEl.animated = animated;
  }
  set swipeGesture(swipe) {
    this._swipeGesture = swipe;
    this.nativeEl.swipeHandler = swipe ? {
      canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
      onStart: () => this.stackCtrl.startBackTransition(),
      onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
    } : void 0;
    this.nativeEl.swipeGesture = swipe;
  }
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    this.parentOutlet = parentOutlet;
    this.nativeEl = elementRef.nativeElement;
    this.name = name || PRIMARY_OUTLET;
    this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
    this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
    this.parentContexts.onChildOutletCreated(this.name, this);
  }
  ngOnDestroy() {
    this.stackCtrl.destroy();
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  getContext() {
    return this.parentContexts.getContext(this.name);
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  // Note: Ionic deviates from the Angular Router implementation here
  initializeOutletWithName() {
    if (!this.activated) {
      const context = this.getContext();
      if (context?.route) {
        this.activateWith(context.route, context.injector);
      }
    }
    new Promise((resolve) => t(this.nativeEl, resolve)).then(() => {
      if (this._swipeGesture === void 0) {
        this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
      }
    });
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    throw new Error("incompatible reuse strategy");
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attach(_ref, _activatedRoute) {
    throw new Error("incompatible reuse strategy");
  }
  deactivate() {
    if (this.activated) {
      if (this.activatedView) {
        const context = this.getContext();
        this.activatedView.savedData = new Map(context.children["contexts"]);
        const primaryOutlet = this.activatedView.savedData.get("primary");
        if (primaryOutlet && context.route) {
          primaryOutlet.route = __spreadValues({}, context.route);
        }
        this.activatedView.savedExtras = {};
        if (context.route) {
          const contextSnapshot = context.route.snapshot;
          this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
          this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
        }
      }
      const c7 = this.component;
      this.activatedView = null;
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c7);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new Error("Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    let cmpRef;
    let enteringView = this.stackCtrl.getExistingView(activatedRoute);
    if (enteringView) {
      cmpRef = this.activated = enteringView.ref;
      const saved = enteringView.savedData;
      if (saved) {
        const context = this.getContext();
        context.children["contexts"] = saved;
      }
      this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
    } else {
      const snapshot = activatedRoute._futureSnapshot;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const component$ = new import_rxjs3.BehaviorSubject(null);
      const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
      const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
      const component = snapshot.routeConfig.component ?? snapshot.component;
      cmpRef = this.activated = this.outletContent.createComponent(component, {
        index: this.outletContent.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      component$.next(cmpRef.instance);
      enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
      this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
      this.currentActivatedRoute$.next({
        component: cmpRef.instance,
        activatedRoute
      });
    }
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activatedView = enteringView;
    this.navCtrl.setTopOutlet(this);
    const leavingView = this.stackCtrl.getActiveView();
    this.stackWillChange.emit({
      enteringView,
      tabSwitch: isTabSwitch(enteringView, leavingView)
    });
    this.stackCtrl.setActive(enteringView).then((data) => {
      this.activateEvents.emit(cmpRef.instance);
      this.stackDidChange.emit(data);
    });
  }
  /**
   * Returns `true` if there are pages in the stack to go back.
   */
  canGoBack(deep = 1, stackId) {
    return this.stackCtrl.canGoBack(deep, stackId);
  }
  /**
   * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
   */
  pop(deep = 1, stackId) {
    return this.stackCtrl.pop(deep, stackId);
  }
  /**
   * Returns the URL of the active page of each stack.
   */
  getLastUrl(stackId) {
    const active = this.stackCtrl.getLastUrl(stackId);
    return active ? active.url : void 0;
  }
  /**
   * Returns the RouteView of the active page of each stack.
   * @internal
   */
  getLastRouteView(stackId) {
    return this.stackCtrl.getLastUrl(stackId);
  }
  /**
   * Returns the root view in the tab stack.
   * @internal
   */
  getRootView(stackId) {
    return this.stackCtrl.getRootUrl(stackId);
  }
  /**
   * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
   */
  getActiveStackId() {
    return this.stackCtrl.getActiveStackId();
  }
  /**
   * Since the activated route can change over the life time of a component in an ion router outlet, we create
   * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
   */
  createActivatedRouteProxy(component$, activatedRoute) {
    const proxy = new ActivatedRoute();
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    proxy._paramMap = this.proxyObservable(component$, "paramMap");
    proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
    proxy.url = this.proxyObservable(component$, "url");
    proxy.params = this.proxyObservable(component$, "params");
    proxy.queryParams = this.proxyObservable(component$, "queryParams");
    proxy.fragment = this.proxyObservable(component$, "fragment");
    proxy.data = this.proxyObservable(component$, "data");
    return proxy;
  }
  /**
   * Create a wrapped observable that will switch to the latest activated route matched by the given component
   */
  proxyObservable(component$, path) {
    return component$.pipe(
      // First wait until the component instance is pushed
      (0, import_operators.filter)((component) => !!component),
      (0, import_operators.switchMap)((component) => this.currentActivatedRoute$.pipe((0, import_operators.filter)((current) => current !== null && current.component === component), (0, import_operators.switchMap)((current) => current && current.activatedRoute[path]), (0, import_operators.distinctUntilChanged)()))
    );
  }
  /**
   * Updates the activated route proxy for the given component to the new incoming router state
   */
  updateActivatedRouteProxy(component, activatedRoute) {
    const proxy = this.proxyMap.get(component);
    if (!proxy) {
      throw new Error(`Could not find activated route proxy for view`);
    }
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    this.currentActivatedRoute$.next({
      component,
      activatedRoute
    });
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    inputs: {
      animated: "animated",
      animation: "animation",
      mode: "mode",
      swipeGesture: "swipeGesture",
      name: "name"
    },
    outputs: {
      stackWillChange: "stackWillChange",
      stackDidChange: "stackDidChange",
      activateEvents: "activate",
      deactivateEvents: "deactivate"
    },
    exportAs: ["outlet"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
    type: Directive,
    args: [{
      selector: "ion-router-outlet",
      exportAs: "outlet",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "animation", "mode", "swipeGesture"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["name"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Attribute,
      args: ["tabs"]
    }]
  }, {
    type: Location
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: NgZone
  }, {
    type: ActivatedRoute
  }, {
    type: IonRouterOutlet,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input
    }],
    stackWillChange: [{
      type: Output
    }],
    stackDidChange: [{
      type: Output
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = (0, import_rxjs3.combineLatest)([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe((0, import_operators.switchMap)(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return (0, import_rxjs3.of)(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  /** @nocollapse */
  static ɵfac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var provideComponentInputBinding = () => {
  return {
    provide: INPUT_BINDER,
    useFactory: componentInputBindingFactory,
    deps: [Router]
  };
};
function componentInputBindingFactory(router) {
  if (router?.componentInputBindingEnabled) {
    return new RoutedComponentInputBinder();
  }
  return null;
}

// node_modules/@ionic/angular/dist/common/utils/util.js
var raf = (h2) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h2);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h2);
  }
  return setTimeout(h2);
};

// node_modules/@ionic/angular/dist/common/directives/control-value-accessors/value-accessor.js
var ValueAccessor = class _ValueAccessor {
  injector;
  elementRef;
  onChange = () => {
  };
  onTouched = () => {
  };
  lastValue;
  statusChanges;
  constructor(injector, elementRef) {
    this.injector = injector;
    this.elementRef = elementRef;
  }
  writeValue(value) {
    this.elementRef.nativeElement.value = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the ionInput event is fired. For select components this is called
   * when the ionChange event is fired.
   *
   * This also updates the Ionic form status classes on the element.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el, value) {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      setIonicClasses(this.elementRef);
    }
  }
  _handleBlurEvent(el) {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      setIonicClasses(this.elementRef);
    } else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) {
      this.onTouched();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.elementRef.nativeElement.disabled = isDisabled;
  }
  ngOnDestroy() {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }
  ngAfterViewInit() {
    let ngControl;
    try {
      ngControl = this.injector.get(NgControl);
    } catch {
    }
    if (!ngControl) {
      return;
    }
    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
    }
    const formControl = ngControl.control;
    if (formControl) {
      const methodsToPatch = ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== "undefined") {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params) => {
            oldFn(...params);
            setIonicClasses(this.elementRef);
          };
        }
      });
    }
  }
  /** @nocollapse */
  static ɵfac = function ValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _ValueAccessor,
    hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) {
          return ctx._handleBlurEvent($event.target);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{
    type: Directive
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["ionBlur", ["$event.target"]]
    }]
  });
})();
var setIonicClasses = (element) => {
  raf(() => {
    const input = element.nativeElement;
    const hasValue = input.value != null && input.value.toString().length > 0;
    const classes = getClasses(input);
    setClasses(input, classes);
    const item = input.closest("ion-item");
    if (item) {
      if (hasValue) {
        setClasses(item, [...classes, "item-has-value"]);
      } else {
        setClasses(item, classes);
      }
    }
  });
};
var getClasses = (element) => {
  const classList = element.classList;
  const classes = [];
  for (let i3 = 0; i3 < classList.length; i3++) {
    const item = classList.item(i3);
    if (item !== null && startsWith(item, "ng-")) {
      classes.push(`ion-${item.substring(3)}`);
    }
  }
  return classes;
};
var setClasses = (element, classes) => {
  const classList = element.classList;
  classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
  classList.add(...classes);
};
var startsWith = (input, search) => {
  return input.substring(0, search.length) === search;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/back-button.js
var BACK_BUTTON_INPUTS = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"];
var IonBackButton = class IonBackButton2 {
  routerOutlet;
  navCtrl;
  config;
  r;
  z;
  el;
  constructor(routerOutlet, navCtrl, config, r5, z, c7) {
    this.routerOutlet = routerOutlet;
    this.navCtrl = navCtrl;
    this.config = config;
    this.r = r5;
    this.z = z;
    c7.detach();
    this.el = this.r.nativeElement;
  }
  /**
   * @internal
   */
  onClick(ev) {
    const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
    if (this.routerOutlet?.canGoBack()) {
      this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
      this.routerOutlet.pop();
      ev.preventDefault();
    } else if (defaultHref != null) {
      this.navCtrl.navigateBack(defaultHref, {
        animation: this.routerAnimation
      });
      ev.preventDefault();
    }
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackButton2)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonBackButton2,
    hostBindings: function IonBackButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function IonBackButton_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      color: "color",
      defaultHref: "defaultHref",
      disabled: "disabled",
      icon: "icon",
      mode: "mode",
      routerAnimation: "routerAnimation",
      text: "text",
      type: "type"
    }
  });
};
IonBackButton = __decorate([ProxyCmp({
  inputs: BACK_BUTTON_INPUTS
})], IonBackButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: BACK_BUTTON_INPUTS
    }]
  }], () => [{
    type: IonRouterOutlet,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NavController
  }, {
    type: Config
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/nav.js
var NAV_INPUTS = ["animated", "animation", "root", "rootParams", "swipeGesture"];
var NAV_METHODS = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"];
var IonNav = class IonNav2 {
  z;
  el;
  constructor(ref, environmentInjector, injector, angularDelegate, z, c7) {
    this.z = z;
    c7.detach();
    this.el = ref.nativeElement;
    ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
    proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNav2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonNav2,
    inputs: {
      animated: "animated",
      animation: "animation",
      root: "root",
      rootParams: "rootParams",
      swipeGesture: "swipeGesture"
    }
  });
};
IonNav = __decorate([ProxyCmp({
  inputs: NAV_INPUTS,
  methods: NAV_METHODS
})], IonNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: NAV_INPUTS
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: EnvironmentInjector
  }, {
    type: Injector
  }, {
    type: AngularDelegate
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/router-link-delegate.js
var RouterLinkDelegateDirective = class _RouterLinkDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
    this.updateTabindex();
    this.elementRef.nativeElement.addEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.elementRef.nativeElement.removeEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  onCaptureClick = (ev) => {
    if (this.opensNatively(ev)) {
      ev.stopImmediatePropagation();
    }
  };
  /**
   * True when the browser should handle the click natively instead of routing
   * in-app: a modifier was held (ctrl/meta/shift/alt), or the host targets
   * something other than `_self`. This mirrors the modifier set Angular's own
   * `RouterLink` guards on, so an Ionic `routerLink` behaves like a plain anchor
   * for new-tab, new-window, and download intents.
   */
  opensNatively(ev) {
    if (ev instanceof MouseEvent && (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey)) {
      return true;
    }
    const target = this.elementRef.nativeElement.target;
    return target != null && target !== "" && target !== "_self";
  }
  /**
   * The `tabindex` is set to `0` by default on the host element when
   * the `routerLink` directive is used. This causes issues with Ionic
   * components that wrap an `a` or `button` element, such as `ion-item`.
   * See issue https://github.com/angular/angular/issues/28345
   *
   * This method removes the `tabindex` attribute from the host element
   * to allow the Ionic component to manage the focus state correctly.
   */
  updateTabindex() {
    const ionicComponents = ["ION-BACK-BUTTON", "ION-BREADCRUMB", "ION-BUTTON", "ION-CARD", "ION-FAB-BUTTON", "ION-ITEM", "ION-ITEM-OPTION", "ION-MENU-BUTTON", "ION-SEGMENT-BUTTON", "ION-TAB-BUTTON"];
    const hostElement = this.elementRef.nativeElement;
    if (ionicComponents.includes(hostElement.tagName)) {
      if (hostElement.getAttribute("tabindex") === "0") {
        hostElement.removeAttribute("tabindex");
      }
    }
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick(ev) {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
    ev.preventDefault();
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    hostBindings: function RouterLinkDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkDelegateDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick() {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    hostBindings: function RouterLinkWithHrefDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkWithHrefDelegateDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/tabs.js
var _c0 = ["tabsInner"];
var parseHrefExtras = (href) => {
  if (!href) {
    return void 0;
  }
  const hashIndex = href.indexOf("#");
  const fragment = hashIndex >= 0 && hashIndex < href.length - 1 ? href.slice(hashIndex + 1) : void 0;
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const queryIndex = beforeHash.indexOf("?");
  const search = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : "";
  let queryParams;
  if (search) {
    const params = new URLSearchParams(search);
    queryParams = {};
    for (const key of new Set(params.keys())) {
      const all = params.getAll(key);
      queryParams[key] = all.length > 1 ? all : all[0];
    }
  }
  if (!queryParams && fragment === void 0) {
    return void 0;
  }
  const extras = {};
  if (queryParams) extras.queryParams = queryParams;
  if (fragment !== void 0) extras.fragment = fragment;
  return extras;
};
var IonTabs = class _IonTabs {
  navCtrl;
  tabsInner;
  /**
   * Emitted before the tab view is changed.
   */
  ionTabsWillChange = new EventEmitter();
  /**
   * Emitted after the tab view is changed.
   */
  ionTabsDidChange = new EventEmitter();
  tabBarSlot = "bottom";
  hasTab = false;
  selectedTab;
  leavingTab;
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngAfterViewInit() {
    const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
    if (firstTab) {
      this.hasTab = true;
      this.setActiveTab(firstTab.tab);
      this.tabSwitch();
    }
  }
  ngAfterContentInit() {
    this.detectSlotChanges();
  }
  ngAfterContentChecked() {
    this.detectSlotChanges();
  }
  /**
   * @internal
   */
  onStackWillChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      this.ionTabsWillChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * @internal
   */
  onStackDidChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      if (this.tabBar) {
        this.tabBar.selectedTab = stackId;
      }
      this.ionTabsDidChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * Host listener for the `ionTabButtonClick` event. Angular 22 enabled stricter
   * host-binding type checking, which types `$event` as the DOM `Event`. That is
   * not assignable to `select`'s public `string | CustomEvent` parameter, so this
   * thin wrapper narrows the event before forwarding to keep `select`'s public
   * signature intact.
   */
  onTabButtonClick(ev) {
    return this.select(ev);
  }
  /**
   * When a tab button is clicked, there are several scenarios:
   * 1. If the selected tab is currently active (the tab button has been clicked
   *    again), then it should go to the root view for that tab.
   *
   *   a. Get the saved root view from the router outlet. If the saved root view
   *      matches the tabRootUrl, set the route view to this view including the
   *      navigation extras. Any `queryParams` or `fragment` declared on the tab
   *      button's `href` are also forwarded.
   *   b. If the saved root view from the router outlet does not match, navigate
   *      to the tabRootUrl, forwarding any `queryParams`/`fragment` declared on
   *      the tab button's `href`.
   *
   * 2. If the current tab tab is not currently selected, get the last route
   *    view from the router outlet.
   *
   *   a. If the last route view exists, navigate to that view including any
   *      navigation extras.
   *   b. If the last route view doesn't exist, then navigate to the default
   *      tabRootUrl, forwarding any `queryParams`/`fragment` declared on the
   *      tab button's `href`.
   */
  select(tabOrEvent) {
    const isTabString = typeof tabOrEvent === "string";
    const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
    const href = isTabString ? void 0 : tabOrEvent.detail.href;
    if (this.hasTab) {
      this.setActiveTab(tab);
      this.tabSwitch();
      return;
    }
    const alreadySelected = this.outlet.getActiveStackId() === tab;
    const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
    const hrefExtras = parseHrefExtras(href);
    if (!isTabString) {
      tabOrEvent.stopPropagation();
    }
    if (alreadySelected) {
      const activeStackId = this.outlet.getActiveStackId();
      const activeView = this.outlet.getLastRouteView(activeStackId);
      if (activeView?.url === tabRootUrl) {
        return;
      }
      const rootView = this.outlet.getRootView(tab);
      const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
      return this.navCtrl.navigateRoot(tabRootUrl, __spreadProps(__spreadValues(__spreadValues({}, navigationExtras), hrefExtras), {
        animated: true,
        animationDirection: "back"
      }));
    } else {
      const lastRoute = this.outlet.getLastRouteView(tab);
      const url = lastRoute?.url || tabRootUrl;
      const navigationExtras = lastRoute?.savedExtras ?? (url === tabRootUrl ? hrefExtras : void 0);
      return this.navCtrl.navigateRoot(url, __spreadProps(__spreadValues({}, navigationExtras), {
        animated: true,
        animationDirection: "back"
      }));
    }
  }
  setActiveTab(tab) {
    const tabs = this.tabs;
    const selectedTab = tabs.find((t5) => t5.tab === tab);
    if (!selectedTab) {
      console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
      return;
    }
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab
    });
    selectedTab.el.active = true;
  }
  tabSwitch() {
    const {
      selectedTab,
      leavingTab
    } = this;
    if (this.tabBar && selectedTab) {
      this.tabBar.selectedTab = selectedTab.tab;
    }
    if (leavingTab?.tab !== selectedTab?.tab) {
      if (leavingTab?.el) {
        leavingTab.el.active = false;
      }
    }
    if (selectedTab) {
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  getSelected() {
    if (this.hasTab) {
      return this.selectedTab?.tab;
    }
    return this.outlet.getActiveStackId();
  }
  /**
   * Detects changes to the slot attribute of the tab bar.
   *
   * If the slot attribute has changed, then the tab bar
   * should be relocated to the new slot position.
   */
  detectSlotChanges() {
    this.tabBars.forEach((tabBar) => {
      const currentSlot = tabBar.el.getAttribute("slot");
      if (currentSlot !== this.tabBarSlot) {
        this.tabBarSlot = currentSlot;
        this.relocateTabBar();
      }
    });
  }
  /**
   * Relocates the tab bar to the new slot position.
   */
  relocateTabBar() {
    const tabBar = this.tabBar.el;
    if (this.tabBarSlot === "top") {
      this.tabsInner.nativeElement.before(tabBar);
    } else {
      this.tabsInner.nativeElement.after(tabBar);
    }
  }
  /** @nocollapse */
  static ɵfac = function IonTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonTabs)(ɵɵdirectiveInject(NavController));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabsInner = _t.first);
      }
    },
    hostBindings: function IonTabs_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) {
          return ctx.onTabButtonClick($event);
        });
      }
    },
    outputs: {
      ionTabsWillChange: "ionTabsWillChange",
      ionTabsDidChange: "ionTabsDidChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
    type: Directive,
    args: [{
      selector: "ion-tabs"
    }]
  }], () => [{
    type: NavController
  }], {
    tabsInner: [{
      type: ViewChild,
      args: ["tabsInner", {
        read: ElementRef,
        static: true
      }]
    }],
    ionTabsWillChange: [{
      type: Output
    }],
    ionTabsDidChange: [{
      type: Output
    }],
    onTabButtonClick: [{
      type: HostListener,
      args: ["ionTabButtonClick", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/utils/overlay.js
var OverlayBaseController = class {
  ctrl;
  constructor(ctrl) {
    this.ctrl = ctrl;
  }
  /**
   * Creates a new overlay
   */
  create(opts) {
    return this.ctrl.create(opts || {});
  }
  /**
   * When `id` is not provided, it dismisses the top overlay.
   */
  dismiss(data, role, id) {
    return this.ctrl.dismiss(data, role, id);
  }
  /**
   * Returns the top overlay.
   */
  getTop() {
    return this.ctrl.getTop();
  }
};

// node_modules/@ionic/angular/dist/common/utils/routing.js
var IonicRouteStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   */
  shouldDetach(_route) {
    return false;
  }
  /**
   * Returns `false`, meaning the route (and its subtree) is never reattached
   */
  shouldAttach(_route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(_route, _detachedTree) {
    return;
  }
  /**
   * Returns `null` because this strategy does not store routes for later re-use.
   */
  retrieve(_route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and
   * current route config are identical and all route parameters are identical.
   */
  shouldReuseRoute(future, curr) {
    if (future.routeConfig !== curr.routeConfig) {
      return false;
    }
    const futureParams = future.params;
    const currentParams = curr.params;
    const keysA = Object.keys(futureParams);
    const keysB = Object.keys(currentParams);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (const key of keysA) {
      if (currentParams[key] !== futureParams[key]) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/boolean-value-accessor.js
var BooleanValueAccessorDirective = class _BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  // Bind `$event` and cast `.target` in the body rather than `['$event.target']`:
  // this directive's multi-element selector makes Angular 22's stricter host-binding
  // type checking infer `$event` as the DOM `Event` (target: `EventTarget | null`),
  // not the concrete element. The single-element standalone CVAs keep `['$event.target']`.
  _handleIonChange(ev) {
    const el = ev.target;
    this.handleValueChange(el, el.checked);
  }
  /** @nocollapse */
  static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooleanValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _BooleanValueAccessorDirective,
    selectors: [["ion-checkbox"], ["ion-toggle"]],
    hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleIonChange($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _BooleanValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/numeric-value-accessor.js
var NumericValueAccessorDirective = class _NumericValueAccessorDirective extends ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  // Bind `$event` and cast `.target` in the body rather than `['$event.target']`:
  // this directive's multi-element selector makes Angular 22's stricter host-binding
  // type checking infer `$event` as the DOM `Event` (target: `EventTarget | null`),
  // not the concrete element. The single-element standalone CVAs keep `['$event.target']`.
  handleInputEvent(ev) {
    const el = ev.target;
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP") {
      super.registerOnChange((value) => {
        fn(value === "" ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
  /** @nocollapse */
  static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _NumericValueAccessorDirective,
    selectors: [["ion-input", "type", "number"], ["ion-input-otp", 3, "type", "text"], ["ion-range"]],
    hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx.handleInputEvent($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _NumericValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ion-input[type=number],ion-input-otp:not([type=text]),ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/select-value-accessor.js
var SelectValueAccessorDirective = class _SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  // Bind `$event` and cast `.target` in the body rather than `['$event.target']`:
  // this directive's multi-element selector makes Angular 22's stricter host-binding
  // type checking infer `$event` as the DOM `Event` (target: `EventTarget | null`),
  // not the concrete element. The single-element standalone CVAs keep `['$event.target']`.
  _handleChangeEvent(ev) {
    const el = ev.target;
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _SelectValueAccessorDirective,
    selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
    hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleChangeEvent($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _SelectValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/control-value-accessors/text-value-accessor.js
var TextValueAccessorDirective = class _TextValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  // Bind `$event` and cast `.target` in the body rather than `['$event.target']`:
  // this directive's multi-element selector makes Angular 22's stricter host-binding
  // type checking infer `$event` as the DOM `Event` (target: `EventTarget | null`),
  // not the concrete element. The single-element standalone CVAs keep `['$event.target']`.
  _handleInputEvent(ev) {
    const el = ev.target;
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextValueAccessorDirective)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _TextValueAccessorDirective,
    selectors: [["ion-input", 3, "type", "number"], ["ion-input-otp", "type", "text"], ["ion-textarea"], ["ion-searchbar"]],
    hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx._handleInputEvent($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _TextValueAccessorDirective,
      multi: true
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/angular-component-lib/utils.js
var import_rxjs4 = __toESM(require_cjs());
var proxyInputs2 = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods2 = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
function ProxyCmp2(opts) {
  const decorator = function(cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs2(cls, inputs);
    }
    if (methods) {
      proxyMethods2(cls, methods);
    }
    return cls;
  };
  return decorator;
}

// node_modules/@ionic/angular/dist/lazy/directives/proxies.js
var _c02 = ["*"];
var IonAccordion = class IonAccordion2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordion2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAccordion2,
    selectors: [["ion-accordion"]],
    inputs: {
      disabled: "disabled",
      mode: "mode",
      readonly: "readonly",
      toggleIcon: "toggleIcon",
      toggleIconSlot: "toggleIconSlot",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAccordion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonAccordion = __decorate([ProxyCmp2({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonAccordionGroup = class IonAccordionGroup2 {
  z;
  el;
  ionChange = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordionGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAccordionGroup2,
    selectors: [["ion-accordion-group"]],
    inputs: {
      animated: "animated",
      disabled: "disabled",
      expand: "expand",
      mode: "mode",
      multiple: "multiple",
      readonly: "readonly",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAccordionGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonAccordionGroup = __decorate([ProxyCmp2({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"],
      outputs: ["ionChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }]
  });
})();
var IonActionSheet = class IonActionSheet2 {
  z;
  el;
  ionActionSheetDidPresent = new EventEmitter();
  ionActionSheetWillPresent = new EventEmitter();
  ionActionSheetWillDismiss = new EventEmitter();
  ionActionSheetDidDismiss = new EventEmitter();
  didPresent = new EventEmitter();
  willPresent = new EventEmitter();
  willDismiss = new EventEmitter();
  didDismiss = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonActionSheet2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonActionSheet2,
    selectors: [["ion-action-sheet"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    outputs: {
      ionActionSheetDidPresent: "ionActionSheetDidPresent",
      ionActionSheetWillPresent: "ionActionSheetWillPresent",
      ionActionSheetWillDismiss: "ionActionSheetWillDismiss",
      ionActionSheetDidDismiss: "ionActionSheetDidDismiss",
      didPresent: "didPresent",
      willPresent: "willPresent",
      willDismiss: "willDismiss",
      didDismiss: "didDismiss"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonActionSheet_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonActionSheet = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
      outputs: ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionActionSheetDidPresent: [{
      type: Output
    }],
    ionActionSheetWillPresent: [{
      type: Output
    }],
    ionActionSheetWillDismiss: [{
      type: Output
    }],
    ionActionSheetDidDismiss: [{
      type: Output
    }],
    didPresent: [{
      type: Output
    }],
    willPresent: [{
      type: Output
    }],
    willDismiss: [{
      type: Output
    }],
    didDismiss: [{
      type: Output
    }]
  });
})();
var IonAlert = class IonAlert2 {
  z;
  el;
  ionAlertDidPresent = new EventEmitter();
  ionAlertWillPresent = new EventEmitter();
  ionAlertWillDismiss = new EventEmitter();
  ionAlertDidDismiss = new EventEmitter();
  didPresent = new EventEmitter();
  willPresent = new EventEmitter();
  willDismiss = new EventEmitter();
  didDismiss = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAlert2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAlert2,
    selectors: [["ion-alert"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      inputs: "inputs",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    outputs: {
      ionAlertDidPresent: "ionAlertDidPresent",
      ionAlertWillPresent: "ionAlertWillPresent",
      ionAlertWillDismiss: "ionAlertWillDismiss",
      ionAlertDidDismiss: "ionAlertDidDismiss",
      didPresent: "didPresent",
      willPresent: "willPresent",
      willDismiss: "willDismiss",
      didDismiss: "didDismiss"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAlert_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonAlert = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
      outputs: ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionAlertDidPresent: [{
      type: Output
    }],
    ionAlertWillPresent: [{
      type: Output
    }],
    ionAlertWillDismiss: [{
      type: Output
    }],
    ionAlertDidDismiss: [{
      type: Output
    }],
    didPresent: [{
      type: Output
    }],
    willPresent: [{
      type: Output
    }],
    willDismiss: [{
      type: Output
    }],
    didDismiss: [{
      type: Output
    }]
  });
})();
var IonApp = class IonApp2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonApp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonApp2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonApp2,
    selectors: [["ion-app"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonApp_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonApp = __decorate([ProxyCmp2({
  methods: ["setFocus"]
})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonAvatar = class IonAvatar2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAvatar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonAvatar2,
    selectors: [["ion-avatar"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAvatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonAvatar = __decorate([ProxyCmp2({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonBackdrop = class IonBackdrop2 {
  z;
  el;
  ionBackdropTap = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackdrop2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBackdrop2,
    selectors: [["ion-backdrop"]],
    inputs: {
      stopPropagation: "stopPropagation",
      tappable: "tappable",
      visible: "visible"
    },
    outputs: {
      ionBackdropTap: "ionBackdropTap"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBackdrop_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonBackdrop = __decorate([ProxyCmp2({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"],
      outputs: ["ionBackdropTap"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionBackdropTap: [{
      type: Output
    }]
  });
})();
var IonBadge = class IonBadge2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBadge2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBadge2,
    selectors: [["ion-badge"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBadge_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonBadge = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonBreadcrumb = class IonBreadcrumb2 {
  z;
  el;
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumb2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBreadcrumb2,
    selectors: [["ion-breadcrumb"]],
    inputs: {
      active: "active",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      separator: "separator",
      target: "target"
    },
    outputs: {
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonBreadcrumb = __decorate([ProxyCmp2({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"],
      outputs: ["ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonBreadcrumbs = class IonBreadcrumbs2 {
  z;
  el;
  ionCollapsedClick = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumbs2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonBreadcrumbs2,
    selectors: [["ion-breadcrumbs"]],
    inputs: {
      color: "color",
      itemsAfterCollapse: "itemsAfterCollapse",
      itemsBeforeCollapse: "itemsBeforeCollapse",
      maxItems: "maxItems",
      mode: "mode"
    },
    outputs: {
      ionCollapsedClick: "ionCollapsedClick"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonBreadcrumbs = __decorate([ProxyCmp2({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"],
      outputs: ["ionCollapsedClick"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionCollapsedClick: [{
      type: Output
    }]
  });
})();
var IonButton = class IonButton2 {
  z;
  el;
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonButton2,
    selectors: [["ion-button"]],
    inputs: {
      buttonType: "buttonType",
      color: "color",
      disabled: "disabled",
      download: "download",
      expand: "expand",
      fill: "fill",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      shape: "shape",
      size: "size",
      strong: "strong",
      target: "target",
      type: "type"
    },
    outputs: {
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonButton = __decorate([ProxyCmp2({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"],
      outputs: ["ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonButtons = class IonButtons2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButtons2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonButtons2,
    selectors: [["ion-buttons"]],
    inputs: {
      collapse: "collapse"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonButtons_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonButtons = __decorate([ProxyCmp2({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCard = class IonCard2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCard2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCard2,
    selectors: [["ion-card"]],
    inputs: {
      button: "button",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCard_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCard = __decorate([ProxyCmp2({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCardContent = class IonCardContent2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardContent2,
    selectors: [["ion-card-content"]],
    inputs: {
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCardContent = __decorate([ProxyCmp2({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCardHeader = class IonCardHeader2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardHeader2,
    selectors: [["ion-card-header"]],
    inputs: {
      color: "color",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCardHeader = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCardSubtitle = class IonCardSubtitle2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardSubtitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardSubtitle2,
    selectors: [["ion-card-subtitle"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardSubtitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCardSubtitle = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCardTitle = class IonCardTitle2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardTitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCardTitle2,
    selectors: [["ion-card-title"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardTitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCardTitle = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCheckbox = class IonCheckbox2 {
  z;
  el;
  ionChange = new EventEmitter();
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCheckbox2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCheckbox2,
    selectors: [["ion-checkbox"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      errorText: "errorText",
      helperText: "helperText",
      indeterminate: "indeterminate",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange",
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCheckbox = __decorate([ProxyCmp2({
  inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"],
      outputs: ["ionChange", "ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonChip = class IonChip2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonChip2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonChip2,
    selectors: [["ion-chip"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      outline: "outline"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonChip_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonChip = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonCol = class IonCol2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCol_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCol2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonCol2,
    selectors: [["ion-col"]],
    inputs: {
      offset: "offset",
      offsetLg: "offsetLg",
      offsetMd: "offsetMd",
      offsetSm: "offsetSm",
      offsetXl: "offsetXl",
      offsetXs: "offsetXs",
      pull: "pull",
      pullLg: "pullLg",
      pullMd: "pullMd",
      pullSm: "pullSm",
      pullXl: "pullXl",
      pullXs: "pullXs",
      push: "push",
      pushLg: "pushLg",
      pushMd: "pushMd",
      pushSm: "pushSm",
      pushXl: "pushXl",
      pushXs: "pushXs",
      size: "size",
      sizeLg: "sizeLg",
      sizeMd: "sizeMd",
      sizeSm: "sizeSm",
      sizeXl: "sizeXl",
      sizeXs: "sizeXs"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCol_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonCol = __decorate([ProxyCmp2({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonContent = class IonContent2 {
  z;
  el;
  ionScrollStart = new EventEmitter();
  ionScroll = new EventEmitter();
  ionScrollEnd = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonContent2,
    selectors: [["ion-content"]],
    inputs: {
      color: "color",
      fixedSlotPlacement: "fixedSlotPlacement",
      forceOverscroll: "forceOverscroll",
      fullscreen: "fullscreen",
      scrollEvents: "scrollEvents",
      scrollX: "scrollX",
      scrollY: "scrollY"
    },
    outputs: {
      ionScrollStart: "ionScrollStart",
      ionScroll: "ionScroll",
      ionScrollEnd: "ionScrollEnd"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonContent = __decorate([ProxyCmp2({
  inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
      outputs: ["ionScrollStart", "ionScroll", "ionScrollEnd"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionScrollStart: [{
      type: Output
    }],
    ionScroll: [{
      type: Output
    }],
    ionScrollEnd: [{
      type: Output
    }]
  });
})();
var IonDatetime = class IonDatetime2 {
  z;
  el;
  ionCancel = new EventEmitter();
  ionChange = new EventEmitter();
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetime2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonDatetime2,
    selectors: [["ion-datetime"]],
    inputs: {
      cancelText: "cancelText",
      clearText: "clearText",
      color: "color",
      dayValues: "dayValues",
      disabled: "disabled",
      doneText: "doneText",
      firstDayOfWeek: "firstDayOfWeek",
      formatOptions: "formatOptions",
      highlightedDates: "highlightedDates",
      hourCycle: "hourCycle",
      hourValues: "hourValues",
      isDateEnabled: "isDateEnabled",
      locale: "locale",
      max: "max",
      min: "min",
      minuteValues: "minuteValues",
      mode: "mode",
      monthValues: "monthValues",
      multiple: "multiple",
      name: "name",
      preferWheel: "preferWheel",
      presentation: "presentation",
      readonly: "readonly",
      showAdjacentDays: "showAdjacentDays",
      showClearButton: "showClearButton",
      showDefaultButtons: "showDefaultButtons",
      showDefaultTimeLabel: "showDefaultTimeLabel",
      showDefaultTitle: "showDefaultTitle",
      size: "size",
      titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
      value: "value",
      yearValues: "yearValues"
    },
    outputs: {
      ionCancel: "ionCancel",
      ionChange: "ionChange",
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonDatetime_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonDatetime = __decorate([ProxyCmp2({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
      outputs: ["ionCancel", "ionChange", "ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionCancel: [{
      type: Output
    }],
    ionChange: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonDatetimeButton = class IonDatetimeButton2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetimeButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonDatetimeButton2,
    selectors: [["ion-datetime-button"]],
    inputs: {
      color: "color",
      datetime: "datetime",
      disabled: "disabled",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonDatetimeButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonDatetimeButton = __decorate([ProxyCmp2({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonFab = class IonFab2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFab2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFab2,
    selectors: [["ion-fab"]],
    inputs: {
      activated: "activated",
      edge: "edge",
      horizontal: "horizontal",
      vertical: "vertical"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonFab = __decorate([ProxyCmp2({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonFabButton = class IonFabButton2 {
  z;
  el;
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFabButton2,
    selectors: [["ion-fab-button"]],
    inputs: {
      activated: "activated",
      closeIcon: "closeIcon",
      color: "color",
      disabled: "disabled",
      download: "download",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      show: "show",
      size: "size",
      target: "target",
      translucent: "translucent",
      type: "type"
    },
    outputs: {
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFabButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonFabButton = __decorate([ProxyCmp2({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"],
      outputs: ["ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonFabList = class IonFabList2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFabList2,
    selectors: [["ion-fab-list"]],
    inputs: {
      activated: "activated",
      side: "side"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFabList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonFabList = __decorate([ProxyCmp2({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonFooter = class IonFooter2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFooter2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonFooter2,
    selectors: [["ion-footer"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFooter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonFooter = __decorate([ProxyCmp2({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonGrid = class IonGrid2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonGrid2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonGrid2,
    selectors: [["ion-grid"]],
    inputs: {
      fixed: "fixed"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonGrid_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonGrid = __decorate([ProxyCmp2({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonHeader = class IonHeader2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonHeader2,
    selectors: [["ion-header"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonHeader = __decorate([ProxyCmp2({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonIcon = class IonIcon2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonIcon2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonIcon2,
    selectors: [["ion-icon"]],
    inputs: {
      color: "color",
      flipRtl: "flipRtl",
      icon: "icon",
      ios: "ios",
      lazy: "lazy",
      md: "md",
      mode: "mode",
      name: "name",
      sanitize: "sanitize",
      size: "size",
      src: "src"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonIcon = __decorate([ProxyCmp2({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonImg = class IonImg2 {
  z;
  el;
  ionImgWillLoad = new EventEmitter();
  ionImgDidLoad = new EventEmitter();
  ionError = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonImg_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonImg2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonImg2,
    selectors: [["ion-img"]],
    inputs: {
      alt: "alt",
      src: "src"
    },
    outputs: {
      ionImgWillLoad: "ionImgWillLoad",
      ionImgDidLoad: "ionImgDidLoad",
      ionError: "ionError"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonImg_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonImg = __decorate([ProxyCmp2({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"],
      outputs: ["ionImgWillLoad", "ionImgDidLoad", "ionError"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionImgWillLoad: [{
      type: Output
    }],
    ionImgDidLoad: [{
      type: Output
    }],
    ionError: [{
      type: Output
    }]
  });
})();
var IonInfiniteScroll = class IonInfiniteScroll2 {
  z;
  el;
  ionInfinite = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScroll2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInfiniteScroll2,
    selectors: [["ion-infinite-scroll"]],
    inputs: {
      disabled: "disabled",
      position: "position",
      threshold: "threshold"
    },
    outputs: {
      ionInfinite: "ionInfinite"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonInfiniteScroll = __decorate([ProxyCmp2({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"],
      outputs: ["ionInfinite"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionInfinite: [{
      type: Output
    }]
  });
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScrollContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInfiniteScrollContent2,
    selectors: [["ion-infinite-scroll-content"]],
    inputs: {
      loadingSpinner: "loadingSpinner",
      loadingText: "loadingText"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScrollContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonInfiniteScrollContent = __decorate([ProxyCmp2({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonInput = class IonInput2 {
  z;
  el;
  ionInput = new EventEmitter();
  ionChange = new EventEmitter();
  ionBlur = new EventEmitter();
  ionFocus = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInput2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInput2,
    selectors: [["ion-input"]],
    inputs: {
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      autofocus: "autofocus",
      clearInput: "clearInput",
      clearInputIcon: "clearInputIcon",
      clearOnEdit: "clearOnEdit",
      color: "color",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      maxlength: "maxlength",
      min: "min",
      minlength: "minlength",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      pattern: "pattern",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      shape: "shape",
      spellcheck: "spellcheck",
      step: "step",
      type: "type",
      value: "value"
    },
    outputs: {
      ionInput: "ionInput",
      ionChange: "ionChange",
      ionBlur: "ionBlur",
      ionFocus: "ionFocus"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInput_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonInput = __decorate([ProxyCmp2({
  inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
      outputs: ["ionInput", "ionChange", "ionBlur", "ionFocus"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionInput: [{
      type: Output
    }],
    ionChange: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }]
  });
})();
var IonInputOtp = class IonInputOtp2 {
  z;
  el;
  ionInput = new EventEmitter();
  ionChange = new EventEmitter();
  ionComplete = new EventEmitter();
  ionBlur = new EventEmitter();
  ionFocus = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInputOtp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputOtp2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInputOtp2,
    selectors: [["ion-input-otp"]],
    inputs: {
      autocapitalize: "autocapitalize",
      color: "color",
      disabled: "disabled",
      fill: "fill",
      inputmode: "inputmode",
      length: "length",
      pattern: "pattern",
      readonly: "readonly",
      separators: "separators",
      shape: "shape",
      size: "size",
      type: "type",
      value: "value"
    },
    outputs: {
      ionInput: "ionInput",
      ionChange: "ionChange",
      ionComplete: "ionComplete",
      ionBlur: "ionBlur",
      ionFocus: "ionFocus"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInputOtp_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonInputOtp = __decorate([ProxyCmp2({
  inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"],
  methods: ["setFocus"]
})], IonInputOtp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputOtp, [{
    type: Component,
    args: [{
      selector: "ion-input-otp",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"],
      outputs: ["ionInput", "ionChange", "ionComplete", "ionBlur", "ionFocus"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionInput: [{
      type: Output
    }],
    ionChange: [{
      type: Output
    }],
    ionComplete: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }]
  });
})();
var IonInputPasswordToggle = class IonInputPasswordToggle2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputPasswordToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonInputPasswordToggle2,
    selectors: [["ion-input-password-toggle"]],
    inputs: {
      color: "color",
      hideIcon: "hideIcon",
      mode: "mode",
      showIcon: "showIcon"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInputPasswordToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonInputPasswordToggle = __decorate([ProxyCmp2({
  inputs: ["color", "hideIcon", "mode", "showIcon"]
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
    type: Component,
    args: [{
      selector: "ion-input-password-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "hideIcon", "mode", "showIcon"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonItem = class IonItem2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItem2,
    selectors: [["ion-item"]],
    inputs: {
      button: "button",
      color: "color",
      detail: "detail",
      detailIcon: "detailIcon",
      disabled: "disabled",
      download: "download",
      href: "href",
      lines: "lines",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItem = __decorate([ProxyCmp2({
  inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonItemDivider = class IonItemDivider2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemDivider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemDivider2,
    selectors: [["ion-item-divider"]],
    inputs: {
      color: "color",
      mode: "mode",
      sticky: "sticky"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemDivider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItemDivider = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonItemGroup = class IonItemGroup2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemGroup2,
    selectors: [["ion-item-group"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItemGroup = __decorate([ProxyCmp2({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonItemOption = class IonItemOption2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemOption2,
    selectors: [["ion-item-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      download: "download",
      expandable: "expandable",
      href: "href",
      mode: "mode",
      rel: "rel",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItemOption = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonItemOptions = class IonItemOptions2 {
  z;
  el;
  ionSwipe = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOptions2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemOptions2,
    selectors: [["ion-item-options"]],
    inputs: {
      side: "side"
    },
    outputs: {
      ionSwipe: "ionSwipe"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemOptions_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItemOptions = __decorate([ProxyCmp2({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"],
      outputs: ["ionSwipe"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionSwipe: [{
      type: Output
    }]
  });
})();
var IonItemSliding = class IonItemSliding2 {
  z;
  el;
  ionDrag = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemSliding2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonItemSliding2,
    selectors: [["ion-item-sliding"]],
    inputs: {
      disabled: "disabled"
    },
    outputs: {
      ionDrag: "ionDrag"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemSliding_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonItemSliding = __decorate([ProxyCmp2({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"],
      outputs: ["ionDrag"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionDrag: [{
      type: Output
    }]
  });
})();
var IonLabel = class IonLabel2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLabel2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonLabel2,
    selectors: [["ion-label"]],
    inputs: {
      color: "color",
      mode: "mode",
      position: "position"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonLabel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonLabel = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonList = class IonList2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonList2,
    selectors: [["ion-list"]],
    inputs: {
      inset: "inset",
      lines: "lines",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonList = __decorate([ProxyCmp2({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonListHeader = class IonListHeader2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonListHeader2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonListHeader2,
    selectors: [["ion-list-header"]],
    inputs: {
      color: "color",
      lines: "lines",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonListHeader_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonListHeader = __decorate([ProxyCmp2({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonLoading = class IonLoading2 {
  z;
  el;
  ionLoadingDidPresent = new EventEmitter();
  ionLoadingWillPresent = new EventEmitter();
  ionLoadingWillDismiss = new EventEmitter();
  ionLoadingDidDismiss = new EventEmitter();
  didPresent = new EventEmitter();
  willPresent = new EventEmitter();
  willDismiss = new EventEmitter();
  didDismiss = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLoading2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonLoading2,
    selectors: [["ion-loading"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      showBackdrop: "showBackdrop",
      spinner: "spinner",
      translucent: "translucent",
      trigger: "trigger"
    },
    outputs: {
      ionLoadingDidPresent: "ionLoadingDidPresent",
      ionLoadingWillPresent: "ionLoadingWillPresent",
      ionLoadingWillDismiss: "ionLoadingWillDismiss",
      ionLoadingDidDismiss: "ionLoadingDidDismiss",
      didPresent: "didPresent",
      willPresent: "willPresent",
      willDismiss: "willDismiss",
      didDismiss: "didDismiss"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonLoading_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonLoading = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
      outputs: ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionLoadingDidPresent: [{
      type: Output
    }],
    ionLoadingWillPresent: [{
      type: Output
    }],
    ionLoadingWillDismiss: [{
      type: Output
    }],
    ionLoadingDidDismiss: [{
      type: Output
    }],
    didPresent: [{
      type: Output
    }],
    willPresent: [{
      type: Output
    }],
    willDismiss: [{
      type: Output
    }],
    didDismiss: [{
      type: Output
    }]
  });
})();
var IonMenu = class IonMenu2 {
  z;
  el;
  ionWillOpen = new EventEmitter();
  ionWillClose = new EventEmitter();
  ionDidOpen = new EventEmitter();
  ionDidClose = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenu2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenu2,
    selectors: [["ion-menu"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      maxEdgeStart: "maxEdgeStart",
      menuId: "menuId",
      side: "side",
      swipeGesture: "swipeGesture",
      type: "type"
    },
    outputs: {
      ionWillOpen: "ionWillOpen",
      ionWillClose: "ionWillClose",
      ionDidOpen: "ionDidOpen",
      ionDidClose: "ionDidClose"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonMenu = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
      outputs: ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionWillOpen: [{
      type: Output
    }],
    ionWillClose: [{
      type: Output
    }],
    ionDidOpen: [{
      type: Output
    }],
    ionDidClose: [{
      type: Output
    }]
  });
})();
var IonMenuButton = class IonMenuButton2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenuButton2,
    selectors: [["ion-menu-button"]],
    inputs: {
      autoHide: "autoHide",
      color: "color",
      disabled: "disabled",
      menu: "menu",
      mode: "mode",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenuButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonMenuButton = __decorate([ProxyCmp2({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonMenuToggle = class IonMenuToggle2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonMenuToggle2,
    selectors: [["ion-menu-toggle"]],
    inputs: {
      autoHide: "autoHide",
      menu: "menu"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenuToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonMenuToggle = __decorate([ProxyCmp2({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonNavLink = class IonNavLink2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNavLink2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonNavLink2,
    selectors: [["ion-nav-link"]],
    inputs: {
      component: "component",
      componentProps: "componentProps",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonNavLink_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonNavLink = __decorate([ProxyCmp2({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonNote = class IonNote2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNote_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNote2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonNote2,
    selectors: [["ion-note"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonNote_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonNote = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonPicker = class IonPicker2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPicker2,
    selectors: [["ion-picker"]],
    inputs: {
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonPicker = __decorate([ProxyCmp2({
  inputs: ["mode"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonPickerColumn = class IonPickerColumn2 {
  z;
  el;
  ionChange = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumn2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPickerColumn2,
    selectors: [["ion-picker-column"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPickerColumn_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonPickerColumn = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "value"],
  methods: ["setFocus"]
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
    type: Component,
    args: [{
      selector: "ion-picker-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "value"],
      outputs: ["ionChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }]
  });
})();
var IonPickerColumnOption = class IonPickerColumnOption2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumnOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonPickerColumnOption2,
    selectors: [["ion-picker-column-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPickerColumnOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonPickerColumnOption = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "value"]
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
    type: Component,
    args: [{
      selector: "ion-picker-column-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "value"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonProgressBar = class IonProgressBar2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonProgressBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonProgressBar2,
    selectors: [["ion-progress-bar"]],
    inputs: {
      buffer: "buffer",
      color: "color",
      mode: "mode",
      reversed: "reversed",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonProgressBar = __decorate([ProxyCmp2({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonRadio = class IonRadio2 {
  z;
  el;
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadio2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRadio2,
    selectors: [["ion-radio"]],
    inputs: {
      alignment: "alignment",
      color: "color",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    outputs: {
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRadio_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRadio = __decorate([ProxyCmp2({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"],
      outputs: ["ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonRadioGroup = class IonRadioGroup2 {
  z;
  el;
  ionChange = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadioGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRadioGroup2,
    selectors: [["ion-radio-group"]],
    inputs: {
      allowEmptySelection: "allowEmptySelection",
      compareWith: "compareWith",
      errorText: "errorText",
      helperText: "helperText",
      name: "name",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRadioGroup = __decorate([ProxyCmp2({
  inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"],
      outputs: ["ionChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }]
  });
})();
var IonRange = class IonRange2 {
  z;
  el;
  ionChange = new EventEmitter();
  ionInput = new EventEmitter();
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  ionKnobMoveStart = new EventEmitter();
  ionKnobMoveEnd = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRange_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRange2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRange2,
    selectors: [["ion-range"]],
    inputs: {
      activeBarStart: "activeBarStart",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      dualKnobs: "dualKnobs",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      min: "min",
      mode: "mode",
      name: "name",
      pin: "pin",
      pinFormatter: "pinFormatter",
      snaps: "snaps",
      step: "step",
      ticks: "ticks",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange",
      ionInput: "ionInput",
      ionFocus: "ionFocus",
      ionBlur: "ionBlur",
      ionKnobMoveStart: "ionKnobMoveStart",
      ionKnobMoveEnd: "ionKnobMoveEnd"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRange_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRange = __decorate([ProxyCmp2({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"],
      outputs: ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }],
    ionInput: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }],
    ionKnobMoveStart: [{
      type: Output
    }],
    ionKnobMoveEnd: [{
      type: Output
    }]
  });
})();
var IonRefresher = class IonRefresher2 {
  z;
  el;
  ionRefresh = new EventEmitter();
  ionPull = new EventEmitter();
  ionStart = new EventEmitter();
  ionPullStart = new EventEmitter();
  ionPullEnd = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresher2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRefresher2,
    selectors: [["ion-refresher"]],
    inputs: {
      closeDuration: "closeDuration",
      disabled: "disabled",
      mode: "mode",
      pullFactor: "pullFactor",
      pullMax: "pullMax",
      pullMin: "pullMin",
      snapbackDuration: "snapbackDuration"
    },
    outputs: {
      ionRefresh: "ionRefresh",
      ionPull: "ionPull",
      ionStart: "ionStart",
      ionPullStart: "ionPullStart",
      ionPullEnd: "ionPullEnd"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRefresher_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRefresher = __decorate([ProxyCmp2({
  inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
      outputs: ["ionRefresh", "ionPull", "ionStart", "ionPullStart", "ionPullEnd"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionRefresh: [{
      type: Output
    }],
    ionPull: [{
      type: Output
    }],
    ionStart: [{
      type: Output
    }],
    ionPullStart: [{
      type: Output
    }],
    ionPullEnd: [{
      type: Output
    }]
  });
})();
var IonRefresherContent = class IonRefresherContent2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresherContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRefresherContent2,
    selectors: [["ion-refresher-content"]],
    inputs: {
      pullingIcon: "pullingIcon",
      pullingText: "pullingText",
      refreshingSpinner: "refreshingSpinner",
      refreshingText: "refreshingText"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRefresherContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRefresherContent = __decorate([ProxyCmp2({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonReorder = class IonReorder2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorder2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonReorder2,
    selectors: [["ion-reorder"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonReorder_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonReorder = __decorate([ProxyCmp2({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonReorderGroup = class IonReorderGroup2 {
  z;
  el;
  ionItemReorder = new EventEmitter();
  ionReorderStart = new EventEmitter();
  ionReorderMove = new EventEmitter();
  ionReorderEnd = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorderGroup2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonReorderGroup2,
    selectors: [["ion-reorder-group"]],
    inputs: {
      disabled: "disabled"
    },
    outputs: {
      ionItemReorder: "ionItemReorder",
      ionReorderStart: "ionReorderStart",
      ionReorderMove: "ionReorderMove",
      ionReorderEnd: "ionReorderEnd"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonReorderGroup_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonReorderGroup = __decorate([ProxyCmp2({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"],
      outputs: ["ionItemReorder", "ionReorderStart", "ionReorderMove", "ionReorderEnd"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionItemReorder: [{
      type: Output
    }],
    ionReorderStart: [{
      type: Output
    }],
    ionReorderMove: [{
      type: Output
    }],
    ionReorderEnd: [{
      type: Output
    }]
  });
})();
var IonRippleEffect = class IonRippleEffect2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRippleEffect2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRippleEffect2,
    selectors: [["ion-ripple-effect"]],
    inputs: {
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRippleEffect_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRippleEffect = __decorate([ProxyCmp2({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonRow = class IonRow2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRow2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonRow2,
    selectors: [["ion-row"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRow_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonRow = __decorate([ProxyCmp2({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSearchbar = class IonSearchbar2 {
  z;
  el;
  ionInput = new EventEmitter();
  ionChange = new EventEmitter();
  ionCancel = new EventEmitter();
  ionClear = new EventEmitter();
  ionBlur = new EventEmitter();
  ionFocus = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSearchbar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSearchbar2,
    selectors: [["ion-searchbar"]],
    inputs: {
      animated: "animated",
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      cancelButtonIcon: "cancelButtonIcon",
      cancelButtonText: "cancelButtonText",
      clearIcon: "clearIcon",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      inputmode: "inputmode",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      searchIcon: "searchIcon",
      showCancelButton: "showCancelButton",
      showClearButton: "showClearButton",
      spellcheck: "spellcheck",
      type: "type",
      value: "value"
    },
    outputs: {
      ionInput: "ionInput",
      ionChange: "ionChange",
      ionCancel: "ionCancel",
      ionClear: "ionClear",
      ionBlur: "ionBlur",
      ionFocus: "ionFocus"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSearchbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSearchbar = __decorate([ProxyCmp2({
  inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
      outputs: ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionInput: [{
      type: Output
    }],
    ionChange: [{
      type: Output
    }],
    ionCancel: [{
      type: Output
    }],
    ionClear: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }]
  });
})();
var IonSegment = class IonSegment2 {
  z;
  el;
  ionChange = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegment2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegment2,
    selectors: [["ion-segment"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      scrollable: "scrollable",
      selectOnFocus: "selectOnFocus",
      swipeGesture: "swipeGesture",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegment_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSegment = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"],
      outputs: ["ionChange"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }]
  });
})();
var IonSegmentButton = class IonSegmentButton2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentButton2,
    selectors: [["ion-segment-button"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      layout: "layout",
      mode: "mode",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSegmentButton = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "layout", "mode", "type", "value"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSegmentContent = class IonSegmentContent2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentContent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentContent2,
    selectors: [["ion-segment-content"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSegmentContent = __decorate([ProxyCmp2({})], IonSegmentContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
    type: Component,
    args: [{
      selector: "ion-segment-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSegmentView = class IonSegmentView2 {
  z;
  el;
  ionSegmentViewScroll = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentView2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSegmentView2,
    selectors: [["ion-segment-view"]],
    inputs: {
      disabled: "disabled",
      swipeGesture: "swipeGesture"
    },
    outputs: {
      ionSegmentViewScroll: "ionSegmentViewScroll"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentView_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSegmentView = __decorate([ProxyCmp2({
  inputs: ["disabled", "swipeGesture"]
})], IonSegmentView);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
    type: Component,
    args: [{
      selector: "ion-segment-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "swipeGesture"],
      outputs: ["ionSegmentViewScroll"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionSegmentViewScroll: [{
      type: Output
    }]
  });
})();
var IonSelect = class IonSelect2 {
  z;
  el;
  ionChange = new EventEmitter();
  ionCancel = new EventEmitter();
  ionDismiss = new EventEmitter();
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelect2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelect2,
    selectors: [["ion-select"]],
    inputs: {
      cancelText: "cancelText",
      color: "color",
      compareWith: "compareWith",
      disabled: "disabled",
      errorText: "errorText",
      expandedIcon: "expandedIcon",
      fill: "fill",
      helperText: "helperText",
      interface: "interface",
      interfaceOptions: "interfaceOptions",
      justify: "justify",
      label: "label",
      labelPlacement: "labelPlacement",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      okText: "okText",
      placeholder: "placeholder",
      required: "required",
      selectedText: "selectedText",
      shape: "shape",
      toggleIcon: "toggleIcon",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange",
      ionCancel: "ionCancel",
      ionDismiss: "ionDismiss",
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelect_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSelect = __decorate([ProxyCmp2({
  inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"],
      outputs: ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }],
    ionCancel: [{
      type: Output
    }],
    ionDismiss: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonSelectModal = class IonSelectModal2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelectModal2,
    selectors: [["ion-select-modal"]],
    inputs: {
      cancelText: "cancelText",
      header: "header",
      multiple: "multiple",
      options: "options"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelectModal_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSelectModal = __decorate([ProxyCmp2({
  inputs: ["cancelText", "header", "multiple", "options"]
})], IonSelectModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
    type: Component,
    args: [{
      selector: "ion-select-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "header", "multiple", "options"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSelectOption = class IonSelectOption2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectOption2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSelectOption2,
    selectors: [["ion-select-option"]],
    inputs: {
      description: "description",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelectOption_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSelectOption = __decorate([ProxyCmp2({
  inputs: ["description", "disabled", "justify", "labelPlacement", "mode", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["description", "disabled", "justify", "labelPlacement", "mode", "value"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSkeletonText = class IonSkeletonText2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSkeletonText2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSkeletonText2,
    selectors: [["ion-skeleton-text"]],
    inputs: {
      animated: "animated"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSkeletonText_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSkeletonText = __decorate([ProxyCmp2({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSpinner = class IonSpinner2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSpinner2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSpinner2,
    selectors: [["ion-spinner"]],
    inputs: {
      color: "color",
      duration: "duration",
      name: "name",
      paused: "paused"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSpinner_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSpinner = __decorate([ProxyCmp2({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonSplitPane = class IonSplitPane2 {
  z;
  el;
  ionSplitPaneVisible = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSplitPane2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonSplitPane2,
    selectors: [["ion-split-pane"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      when: "when"
    },
    outputs: {
      ionSplitPaneVisible: "ionSplitPaneVisible"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSplitPane_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonSplitPane = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"],
      outputs: ["ionSplitPaneVisible"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionSplitPaneVisible: [{
      type: Output
    }]
  });
})();
var IonTab = class IonTab2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTab2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTab2,
    selectors: [["ion-tab"]],
    inputs: {
      component: "component",
      tab: "tab"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTab_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonTab = __decorate([ProxyCmp2({
  inputs: ["component", "tab"],
  methods: ["setActive"]
})], IonTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
    type: Component,
    args: [{
      selector: "ion-tab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", {
        name: "tab",
        required: true
      }],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonTabBar = class IonTabBar2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTabBar2,
    selectors: [["ion-tab-bar"]],
    inputs: {
      color: "color",
      mode: "mode",
      selectedTab: "selectedTab",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTabBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonTabBar = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonTabButton = class IonTabButton2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabButton2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTabButton2,
    selectors: [["ion-tab-button"]],
    inputs: {
      disabled: "disabled",
      download: "download",
      href: "href",
      layout: "layout",
      mode: "mode",
      rel: "rel",
      selected: "selected",
      tab: "tab",
      target: "target"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTabButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonTabButton = __decorate([ProxyCmp2({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonText = class IonText2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonText2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonText2,
    selectors: [["ion-text"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonText_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonText = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonTextarea = class IonTextarea2 {
  z;
  el;
  ionChange = new EventEmitter();
  ionInput = new EventEmitter();
  ionBlur = new EventEmitter();
  ionFocus = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTextarea2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTextarea2,
    selectors: [["ion-textarea"]],
    inputs: {
      autoGrow: "autoGrow",
      autocapitalize: "autocapitalize",
      autofocus: "autofocus",
      clearOnEdit: "clearOnEdit",
      color: "color",
      cols: "cols",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      rows: "rows",
      shape: "shape",
      spellcheck: "spellcheck",
      value: "value",
      wrap: "wrap"
    },
    outputs: {
      ionChange: "ionChange",
      ionInput: "ionInput",
      ionBlur: "ionBlur",
      ionFocus: "ionFocus"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTextarea_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonTextarea = __decorate([ProxyCmp2({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
      outputs: ["ionChange", "ionInput", "ionBlur", "ionFocus"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }],
    ionInput: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }]
  });
})();
var IonThumbnail = class IonThumbnail2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonThumbnail2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonThumbnail2,
    selectors: [["ion-thumbnail"]],
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonThumbnail_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonThumbnail = __decorate([ProxyCmp2({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: [],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonTitle = class IonTitle2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTitle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonTitle2,
    selectors: [["ion-title"]],
    inputs: {
      color: "color",
      size: "size"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTitle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonTitle = __decorate([ProxyCmp2({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var IonToast = class IonToast2 {
  z;
  el;
  ionToastDidPresent = new EventEmitter();
  ionToastWillPresent = new EventEmitter();
  ionToastWillDismiss = new EventEmitter();
  ionToastDidDismiss = new EventEmitter();
  didPresent = new EventEmitter();
  willPresent = new EventEmitter();
  willDismiss = new EventEmitter();
  didDismiss = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonToast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToast2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToast2,
    selectors: [["ion-toast"]],
    inputs: {
      animated: "animated",
      buttons: "buttons",
      color: "color",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      icon: "icon",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      layout: "layout",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      position: "position",
      positionAnchor: "positionAnchor",
      swipeGesture: "swipeGesture",
      translucent: "translucent",
      trigger: "trigger"
    },
    outputs: {
      ionToastDidPresent: "ionToastDidPresent",
      ionToastWillPresent: "ionToastWillPresent",
      ionToastWillDismiss: "ionToastWillDismiss",
      ionToastDidDismiss: "ionToastDidDismiss",
      didPresent: "didPresent",
      willPresent: "willPresent",
      willDismiss: "willDismiss",
      didDismiss: "didDismiss"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonToast = __decorate([ProxyCmp2({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
      outputs: ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionToastDidPresent: [{
      type: Output
    }],
    ionToastWillPresent: [{
      type: Output
    }],
    ionToastWillDismiss: [{
      type: Output
    }],
    ionToastDidDismiss: [{
      type: Output
    }],
    didPresent: [{
      type: Output
    }],
    willPresent: [{
      type: Output
    }],
    willDismiss: [{
      type: Output
    }],
    didDismiss: [{
      type: Output
    }]
  });
})();
var IonToggle = class IonToggle2 {
  z;
  el;
  ionChange = new EventEmitter();
  ionFocus = new EventEmitter();
  ionBlur = new EventEmitter();
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToggle2,
    selectors: [["ion-toggle"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      enableOnOffLabels: "enableOnOffLabels",
      errorText: "errorText",
      helperText: "helperText",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    outputs: {
      ionChange: "ionChange",
      ionFocus: "ionFocus",
      ionBlur: "ionBlur"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonToggle = __decorate([ProxyCmp2({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"],
      outputs: ["ionChange", "ionFocus", "ionBlur"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ionChange: [{
      type: Output
    }],
    ionFocus: [{
      type: Output
    }],
    ionBlur: [{
      type: Output
    }]
  });
})();
var IonToolbar = class IonToolbar2 {
  z;
  el;
  constructor(c7, r5, z) {
    this.z = z;
    c7.detach();
    this.el = r5.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToolbar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: IonToolbar2,
    selectors: [["ion-toolbar"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToolbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
IonToolbar = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"],
      standalone: false
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-router-outlet.js
var _c03 = ["outletContent"];
var _c1 = ["*"];
var IonRouterOutlet2 = class _IonRouterOutlet extends IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    viewQuery: function IonRouterOutlet_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c03, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outletContent = _t.first);
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 0,
    consts: [["outletContent", ""]],
    template: function IonRouterOutlet_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainerStart(0, null, 0);
        ɵɵprojection(2);
        ɵɵelementContainerEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet2, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-router-outlet",
      template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["name"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Attribute,
      args: ["tabs"]
    }]
  }, {
    type: Location
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: NgZone
  }, {
    type: ActivatedRoute
  }, {
    type: IonRouterOutlet2,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }], {
    outletContent: [{
      type: ViewChild,
      args: ["outletContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-tabs.js
var _c04 = ["outlet"];
var _c12 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
var _c2 = ["[slot=top]", "*", "ion-tab"];
var _c3 = ["*ngIf", "tabs.length > 0"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ion-router-outlet", 5, 1);
    ɵɵlistener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStackDidChange($event));
    });
    ɵɵelementEnd();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2, _c3);
  }
}
var IonTabs2 = class _IonTabs extends IonTabs {
  outlet;
  tabBar;
  tabBars;
  tabs;
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonTabs_BaseFactory;
    return function IonTabs_Factory(__ngFactoryType__) {
      return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = ɵɵgetInheritedFactory(_IonTabs)))(__ngFactoryType__ || _IonTabs);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, IonTabBar, 5)(dirIndex, IonTabBar, 4)(dirIndex, IonTab, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBars = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
      }
    },
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c04, 5, IonRouterOutlet2);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outlet = _t.first);
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 6,
    vars: 2,
    consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
    template: function IonTabs_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c12);
        ɵɵprojection(0);
        ɵɵelementStart(1, "div", 2, 0);
        ɵɵtemplate(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
        ɵɵelementEnd();
        ɵɵprojection(5, 1);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.tabs.length === 0);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tabs.length > 0);
      }
    },
    dependencies: [NgIf, IonRouterOutlet2],
    styles: ["[_nghost-%COMP%] {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner[_ngcontent-%COMP%] {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs2, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
      styles: ["\n      :host {\n        display: flex;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n\n        contain: layout size style;\n      }\n      .tabs-inner {\n        position: relative;\n\n        flex: 1;\n\n        contain: layout size style;\n      }\n    "]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet2,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }],
    tabs: [{
      type: ContentChildren,
      args: [IonTab]
    }]
  });
})();

// node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-back-button.js
var _c05 = ["*"];
var IonBackButton3 = class _IonBackButton extends IonBackButton {
  constructor(routerOutlet, navCtrl, config, r5, z, c7) {
    super(routerOutlet, navCtrl, config, r5, z, c7);
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonBackButton)(ɵɵdirectiveInject(IonRouterOutlet2, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonBackButton,
    selectors: [["ion-back-button"]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function IonBackButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton3, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: IonRouterOutlet2,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NavController
  }, {
    type: Config
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/navigation/ion-nav.js
var _c06 = ["*"];
var IonNav3 = class _IonNav extends IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c7) {
    super(ref, environmentInjector, injector, angularDelegate, z, c7);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonNav)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonNav,
    selectors: [["ion-nav"]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c06,
    decls: 1,
    vars: 0,
    template: function IonNav_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav3, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: EnvironmentInjector
  }, {
    type: Injector
  }, {
    type: AngularDelegate
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/navigation/router-link-delegate.js
var RouterLinkDelegateDirective2 = class _RouterLinkDelegateDirective extends RouterLinkDelegateDirective {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRouterLinkDelegateDirective_BaseFactory;
    return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(_RouterLinkDelegateDirective)))(__ngFactoryType__ || _RouterLinkDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective2, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var RouterLinkWithHrefDelegateDirective2 = class _RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
    return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = ɵɵgetInheritedFactory(_RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective2, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/overlays/modal.js
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
var IonModal3 = class _IonModal extends IonModal {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonModal_BaseFactory;
    return function IonModal_Factory(__ngFactoryType__) {
      return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = ɵɵgetInheritedFactory(_IonModal)))(__ngFactoryType__ || _IonModal);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonModal,
    selectors: [["ion-modal"]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
    template: function IonModal_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, IonModal_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal3, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/overlays/popover.js
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
var IonPopover3 = class _IonPopover extends IonPopover {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonPopover_BaseFactory;
    return function IonPopover_Factory(__ngFactoryType__) {
      return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = ɵɵgetInheritedFactory(_IonPopover)))(__ngFactoryType__ || _IonPopover);
    };
  })();
  /** @nocollapse */
  static ɵcmp = ɵɵdefineComponent({
    type: _IonPopover,
    selectors: [["ion-popover"]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function IonPopover_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover3, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/validators/max-validator.js
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var IonMaxValidator = class _IonMaxValidator extends MaxValidator {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonMaxValidator_BaseFactory;
    return function IonMaxValidator_Factory(__ngFactoryType__) {
      return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_IonMaxValidator)))(__ngFactoryType__ || _IonMaxValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonMaxValidator,
    selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("max", ctx.enabled(ctx.max) ? ctx.max : null);
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([ION_MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      host: {
        "[attr.max]": "enabled(max) ? max : null"
      }
    }]
  }], null, null);
})();

// node_modules/@ionic/angular/dist/lazy/directives/validators/min-validator.js
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var IonMinValidator = class _IonMinValidator extends MinValidator {
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIonMinValidator_BaseFactory;
    return function IonMinValidator_Factory(__ngFactoryType__) {
      return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = ɵɵgetInheritedFactory(_IonMinValidator)))(__ngFactoryType__ || _IonMinValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonMinValidator,
    selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("min", ctx.enabled(ctx.min) ? ctx.min : null);
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([ION_MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      host: {
        "[attr.min]": "enabled(min) ? min : null"
      }
    }]
  }], null, null);
})();

// node_modules/@ionic/core/dist/esm/index.js
var IonicSlides = (opts) => {
  const { swiper, extendParams } = opts;
  const slidesParams = {
    effect: void 0,
    direction: "horizontal",
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: "container",
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide"
    }
  };
  if (swiper.pagination) {
    slidesParams.pagination = {
      type: "bullets",
      clickable: false,
      hideOnClick: false
    };
  }
  if (swiper.scrollbar) {
    slidesParams.scrollbar = {
      hide: true
    };
  }
  extendParams(slidesParams);
};

// node_modules/@ionic/angular/dist/lazy/providers/alert-controller.js
var AlertController = class _AlertController extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
  /** @nocollapse */
  static ɵfac = function AlertController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AlertController,
    factory: _AlertController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/animation-controller.js
var AnimationController = class _AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p22, p3, progression) {
    return getTimeGivenProgression(p0, p1, p22, p3, progression);
  }
  /** @nocollapse */
  static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationController,
    factory: _AnimationController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/action-sheet-controller.js
var ActionSheetController = class _ActionSheetController extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
  /** @nocollapse */
  static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ActionSheetController,
    factory: _ActionSheetController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/gesture-controller.js
var GestureController = class _GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach((key) => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
  /** @nocollapse */
  static ɵfac = function GestureController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestureController)(ɵɵinject(NgZone));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _GestureController,
    factory: _GestureController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/loading-controller.js
var LoadingController = class _LoadingController extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
  /** @nocollapse */
  static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _LoadingController,
    factory: _LoadingController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/menu-controller.js
var MenuController2 = class _MenuController extends MenuController {
  constructor() {
    super(menuController);
  }
  /** @nocollapse */
  static ɵfac = function MenuController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuController,
    factory: _MenuController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/modal-controller.js
var ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(modalController);
  }
  create(opts) {
    const _a = opts, {
      injector: customInjector
    } = _a, restOpts = __objRest(_a, [
      "injector"
    ]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", customInjector)
    }));
  }
  /** @nocollapse */
  static ɵfac = function ModalController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ModalController,
    factory: _ModalController.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], () => [], null);
})();

// node_modules/@ionic/angular/dist/lazy/providers/popover-controller.js
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(popoverController);
  }
  create(opts) {
    const _a = opts, { injector: customInjector } = _a, restOpts = __objRest(_a, ["injector"]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", customInjector)
    }));
  }
};

// node_modules/@ionic/angular/dist/lazy/providers/toast-controller.js
var ToastController = class _ToastController extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
  /** @nocollapse */
  static ɵfac = function ToastController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ToastController,
    factory: _ToastController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@ionic/core/dist/esm/app-globals-CYmMeGdU.js
var appGlobalScript = initialize || (() => {
});
var globalScripts = appGlobalScript;

// node_modules/@ionic/core/dist/esm/loader.js
var defineCustomElements = async (win, options) => {
  if (typeof window === "undefined") return void 0;
  await globalScripts();
  return bootstrapLazy(JSON.parse('[["ion-datetime",[[801,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"showAdjacentDays":[4,"show-adjacent-days"],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64],"getDefaultPart":[64]},null,{"formatOptions":[{"formatOptionsChanged":0}],"disabled":[{"disabledChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"presentation":[{"presentationChanged":0}],"yearValues":[{"yearValuesChanged":0}],"monthValues":[{"monthValuesChanged":0}],"dayValues":[{"dayValuesChanged":0}],"hourValues":[{"hourValuesChanged":0}],"minuteValues":[{"minuteValuesChanged":0}],"value":[{"valueChanged":0}]}]]],["ion-menu_3",[[801,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[801,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":[{"typeChanged":0}],"disabled":[{"disabledChanged":0}],"side":[{"sideChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}]}],[769,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[545,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":[{"onTypeChange":0}]}]]],["ion-fab_3",[[801,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"form":[1],"size":[1],"closeIcon":[1,"close-icon"]},null,{"disabled":[{"disabledChanged":0}]}],[769,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":[{"activatedChanged":0}]}],[769,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":[{"activatedChanged":0}]}]]],["ion-refresher_2",[[512,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[544,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-back-button",[[545,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-loading",[[546,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-toast",[[545,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-card_5",[[801,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[801,"ion-card-header",{"color":[513],"translucent":[4]}],[801,"ion-card-subtitle",{"color":[513]}],[801,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[801,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[544,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[512,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-accordion_2",[[817,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32],"hasInteracted":[32]},null,{"value":[{"valueChanged":0}]}],[801,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}],"readonly":[{"readonlyChanged":0}]}]]],["ion-breadcrumb_2",[[801,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[801,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":[{"maxItemsChanged":0}],"itemsBeforeCollapse":[{"maxItemsChanged":0}],"itemsAfterCollapse":[{"maxItemsChanged":0}]}]]],["ion-infinite-scroll_2",[[544,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[512,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":[{"thresholdChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-reorder_2",[[289,"ion-reorder",null,[[2,"click","onClick"]]],[512,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-segment_2",[[801,"ion-segment-button",{"contentId":[513,"content-id"],"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}]}],[801,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[16,"ionSegmentViewScroll","handleSegmentViewScroll"],[0,"keydown","onKeyDown"]],{"color":[{"colorChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}],"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-tab-bar_2",[[801,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[801,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":[{"selectedTabChanged":0}]}]]],["ion-chip",[[801,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[801,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[806,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[4],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"type":[{"onTypeChange":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-searchbar",[[546,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[4],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":[{"onLangChanged":0}],"dir":[{"onDirChanged":0}],"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"showCancelButton":[{"showCancelButtonChanged":0}]}]]],["ion-toggle",[[801,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"activated":[32],"isInvalid":[32],"hintTextId":[32]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-route_4",[[512,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":[{"onUpdate":0}],"component":[{"onUpdate":0}],"componentProps":[{"onComponentProps":0}]}],[512,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":[{"propDidChange":0}],"to":[{"propDidChange":0}]}],[512,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[769,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[289,"ion-avatar"],[801,"ion-badge",{"color":[513]}],[257,"ion-thumbnail"]]],["ion-col_3",[[769,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[769,"ion-grid",{"fixed":[4]}],[257,"ion-row"]]],["ion-nav_2",[[769,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"root":[{"rootChanged":0}]}],[512,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-tab_2",[[769,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":[{"changeActive":0}]}],[769,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[513,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":[{"srcChanged":0}]}]]],["ion-input-otp",[[806,"ion-input-otp",{"autocapitalize":[1],"color":[513],"disabled":[516],"fill":[1],"inputmode":[1],"length":[2],"pattern":[1],"readonly":[516],"separators":[1],"shape":[1],"size":[1],"type":[1],"value":[1032],"inputValues":[32],"hasFocus":[32],"previousInputValues":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}],"separators":[{"processSeparators":0}],"length":[{"processSeparators":0}]}]]],["ion-progress-bar",[[545,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[801,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"activatedKnob":[32],"focusedKnob":[32],"hoveredKnob":[32],"pressedKnob":[32]},null,{"debounce":[{"debounceChanged":0}],"dualKnobs":[{"dualKnobsChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"step":[{"stepChanged":0}],"activeBarStart":[{"activeBarStartChanged":0}],"disabled":[{"disabledChanged":0}],"value":[{"valueChanged":0}]}]]],["ion-segment-content",[[257,"ion-segment-content"]]],["ion-segment-view",[[801,"ion-segment-view",{"disabled":[4],"swipeGesture":[4,"swipe-gesture"],"isManualScroll":[32],"setContent":[64]},[[1,"scroll","handleScroll"],[1,"touchstart","handleScrollStart"],[1,"touchend","handleTouchEnd"]]]]],["ion-split-pane",[[801,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":[{"visibleChanged":0}],"disabled":[{"updateState":0}],"when":[{"updateState":0}]}]]],["ion-text",[[769,"ion-text",{"color":[513]}]]],["ion-textarea",[[806,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[516],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[516],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-select-modal",[[546,"ion-select-modal",{"header":[1],"cancelText":[1,"cancel-text"],"multiple":[4],"options":[16]}]]],["ion-picker",[[289,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[769,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":[{"ariaLabelChanged":0}],"value":[{"valueChange":0}]}]]],["ion-picker-column-option",[[801,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":[{"onAriaLabelChange":0}]}]]],["ion-backdrop",[[545,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[804,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[769,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeGesture":[1028,"swipe-gesture"],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"swipeHandler":[{"swipeHandlerChanged":0}]}],[769,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"recalculateDimensions":[64],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]],{"fullscreen":[{"fullscreenChanged":0}]}],[804,"ion-header",{"collapse":[1],"translucent":[4]}],[801,"ion-title",{"color":[513],"size":[1]},null,{"size":[{"sizeChanged":0}]}],[801,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[806,"ion-buttons",{"collapse":[4]}]]],["ion-ripple-effect",[[513,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-action-sheet",[[546,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"activeRadioId":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[0,"keydown","onKeydown"]],{"buttons":[{"buttonsChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-alert",[[546,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"isButtonGroupWrapped":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}],"buttons":[{"buttonsChanged":0}],"inputs":[{"inputsChanged":0}]}]]],["ion-modal",[[801,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"expandToScroll":[4,"expand-to-scroll"],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"isSheetModal":[32],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},[[9,"resize","onWindowResize"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}],"breakpoints":[{"breakpointsChanged":0}]}]]],["ion-popover",[[801,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":[{"onTriggerChange":0}],"triggerAction":[{"onTriggerChange":0}],"isOpen":[{"onIsOpenChange":0}]}]]],["ion-checkbox",[[801,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"isInvalid":[32],"hasLabelContent":[32],"hintTextId":[32],"setFocus":[64]}]]],["ion-spinner",[[513,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-radio_2",[[801,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[520],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":[{"valueChanged":0}]}],[804,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032],"helperText":[1,"helper-text"],"errorText":[1,"error-text"],"isInvalid":[32],"hintTextId":[32],"setFocus":[64]},[[4,"keydown","onKeydown"]],{"value":[{"valueChanged":0}]}]]],["ion-button_2",[[801,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":[{"disabledChanged":0}],"aria-checked":[{"onAriaChanged":0}],"aria-label":[{"onAriaChanged":0}],"aria-pressed":[{"onAriaChanged":0}]}],[257,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":[{"loadIcon":0}],"src":[{"loadIcon":0}],"icon":[{"loadIcon":0}],"ios":[{"loadIcon":0}],"md":[{"loadIcon":0}]}]]],["ion-item_8",[[801,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[801,"ion-note",{"color":[513]}],[513,"ion-skeleton-text",{"animated":[4]}],[806,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":[{"colorChanged":0}],"position":[{"positionChanged":0}]}],[801,"ion-list-header",{"color":[513],"lines":[1]}],[801,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[516],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"isInteractive":[32],"hasSlottedIndicatorControl":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":[{"buttonChanged":0}]}],[544,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}]]],["ion-select_3",[[801,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"required":[4],"isExpanded":[32],"hasFocus":[32],"isInvalid":[32],"hintTextId":[32],"open":[64]},null,{"disabled":[{"styleChanged":0}],"isExpanded":[{"styleChanged":0}],"placeholder":[{"styleChanged":0}],"value":[{"styleChanged":0}]}],[513,"ion-select-option",{"disabled":[4],"value":[8],"description":[1],"labelPlacement":[1,"label-placement"],"justify":[1]}],[546,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]]]'), options);
};

// node_modules/@ionic/core/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a4 = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a4, [], this.constructor);
    };
    HTMLElement.prototype = a4.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a4);
  }
})();

// node_modules/@ionic/angular/dist/lazy/app-initialize.js
var appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config), {
        _zoneGate: (h2) => zone.run(h2)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return defineCustomElements(win, {
        exclude: ["ion-tabs"],
        syncQueue: true,
        raf,
        jmp: (h2) => zone.runOutsideAngular(h2),
        ael(elm, eventName, cb, opts) {
          elm[aelFn](eventName, cb, opts);
        },
        rel(elm, eventName, cb, opts) {
          elm.removeEventListener(eventName, cb, opts);
        }
      });
    }
  };
};

// node_modules/@ionic/angular/dist/lazy/directives/proxies-list.js
var DIRECTIVES = [
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonAlert,
  IonApp,
  IonAvatar,
  IonBackdrop,
  IonBadge,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonInputOtp,
  IonInputPasswordToggle,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNavLink,
  IonNote,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonProgressBar,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonSelect,
  IonSelectModal,
  IonSelectOption,
  IonSkeletonText,
  IonSpinner,
  IonSplitPane,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar
];

// node_modules/@ionic/angular/dist/lazy/ionic-module.js
var DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // manual proxies
  IonModal3,
  IonPopover3,
  // ngModel accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  // navigation
  IonTabs2,
  IonRouterOutlet2,
  IonBackButton3,
  IonNav3,
  RouterLinkDelegateDirective2,
  RouterLinkWithHrefDelegateDirective2,
  // validators
  IonMinValidator,
  IonMaxValidator
];
var IonicModule = class _IonicModule {
  /**
   * @deprecated `IonicModule.forRoot()` is deprecated and will be removed in a future major version.
   * Use `provideIonicAngular()` instead. Any config passed here can be passed as an object to that
   * function. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.
   */
  static forRoot(config = {}) {
    console.warn(`[Ionic Warning]: IonicModule has been deprecated in favor of provideIonicAngular() and will be removed in a future major version. Refer to https://ionicframework.com/docs/angular/build-options for migration steps.`);
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone]
      }, AngularDelegate, provideComponentInputBinding()]
    };
  }
  /** @nocollapse */
  static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonicModule)();
  };
  /** @nocollapse */
  static ɵmod = ɵɵdefineNgModule({
    type: _IonicModule,
    declarations: [
      IonAccordion,
      IonAccordionGroup,
      IonActionSheet,
      IonAlert,
      IonApp,
      IonAvatar,
      IonBackdrop,
      IonBadge,
      IonBreadcrumb,
      IonBreadcrumbs,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCheckbox,
      IonChip,
      IonCol,
      IonContent,
      IonDatetime,
      IonDatetimeButton,
      IonFab,
      IonFabButton,
      IonFabList,
      IonFooter,
      IonGrid,
      IonHeader,
      IonIcon,
      IonImg,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonInput,
      IonInputOtp,
      IonInputPasswordToggle,
      IonItem,
      IonItemDivider,
      IonItemGroup,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
      IonListHeader,
      IonLoading,
      IonMenu,
      IonMenuButton,
      IonMenuToggle,
      IonNavLink,
      IonNote,
      IonPicker,
      IonPickerColumn,
      IonPickerColumnOption,
      IonProgressBar,
      IonRadio,
      IonRadioGroup,
      IonRange,
      IonRefresher,
      IonRefresherContent,
      IonReorder,
      IonReorderGroup,
      IonRippleEffect,
      IonRow,
      IonSearchbar,
      IonSegment,
      IonSegmentButton,
      IonSegmentContent,
      IonSegmentView,
      IonSelect,
      IonSelectModal,
      IonSelectOption,
      IonSkeletonText,
      IonSpinner,
      IonSplitPane,
      IonTab,
      IonTabBar,
      IonTabButton,
      IonText,
      IonTextarea,
      IonThumbnail,
      IonTitle,
      IonToast,
      IonToggle,
      IonToolbar,
      // manual proxies
      IonModal3,
      IonPopover3,
      // ngModel accessors
      BooleanValueAccessorDirective,
      NumericValueAccessorDirective,
      SelectValueAccessorDirective,
      TextValueAccessorDirective,
      // navigation
      IonTabs2,
      IonRouterOutlet2,
      IonBackButton3,
      IonNav3,
      RouterLinkDelegateDirective2,
      RouterLinkWithHrefDelegateDirective2,
      // validators
      IonMinValidator,
      IonMaxValidator
    ],
    imports: [CommonModule],
    exports: [
      IonAccordion,
      IonAccordionGroup,
      IonActionSheet,
      IonAlert,
      IonApp,
      IonAvatar,
      IonBackdrop,
      IonBadge,
      IonBreadcrumb,
      IonBreadcrumbs,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCheckbox,
      IonChip,
      IonCol,
      IonContent,
      IonDatetime,
      IonDatetimeButton,
      IonFab,
      IonFabButton,
      IonFabList,
      IonFooter,
      IonGrid,
      IonHeader,
      IonIcon,
      IonImg,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonInput,
      IonInputOtp,
      IonInputPasswordToggle,
      IonItem,
      IonItemDivider,
      IonItemGroup,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
      IonListHeader,
      IonLoading,
      IonMenu,
      IonMenuButton,
      IonMenuToggle,
      IonNavLink,
      IonNote,
      IonPicker,
      IonPickerColumn,
      IonPickerColumnOption,
      IonProgressBar,
      IonRadio,
      IonRadioGroup,
      IonRange,
      IonRefresher,
      IonRefresherContent,
      IonReorder,
      IonReorderGroup,
      IonRippleEffect,
      IonRow,
      IonSearchbar,
      IonSegment,
      IonSegmentButton,
      IonSegmentContent,
      IonSegmentView,
      IonSelect,
      IonSelectModal,
      IonSelectOption,
      IonSkeletonText,
      IonSpinner,
      IonSplitPane,
      IonTab,
      IonTabBar,
      IonTabButton,
      IonText,
      IonTextarea,
      IonThumbnail,
      IonTitle,
      IonToast,
      IonToggle,
      IonToolbar,
      // manual proxies
      IonModal3,
      IonPopover3,
      // ngModel accessors
      BooleanValueAccessorDirective,
      NumericValueAccessorDirective,
      SelectValueAccessorDirective,
      TextValueAccessorDirective,
      // navigation
      IonTabs2,
      IonRouterOutlet2,
      IonBackButton3,
      IonNav3,
      RouterLinkDelegateDirective2,
      RouterLinkWithHrefDelegateDirective2,
      // validators
      IonMinValidator,
      IonMaxValidator
    ]
  });
  /** @nocollapse */
  static ɵinj = ɵɵdefineInjector({
    providers: [ModalController, PopoverController],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
})();
export {
  ActionSheetController,
  AlertController,
  AngularDelegate,
  AnimationController,
  BooleanValueAccessorDirective as BooleanValueAccessor,
  Config,
  DomController,
  GestureController,
  ION_MAX_VALIDATOR,
  ION_MIN_VALIDATOR,
  IonAccordion,
  IonAccordionGroup,
  IonActionSheet,
  IonAlert,
  IonApp,
  IonAvatar,
  IonBackButton3 as IonBackButton,
  IonBackdrop,
  IonBadge,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonInputOtp,
  IonInputPasswordToggle,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMaxValidator,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonMinValidator,
  IonModal3 as IonModal,
  IonModalToken,
  IonNav3 as IonNav,
  IonNavLink,
  IonNote,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonPopover3 as IonPopover,
  IonProgressBar,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonRouterOutlet2 as IonRouterOutlet,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonSelect,
  IonSelectModal,
  IonSelectOption,
  IonSkeletonText,
  IonSpinner,
  IonSplitPane,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs2 as IonTabs,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar,
  IonicModule,
  IonicRouteStrategy,
  IonicSafeString,
  IonicSlides,
  LoadingController,
  MenuController2 as MenuController,
  ModalController,
  NavController,
  NavParams,
  NumericValueAccessorDirective as NumericValueAccessor,
  Platform,
  PopoverController,
  RouterLinkDelegateDirective2 as RouterLinkDelegate,
  RouterLinkWithHrefDelegateDirective2 as RouterLinkWithHrefDelegate,
  SelectValueAccessorDirective as SelectValueAccessor,
  TextValueAccessorDirective as TextValueAccessor,
  ToastController,
  createAnimation,
  createGesture,
  getIonPageElement,
  getPlatforms,
  getTimeGivenProgression,
  iosTransitionAnimation,
  isPlatform,
  mdTransitionAnimation,
  openURL
};
//# sourceMappingURL=@ionic_angular_lazy.js.map
