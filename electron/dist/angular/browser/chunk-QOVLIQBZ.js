import {
  COMPONENT_ITEMS
} from "./chunk-RIDKRWJE.js";
import {
  Store6 as Store3
} from "./chunk-I7ZYIMSW.js";
import {
  Store,
  Store2
} from "./chunk-SWDPWGAA.js";
import {
  inject
} from "./chunk-CNIBSPWC.js";

// src/app/shared/helpers/initializer.helper.ts
function initialize() {
  globalThis.runElectronCommand = (command, args) => {
    return globalThis.electronAPI.runCommand({ command, args }).then(({ data }) => data);
  };
}
async function load() {
  const settingsStore = inject(Store);
  const styleGuidStore = inject(Store3);
  initialize();
  const configurations = await globalThis.runElectronCommand("read-data", { target: "configurations" });
  settingsStore.initStore(configurations);
  styleGuidStore.initStore();
  return true;
}
function interceptor(request, next) {
  return next(request.clone({}));
}
var navigationResolver = ({ data, params }) => {
  let { state, header } = data;
  let name = `${state}`;
  if (state === "component-settings") {
    name = params["name"];
    const { title } = COMPONENT_ITEMS.find((node) => name === node.name) ?? { title: "Unknown" };
    header = `${title} Component`;
  }
  const store = inject(Store2);
  store.onNavigation(state, header, name);
};

export {
  load,
  interceptor,
  navigationResolver
};
//# sourceMappingURL=chunk-QOVLIQBZ.js.map
