import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  inheritAttributes
} from "./chunk-KZSWY5U2.js";
import "./chunk-L65IGNW5.js";
import {
  getIonMode
} from "./chunk-NP2DGJVA.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-5XV4S2PZ.js";
import "./chunk-EEKZWN3V.js";

// node_modules/@ionic/core/dist/esm/ion-img.entry.js
var imgCss = () => `:host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}`;
var Img = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
    this.ionError = createEvent(this, "ionError", 7);
  }
  io;
  inheritedAttributes = {};
  loadTimeout;
  get el() {
    return getElement(this);
  }
  loadSrc;
  loadError;
  /**
   * This attribute defines the alternative text describing the image.
   * Users will see this text displayed if the image URL is wrong,
   * the image is not in one of the supported formats, or if the image is not yet downloaded.
   */
  alt;
  /**
   * The image URL. This attribute is mandatory for the `<img>` element.
   */
  src;
  srcChanged() {
    this.addIO();
  }
  /** Emitted when the img src has been set */
  ionImgWillLoad;
  /** Emitted when the image has finished loading */
  ionImgDidLoad;
  /** Emitted when the img fails to load */
  ionError;
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["draggable"]);
  }
  componentDidLoad() {
    printIonWarning('[ion-img] - This component is deprecated and will be removed in Ionic v10. Use a native <img> with the loading="lazy" attribute instead.', this.el);
    this.addIO();
  }
  disconnectedCallback() {
    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout);
    }
  }
  addIO() {
    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout);
      this.loadTimeout = void 0;
    }
    if (this.src === void 0) {
      return;
    }
    if (typeof window !== "undefined" && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver((data) => {
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    } else {
      this.loadTimeout = setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  onLoad = () => {
    this.ionImgDidLoad.emit();
  };
  onError = () => {
    this.ionError.emit();
  };
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  render() {
    const { loadSrc, alt, onLoad, loadError, inheritedAttributes } = this;
    const { draggable } = inheritedAttributes;
    return h(Host, { key: "57bfb44d9850381fe7b6fcf0c9019b03f7ef86ec", class: getIonMode(this) }, h("img", { key: "888ec06a266fa2751fc0147ede6a567f4e2b29a6", decoding: "async", src: loadSrc, alt, onLoad, onError: loadError, part: "image", draggable: isDraggable(draggable) }));
  }
  static get watchers() {
    return {
      "src": [{
        "srcChanged": 0
      }]
    };
  }
};
var isDraggable = (draggable) => {
  switch (draggable) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return void 0;
  }
};
Img.style = imgCss();
export {
  Img as ion_img
};
//# sourceMappingURL=ion-img.entry-HEKFZUEX.js.map
