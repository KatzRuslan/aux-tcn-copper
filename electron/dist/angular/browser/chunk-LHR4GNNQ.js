import {
  FormComponent
} from "./chunk-4GLHGLXN.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionPanel,
  ButtonGroup,
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrev,
  Check,
  Checkbox,
  Chip,
  ContextMenu,
  DatePicker,
  Drawer,
  Fieldset,
  InputColor,
  InputNumber,
  Label,
  Menu,
  ProgressSpinner,
  RadioButton,
  Select,
  SelectButton,
  SharedModule,
  Star,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  Trash,
  Users
} from "./chunk-QPDOPGPJ.js";
import {
  Store6 as Store,
  emitOnUserEdit,
  fieldValidator,
  require_lodash
} from "./chunk-I7ZYIMSW.js";
import {
  FormField,
  form,
  readonly,
  required
} from "./chunk-SWDPWGAA.js";
import {
  Badge,
  Bell,
  ButtonDirective,
  ConfirmDialog,
  Dialog,
  IconField,
  InputIcon,
  InputText,
  OverlayBadge,
  PIcon,
  Popover,
  Times,
  Toast,
  ToggleSwitch
} from "./chunk-PNUGKQVR.js";
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-O5OVYJU6.js";
import {
  Component,
  Directive,
  ElementRef,
  Injector,
  Input,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  output,
  resource,
  runInInjectionContext,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-CNIBSPWC.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-RW4ES5HA.js";

// src/app/features/style-guide/components/form-preset/form-preset.ts
var import_lodash = __toESM(require_lodash());
function FormPreset_For_1_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "form-component", 4);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(field_r1.styleClass);
    \u0275\u0275property("formField", ctx_r1.formGroup()[field_r1.path])("field", field_r1);
    \u0275\u0275control();
  }
}
function FormPreset_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormPreset_For_1_For_3_Conditional_0_Template, 1, 4, "form-component", 3);
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275conditional(field_r1.isVisible ? 0 : -1);
  }
}
function FormPreset_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 1)(1, "div", 2);
    \u0275\u0275repeaterCreate(2, FormPreset_For_1_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fieldset_r3 = ctx.$implicit;
    \u0275\u0275classMap(fieldset_r3.styleClass);
    \u0275\u0275property("legend", fieldset_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("flex-column", fieldset_r3.styleClass == "w-6")("column-gap-8", fieldset_r3.styleClass == "w-full")("flex-wrap", fieldset_r3.styleClass == "w-full");
    \u0275\u0275advance();
    \u0275\u0275repeater(fieldset_r3.fields);
  }
}
var FormPreset = class _FormPreset {
  _injector = inject(Injector);
  vmodel = input.required(
    ...ngDevMode ? [{ debugName: "vmodel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scheme = input.required(
    ...ngDevMode ? [{ debugName: "scheme" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // | IFieldMeta[]
  applyPreset = output();
  formModel = linkedSignal(
    () => this.vmodel(),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formGroup = computed(
    () => {
      const fields = this.scheme().flatMap(({ fields: fields2 }) => fields2);
      return untracked(() => runInInjectionContext(this._injector, () => form(this.formModel, (schema) => {
        fields.forEach(({ path, label, type, isReadonly }) => {
          required(schema[path], { message: `${label} is required` });
          fieldValidator(schema[path], label, type);
          if (isReadonly) {
            readonly(schema[path]);
          }
        });
      })));
    },
    ...ngDevMode ? [{ debugName: "formGroup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  invalid = computed(
    () => this.formGroup()().invalid(),
    ...ngDevMode ? [{ debugName: "invalid" }] : (
      /* istanbul ignore next */
      []
    )
  );
  unchanged = computed(
    () => (0, import_lodash.isEqual)(this.formGroup()().value(), this.vmodel()),
    ...ngDevMode ? [{ debugName: "unchanged" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errors = computed(
    () => this.formGroup()().errorSummary().map(({ message }) => message).filter((message) => !!message),
    ...ngDevMode ? [{ debugName: "errors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  getValue() {
    return this.formGroup()().value();
  }
  ngOnInit() {
    emitOnUserEdit({
      value: () => this.formGroup()().value(),
      generation: () => [this.formGroup(), this.vmodel()],
      emit: () => this.applyPreset.emit(),
      injector: this._injector
    });
  }
  static \u0275fac = function FormPreset_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormPreset)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPreset, selectors: [["form-preset"]], hostAttrs: [1, "flex", "align-items-start", "align-content-start", "flex-wrap", "gap-3", "w-full", "h-full", "overflow-auto"], inputs: { vmodel: [1, "vmodel"], scheme: [1, "scheme"] }, outputs: { applyPreset: "applyPreset" }, decls: 2, vars: 0, consts: [["styleClass", "", 1, "gap-2", 3, "legend", "class"], ["styleClass", "", 1, "gap-2", 3, "legend"], [1, "flex", "gap-3", "w-full"], ["source", "semantic", 3, "formField", "field", "class"], ["source", "semantic", 3, "formField", "field"]], template: function FormPreset_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, FormPreset_For_1_Template, 4, 9, "p-fieldset", 0, \u0275\u0275repeaterTrackByIndex);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.scheme());
    }
  }, dependencies: [SharedModule, Fieldset, FormField, FormComponent], styles: ["\n.gap-3[_nghost-%COMP%]    > .w-6[_ngcontent-%COMP%] {\n  max-width: calc((100% - 1rem) / 2 - 0.2rem);\n}\n.gap-3[_nghost-%COMP%]    > .w-full[_ngcontent-%COMP%] {\n  max-width: calc(100% - 0.2rem);\n}\n.break-after[_ngcontent-%COMP%] {\n  margin-right: 100%;\n}\n/*# sourceMappingURL=form-preset.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPreset, [{
    type: Component,
    args: [{ selector: "form-preset", imports: [SharedModule, FormField, FormComponent], host: { class: "flex align-items-start align-content-start flex-wrap gap-3 w-full h-full overflow-auto" }, template: `@for (fieldset of scheme(); track $index) {
    <p-fieldset [legend]="fieldset.label" class="gap-2" [class]="fieldset.styleClass" styleClass="">
        <div class="flex gap-3 w-full"
            [class.flex-column]="fieldset.styleClass=='w-6'"
            [class.column-gap-8]="fieldset.styleClass=='w-full'"
            [class.flex-wrap]="fieldset.styleClass=='w-full'">
            @for (field of fieldset.fields; track $index) {
                @if (field.isVisible) {
                    <form-component [formField]="formGroup()[field.path]" [field]="field" source="semantic" [class]="field.styleClass" />
                }
            }
        </div>
    </p-fieldset>
}
`, styles: ["/* src/app/features/style-guide/components/form-preset/form-preset.scss */\n:host(.gap-3) > .w-6 {\n  max-width: calc((100% - 1rem) / 2 - 0.2rem);\n}\n:host(.gap-3) > .w-full {\n  max-width: calc(100% - 0.2rem);\n}\n.break-after {\n  margin-right: 100%;\n}\n/*# sourceMappingURL=form-preset.css.map */\n"] }]
  }], null, { vmodel: [{ type: Input, args: [{ isSignal: true, alias: "vmodel", required: true }] }], scheme: [{ type: Input, args: [{ isSignal: true, alias: "scheme", required: true }] }], applyPreset: [{ type: Output, args: ["applyPreset"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPreset, { className: "FormPreset", filePath: "src/app/features/style-guide/components/form-preset/form-preset.ts", lineNumber: 16 });
})();

// src/app/shared/directives/d-model.ts
var DModel = class _DModel extends NgControl {
  dModel = input(
    ...ngDevMode ? [void 0, { debugName: "dModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dModelChange = output();
  _control = new FormControl();
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  get control() {
    return this._control;
  }
  viewToModelUpdate(value) {
    this.dModelChange.emit(value);
  }
  constructor() {
    super();
    this.valueAccessor = inject(NG_VALUE_ACCESSOR, { self: true, optional: true })?.[0] ?? null;
    if (this.valueAccessor) {
      this.valueAccessor.registerOnChange((value) => {
        this._control.setValue(value, { emitEvent: false });
        this.dModelChange.emit(value);
      });
      effect(() => {
        const value = this.dModel();
        this._control.setValue(value, { emitEvent: false });
        this.valueAccessor.writeValue(value);
      });
      return;
    }
    const element = this._elementRef.nativeElement;
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      this._renderer.listen(element, "input", () => this.dModelChange.emit(element.value));
      effect(() => {
        const value = `${this.dModel() ?? ""}`;
        if (element.value !== value) {
          element.value = value;
        }
      });
    }
  }
  static \u0275fac = function DModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DModel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DModel, selectors: [["", "dModel", ""]], inputs: { dModel: [1, "dModel"] }, outputs: { dModelChange: "dModelChange" }, features: [\u0275\u0275ProvidersFeature([{ provide: NgControl, useExisting: forwardRef(() => _DModel) }]), \u0275\u0275InheritDefinitionFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DModel, [{
    type: Directive,
    args: [{
      selector: "[dModel]",
      providers: [{ provide: NgControl, useExisting: forwardRef(() => DModel) }]
    }]
  }], () => [], { dModel: [{ type: Input, args: [{ isSignal: true, alias: "dModel", required: false }] }], dModelChange: [{ type: Output, args: ["dModelChange"] }] });
})();

// src/app/shared/runtime-template-imports.ts
var RUNTIME_TEMPLATE_IMPORTS = [
  DModel,
  PIcon,
  Bell,
  Check,
  Star,
  Times,
  Trash,
  Users,
  // form
  IconField,
  InputIcon,
  InputText,
  InputNumber,
  InputColor,
  Textarea,
  Select,
  DatePicker,
  Checkbox,
  RadioButton,
  SelectButton,
  ToggleSwitch,
  // button
  ButtonDirective,
  ButtonGroup,
  // panel
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  // media
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
  CarouselIndicator,
  CarouselPrev,
  CarouselNext,
  // menu
  Menu,
  ContextMenu,
  // overlay
  Dialog,
  ConfirmDialog,
  Popover,
  Tooltip,
  // misc
  ProgressSpinner,
  Toast,
  Tag,
  Chip,
  Badge,
  OverlayBadge,
  Label
];

// src/app/features/style-guide/components/preview-drawer/preview-drawer.ts
var _c0 = ["drawerhost"];
function PreviewDrawer_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p-checkbox", 7);
    \u0275\u0275listener("ngModelChange", function PreviewDrawer_Conditional_5_ng_template_0_Template_p_checkbox_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.store.toggleAvailableComponent(ctx_r1.active()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "label", 8)(4, "span", 9);
    \u0275\u0275text(5, "available");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 6)(7, "p-checkbox", 10);
    \u0275\u0275listener("ngModelChange", function PreviewDrawer_Conditional_5_ng_template_0_Template_p_checkbox_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.store.toggleBookmark(ctx_r1.active()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "label", 8)(9, "span", 9);
    \u0275\u0275text(10, "bookmarked");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isAvailable())("binary", true);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("pointer-events-none", !ctx_r1.isAvailable());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isBookmarked())("binary", true)("disabled", !ctx_r1.isAvailable());
    \u0275\u0275control();
  }
}
function PreviewDrawer_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreviewDrawer_Conditional_5_ng_template_0_Template, 11, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
}
var COMPILED_TEMPLATES = /* @__PURE__ */ new Map();
var PreviewDrawer = class _PreviewDrawer {
  store = inject(Store);
  drawerhost = viewChild("drawerhost", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "drawerhost" } : (
    /* istanbul ignore next */
    {}
  )), { read: ViewContainerRef }));
  header = signal(
    "",
    ...ngDevMode ? [{ debugName: "header" }] : (
      /* istanbul ignore next */
      []
    )
  );
  active = computed(
    () => this.store.vmDrawer().active,
    ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isAvailable = computed(
    () => this.store.vmDrawer().isAvailable,
    ...ngDevMode ? [{ debugName: "isAvailable" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isBookmarked = computed(
    () => this.store.vmDrawer().isBookmarked,
    ...ngDevMode ? [{ debugName: "isBookmarked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  defaultStyleClass = "flex flex-column gap-3 px-2";
  // /** Карта демо грузится отдельным чанком, чтобы не тянуть все примеры в стартовый бандл. */
  // private readonly _demos = resource({
  //     loader: () => import('./demos/drawer-demos').then(({ DRAWER_DEMOS }) => DRAWER_DEMOS),
  // });
  // readonly drawer = computed(() => {
  //     const demos = this._demos.value();
  //     return demos ? demos[this.active()] ?? demos['empty'] : null;
  // });
  // D:\projects\aux-tcn-copper\public\drawers/inputnumber.drawer
  drawer = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "drawer" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.active() || void 0,
    // undefined → загрузка пропускается (разделы без drawer'а)
    loader: async ({ params }) => {
      await import("./chunk-G3TW63KT.js");
      return globalThis.runElectronCommand("read-data", { target: `drawers/${params}.drawer` });
    }
  }));
  constructor() {
    effect(() => {
      console.log(this.active());
      const vcr = this.drawerhost();
      vcr?.clear();
      if (!vcr || this.drawer.isLoading()) {
        return;
      }
      if (!this.active()) {
        return;
      }
      const { template, header, styleClass, data } = this.drawer.value() ?? {
        header: "Not Found",
        data: { name: this.active() },
        styleClass: "flex flex-column w-full h-full justify-content-center align-items-center",
        template: `
                <div class="flex flex-column justify-content-center align-items-center gap-3">
                    <svg class="m-auto" width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
                    <div class="flex flex-column align-items-center pb-8">
                        <div class="">
                            <span class="uppercase">{{ vmodel['name'] }}</span>
                            <span class=""> drawer</span>
                        </div>
                        <div class="" (click)="methods['test2']()">
                            <span class="">not found :(</span>
                        </div>
                    </div>
                </div>
                `
      };
      this.header.set(header);
      const cacheKey = `${styleClass ?? ""}|${template}`;
      let cmp = COMPILED_TEMPLATES.get(cacheKey);
      if (!cmp) {
        cmp = Component({ template, imports: RUNTIME_TEMPLATE_IMPORTS, host: { class: styleClass ?? "" } })(class {
          vmodel = {};
          methods = {};
        });
        COMPILED_TEMPLATES.set(cacheKey, cmp);
      }
      const ref = vcr.createComponent(cmp);
      ref.instance.vmodel = structuredClone(data ?? {});
      const methods = {
        test(d) {
          console.log(d);
          console.log(this.vmodel);
        },
        test2() {
          console.log("*1***********");
          console.log(this);
        }
      };
      Object.keys(methods).forEach((key) => methods[key] = methods[key].bind(ref.instance));
      ref.instance.methods = methods;
    });
  }
  static \u0275fac = function PreviewDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDrawer, selectors: [["preview-drawer"]], viewQuery: function PreviewDrawer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.drawerhost, _c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 6, vars: 4, consts: [["drawerhost", ""], ["footer", ""], ["styleClass", "min-w-20rem", 3, "onHide", "visible", "modal", "header"], ["dir", "rtl", 1, "flex", "w-full", "h-full", "overflow-auto"], ["dir", "ltr", 1, "flex", "flex-column", "w-full", "h-full", "overflow-auto"], [1, "flex", "items-center", "gap-2", "mt-3"], [1, "flex", "align-items-center", "gap-2", "w-6rem", "cursor-pointer"], ["inputId", "raised", 1, "", 3, "ngModelChange", "ngModel", "binary"], ["pLabel", "", "for", "raised"], [1, "capitalize", "cursor-pointer"], ["inputId", "raised", 1, "", 3, "ngModelChange", "ngModel", "binary", "disabled"]], template: function PreviewDrawer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-drawer", 2);
      \u0275\u0275listener("onHide", function PreviewDrawer_Template_p_drawer_onHide_0_listener() {
        return ctx.store.showDrawer() ? ctx.store.toggleDrawer() : null;
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
      \u0275\u0275element(3, "span", null, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, PreviewDrawer_Conditional_5_Template, 2, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const visible_r3 = ctx.store.showDrawer();
      \u0275\u0275property("visible", visible_r3)("modal", false)("header", ctx.header());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.active() !== "define-semantic" ? 5 : -1);
    }
  }, dependencies: [SharedModule, NgControlStatus, NgModel, Checkbox, Label, Drawer], styles: ["\n[_nghost-%COMP%] {\n  --p-drawer-content-padding: 0;\n}\n/*# sourceMappingURL=preview-drawer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDrawer, [{
    type: Component,
    args: [{ selector: "preview-drawer", imports: [SharedModule], template: `<!--
@let visible = store.showDrawer();
@if (drawer(); as drawer) {
    <p-drawer [visible]="visible" [modal]="false" [header]="drawer.header" styleClass="min-w-20rem" (onHide)="store.showDrawer()?store.toggleDrawer():null">
        <div class="flex w-full h-full overflow-auto" dir="rtl">
            <div class="w-full" [class]="drawer.styleClass ?? defaultStyleClass" dir="ltr">
                <ng-container *ngComponentOutlet="drawer.component" />
            </div>
        </div>
        @if (active() !== 'define-semantic') {
            <ng-template #footer>
                <div class="flex items-center gap-2 mt-3">
                    <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                        <p-checkbox [ngModel]="isAvailable()" (ngModelChange)="store.toggleAvailableComponent(active())" class="" inputId="raised" [binary]="true" />
                        <label pLabel for="raised"><span class="capitalize cursor-pointer">available</span></label>
                    </div>
                    <div class="flex align-items-center gap-2 w-6rem cursor-pointer" [class.pointer-events-none]="!isAvailable()">
                        <p-checkbox [ngModel]="isBookmarked()" (ngModelChange)="store.toggleBookmark(active())" class="" inputId="raised" [binary]="true" [disabled]="!isAvailable()" />
                        <label pLabel for="raised"><span class="capitalize cursor-pointer">bookmarked</span></label>
                    </div>
                </div>
            </ng-template>
        }
    </p-drawer>
}
-->
@let visible = store.showDrawer();
<p-drawer [visible]="visible" [modal]="false" [header]="header()" styleClass="min-w-20rem" (onHide)="store.showDrawer()?store.toggleDrawer():null">
    <div class="flex w-full h-full overflow-auto" dir="rtl">
        <div class="flex flex-column w-full h-full overflow-auto" dir="ltr">
            <span #drawerhost></span>
        </div>
    </div>
        @if (active() !== 'define-semantic') {
            <ng-template #footer>
                <div class="flex items-center gap-2 mt-3">
                    <div class="flex align-items-center gap-2 w-6rem cursor-pointer">
                        <p-checkbox [ngModel]="isAvailable()" (ngModelChange)="store.toggleAvailableComponent(active())" class="" inputId="raised" [binary]="true" />
                        <label pLabel for="raised"><span class="capitalize cursor-pointer">available</span></label>
                    </div>
                    <div class="flex align-items-center gap-2 w-6rem cursor-pointer" [class.pointer-events-none]="!isAvailable()">
                        <p-checkbox [ngModel]="isBookmarked()" (ngModelChange)="store.toggleBookmark(active())" class="" inputId="raised" [binary]="true" [disabled]="!isAvailable()" />
                        <label pLabel for="raised"><span class="capitalize cursor-pointer">bookmarked</span></label>
                    </div>
                </div>
            </ng-template>
        }
</p-drawer>
`, styles: ["/* src/app/features/style-guide/components/preview-drawer/preview-drawer.scss */\n:host {\n  --p-drawer-content-padding: 0;\n}\n/*# sourceMappingURL=preview-drawer.css.map */\n"] }]
  }], () => [], { drawerhost: [{ type: ViewChild, args: ["drawerhost", __spreadProps(__spreadValues({}, { read: ViewContainerRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDrawer, { className: "PreviewDrawer", filePath: "src/app/features/style-guide/components/preview-drawer/preview-drawer.ts", lineNumber: 24 });
})();

export {
  FormPreset,
  PreviewDrawer
};
//# sourceMappingURL=chunk-LHR4GNNQ.js.map
