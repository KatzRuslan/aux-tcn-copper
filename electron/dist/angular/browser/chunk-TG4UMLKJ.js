import {
  navigationResolver
} from "./chunk-KTSQR2W5.js";
import "./chunk-RIDKRWJE.js";
import "./chunk-RGXWWOJX.js";
import "./chunk-SWDPWGAA.js";
import "./chunk-O5OVYJU6.js";
import "./chunk-CNIBSPWC.js";
import "./chunk-RW4ES5HA.js";

// src/app/features/style-guide/style-guide.routes.ts
var routes = [
  {
    path: "color-palette",
    loadComponent: () => import("./chunk-VQR3TYAE.js"),
    title: "Aux TCN - Color Palette",
    data: { state: "color-palette", header: "Color Palette", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "border-radius",
    loadComponent: () => import("./chunk-WWFPW3A6.js"),
    title: "Aux TCN - Border Radius",
    data: { state: "border-radius", header: "Border Radius", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "define-semantic",
    loadComponent: () => import("./chunk-AL22JLTQ.js"),
    title: "Aux TCN - Define Semantic",
    data: { state: "define-semantic", header: "Define Semantic", parent: "style-guide" },
    resolve: [navigationResolver]
  },
  {
    path: "css-overrides",
    loadComponent: () => import("./chunk-W4LSQDDB.js"),
    title: "Aux TCN - Css Overrides",
    data: { state: "css-overrides", header: "Css Overrides", parent: "css-overrides" },
    resolve: [navigationResolver]
  },
  {
    path: "component-settings/:name",
    loadComponent: () => import("./chunk-5XPDSVUY.js"),
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
//# sourceMappingURL=chunk-TG4UMLKJ.js.map
