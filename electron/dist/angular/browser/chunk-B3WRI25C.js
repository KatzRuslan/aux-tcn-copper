import {
  AutoComplete,
  Card,
  SharedModule,
  Trash
} from "./chunk-NMJCA7HR.js";
import {
  CSS_PROPERTIES,
  getCssValues
} from "./chunk-RIDKRWJE.js";
import {
  emitOnUserEdit,
  require_lodash
} from "./chunk-I7ZYIMSW.js";
import {
  FormField,
  applyEach,
  form,
  required
} from "./chunk-SWDPWGAA.js";
import {
  ButtonDirective,
  IconField,
  InputIcon,
  InputText,
  Plus
} from "./chunk-DMMSTZEH.js";
import {
  NgControlStatus,
  NgModel
} from "./chunk-O5OVYJU6.js";
import {
  Component,
  ElementRef,
  Injector,
  Input,
  Output,
  computed,
  inject,
  input,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-CNIBSPWC.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-RW4ES5HA.js";

// src/app/features/style-guide/components/form-styles/property-name/property-name.ts
var PropertyName = class _PropertyName {
  value = model.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  suggestions = computed(
    () => {
      const value = (this.value() ?? "").toLowerCase();
      const properties = CSS_PROPERTIES.filter((property) => property.startsWith(value));
      return properties;
    },
    ...ngDevMode ? [{ debugName: "suggestions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeValueHandler(value) {
    this.value.set(value ?? "");
  }
  static \u0275fac = function PropertyName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertyName)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyName, selectors: [["property-name"]], inputs: { value: [1, "value"] }, outputs: { value: "valueChange" }, decls: 1, vars: 3, consts: [["inputStyleClass", "w-full", "appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "suggestions", "minQueryLength"]], template: function PropertyName_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-autocomplete", 0);
      \u0275\u0275listener("ngModelChange", function PropertyName_Template_p_autocomplete_ngModelChange_0_listener($event) {
        return ctx.changeValueHandler($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
    }
    if (rf & 2) {
      \u0275\u0275property("ngModel", ctx.value())("suggestions", ctx.suggestions())("minQueryLength", 2);
      \u0275\u0275control();
    }
  }, dependencies: [SharedModule, NgControlStatus, NgModel, AutoComplete], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyName, [{
    type: Component,
    args: [{ selector: "property-name", imports: [SharedModule], template: '<p-autocomplete\n    [ngModel]="value()" (ngModelChange)="changeValueHandler($event)"\n    [suggestions]="suggestions()" [minQueryLength]="2" class="w-full" inputStyleClass="w-full" appendTo="body"\n/>\n' }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }, { type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyName, { className: "PropertyName", filePath: "src/app/features/style-guide/components/form-styles/property-name/property-name.ts", lineNumber: 13 });
})();

// src/app/features/style-guide/components/form-styles/property-value/property-value.ts
var PropertyValue = class _PropertyValue {
  value = model.required(
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  propertyname = input.required(
    ...ngDevMode ? [{ debugName: "propertyname" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDisabled = input(
    true,
    ...ngDevMode ? [{ debugName: "isDisabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  suggestions = computed(
    () => getCssValues((this.value() ?? "").toLowerCase()),
    ...ngDevMode ? [{ debugName: "suggestions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeValueHandler(value) {
    this.value.set(value ?? "");
  }
  static \u0275fac = function PropertyValue_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertyValue)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyValue, selectors: [["property-value"]], inputs: { value: [1, "value"], propertyname: [1, "propertyname"], isDisabled: [1, "isDisabled"] }, outputs: { value: "valueChange" }, decls: 1, vars: 4, consts: [["inputStyleClass", "w-full", "appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled", "suggestions", "minQueryLength"]], template: function PropertyValue_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-autocomplete", 0);
      \u0275\u0275listener("ngModelChange", function PropertyValue_Template_p_autocomplete_ngModelChange_0_listener($event) {
        return ctx.changeValueHandler($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
    }
    if (rf & 2) {
      \u0275\u0275property("ngModel", ctx.value())("disabled", ctx.isDisabled())("suggestions", ctx.suggestions())("minQueryLength", 2);
      \u0275\u0275control();
    }
  }, dependencies: [SharedModule, NgControlStatus, NgModel, AutoComplete], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyValue, [{
    type: Component,
    args: [{ selector: "property-value", imports: [SharedModule], template: '<p-autocomplete\n    [ngModel]="value()" (ngModelChange)="changeValueHandler($event)"\n    [disabled]="isDisabled()"\n    [suggestions]="suggestions()" [minQueryLength]="2" class="w-full" inputStyleClass="w-full" appendTo="body"\n/>\n' }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }, { type: Output, args: ["valueChange"] }], propertyname: [{ type: Input, args: [{ isSignal: true, alias: "propertyname", required: true }] }], isDisabled: [{ type: Input, args: [{ isSignal: true, alias: "isDisabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyValue, { className: "PropertyValue", filePath: "src/app/features/style-guide/components/form-styles/property-value/property-value.ts", lineNumber: 12 });
})();

// src/app/features/style-guide/components/form-styles/form-styles.ts
var import_lodash = __toESM(require_lodash());
var _c0 = () => [];
function FormStyles_Conditional_1_For_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p-iconfield");
    \u0275\u0275element(2, "input", 7);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "p-inputicon", 8);
    \u0275\u0275listener("click", function FormStyles_Conditional_1_For_1_ng_template_3_Template_p_inputicon_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const overrideIndex_r2 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeOverride(overrideIndex_r2));
    })("keypress", function FormStyles_Conditional_1_For_1_ng_template_3_Template_p_inputicon_keypress_3_listener() {
      return null;
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(4, "svg", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 10)(6, "span", 11);
    \u0275\u0275text(7, "{");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function FormStyles_Conditional_1_For_1_ng_template_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const overrideIndex_r2 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addProperty(overrideIndex_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(9, "svg", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const selectorField_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", selectorField_r4);
    \u0275\u0275control();
  }
}
function FormStyles_Conditional_1_For_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "property-name", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275element(7, "property-value", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function FormStyles_Conditional_1_For_1_For_7_Template_button_click_8_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      \u0275\u0275nextContext();
      const overrideIndex_r2 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeProperty(overrideIndex_r2, $index_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(9, "svg", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    \u0275\u0275nextContext();
    const overrideIndex_r2 = \u0275\u0275readContextLet(0);
    const propertyField_r7 = \u0275\u0275nextContext(2).getPropertyField(overrideIndex_r2, $index_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", propertyField_r7.name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", propertyField_r7.value)("propertyname", propertyField_r7.name().value())("isDisabled", propertyField_r7.name().value().length == 0);
    \u0275\u0275control();
  }
}
function FormStyles_Conditional_1_For_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 20);
    \u0275\u0275text(2, "}");
    \u0275\u0275elementEnd()();
  }
}
function FormStyles_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "p-card", 3);
    \u0275\u0275template(3, FormStyles_Conditional_1_For_1_ng_template_3_Template, 10, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275repeaterCreate(6, FormStyles_Conditional_1_For_1_For_7_Template, 10, 4, "div", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FormStyles_Conditional_1_For_1_ng_template_8_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const override_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const overrideIndex_r10 = \u0275\u0275storeLet($index_r9);
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r2.getSelecorField(overrideIndex_r10));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(override_r8.properties);
  }
}
function FormStyles_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FormStyles_Conditional_1_For_1_Template, 10, 2, "p-card", 3, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const overrides_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275repeater(overrides_r11);
  }
}
function FormStyles_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 10);
    \u0275\u0275text(2, "Css overrides is empty");
    \u0275\u0275elementEnd()();
  }
}
var FormStyles = class _FormStyles {
  _injector = inject(Injector);
  _elementRef = inject(ElementRef);
  vmodel = input.required(
    ...ngDevMode ? [{ debugName: "vmodel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  applyPreset = output();
  formModel = linkedSignal(
    () => this.vmodel(),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formGroup = form(this.formModel, (schema) => {
    applyEach(schema, (override) => {
      required(override.selector, { message: "Selector is required" });
      applyEach(override.properties, (property) => {
        required(property.name, { message: "Property name is required" });
        required(property.value, { message: "Value is required" });
      });
    });
  });
  errors = computed(
    () => this.formGroup().errorSummary().map(({ message }) => message).filter((message) => !!message),
    ...ngDevMode ? [{ debugName: "errors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  getSelecorField(index) {
    return this.formGroup[index].selector;
  }
  getPropertyField(overrideIndex, propertyIndex) {
    return this.formGroup[overrideIndex].properties[propertyIndex];
  }
  addOverride() {
    const override = {
      selector: "",
      properties: [{ name: "", value: "" }]
    };
    this.formModel.update((current) => [...current, override]);
    setTimeout(() => {
      const element = this._elementRef.nativeElement;
      element.scrollTop = element.scrollHeight;
    });
  }
  addProperty(overrideIndex) {
    const property = { name: "", value: "" };
    this.formModel.update((current) => current.map((override, index) => index === overrideIndex ? __spreadProps(__spreadValues({}, override), { properties: [...override.properties, property] }) : override));
  }
  removeOverride(index) {
    this.formModel.update((current) => current.filter((_, i) => i !== index));
  }
  removeProperty(overrideIndex, propertyIndex) {
    this.formModel.update((current) => current.map((override, i1) => i1 !== overrideIndex ? override : __spreadProps(__spreadValues({}, override), {
      properties: override.properties.filter((_, i2) => i2 !== propertyIndex)
    })));
    if (this.formModel().at(overrideIndex).properties.length === 0) {
      this.removeOverride(overrideIndex);
    }
  }
  invalid = computed(
    () => this.formGroup().invalid(),
    ...ngDevMode ? [{ debugName: "invalid" }] : (
      /* istanbul ignore next */
      []
    )
  );
  unchanged = computed(
    () => (0, import_lodash.isEqual)(this.formGroup().value(), this.vmodel()),
    ...ngDevMode ? [{ debugName: "unchanged" }] : (
      /* istanbul ignore next */
      []
    )
  );
  getValue() {
    return this.formGroup().value();
  }
  ngOnInit() {
    emitOnUserEdit({
      value: () => this.formGroup().value(),
      generation: () => [this.vmodel()],
      emit: () => this.applyPreset.emit(),
      injector: this._injector
    });
  }
  static \u0275fac = function FormStyles_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormStyles)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormStyles, selectors: [["form-styles"]], hostAttrs: [1, "flex", "flex-column", "gap-3", "w-full", "h-full", "overflow-auto"], inputs: { vmodel: [1, "vmodel"] }, outputs: { applyPreset: "applyPreset" }, decls: 3, vars: 3, consts: [["title", ""], ["footer", ""], [1, "p-2"], [1, "m-1", "surface-50"], [1, "px-4"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "gap-4"], ["type", "text", "pInputText", "", "variant", "filled", "aria-label", "Override selector", 1, "w-18rem", 3, "formField"], [3, "click", "keypress"], ["data-p-icon", "trash"], [1, ""], [1, "text-3xl", "font-bold"], ["pButton", "", "iconOnly", "", "rounded", "", "variant", "outlined", "size", "small", 3, "click"], ["data-p-icon", "plus"], [1, "flex", "align-items-center", "gap-3"], [1, "flex", "align-items-center", "gap-1"], [1, "w-16rem", 3, "formField"], [1, "text-3xl", "font-bold", "pb-1"], [1, "w-16rem", 3, "formField", "propertyname", "isDisabled"], ["pButton", "", "iconOnly", "", "rounded", "", "variant", "outlined", "aria-label", "Trash", "size", "small", 3, "click"], [1, "font-bold", "text-3xl"]], template: function FormStyles_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0);
      \u0275\u0275conditionalCreate(1, FormStyles_Conditional_1_Template, 2, 0)(2, FormStyles_Conditional_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      const overrides_r12 = \u0275\u0275storeLet(ctx.formModel() ?? \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance();
      \u0275\u0275conditional(overrides_r12.length ? 1 : 2);
    }
  }, dependencies: [
    SharedModule,
    IconField,
    InputIcon,
    InputText,
    ButtonDirective,
    Card,
    Plus,
    Trash,
    FormField,
    PropertyName,
    PropertyValue
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormStyles, [{
    type: Component,
    args: [{ selector: "form-styles", imports: [
      SharedModule,
      FormField,
      PropertyName,
      PropertyValue
    ], host: { class: "flex flex-column gap-3 w-full h-full overflow-auto" }, template: '@let overrides = formModel() ?? [];\n\n@if (overrides.length) {\n    @for (override of overrides; track $index) {\n        @let overrideIndex = $index;\n        @let selectorField = getSelecorField(overrideIndex);\n        <p-card class="m-1 surface-50">\n            <ng-template #title>\n                <div class="flex align-items-center gap-4">\n                    <p-iconfield>\n                        <input type="text" pInputText variant="filled" aria-label="Override selector" [formField]="selectorField" class="w-18rem" />\n                        <p-inputicon (click)="removeOverride(overrideIndex)" (keypress)="null">\n                            <svg data-p-icon="trash"></svg>\n                        </p-inputicon>\n                    </p-iconfield>\n                    <div class=""><span class="text-3xl font-bold">&#123;</span></div>\n                    <button pButton iconOnly rounded variant="outlined" size="small" (click)="addProperty(overrideIndex)"><svg data-p-icon="plus"></svg></button>\n                </div>\n            </ng-template>\n            <div class="px-4">\n                @for (property of override.properties; track $index) {\n                    @let propertyField = getPropertyField(overrideIndex, $index);\n                    <div class="flex align-items-center gap-2">\n                        <div class="flex align-items-center gap-3">\n                            <div class="flex align-items-center gap-1">\n                                <property-name [formField]="propertyField.name" class="w-16rem" />\n                                <span class="text-3xl font-bold pb-1">:</span>\n                            </div>\n                            <div class="">\n                                <property-value [formField]="propertyField.value" [propertyname]="propertyField.name().value()" [isDisabled]="propertyField.name().value().length==0" class="w-16rem" />\n                            </div>\n                        </div>\n                        <button pButton iconOnly rounded variant="outlined" aria-label="Trash" size="small" (click)="removeProperty(overrideIndex, $index)"><svg data-p-icon="trash"></svg></button>\n                    </div>\n                }\n            </div>\n            <ng-template #footer>\n                <div class=""><span class="font-bold text-3xl">&#125;</span></div>\n            </ng-template>\n        </p-card>\n    }\n} @else {\n    <div class="p-2"><span class="">Css overrides is empty</span></div>\n}\n' }]
  }], null, { vmodel: [{ type: Input, args: [{ isSignal: true, alias: "vmodel", required: true }] }], applyPreset: [{ type: Output, args: ["applyPreset"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormStyles, { className: "FormStyles", filePath: "src/app/features/style-guide/components/form-styles/form-styles.ts", lineNumber: 20 });
})();

export {
  FormStyles
};
//# sourceMappingURL=chunk-B3WRI25C.js.map
