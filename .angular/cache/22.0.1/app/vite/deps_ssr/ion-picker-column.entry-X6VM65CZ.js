import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-YYXVMLML.js";
import "./chunk-SA6RW3T2.js";
import {
  raf
} from "./chunk-KZSWY5U2.js";
import "./chunk-L65IGNW5.js";
import {
  createColorClasses
} from "./chunk-PYWP5KEC.js";
import {
  getIonMode,
  isPlatform
} from "./chunk-NP2DGJVA.js";
import {
  doc
} from "./chunk-IYXP5PUU.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5XV4S2PZ.js";
import "./chunk-EEKZWN3V.js";

// node_modules/@ionic/core/dist/esm/ion-picker-column.entry.js
var pickerColumnCss = () => `:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.assistive-focusable{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1;pointer-events:none}.assistive-focusable:focus{outline:none}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:end;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:start;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.2)}:host(.ion-color:focus) .picker-opts{background:rgba(var(--ion-color-base-rgb), 0.2)}}`;
var PickerColumn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
  }
  scrollEl;
  destroyScrollListener;
  isScrolling = false;
  scrollEndCallback;
  isColumnVisible = false;
  parentEl;
  canExitInputMode = true;
  assistiveFocusable;
  updateValueTextOnScroll = false;
  ariaLabel = null;
  ariaLabelChanged(newValue) {
    this.ariaLabel = newValue;
  }
  isActive = false;
  get el() {
    return getElement(this);
  }
  /**
   * If `true`, the user cannot interact with the picker.
   */
  disabled = false;
  /**
   * The selected option in the picker.
   */
  value;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color;
  /**
   * If `true`, tapping the picker will
   * reveal a number input keyboard that lets
   * the user type in values for each picker
   * column. This is useful when working
   * with time pickers.
   *
   * @internal
   */
  numericInput = false;
  /**
   * Emitted when the value has changed.
   *
   * This event will not emit when programmatically setting the `value` property.
   */
  ionChange;
  valueChange() {
    if (this.isColumnVisible) {
      this.scrollActiveItemIntoView(true);
    }
  }
  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */
  componentWillLoad() {
    const parentEl = this.parentEl = this.el.closest("ion-picker");
    const visibleCallback = (entries) => {
      const ev = entries[entries.length - 1];
      if (ev.isIntersecting) {
        const { activeItem, el } = this;
        this.isColumnVisible = true;
        const oldActive = el.querySelector(`.${PICKER_ITEM_ACTIVE_CLASS}`);
        if (oldActive) {
          this.setPickerItemActiveState(oldActive, false);
        }
        this.scrollActiveItemIntoView();
        if (activeItem) {
          this.setPickerItemActiveState(activeItem, true);
        }
        this.initializeScrollListener();
      } else {
        this.isColumnVisible = false;
        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = void 0;
        }
      }
    };
    new IntersectionObserver(visibleCallback, { threshold: 1e-3, root: this.parentEl }).observe(this.el);
    if (parentEl !== null) {
      parentEl.addEventListener("ionInputModeChange", (ev) => this.inputModeChange(ev));
    }
  }
  componentDidRender() {
    const { el, activeItem, isColumnVisible, value } = this;
    if (isColumnVisible && !activeItem) {
      const firstOption = el.querySelector("ion-picker-column-option");
      if (firstOption !== null && firstOption.value !== value) {
        this.setValue(firstOption.value);
      }
    }
  }
  /** @internal  */
  async scrollActiveItemIntoView(smooth = false) {
    const activeEl = this.activeItem;
    if (activeEl) {
      this.centerPickerItemInView(activeEl, smooth, false);
    }
  }
  /**
   * Sets the value prop and fires the ionChange event.
   * This is used when we need to fire ionChange from
   * user-generated events that cannot be caught with normal
   * input/change event listeners.
   * @internal
   */
  async setValue(value) {
    if (this.disabled === true || this.value === value) {
      return;
    }
    this.value = value;
    this.ionChange.emit({ value });
  }
  /**
   * Sets focus on the scrollable container within the picker column.
   * Use this method instead of the global `pickerColumn.focus()`.
   */
  async setFocus() {
    if (this.assistiveFocusable) {
      this.assistiveFocusable.focus();
    }
  }
  connectedCallback() {
    this.ariaLabel = this.el.getAttribute("aria-label") ?? "Select a value";
  }
  centerPickerItemInView = (target, smooth = true, canExitInputMode = true) => {
    const { isColumnVisible, scrollEl } = this;
    if (isColumnVisible && scrollEl) {
      const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;
      if (scrollEl.scrollTop !== top) {
        this.canExitInputMode = canExitInputMode;
        this.updateValueTextOnScroll = false;
        scrollEl.scroll({
          top,
          left: 0,
          behavior: smooth ? "smooth" : void 0
        });
      }
    }
  };
  setPickerItemActiveState = (item, isActive) => {
    if (isActive) {
      item.classList.add(PICKER_ITEM_ACTIVE_CLASS);
    } else {
      item.classList.remove(PICKER_ITEM_ACTIVE_CLASS);
    }
  };
  /**
   * When ionInputModeChange is emitted, each column
   * needs to check if it is the one being made available
   * for text entry.
   */
  inputModeChange = (ev) => {
    if (!this.numericInput) {
      return;
    }
    const { useInputMode, inputModeColumn } = ev.detail;
    const isColumnActive = inputModeColumn === void 0 || inputModeColumn === this.el;
    if (!useInputMode || !isColumnActive) {
      this.setInputModeActive(false);
      return;
    }
    this.setInputModeActive(true);
  };
  /**
   * Setting isActive will cause a re-render.
   * As a result, we do not want to cause the
   * re-render mid scroll as this will cause
   * the picker column to jump back to
   * whatever value was selected at the
   * start of the scroll interaction.
   */
  setInputModeActive = (state) => {
    if (this.isScrolling) {
      this.scrollEndCallback = () => {
        this.isActive = state;
      };
      return;
    }
    this.isActive = state;
  };
  /**
   * When the column scrolls, the component
   * needs to determine which item is centered
   * in the view and will emit an ionChange with
   * the item object.
   */
  initializeScrollListener = () => {
    const enableHaptics = isPlatform("ios");
    const { el, scrollEl } = this;
    let timeout;
    let activeEl = this.activeItem;
    const scrollCallback = () => {
      raf(() => {
        if (!scrollEl)
          return;
        if (timeout) {
          clearTimeout(timeout);
          timeout = void 0;
        }
        if (!this.isScrolling) {
          enableHaptics && hapticSelectionStart();
          this.isScrolling = true;
        }
        const bbox = scrollEl.getBoundingClientRect();
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
        const rootNode = el.getRootNode();
        const hasParentShadow = rootNode instanceof ShadowRoot;
        const referenceNode = hasParentShadow ? rootNode : doc;
        if (referenceNode === void 0) {
          return;
        }
        const elementsAtPoint = referenceNode.elementsFromPoint(centerX, centerY);
        let newActiveElement = elementsAtPoint.find((el2) => el2.tagName === "ION-PICKER-COLUMN-OPTION");
        if (newActiveElement === void 0) {
          const fallbackActiveElement = referenceNode.elementFromPoint(centerX, centerY);
          if (fallbackActiveElement?.tagName === "ION-PICKER-COLUMN-OPTION") {
            newActiveElement = fallbackActiveElement;
          }
        }
        if (activeEl !== void 0) {
          this.setPickerItemActiveState(activeEl, false);
        }
        if (newActiveElement === void 0 || newActiveElement.disabled) {
          return;
        }
        if (newActiveElement !== activeEl) {
          enableHaptics && hapticSelectionChanged();
          if (this.canExitInputMode) {
            this.exitInputMode();
          }
        }
        activeEl = newActiveElement;
        this.setPickerItemActiveState(newActiveElement, true);
        if (this.updateValueTextOnScroll) {
          this.assistiveFocusable?.setAttribute("aria-valuetext", this.getOptionValueText(newActiveElement));
        }
        timeout = setTimeout(() => {
          this.isScrolling = false;
          this.updateValueTextOnScroll = true;
          enableHaptics && hapticSelectionEnd();
          const { scrollEndCallback } = this;
          if (scrollEndCallback) {
            scrollEndCallback();
            this.scrollEndCallback = void 0;
          }
          this.canExitInputMode = true;
          this.setValue(newActiveElement.value);
        }, 250);
      });
    };
    raf(() => {
      if (!scrollEl)
        return;
      scrollEl.addEventListener("scroll", scrollCallback);
      this.destroyScrollListener = () => {
        scrollEl.removeEventListener("scroll", scrollCallback);
      };
    });
  };
  /**
   * Tells the parent picker to
   * exit text entry mode. This is only called
   * when the selected item changes during scroll, so
   * we know that the user likely wants to scroll
   * instead of type.
   */
  exitInputMode = () => {
    const { parentEl } = this;
    if (parentEl == null)
      return;
    parentEl.exitInputMode();
    this.el.classList.remove("picker-column-active");
  };
  get activeItem() {
    const { value } = this;
    const options = Array.from(this.el.querySelectorAll("ion-picker-column-option"));
    return options.find((option) => {
      if (!this.disabled && option.disabled) {
        return false;
      }
      return option.value === value;
    });
  }
  /**
   * Find the next enabled option after the active option.
   * @param stride - How many options to "jump" over in order to select the next option.
   * This can be used to implement PageUp/PageDown behaviors where pressing these keys
   * scrolls the picker by more than 1 option. For example, a stride of 5 means select
   * the enabled option 5 options after the active one. Note that the actual option selected
   * may be past the stride if the option at the stride is disabled.
   */
  findNextOption = (stride = 1) => {
    const { activeItem } = this;
    if (!activeItem)
      return null;
    let prevNode = activeItem;
    let node = activeItem.nextElementSibling;
    while (node != null) {
      if (stride > 0) {
        stride--;
      }
      if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
        return node;
      }
      prevNode = node;
      node = node.nextElementSibling;
    }
    return prevNode;
  };
  /**
   * Find the next enabled option after the active option.
   * @param stride - How many options to "jump" over in order to select the next option.
   * This can be used to implement PageUp/PageDown behaviors where pressing these keys
   * scrolls the picker by more than 1 option. For example, a stride of 5 means select
   * the enabled option 5 options before the active one. Note that the actual option selected
   *  may be past the stride if the option at the stride is disabled.
   */
  findPreviousOption = (stride = 1) => {
    const { activeItem } = this;
    if (!activeItem)
      return null;
    let nextNode = activeItem;
    let node = activeItem.previousElementSibling;
    while (node != null) {
      if (stride > 0) {
        stride--;
      }
      if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
        return node;
      }
      nextNode = node;
      node = node.previousElementSibling;
    }
    return nextNode;
  };
  onKeyDown = (ev) => {
    const mobile = isPlatform("mobile");
    let newOption = null;
    switch (ev.key) {
      case "ArrowDown":
        newOption = mobile ? this.findPreviousOption() : this.findNextOption();
        break;
      case "ArrowUp":
        newOption = mobile ? this.findNextOption() : this.findPreviousOption();
        break;
      case "PageUp":
        newOption = mobile ? this.findNextOption(5) : this.findPreviousOption(5);
        break;
      case "PageDown":
        newOption = mobile ? this.findPreviousOption(5) : this.findNextOption(5);
        break;
      case "Home":
        newOption = this.el.querySelector("ion-picker-column-option:first-of-type");
        break;
      case "End":
        newOption = this.el.querySelector("ion-picker-column-option:last-of-type");
        break;
    }
    if (newOption !== null) {
      this.setValue(newOption.value);
      ev.preventDefault();
    }
  };
  /**
   * Utility to generate the correct text for aria-valuetext.
   */
  getOptionValueText = (el) => {
    return el ? el.getAttribute("aria-label") ?? el.innerText : "";
  };
  render() {
    const { color, disabled, isActive, numericInput } = this;
    const mode = getIonMode(this);
    return h(Host, { key: "78b46ad10d88ea1bb43ca8c36748767912f03224", class: createColorClasses(color, {
      [mode]: true,
      ["picker-column-active"]: isActive,
      ["picker-column-numeric-input"]: numericInput,
      ["picker-column-disabled"]: disabled
    }) }, h("slot", { key: "761e501df77f7de896ffb3ebb99ebf88c5c3bf70", name: "prefix" }), h("div", { key: "9f4caaeef8ab704522a85f30876d371712f47c5c", class: "picker-opts", ref: (el) => {
      this.scrollEl = el;
    }, role: "slider", tabindex: this.disabled ? void 0 : 0, "aria-label": this.ariaLabel, "aria-valuemin": 0, "aria-valuemax": 0, "aria-valuenow": 0, "aria-valuetext": this.getOptionValueText(this.activeItem), "aria-orientation": "vertical", onKeyDown: (ev) => this.onKeyDown(ev) }, h("div", { key: "9d3533436aba6c61c93f65f84a077fba832194a0", class: "picker-item-empty", "aria-hidden": "true" }, " "), h("div", { key: "3f18d3a47361f06f55321b65fdf5742a61722b26", class: "picker-item-empty", "aria-hidden": "true" }, " "), h("div", { key: "eac0d20ab8c533ef829875e323e93e1ee2067d6d", class: "picker-item-empty", "aria-hidden": "true" }, " "), h("slot", { key: "92e25989ef41cf6f910c73238e1a0a5ac03f1c1f" }), h("div", { key: "33a84644ebdc84108b44a8e3a129b54e824939c8", class: "picker-item-empty", "aria-hidden": "true" }, " "), h("div", { key: "128ad61a3a68c7ff2d2e44a6e968424fcc608a15", class: "picker-item-empty", "aria-hidden": "true" }, " "), h("div", { key: "6e4d59a4f75befcbbf47279a263f28a69b12dbbd", class: "picker-item-empty", "aria-hidden": "true" }, " ")), h("slot", { key: "3c6621b64438792a3024c90e3d9916a0a3614506", name: "suffix" }));
  }
  static get watchers() {
    return {
      "aria-label": [{
        "ariaLabelChanged": 0
      }],
      "value": [{
        "valueChange": 0
      }]
    };
  }
};
var PICKER_ITEM_ACTIVE_CLASS = "option-active";
PickerColumn.style = pickerColumnCss();
export {
  PickerColumn as ion_picker_column
};
//# sourceMappingURL=ion-picker-column.entry-X6VM65CZ.js.map
