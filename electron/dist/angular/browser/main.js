import {
  interceptor,
  load,
  navigationResolver
} from "./chunk-KTSQR2W5.js";
import {
  preset_default
} from "./chunk-4JRIKI4A.js";
import {
  COMPONENT_ITEMS
} from "./chunk-RIDKRWJE.js";
import {
  $r,
  Store as Store2,
  Store6 as Store3,
  t
} from "./chunk-RGXWWOJX.js";
import {
  Store2 as Store,
  environment
} from "./chunk-SWDPWGAA.js";
import {
  Bars,
  Bell,
  Bookmark,
  ButtonDirective,
  ButtonModule,
  ChevronDown,
  ConfirmDialog,
  ConfirmDialogModule,
  DialogService,
  DynamicDialogRef,
  History,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  OverlayBadge,
  OverlayBadgeModule,
  PIcon,
  Plus,
  Popover,
  PopoverModule,
  Router,
  RouterLink,
  RouterOutlet,
  Search,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarLayout,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarModule,
  SidebarPanel,
  Times,
  Toast,
  ToastModule,
  ToggleSwitch,
  ToggleSwitchModule,
  bootstrapApplication,
  providePrimeNG,
  provideRouter,
  withHashLocation
} from "./chunk-PNUGKQVR.js";
import {
  ConfirmationService,
  DefaultValueAccessor,
  FormsModule,
  MessageService,
  NgControlStatus,
  NgModel,
  provideHttpClient,
  withInterceptors
} from "./chunk-O5OVYJU6.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  NgModule,
  computed,
  inject,
  input,
  linkedSignal,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CNIBSPWC.js";
import "./chunk-2YRFR7EU.js";
import "./chunk-GXO7LGC6.js";
import "./chunk-VO7ZCA3Y.js";
import "./chunk-FG66HGZG.js";
import "./chunk-CCA2WZVU.js";
import "./chunk-XUXME6PV.js";
import "./chunk-ZAJOBHBR.js";
import "./chunk-PF6APM3S.js";
import "./chunk-LAZOBQWM.js";
import "./chunk-EJ64ZEC3.js";
import "./chunk-6WYBVMBF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RW4ES5HA.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "azure",
    loadComponent: () => import("./chunk-Q3XD2WIO.js"),
    title: "Aux TCN - Azure DevOps",
    data: { state: "azure", header: "Azure DevOps" },
    resolve: [navigationResolver]
  },
  {
    path: "templates",
    loadComponent: () => import("./chunk-JEEIT27B.js"),
    title: "Aux TCN - Templates",
    data: { state: "templates", header: "Templates" },
    resolve: [navigationResolver]
  },
  {
    path: "icons",
    loadComponent: () => import("./chunk-LD6FQPK4.js"),
    title: "Aux TCN - Icons",
    data: { state: "icons", header: "Icons" },
    resolve: [navigationResolver]
  },
  {
    path: "style-guide",
    loadChildren: () => import("./chunk-TG4UMLKJ.js").then((r) => r.routes)
  },
  { path: "", pathMatch: "full", redirectTo: "style-guide/component-settings/inputtext" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([interceptor])),
    provideAppInitializer(load),
    provideRouter(routes, withHashLocation()),
    providePrimeNG({
      theme: {
        // preset: Aura,
        preset: t($r, preset_default),
        options: {
          darkModeSelector: ".dark"
        }
      },
      license: `${environment.primeNgLicenseKey}`
    }),
    DialogService,
    ConfirmationService,
    MessageService
  ]
};

// src/app/shared/shared-core.module.ts
var modules = [
  FormsModule,
  //
  ButtonModule,
  ConfirmDialogModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  OverlayBadgeModule,
  PopoverModule,
  SidebarModule,
  ToastModule,
  ToggleSwitchModule,
  //
  PIcon,
  Bars,
  Bell,
  Bookmark,
  ChevronDown,
  History,
  Plus,
  Search,
  Times
];
var SharedCoreModule = class _SharedCoreModule {
  static \u0275fac = function SharedCoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedCoreModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedCoreModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    modules,
    FormsModule,
    //
    ButtonModule,
    ConfirmDialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    OverlayBadgeModule,
    PopoverModule,
    SidebarModule,
    ToastModule,
    ToggleSwitchModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedCoreModule, [{
    type: NgModule,
    args: [{
      imports: [...modules],
      exports: [...modules]
    }]
  }], null, null);
})();

// src/app/features/style-guide/sections/color-palette/header-right/header-right.ts
function HeaderRight_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputicon", 10);
    \u0275\u0275listener("click", function HeaderRight_Conditional_5_Template_p_inputicon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.store.updateSearchColor(""));
    })("keypress", function HeaderRight_Conditional_5_Template_p_inputicon_keypress_0_listener() {
      return null;
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 11);
    \u0275\u0275elementEnd();
  }
}
function HeaderRight_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-inputicon");
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 12);
    \u0275\u0275elementEnd();
  }
}
var HeaderRight = class _HeaderRight {
  store = inject(Store2);
  addCustomPalette(detail) {
    globalThis.dispatchEvent(new CustomEvent("add-palette-color", { detail }));
  }
  static \u0275fac = function HeaderRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRight)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderRight, selectors: [["color-palette-header-right"]], hostAttrs: [1, "flex", "align-items-center", "gap-3"], decls: 14, vars: 5, consts: [["searchInput", ""], [1, "flex", "align-items-center", "gap-2"], [1, "w-14rem"], ["id", "search-color", "type", "text", "pInputText", "", "placeholder", "Search a color", "aria-label", "Search a color", 1, "w-full", 3, "input", "value"], [1, "cursor-pointer"], [1, "flex", "align-items-center", "gap-2", "cursor-pointer", 3, "click", "keypress"], [1, "pointer-events-none", 3, "ngModel"], [1, ""], ["pButton", "", "iconOnly", "", "rounded", "", "aria-label", "Add CustomPalette", "size", "small", 3, "click", "disabled"], ["data-p-icon", "plus"], [1, "cursor-pointer", 3, "click", "keypress"], ["data-p-icon", "times"], ["data-p-icon", "search"]], template: function HeaderRight_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275declareLet(0);
      \u0275\u0275elementStart(1, "div", 1)(2, "p-iconfield", 2)(3, "input", 3, 0);
      \u0275\u0275listener("input", function HeaderRight_Template_input_input_3_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r2 = \u0275\u0275reference(4);
        return \u0275\u0275resetView(ctx.store.updateSearchColor(searchInput_r2.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, HeaderRight_Conditional_5_Template, 2, 0, "p-inputicon", 4)(6, HeaderRight_Conditional_6_Template, 2, 0, "p-inputicon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275listener("click", function HeaderRight_Template_div_click_7_listener() {
        return ctx.store.toggleCustomPalettesOnly();
      })("keypress", function HeaderRight_Template_div_keypress_7_listener() {
        return null;
      });
      \u0275\u0275element(8, "p-toggleswitch", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 7);
      \u0275\u0275text(11, "Custom Palette");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function HeaderRight_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        const vm_r5 = \u0275\u0275readContextLet(0);
        return \u0275\u0275resetView(ctx.addCustomPalette(vm_r5.search));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(13, "svg", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const searchInput_r2 = \u0275\u0275reference(4);
      const vm_r6 = \u0275\u0275storeLet(ctx.store.vmRightHeader());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", vm_r6.search);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(searchInput_r2.value ? 5 : 6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", vm_r6.customPalettesOnly);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", vm_r6.addColorDisabled);
    }
  }, dependencies: [SharedCoreModule, NgControlStatus, NgModel, ButtonDirective, IconField, InputIcon, InputText, ToggleSwitch, Plus, Search, Times], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRight, [{
    type: Component,
    args: [{ selector: "color-palette-header-right", imports: [SharedCoreModule], host: { class: "flex align-items-center gap-3" }, template: `@let vm = store.vmRightHeader();

<div class="flex align-items-center gap-2">
    <p-iconfield class="w-14rem">
        <input id="search-color"
            #searchInput type="text" pInputText
            [value]="vm.search"
            placeholder="Search a color" aria-label="Search a color"
            class="w-full" (input)="store.updateSearchColor(searchInput.value)"
        />
        @if (searchInput.value) {
            <p-inputicon (click)="store.updateSearchColor('')" (keypress)="null" class="cursor-pointer"><svg data-p-icon="times"></svg></p-inputicon>
        } @else {
            <p-inputicon><svg data-p-icon="search"></svg></p-inputicon>
        }
    </p-iconfield>
    <div class="flex align-items-center gap-2 cursor-pointer" (click)="store.toggleCustomPalettesOnly()" (keypress)="null">
        <p-toggleswitch [ngModel]="vm.customPalettesOnly" class="pointer-events-none" />
        <div class=""><span class="">Custom Palette</span></div>
    </div>
</div>
<button pButton iconOnly rounded aria-label="Add CustomPalette" [disabled]="vm.addColorDisabled" (click)="addCustomPalette(vm.search)" size="small"><svg data-p-icon="plus"></svg></button>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderRight, { className: "HeaderRight", filePath: "src/app/features/style-guide/sections/color-palette/header-right/header-right.ts", lineNumber: 12 });
})();

// src/app/shared/components/searher/searher.ts
var _c0 = (a0) => [a0];
function Searher_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function Searher_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search.set(""));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", "1.4rem");
  }
}
function Searher_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function Searher_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "ESC");
    \u0275\u0275elementEnd()();
  }
}
function Searher_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 21)(4, "span", 13);
    \u0275\u0275text(5, 'No results for "');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9, '"');
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.search());
  }
}
function Searher_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275listener("click", function Searher_Conditional_10_For_1_Template_a_click_0_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelect(node_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 25);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, node_r6.route));
    \u0275\u0275advance();
    \u0275\u0275property("pIcon", node_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r6.category);
  }
}
function Searher_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Searher_Conditional_10_For_1_Template, 6, 6, "a", 23, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.result());
  }
}
var Searher = class _Searher {
  _injector = inject(Injector);
  _dialogRef = inject(DynamicDialogRef);
  bookmarks = input.required(
    ...ngDevMode ? [{ debugName: "bookmarks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recent = input.required(
    ...ngDevMode ? [{ debugName: "recent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search = signal(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mode = linkedSignal(
    () => this.recent().length ? "recent" : "bookmark",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  result = computed(
    () => {
      const search = (this.search() ?? "").toLowerCase();
      const mode = this.mode();
      if (search.length) {
        return [...COMPONENT_ITEMS].filter(({ name }) => name.includes(search)).map((node) => __spreadProps(__spreadValues({}, node), { icon: "th-large" }));
      } else if (this.recent().length && mode === "recent") {
        return this.recent().map((node) => __spreadProps(__spreadValues({}, node), { icon: "history" }));
      }
      return this.bookmarks().map((node) => __spreadProps(__spreadValues({}, node), { icon: "bookmark" }));
    },
    ...ngDevMode ? [{ debugName: "result" }] : (
      /* istanbul ignore next */
      []
    )
  );
  close() {
    this._dialogRef.close();
  }
  onSelect(node) {
    sessionStorage.setItem("recent-components", JSON.stringify([node.name, ...JSON.parse(sessionStorage.getItem("recent-components") ?? "[]").filter((name) => name !== node.name)].slice(0, 20)));
    this.close();
  }
  static \u0275fac = function Searher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Searher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Searher, selectors: [["searher"]], hostAttrs: [1, "flex", "flex-column", "w-34rem", "h-28rem", "overflow-hidden"], inputs: { bookmarks: [1, "bookmarks"], recent: [1, "recent"] }, decls: 20, vars: 14, consts: [[1, "border-bottom-1", "border-300"], [1, "flex", "align-items-center"], [1, "m-special", "pt-2"], ["data-p-icon", "search", 3, "size"], ["id", "search-component", "pSize", "large", "type", "text", "pInputText", "", "placeholder", "Search component...", "aria-label", "Search component", 1, "text-xl", "py-2", "pl-5", "pr-7", "border-0", "w-full", 3, "ngModelChange", "ngModel"], [1, "m-special"], ["pButton", "", "variant", "text", "severity", "secondary"], ["pButton", "", "variant", "outlined", "severity", "secondary", "bSize", "small"], [1, "flex", "flex-column", "gap-2", "p-3", "w-full", "h-full", "overflow-auto"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "p-3", "w-full", "h-full"], [1, "flex", "gap-4", "p-3"], ["pButton", "", "variant", "text", "severity", "secondary", 3, "click", "disabled"], ["data-p-icon", "history"], [1, ""], ["data-p-icon", "bookmark"], ["pButton", "", "variant", "text", "severity", "secondary", 3, "click"], ["data-p-icon", "times", 3, "size"], ["pButton", "", "variant", "outlined", "severity", "secondary", "bSize", "small", 3, "click"], [1, "text-xs"], ["width", "40", "height", "40", "viewBox", "0 0 20 20", "fill", "none", "fill-rule", "evenodd", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"], [1, "flex", "py-3"], [1, "white-space-nowrap", "overflow-hidden", "text-overflow-ellipsis", "max-w-14rem"], ["pButton", "", "variant", "text", "outlined", "", "severity", "secondary", 1, "justify-content-start", "align-items-center", "fix-h-2rem", "no-underline", 3, "routerLink"], ["pButton", "", "variant", "text", "outlined", "", "severity", "secondary", 1, "justify-content-start", "align-items-center", "fix-h-2rem", "no-underline", 3, "click", "routerLink"], ["color", "light-dark(var(--p-surface-800), var(--p-surface-50))", 3, "pIcon"], [1, "text-800"], [1, "text-400"]], template: function Searher_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "p-iconfield", 1)(2, "p-inputicon", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(3, "svg", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("ngModelChange", function Searher_Template_input_ngModelChange_4_listener($event) {
        return ctx.search.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(5, "p-inputicon", 5);
      \u0275\u0275conditionalCreate(6, Searher_Conditional_6_Template, 2, 1, "button", 6)(7, Searher_Conditional_7_Template, 3, 0, "button", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275conditionalCreate(9, Searher_Conditional_9_Template, 10, 1, "div", 9)(10, Searher_Conditional_10_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
      \u0275\u0275listener("click", function Searher_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.mode.set("recent");
        return \u0275\u0275resetView(ctx.search.set(""));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(13, "svg", 12);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span", 13);
      \u0275\u0275text(15, "Recent Components");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function Searher_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.mode.set("bookmark");
        return \u0275\u0275resetView(ctx.search.set(""));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(17, "svg", 14);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "Bookmark Components");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", "1.2rem");
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.search());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.search().length ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.search().length && ctx.result().length === 0 ? 9 : 10);
      const recentActive_r7 = ctx.search().length == 0 && ctx.mode() == "recent";
      const recentDisabled_r8 = ctx.recent().length == 0;
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-800", recentActive_r7)("font-bold", recentActive_r7);
      \u0275\u0275property("disabled", recentDisabled_r8);
      const bookmarkActive_r9 = ctx.search().length == 0 && ctx.mode() == "bookmark";
      const bookmarkDisabled_r10 = ctx.bookmarks().length == 0;
      \u0275\u0275advance(4);
      \u0275\u0275classProp("text-800", bookmarkActive_r9)("font-bold", bookmarkActive_r9);
      \u0275\u0275property("disabled", bookmarkDisabled_r10);
    }
  }, dependencies: [SharedCoreModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonDirective, IconField, InputIcon, InputText, PIcon, Bookmark, History, Search, Times, RouterLink], styles: ["\n.m-special[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=searher.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Searher, [{
    type: Component,
    args: [{ selector: "searher", imports: [SharedCoreModule, RouterLink], host: { class: "flex flex-column w-34rem h-28rem overflow-hidden" }, template: `
<div class="border-bottom-1 border-300">
    <p-iconfield class="flex align-items-center">
        <p-inputicon class="m-special pt-2"><svg data-p-icon="search" [size]="'1.2rem'"></svg></p-inputicon>
        <input id="search-component" pSize="large"
            type="text" pInputText [ngModel]="search()" (ngModelChange)="search.set($event)"
            placeholder="Search component..." aria-label="Search component"
            class="text-xl py-2 pl-5 pr-7 border-0 w-full"
        />
        <p-inputicon class="m-special">
            @if (search().length) {
                <button pButton variant="text" severity="secondary" (click)="search.set('')"><svg data-p-icon="times" [size]="'1.4rem'"></svg></button>
            } @else {
                <button pButton variant="outlined" severity="secondary" (click)="close()" bSize="small"><span class="text-xs">ESC</span></button>
            }
        </p-inputicon>
    </p-iconfield>
</div>
<div class="flex flex-column gap-2 p-3 w-full h-full overflow-auto">
    @if (search().length && result().length === 0) {
        <div class="flex flex-column justify-content-center align-items-center p-3 w-full h-full">
            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
            <div class="flex py-3">
                <span class="">No results for "</span>
                <span class="white-space-nowrap overflow-hidden text-overflow-ellipsis max-w-14rem">{{search()}}</span>
                <span class="">"</span>
            </div>
        </div>
    } @else {
        @for (node of result(); track $index) {
            <a pButton variant="text" (click)="onSelect(node)" outlined severity="secondary" class="justify-content-start align-items-center fix-h-2rem no-underline" [routerLink]="[node.route]" >
                <svg [pIcon]="node.icon" color="light-dark(var(--p-surface-800), var(--p-surface-50))"></svg>
                <span class="text-800">{{node.title}}</span>
                <span class="text-400">{{node.category}}</span>
            </a>
        }
    }
</div>
<div class="flex gap-4 p-3">
    @let recentActive = search().length==0 && mode()=='recent';
    @let recentDisabled = recent().length==0;
    <button pButton variant="text" severity="secondary"
        [class.text-800]="recentActive"
        [class.font-bold]="recentActive"
        [disabled]="recentDisabled"
        (click)="mode.set('recent'); search.set('')">
        <svg data-p-icon="history"></svg>
        <span class="">Recent Components</span>
    </button>
    @let bookmarkActive = search().length==0 && mode()=='bookmark';
    @let bookmarkDisabled = bookmarks().length==0;
    <button pButton variant="text" severity="secondary"
        [class.text-800]="bookmarkActive"
        [class.font-bold]="bookmarkActive"
        [disabled]="bookmarkDisabled"
        (click)="mode.set('bookmark'); search.set('')">
        <svg data-p-icon="bookmark"></svg>
        <span class="">Bookmark Components</span>
    </button>
</div>
`, styles: ["/* src/app/shared/components/searher/searher.scss */\n.m-special {\n  margin-top: -1rem;\n}\n/*# sourceMappingURL=searher.css.map */\n"] }]
  }], null, { bookmarks: [{ type: Input, args: [{ isSignal: true, alias: "bookmarks", required: true }] }], recent: [{ type: Input, args: [{ isSignal: true, alias: "recent", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Searher, { className: "Searher", filePath: "src/app/shared/components/searher/searher.ts", lineNumber: 15 });
})();

// src/app/shared/components/conductor/conductor.ts
var Conductor = class _Conductor {
  store = inject(Store);
  dialogService = inject(DialogService);
  openSearcher() {
    const bookmarks = this.store.bookmarks().map((bookmark) => COMPONENT_ITEMS.find(({ name }) => name === bookmark)).filter((bookmark) => !!bookmark);
    const recent = JSON.parse(sessionStorage.getItem("recent-components") ?? "[]").map((recently) => COMPONENT_ITEMS.find(({ name }) => name === recently)).filter((recently) => !!recently);
    this.dialogService.open(Searher, {
      showHeader: false,
      position: "top",
      resizable: false,
      styleClass: "mt-8",
      closable: true,
      closeOnEscape: true,
      pt: { content: { class: "p-0" } },
      inputValues: {
        bookmarks,
        recent
      }
    });
  }
  static \u0275fac = function Conductor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Conductor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Conductor, selectors: [["conductor"]], hostAttrs: [1, "flex", "justify-content-center", "align-items-center", "gap-3"], hostBindings: function Conductor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.control.k", function Conductor_keydown_control_k_HostBindingHandler() {
        return ctx.openSearcher();
      }, \u0275\u0275resolveDocument)("keydown.meta.k", function Conductor_keydown_meta_k_HostBindingHandler() {
        return ctx.openSearcher();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 13, vars: 2, consts: [["pButton", "", "raised", "", "severity", "secondary", 3, "click"], ["data-p-icon", "search"], [1, "w-3rem"], [1, ""], [1, "surface-300", "border-1", "border-surface-300", "doc-search"], [1, "px-1"], ["pButton", "", "iconOnly", "", "rounded", "", "raised", "", "severity", "secondary", "aria-label", "Theme Mode", 3, "click"], [3, "pIcon", "size"]], template: function Conductor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function Conductor_Template_button_click_0_listener() {
        return ctx.openSearcher();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(1, "svg", 1);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "kbd", 3)(5, "span", 4);
      \u0275\u0275text(6, "CTRL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 3);
      \u0275\u0275text(10, "K");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function Conductor_Template_button_click_11_listener() {
        return ctx.store.toggleDarkMode();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(12, "svg", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("pIcon", ctx.store.modeIcon())("size", "1.2rem");
    }
  }, dependencies: [SharedCoreModule, ButtonDirective, PIcon, Search], styles: ["\n.doc-search[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 0.1rem 0.2rem;\n  border-radius: var(--p-border-radius-sm);\n  color: var(--p-text-muted-color);\n}\n/*# sourceMappingURL=conductor.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Conductor, [{
    type: Component,
    args: [{ selector: "conductor", imports: [SharedCoreModule], host: {
      class: "flex justify-content-center align-items-center gap-3",
      "(document:keydown.control.k)": "openSearcher()",
      "(document:keydown.meta.k)": "openSearcher()"
    }, template: `<button pButton raised severity="secondary" (click)="openSearcher()">
    <svg data-p-icon="search"></svg>
    <span class="w-3rem">Search</span>
    <kbd class="">
        <span class="surface-300 border-1 border-surface-300 doc-search">CTRL</span>
        <span class="px-1">+</span>
        <span class="">K</span>
    </kbd>
</button>
<button pButton iconOnly rounded raised severity="secondary" aria-label="Theme Mode" (click)="store.toggleDarkMode()">
    <svg [pIcon]="store.modeIcon()" [size]="'1.2rem'"></svg>
</button>
`, styles: ["/* src/app/shared/components/conductor/conductor.scss */\n.doc-search {\n  font-family: monospace;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 0.1rem 0.2rem;\n  border-radius: var(--p-border-radius-sm);\n  color: var(--p-text-muted-color);\n}\n/*# sourceMappingURL=conductor.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Conductor, { className: "Conductor", filePath: "src/app/shared/components/conductor/conductor.ts", lineNumber: 20 });
})();

// src/app/shared/components/drawer-button/drawer-button.ts
var DrawerButton = class _DrawerButton {
  store = inject(Store3);
  static \u0275fac = function DrawerButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawerButton, selectors: [["drawer-button"]], decls: 2, vars: 1, consts: [["pButton", "", "iconOnly", "", "rounded", "", "raised", "", "aria-label", "Toggle Drawer", 3, "click", "severity"], ["data-p-icon", "bars"]], template: function DrawerButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function DrawerButton_Template_button_click_0_listener() {
        return ctx.store.toggleDrawer();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(1, "svg", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const severity_r1 = ctx.store.showDrawer() ? "contrast" : "secondary";
      \u0275\u0275property("severity", severity_r1);
    }
  }, dependencies: [SharedCoreModule, ButtonDirective, Bars], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerButton, [{
    type: Component,
    args: [{ selector: "drawer-button", imports: [SharedCoreModule], template: `@let severity = store.showDrawer() ? 'contrast' : 'secondary';
<button pButton iconOnly rounded raised aria-label="Toggle Drawer"
    [severity]="severity"
    (click)="store.toggleDrawer()">
    <svg data-p-icon="bars"></svg>
</button>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerButton, { className: "DrawerButton", filePath: "src/app/shared/components/drawer-button/drawer-button.ts", lineNumber: 11 });
})();

// src/app/features/style-guide/sections/semantic/header-right/header-right.ts
var HeaderRight2 = class _HeaderRight {
  static \u0275fac = function HeaderRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRight)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderRight, selectors: [["define-semantic-header-right"]], hostAttrs: [1, "flex", "align-items-center", "gap-3"], decls: 2, vars: 0, template: function HeaderRight_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "conductor")(1, "drawer-button");
    }
  }, dependencies: [Conductor, DrawerButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRight2, [{
    type: Component,
    args: [{ selector: "define-semantic-header-right", imports: [Conductor, DrawerButton], host: { class: "flex align-items-center gap-3" }, template: "<conductor />\n<drawer-button />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderRight2, { className: "HeaderRight", filePath: "src/app/features/style-guide/sections/semantic/header-right/header-right.ts", lineNumber: 12 });
})();

// src/app/shared/icons/css-icon.ts
var CssIcon = class _CssIcon {
  static \u0275fac = function CssIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CssIcon)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CssIcon, selectors: [["svg", "dIconCss", ""]], hostAttrs: ["viewBox", "0 0 20 20", "fill", "none", "aria-hidden", "true"], decls: 4, vars: 0, consts: [["d", "M7 2.8 C5.6 2.8 5.4 3.6 5.4 4.8 L5.4 7.6 C5.4 9 4.4 9.6 3.4 10 C4.4 10.4 5.4 11 5.4 12.4 L5.4 15.2 C5.4 16.4 5.6 17.2 7 17.2", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13 2.8 C14.4 2.8 14.6 3.6 14.6 4.8 L14.6 7.6 C14.6 9 15.6 9.6 16.6 10 C15.6 10.4 14.6 11 14.6 12.4 L14.6 15.2 C14.6 16.4 14.4 17.2 13 17.2", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "10", "y", "11.9", "text-anchor", "middle", "font-size", "5.2", "font-weight", "700", "letter-spacing", ".2", "fill", "currentColor", "stroke", "none", "font-family", "inherit"]], template: function CssIcon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElement(0, "path", 0)(1, "path", 1);
      \u0275\u0275domElementStart(2, "text", 2);
      \u0275\u0275text(3, "css");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CssIcon, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "svg[dIconCss]",
      template: `
        <svg:path d="M7 2.8 C5.6 2.8 5.4 3.6 5.4 4.8 L5.4 7.6 C5.4 9 4.4 9.6 3.4 10 C4.4 10.4 5.4 11 5.4 12.4 L5.4 15.2 C5.4 16.4 5.6 17.2 7 17.2"
            fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        <svg:path d="M13 2.8 C14.4 2.8 14.6 3.6 14.6 4.8 L14.6 7.6 C14.6 9 15.6 9.6 16.6 10 C15.6 10.4 14.6 11 14.6 12.4 L14.6 15.2 C14.6 16.4 14.4 17.2 13 17.2"
            fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        <svg:text x="10" y="11.9" text-anchor="middle" font-size="5.2" font-weight="700" letter-spacing=".2" fill="currentColor" stroke="none" font-family="inherit">css</svg:text>
    `,
      host: {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CssIcon, { className: "CssIcon", filePath: "src/app/shared/icons/css-icon.ts", lineNumber: 25 });
})();

// src/app/features/style-guide/sections/ui-component/header-right/header-right.ts
var HeaderRight3 = class _HeaderRight {
  store = inject(Store3);
  static \u0275fac = function HeaderRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRight)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderRight, selectors: [["ui-component-header-right"]], hostAttrs: [1, "flex", "align-items-center", "gap-3"], decls: 4, vars: 0, consts: [["pButton", "", "iconOnly", "", "rounded", "", "raised", "", "aria-label", "Toggle Drawer", "severity", "secondary", 3, "click"], ["dIconCss", "", "width", "20", "height", "20"]], template: function HeaderRight_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function HeaderRight_Template_button_click_0_listener() {
        return null;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(1, "svg", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(2, "conductor")(3, "drawer-button");
    }
  }, dependencies: [SharedCoreModule, ButtonDirective, Conductor, DrawerButton, CssIcon], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRight3, [{
    type: Component,
    args: [{ selector: "ui-component-header-right", imports: [SharedCoreModule, Conductor, DrawerButton, CssIcon], host: { class: "flex align-items-center gap-3" }, template: '<button pButton iconOnly rounded raised aria-label="Toggle Drawer"\n    severity="secondary"\n    (click)="null">\n    <svg dIconCss width="20" height="20"></svg>\n</button>\n<conductor />\n<drawer-button />\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderRight3, { className: "HeaderRight", filePath: "src/app/features/style-guide/sections/ui-component/header-right/header-right.ts", lineNumber: 15 });
})();

// src/app/shared/components/main-header/main-header.ts
function MainHeader_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "color-palette-header-right");
  }
}
function MainHeader_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "define-semantic-header-right");
  }
}
function MainHeader_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-component-header-right");
  }
}
function MainHeader_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const state_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", state_r1, " ");
  }
}
var MainHeader = class _MainHeader {
  store = inject(Store);
  static \u0275fac = function MainHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainHeader, selectors: [["main-header"]], hostAttrs: [1, "flex", "align-items-center", "p-2", "mb-3", "gap-3", "border-200", "border-bottom-1", "h-5rem"], decls: 10, vars: 3, consts: [[1, "fix-w-20rem"], [1, "flex", "align-items-center", "w-full", "m-0"], [1, "text-xl"], [1, "flex", "justify-content-end", "align-items-center", "fix-w-30rem"]], template: function MainHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0);
      \u0275\u0275element(1, "div", 0);
      \u0275\u0275elementStart(2, "h1", 1)(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275conditionalCreate(6, MainHeader_Case_6_Template, 1, 0, "color-palette-header-right")(7, MainHeader_Case_7_Template, 1, 0, "define-semantic-header-right")(8, MainHeader_Case_8_Template, 1, 0, "ui-component-header-right")(9, MainHeader_Case_9_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      const header_r2 = ctx.store.aciveHeader();
      const state_r3 = \u0275\u0275storeLet(ctx.store.aciveState());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(header_r2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_3_0 = state_r3) === "color-palette" ? 6 : tmp_3_0 === "define-semantic" ? 7 : tmp_3_0 === "component-settings" ? 8 : 9);
    }
  }, dependencies: [HeaderRight, HeaderRight2, HeaderRight3], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainHeader, [{
    type: Component,
    args: [{ selector: "main-header", imports: [
      HeaderRight,
      HeaderRight2,
      HeaderRight3
    ], host: { class: "flex align-items-center p-2 mb-3 gap-3 border-200 border-bottom-1 h-5rem" }, template: `@let header = store.aciveHeader();\r
@let state = store.aciveState();\r
\r
<div class="fix-w-20rem"></div>\r
<h1 class="flex align-items-center w-full m-0"><span class="text-xl">{{ header }}</span></h1>\r
<div class="flex justify-content-end align-items-center fix-w-30rem">\r
    @switch (state) {\r
        @case ('color-palette') {\r
            <color-palette-header-right />\r
        }\r
        @case ('define-semantic') {\r
            <define-semantic-header-right />\r
        }\r
        @case ('component-settings') {\r
            <ui-component-header-right />\r
        }\r
        @default {\r
            {{state}}\r
        }\r
    }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainHeader, { className: "MainHeader", filePath: "src/app/shared/components/main-header/main-header.ts", lineNumber: 16 });
})();

// src/app/shared/components/notification/notification.ts
var _c02 = (a0) => ({ class: a0 });
var _c1 = (a0) => ({ root: a0 });
var _c2 = (a0) => ({ pcBadge: a0 });
var Notification = class _Notification {
  store = inject(Store);
  static \u0275fac = function Notification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notification)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notification, selectors: [["notification"]], hostAttrs: [1, "pr-1"], decls: 18, vars: 11, consts: [["popover", ""], [1, "block", "cursor-pointer", 3, "click", "keydown.enter", "keydown.space", "value", "pt"], ["data-p-icon", "bell", 3, "size"], [1, "max-w-72", "w-full"], [1, "flex", "items-center", "justify-between"], [1, "font-semibold", "text-sm"], [1, "text-sm", "text-muted-color", "mt-2", "mb-0!"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-2"], ["type", "button", "pButton", "", "severity", "secondary", "variant", "outlined", "size", "small", 3, "click"], ["type", "button", "pButton", "", "size", "small", 3, "click"]], template: function Notification_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-overlaybadge", 1);
      \u0275\u0275listener("click", function Notification_Template_p_overlaybadge_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const popover_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(popover_r2.toggle($event));
      })("keydown.enter", function Notification_Template_p_overlaybadge_keydown_enter_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const popover_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(popover_r2.toggle($event));
      })("keydown.space", function Notification_Template_p_overlaybadge_keydown_space_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const popover_r2 = \u0275\u0275reference(3);
        popover_r2.toggle($event);
        return \u0275\u0275resetView($event.preventDefault());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(1, "svg", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(2, "p-popover", null, 0)(4, "div", 3)(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "Create a New Workspace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Name your workspace to get started. You can always change this later.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
      \u0275\u0275text(12, "Lowercase letters and dashes only");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function Notification_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        const popover_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(popover_r2.hide());
      });
      \u0275\u0275text(15, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function Notification_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        const popover_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(popover_r2.hide());
      });
      \u0275\u0275text(17, "Create");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const notifications_r3 = ctx.store.notifications();
      const value_r4 = notifications_r3.length;
      const disabled_r5 = value_r4 == 0;
      \u0275\u0275classProp("pointer-events-none", disabled_r5);
      \u0275\u0275property("value", value_r4)("pt", \u0275\u0275pureFunction1(9, _c2, \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pureFunction1(5, _c02, value_r4 ? "notification-badge" : "p-badge-dot-hidden hidden"))));
      \u0275\u0275advance();
      \u0275\u0275property("size", 24);
    }
  }, dependencies: [SharedCoreModule, ButtonDirective, OverlayBadge, Popover, Bell], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notification, [{
    type: Component,
    args: [{ selector: "notification", imports: [SharedCoreModule], host: { class: "pr-1" }, template: `@let notifications = store.notifications();
@let value = notifications.length;
@let disabled = value==0;
<p-overlaybadge
    [value]="value" (click)="popover.toggle($event)"
    (keydown.enter)="popover.toggle($event)"
    (keydown.space)="popover.toggle($event); $event.preventDefault()"
    class="block cursor-pointer" [class.pointer-events-none]="disabled"
    [pt]="{ pcBadge: { root: { class: value ? 'notification-badge' : 'p-badge-dot-hidden hidden' } } }">
    <svg data-p-icon="bell" [size]="24"></svg>
</p-overlaybadge>
<p-popover #popover>
    <div class="max-w-72 w-full">
        <div class="flex items-center justify-between">
            <span class="font-semibold text-sm">Create a New Workspace</span>
        </div>
        <p class="text-sm text-muted-color mt-2 mb-0!">Name your workspace to get started. You can always change this later.</p>
        <div class="flex items-center justify-between mt-4">
            <span class="text-xs text-surface-500 dark:text-surface-400">Lowercase letters and dashes only</span>
            <div class="flex items-center gap-2">
                <button type="button" pButton severity="secondary" variant="outlined" size="small" (click)="popover.hide()">Cancel</button>
                <button type="button" pButton size="small" (click)="popover.hide()">Create</button>
            </div>
        </div>
    </div>
</p-popover>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notification, { className: "Notification", filePath: "src/app/shared/components/notification/notification.ts", lineNumber: 12 });
})();

// src/app/shared/components/side-navigation/side-navigation.ts
function SideNavigation_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 12);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const navigationItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", navigationItem_r1.route)("isActive", navigationItem_r1.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("pIcon", navigationItem_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(navigationItem_r1.title);
  }
}
function SideNavigation_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SideNavigation_For_10_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const navigationItem_r1 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(navigationItem_r1.isActive = !navigationItem_r1.isActive);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 12);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(4, "svg", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const navigationItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("isActive", navigationItem_r1.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("pIcon", navigationItem_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(navigationItem_r1.title);
  }
}
function SideNavigation_For_10_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const navigationSubItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", navigationSubItem_r3.route)("isActive", navigationSubItem_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(navigationSubItem_r3.title);
  }
}
function SideNavigation_For_10_Conditional_3_For_2_Conditional_1_For_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-sidebar-menu-sub-item")(1, "a", 9)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r5.route)("isActive", item_r5.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.title);
  }
}
function SideNavigation_For_10_Conditional_3_For_2_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p-sidebar-group-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-sidebar-group-content")(4, "p-sidebar-menu");
    \u0275\u0275repeaterCreate(5, SideNavigation_For_10_Conditional_3_For_2_Conditional_1_For_10_For_6_Template, 4, 3, "p-sidebar-menu-sub-item", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r6.label);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(group_r6.items);
  }
}
function SideNavigation_For_10_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-sidebar-layout", 16)(1, "p-sidebar-content", 1)(2, "p-sidebar-menu-item", 17)(3, "button", 13);
    \u0275\u0275listener("click", function SideNavigation_For_10_Conditional_3_For_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const navigationSubItem_r3 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(navigationSubItem_r3.isActive = !navigationSubItem_r3.isActive);
    });
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(6, "svg", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p-sidebar-menu-sub", 19)(8, "p-sidebar-group", 20);
    \u0275\u0275repeaterCreate(9, SideNavigation_For_10_Conditional_3_For_2_Conditional_1_For_10_Template, 7, 1, "div", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const navigationSubItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("flex", navigationSubItem_r3.isActive);
    \u0275\u0275property("collapsible", !!navigationSubItem_r3.items)("open", navigationSubItem_r3?.isActive == true);
    \u0275\u0275advance();
    \u0275\u0275property("isActive", navigationSubItem_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(navigationSubItem_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("flex", navigationSubItem_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(navigationSubItem_r3.items);
  }
}
function SideNavigation_For_10_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SideNavigation_For_10_Conditional_3_For_2_Conditional_0_Template, 3, 3, "a", 9)(1, SideNavigation_For_10_Conditional_3_For_2_Conditional_1_Template, 11, 8, "p-sidebar-layout", 16);
  }
  if (rf & 2) {
    const navigationSubItem_r3 = ctx.$implicit;
    \u0275\u0275conditional(navigationSubItem_r3.route ? 0 : 1);
  }
}
function SideNavigation_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-sidebar-menu-sub", 15);
    \u0275\u0275repeaterCreate(1, SideNavigation_For_10_Conditional_3_For_2_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const navigationItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("flex", navigationItem_r1.isActive);
    \u0275\u0275advance();
    \u0275\u0275repeater(navigationItem_r1.items);
  }
}
function SideNavigation_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-sidebar-menu-item", 8);
    \u0275\u0275conditionalCreate(1, SideNavigation_For_10_Conditional_1_Template, 4, 4, "a", 9)(2, SideNavigation_For_10_Conditional_2_Template, 5, 3, "button", 10);
    \u0275\u0275conditionalCreate(3, SideNavigation_For_10_Conditional_3_Template, 3, 2, "p-sidebar-menu-sub", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const navigationItem_r1 = ctx.$implicit;
    \u0275\u0275classMap(navigationItem_r1.styleClass);
    \u0275\u0275property("collapsible", !!navigationItem_r1.items)("open", navigationItem_r1?.isActive == true);
    \u0275\u0275advance();
    \u0275\u0275conditional(navigationItem_r1.route ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(navigationItem_r1.items ? 3 : -1);
  }
}
var SideNavigation = class _SideNavigation {
  _router = inject(Router);
  store = inject(Store);
  components = computed(
    () => {
      const activeName = this.store.activeName();
      const availableComponents = this.store.availableComponents();
      return Object.entries(COMPONENT_ITEMS.reduce((accumulator, item) => {
        if (availableComponents.includes(item.name)) {
          accumulator[item.category] ??= [];
          accumulator[item.category].push(item);
        }
        return accumulator;
      }, {})).map(([category, items]) => ({ label: category, items: items.map((item) => __spreadProps(__spreadValues({}, item), { isActive: item.name === activeName })) }));
    },
    ...ngDevMode ? [{ debugName: "components" }] : (
      /* istanbul ignore next */
      []
    )
  );
  navigations = computed(
    () => {
      const activeName = this.store.activeName();
      const components = this.components();
      const someActiveComponent = components.some(({ items }) => items.some(({ isActive }) => isActive));
      const navigation = [
        { icon: "code-branch", title: "Branches", name: "azure", route: "/azure", isActive: activeName === "azure" },
        { icon: "clone", title: "Templates", name: "templates", route: "/templates", isActive: activeName === "templates" },
        { icon: "images", title: "Icons", name: "icons", route: "/icons", isActive: activeName === "icons" },
        {
          icon: "book",
          title: "Style Guide",
          name: "style-guide",
          isActive: ["color-palette", "border-radius", "define-semantic", "css-overrides"].includes(activeName) || someActiveComponent,
          styleClass: "flex flex-column flex-1 min-h-0",
          items: [
            { title: "Color Palette", name: "color-palette", isActive: false, route: "/style-guide/color-palette" },
            { title: "Border Radius", name: "border-radius", isActive: false, route: "/style-guide/border-radius" },
            { title: "Define Semantic", name: "define-semantic", isActive: false, route: "/style-guide/define-semantic" },
            { title: "Css Overrides", name: "css-overrides", isActive: false, route: "/style-guide/css-overrides" },
            {
              title: "Components",
              name: "component-settings",
              isActive: someActiveComponent,
              items: components
            }
          ]
        }
      ];
      return navigation;
    },
    ...ngDevMode ? [{ debugName: "navigations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function SideNavigation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideNavigation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavigation, selectors: [["side-navigation"]], hostAttrs: [1, "flex", "flex-column", "h-full", "overflow-hidden"], decls: 16, vars: 0, consts: [[1, "h-full", "min-h-0", "overflow-hidden"], [1, "overflow-hidden"], [1, "p-2"], [1, "text-lg", "text-pink-600"], [1, ""], [3, "class", "collapsible", "open"], [1, "flex", "justify-content-between", "align-items-center", "surface-100", "p-3", "pb-2"], [1, "pt-1"], [3, "collapsible", "open"], ["pSidebarMenuButton", "", 1, "no-underline", "min-h-2rem", 3, "routerLink", "isActive"], ["pSidebarMenuButton", "", 1, "min-h-2rem", 3, "isActive"], [1, "flex-1", "min-h-0", "border-0", 3, "flex"], ["color", "var(--p-sidebar-menu-button-color)", 3, "pIcon"], ["pSidebarMenuButton", "", 1, "min-h-2rem", 3, "click", "isActive"], ["data-p-icon", "chevron-down", "color", "var(--p-sidebar-menu-button-color)", 1, "ml-auto"], [1, "flex-1", "min-h-0", "border-0"], [1, "flex", "flex-1", "min-h-0"], [1, "flex-column", "flex-1", "min-h-0", 3, "collapsible", "open"], ["data-p-icon", "chevron-down", 1, "ml-auto"], [1, "flex-1", "m-0", "p-0", "min-h-0", "border-0", "overflow-y-auto"], [1, "gap-3"]], template: function SideNavigation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-sidebar-layout", 0)(1, "p-sidebar-panel", 1)(2, "p-sidebar-header")(3, "p-sidebar-menu")(4, "p-sidebar-menu-item")(5, "div", 2)(6, "span", 3);
      \u0275\u0275text(7, "I haven't figured it out yet...");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(8, "p-sidebar-content", 4);
      \u0275\u0275repeaterCreate(9, SideNavigation_For_10_Template, 4, 6, "p-sidebar-menu-item", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-sidebar-footer")(12, "p-sidebar-menu", 4)(13, "p-sidebar-menu-item", 6);
      \u0275\u0275element(14, "conductor")(15, "notification", 7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.navigations());
    }
  }, dependencies: [SharedCoreModule, SidebarLayout, SidebarPanel, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, PIcon, ChevronDown, RouterLink, Conductor, Notification], styles: ["\n[_nghost-%COMP%] {\n  --p-sidebar-group-label-font-size: .7rem;\n  --p-sidebar-group-label-height: 1.5rem;\n  --p-sidebar-group-label-font-weight: 400;\n}\n/*# sourceMappingURL=side-navigation.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavigation, [{
    type: Component,
    args: [{ selector: "side-navigation", imports: [
      SharedCoreModule,
      RouterLink,
      Conductor,
      Notification
    ], host: { class: "flex flex-column h-full overflow-hidden" }, template: `<p-sidebar-layout class="h-full min-h-0 overflow-hidden">
    <p-sidebar-panel class="overflow-hidden">
        <p-sidebar-header>
            <p-sidebar-menu>
                <p-sidebar-menu-item>
                    <div class="p-2"><span class="text-lg text-pink-600">I haven't figured it out yet...</span></div>
                </p-sidebar-menu-item>
            </p-sidebar-menu>
        </p-sidebar-header>
        <p-sidebar-content class="">
            @for (navigationItem of navigations(); track $index) {
                <p-sidebar-menu-item [class]="navigationItem.styleClass" [collapsible]="!!navigationItem.items" [open]="navigationItem?.isActive==true">
                    @if (navigationItem.route) {
                        <a pSidebarMenuButton [routerLink]="navigationItem.route" [isActive]="navigationItem.isActive" class="no-underline min-h-2rem">
                            <svg [pIcon]="navigationItem.icon!" color="var(--p-sidebar-menu-button-color)"></svg>
                            <span>{{navigationItem.title}}</span>
                        </a>
                    } @else {
                        <button pSidebarMenuButton class="min-h-2rem" [isActive]="navigationItem.isActive" (click)="navigationItem.isActive=!navigationItem.isActive">
                            <svg [pIcon]="navigationItem.icon!" color="var(--p-sidebar-menu-button-color)"></svg>
                            <span>{{navigationItem.title}}</span>
                            <svg data-p-icon="chevron-down" class="ml-auto" color="var(--p-sidebar-menu-button-color)"></svg>
                        </button>
                    }
                    @if (navigationItem.items) {
                        <p-sidebar-menu-sub class="flex-1 min-h-0 border-0" [class.flex]="navigationItem.isActive">
                            @for (navigationSubItem of navigationItem.items; track $index) {
                                @if (navigationSubItem.route) {
                                    <a pSidebarMenuButton [routerLink]="navigationSubItem.route" [isActive]="navigationSubItem.isActive" class="no-underline min-h-2rem">
                                        <span>{{navigationSubItem.title}}</span>
                                    </a>
                                } @else {
                                    <p-sidebar-layout class="flex flex-1 min-h-0">
                                        <p-sidebar-content class="overflow-hidden">
                                            <p-sidebar-menu-item class="flex-column flex-1 min-h-0" [class.flex]="navigationSubItem.isActive" [collapsible]="!!navigationSubItem.items" [open]="navigationSubItem?.isActive==true">
                                                <button pSidebarMenuButton class="min-h-2rem" [isActive]="navigationSubItem.isActive" (click)="navigationSubItem.isActive=!navigationSubItem.isActive">
                                                    <span>{{navigationSubItem.title}}</span>
                                                    <svg data-p-icon="chevron-down" class="ml-auto"></svg>
                                                </button>
                                                <p-sidebar-menu-sub class="flex-1 m-0 p-0 min-h-0 border-0 overflow-y-auto" [class.flex]="navigationSubItem.isActive">
                                                    <p-sidebar-group class="gap-3">
                                                        @for (group of navigationSubItem.items; track $index) {
                                                            <div class="">
                                                                <p-sidebar-group-label>{{ group.label }}</p-sidebar-group-label>
                                                                <p-sidebar-group-content>
                                                                    <p-sidebar-menu>
                                                                        @for (item of group.items; track $index) {
                                                                            <p-sidebar-menu-sub-item>
                                                                                <a pSidebarMenuButton [routerLink]="item.route" [isActive]="item.isActive" class="no-underline min-h-2rem">
                                                                                    <span>{{item.title}}</span>
                                                                                </a>
                                                                            </p-sidebar-menu-sub-item>
                                                                        }
                                                                    </p-sidebar-menu>
                                                                </p-sidebar-group-content>
                                                            </div>
                                                        }
                                                    </p-sidebar-group>
                                                </p-sidebar-menu-sub>
                                            </p-sidebar-menu-item>
                                        </p-sidebar-content>
                                    </p-sidebar-layout>
                                }
                            }
                        </p-sidebar-menu-sub>
                    }
                </p-sidebar-menu-item>
            }
        </p-sidebar-content>
        <p-sidebar-footer>
            <p-sidebar-menu class="">
                <p-sidebar-menu-item class="flex justify-content-between align-items-center surface-100 p-3 pb-2">
                    <conductor /><notification class="pt-1" />
                </p-sidebar-menu-item>
            </p-sidebar-menu>
        </p-sidebar-footer>
    </p-sidebar-panel>
</p-sidebar-layout>
`, styles: ["/* src/app/shared/components/side-navigation/side-navigation.scss */\n:host {\n  --p-sidebar-group-label-font-size: .7rem;\n  --p-sidebar-group-label-height: 1.5rem;\n  --p-sidebar-group-label-font-weight: 400;\n}\n/*# sourceMappingURL=side-navigation.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavigation, { className: "SideNavigation", filePath: "src/app/shared/components/side-navigation/side-navigation.ts", lineNumber: 19 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], hostAttrs: [1, "flex", "flex-column", "w-full", "h-full", "overflow-hidden"], decls: 8, vars: 0, consts: [["regularConfirmDialog", ""], [1, "flex", "gap-3", "w-full", "h-full", "overflow-hidden"], [1, "flex", "h-full", "fix-w-20rem"], [1, "flex", "flex-column", "w-full", "h-full", "overflow-hidden", "router-container"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "main-header");
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "side-navigation", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "p-confirmdialog", null, 0)(7, "p-toast");
    }
  }, dependencies: [RouterOutlet, SharedCoreModule, ConfirmDialog, Toast, MainHeader, SideNavigation], styles: ["\n.router-container[_ngcontent-%COMP%] {\n  background: var(--p-content-background);\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      SharedCoreModule,
      MainHeader,
      SideNavigation
    ], host: { class: "flex flex-column w-full h-full overflow-hidden" }, template: '<main-header />\r\n<div class="flex gap-3 w-full h-full overflow-hidden">\r\n    <side-navigation class="flex h-full fix-w-20rem" />\r\n    <div class="flex flex-column w-full h-full overflow-hidden router-container">\r\n        <router-outlet />\r\n    </div>\r\n</div>\r\n<p-confirmdialog #regularConfirmDialog>\r\n    <!-- <ng-template #footer>\r\n        <button pButton raised (click)="test(regularConfirmDialog)">Primary</button>\r\n    </ng-template> -->\r\n</p-confirmdialog>\r\n<p-toast />\r\n', styles: ["/* src/app/app.scss */\n.router-container {\n  background: var(--p-content-background);\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
