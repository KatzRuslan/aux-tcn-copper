import {
  AbstractControl,
  ConfirmationService,
  HttpClient,
  MessageService,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators,
  changeThemeMode,
  elementAcceptsMinMax,
  initAppHelperContext,
  isNativeFormElement,
  isPlatformBrowser,
  isTextualFormElement,
  selectValueAccessor,
  setNativeDomProperty,
  showConfirmDialog,
  showToastMessages,
  ɵFORM_CONTROL_INTEGRATION
} from "./chunk-O5OVYJU6.js";
import {
  APP_ID,
  CSP_NONCE,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  RuntimeError,
  SIGNAL,
  Subject,
  afterRenderEffect,
  assertInInjectionContext,
  catchError,
  computed,
  effect,
  finalize,
  formatRuntimeError,
  forwardRef,
  inject,
  input,
  isObservable,
  isSignal,
  linkedSignal,
  noop,
  runInInjectionContext,
  setClassMetadata,
  signal,
  tap,
  untracked,
  ɵɵControlFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-CNIBSPWC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RW4ES5HA.js";

// node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
 * @license Angular v22.0.4
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var boundPathDepth = 0;
function getBoundPathDepth() {
  return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
  return (...args) => {
    try {
      boundPathDepth = depth;
      return fn(...args);
    } finally {
      boundPathDepth = 0;
    }
  };
}
function shortCircuitFalse(value) {
  return !value;
}
function shortCircuitTrue(value) {
  return value;
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return (typeof value === "object" || typeof value === "function") && value != null;
}
var DYNAMIC = /* @__PURE__ */ Symbol();
var IGNORED = /* @__PURE__ */ Symbol();
var AbstractLogic = class {
  predicates;
  fns = [];
  constructor(predicates) {
    this.predicates = predicates;
  }
  push(logicFn) {
    this.fns.push(wrapWithPredicates(this.predicates, logicFn));
  }
  mergeIn(other) {
    const fns = this.predicates ? other.fns.map((fn) => wrapWithPredicates(this.predicates, fn)) : other.fns;
    this.fns.push(...fns);
  }
  hasRules() {
    return this.fns.length > 0;
  }
};
var BooleanOrLogic = class extends AbstractLogic {
  get defaultValue() {
    return false;
  }
  compute(arg) {
    return this.fns.some((f) => {
      const result = f(arg);
      return result && result !== IGNORED;
    });
  }
};
var ArrayMergeIgnoreLogic = class _ArrayMergeIgnoreLogic extends AbstractLogic {
  ignore;
  static ignoreNull(predicates) {
    return new _ArrayMergeIgnoreLogic(predicates, (e) => e === null);
  }
  constructor(predicates, ignore) {
    super(predicates);
    this.ignore = ignore;
  }
  get defaultValue() {
    return [];
  }
  compute(arg) {
    return this.fns.reduce((prev, f) => {
      const value = f(arg);
      if (value === void 0 || value === IGNORED) {
        return prev;
      } else if (isArray(value)) {
        return [...prev, ...this.ignore ? value.filter((e) => !this.ignore(e)) : value];
      } else {
        if (this.ignore && this.ignore(value)) {
          return prev;
        }
        return [...prev, value];
      }
    }, []);
  }
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
  constructor(predicates) {
    super(predicates, void 0);
  }
};
var MetadataMergeLogic = class extends AbstractLogic {
  key;
  get defaultValue() {
    return this.key.reducer.getInitial();
  }
  constructor(predicates, key) {
    super(predicates);
    this.key = key;
  }
  compute(ctx2) {
    if (this.fns.length === 0) {
      return this.key.reducer.getInitial();
    }
    let acc = this.key.reducer.getInitial();
    for (let i = 0; i < this.fns.length; i++) {
      const item = this.fns[i](ctx2);
      if (item !== IGNORED) {
        acc = this.key.reducer.reduce(acc, item);
      }
    }
    return acc;
  }
};
function wrapWithPredicates(predicates, logicFn) {
  if (predicates.length === 0) {
    return logicFn;
  }
  return (arg) => {
    for (const predicate of predicates) {
      let predicateField = arg.stateOf(predicate.path);
      const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
      for (let i = 0; i < depthDiff; i++) {
        predicateField = predicateField.structure.parent;
      }
      if (!predicate.fn(predicateField.context)) {
        return IGNORED;
      }
    }
    return logicFn(arg);
  };
}
var LogicContainer = class {
  predicates;
  hidden;
  disabledReasons;
  readonly;
  syncErrors;
  syncTreeErrors;
  asyncErrors;
  metadata = /* @__PURE__ */ new Map();
  constructor(predicates) {
    this.predicates = predicates;
    this.hidden = new BooleanOrLogic(predicates);
    this.disabledReasons = new ArrayMergeLogic(predicates);
    this.readonly = new BooleanOrLogic(predicates);
    this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
  }
  hasAnyLogic() {
    return this.hidden.hasRules() || this.disabledReasons.hasRules() || this.readonly.hasRules() || this.syncErrors.hasRules() || this.syncTreeErrors.hasRules() || this.asyncErrors.hasRules() || this.metadata.size > 0;
  }
  hasMetadata(key) {
    return this.metadata.has(key);
  }
  hasMetadataKeys() {
    return this.metadata.size > 0;
  }
  getMetadataKeys() {
    return this.metadata.keys();
  }
  getMetadata(key) {
    if (!this.metadata.has(key)) {
      this.metadata.set(key, new MetadataMergeLogic(this.predicates, key));
    }
    return this.metadata.get(key);
  }
  mergeIn(other) {
    this.hidden.mergeIn(other.hidden);
    this.disabledReasons.mergeIn(other.disabledReasons);
    this.readonly.mergeIn(other.readonly);
    this.syncErrors.mergeIn(other.syncErrors);
    this.syncTreeErrors.mergeIn(other.syncTreeErrors);
    this.asyncErrors.mergeIn(other.asyncErrors);
    for (const key of other.getMetadataKeys()) {
      const metadataLogic = other.metadata.get(key);
      this.getMetadata(key).mergeIn(metadataLogic);
    }
  }
};
var AbstractLogicNodeBuilder = class {
  depth;
  constructor(depth) {
    this.depth = depth;
  }
  build() {
    return new LeafLogicNode(this, [], 0);
  }
};
var LogicNodeBuilder = class _LogicNodeBuilder extends AbstractLogicNodeBuilder {
  constructor(depth) {
    super(depth);
  }
  current;
  all = [];
  addHiddenRule(logic) {
    this.getCurrent().addHiddenRule(logic);
  }
  addDisabledReasonRule(logic) {
    this.getCurrent().addDisabledReasonRule(logic);
  }
  addReadonlyRule(logic) {
    this.getCurrent().addReadonlyRule(logic);
  }
  addSyncErrorRule(logic) {
    this.getCurrent().addSyncErrorRule(logic);
  }
  addSyncTreeErrorRule(logic) {
    this.getCurrent().addSyncTreeErrorRule(logic);
  }
  addAsyncErrorRule(logic) {
    this.getCurrent().addAsyncErrorRule(logic);
  }
  addMetadataRule(key, logic) {
    this.getCurrent().addMetadataRule(key, logic);
  }
  getChild(key) {
    if (key === DYNAMIC) {
      const children = this.getCurrent().children;
      if (children.size > (children.has(DYNAMIC) ? 1 : 0)) {
        this.current = void 0;
      }
    }
    return this.getCurrent().getChild(key);
  }
  hasLogic(builder) {
    if (this === builder) {
      return true;
    }
    return this.all.some(({
      builder: subBuilder
    }) => subBuilder.hasLogic(builder));
  }
  hasRules() {
    return this.all.length > 0;
  }
  anyChildHasLogic() {
    return this.all.some(({
      builder
    }) => builder.anyChildHasLogic());
  }
  mergeIn(other, predicate) {
    if (predicate) {
      this.all.push({
        builder: other,
        predicate: {
          fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
          path: predicate.path
        }
      });
    } else {
      this.all.push({
        builder: other
      });
    }
    this.current = void 0;
  }
  getCurrent() {
    if (this.current === void 0) {
      this.current = new NonMergeableLogicNodeBuilder(this.depth);
      this.all.push({
        builder: this.current
      });
    }
    return this.current;
  }
  static newRoot() {
    return new _LogicNodeBuilder(0);
  }
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
  logic = new LogicContainer([]);
  children = /* @__PURE__ */ new Map();
  constructor(depth) {
    super(depth);
  }
  addHiddenRule(logic) {
    this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addDisabledReasonRule(logic) {
    this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addReadonlyRule(logic) {
    this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncErrorRule(logic) {
    this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addSyncTreeErrorRule(logic) {
    this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addAsyncErrorRule(logic) {
    this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
  }
  addMetadataRule(key, logic) {
    this.logic.getMetadata(key).push(setBoundPathDepthForResolution(logic, this.depth));
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new LogicNodeBuilder(this.depth + 1));
    }
    return this.children.get(key);
  }
  hasLogic(builder) {
    return this === builder;
  }
  hasRules() {
    return this.logic.hasAnyLogic() || this.children.size > 0;
  }
  anyChildHasLogic() {
    for (const child of this.children.values()) {
      if (child.hasRules()) {
        return true;
      }
    }
    return false;
  }
};
var LeafLogicNode = class _LeafLogicNode {
  builder;
  predicates;
  depth;
  logic;
  constructor(builder, predicates, depth) {
    this.builder = builder;
    this.predicates = predicates;
    this.depth = depth;
    this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
  }
  getChild(key) {
    const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
    if (childBuilders.length === 0) {
      return new _LeafLogicNode(void 0, [], this.depth + 1);
    } else if (childBuilders.length === 1) {
      const {
        builder,
        predicates
      } = childBuilders[0];
      return new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1);
    } else {
      const builtNodes = childBuilders.map(({
        builder,
        predicates
      }) => new _LeafLogicNode(builder, [...this.predicates, ...predicates.map((p) => bindLevel(p, this.depth))], this.depth + 1));
      return new CompositeLogicNode(builtNodes);
    }
  }
  hasLogic(builder) {
    if (!this.builder) {
      return false;
    }
    return this.builder.hasLogic(builder);
  }
  hasRules() {
    return this.builder ? this.builder.hasRules() : false;
  }
  anyChildHasLogic() {
    return this.builder ? this.builder.anyChildHasLogic() : false;
  }
};
var CompositeLogicNode = class _CompositeLogicNode {
  all;
  logic;
  constructor(all) {
    this.all = all;
    this.logic = new LogicContainer([]);
    for (const node of all) {
      this.logic.mergeIn(node.logic);
    }
  }
  getChild(key) {
    return new _CompositeLogicNode(this.all.flatMap((child) => child.getChild(key)));
  }
  hasLogic(builder) {
    return this.all.some((node) => node.hasLogic(builder));
  }
  hasRules() {
    return this.all.some((node) => node.hasRules());
  }
  anyChildHasLogic() {
    return this.all.some((child) => child.anyChildHasLogic());
  }
};
function getAllChildBuilders(builder, key) {
  if (builder instanceof LogicNodeBuilder) {
    return builder.all.flatMap(({
      builder: builder2,
      predicate
    }) => {
      const children = getAllChildBuilders(builder2, key);
      if (predicate) {
        return children.map(({
          builder: builder3,
          predicates
        }) => ({
          builder: builder3,
          predicates: [...predicates, predicate]
        }));
      }
      return children;
    });
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    return [...key !== DYNAMIC && builder.children.has(DYNAMIC) ? [{
      builder: builder.getChild(DYNAMIC),
      predicates: []
    }] : [], ...builder.children.has(key) ? [{
      builder: builder.getChild(key),
      predicates: []
    }] : []];
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
}
function createLogic(builder, predicates, depth) {
  const logic = new LogicContainer(predicates);
  if (builder instanceof LogicNodeBuilder) {
    const builtNodes = builder.all.map(({
      builder: builder2,
      predicate
    }) => new LeafLogicNode(builder2, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
    for (const node of builtNodes) {
      logic.mergeIn(node.logic);
    }
  } else if (builder instanceof NonMergeableLogicNodeBuilder) {
    logic.mergeIn(builder.logic);
  } else {
    throw new RuntimeError(1909, ngDevMode && "Unknown LogicNodeBuilder type");
  }
  return logic;
}
function bindLevel(predicate, depth) {
  return __spreadProps(__spreadValues({}, predicate), {
    depth
  });
}
var PATH = /* @__PURE__ */ Symbol("PATH");
var FieldPathNode = class _FieldPathNode {
  keys;
  parent;
  keyInParent;
  root;
  children = /* @__PURE__ */ new Map();
  fieldPathProxy = new Proxy(this, FIELD_PATH_PROXY_HANDLER);
  logicBuilder;
  constructor(keys, root, parent, keyInParent) {
    this.keys = keys;
    this.parent = parent;
    this.keyInParent = keyInParent;
    this.root = root ?? this;
    if (!parent) {
      this.logicBuilder = LogicNodeBuilder.newRoot();
    }
  }
  get builder() {
    if (this.logicBuilder) {
      return this.logicBuilder;
    }
    return this.parent.builder.getChild(this.keyInParent);
  }
  getChild(key) {
    if (!this.children.has(key)) {
      this.children.set(key, new _FieldPathNode([...this.keys, key], this.root, this, key));
    }
    return this.children.get(key);
  }
  mergeIn(other, predicate) {
    const path = other.compile();
    this.builder.mergeIn(path.builder, predicate);
  }
  static unwrapFieldPath(formPath) {
    return formPath[PATH];
  }
  static newRoot() {
    return new _FieldPathNode([], void 0, void 0, void 0);
  }
};
var FIELD_PATH_PROXY_HANDLER = {
  get(node, property) {
    if (property === PATH) {
      return node;
    }
    return node.getChild(property).fieldPathProxy;
  }
};
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class _SchemaImpl {
  schemaFn;
  constructor(schemaFn) {
    this.schemaFn = schemaFn;
  }
  compile() {
    if (compiledSchemas.has(this)) {
      return compiledSchemas.get(this);
    }
    const path = FieldPathNode.newRoot();
    compiledSchemas.set(this, path);
    let prevCompilingNode = currentCompilingNode;
    try {
      currentCompilingNode = path;
      this.schemaFn(path.fieldPathProxy);
    } finally {
      currentCompilingNode = prevCompilingNode;
    }
    return path;
  }
  static create(schema2) {
    if (schema2 instanceof _SchemaImpl) {
      return schema2;
    }
    return new _SchemaImpl(schema2);
  }
  static rootCompile(schema2) {
    try {
      compiledSchemas.clear();
      if (schema2 === void 0) {
        return FieldPathNode.newRoot();
      }
      if (schema2 instanceof _SchemaImpl) {
        return schema2.compile();
      }
      return new _SchemaImpl(schema2).compile();
    } finally {
      compiledSchemas.clear();
    }
  }
};
function isSchemaOrSchemaFn(value) {
  return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
  if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) {
    throw new RuntimeError(1908, ngDevMode && `A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
  }
}
function metadata(path, key, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addMetadataRule(key, logic);
  return key;
}
var MetadataReducer = {
  list() {
    return {
      reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
      getInitial: () => []
    };
  },
  min() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item < acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  max() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item > acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  or() {
    return {
      reduce: (prev, next) => prev || next,
      getInitial: () => false
    };
  },
  and() {
    return {
      reduce: (prev, next) => prev && next,
      getInitial: () => true
    };
  },
  override
};
function override(getInitial) {
  return {
    reduce: (_, item) => item,
    getInitial: () => getInitial?.()
  };
}
var IS_ASYNC_VALIDATION_RESOURCE = /* @__PURE__ */ Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
  reducer;
  create;
  brand;
  [IS_ASYNC_VALIDATION_RESOURCE];
  constructor(reducer, create) {
    this.reducer = reducer;
    this.create = create;
  }
};
function createMetadataKey(reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createLimitSelectionKey() {
  return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) return false;
  }
  return true;
}
function calculateValidationSelfStatus(state) {
  if (state.errors().length > 0) {
    return "invalid";
  }
  if (state.pending()) {
    return "unknown";
  }
  return "valid";
}
var FieldValidationState = class {
  node;
  constructor(node) {
    this.node = node;
  }
  rawSyncTreeErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? []];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rawSyncTreeErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  syncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.syncErrors.compute(this.node.context), ...this.syncTreeErrors(), ...normalizeErrors(this.node.submitState.submissionErrors())];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "syncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  syncValid = computed(() => {
    if (this.shouldSkipValidation()) {
      return true;
    }
    return this.node.structure.reduceChildren(this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
  }, ...ngDevMode ? [{
    debugName: "syncValid"
  }] : []);
  syncTreeErrors = computed(() => this.rawSyncTreeErrors().filter((err) => err.fieldTree === this.node.fieldTree), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "syncTreeErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  rawAsyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return [...this.node.logicNode.logic.asyncErrors.compute(this.node.context), ...this.node.structure.parent?.validationState.rawAsyncErrors() ?? []];
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rawAsyncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  asyncErrors = computed(() => {
    if (this.shouldSkipValidation()) {
      return [];
    }
    return this.rawAsyncErrors().filter((err) => err === "pending" || err.fieldTree === this.node.fieldTree);
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "asyncErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  parseErrors = computed(() => this.node.formFieldBindings().flatMap((field) => field.parseErrors()), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => [...this.parseErrors(), ...this.syncErrors(), ...this.asyncErrors().filter((err) => err !== "pending")], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errorSummary = computed(() => {
    const errors = this.node.structure.reduceChildren(this.errors(), (child, result) => [...result, ...child.errorSummary()]);
    if (true) {
      untracked(() => errors.sort(compareErrorPosition));
    }
    return errors;
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errorSummary"
  } : {}), {
    equal: shallowArrayEquals
  }));
  pending = computed(() => this.node.structure.reduceChildren(this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.asyncErrors().includes("pending")), ...ngDevMode ? [{
    debugName: "pending"
  }] : []);
  status = computed(() => {
    if (this.shouldSkipValidation()) {
      return "valid";
    }
    let ownStatus = calculateValidationSelfStatus(this);
    return this.node.structure.reduceChildren(ownStatus, (child, value) => {
      if (value === "invalid" || child.validationState.status() === "invalid") {
        return "invalid";
      } else if (value === "unknown" || child.validationState.status() === "unknown") {
        return "unknown";
      }
      return "valid";
    }, (v) => v === "invalid");
  }, ...ngDevMode ? [{
    debugName: "status"
  }] : []);
  valid = computed(() => this.status() === "valid", ...ngDevMode ? [{
    debugName: "valid"
  }] : []);
  invalid = computed(() => this.status() === "invalid", ...ngDevMode ? [{
    debugName: "invalid"
  }] : []);
  shouldSkipValidation = computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly() || this.node.structure.isOrphaned(), ...ngDevMode ? [{
    debugName: "shouldSkipValidation"
  }] : []);
};
function normalizeErrors(error) {
  if (error === void 0) {
    return [];
  }
  if (isArray(error)) {
    return error;
  }
  return [error];
}
function addDefaultField(errors, fieldTree) {
  if (isArray(errors)) {
    for (const error of errors) {
      error.fieldTree ??= fieldTree;
    }
  } else if (errors) {
    errors.fieldTree ??= fieldTree;
  }
  return errors;
}
function getFirstBoundElement(error) {
  if (error.formField) return error.formField.element;
  return error.fieldTree().formFieldBindings().reduce((el, binding) => {
    if (!el || !binding.element) return el ?? binding.element;
    return el.compareDocumentPosition(binding.element) & Node.DOCUMENT_POSITION_PRECEDING ? binding.element : el;
  }, void 0);
}
function compareErrorPosition(a, b) {
  const aEl = getFirstBoundElement(a);
  const bEl = getFirstBoundElement(b);
  if (aEl === bEl) return 0;
  if (aEl === void 0 || bEl === void 0) return aEl === void 0 ? 1 : -1;
  return aEl.compareDocumentPosition(bEl) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
}
var DEBOUNCER = createMetadataKey();
var FieldNodeContext = class {
  node;
  cache = /* @__PURE__ */ new WeakMap();
  constructor(node) {
    this.node = node;
    this.fieldTreeOf = this.fieldTreeOf.bind(this);
    this.stateOf = this.stateOf.bind(this);
  }
  resolve(target) {
    if (!this.cache.has(target)) {
      const resolver = computed(() => {
        const targetPathNode = FieldPathNode.unwrapFieldPath(target);
        let field = this.node;
        let stepsRemaining = getBoundPathDepth();
        while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.builder)) {
          stepsRemaining--;
          field = field.structure.parent;
          if (field === void 0) {
            throw new RuntimeError(1900, ngDevMode && "Path is not part of this field tree.");
          }
        }
        for (let key of targetPathNode.keys) {
          field = field.structure.getChild(key);
          if (field === void 0) {
            throw new RuntimeError(1901, ngDevMode && `Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
          }
        }
        return field.fieldTree;
      }, ...ngDevMode ? [{
        debugName: "resolver"
      }] : []);
      this.cache.set(target, resolver);
    }
    return this.cache.get(target)();
  }
  get fieldTree() {
    return this.node.fieldProxy;
  }
  get state() {
    return this.node;
  }
  get value() {
    return this.node.structure.value;
  }
  get key() {
    return this.node.structure.keyInParent;
  }
  get pathKeys() {
    return this.node.structure.pathKeys;
  }
  index = computed(() => {
    const key = this.key();
    if (!isArray(untracked(this.node.structure.parent.value))) {
      throw new RuntimeError(1906, ngDevMode && "Cannot access index, parent field is not an array.");
    }
    return Number(key);
  }, ...ngDevMode ? [{
    debugName: "index"
  }] : []);
  fieldTreeOf(p) {
    return this.resolve(p);
  }
  stateOf(p) {
    return this.resolve(p)();
  }
  valueOf = (p) => {
    const result = this.resolve(p)().value();
    if (result instanceof AbstractControl) {
      throw new RuntimeError(1907, ngDevMode && `Tried to read an 'AbstractControl' value from a 'form()'. Did you mean to use 'compatForm()' instead?`);
    }
    return result;
  };
};
var FieldMetadataState = class {
  node;
  metadata = /* @__PURE__ */ new Map();
  constructor(node) {
    this.node = node;
  }
  runMetadataCreateLifecycle() {
    if (!this.node.logicNode.logic.hasMetadataKeys()) {
      return;
    }
    untracked(() => runInInjectionContext(this.node.structure.injector, () => {
      for (const key of this.node.logicNode.logic.getMetadataKeys()) {
        if (key.create) {
          const logic = this.node.logicNode.logic.getMetadata(key);
          const result = key.create(this.node, computed(() => logic.compute(this.node.context)));
          this.metadata.set(key, result);
        }
      }
    }));
  }
  get(key) {
    if (this.has(key)) {
      if (!this.metadata.has(key)) {
        if (key.create) {
          throw new RuntimeError(1912, ngDevMode && "Managed metadata cannot be created lazily");
        }
        const logic = this.node.logicNode.logic.getMetadata(key);
        this.metadata.set(key, computed(() => logic.compute(this.node.context)));
      }
    }
    return this.metadata.get(key);
  }
  has(key) {
    return this.node.logicNode.logic.hasMetadata(key);
  }
};
var FIELD_PROXY_HANDLER = {
  get(getTgt, p, receiver) {
    const tgt = getTgt();
    const child = tgt.structure.getChild(p);
    if (child !== void 0) {
      return child.fieldTree;
    }
    const value = untracked(tgt.value);
    if (isArray(value)) {
      if (p === "length") {
        return tgt.value().length;
      }
      if (p === Symbol.iterator) {
        return () => {
          tgt.value();
          return Array.prototype[Symbol.iterator].apply(tgt.fieldTree);
        };
      }
    }
    if (isObject(value)) {
      if (p === Symbol.iterator) {
        return function* () {
          for (const key in receiver) {
            yield [key, receiver[key]];
          }
        };
      }
    }
    return void 0;
  },
  getOwnPropertyDescriptor(getTgt, prop) {
    const value = untracked(getTgt().value);
    const desc = Reflect.getOwnPropertyDescriptor(value, prop);
    if (desc && !desc.configurable) {
      desc.configurable = true;
    }
    return desc;
  },
  ownKeys(getTgt) {
    const value = untracked(getTgt().value);
    return typeof value === "object" && value !== null ? Reflect.ownKeys(value) : [];
  }
};
function deepSignal(source, prop) {
  const read = computed(() => source()[prop()]);
  read[SIGNAL] = source[SIGNAL];
  read.set = (value) => {
    if (Object.is(untracked(read), value)) {
      return;
    }
    source.update((current) => valueForWrite(current, value, prop()));
  };
  read.update = (fn) => {
    read.set(fn(untracked(read)));
  };
  read.asReadonly = () => read;
  return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
  if (isArray(sourceValue)) {
    const newValue = [...sourceValue];
    newValue[prop] = newPropValue;
    return newValue;
  } else {
    return __spreadProps(__spreadValues({}, sourceValue), {
      [prop]: newPropValue
    });
  }
}
var ORPHAN_TOKEN = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "ORPHAN_TOKEN" : "");
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE_SIGNAL"
}] : []);
var FieldNodeStructure = class {
  logic;
  node;
  createChildNode;
  identitySymbol = /* @__PURE__ */ Symbol();
  _injector = void 0;
  _anyChildHasLogic;
  get injector() {
    this._injector ??= Injector.create({
      providers: [],
      parent: this.fieldManager.injector
    });
    return this._injector;
  }
  constructor(logic, node, createChildNode) {
    this.logic = logic;
    this.node = node;
    this.createChildNode = createChildNode;
  }
  children() {
    this.ensureChildrenMap();
    const map2 = this.childrenMap();
    if (map2 === void 0) {
      return [];
    }
    return Array.from(map2.byPropertyKey.values()).map((child) => untracked(child.reader));
  }
  materializedChildren() {
    const map2 = this.childrenMap();
    if (map2 === void 0) {
      return [];
    }
    return Array.from(map2.byPropertyKey.values()).map((child) => child.node);
  }
  _areChildrenMaterialized() {
    return untracked(this.childrenMap) !== void 0;
  }
  ensureChildrenMap() {
    if (this._areChildrenMaterialized()) {
      return;
    }
    untracked(() => {
      this.childrenMap.update((current) => this.computeChildrenMap(this.value(), current, true));
    });
  }
  getChild(key) {
    this.ensureChildrenMap();
    const strKey = key.toString();
    let reader = untracked(this.childrenMap)?.byPropertyKey.get(strKey)?.reader;
    if (!reader) {
      reader = this.createReader(strKey);
    }
    return reader();
  }
  reduceChildren(initialValue, fn, shortCircuit) {
    const map2 = this.childrenMap();
    if (!map2) {
      return initialValue;
    }
    let value = initialValue;
    for (const child of map2.byPropertyKey.values()) {
      if (shortCircuit?.(value)) {
        break;
      }
      value = fn(untracked(child.reader), value);
    }
    return value;
  }
  destroy() {
    this.injector.destroy();
  }
  createKeyOrOrphanSignals(kind, identityInParent, initialKeyInParent) {
    if (kind === "root") {
      return {
        keyInParent: ROOT_KEY_IN_PARENT,
        isOrphaned: FALSE_SIGNAL
      };
    }
    const parent = this.parent;
    let lastKnownKey = initialKeyInParent;
    const keyOrOrphan = computed(() => {
      if (parent.structure.isOrphaned()) {
        return ORPHAN_TOKEN;
      }
      const map2 = parent.structure.childrenMap();
      if (!map2) {
        return ORPHAN_TOKEN;
      }
      const lastKnownChild = map2.byPropertyKey.get(lastKnownKey);
      if (lastKnownChild && lastKnownChild.node === this.node) {
        return lastKnownKey;
      }
      if (identityInParent === void 0) {
        return ORPHAN_TOKEN;
      } else {
        for (const [key, child] of map2.byPropertyKey) {
          if (child.node === this.node) {
            return lastKnownKey = key;
          }
        }
        return ORPHAN_TOKEN;
      }
    }, ...ngDevMode ? [{
      debugName: "keyOrOrphan"
    }] : []);
    const isOrphaned = computed(() => keyOrOrphan() === ORPHAN_TOKEN, ...ngDevMode ? [{
      debugName: "isOrphaned"
    }] : []);
    const keyInParent = computed(() => {
      const key = keyOrOrphan();
      if (key === ORPHAN_TOKEN) {
        if (identityInParent === void 0) {
          throw new RuntimeError(-1902, ngDevMode && `Orphan field, looking for property '${initialKeyInParent}' of ${getDebugName(parent)}`);
        } else {
          throw new RuntimeError(1904, ngDevMode && `Orphan field, can't find element in array ${getDebugName(parent)}`);
        }
      }
      return key;
    }, ...ngDevMode ? [{
      debugName: "keyInParent"
    }] : []);
    return {
      keyInParent,
      isOrphaned
    };
  }
  createChildrenMap() {
    return linkedSignal({
      source: this.value,
      computation: (value, previous) => this.computeChildrenMap(value, previous?.value, false)
    });
  }
  computeChildrenMap(value, prevData, forceMaterialize) {
    if (!isObject(value)) {
      return void 0;
    }
    if (!forceMaterialize && prevData === void 0) {
      if (!(this._anyChildHasLogic ??= this.logic.anyChildHasLogic())) {
        return void 0;
      }
    }
    prevData ??= {
      byPropertyKey: /* @__PURE__ */ new Map()
    };
    let materializedChildren;
    const parentIsArray = isArray(value);
    if (prevData !== void 0) {
      if (parentIsArray) {
        materializedChildren = maybeRemoveStaleArrayFields(prevData, value, this.identitySymbol);
      } else {
        materializedChildren = maybeRemoveStaleObjectFields(prevData, value);
      }
    }
    for (const key of Object.keys(value)) {
      let trackingKey = void 0;
      const childValue = value[key];
      if (childValue === void 0) {
        if (prevData.byPropertyKey.has(key)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byPropertyKey.delete(key);
        }
        continue;
      }
      if (parentIsArray && isObject(childValue) && !isArray(childValue)) {
        trackingKey = childValue[this.identitySymbol] ??= /* @__PURE__ */ Symbol(ngDevMode ? `id:${globalId++}` : "");
      }
      let childNode;
      if (trackingKey) {
        if (!prevData.byTrackingKey?.has(trackingKey)) {
          materializedChildren ??= __spreadValues({}, prevData);
          materializedChildren.byTrackingKey ??= /* @__PURE__ */ new Map();
          materializedChildren.byTrackingKey.set(trackingKey, this.createChildNode(key, trackingKey, parentIsArray));
        }
        childNode = (materializedChildren ?? prevData).byTrackingKey.get(trackingKey);
      }
      const child = prevData.byPropertyKey.get(key);
      if (child === void 0) {
        materializedChildren ??= __spreadValues({}, prevData);
        materializedChildren.byPropertyKey.set(key, {
          reader: this.createReader(key),
          node: childNode ?? this.createChildNode(key, trackingKey, parentIsArray)
        });
      } else if (childNode && childNode !== child.node) {
        materializedChildren ??= __spreadValues({}, prevData);
        child.node = childNode;
      }
    }
    return materializedChildren ?? prevData;
  }
  createReader(key) {
    return computed(() => this.childrenMap()?.byPropertyKey.get(key)?.node);
  }
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
  fieldManager;
  value;
  get parent() {
    return void 0;
  }
  get root() {
    return this.node;
  }
  get pathKeys() {
    return ROOT_PATH_KEYS;
  }
  get keyInParent() {
    return ROOT_KEY_IN_PARENT;
  }
  isOrphaned = FALSE_SIGNAL;
  childrenMap;
  constructor(node, logic, fieldManager, value, createChildNode) {
    super(logic, node, createChildNode);
    this.fieldManager = fieldManager;
    this.value = value;
    this.childrenMap = this.createChildrenMap();
  }
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
  logic;
  parent;
  root;
  pathKeys;
  keyInParent;
  value;
  childrenMap;
  isOrphaned;
  get fieldManager() {
    return this.root.structure.fieldManager;
  }
  constructor(node, logic, parent, identityInParent, initialKeyInParent, createChildNode) {
    super(logic, node, createChildNode);
    this.logic = logic;
    this.parent = parent;
    this.root = this.parent.structure.root;
    const signals = this.createKeyOrOrphanSignals("child", identityInParent, initialKeyInParent);
    this.isOrphaned = signals.isOrphaned;
    this.keyInParent = signals.keyInParent;
    this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...ngDevMode ? [{
      debugName: "pathKeys"
    }] : []);
    this.value = deepSignal(this.parent.structure.value, this.keyInParent);
    this.childrenMap = this.createChildrenMap();
    this.fieldManager.structures.add(this);
  }
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{
  debugName: "ROOT_PATH_KEYS"
}] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
  throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{
  debugName: "ROOT_KEY_IN_PARENT"
}] : []);
function getDebugName(node) {
  return `<root>.${node.structure.pathKeys().join(".")}`;
}
function maybeRemoveStaleArrayFields(prevData, value, identitySymbol) {
  let data;
  const oldKeys = new Set(prevData.byPropertyKey.keys());
  const oldTracking = new Set(prevData.byTrackingKey?.keys());
  for (let i = 0; i < value.length; i++) {
    const childValue = value[i];
    oldKeys.delete(i.toString());
    if (isObject(childValue) && childValue.hasOwnProperty(identitySymbol)) {
      oldTracking.delete(childValue[identitySymbol]);
    }
  }
  if (oldKeys.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const key of oldKeys) {
      data.byPropertyKey.delete(key);
    }
  }
  if (oldTracking.size > 0) {
    data ??= __spreadValues({}, prevData);
    for (const id of oldTracking) {
      data.byTrackingKey?.delete(id);
    }
  }
  return data;
}
function maybeRemoveStaleObjectFields(prevData, value) {
  let data;
  for (const key of prevData.byPropertyKey.keys()) {
    if (!value.hasOwnProperty(key)) {
      data ??= __spreadValues({}, prevData);
      data.byPropertyKey.delete(key);
    }
  }
  return data;
}
var FieldSubmitState = class {
  node;
  selfSubmitting = signal(false, ...ngDevMode ? [{
    debugName: "selfSubmitting"
  }] : []);
  submissionErrors;
  constructor(node) {
    this.node = node;
    this.submissionErrors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "submissionErrors"
    } : {}), {
      source: this.node.structure.value,
      computation: () => []
    }));
  }
  submitting = computed(() => {
    return this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? false);
  }, ...ngDevMode ? [{
    debugName: "submitting"
  }] : []);
};
var FieldNode = class {
  structure;
  validationState;
  metadataState;
  nodeState;
  submitState;
  fieldAdapter;
  controlValue;
  _context = void 0;
  get context() {
    return this._context ??= new FieldNodeContext(this);
  }
  fieldProxy = new Proxy(() => this, FIELD_PROXY_HANDLER);
  pathNode;
  constructor(options) {
    this.pathNode = options.pathNode;
    this.fieldAdapter = options.fieldAdapter;
    this.structure = this.fieldAdapter.createStructure(this, options);
    this.validationState = this.fieldAdapter.createValidationState(this, options);
    this.nodeState = this.fieldAdapter.createNodeState(this, options);
    this.metadataState = new FieldMetadataState(this);
    this.submitState = new FieldSubmitState(this);
    this.controlValue = this.controlValueSignal();
    this.metadataState.runMetadataCreateLifecycle();
  }
  focusBoundControl(options) {
    this.getBindingForFocus()?.focus(options);
  }
  getBindingForFocus() {
    const own = this.formFieldBindings().filter((b) => b.focus !== void 0).reduce(firstInDom, void 0);
    if (own) return own;
    return this.structure.children().map((child) => child.getBindingForFocus()).reduce(firstInDom, void 0);
  }
  pendingSync = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "pendingSync"
  } : {}), {
    source: () => this.value(),
    computation: (_source, previous) => {
      previous?.value?.abort();
      return void 0;
    }
  }));
  get fieldTree() {
    return this.fieldProxy;
  }
  get logicNode() {
    return this.structure.logic;
  }
  get value() {
    return this.structure.value;
  }
  get keyInParent() {
    return this.structure.keyInParent;
  }
  get errors() {
    return this.validationState.errors;
  }
  get parseErrors() {
    return this.validationState.parseErrors;
  }
  get errorSummary() {
    return this.validationState.errorSummary;
  }
  get pending() {
    return this.validationState.pending;
  }
  get valid() {
    return this.validationState.valid;
  }
  get invalid() {
    return this.validationState.invalid;
  }
  get dirty() {
    return this.nodeState.dirty;
  }
  get touched() {
    return this.nodeState.touched;
  }
  get disabled() {
    return this.nodeState.disabled;
  }
  get disabledReasons() {
    return this.nodeState.disabledReasons;
  }
  get hidden() {
    return this.nodeState.hidden;
  }
  get readonly() {
    return this.nodeState.readonly;
  }
  get formFieldBindings() {
    return this.nodeState.formFieldBindings;
  }
  get submitting() {
    return this.submitState.submitting;
  }
  get name() {
    return this.nodeState.name;
  }
  get max() {
    const maxKey = this.metadata(MAX)?.();
    return maxKey ? this.metadata(maxKey) : void 0;
  }
  get maxLength() {
    return this.metadata(MAX_LENGTH);
  }
  get min() {
    const minKey = this.metadata(MIN)?.();
    return minKey ? this.metadata(minKey) : void 0;
  }
  get minLength() {
    return this.metadata(MIN_LENGTH);
  }
  get pattern() {
    return this.metadata(PATTERN) ?? EMPTY2;
  }
  get required() {
    return this.metadata(REQUIRED) ?? FALSE;
  }
  metadata(key) {
    return this.metadataState.get(key);
  }
  getError(kind) {
    return this.errors().find((e) => e.kind === kind);
  }
  hasMetadata(key) {
    return this.metadataState.has(key);
  }
  markAsTouched(options) {
    if (this.structure.isOrphaned()) {
      return;
    }
    untracked(() => {
      this.markAsTouchedInternal(options);
      this.flushSync();
    });
  }
  markAsTouchedInternal(options) {
    if (this.structure.isOrphaned()) {
      return;
    }
    if (this.validationState.shouldSkipValidation()) {
      return;
    }
    this.nodeState.markAsTouched();
    if (options?.skipDescendants) {
      return;
    }
    for (const child of this.structure.children()) {
      child.markAsTouchedInternal();
    }
  }
  markAsDirty() {
    this.nodeState.markAsDirty();
  }
  markAsPristine() {
    this.nodeState.markAsPristine();
  }
  markAsUntouched() {
    this.nodeState.markAsUntouched();
  }
  reset(value) {
    untracked(() => this._reset(value));
  }
  _reset(value) {
    this.pendingSync()?.abort();
    if (value !== void 0) {
      this.value.set(value);
    }
    this.controlValue.rawSet(this.value());
    this.nodeState.markAsUntouched();
    this.nodeState.markAsPristine();
    for (const binding of this.formFieldBindings()) {
      binding.reset();
    }
    for (const child of this.structure.materializedChildren()) {
      child._reset();
    }
  }
  reloadValidation() {
    untracked(() => this._reloadValidation());
  }
  _reloadValidation() {
    const keys = this.logicNode.logic.getMetadataKeys();
    for (const key of keys) {
      if (key[IS_ASYNC_VALIDATION_RESOURCE]) {
        const resource2 = this.metadata(key);
        resource2.reload?.();
      }
    }
    for (const child of this.structure.children()) {
      child._reloadValidation();
    }
  }
  controlValueSignal() {
    const controlValue = linkedSignal(this.value);
    controlValue.rawSet = controlValue.set;
    controlValue.set = (newValue) => {
      controlValue.rawSet(newValue);
      this.markAsDirty();
      this.debounceSync();
    };
    const rawUpdate = controlValue.update;
    controlValue.update = (updateFn) => {
      rawUpdate(updateFn);
      this.markAsDirty();
      this.debounceSync();
    };
    return controlValue;
  }
  sync() {
    this.value.set(this.controlValue());
  }
  flushSync() {
    const pending = this.pendingSync();
    if (pending && !pending.signal.aborted) {
      pending.abort();
      this.sync();
    }
  }
  async debounceSync() {
    const debouncer = untracked(() => {
      this.pendingSync()?.abort();
      return this.nodeState.debouncer();
    });
    if (debouncer) {
      const controller = new AbortController();
      const promise = debouncer(controller.signal);
      if (promise) {
        this.pendingSync.set(controller);
        await promise;
        if (controller.signal.aborted) {
          return;
        }
      }
    }
    if (this.structure.isOrphaned()) {
      return;
    }
    this.sync();
  }
  static newRoot(fieldManager, value, pathNode, adapter) {
    return adapter.newRoot(fieldManager, value, pathNode, adapter);
  }
  createStructure(options) {
    return options.kind === "root" ? new RootFieldNodeStructure(this, options.logic, options.fieldManager, options.value, this.newChild.bind(this)) : new ChildFieldNodeStructure(this, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, this.newChild.bind(this));
  }
  newChild(key, trackingId, isArray2) {
    let childPath;
    let childLogic;
    if (isArray2) {
      childPath = this.pathNode.getChild(DYNAMIC);
      childLogic = this.structure.logic.getChild(DYNAMIC);
    } else {
      childPath = this.pathNode.getChild(key);
      childLogic = this.structure.logic.getChild(key);
    }
    return this.fieldAdapter.newChild({
      kind: "child",
      parent: this,
      pathNode: childPath,
      logic: childLogic,
      initialKeyInParent: key,
      identityInParent: trackingId,
      fieldAdapter: this.fieldAdapter
    });
  }
};
var EMPTY2 = computed(() => [], ...ngDevMode ? [{
  debugName: "EMPTY"
}] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE"
}] : []);
function firstInDom(a, b) {
  if (!a) return b;
  if (!b) return a;
  const position = a.element.compareDocumentPosition(b.element);
  return position & Node.DOCUMENT_POSITION_PRECEDING ? b : a;
}
var FieldNodeState = class {
  node;
  selfTouched = signal(false, ...ngDevMode ? [{
    debugName: "selfTouched"
  }] : []);
  selfDirty = signal(false, ...ngDevMode ? [{
    debugName: "selfDirty"
  }] : []);
  markAsTouched() {
    this.selfTouched.set(true);
  }
  markAsDirty() {
    this.selfDirty.set(true);
  }
  markAsPristine() {
    this.selfDirty.set(false);
  }
  markAsUntouched() {
    this.selfTouched.set(false);
  }
  formFieldBindings = signal([], ...ngDevMode ? [{
    debugName: "formFieldBindings"
  }] : []);
  constructor(node) {
    this.node = node;
  }
  dirty = computed(() => {
    const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "dirty"
  }] : []);
  touched = computed(() => {
    const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
    return this.node.structure.reduceChildren(selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
  }, ...ngDevMode ? [{
    debugName: "touched"
  }] : []);
  disabledReasons = computed(() => [...this.node.structure.parent?.nodeState.disabledReasons() ?? [], ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabledReasons"
  } : {}), {
    equal: shallowArrayEquals
  }));
  disabled = computed(() => !!this.disabledReasons().length, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  readonly = computed(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "readonly"
  }] : []);
  hidden = computed(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? false, ...ngDevMode ? [{
    debugName: "hidden"
  }] : []);
  name = computed(() => {
    const parent = this.node.structure.parent;
    if (!parent) {
      return this.node.structure.fieldManager.rootName;
    }
    return `${parent.name()}.${this.node.structure.keyInParent()}`;
  }, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  debouncer = computed(() => {
    if (this.node.logicNode.logic.hasMetadata(DEBOUNCER)) {
      const debouncerLogic = this.node.logicNode.logic.getMetadata(DEBOUNCER);
      const debouncer = debouncerLogic.compute(this.node.context);
      if (debouncer) {
        return (signal2) => debouncer(this.node.context, signal2);
      }
    }
    return this.node.structure.parent?.nodeState.debouncer?.();
  }, ...ngDevMode ? [{
    debugName: "debouncer"
  }] : []);
  isNonInteractive = computed(() => this.hidden() || this.disabled() || this.readonly(), ...ngDevMode ? [{
    debugName: "isNonInteractive"
  }] : []);
};
var BasicFieldAdapter = class {
  newRoot(fieldManager, value, pathNode, adapter) {
    return new FieldNode({
      kind: "root",
      fieldManager,
      value,
      pathNode,
      logic: pathNode.builder.build(),
      fieldAdapter: adapter
    });
  }
  newChild(options) {
    return new FieldNode(options);
  }
  createNodeState(node) {
    return new FieldNodeState(node);
  }
  createValidationState(node) {
    return new FieldValidationState(node);
  }
  createStructure(node, options) {
    return node.createStructure(options);
  }
};
var FormFieldManager = class {
  injector;
  rootName;
  submitOptions;
  constructor(injector, rootName, submitOptions) {
    this.injector = injector;
    this.rootName = rootName ?? `${this.injector.get(APP_ID)}.form${nextFormId++}`;
    this.submitOptions = submitOptions;
  }
  structures = /* @__PURE__ */ new Set();
  createFieldManagementEffect(root) {
    effect(() => {
      const liveStructures = /* @__PURE__ */ new Set();
      this.markStructuresLive(root, liveStructures);
      for (const structure of this.structures) {
        if (!liveStructures.has(structure)) {
          this.structures.delete(structure);
          untracked(() => structure.destroy());
        }
      }
    }, {
      injector: this.injector
    });
  }
  markStructuresLive(structure, liveStructures) {
    liveStructures.add(structure);
    for (const child of structure.children()) {
      this.markStructuresLive(child.structure, liveStructures);
    }
  }
};
var nextFormId = 0;
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
function normalizeFormArgs(args) {
  let model;
  let schema2;
  let options;
  if (args.length === 3) {
    [model, schema2, options] = args;
  } else if (args.length === 2) {
    if (isSchemaOrSchemaFn(args[1])) {
      [model, schema2] = args;
    } else {
      [model, options] = args;
    }
  } else {
    [model] = args;
  }
  return [model, schema2, options];
}
function form(...args) {
  const [model, schema2, options] = normalizeFormArgs(args);
  const injector = options?.injector ?? inject(Injector);
  const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema2));
  const fieldManager = new FormFieldManager(injector, options?.name, options?.submission);
  const adapter = options?.adapter ?? new BasicFieldAdapter();
  const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
  fieldManager.createFieldManagementEffect(fieldRoot.structure);
  const {
    experimentalWebMcpTool
  } = options ?? {};
  if (experimentalWebMcpTool) {
    const registerWebMcpForm = runInInjectionContext(injector, () => inject(REGISTER_WEBMCP_FORM, {
      optional: true
    }));
    if (registerWebMcpForm) {
      runInInjectionContext(injector, () => registerWebMcpForm(fieldRoot.fieldTree, {
        name: experimentalWebMcpTool.name,
        description: experimentalWebMcpTool.description
      }));
    } else {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        throw new Error(`Cannot register form "${experimentalWebMcpTool.name}" as a WebMCP tool. Make sure to use \`provideExperimentalWebMcpForms()\` in your application bootstrap configuration.`);
      }
    }
  }
  return fieldRoot.fieldTree;
}
function applyEach(path, schema2) {
  assertPathIsCurrent(path);
  const elementPath = FieldPathNode.unwrapFieldPath(path).getChild(DYNAMIC).fieldPathProxy;
  apply(elementPath, schema2);
}
function apply(path, schema2) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.mergeIn(SchemaImpl.create(schema2));
}
async function submit(form2, options) {
  const node = untracked(form2);
  if (untracked(node.submitState.submitting)) {
    return false;
  }
  const field = options === void 0 ? node.structure.root.fieldProxy : form2;
  const detail = {
    root: node.structure.root.fieldProxy,
    submitted: form2
  };
  options = typeof options === "function" ? {
    action: options
  } : options ?? node.structure.fieldManager.submitOptions;
  const action = options?.action;
  if (!action) {
    throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
  }
  node.markAsTouched();
  const onInvalid = options?.onInvalid;
  const shouldRun = shouldRunAction(node, options?.ignoreValidators);
  try {
    if (shouldRun) {
      node.submitState.selfSubmitting.set(true);
      const errors = await untracked(() => action?.(field, detail));
      errors && setSubmissionErrors(node, errors);
      return !errors || isArray(errors) && errors.length === 0;
    } else {
      untracked(() => onInvalid?.(field, detail));
    }
    return false;
  } finally {
    node.submitState.selfSubmitting.set(false);
  }
}
function shouldRunAction(node, ignoreValidators) {
  switch (ignoreValidators) {
    case "all":
      return true;
    case "none":
      return untracked(node.valid);
    default:
      return !untracked(node.invalid);
  }
}
function setSubmissionErrors(submittedField, errors) {
  if (!isArray(errors)) {
    errors = [errors];
  }
  const errorsByField = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const errorWithField = addDefaultField(error, submittedField.fieldTree);
    const field = errorWithField.fieldTree();
    let fieldErrors = errorsByField.get(field);
    if (!fieldErrors) {
      fieldErrors = [];
      errorsByField.set(field, fieldErrors);
    }
    fieldErrors.push(errorWithField);
  }
  for (const [field, fieldErrors] of errorsByField) {
    field.submitState.submissionErrors.set(fieldErrors);
  }
}
var CompatValidationError = class {
  kind = "compat";
  control;
  fieldTree;
  context;
  message;
  constructor({
    context,
    kind,
    control
  }) {
    this.context = context;
    this.kind = kind;
    this.control = control;
  }
};
function signalErrorsToValidationErrors(errors) {
  if (errors.length === 0) {
    return null;
  }
  const errObj = {};
  for (const error of errors) {
    errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
  }
  return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
  if (errors === null) {
    return [];
  }
  return Object.entries(errors).map(([kind, context]) => {
    return new CompatValidationError({
      context,
      kind,
      control
    });
  });
}

// node_modules/@angular/forms/fesm2022/signals.mjs
/**
 * @license Angular v22.0.4
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function readonly(path, configOrLogic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  let logic;
  if (typeof configOrLogic === "object" && configOrLogic !== null && "when" in configOrLogic) {
    logic = configOrLogic.when ?? (() => true);
  } else if (typeof configOrLogic === "function") {
    logic = configOrLogic;
  } else {
    logic = () => true;
  }
  pathNode.builder.addReadonlyRule(logic);
}
function getOption(opt, ctx2) {
  return opt instanceof Function ? opt(ctx2) : opt;
}
function isEmpty(value) {
  if (typeof value === "number") {
    return isNaN(value);
  }
  return value === "" || value === false || value == null;
}
function normalizeErrors2(error) {
  if (error === void 0) {
    return [];
  }
  if (Array.isArray(error)) {
    return error;
  }
  return [error];
}
function validate(path, logic) {
  assertPathIsCurrent(path);
  const pathNode = FieldPathNode.unwrapFieldPath(path);
  pathNode.builder.addSyncErrorRule((ctx2) => {
    return addDefaultField(logic(ctx2), ctx2.fieldTree);
  });
}
function requiredError(options) {
  return new RequiredValidationError(options);
}
var BaseNgValidationError = class {
  __brand = void 0;
  kind = "";
  fieldTree;
  message;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var RequiredValidationError = class extends BaseNgValidationError {
  kind = "required";
};
var NativeInputParseError = class extends BaseNgValidationError {
  kind = "parse";
};
function required(path, config) {
  const REQUIRED_MEMO = metadata(path, createMetadataKey(), (ctx2) => config?.when ? config.when(ctx2) : true);
  metadata(path, REQUIRED, ({
    state
  }) => state.metadata(REQUIRED_MEMO)());
  validate(path, (ctx2) => {
    if (ctx2.state.metadata(REQUIRED_MEMO)() && isEmpty(ctx2.value())) {
      if (config?.error) {
        return getOption(config.error, ctx2);
      } else {
        return requiredError({
          message: getOption(config?.message, ctx2)
        });
      }
    }
    return void 0;
  });
}
function createParser(getValue, setValue, parse) {
  const errors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    source: getValue,
    computation: () => [],
    equal: shallowArrayEquals
  }));
  const setRawValue = (rawValue) => {
    const result = parse(rawValue);
    errors.set(normalizeErrors2(result.error));
    if (result.value !== void 0) {
      setValue(result.value);
    }
    errors.set(normalizeErrors2(result.error));
  };
  const reset = () => {
    errors.set([]);
  };
  return {
    errors: errors.asReadonly(),
    setRawValue,
    reset
  };
}
var InteropNgControl = class {
  field;
  constructor(field) {
    this.field = field;
  }
  control = this;
  get value() {
    return this.field().controlValue();
  }
  get valid() {
    return this.field().valid();
  }
  get invalid() {
    return this.field().invalid();
  }
  get pending() {
    return this.field().pending();
  }
  get disabled() {
    return this.field().disabled();
  }
  get enabled() {
    return !this.field().disabled();
  }
  get errors() {
    return signalErrorsToValidationErrors(this.field().errors());
  }
  get pristine() {
    return !this.field().dirty();
  }
  get dirty() {
    return this.field().dirty();
  }
  get touched() {
    return this.field().touched();
  }
  get untouched() {
    return !this.field().touched();
  }
  get status() {
    if (this.field().disabled()) {
      return "DISABLED";
    }
    if (this.field().valid()) {
      return "VALID";
    }
    if (this.field().invalid()) {
      return "INVALID";
    }
    if (this.field().pending()) {
      return "PENDING";
    }
    throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
  }
  valueAccessor = null;
  hasValidator(validator) {
    if (validator === Validators.required) {
      return this.field().required();
    }
    return false;
  }
  updateValueAndValidity() {
  }
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
  disabled: "disabled",
  disabledReasons: "disabledReasons",
  dirty: "dirty",
  errors: "errors",
  hidden: "hidden",
  invalid: "invalid",
  max: "max",
  maxLength: "maxLength",
  min: "min",
  minLength: "minLength",
  name: "name",
  pattern: "pattern",
  pending: "pending",
  readonly: "readonly",
  required: "required",
  touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
  const map2 = {};
  for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) {
    map2[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
  }
  return map2;
})();
function readFieldStateBindingValue(fieldState, key) {
  const property = CONTROL_BINDING_TO_FIELD_STATE_KEY[key];
  return fieldState[property]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
  return {};
}
function bindingUpdated(bindings, key, value) {
  if (bindings[key] !== value) {
    bindings[key] = value;
    return true;
  }
  return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
  let modelValue;
  if (isInput(element) && validityMonitor.isBadInput(element)) {
    return {
      error: new NativeInputParseError()
    };
  }
  switch (element.type) {
    case "checkbox":
      return {
        value: element.checked
      };
    case "number":
    case "range":
    case "datetime-local":
      modelValue = untracked(currentValue);
      if (typeof modelValue === "number" || modelValue === null) {
        return {
          value: element.value === "" ? null : element.valueAsNumber
        };
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      modelValue = untracked(currentValue);
      if (modelValue === null || modelValue instanceof Date) {
        return {
          value: element.valueAsDate
        };
      } else if (typeof modelValue === "number") {
        return {
          value: element.valueAsNumber
        };
      }
      break;
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    modelValue ??= untracked(currentValue);
    if (typeof modelValue === "number" || modelValue === null) {
      if (element.value === "") {
        return {
          value: null
        };
      }
      const parsed = Number(element.value);
      if (Number.isNaN(parsed)) {
        return {
          error: new NativeInputParseError()
        };
      }
      return {
        value: parsed
      };
    }
  }
  return {
    value: element.value
  };
}
function setNativeControlValue(element, value) {
  switch (element.type) {
    case "checkbox":
      element.checked = value;
      return;
    case "radio":
      element.checked = value === element.value;
      return;
    case "number":
    case "range":
    case "datetime-local":
      if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      } else if (value === null) {
        element.value = "";
        return;
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      if (value === null || value instanceof Date) {
        element.valueAsDate = value;
        return;
      } else if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      }
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    if (typeof value === "number") {
      element.value = isNaN(value) ? "" : String(value);
      return;
    }
    if (value === null) {
      element.value = "";
      return;
    }
  }
  element.value = value;
}
function setNativeNumberControlValue(element, value) {
  if (isNaN(value)) {
    element.value = "";
  } else {
    element.valueAsNumber = value;
  }
}
function isInput(element) {
  return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input2) {
  return input2.type === "date" || input2.type === "datetime-local" || input2.type === "month" || input2.type === "time" || input2.type === "week";
}
function formatDateForInput(date, type2) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  if (type2 === "month") {
    return `${year}-${month}`;
  }
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatDateForMinMax(name, value, type2) {
  if (value instanceof Date && (name === "min" || name === "max") && (type2 === "date" || type2 === "month")) {
    return formatDateForInput(value, type2);
  }
  return value;
}
function customControlCreate(host, parent) {
  host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
  host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
  parent.registerAsBinding(host.customControl);
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      host.setCustomControlModelInput(controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      let value;
      if (name === "errors") {
        value = parent.errors();
      } else {
        value = readFieldStateBindingValue(state, name);
      }
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
          const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
        }
      }
    }
  };
}
function isValidatorObject(v) {
  return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
  const bindings = createBindings();
  parent.controlValueAccessor.registerOnChange((value) => {
    bindings["controlValue"] = value;
    parent.state().controlValue.set(value);
  });
  parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
  const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
    optional: true,
    self: true
  });
  if (legacyValidators) {
    let version;
    for (const v of legacyValidators) {
      if (isValidatorObject(v) && v.registerOnValidatorChange) {
        version ??= signal(0);
        v.registerOnValidatorChange(() => {
          version.update((n) => n + 1);
        });
      }
    }
    const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
    const mergedValidator = Validators.compose(validatorFns);
    const parseErrors = computed(() => {
      version?.();
      const errors = mergedValidator ? mergedValidator(parent.interopNgControl.control) : null;
      return reactiveErrorsToSignalErrors(errors, parent.interopNgControl.control);
    }, ...ngDevMode ? [{
      debugName: "parseErrors"
    }] : []);
    parent.parseErrorsSource.set(parseErrors);
  }
  parent.registerAsBinding({
    reset: () => {
      const value = parent.state().value();
      bindings["controlValue"] = value;
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
  });
  return () => {
    const fieldState = parent.state();
    const value = fieldState.value();
    if (bindingUpdated(bindings, "controlValue", value)) {
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value2 = readFieldStateBindingValue(fieldState, name);
      if (bindingUpdated(bindings, name, value2)) {
        const propertyWasSet = host.setInputOnDirectives(name, value2);
        if (name === "disabled" && parent.controlValueAccessor.setDisabledState) {
          untracked(() => parent.controlValueAccessor.setDisabledState(value2));
        } else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value2);
        }
      }
    }
  };
}
function observeSelectMutations(select, onMutation, destroyRef) {
  if (typeof MutationObserver !== "function") {
    return;
  }
  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => isRelevantSelectMutation(m))) {
      onMutation();
    }
  });
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["value"],
    characterData: true,
    childList: true,
    subtree: true
  });
  destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
  if (mutation.type === "childList" || mutation.type === "characterData") {
    if (mutation.target instanceof Comment) {
      return false;
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    for (const node of mutation.removedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    return false;
  }
  if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) {
    return true;
  }
  return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
  let updateMode = false;
  const input2 = parent.nativeFormElement;
  const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input2, parent.state().value, validityMonitor));
  parseErrorsSource.set(parser.errors);
  parent.onReset = () => {
    parser.reset();
    const value = parent.state().value();
    bindings["controlValue"] = value;
    setNativeControlValue(input2, value);
  };
  host.listenToDom("input", () => parser.setRawValue(void 0));
  host.listenToDom("blur", () => parent.state().markAsTouched());
  if (isInput(input2) && inputRequiresValidityTracking(input2)) {
    validityMonitor.watchValidity(parent.destroyRef, input2, () => parser.setRawValue(void 0));
  }
  parent.registerAsBinding();
  if (input2.tagName === "SELECT") {
    observeSelectMutations(input2, () => {
      if (!updateMode) {
        return;
      }
      input2.value = parent.state().controlValue();
    }, parent.destroyRef);
  }
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(state, name);
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name)) {
          const domValue = formatDateForMinMax(name, value, input2.type);
          setNativeDomProperty(parent.renderer, input2, name, domValue);
        }
      }
    }
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      setNativeControlValue(input2, controlValue);
    }
    updateMode = true;
  };
}
var InputValidityMonitor = class _InputValidityMonitor {
  static \u0275fac = function InputValidityMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputValidityMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputValidityMonitor,
    factory: (__ngFactoryType__) => AnimationInputValidityMonitor.\u0275fac(__ngFactoryType__),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useClass: forwardRef(() => AnimationInputValidityMonitor)
    }]
  }], null, null);
})();
var AnimationInputValidityMonitor = class _AnimationInputValidityMonitor extends InputValidityMonitor {
  document = inject(DOCUMENT);
  cspNonce = inject(CSP_NONCE, {
    optional: true
  });
  injectedStyles = /* @__PURE__ */ new WeakMap();
  watchValidity(destroyRef, element, callback) {
    if (false) {
      return;
    }
    const rootNode = element.getRootNode();
    if (!this.injectedStyles.has(rootNode)) {
      this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
    }
    const onAnimationStart = (event) => {
      const animationEvent = event;
      if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") {
        callback();
      }
    };
    element.addEventListener("animationstart", onAnimationStart);
    destroyRef.onDestroy(() => {
      element.removeEventListener("animationstart", onAnimationStart);
    });
  }
  isBadInput(element) {
    return element.validity?.badInput ?? false;
  }
  createTransitionStyle(rootNode) {
    const element = this.document.createElement("style");
    if (this.cspNonce) {
      element.nonce = this.cspNonce;
    }
    element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
    if (rootNode.nodeType === 9) {
      rootNode.head?.appendChild(element);
    } else {
      rootNode.appendChild(element);
    }
    return element;
  }
  ngOnDestroy() {
    this.injectedStyles.get(this.document)?.remove();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnimationInputValidityMonitor_BaseFactory;
    return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
      return (\u0275AnimationInputValidityMonitor_BaseFactory || (\u0275AnimationInputValidityMonitor_BaseFactory = \u0275\u0275getInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationInputValidityMonitor,
    factory: _AnimationInputValidityMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{
    type: Injectable
  }], null, null);
})();
var \u0275NgFieldDirective = /* @__PURE__ */ Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class _FormField {
  field = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "field"
  } : {}), {
    alias: "formField"
  }));
  state = computed(() => this.field()(), ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  injector = inject(Injector);
  element = inject(ElementRef).nativeElement;
  elementIsNativeFormElement = isNativeFormElement(this.element);
  elementAcceptsTextualValues = isTextualFormElement(this.element);
  _elementAcceptsMinMax;
  nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
  focuser = (options) => this.element.focus(options);
  controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
    optional: true,
    self: true
  });
  config = inject(SIGNAL_FORMS_CONFIG, {
    optional: true
  });
  validityMonitor = inject(InputValidityMonitor);
  parseErrorsSource = signal(void 0, ...ngDevMode ? [{
    debugName: "parseErrorsSource"
  }] : []);
  _interopNgControl;
  get interopNgControl() {
    return this._interopNgControl ??= new InteropNgControl(this.state);
  }
  parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => __spreadProps(__spreadValues({}, err), {
    fieldTree: untracked(this.state).fieldTree,
    formField: this
  })) ?? [], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  isFieldBinding = false;
  resetter = () => {
  };
  parseErrorsResetCallback;
  setParseErrors(source) {
    this.parseErrorsSource.set(source);
  }
  set onReset(callback) {
    this.parseErrorsResetCallback = callback;
  }
  get onReset() {
    return this.parseErrorsResetCallback;
  }
  get controlValueAccessor() {
    if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
      return this.interopNgControl?.valueAccessor ?? void 0;
    }
    return selectValueAccessor(this.interopNgControl, this.controlValueAccessors) ?? void 0;
  }
  installClassBindingEffect() {
    const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
    if (classes.length === 0) {
      return;
    }
    const bindings = createBindings();
    afterRenderEffect({
      write: () => {
        for (const [className, computation] of classes) {
          const active = computation();
          if (bindingUpdated(bindings, className, active)) {
            if (active) {
              this.renderer.addClass(this.element, className);
            } else {
              this.renderer.removeClass(this.element, className);
            }
          }
        }
      }
    }, {
      injector: this.injector
    });
  }
  focus(options) {
    this.focuser(options);
  }
  reset() {
    this.resetter();
    this.parseErrorsResetCallback?.(this.state().value());
  }
  registerAsBinding(bindingOptions) {
    if (this.isFieldBinding) {
      throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
    }
    this.isFieldBinding = true;
    this.installClassBindingEffect();
    if (bindingOptions?.focus) {
      this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
    }
    if (bindingOptions?.reset) {
      this.resetter = () => bindingOptions.reset();
    }
    effect((onCleanup) => {
      const fieldNode = this.state();
      fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
      onCleanup(() => {
        fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
      });
    }, {
      injector: this.injector
    });
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        const fieldNode = this.state();
        if (fieldNode.hidden()) {
          const path = fieldNode.structure.pathKeys().join(".") || "<root>";
          console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
        }
      }, {
        injector: this.injector
      });
    }
  }
  [\u0275NgFieldDirective];
  \u0275ngControlCreate(host) {
    if (host.hasPassThrough) {
      return;
    }
    if (this.controlValueAccessor) {
      this.\u0275ngControlUpdate = cvaControlCreate(host, this);
    } else if (host.customControl) {
      this.\u0275ngControlUpdate = customControlCreate(host, this);
    } else if (this.elementIsNativeFormElement) {
      this.\u0275ngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
    } else {
      throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
    }
  }
  \u0275ngControlUpdate;
  elementAcceptsNativeProperty(key) {
    if (!this.elementIsNativeFormElement) {
      return false;
    }
    switch (key) {
      case "min":
      case "max":
        return this._elementAcceptsMinMax ??= elementAcceptsMinMax(this.element);
      case "minLength":
      case "maxLength":
        return this.elementAcceptsTextualValues;
      case "disabled":
      case "required":
      case "readonly":
      case "name":
        return true;
      default:
        return false;
    }
  }
  static \u0275fac = function FormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormField)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormField,
    selectors: [["", "formField", ""]],
    inputs: {
      field: [1, "formField", "field"]
    },
    exportAs: ["formField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: FORM_FIELD,
      useExisting: _FormField
    }, {
      provide: NgControl,
      useFactory: () => inject(_FormField).interopNgControl
    }, {
      provide: \u0275FORM_CONTROL_INTEGRATION,
      useFactory: () => inject(FORM_FIELD, {
        self: true
      })
    }]), \u0275\u0275ControlFeature("formField")]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
    type: Directive,
    args: [{
      selector: "[formField]",
      exportAs: "formField",
      providers: [{
        provide: FORM_FIELD,
        useExisting: FormField
      }, {
        provide: NgControl,
        useFactory: () => inject(FormField).interopNgControl
      }, {
        provide: \u0275FORM_CONTROL_INTEGRATION,
        useFactory: () => inject(FORM_FIELD, {
          self: true
        })
      }]
    }]
  }], null, {
    field: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formField",
        required: true
      }]
    }]
  });
})();
var FormRoot = class _FormRoot {
  fieldTree = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fieldTree"
  } : {}), {
    alias: "formRoot"
  }));
  onSubmit(event) {
    event.preventDefault();
    untracked(() => {
      const fieldTree = this.fieldTree();
      const node = fieldTree();
      if (node.structure.fieldManager.submitOptions) {
        submit(fieldTree);
      }
    });
  }
  static \u0275fac = function FormRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormRoot,
    selectors: [["form", "formRoot", ""]],
    hostAttrs: ["novalidate", ""],
    hostBindings: function FormRoot_HostBindings(rf, ctx2) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormRoot_submit_HostBindingHandler($event) {
          return ctx2.onSubmit($event);
        });
      }
    },
    inputs: {
      fieldTree: [1, "formRoot", "fieldTree"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
    type: Directive,
    args: [{
      selector: "form[formRoot]",
      host: {
        "novalidate": "",
        "(submit)": "onSubmit($event)"
      }
    }]
  }], null, {
    fieldTree: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formRoot",
        required: true
      }]
    }]
  });
})();

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
var DEEP_SIGNAL = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "DEEP_SIGNAL" : "");
function toDeepSignal(signal2) {
  return new Proxy(signal2, {
    has(target, prop) {
      return !!this.get(target, prop, void 0);
    },
    get(target, prop) {
      const value = untracked(target);
      if (!isRecord(value) || !(prop in value)) {
        if (isSignal(target[prop]) && target[prop][DEEP_SIGNAL]) {
          delete target[prop];
        }
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
        target[prop][DEEP_SIGNAL] = true;
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "STATE_SOURCE" : "");
function patchState(stateSource, ...updaters) {
  const currentState = untracked(() => getState(stateSource));
  const newState = updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState);
  const signals = stateSource[STATE_SOURCE];
  const stateKeys = Reflect.ownKeys(stateSource[STATE_SOURCE]);
  for (const key of Reflect.ownKeys(newState)) {
    if (stateKeys.includes(key)) {
      const signalKey = key;
      if (currentState[signalKey] !== newState[signalKey]) {
        signals[signalKey].set(newState[signalKey]);
      }
    } else if (typeof ngDevMode !== "undefined" && ngDevMode) {
      console.warn(`@ngrx/signals: patchState was called with an unknown state slice '${String(key)}'.`, "Ensure that all state properties are explicitly defined in the initial state.", "Updates to properties not present in the initial state will be ignored.");
    }
  }
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  const signals = stateSource[STATE_SOURCE];
  return Reflect.ownKeys(stateSource[STATE_SOURCE]).reduce((state, key) => {
    const value = signals[key]();
    return __spreadProps(__spreadValues({}, state), {
      [key]: value
    });
  }, {});
}
function watchState(stateSource, watcher, config) {
  if (typeof ngDevMode !== "undefined" && ngDevMode && !config?.injector) {
    assertInInjectionContext(watchState);
  }
  const injector = config?.injector ?? inject(Injector);
  const destroyRef = injector.get(DestroyRef);
  addWatcher(stateSource, watcher);
  watcher(getState(stateSource));
  const destroy = () => removeWatcher(stateSource, watcher);
  destroyRef.onDestroy(destroy);
  return {
    destroy
  };
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function addWatcher(stateSource, watcher) {
  const watchers = getWatchers(stateSource);
  STATE_WATCHERS.set(stateSource[STATE_SOURCE], [...watchers, watcher]);
}
function removeWatcher(stateSource, watcher) {
  const watchers = getWatchers(stateSource);
  STATE_WATCHERS.set(stateSource[STATE_SOURCE], watchers.filter((w) => w !== watcher));
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: {},
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function signalStoreFeature(...args) {
  const features = typeof args[0] === "function" ? args : args.slice(1);
  return (inputStore) => features.reduce((store, feature) => feature(store), inputStore);
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    }
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withComputed(computedFactory) {
  return withProps((store) => {
    const computedResult = computedFactory(store);
    const computedResultKeys = Reflect.ownKeys(computedResult);
    return computedResultKeys.reduce((prev, key) => {
      const signalOrComputation = computedResult[key];
      return __spreadProps(__spreadValues({}, prev), {
        [key]: isSignal(signalOrComputation) ? signalOrComputation : computed(signalOrComputation)
      });
    }, {});
  });
}
function withHooks(hooksOrFactory) {
  return (store) => {
    const storeMembers = __spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods);
    const hooks = typeof hooksOrFactory === "function" ? hooksOrFactory(storeMembers) : hooksOrFactory;
    const mergeHooks = (currentHook, hook) => {
      return hook ? () => {
        if (currentHook) {
          currentHook();
        }
        hook(storeMembers);
      } : currentHook;
    };
    return __spreadProps(__spreadValues({}, store), {
      hooks: {
        onInit: mergeHooks(store.hooks.onInit, hooks.onInit),
        onDestroy: mergeHooks(store.hooks.onDestroy, hooks.onDestroy)
      }
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    }
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, stateKeys);
    }
    const stateSource = store[STATE_SOURCE];
    const stateSignals = {};
    for (const key of stateKeys) {
      stateSource[key] = signal(state[key]);
      stateSignals[key] = toDeepSignal(stateSource[key]);
    }
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// node_modules/@angular-architects/ngrx-toolkit/fesm2022/angular-architects-ngrx-toolkit.mjs
function throwIfNull(obj) {
  if (obj === null || obj === void 0) {
    throw new Error("");
  }
  return obj;
}
var GlitchTrackerService = class _GlitchTrackerService {
  #stores = {};
  #callback;
  get stores() {
    return Object.entries(this.#stores).reduce((acc, [id, {
      store
    }]) => {
      acc[id] = store;
      return acc;
    }, {});
  }
  onChange(callback) {
    this.#callback = callback;
  }
  removeStore(id) {
    this.#stores = Object.entries(this.#stores).reduce((newStore, [storeId, value]) => {
      if (storeId !== id) {
        newStore[storeId] = value;
      } else {
        value.destroyWatcher();
      }
      return newStore;
    }, {});
    throwIfNull(this.#callback)({});
  }
  track(id, store) {
    const watcher = watchState(store, (state) => {
      throwIfNull(this.#callback)({
        [id]: state
      });
    });
    this.#stores[id] = {
      destroyWatcher: watcher.destroy,
      store
    };
  }
  notifyRenamedStore(id) {
    if (Object.keys(this.#stores).includes(id) && this.#callback) {
      this.#callback({
        [id]: getState(this.#stores[id].store)
      });
    }
  }
  static {
    this.\u0275fac = function GlitchTrackerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlitchTrackerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _GlitchTrackerService,
      factory: _GlitchTrackerService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlitchTrackerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GLITCH_TRACKING_FEATURE = "GLITCH_TRACKING_FEATURE";
var REDUX_DEVTOOLS_CONFIG = new InjectionToken("ReduxDevtoolsConfig");
var DefaultTracker = class _DefaultTracker {
  #stores = signal({}, ...ngDevMode ? [{
    debugName: "#stores"
  }] : []);
  get stores() {
    return this.#stores();
  }
  #trackCallback;
  #trackingEffect = effect(() => {
    if (this.#trackCallback === void 0) {
      throw new Error("no callback function defined");
    }
    const stores = this.#stores();
    const fullState = Object.entries(stores).reduce((acc, [id, store]) => {
      return __spreadProps(__spreadValues({}, acc), {
        [id]: getState(store)
      });
    }, {});
    this.#trackCallback(fullState);
  }, ...ngDevMode ? [{
    debugName: "#trackingEffect"
  }] : []);
  track(id, store) {
    this.#stores.update((value) => __spreadProps(__spreadValues({}, value), {
      [id]: store
    }));
  }
  onChange(callback) {
    this.#trackCallback = callback;
  }
  removeStore(id) {
    this.#stores.update((stores) => Object.entries(stores).reduce((newStore, [storeId, state]) => {
      if (storeId !== id) {
        newStore[storeId] = state;
      }
      return newStore;
    }, {}));
  }
  notifyRenamedStore(id) {
    if (this.#stores()[id]) {
      this.#stores.update((stores) => {
        return __spreadValues({}, stores);
      });
    }
  }
  static {
    this.\u0275fac = function DefaultTracker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultTracker)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultTracker,
      factory: _DefaultTracker.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTracker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var currentActionNames = /* @__PURE__ */ new Set();
var dummyConnection = {
  send: () => void 0
};
var DevtoolsSyncer = class _DevtoolsSyncer {
  /**
   * Stores all SignalStores that are connected to the
   * DevTools along their options, names and id.
   */
  #stores = {};
  #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  #trackers = [];
  #devtoolsConfig = __spreadValues({
    name: "NgRx SignalStore"
  }, inject(REDUX_DEVTOOLS_CONFIG, {
    optional: true
  }));
  /**
   * Maintains the current states of all stores to avoid conflicts
   * between glitch-free and glitched trackers when used simultaneously.
   *
   * The challenge lies in ensuring that glitched trackers do not
   * interfere with the synchronization process of glitch-free trackers.
   * Specifically, glitched trackers could cause the synchronization to
   * read the current state of stores managed by glitch-free trackers.
   *
   * Therefore, the synchronization process doesn't read the state from
   * each store, but relies on #currentState.
   *
   * Please note, that here the key is the name and not the id.
   */
  #currentState = {};
  #currentId = 1;
  #connection = inject(NgZone).runOutsideAngular(() => this.#isBrowser ? window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__.connect(this.#devtoolsConfig) : dummyConnection : dummyConnection);
  constructor() {
    if (!this.#isBrowser) {
      return;
    }
  }
  ngOnDestroy() {
    currentActionNames.clear();
  }
  syncToDevTools(changedStatePerId) {
    const mappedChangedStatePerName = Object.entries(changedStatePerId).reduce((acc, [id, store]) => {
      const {
        options,
        name
      } = this.#stores[id];
      acc[name] = options.map(store);
      return acc;
    }, {});
    this.#currentState = __spreadValues(__spreadValues({}, this.#currentState), mappedChangedStatePerName);
    const names = Array.from(currentActionNames);
    const type2 = names.length ? names.join(", ") : "Store Update";
    currentActionNames.clear();
    this.#connection.send({
      type: type2
    }, this.#currentState);
  }
  getNextId() {
    return String(this.#currentId++);
  }
  /**
   * Consumer provides the id. That is because we can only start
   * tracking the store in the init hook.
   * Unfortunately, methods for renaming having the final id
   * need to be defined already before.
   * That's why `withDevtools` requests first the id and
   * then registers itself later.
   */
  addStore(id, name, store, options) {
    let storeName2 = name;
    const names = Object.values(this.#stores).map((store2) => store2.name);
    if (names.includes(storeName2)) {
      if (!options.indexNames) {
        throw new Error(`An instance of the store ${storeName2} already exists. Enable automatic indexing via withDevTools('${storeName2}', { indexNames: true }), or rename it upon instantiation.`);
      }
    }
    for (let i = 1; names.includes(storeName2); i++) {
      storeName2 = `${name}-${i}`;
    }
    this.#stores[id] = {
      name: storeName2,
      options
    };
    const tracker = options.tracker;
    if (!this.#trackers.includes(tracker)) {
      this.#trackers.push(tracker);
    }
    tracker.onChange((changedState) => this.syncToDevTools(changedState));
    tracker.track(id, store);
  }
  removeStore(id) {
    const name = this.#stores[id].name;
    this.#stores = Object.entries(this.#stores).reduce((newStore, [storeId, value]) => {
      if (storeId !== id) {
        newStore[storeId] = value;
      }
      return newStore;
    }, {});
    this.#currentState = Object.entries(this.#currentState).reduce((newState, [storeName2, state]) => {
      if (storeName2 !== name) {
        newState[storeName2] = state;
      }
      return newState;
    }, {});
    for (const tracker of this.#trackers) {
      tracker.removeStore(id);
    }
  }
  /**
   * Renames a store identified by its internal id. If the store has already
   * been removed (e.g. due to component destruction), this is a no-op.
   */
  renameStore(id, newName) {
    const storeEntry = this.#stores[id];
    if (!storeEntry) {
      return;
    }
    const oldName = storeEntry.name;
    if (oldName === newName) {
      return;
    }
    const otherStoreNames = Object.entries(this.#stores).filter(([entryId]) => entryId !== id).map(([, s]) => s.name);
    if (otherStoreNames.includes(newName)) {
      throw new Error(`NgRx Toolkit/DevTools: cannot rename from ${oldName} to ${newName}. ${newName} is already assigned to another SignalStore instance.`);
    }
    this.#stores = Object.entries(this.#stores).reduce((newStore, [entryId, value]) => {
      if (entryId === id) {
        newStore[entryId] = __spreadProps(__spreadValues({}, value), {
          name: newName
        });
      } else {
        newStore[entryId] = value;
      }
      return newStore;
    }, {});
    this.#currentState = Object.entries(this.#currentState).reduce((newState, [storeName2, state]) => {
      if (storeName2 !== oldName) {
        newState[storeName2] = state;
      }
      return newState;
    }, {});
    this.#trackers.forEach((tracker) => tracker.notifyRenamedStore(id));
  }
  static {
    this.\u0275fac = function DevtoolsSyncer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevtoolsSyncer)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DevtoolsSyncer,
      factory: _DevtoolsSyncer.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsSyncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var renameDevtoolsMethodName = "___renameDevtoolsName";
var uniqueDevtoolsId = "___uniqueDevtoolsId";
var DEVTOOL_FEATURE_NAMES = /* @__PURE__ */ Symbol("DEVTOOL_PROP");
function withDevtools(name, ...features) {
  return signalStoreFeature(withMethods(() => {
    const syncer = inject(DevtoolsSyncer);
    const id = syncer.getNextId();
    return {
      [renameDevtoolsMethodName]: (newName) => {
        syncer.renameStore(id, newName);
      },
      [uniqueDevtoolsId]: () => id
    };
  }), withProps(() => ({
    [DEVTOOL_FEATURE_NAMES]: features.filter(Boolean).map((f) => f.name)
  })), withHooks((store) => {
    const syncer = inject(DevtoolsSyncer);
    const id = String(store[uniqueDevtoolsId]());
    return {
      onInit() {
        const finalOptions = {
          indexNames: !features.some((f) => f.indexNames === false),
          map: features.find((f) => f.map)?.map ?? ((state) => state),
          tracker: inject(features.find((f) => f.tracker)?.tracker || DefaultTracker)
        };
        syncer.addStore(id, name, store, finalOptions);
      },
      onDestroy() {
        syncer.removeStore(id);
      }
    };
  }));
}
function updateState(stateSource, action, ...updaters) {
  currentActionNames.add(action);
  return patchState(stateSource, ...updaters);
}
var withDevToolsStub = () => signalStoreFeature(withProps(() => ({
  [DEVTOOL_FEATURE_NAMES]: [GLITCH_TRACKING_FEATURE]
})));
var keyPath = "ngrxToolkitKeyPath";
var dbName = "ngrxToolkitDb";
var storeName = "ngrxToolkitStore";
var VERSION = 1;
var IndexedDBService = class _IndexedDBService {
  /**
   * write to indexedDB
   * @param key
   * @param data
   */
  async setItem(key, data) {
    const db = await this.openDB();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put({
      [keyPath]: key,
      value: data
    });
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject();
      };
    });
  }
  /**
   * read from indexedDB
   * @param key
   */
  async getItem(key) {
    const db = await this.openDB();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.get(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close();
        if (request.result === void 0) {
          resolve(null);
        }
        resolve(request.result?.["value"]);
      };
      request.onerror = () => {
        db.close();
        reject();
      };
    });
  }
  /**
   * delete indexedDB
   * @param key
   */
  async clear(key) {
    const db = await this.openDB();
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const request = store.delete(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close();
        resolve();
      };
      request.onerror = () => {
        db.close();
        reject();
      };
    });
  }
  /**
   * open indexedDB
   */
  async openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, {
            keyPath
          });
        }
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }
  static {
    this.\u0275fac = function IndexedDBService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndexedDBService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _IndexedDBService,
      factory: _IndexedDBService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexedDBService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LocalStorageService = class _LocalStorageService {
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, data) {
    return localStorage.setItem(key, data);
  }
  clear(key) {
    return localStorage.removeItem(key);
  }
  static {
    this.\u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LocalStorageService,
      factory: _LocalStorageService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SessionStorageService = class _SessionStorageService {
  getItem(key) {
    return sessionStorage.getItem(key);
  }
  setItem(key, data) {
    return sessionStorage.setItem(key, data);
  }
  clear(key) {
    return sessionStorage.removeItem(key);
  }
  static {
    this.\u0275fac = function SessionStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SessionStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SessionStorageService,
      factory: _SessionStorageService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var emptyFeature = signalStoreFeature(withState({}));

// src/environments/environment.ts
var environment = {
  primeNgLicenseKey: "eyJpZCI6ImI2YTg4ODA4LWU4Y2QtNDBjMC1iNjkyLWRjNTViMmU4NTY4NSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODI3MTQ4NTQsImV4cCI6MTgxNDI1MDg1NH0.d_D4tgsA7BSDw9WTkw7xleva8NIdW-5kcAXHY2xP-Pln0-w6E0s01qM70voWK36on9WMoe9WgFfb-asxGrw1Aw",
  production: false
};

// src/app/features/settings/store/settings.slice.ts
var initialSettingsSlice = {
  colorIdenifier: {
    skeleton: "#1d1d1b",
    implant: "#4dc7ff",
    measurement: "#cd4a9b",
    treated: "#00ff6d",
    contralateral: "#148282"
  },
  textFramingSpaces: {
    xspace: 5,
    yspace: -2
  },
  tokenUri: "http://localhost:5011/auth",
  darkMode: false,
  availableComponents: [],
  searcherBookmarks: []
};

// src/app/features/settings/store/settings.helper.ts
var ctx;
function initSettingsHelperContext(context) {
  ctx = context;
}
function toggleBookmark(component) {
  if (ctx.settings().searcherBookmarks.includes(component)) {
    return ctx.settings().searcherBookmarks.filter((bookmark) => bookmark !== component);
  }
  return [...ctx.settings().searcherBookmarks, component];
}
function toggleAvailableComponent(component) {
  if (ctx.settings().availableComponents.includes(component)) {
    return {
      availableComponents: ctx.settings().availableComponents.filter((available) => available !== component),
      searcherBookmarks: toggleBookmark(component)
    };
  }
  return {
    availableComponents: [...ctx.settings().availableComponents, component],
    searcherBookmarks: ctx.settings().searcherBookmarks
  };
}
function electronWriteSettings() {
  runElectronCommand("write-data", { target: "configurations", data: ctx.settings(), reload: false });
}

// src/app/features/settings/store/settings.updates.ts
function initSettingsStore(settings) {
  return (_) => __spreadValues({}, settings);
}
function toggleDarkMode() {
  return (store) => ({ darkMode: !store.darkMode });
}
function putBookmarks(searcherBookmarks) {
  return (_) => ({ searcherBookmarks });
}
function putAvailableComponents(availableComponents) {
  return (_) => ({ availableComponents });
}

// src/app/features/settings/store/settings.store.ts
var Store = signalStore(
  { providedIn: "root" },
  withState(initialSettingsSlice),
  withProps((_) => {
    const injector = inject(Injector);
    return {
      _injector: injector
    };
  }),
  withMethods((store) => {
    return {
      initStore: (settings) => updateState(store, "[SettingsStore] Init Store", initSettingsStore(settings)),
      toggleDarkMode: () => {
        updateState(store, "[SettingsStore] Init Store", toggleDarkMode());
        electronWriteSettings();
      },
      toggleBookmark: (component) => {
        updateState(store, "[SettingsStore] Put SearcherBookmarks", putBookmarks(toggleBookmark(component)));
        electronWriteSettings();
      },
      toggleAvailableComponent: (component) => {
        const { availableComponents, searcherBookmarks } = toggleAvailableComponent(component);
        updateState(store, "[SettingsStore] Put AvailableComponents/SearcherBookmarks", putAvailableComponents(availableComponents), putBookmarks(searcherBookmarks));
        electronWriteSettings();
      }
    };
  }),
  withComputed((store) => {
    return {};
  }),
  withHooks({
    onInit(store) {
      initSettingsHelperContext({
        httpClient: inject(HttpClient),
        settings: computed(() => ({
          colorIdenifier: store.colorIdenifier(),
          textFramingSpaces: store.textFramingSpaces(),
          tokenUri: store.tokenUri(),
          darkMode: store.darkMode(),
          searcherBookmarks: store.searcherBookmarks(),
          availableComponents: store.availableComponents()
        }))
      });
    }
  }),
  // withDevtools('settings-store'),
  environment.production ? withDevToolsStub("settings-store") : withDevtools("settings-store")
);

// src/app/store/app.slice.ts
var initialAppSlice = {
  aciveState: "",
  aciveHeader: "",
  activeName: "",
  notifications: []
};

// src/app/store/app.updates.ts
function putActiveState(aciveState, aciveHeader, activeName) {
  return (_) => ({ aciveState, aciveHeader, activeName });
}

// src/app/store/app.store.ts
var Store2 = signalStore(
  { providedIn: "root" },
  withState(initialAppSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let settingsStore = null;
    return {
      _injector: injector,
      _settingsStore: () => {
        settingsStore ??= runInInjectionContext(injector, () => inject(Store));
        return settingsStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      showConfirmDialog,
      showToastMessages,
      toggleDarkMode: store._settingsStore().toggleDarkMode,
      toggleBookmark: store._settingsStore().toggleBookmark,
      toggleAvailableComponent: store._settingsStore().toggleAvailableComponent,
      onNavigation: (state, header, name) => updateState(store, "[AppStore] Put ActiveState", putActiveState(state, header, name))
    };
  }),
  withComputed((store) => {
    return {
      modeIcon: computed(() => store._settingsStore().darkMode() ? "moon" : "sun"),
      bookmarks: computed(() => store._settingsStore().searcherBookmarks()),
      availableComponents: computed(() => store._settingsStore().availableComponents())
    };
  }),
  withHooks({
    onInit(store) {
      initAppHelperContext({
        httpClient: inject(HttpClient),
        confirmationService: inject(ConfirmationService),
        messageService: inject(MessageService)
      });
      effect(() => changeThemeMode(store._settingsStore().darkMode()));
    }
  }),
  // withDevtools('app-store'),
  environment.production ? withDevToolsStub("app-store") : withDevtools("app-store")
);

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
function rxMethod(generator, config) {
  if (typeof ngDevMode !== "undefined" && ngDevMode && !config?.injector) {
    assertInInjectionContext(rxMethod);
  }
  const sourceInjector = config?.injector ?? inject(Injector);
  const source$ = new Subject();
  const sourceSub = generator(source$).subscribe();
  sourceInjector.get(DestroyRef).onDestroy(() => sourceSub.unsubscribe());
  const rxMethodFn = (input2, config2) => {
    if (isStatic(input2)) {
      source$.next(input2);
      return { destroy: noop };
    }
    const callerInjector = getCallerInjector();
    if (typeof ngDevMode !== "undefined" && ngDevMode && config2?.injector === void 0 && callerInjector === void 0) {
      console.warn("@ngrx/signals/rxjs-interop: Calling a reactive method outside of", "an injection context with a signal or observable is deprecated.", "In a future version, this will throw an error.", "Either call it within an injection context", "(e.g. in a constructor or field initializer) or pass an injector", "explicitly via the config parameter.\n\nFor more information, see:", "https://ngrx.io/guide/signals/rxjs-integration#reactive-methods-and-injector-hierarchies");
    }
    const instanceInjector = config2?.injector ?? callerInjector ?? sourceInjector;
    if (typeof input2 === "function") {
      const watcher = effect(() => {
        const value = input2();
        untracked(() => source$.next(value));
      }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "watcher" } : {}), { injector: instanceInjector }));
      sourceSub.add({ unsubscribe: () => watcher.destroy() });
      return watcher;
    }
    const instanceSub = input2.subscribe((value) => source$.next(value));
    sourceSub.add(instanceSub);
    if (instanceInjector !== sourceInjector) {
      instanceInjector.get(DestroyRef).onDestroy(() => instanceSub.unsubscribe());
    }
    return { destroy: () => instanceSub.unsubscribe() };
  };
  rxMethodFn.destroy = sourceSub.unsubscribe.bind(sourceSub);
  return rxMethodFn;
}
function isStatic(value) {
  return typeof value !== "function" && !isObservable(value);
}
function getCallerInjector() {
  try {
    return inject(Injector);
  } catch {
    return void 0;
  }
}

// node_modules/@ngrx/operators/fesm2022/ngrx-operators.mjs
function tapResponse(observerOrNext, error, complete) {
  const observer = typeof observerOrNext === "function" ? {
    next: observerOrNext,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    error,
    complete
  } : observerOrNext;
  return (source) => source.pipe(tap({ next: observer.next, complete: observer.complete }), catchError((error2) => {
    observer.error(error2);
    return EMPTY;
  }), observer.finalize ? finalize(observer.finalize) : (source$) => source$);
}

export {
  signalStore,
  withProps,
  withComputed,
  withHooks,
  withMethods,
  withState,
  withDevtools,
  updateState,
  withDevToolsStub,
  environment,
  Store,
  Store2,
  rxMethod,
  tapResponse,
  form,
  applyEach,
  readonly,
  validate,
  required,
  FormField
};
//# sourceMappingURL=chunk-SWDPWGAA.js.map
