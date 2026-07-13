import {
  navigationResolver
} from "./chunk-QOVLIQBZ.js";
import "./chunk-RIDKRWJE.js";
import "./chunk-I7ZYIMSW.js";
import "./chunk-SWDPWGAA.js";
import "./chunk-O5OVYJU6.js";
import "./chunk-CNIBSPWC.js";
import "./chunk-RW4ES5HA.js";

// src/app/features/style-guide/style-guide.routes.ts
var routes = [
  {
    path: "color-palette",
    loadComponent: () => import("./chunk-7UZDNJIX.js"),
    title: "Aux TCN - Color Palette",
    data: { state: "color-palette", header: "Color Palette", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "border-radius",
    loadComponent: () => import("./chunk-TBMANBHR.js"),
    title: "Aux TCN - Border Radius",
    data: { state: "border-radius", header: "Border Radius", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "define-semantic",
    loadComponent: () => import("./chunk-K4SGMRWO.js"),
    title: "Aux TCN - Define Semantic",
    data: { state: "define-semantic", header: "Define Semantic", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "css-overrides",
    loadComponent: () => import("./chunk-S2BHXSKS.js"),
    title: "Aux TCN - Css Overrides",
    data: { state: "css-overrides", header: "Css Overrides", parent: "css-overrides" },
    resolve: [navigationResolver]
  },
  {
    path: "component-settings/:name",
    loadComponent: () => import("./chunk-JQVWOCZT.js"),
    title: "Aux TCN - Component Settings Page",
    data: { state: "component-settings", header: "COMPONENT_SEARCH", parent: "style-guide" },
    resolve: [navigationResolver],
    canDeactivate: []
  }
  // { path: '', pathMatch: 'full', redirectTo: 'azure' },
];
export {
  routes
};
//# sourceMappingURL=chunk-VALM7M5U.js.map
