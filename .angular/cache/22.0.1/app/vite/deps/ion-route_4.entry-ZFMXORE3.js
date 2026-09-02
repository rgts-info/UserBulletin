import {
  findClosestIonContent,
  getScrollElement,
  isIonContent
} from "./chunk-W5RX2GGE.js";
import {
  componentOnReady,
  debounce,
  raf
} from "./chunk-LBH7LDCW.js";
import "./chunk-YIRVZL7S.js";
import {
  createColorClasses,
  openURL
} from "./chunk-X6S6FZTM.js";
import {
  getIonMode
} from "./chunk-BPCRN7AY.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonError,
  printIonWarning,
  registerInstance
} from "./chunk-CHUIAFLQ.js";
import {
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// node_modules/@ionic/core/dist/esm/ion-route_4.entry.js
var Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
  }
  /**
   * Relative path that needs to match in order for this route to apply.
   *
   * Accepts paths similar to expressjs so that you can define parameters
   * in the url /foo/:bar where bar would be available in incoming props.
   */
  url = "";
  /**
   * Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-router-outlet`)
   * when the route matches.
   *
   * The value of this property is not always the tagname of the component to load,
   * in `ion-tabs` it actually refers to the name of the `ion-tab` to select.
   */
  component;
  /**
   * A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed
   * to the defined component when rendered.
   */
  componentProps;
  /**
   * A navigation hook that is fired when the route tries to leave.
   * Returning `true` allows the navigation to proceed, while returning
   * `false` causes it to be cancelled. Returning a `NavigationHookOptions`
   * object causes the router to redirect to the path specified.
   */
  beforeLeave;
  /**
   * A navigation hook that is fired when the route tries to enter.
   * Returning `true` allows the navigation to proceed, while returning
   * `false` causes it to be cancelled. Returning a `NavigationHookOptions`
   * object causes the router to redirect to the path specified.
   */
  beforeEnter;
  /**
   * Used internally by `ion-router` to know when this route did change.
   */
  ionRouteDataChanged;
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      "url": [{
        "onUpdate": 0
      }],
      "component": [{
        "onUpdate": 0
      }],
      "componentProps": [{
        "onComponentProps": 0
      }]
    };
  }
};
var RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
  }
  /**
   * A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL.
   * It needs to be an exact match of the navigated URL in order to apply.
   *
   * The path specified in this value is always an absolute path, even if the initial `/` slash
   * is not specified.
   *
   */
  from;
  /**
   * A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL.
   * When the defined `ion-route-redirect` rule matches, the router will redirect to the path
   * specified in this property.
   *
   * The value of this property is always an absolute path inside the scope of routes defined in
   * `ion-router` it can't be used with another router or to perform a redirection to a different domain.
   *
   * Note that this is a virtual redirect, it will not cause a real browser refresh, again, it's
   * a redirect inside the context of ion-router.
   *
   * When this property is not specified or his value is `undefined` the whole redirect route is noop,
   * even if the "from" value matches.
   */
  to;
  /**
   * Internal event that fires when any value of this rule is added/removed from the DOM,
   * or any of his public properties changes.
   *
   * `ion-router` captures this event in order to update his internal registry of router rules.
   */
  ionRouteRedirectChanged;
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      "from": [{
        "propDidChange": 0
      }],
      "to": [{
        "propDidChange": 0
      }]
    };
  }
};
var ROUTER_INTENT_NONE = "root";
var ROUTER_INTENT_FORWARD = "forward";
var ROUTER_INTENT_BACK = "back";
var generatePath = (segments) => {
  const path = segments.filter((s) => s.length > 0).join("/");
  return "/" + path;
};
var generateUrl = (segments, useHash, queryString, fragment) => {
  let url = generatePath(segments);
  if (useHash) {
    url = "#" + url;
  }
  if (queryString !== void 0) {
    url += "?" + queryString;
  }
  if (fragment !== void 0) {
    url += "#" + fragment;
  }
  return url;
};
var writeSegments = (history, root, useHash, segments, direction, state, queryString, fragment) => {
  const url = generateUrl([...parsePath(root).segments, ...segments], useHash, queryString, fragment);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, "", url);
  } else {
    history.replaceState(state, "", url);
  }
};
var chainToSegments = (chain) => {
  const segments = [];
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        segments.push(param);
      } else if (segment !== "") {
        segments.push(segment);
      }
    }
  }
  return segments;
};
var removePrefix = (prefix, segments) => {
  if (prefix.length > segments.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === "") {
    return segments;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== segments[i]) {
      return null;
    }
  }
  if (segments.length === prefix.length) {
    return [""];
  }
  return segments.slice(prefix.length);
};
var readSegments = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const segments = parsePath(pathname).segments;
  return removePrefix(prefix, segments);
};
var parsePath = (path) => {
  let segments = [""];
  let queryString;
  let fragment;
  if (path != null) {
    const fragStart = path.indexOf("#");
    if (fragStart > -1) {
      fragment = path.substring(fragStart + 1);
      path = path.substring(0, fragStart);
    }
    const qsStart = path.indexOf("?");
    if (qsStart > -1) {
      queryString = path.substring(qsStart + 1);
      path = path.substring(0, qsStart);
    }
    segments = path.split("/").map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length === 0) {
      segments = [""];
    }
  }
  return { segments, queryString, fragment };
};
var printRoutes = (routes) => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const segments = [];
    chain.forEach((r) => segments.push(...r.segments));
    const ids = chain.map((r) => r.id);
    console.debug(`%c ${generatePath(segments)}`, "font-weight: bold; padding-left: 20px", "=>	", `(${ids.join(", ")})`);
  }
  console.groupEnd();
};
var printRedirects = (redirects) => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug("FROM: ", `$c ${generatePath(redirect.from)}`, "font-weight: bold", " TO: ", `$c ${generatePath(redirect.to.segments)}`, "font-weight: bold");
    }
  }
  console.groupEnd();
};
var writeNavState = async (root, chain, direction, index, changed = false, animation) => {
  try {
    const outlet = searchNavNode(root);
    if (index >= chain.length || !outlet) {
      return changed;
    }
    await new Promise((resolve) => componentOnReady(outlet, resolve));
    const route = chain[index];
    const result = await outlet.setRouteId(route.id, route.params, direction, animation);
    if (result.changed) {
      direction = ROUTER_INTENT_NONE;
      changed = true;
    }
    changed = await writeNavState(result.element, chain, direction, index + 1, changed, animation);
    if (result.markVisible) {
      await result.markVisible();
    }
    return changed;
  } catch (e) {
    printIonError("[ion-router] - Exception in writeNavState:", e);
    return false;
  }
};
var readNavState = async (root) => {
  const ids = [];
  let outlet;
  let node = root;
  while (outlet = searchNavNode(node)) {
    const id = await outlet.getRouteId();
    if (id) {
      node = id.element;
      id.element = void 0;
      ids.push(id);
    } else {
      break;
    }
  }
  return { ids, outlet };
};
var FRAGMENT_POLL_FRAMES = 30;
var FRAGMENT_SCROLL_DURATION = 300;
var nextFrame = () => new Promise((resolve) => raf(() => resolve()));
var isInActivePage = (el) => {
  const page = el.closest(".ion-page");
  if (page === null) {
    return document.querySelector(".ion-page") === null;
  }
  return page.closest(".ion-page-hidden, .tab-hidden") === null;
};
var findFragmentTarget = async (fragment, shouldContinue) => {
  const canEscape = typeof CSS !== "undefined" && typeof CSS.escape === "function";
  const escaped = canEscape ? CSS.escape(fragment) : null;
  for (let i = 0; i < FRAGMENT_POLL_FRAMES; i++) {
    if (!shouldContinue())
      return null;
    let candidates = [];
    if (escaped !== null) {
      try {
        candidates = [...document.querySelectorAll(`#${escaped}, a[name="${escaped}"]`)];
      } catch {
        candidates = [...document.querySelectorAll(`#${escaped}`)];
      }
    } else {
      const byId = document.getElementById(fragment);
      if (byId !== null)
        candidates = [byId];
    }
    for (let j = candidates.length - 1; j >= 0; j--) {
      if (isInActivePage(candidates[j])) {
        return candidates[j];
      }
    }
    await nextFrame();
  }
  return null;
};
var scrollToFragment = async (fragment, shouldContinue = () => true) => {
  if (fragment == null || fragment === "") {
    return false;
  }
  let decoded;
  try {
    decoded = decodeURIComponent(fragment);
  } catch {
    decoded = fragment;
  }
  const target = await findFragmentTarget(decoded, shouldContinue);
  if (!target || !shouldContinue()) {
    return false;
  }
  try {
    const contentHost = findClosestIonContent(target);
    if (contentHost && isIonContent(contentHost)) {
      const content = contentHost;
      const scrollEl = await getScrollElement(content);
      await nextFrame();
      if (!shouldContinue())
        return false;
      const targetRect = target.getBoundingClientRect();
      const scrollRect = scrollEl.getBoundingClientRect();
      const top = targetRect.top - scrollRect.top + scrollEl.scrollTop;
      await content.scrollToPoint(scrollEl.scrollLeft, top, FRAGMENT_SCROLL_DURATION);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
    return true;
  } catch (e) {
    printIonError("[ion-router] - Exception in scrollToFragment:", e);
    return false;
  }
};
var NAV_NODE_TIMEOUT = 500;
var waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const done = () => {
      window.removeEventListener("ionNavWillLoad", done);
      clearTimeout(timeout);
      resolve();
    };
    const timeout = setTimeout(done, NAV_NODE_TIMEOUT);
    window.addEventListener("ionNavWillLoad", done, { once: true });
  });
};
var OUTLET_SELECTOR = ":not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";
var searchNavNode = (root) => {
  if (!root) {
    return void 0;
  }
  if (root.matches(OUTLET_SELECTOR)) {
    return root;
  }
  const outlet = root.querySelector(OUTLET_SELECTOR);
  return outlet ?? void 0;
};
var matchesRedirect = (segments, redirect) => {
  const { from, to } = redirect;
  if (to === void 0) {
    return false;
  }
  if (from.length > segments.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === "*") {
      return true;
    }
    if (expected !== segments[i]) {
      return false;
    }
  }
  return from.length === segments.length;
};
var findRouteRedirect = (segments, redirects) => {
  return redirects.find((redirect) => matchesRedirect(segments, redirect));
};
var matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let score = 0;
  for (let i = 0; i < len; i++) {
    const routeId = ids[i];
    const routeChain = chain[i];
    if (routeId.id.toLowerCase() !== routeChain.id) {
      break;
    }
    if (routeId.params) {
      const routeIdParams = Object.keys(routeId.params);
      if (routeIdParams.length === routeChain.segments.length) {
        const pathWithParams = routeIdParams.map((key) => `:${key}`);
        for (let j = 0; j < pathWithParams.length; j++) {
          if (pathWithParams[j].toLowerCase() !== routeChain.segments[j]) {
            break;
          }
          score++;
        }
      }
    }
    score++;
  }
  return score;
};
var matchesSegments = (segments, chain) => {
  const inputSegments = new RouterSegments(segments);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const chainSegments = chain[i].segments;
    if (chainSegments[0] === "") {
      matchesDefault = true;
    } else {
      for (const segment of chainSegments) {
        const data = inputSegments.next();
        if (segment[0] === ":") {
          if (data === "") {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        } else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = matchesDefault ? matchesDefault === (inputSegments.next() === "") : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
var mergeParams = (a, b) => {
  return a || b ? __spreadValues(__spreadValues({}, a), b) : void 0;
};
var findChainForIDs = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  for (const chain of chains) {
    const score = matchesIDs(ids, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, ids[i]?.params)
    }));
  }
  return null;
};
var findChainForSegments = (segments, chains) => {
  let match = null;
  let bestScore = 0;
  for (const chain of chains) {
    const matchedChain = matchesSegments(segments, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > bestScore) {
        bestScore = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
var computePriority = (chain) => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        score += Math.pow(1, level);
      } else if (segment !== "") {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
var RouterSegments = class {
  segments;
  constructor(segments) {
    this.segments = segments.slice();
  }
  next() {
    if (this.segments.length > 0) {
      return this.segments.shift();
    }
    return "";
  }
};
var readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
var readRedirects = (root) => {
  return Array.from(root.children).filter((el) => el.tagName === "ION-ROUTE-REDIRECT").map((el) => {
    const to = readProp(el, "to");
    return {
      from: parsePath(readProp(el, "from")).segments,
      to: to == null ? void 0 : parsePath(to)
    };
  });
};
var readRoutes = (root) => {
  return flattenRouterTree(readRouteNodes(root));
};
var readRouteNodes = (node) => {
  return Array.from(node.children).filter((el) => el.tagName === "ION-ROUTE" && Boolean(el.component)).map((el) => {
    const component = readProp(el, "component");
    return {
      segments: parsePath(readProp(el, "url")).segments,
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(el)
    };
  });
};
var flattenRouterTree = (nodes) => {
  const chains = [];
  for (const node of nodes) {
    flattenNode([], chains, node);
  }
  return chains;
};
var flattenNode = (chain, chains, node) => {
  chain = [
    ...chain,
    {
      id: node.id,
      segments: node.segments,
      params: node.params,
      beforeLeave: node.beforeLeave,
      beforeEnter: node.beforeEnter
    }
  ];
  if (node.children.length === 0) {
    chains.push(chain);
    return;
  }
  for (const child of node.children) {
    flattenNode(chain, chains, child);
  }
};
var Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteWillChange = createEvent(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = createEvent(this, "ionRouteDidChange", 7);
  }
  previousPath = null;
  busy = false;
  state = 0;
  lastState = 0;
  waitPromise;
  fragmentScrollToken = 0;
  get el() {
    return getElement(this);
  }
  /**
   * The root path to use when matching URLs. By default, this is set to "/", but you can specify
   * an alternate prefix for all URL paths.
   */
  root = "/";
  /**
   * The router can work in two "modes":
   * - With hash: `/index.html#/path/to/page`
   * - Without hash: `/path/to/page`
   *
   * Using one or another might depend in the requirements of your app and/or where it's deployed.
   *
   * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
   * requires additional server-side configuration in order to properly work.
   *
   * On the other side hash-navigation is much easier to deploy, it even works over the file protocol.
   *
   * By default, this property is `true`, change to `false` to allow hash-less URLs.
   */
  useHash = true;
  /**
   * Event emitted when the route is about to change
   */
  ionRouteWillChange;
  /**
   * Emitted when the route had changed
   */
  ionRouteDidChange;
  async componentWillLoad() {
    await waitUntilNavNode();
    const canProceed = await this.runGuards(this.getSegments());
    if (canProceed !== true) {
      if (typeof canProceed === "object") {
        const { redirect } = canProceed;
        const path = parsePath(redirect);
        this.setSegments(path.segments, ROUTER_INTENT_NONE, path.queryString, path.fragment);
        const result2 = await this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
        if (result2) {
          this.maybeScrollToFragment();
        }
      }
      return;
    }
    const result = await this.onRoutesChanged();
    if (result) {
      this.maybeScrollToFragment();
    }
  }
  componentDidLoad() {
    window.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
  }
  async onPopState() {
    const direction = this.historyDirection();
    let segments = this.getSegments();
    const canProceed = await this.runGuards(segments);
    if (canProceed !== true) {
      if (typeof canProceed === "object") {
        segments = parsePath(canProceed.redirect).segments;
      } else {
        return false;
      }
    }
    const result = await this.writeNavStateRoot(segments, direction);
    if (result) {
      this.maybeScrollToFragment();
    }
    return result;
  }
  onBackButton(ev) {
    ev.detail.register(0, (processNextHandler) => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  async canTransition() {
    const canProceed = await this.runGuards();
    if (canProceed !== true) {
      if (typeof canProceed === "object") {
        return canProceed.redirect;
      } else {
        return false;
      }
    }
    return true;
  }
  /**
   * Navigate to the specified path.
   *
   * @param path The path to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   * @param animation A custom animation to use for the transition.
   */
  async push(path, direction = "forward", animation) {
    if (path.startsWith(".")) {
      const currentPath = this.previousPath ?? "/";
      const url = new URL(path, `https://host/${currentPath}`);
      path = url.pathname + url.search + url.hash;
    }
    let parsedPath = parsePath(path);
    const canProceed = await this.runGuards(parsedPath.segments);
    if (canProceed !== true) {
      if (typeof canProceed === "object") {
        parsedPath = parsePath(canProceed.redirect);
      } else {
        return false;
      }
    }
    this.setSegments(parsedPath.segments, direction, parsedPath.queryString, parsedPath.fragment);
    const result = await this.writeNavStateRoot(parsedPath.segments, direction, animation);
    if (result) {
      this.maybeScrollToFragment();
    }
    return result;
  }
  /** Go back to previous page in the window.history. */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  async printDebug() {
    printRoutes(readRoutes(this.el));
    printRedirects(readRedirects(this.el));
  }
  /** @internal */
  async navChanged(direction) {
    if (this.busy) {
      printIonWarning("[ion-router] - Router is busy, navChanged was cancelled.");
      return false;
    }
    const { ids, outlet } = await readNavState(window.document.body);
    const routes = readRoutes(this.el);
    const chain = findChainForIDs(ids, routes);
    if (!chain) {
      printIonWarning("[ion-router] - No matching URL for", ids.map((i) => i.id));
      return false;
    }
    const segments = chainToSegments(chain);
    if (!segments) {
      printIonWarning("[ion-router] - Router could not match path because some required param is missing.");
      return false;
    }
    const newPath = generatePath(segments);
    const fragment = newPath === this.previousPath ? this.getFragment() : void 0;
    this.setSegments(segments, direction, void 0, fragment);
    await this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, segments, null, ids.length);
    return true;
  }
  /** This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes. */
  onRedirectChanged() {
    const segments = this.getSegments();
    if (segments && findRouteRedirect(segments, readRedirects(this.el))) {
      this.writeNavStateRoot(segments, ROUTER_INTENT_NONE);
    }
  }
  /** This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes. */
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getSegments(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, win.document.location?.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || state >= lastState && lastState > 0) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  async writeNavStateRoot(segments, direction, animation) {
    if (!segments) {
      printIonError("[ion-router] - URL is not part of the routing set.");
      return false;
    }
    const redirects = readRedirects(this.el);
    const redirect = findRouteRedirect(segments, redirects);
    let redirectFrom = null;
    if (redirect) {
      const { segments: toSegments, queryString, fragment } = redirect.to;
      this.setSegments(toSegments, direction, queryString, fragment);
      redirectFrom = redirect.from;
      segments = toSegments;
    }
    const routes = readRoutes(this.el);
    const chain = findChainForSegments(segments, routes);
    if (!chain) {
      printIonError("[ion-router] - The path does not match any route.");
      return false;
    }
    return this.safeWriteNavState(document.body, chain, direction, segments, redirectFrom, 0, animation);
  }
  async safeWriteNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.writeNavState(node, chain, direction, segments, redirectFrom, index, animation);
    } catch (e) {
      printIonError("[ion-router] - Exception in safeWriteNavState:", e);
    }
    unlock();
    return changed;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise((r) => resolve = r);
    if (p !== void 0) {
      await p;
    }
    return resolve;
  }
  /**
   * Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
   *
   * When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
   * Otherwise the beforeEnterHook hook of the target route is executed.
   */
  async runGuards(to = this.getSegments(), from) {
    if (from === void 0) {
      from = parsePath(this.previousPath).segments;
    }
    if (!to || !from) {
      return true;
    }
    const routes = readRoutes(this.el);
    const fromChain = findChainForSegments(from, routes);
    const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
    const canLeave = beforeLeaveHook ? await beforeLeaveHook() : true;
    if (canLeave === false || typeof canLeave === "object") {
      return canLeave;
    }
    const toChain = findChainForSegments(to, routes);
    const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
    return beforeEnterHook ? beforeEnterHook() : true;
  }
  async writeNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    if (this.busy) {
      printIonWarning("[ion-router] - Router is busy, transition was cancelled.");
      return false;
    }
    this.busy = true;
    const routeEvent = this.routeChangeEvent(segments, redirectFrom);
    if (routeEvent) {
      this.ionRouteWillChange.emit(routeEvent);
    }
    const changed = await writeNavState(node, chain, direction, index, false, animation);
    this.busy = false;
    if (routeEvent) {
      this.ionRouteDidChange.emit(routeEvent);
    }
    return changed;
  }
  setSegments(segments, direction, queryString, fragment) {
    this.state++;
    this.fragmentScrollToken++;
    writeSegments(window.history, this.root, this.useHash, segments, direction, this.state, queryString, fragment);
  }
  getSegments() {
    return readSegments(window.location, this.root, this.useHash);
  }
  getFragment() {
    const raw = this.useHash ? parsePath(window.location.hash.slice(1)).fragment : window.location.hash.slice(1);
    return raw ? raw : void 0;
  }
  /**
   * Fires a best-effort scroll to the current URL fragment. The scroll bails
   * if a newer `setSegments` advances `fragmentScrollToken` mid-flight.
   */
  maybeScrollToFragment() {
    const fragment = this.getFragment();
    if (!fragment)
      return;
    const token = this.fragmentScrollToken;
    scrollToFragment(fragment, () => token === this.fragmentScrollToken).catch(() => {
    });
  }
  routeChangeEvent(toSegments, redirectFromSegments) {
    const from = this.previousPath;
    const to = generatePath(toSegments);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromSegments ? generatePath(redirectFromSegments) : null;
    return {
      from,
      redirectedFrom,
      to
    };
  }
};
var routerLinkCss = () => `:host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}`;
var RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color;
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  href;
  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  rel;
  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  routerDirection = "forward";
  /**
   * When using a router, it specifies the transition animation when navigating to
   * another page using `href`.
   */
  routerAnimation;
  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  target;
  onClick = (ev) => {
    openURL(this.href, ev, this.routerDirection, this.routerAnimation);
  };
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(Host, { key: "8aaf732d8f5cc4ced351e2b3164605c10bd90cad", onClick: this.onClick, class: createColorClasses(this.color, {
      [mode]: true,
      "ion-activatable": true
    }) }, h("a", __spreadValues({ key: "8f291ffbbce5b08dd10720d855eb020880bf1be1" }, attrs), h("slot", { key: "24dc388a49204011e1c1f0a1131c9a1b0a4ae4da" })));
  }
};
RouterLink.style = routerLinkCss();
export {
  Route as ion_route,
  RouteRedirect as ion_route_redirect,
  Router as ion_router,
  RouterLink as ion_router_link
};
//# sourceMappingURL=ion-route_4.entry-ZFMXORE3.js.map
