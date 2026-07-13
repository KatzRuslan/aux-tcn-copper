import {
  ExclamationCircle,
  Select,
  SharedModule,
  Tooltip,
  TooltipExtension
} from "./chunk-NMJCA7HR.js";
import {
  preset_default
} from "./chunk-TDHTSLXK.js";
import {
  $r,
  Store6 as Store,
  require_lodash
} from "./chunk-I7ZYIMSW.js";
import {
  ButtonDirective,
  History,
  IconField,
  InputIcon,
  InputText,
  PIcon,
  Popover
} from "./chunk-DMMSTZEH.js";
import {
  NgControlStatus,
  NgModel,
  ns
} from "./chunk-O5OVYJU6.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-CNIBSPWC.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-RW4ES5HA.js";

// src/app/features/style-guide/components/form-component/color-field/color-field.ts
var _c0 = ["popover"];
var _c1 = ["colorInput"];
function ColorField_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ColorField_For_5_Template_button_click_0_listener($event) {
      const inputicon_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openPopover(inputicon_r4.popover, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inputicon_r4 = ctx.$implicit;
    \u0275\u0275styleProp("background", inputicon_r4.color);
    \u0275\u0275property("pTooltip", inputicon_r4.tooltip);
  }
}
function ColorField_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r4.popoverParams().type, " \u2014 ", ctx_r4.popoverParams().name);
  }
}
function ColorField_Conditional_8_Case_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ColorField_Conditional_8_Case_2_For_2_Template_button_click_0_listener() {
      const palette_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.popoverParams().onclick(palette_r7.name));
    });
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const palette_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("id", palette_r7.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", palette_r7.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", palette_r7.name == ctx_r4.popoverParams().name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(palette_r7.name);
  }
}
function ColorField_Conditional_8_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ColorField_Conditional_8_Case_2_For_2_Template, 4, 6, "button", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.palettes());
  }
}
function ColorField_Conditional_8_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ColorField_Conditional_8_Case_3_For_2_Template_button_click_0_listener() {
      const palette_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.popoverParams().onclick(palette_r9.name));
    });
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const palette_r9 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("id", palette_r9.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", palette_r9.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", palette_r9.name == ctx_r4.popoverParams().name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(palette_r9.name);
  }
}
function ColorField_Conditional_8_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ColorField_Conditional_8_Case_3_For_2_Template, 4, 6, "button", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.palettes());
  }
}
function ColorField_Conditional_8_Case_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ColorField_Conditional_8_Case_4_For_2_Template_button_click_0_listener() {
      const palette_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.popoverParams().onclick(palette_r11.label));
    });
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const palette_r11 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("id", palette_r11.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", palette_r11.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", palette_r11.label == ctx_r4.popoverParams().name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(palette_r11.label);
  }
}
function ColorField_Conditional_8_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ColorField_Conditional_8_Case_4_For_2_Template, 4, 6, "button", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.palettes());
  }
}
function ColorField_Conditional_8_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ColorField_Conditional_8_Case_5_For_2_Template_button_click_0_listener() {
      const palette_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.popoverParams().onclick(palette_r13.label));
    });
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const palette_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("id", palette_r13.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", palette_r13.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", palette_r13.label == ctx_r4.popoverParams().name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(palette_r13.label);
  }
}
function ColorField_Conditional_8_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ColorField_Conditional_8_Case_5_For_2_Template, 4, 6, "button", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.palettes());
  }
}
function ColorField_Conditional_8_Case_6_For_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ColorField_Conditional_8_Case_6_For_1_For_6_Template_button_click_0_listener() {
      const node_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.popoverParams().onclick(node_r15.label));
    });
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r15 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("id", node_r15.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", node_r15[ctx_r4.popoverParams().type]);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", node_r15.label == ctx_r4.popoverParams().name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r15.label);
  }
}
function ColorField_Conditional_8_Case_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275repeaterCreate(5, ColorField_Conditional_8_Case_6_For_1_For_6_Template, 4, 6, "button", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const palette_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(palette_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(palette_r16.colors);
  }
}
function ColorField_Conditional_8_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ColorField_Conditional_8_Case_6_For_1_Template, 7, 1, "div", 15, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r4.palettes());
  }
}
function ColorField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ColorField_Conditional_8_Conditional_0_Template, 2, 2, "div", 8);
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275conditionalCreate(2, ColorField_Conditional_8_Case_2_Template, 3, 0, "div", 10)(3, ColorField_Conditional_8_Case_3_Template, 3, 0, "div", 10)(4, ColorField_Conditional_8_Case_4_Template, 3, 0, "div", 10)(5, ColorField_Conditional_8_Case_5_Template, 3, 0, "div", 10)(6, ColorField_Conditional_8_Case_6_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r4.popoverHeaderAvailable() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r4.popoverParams().view) === "single-color-name" ? 2 : tmp_4_0 === "double-color-name" ? 3 : tmp_4_0 === "primary-color" ? 4 : tmp_4_0 === "surface-color" ? 5 : 6);
  }
}
var ColorField = class _ColorField {
  store = inject(Store);
  value = input.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputId = input.required(
    ...ngDevMode ? [{ debugName: "inputId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  options = input.required(
    ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isReadonly = input(
    false,
    ...ngDevMode ? [{ debugName: "isReadonly" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeHandler = output();
  format = computed(
    () => this.options().at(0),
    ...ngDevMode ? [{ debugName: "format" }] : (
      /* istanbul ignore next */
      []
    )
  );
  popoverParams = signal(
    { type: "", name: "", view: "", onclick: (color) => {
    } },
    ...ngDevMode ? [{ debugName: "popoverParams" }] : (
      /* istanbul ignore next */
      []
    )
  );
  popoverHeaderAvailable = computed(
    () => ["grouped", "primary-color"].includes(this.popoverParams().view),
    ...ngDevMode ? [{ debugName: "popoverHeaderAvailable" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputicons = computed(
    () => {
      const inputicons = [];
      switch (this.format()) {
        case "single-color-name":
          {
            const color = ns(`{${this.value()}.500}`).variable;
            const { label } = this.store.palettes().find(({ name }) => name === this.value());
            inputicons.push({
              color,
              tooltip: `${label}`,
              popover: { type: "single-color", name: this.value(), view: "single-color-name" }
            });
          }
          break;
        case "double-color-name":
          {
            const [light, dark] = this.value().split(",").map((node) => node.trim());
            if (light && dark) {
              inputicons.push({
                color: ns(`${light}.500`).variable,
                tooltip: "Light Color",
                popover: { type: "light", name: light, view: "double-color-name" }
              }, {
                color: ns(`${dark}.500`).variable,
                tooltip: "Dark Color",
                popover: { type: "dark", name: dark, view: "double-color-name" }
              });
            }
          }
          break;
        case "none":
          inputicons.push({
            color: this.value().startsWith("#") ? this.value() : ns(this.value()).variable
          });
          break;
        case "primary-color":
          {
            const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value().trim()) ?? ["", void 0, void 0];
            if (light && dark) {
              inputicons.push({
                color: ns(light).variable,
                tooltip: "Light Color",
                popover: { type: "light", name: light.replace(/[{}]/g, ""), view: "primary-color" }
              }, {
                color: ns(dark).variable,
                tooltip: "Dark Color",
                popover: { type: "dark", name: dark.replace(/[{}]/g, ""), view: "primary-color" }
              });
            }
          }
          break;
        case "surface-color":
          inputicons.push({
            color: ns(this.value()).variable,
            tooltip: "Surface Color",
            popover: { type: "single-color", name: this.value().replace(/[{}]/g, ""), view: "surface-color" }
          });
          break;
        default:
          {
            const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value().trim()) ?? ["", void 0, void 0];
            if (light && dark) {
              inputicons.push({
                color: ns(light).variable,
                tooltip: "Light Color",
                popover: { type: "light", name: light.replace(/[{}]/g, ""), view: "grouped" }
              }, {
                color: ns(dark).variable,
                tooltip: "Dark Color",
                popover: { type: "dark", name: dark.replace(/[{}]/g, ""), view: "grouped" }
              });
            }
          }
          break;
      }
      return inputicons;
    },
    ...ngDevMode ? [{ debugName: "inputicons" }] : (
      /* istanbul ignore next */
      []
    )
  );
  palettes = computed(
    () => {
      const palettes = [];
      switch (this.format()) {
        case "single-color-name":
        case "double-color-name":
          palettes.push(...this.store.palettes().map(({ name, colors }) => ({
            name,
            color: colors.at(4).color
          })));
          break;
        case "primary-color":
          palettes.push(...this.store.colorSteps().map((step) => {
            const color = `primary.${step}`;
            return {
              label: color,
              color: ns(color).value
            };
          }));
          break;
        case "surface-color":
          palettes.push(...[0, ...this.store.colorSteps(), 1e3].map((step) => {
            const color = `surface.${step}`;
            return {
              label: color,
              color: ns(color).value
            };
          }));
          break;
        default:
          palettes.push(...this.store.palettes().map(({ label, name, colors }) => ({
            label,
            colors: colors.map(({ step, color }) => ({
              label: `${name}.${step}`,
              light: color,
              dark: color
            }))
          })), {
            label: "Surface",
            colors: [0, ...this.store.colorSteps()].map((step) => {
              const color = `surface.${step}`;
              const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(ns(color).value) ?? ["", void 0, void 0];
              return {
                label: color,
                light,
                dark
              };
            })
          });
          break;
      }
      return palettes;
    },
    ...ngDevMode ? [{ debugName: "palettes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  popover = viewChild(
    "popover",
    ...ngDevMode ? [{ debugName: "popover" }] : (
      /* istanbul ignore next */
      []
    )
  );
  colorInput = viewChild(
    "colorInput",
    ...ngDevMode ? [{ debugName: "colorInput" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Прижимает поповер правым краем к правому краю инпута → раскрытие вниз и влево. */
  alignPopover() {
    const box = this.popover()?.container;
    const input2 = this.colorInput()?.nativeElement;
    if (!box || !input2) {
      return;
    }
    const rect = input2.getBoundingClientRect();
    box.style.left = `${rect.right - box.offsetWidth + window.scrollX}px`;
  }
  onPopoverHide() {
    this.popoverParams.update((current) => __spreadProps(__spreadValues({}, current), { type: "" }));
  }
  /** Скроллит список поповера к кнопке с id = выбранный токен (по центру видимой области). */
  scrollToSelected() {
    const box = this.popover()?.container;
    const target = box?.querySelector(`[id="${this.popoverParams().name}"]`);
    target?.scrollIntoView({ block: "center" });
  }
  openPopover(popover, event) {
    if (this.popoverParams().type === popover.type) {
      this.popover()?.hide();
      return;
    }
    this.popoverParams.set(__spreadProps(__spreadValues({}, popover), {
      onclick: (color) => {
        this.popover()?.hide();
        let value = "";
        switch (this.format()) {
          case "single-color-name":
            value = color;
            break;
          case "surface-color":
            value = `{${color}}`;
            break;
          case "double-color-name":
            {
              const [light, dark] = this.value().split(",").map((node) => node.trim());
              value = popover.type === "light" ? `${color}, ${dark}` : `${light}, ${color}`;
            }
            break;
          default:
            {
              const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value()) ?? ["", void 0, void 0];
              value = popover.type === "light" ? `light-dark({${color}}, ${dark})` : `light-dark(${light}, {${color}})`;
            }
            break;
        }
        this.changeHandler.emit(value);
      }
    }));
    this.popover()?.show(event);
    requestAnimationFrame(() => this.alignPopover());
    setTimeout(() => this.scrollToSelected(), 240);
  }
  static \u0275fac = function ColorField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorField, selectors: [["color-field"]], viewQuery: function ColorField_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.popover, _c0, 5)(ctx.colorInput, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostAttrs: [1, "flex", "align-items-center", "w-full"], inputs: { value: [1, "value"], inputId: [1, "inputId"], options: [1, "options"], isReadonly: [1, "isReadonly"] }, outputs: { changeHandler: "changeHandler" }, decls: 9, vars: 8, consts: [["colorInput", ""], ["popover", ""], [1, "flex", "align-items-center", "w-full"], ["pInputText", "", "readonly", "", "tooltipExtension", "", 1, "white-space-nowrap", "overflow-hidden", "text-overflow-ellipsis", "w-full", 3, "input", "value", "pTooltip"], [1, "flex", "gap-2"], ["type", "button", "pButton", "", "iconOnly", "", "rounded", "", "variant", "outlined", 1, "p-0", "w-1rem", "h-1rem", "border-1", "border-800", "border-circle", 3, "pTooltip", "background"], ["appendTo", "body", "styleClass", "color-field-popover", 3, "onShow", "onHide"], ["type", "button", "pButton", "", "iconOnly", "", "rounded", "", "variant", "outlined", 1, "p-0", "w-1rem", "h-1rem", "border-1", "border-800", "border-circle", 3, "click", "pTooltip"], [1, "p-3"], [1, "flex", "flex-column", "gap-3", "h-16rem", "w-20rem", "overflow-y-auto"], [1, "flex", "flex-column", "gap-2", "px-1"], ["pButton", "", "variant", "text", 1, "flex", "gap-2", "w-full", "px-2", "justify-content-start", "align-items-center"], ["pButton", "", "variant", "text", 1, "flex", "gap-2", "w-full", "px-2", "justify-content-start", "align-items-center", 3, "click"], [1, "inline-flex", "border-1", "border-800", "border-circle", "w-1rem", "h-1rem"], [1, "text-900"], [1, ""], [1, "p-2"]], template: function ColorField_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-iconfield", 2)(1, "input", 3, 0);
      \u0275\u0275listener("input", function ColorField_Template_input_input_1_listener() {
        \u0275\u0275restoreView(_r1);
        const colorInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.changeHandler.emit(colorInput_r2.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-inputicon", 4);
      \u0275\u0275repeaterCreate(4, ColorField_For_5_Template, 1, 3, "button", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-popover", 6, 1);
      \u0275\u0275listener("onShow", function ColorField_Template_p_popover_onShow_6_listener() {
        return ctx.alignPopover();
      })("onHide", function ColorField_Template_p_popover_onHide_6_listener() {
        return ctx.onPopoverHide();
      });
      \u0275\u0275conditionalCreate(8, ColorField_Conditional_8_Template, 7, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("double-inputicon", ctx.inputicons().length == 2);
      \u0275\u0275property("value", ctx.value())("pTooltip", ctx.value());
      \u0275\u0275attribute("id", ctx.inputId());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("pointer-events-none", ctx.isReadonly());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.inputicons());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.popoverParams().type ? 8 : -1);
    }
  }, dependencies: [SharedModule, IconField, InputIcon, InputText, ButtonDirective, Popover, Tooltip, TooltipExtension], styles: ["\n  .color-field-popover {\n  --p-popover-border-color: transparent;\n}\n.p-iconfield[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:not(:last-child).double-inputicon {\n  padding-inline-end: calc((var(--p-form-field-padding-x) * 2 + var(--p-icon-size)) * 1.6);\n}\n/*# sourceMappingURL=color-field.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorField, [{
    type: Component,
    args: [{ selector: "color-field", imports: [SharedModule], host: { class: "flex align-items-center w-full" }, template: `<p-iconfield class="flex align-items-center w-full">
    <input #colorInput pInputText
        [class.double-inputicon]="inputicons().length==2" class="white-space-nowrap overflow-hidden text-overflow-ellipsis w-full"
        [value]="value()" [attr.id]="inputId()" readonly
        [pTooltip]="value()" tooltipExtension
        (input)="changeHandler.emit(colorInput.value)"
    />
    <p-inputicon class="flex gap-2" [class.pointer-events-none]="isReadonly()">
        @for (inputicon of inputicons(); track $index) {
            <button type="button" pButton iconOnly rounded variant="outlined"
                class="p-0 w-1rem h-1rem border-1 border-800 border-circle"
                [pTooltip]="inputicon.tooltip" [style.background]="inputicon.color"
                (click)="openPopover(inputicon.popover, $event)">
            </button>
        }
    </p-inputicon>
</p-iconfield>
<p-popover #popover appendTo="body" (onShow)="alignPopover()" (onHide)="onPopoverHide()" styleClass="color-field-popover">
    <!-- \u0412\u0410\u0416\u041D\u041E: ng-content \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u044F\u0432\u043B\u044F\u044E\u0449\u0438\u043C \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u043C \u0434\u0430\u0436\u0435 \u0443 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u043F\u043E\u043F\u0430\u043F\u0430;
         \u0431\u0435\u0437 @if ~180 \u043A\u043D\u043E\u043F\u043E\u043A \xD7 \u043A\u0430\u0436\u0434\u043E\u0435 color-\u043F\u043E\u043B\u0435 \u0436\u0438\u0432\u0443\u0442 \u0432 CD \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E (\u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430 \u043F\u0440\u043E\u0445\u043E\u0434) -->
    @if (popoverParams().type) {
        @if (popoverHeaderAvailable()) {
            <div class="p-3">{{ popoverParams().type }} \u2014 {{ popoverParams().name }}</div>
        }
        <div class="flex flex-column gap-3 h-16rem w-20rem  overflow-y-auto">
            @switch (popoverParams().view) {
                @case ('single-color-name') {
                    <div class="flex flex-column gap-2 px-1">
                        @for (palette of this.palettes(); track $index) {
                            <button pButton variant="text" class="flex gap-2 w-full px-2 justify-content-start align-items-center"
                                [attr.id]="palette.name"
                                (click)="popoverParams().onclick(palette.name)">
                                <span class="inline-flex border-1 border-800 border-circle w-1rem h-1rem" [style.background]="palette.color"></span>
                                <span class="text-900" [class.font-bold]="palette.name==popoverParams().name">{{palette.name}}</span>
                            </button>
                        }
                    </div>
                }
                @case ('double-color-name') {
                    <div class="flex flex-column gap-2 px-1">
                        @for (palette of this.palettes(); track $index) {
                            <button pButton variant="text" class="flex gap-2 w-full px-2 justify-content-start align-items-center"
                                [attr.id]="palette.name"
                                (click)="popoverParams().onclick(palette.name)">
                                <span class="inline-flex border-1 border-800 border-circle w-1rem h-1rem" [style.background]="palette.color"></span>
                                <span class="text-900" [class.font-bold]="palette.name==popoverParams().name">{{palette.name}}</span>
                            </button>
                        }
                    </div>
                }
                @case ('primary-color') {
                    <div class="flex flex-column gap-2 px-1">
                        @for (palette of this.palettes(); track $index) {
                            <button pButton variant="text" class="flex gap-2 w-full px-2 justify-content-start align-items-center"
                                [attr.id]="palette.label"
                                (click)="popoverParams().onclick(palette.label)">
                                <span class="inline-flex border-1 border-800 border-circle w-1rem h-1rem" [style.background]="palette.color"></span>
                                <span class="text-900" [class.font-bold]="palette.label==popoverParams().name">{{palette.label}}</span>
                            </button>
                        }
                    </div>
                }
                @case ('surface-color') {
                    <div class="flex flex-column gap-2 px-1">
                        @for (palette of this.palettes(); track $index) {
                            <button pButton variant="text" class="flex gap-2 w-full px-2 justify-content-start align-items-center"
                                [attr.id]="palette.label"
                                (click)="popoverParams().onclick(palette.label)">
                                <span class="inline-flex border-1 border-800 border-circle w-1rem h-1rem" [style.background]="palette.color"></span>
                                <span class="text-900" [class.font-bold]="palette.label==popoverParams().name">{{palette.label}}</span>
                            </button>
                        }
                    </div>
                }
                @default {
                    @for (palette of this.palettes(); track $index) {
                        <div class="">
                            <div class="p-2"><span class="">{{ palette.label }}</span></div>
                            <div class="flex flex-column gap-2 px-1">
                                @for (node of palette.colors; track $index) {
                                    <button pButton variant="text" class="flex gap-2 w-full px-2 justify-content-start align-items-center"
                                        [attr.id]="node.label"
                                        (click)="popoverParams().onclick(node.label)">
                                        <span class="inline-flex border-1 border-800 border-circle w-1rem h-1rem" [style.background]="node[popoverParams().type]"></span>
                                        <span class="text-900" [class.font-bold]="node.label==popoverParams().name">{{node.label}}</span>
                                    </button>
                                }
                            </div>
                        </div>
                    }
                }
            }
        </div>
    }
</p-popover>
`, styles: ["/* src/app/features/style-guide/components/form-component/color-field/color-field.scss */\n::ng-deep .color-field-popover {\n  --p-popover-border-color: transparent;\n}\n.p-iconfield .p-inputtext:not(:last-child).double-inputicon {\n  padding-inline-end: calc((var(--p-form-field-padding-x) * 2 + var(--p-icon-size)) * 1.6);\n}\n/*# sourceMappingURL=color-field.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], inputId: [{ type: Input, args: [{ isSignal: true, alias: "inputId", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true }] }], isReadonly: [{ type: Input, args: [{ isSignal: true, alias: "isReadonly", required: false }] }], changeHandler: [{ type: Output, args: ["changeHandler"] }], popover: [{ type: ViewChild, args: ["popover", { isSignal: true }] }], colorInput: [{ type: ViewChild, args: ["colorInput", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorField, { className: "ColorField", filePath: "src/app/features/style-guide/components/form-component/color-field/color-field.ts", lineNumber: 14 });
})();

// src/app/features/style-guide/components/form-component/rem-field/rem-field.ts
function RemField_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputicon", 4);
    \u0275\u0275listener("click", function RemField_Conditional_3_Template_p_inputicon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.convert());
    })("keypress", function RemField_Conditional_3_Template_p_inputicon_keypress_0_listener() {
      return null;
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 5);
    \u0275\u0275elementEnd();
  }
}
var REM_BASE = 16;
var RemField = class _RemField {
  value = input.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputId = input.required(
    ...ngDevMode ? [{ debugName: "inputId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isReadonly = input(
    false,
    ...ngDevMode ? [{ debugName: "isReadonly" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeHandler = output();
  remInvalid = computed(
    () => {
      const tokens = (this.value() ?? "").trim().split(/\s+/).filter(Boolean);
      return !tokens.length || tokens.some((token) => !/^(0|-?(\d+(\.\d+)?|\.\d+)rem)$/.test(token));
    },
    ...ngDevMode ? [{ debugName: "remInvalid" }] : (
      /* istanbul ignore next */
      []
    )
  );
  convert() {
    const tokens = (this.value() ?? "").trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) {
      return;
    }
    const converted = tokens.map((token) => {
      if (token.endsWith("rem")) {
        return token;
      }
      const match = /^(-?(?:\d+(?:\.\d+)?|\.\d+))(px)?$/.exec(token);
      if (!match) {
        return token;
      }
      const rem = Number.parseFloat(match[1]) / REM_BASE;
      return rem === 0 ? "0" : `${rem}rem`;
    });
    this.changeHandler.emit(converted.join(" "));
  }
  static \u0275fac = function RemField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RemField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemField, selectors: [["rem-field"]], hostAttrs: [1, "flex", "align-items-center", "w-full"], inputs: { value: [1, "value"], inputId: [1, "inputId"], isReadonly: [1, "isReadonly"] }, outputs: { changeHandler: "changeHandler" }, decls: 4, vars: 4, consts: [["remInput", ""], [1, "w-full"], ["pInputText", "", 1, "w-full", 3, "input", "value", "readonly"], [1, "cursor-pointer"], [1, "cursor-pointer", 3, "click", "keypress"], ["data-p-icon", "exclamation-circle", "color", "var(--p-red-500)"]], template: function RemField_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-iconfield", 1)(1, "input", 2, 0);
      \u0275\u0275listener("input", function RemField_Template_input_input_1_listener() {
        \u0275\u0275restoreView(_r1);
        const remInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.changeHandler.emit(remInput_r2.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, RemField_Conditional_3_Template, 2, 0, "p-inputicon", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.value())("readonly", ctx.isReadonly());
      \u0275\u0275attribute("id", ctx.inputId());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.remInvalid() ? 3 : -1);
    }
  }, dependencies: [SharedModule, IconField, InputIcon, InputText, ExclamationCircle], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemField, [{
    type: Component,
    args: [{ selector: "rem-field", imports: [SharedModule], host: { class: "flex align-items-center w-full" }, template: '<p-iconfield class="w-full">\n    <input #remInput pInputText class="w-full"\n        [value]="value()" [attr.id]="inputId()" [readonly]="isReadonly()"\n        (input)="changeHandler.emit(remInput.value)"\n    />\n    @if (remInvalid()) {\n        <p-inputicon (click)="convert()" (keypress)="null" class="cursor-pointer">\n            <svg data-p-icon="exclamation-circle" color="var(--p-red-500)" ></svg>\n        </p-inputicon>\n    }\n</p-iconfield>\n' }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], inputId: [{ type: Input, args: [{ isSignal: true, alias: "inputId", required: true }] }], isReadonly: [{ type: Input, args: [{ isSignal: true, alias: "isReadonly", required: false }] }], changeHandler: [{ type: Output, args: ["changeHandler"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemField, { className: "RemField", filePath: "src/app/features/style-guide/components/form-component/rem-field/rem-field.ts", lineNumber: 13 });
})();

// src/app/features/style-guide/components/form-component/select-field/select-field.ts
var SelectField = class _SelectField {
  value = input.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputId = input.required(
    ...ngDevMode ? [{ debugName: "inputId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  options = input.required(
    ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isReadonly = input(
    false,
    ...ngDevMode ? [{ debugName: "isReadonly" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeHandler = output();
  test(d) {
    console.log(d);
  }
  static \u0275fac = function SelectField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectField, selectors: [["select-field"]], hostAttrs: [1, "flex", "align-items-center", "w-full"], inputs: { value: [1, "value"], inputId: [1, "inputId"], options: [1, "options"], isReadonly: [1, "isReadonly"] }, outputs: { changeHandler: "changeHandler" }, decls: 1, vars: 2, consts: [["appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "options"]], template: function SelectField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-select", 0);
      \u0275\u0275listener("ngModelChange", function SelectField_Template_p_select_ngModelChange_0_listener($event) {
        return ctx.changeHandler.emit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
    }
    if (rf & 2) {
      \u0275\u0275property("ngModel", ctx.value())("options", ctx.options());
      \u0275\u0275control();
    }
  }, dependencies: [SharedModule, NgControlStatus, NgModel, Select], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectField, [{
    type: Component,
    args: [{ selector: "select-field", imports: [SharedModule], host: { class: "flex align-items-center w-full" }, template: '<p-select class="w-full" appendTo="body"\n    [ngModel]="value()" [options]="options()"\n    (ngModelChange)="changeHandler.emit($event)"\n/>\n' }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], inputId: [{ type: Input, args: [{ isSignal: true, alias: "inputId", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: true }] }], isReadonly: [{ type: Input, args: [{ isSignal: true, alias: "isReadonly", required: false }] }], changeHandler: [{ type: Output, args: ["changeHandler"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectField, { className: "SelectField", filePath: "src/app/features/style-guide/components/form-component/select-field/select-field.ts", lineNumber: 11 });
})();

// src/app/features/style-guide/components/form-component/form-component.ts
var import_lodash = __toESM(require_lodash());
var _c02 = () => ["light-dark"];
var _c12 = () => [];
function FormComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "rem-field", 14);
    \u0275\u0275listener("changeHandler", function FormComponent_Case_5_Template_rem_field_changeHandler_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeValueHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.value())("inputId", ctx_r2.field().path)("isReadonly", ctx_r2.field().isReadonly);
  }
}
function FormComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "color-field", 15);
    \u0275\u0275listener("changeHandler", function FormComponent_Case_6_Template_color_field_changeHandler_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeValueHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.value())("options", ctx_r2.field().options ?? \u0275\u0275pureFunction0(4, _c02))("inputId", ctx_r2.field().path)("isReadonly", ctx_r2.field().isReadonly);
  }
}
function FormComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select-field", 15);
    \u0275\u0275listener("changeHandler", function FormComponent_Case_7_Template_select_field_changeHandler_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeValueHandler($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.value())("options", ctx_r2.field().options ?? \u0275\u0275pureFunction0(4, _c12))("inputId", ctx_r2.field().path)("isReadonly", ctx_r2.field().isReadonly);
  }
}
function FormComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 16, 1);
    \u0275\u0275listener("input", function FormComponent_Case_8_Template_input_input_0_listener() {
      \u0275\u0275restoreView(_r6);
      const defaultInput_r7 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeValueHandler(defaultInput_r7.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r2.field().path)("value", ctx_r2.value())("readonly", ctx_r2.field().isReadonly);
  }
}
function FormComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function FormComponent_For_15_Template_button_click_0_listener() {
      const node_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      const popover_r8 = \u0275\u0275reference(12);
      popover_r8.hide();
      return \u0275\u0275resetView(ctx_r2.changeValueHandler(node_r10.value));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 18);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pIcon", node_r10.icon)("size", ".8rem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r10.title);
  }
}
var FormComponent = class _FormComponent {
  value = model.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  field = input.required(
    ...ngDevMode ? [{ debugName: "field" }] : (
      /* istanbul ignore next */
      []
    )
  );
  source = input.required(
    ...ngDevMode ? [{ debugName: "source" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auraValue = computed(
    () => (0, import_lodash.get)($r, `${this.source()}.${this.field().path}`),
    ...ngDevMode ? [{ debugName: "auraValue" }] : (
      /* istanbul ignore next */
      []
    )
  );
  presetValue = computed(
    () => (0, import_lodash.get)(preset_default, `${this.source()}.${this.field().path}`),
    ...ngDevMode ? [{ debugName: "presetValue" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reverts = computed(
    () => {
      const reverts = [
        { title: `Aura:   ${this.auraValue()}`, value: `${this.auraValue()}`, disabled: this.auraValue() === this.value(), icon: "undo" },
        { title: `Preset: ${this.presetValue()}`, value: `${this.presetValue()}`, disabled: this.presetValue() === this.value(), icon: "refresh" }
      ].filter(({ value, disabled }) => value !== "undefined" && !disabled);
      return reverts.length ? reverts : void 0;
    },
    ...ngDevMode ? [{ debugName: "reverts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeValueHandler(value) {
    this.value.set(value ?? "");
  }
  static \u0275fac = function FormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormComponent, selectors: [["form-component"]], hostAttrs: [1, "flex", "align-items-center", "gap-2"], inputs: { value: [1, "value"], field: [1, "field"], source: [1, "source"] }, outputs: { value: "valueChange" }, decls: 16, vars: 4, consts: [["popover", ""], ["defaultInput", ""], [1, "w-16rem", 3, "for"], [1, ""], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "w-20rem"], [3, "value", "inputId", "isReadonly"], [3, "value", "options", "inputId", "isReadonly"], ["pInputText", "", 1, "w-full", 3, "id", "value", "readonly"], ["pButton", "", "iconOnly", "", "rounded", "", "variant", "outlined", "aria-label", "History", "size", "small", 3, "click", "disabled"], ["data-p-icon", "history"], ["appendTo", "body"], [1, "flex", "flex-column", "gap-2"], ["type", "button", "pButton", "", "variant", "text", "size", "small", 1, "justify-content-start", "min-w-10rem", "px-1"], [3, "changeHandler", "value", "inputId", "isReadonly"], [3, "changeHandler", "value", "options", "inputId", "isReadonly"], ["pInputText", "", 1, "w-full", 3, "input", "id", "value", "readonly"], ["type", "button", "pButton", "", "variant", "text", "size", "small", 1, "justify-content-start", "min-w-10rem", "px-1", 3, "click"], [3, "pIcon", "size"]], template: function FormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "label", 2)(1, "span", 3);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
      \u0275\u0275conditionalCreate(5, FormComponent_Case_5_Template, 1, 3, "rem-field", 6)(6, FormComponent_Case_6_Template, 1, 5, "color-field", 7)(7, FormComponent_Case_7_Template, 1, 5, "select-field", 7)(8, FormComponent_Case_8_Template, 2, 3, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 9);
      \u0275\u0275listener("click", function FormComponent_Template_button_click_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        const popover_r8 = \u0275\u0275reference(12);
        return \u0275\u0275resetView(popover_r8.toggle($event));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(10, "svg", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "p-popover", 11, 0)(13, "div", 12);
      \u0275\u0275repeaterCreate(14, FormComponent_For_15_Template, 4, 3, "button", 13, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275property("for", ctx.field().path);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.field().label);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.field().type) === "rem" ? 5 : tmp_3_0 === "color" ? 6 : tmp_3_0 === "select" ? 7 : 8);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.reverts());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.reverts());
    }
  }, dependencies: [SharedModule, InputText, ButtonDirective, Popover, PIcon, History, ColorField, RemField, SelectField], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormComponent, [{
    type: Component,
    args: [{ selector: "form-component", imports: [
      SharedModule,
      ColorField,
      RemField,
      SelectField
    ], host: { class: "flex align-items-center gap-2" }, template: `<label [for]="field().path" class="w-16rem"><span class="">{{ field().label }}</span></label>
<div class="flex align-items-center gap-2">
    <div class="flex w-20rem">
        @switch (field().type) {
            @case ('rem') {
                <rem-field [value]="value()" [inputId]="field().path" [isReadonly]="field().isReadonly" (changeHandler)="changeValueHandler($event)" />
            }
            @case ('color') {
                <color-field [value]="value()" [options]="field().options ?? ['light-dark']" [inputId]="field().path" [isReadonly]="field().isReadonly" (changeHandler)="changeValueHandler($event)" />
            }
            @case ('select') {
                <select-field [value]="value()" [options]="field().options ?? []" [inputId]="field().path" [isReadonly]="field().isReadonly" (changeHandler)="changeValueHandler($event)" />
            }
            @default {
                <input #defaultInput pInputText
                    [id]="field().path" class="w-full"
                    [value]="value()" [readonly]="field().isReadonly"
                    (input)="changeValueHandler(defaultInput.value)" />
            }
        }
    </div>
    <button pButton iconOnly
        rounded variant="outlined" aria-label="History" size="small"
        [disabled]="!reverts()"
        (click)="popover.toggle($event)">
        <svg data-p-icon="history"></svg>
    </button>
    <p-popover #popover appendTo="body">
        <div class="flex flex-column gap-2">
            @for (node of reverts(); track $index) {
                <button type="button" pButton variant="text" size="small" class="justify-content-start min-w-10rem px-1" (click)="popover.hide(); changeValueHandler(node.value)">
                    <svg [pIcon]="node.icon" [size]="'.8rem'"></svg>
                    <span class="">{{ node.title }}</span>
                </button>
            }
        </div>
    </p-popover>
</div>
` }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }, { type: Output, args: ["valueChange"] }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }], source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormComponent, { className: "FormComponent", filePath: "src/app/features/style-guide/components/form-component/form-component.ts", lineNumber: 30 });
})();

export {
  FormComponent
};
//# sourceMappingURL=chunk-FRA7WV4J.js.map
