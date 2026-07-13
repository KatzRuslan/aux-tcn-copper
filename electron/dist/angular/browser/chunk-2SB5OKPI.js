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
    loadComponent: () => import("./chunk-24JDY6GC.js"),
    title: "Aux TCN - Color Palette",
    data: { state: "color-palette", header: "Color Palette", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "border-radius",
    loadComponent: () => import("./chunk-UGHTEYSC.js"),
    title: "Aux TCN - Border Radius",
    data: { state: "border-radius", header: "Border Radius", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "define-semantic",
    loadComponent: () => import("./chunk-HMYHQ3SS.js"),
    title: "Aux TCN - Define Semantic",
    data: { state: "define-semantic", header: "Define Semantic", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "css-overrides",
    loadComponent: () => import("./chunk-JSWQYLZ4.js"),
    title: "Aux TCN - Css Overrides",
    data: { state: "css-overrides", header: "Css Overrides", parent: "css-overrides" },
    resolve: [navigationResolver]
  },
  {
    path: "component-settings/:name",
    loadComponent: () => import("./chunk-JI6WLOF5.js"),
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
//# sourceMappingURL=chunk-2SB5OKPI.js.map
