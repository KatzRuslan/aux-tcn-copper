import {
  Store2 as Store,
  environment,
  rxMethod,
  signalStore,
  tapResponse,
  updateState,
  validate,
  withComputed,
  withDevToolsStub,
  withDevtools,
  withHooks,
  withMethods,
  withProps,
  withState
} from "./chunk-SWDPWGAA.js";
import {
  Ve,
  ke,
  ns
} from "./chunk-O5OVYJU6.js";
import {
  Injector,
  computed,
  effect,
  from,
  inject,
  map,
  pipe,
  runInInjectionContext,
  switchMap,
  untracked
} from "./chunk-CNIBSPWC.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-RW4ES5HA.js";

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (function() {
      var undefined2;
      var VERSION = "4.18.1";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`", INVALID_TEMPL_IMPORTS_ERROR_TEXT = "Invalid `imports` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e67) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n46, iteratee) {
        var index = -1, result = Array(n46);
        while (++index < n46) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e67) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed2;
                } else if (!computed2) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n46) {
          return shuffleSelf(copyArray(array), baseClamp(n46, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed2) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed2, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed2 === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
              var computed2 = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject2(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n46) {
          var length = array.length;
          if (!length) {
            return;
          }
          n46 += n46 < 0 ? length : 0;
          return isIndex(n46, length) ? array[n46] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n46) {
          var result2 = "";
          if (!string || n46 < 1 || n46 > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n46 % 2) {
              result2 += string;
            }
            n46 = nativeFloor(n46 / 2);
            if (n46) {
              string += string;
            }
          } while (n46);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n46) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n46, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed2 = array[mid];
              if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined2, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed2 <= value : computed2 < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed2, seen)) {
              var seen = computed2;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed2) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed2);
                }
                result2.push(value);
              } else if (!includes2(seen, computed2, comparator)) {
                if (seen !== result2) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            return true;
          }
          while (++index < length) {
            var key = toKey(path[index]);
            if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
              return false;
            }
            if ((key === "constructor" || key === "prototype") && index < length - 1) {
              return false;
            }
          }
          var obj = parent(object, path);
          return obj == null || delete obj[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject2(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e67) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e67) {
            }
            try {
              return func + "";
            } catch (e67) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n46, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n46 = guard || n46 === undefined2 ? 1 : toInteger(n46);
          return baseSlice(array, n46 < 0 ? 0 : n46, length);
        }
        function dropRight(array, n46, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n46 = guard || n46 === undefined2 ? 1 : toInteger(n46);
          n46 = length - n46;
          return baseSlice(array, 0, n46 < 0 ? 0 : n46);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            baseAssignValue(result2, pair[0], pair[1]);
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n46) {
          return array && array.length ? baseNth(array, toInteger(n46)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n46, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n46 = guard || n46 === undefined2 ? 1 : toInteger(n46);
          return baseSlice(array, 0, n46 < 0 ? 0 : n46);
        }
        function takeRight(array, n46, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n46 = guard || n46 === undefined2 ? 1 : toInteger(n46);
          n46 = length - n46;
          return baseSlice(array, n46 < 0 ? 0 : n46, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n46, guard) {
          if (guard ? isIterateeCall(collection, n46, guard) : n46 === undefined2) {
            n46 = 1;
          } else {
            n46 = toInteger(n46);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n46);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n46, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n46 = toInteger(n46);
          return function() {
            if (--n46 < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n46, guard) {
          n46 = guard ? undefined2 : n46;
          n46 = func && n46 == null ? func.length : n46;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n46);
        }
        function before(n46, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n46 = toInteger(n46);
          return function() {
            if (--n46 > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n46 <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject2(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual2(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject2(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject2(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random2(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp2 = lower;
            lower = upper;
            upper = temp2;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst2(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n46, guard) {
          if (guard ? isIterateeCall(string, n46, guard) : n46 === undefined2) {
            n46 = 1;
          } else {
            n46 = toInteger(n46);
          }
          return baseRepeat(toString(string), n46);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst2(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          arrayEach(importsKeys, function(key) {
            if (reForbiddenIdentifierChars.test(key)) {
              throw new Error2(INVALID_TEMPL_IMPORTS_ERROR_TEXT);
            }
          });
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst2 = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e67) {
            return isError(e67) ? e67 : new Error2(e67);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n46) {
          n46 = toInteger(n46);
          return baseRest(function(args) {
            return baseNth(args, n46);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n46, iteratee2) {
          n46 = toInteger(n46);
          if (n46 < 1 || n46 > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n46, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n46 -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n46) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor5 = createRound("floor");
        function max6(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min6(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply2 = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round7 = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor5;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual2;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject2;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max6;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min6;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply2;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random2;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round7;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst2;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n46) {
            n46 = n46 === undefined2 ? 1 : nativeMax(toInteger(n46), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n46, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n46, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n46) {
            return this.reverse()[methodName](n46).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      });
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// node_modules/@primeuix/themes/dist/index.mjs
var t = (...t57) => ke(...t57);
var a = (...t57) => Ve(...t57);

// node_modules/chroma-js/src/utils/limit.js
var { min, max } = Math;
var limit_default = (x, low = 0, high = 1) => {
  return min(max(low, x), high);
};

// node_modules/chroma-js/src/utils/clip_rgb.js
var clip_rgb_default = (rgb3) => {
  rgb3._clipped = false;
  rgb3._unclipped = rgb3.slice(0);
  for (let i39 = 0; i39 <= 3; i39++) {
    if (i39 < 3) {
      if (rgb3[i39] < 0 || rgb3[i39] > 255) rgb3._clipped = true;
      rgb3[i39] = limit_default(rgb3[i39], 0, 255);
    } else if (i39 === 3) {
      rgb3[i39] = limit_default(rgb3[i39], 0, 1);
    }
  }
  return rgb3;
};

// node_modules/chroma-js/src/utils/type.js
var classToType = {};
for (let name of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
]) {
  classToType[`[object ${name}]`] = name.toLowerCase();
}
function type_default(obj) {
  return classToType[Object.prototype.toString.call(obj)] || "object";
}

// node_modules/chroma-js/src/utils/unpack.js
var unpack_default = (args, keyOrder = null) => {
  if (args.length >= 3) return Array.prototype.slice.call(args);
  if (type_default(args[0]) == "object" && keyOrder) {
    return keyOrder.split("").filter((k3) => args[0][k3] !== void 0).map((k3) => args[0][k3]);
  }
  return args[0].slice(0);
};

// node_modules/chroma-js/src/utils/last.js
var last_default = (args) => {
  if (args.length < 2) return null;
  const l22 = args.length - 1;
  if (type_default(args[l22]) == "string") return args[l22].toLowerCase();
  return null;
};

// node_modules/chroma-js/src/utils/index.js
var { PI, min: min2, max: max2 } = Math;
var rnd2 = (a50) => Math.round(a50 * 100) / 100;
var rnd3 = (a50) => Math.round(a50 * 100) / 100;
var TWOPI = PI * 2;
var PITHIRD = PI / 3;
var DEG2RAD = PI / 180;
var RAD2DEG = 180 / PI;
function reverse3(arr) {
  return [...arr.slice(0, 3).reverse(), ...arr.slice(3)];
}

// node_modules/chroma-js/src/io/input.js
var input_default = {
  format: {},
  autodetect: []
};

// node_modules/chroma-js/src/Color.js
var Color = class {
  constructor(...args) {
    const me = this;
    if (type_default(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
      return args[0];
    }
    let mode = last_default(args);
    let autodetect = false;
    if (!mode) {
      autodetect = true;
      if (!input_default.sorted) {
        input_default.autodetect = input_default.autodetect.sort((a50, b6) => b6.p - a50.p);
        input_default.sorted = true;
      }
      for (let chk of input_default.autodetect) {
        mode = chk.test(...args);
        if (mode) break;
      }
    }
    if (input_default.format[mode]) {
      const rgb3 = input_default.format[mode].apply(
        null,
        autodetect ? args : args.slice(0, -1)
      );
      me._rgb = clip_rgb_default(rgb3);
    } else {
      throw new Error("unknown format: " + args);
    }
    if (me._rgb.length === 3) me._rgb.push(1);
  }
  toString() {
    if (type_default(this.hex) == "function") return this.hex();
    return `[${this._rgb.join(",")}]`;
  }
};
var Color_default = Color;

// node_modules/chroma-js/src/version.js
var version = "3.2.0";

// node_modules/chroma-js/src/chroma.js
var chroma = (...args) => {
  return new Color_default(...args);
};
chroma.version = version;
var chroma_default = chroma;

// node_modules/chroma-js/src/colors/w3cx11.js
var w3cx11 = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
var w3cx11_default = w3cx11;

// node_modules/chroma-js/src/io/hex/hex2rgb.js
var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
var hex2rgb = (hex2) => {
  if (hex2.match(RE_HEX)) {
    if (hex2.length === 4 || hex2.length === 7) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 3) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
    }
    const u8 = parseInt(hex2, 16);
    const r91 = u8 >> 16;
    const g12 = u8 >> 8 & 255;
    const b6 = u8 & 255;
    return [r91, g12, b6, 1];
  }
  if (hex2.match(RE_HEXA)) {
    if (hex2.length === 5 || hex2.length === 9) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 4) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2] + hex2[3] + hex2[3];
    }
    const u8 = parseInt(hex2, 16);
    const r91 = u8 >> 24 & 255;
    const g12 = u8 >> 16 & 255;
    const b6 = u8 >> 8 & 255;
    const a50 = Math.round((u8 & 255) / 255 * 100) / 100;
    return [r91, g12, b6, a50];
  }
  throw new Error(`unknown hex color: ${hex2}`);
};
var hex2rgb_default = hex2rgb;

// node_modules/chroma-js/src/io/hex/rgb2hex.js
var { round } = Math;
var rgb2hex = (...args) => {
  let [r91, g12, b6, a50] = unpack_default(args, "rgba");
  let mode = last_default(args) || "auto";
  if (a50 === void 0) a50 = 1;
  if (mode === "auto") {
    mode = a50 < 1 ? "rgba" : "rgb";
  }
  r91 = round(r91);
  g12 = round(g12);
  b6 = round(b6);
  const u8 = r91 << 16 | g12 << 8 | b6;
  let str = "000000" + u8.toString(16);
  str = str.substr(str.length - 6);
  let hxa = "0" + round(a50 * 255).toString(16);
  hxa = hxa.substr(hxa.length - 2);
  switch (mode.toLowerCase()) {
    case "rgba":
      return `#${str}${hxa}`;
    case "argb":
      return `#${hxa}${str}`;
    default:
      return `#${str}`;
  }
};
var rgb2hex_default = rgb2hex;

// node_modules/chroma-js/src/io/named/index.js
Color_default.prototype.name = function() {
  const hex2 = rgb2hex_default(this._rgb, "rgb");
  for (let n46 of Object.keys(w3cx11_default)) {
    if (w3cx11_default[n46] === hex2) return n46.toLowerCase();
  }
  return hex2;
};
input_default.format.named = (name) => {
  name = name.toLowerCase();
  if (w3cx11_default[name]) return hex2rgb_default(w3cx11_default[name]);
  throw new Error("unknown color name: " + name);
};
input_default.autodetect.push({
  p: 5,
  test: (h7, ...rest) => {
    if (!rest.length && type_default(h7) === "string" && w3cx11_default[h7.toLowerCase()]) {
      return "named";
    }
  }
});

// node_modules/chroma-js/src/ops/alpha.js
Color_default.prototype.alpha = function(a50, mutate = false) {
  if (a50 !== void 0 && type_default(a50) === "number") {
    if (mutate) {
      this._rgb[3] = a50;
      return this;
    }
    return new Color_default([this._rgb[0], this._rgb[1], this._rgb[2], a50], "rgb");
  }
  return this._rgb[3];
};

// node_modules/chroma-js/src/ops/clipped.js
Color_default.prototype.clipped = function() {
  return this._rgb._clipped || false;
};

// node_modules/chroma-js/src/io/lab/lab-constants.js
var labConstants = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  t0: 0.137931034,
  // 4 / 29
  t1: 0.206896552,
  // 6 / 29
  t2: 0.12841855,
  // 3 * t1 * t1
  t3: 8856452e-9,
  // t1 * t1 * t1,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
};
var lab_constants_default = labConstants;
var ILLUMINANTS = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function setLabWhitePoint(name) {
  const ill = ILLUMINANTS.get(String(name).toLowerCase());
  if (!ill) {
    throw new Error("unknown Lab illuminant " + name);
  }
  labConstants.labWhitePoint = name;
  labConstants.Xn = ill[0];
  labConstants.Zn = ill[1];
}
function getLabWhitePoint() {
  return labConstants.labWhitePoint;
}

// node_modules/chroma-js/src/io/lab/lab2rgb.js
var lab2rgb = (...args) => {
  args = unpack_default(args, "lab");
  const [L, a50, b6] = args;
  const [x, y2, z] = lab2xyz(L, a50, b6);
  const [r91, g12, b_] = xyz2rgb(x, y2, z);
  return [r91, g12, b_, args.length > 3 ? args[3] : 1];
};
var lab2xyz = (L, a50, b6) => {
  const { kE, kK, kKE, Xn, Yn, Zn } = lab_constants_default;
  const fy = (L + 16) / 116;
  const fx = 2e-3 * a50 + fy;
  const fz = fy - 5e-3 * b6;
  const fx3 = fx * fx * fx;
  const fz3 = fz * fz * fz;
  const xr = fx3 > kE ? fx3 : (116 * fx - 16) / kK;
  const yr = L > kKE ? Math.pow((L + 16) / 116, 3) : L / kK;
  const zr = fz3 > kE ? fz3 : (116 * fz - 16) / kK;
  const x = xr * Xn;
  const y2 = yr * Yn;
  const z = zr * Zn;
  return [x, y2, z];
};
var compand = (linear) => {
  const sign = Math.sign(linear);
  linear = Math.abs(linear);
  return (linear <= 31308e-7 ? linear * 12.92 : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055) * sign;
};
var xyz2rgb = (x, y2, z) => {
  const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } = lab_constants_default;
  const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  const Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
  const Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
  const Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
  const X1 = (x * MtxAdaptMa.m00 + y2 * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) * (Ad / As);
  const Y1 = (x * MtxAdaptMa.m01 + y2 * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) * (Bd / Bs);
  const Z1 = (x * MtxAdaptMa.m02 + y2 * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) * (Cd / Cs);
  const X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
  const Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
  const Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
  const r91 = compand(
    X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20
  );
  const g12 = compand(
    X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21
  );
  const b6 = compand(
    X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22
  );
  return [r91 * 255, g12 * 255, b6 * 255];
};
var lab2rgb_default = lab2rgb;

// node_modules/chroma-js/src/io/lab/rgb2lab.js
var rgb2lab = (...args) => {
  const [r91, g12, b6, ...rest] = unpack_default(args, "rgb");
  const [x, y2, z] = rgb2xyz(r91, g12, b6);
  const [L, a50, b_] = xyz2lab(x, y2, z);
  return [L, a50, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function xyz2lab(x, y2, z) {
  const { Xn, Yn, Zn, kE, kK } = lab_constants_default;
  const xr = x / Xn;
  const yr = y2 / Yn;
  const zr = z / Zn;
  const fx = xr > kE ? Math.pow(xr, 1 / 3) : (kK * xr + 16) / 116;
  const fy = yr > kE ? Math.pow(yr, 1 / 3) : (kK * yr + 16) / 116;
  const fz = zr > kE ? Math.pow(zr, 1 / 3) : (kK * zr + 16) / 116;
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
function gammaAdjustSRGB(companded) {
  const sign = Math.sign(companded);
  companded = Math.abs(companded);
  const linear = companded <= 0.04045 ? companded / 12.92 : Math.pow((companded + 0.055) / 1.055, 2.4);
  return linear * sign;
}
var rgb2xyz = (r91, g12, b6) => {
  r91 = gammaAdjustSRGB(r91 / 255);
  g12 = gammaAdjustSRGB(g12 / 255);
  b6 = gammaAdjustSRGB(b6 / 255);
  const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } = lab_constants_default;
  let x = r91 * MtxRGB2XYZ.m00 + g12 * MtxRGB2XYZ.m10 + b6 * MtxRGB2XYZ.m20;
  let y2 = r91 * MtxRGB2XYZ.m01 + g12 * MtxRGB2XYZ.m11 + b6 * MtxRGB2XYZ.m21;
  let z = r91 * MtxRGB2XYZ.m02 + g12 * MtxRGB2XYZ.m12 + b6 * MtxRGB2XYZ.m22;
  const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  let X = x * MtxAdaptMa.m00 + y2 * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
  let Y = x * MtxAdaptMa.m01 + y2 * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
  let Z = x * MtxAdaptMa.m02 + y2 * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;
  X *= Ad / As;
  Y *= Bd / Bs;
  Z *= Cd / Cs;
  x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
  y2 = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
  z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
  return [x, y2, z];
};
var rgb2lab_default = rgb2lab;

// node_modules/chroma-js/src/io/lab/index.js
Color_default.prototype.lab = function() {
  return rgb2lab_default(this._rgb);
};
var lab = (...args) => new Color_default(...args, "lab");
Object.assign(chroma_default, { lab, getLabWhitePoint, setLabWhitePoint });
input_default.format.lab = lab2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "lab");
    if (type_default(args) === "array" && args.length === 3) {
      return "lab";
    }
  }
});

// node_modules/chroma-js/src/ops/darken.js
Color_default.prototype.darken = function(amount = 1) {
  const me = this;
  const lab3 = me.lab();
  lab3[0] -= lab_constants_default.Kn * amount;
  return new Color_default(lab3, "lab").alpha(me.alpha(), true);
};
Color_default.prototype.brighten = function(amount = 1) {
  return this.darken(-amount);
};
Color_default.prototype.darker = Color_default.prototype.darken;
Color_default.prototype.brighter = Color_default.prototype.brighten;

// node_modules/chroma-js/src/ops/get.js
Color_default.prototype.get = function(mc) {
  const [mode, channel] = mc.split(".");
  const src = this[mode]();
  if (channel) {
    const i39 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
    if (i39 > -1) return src[i39];
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};

// node_modules/chroma-js/src/ops/luminance.js
var { pow } = Math;
var EPS = 1e-7;
var MAX_ITER = 20;
Color_default.prototype.luminance = function(lum2, mode = "rgb") {
  if (lum2 !== void 0 && type_default(lum2) === "number") {
    if (lum2 === 0) {
      return new Color_default([0, 0, 0, this._rgb[3]], "rgb");
    }
    if (lum2 === 1) {
      return new Color_default([255, 255, 255, this._rgb[3]], "rgb");
    }
    let cur_lum = this.luminance();
    let max_iter = MAX_ITER;
    const test = (low, high) => {
      const mid = low.interpolate(high, 0.5, mode);
      const lm = mid.luminance();
      if (Math.abs(lum2 - lm) < EPS || !max_iter--) {
        return mid;
      }
      return lm > lum2 ? test(low, mid) : test(mid, high);
    };
    const rgb3 = (cur_lum > lum2 ? test(new Color_default([0, 0, 0]), this) : test(this, new Color_default([255, 255, 255]))).rgb();
    return new Color_default([...rgb3, this._rgb[3]]);
  }
  return rgb2luminance(...this._rgb.slice(0, 3));
};
var rgb2luminance = (r91, g12, b6) => {
  r91 = luminance_x(r91);
  g12 = luminance_x(g12);
  b6 = luminance_x(b6);
  return 0.2126 * r91 + 0.7152 * g12 + 0.0722 * b6;
};
var luminance_x = (x) => {
  x /= 255;
  return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
};

// node_modules/chroma-js/src/interpolator/index.js
var interpolator_default = {};

// node_modules/chroma-js/src/generator/mix.js
var mix_default = (col1, col2, f13 = 0.5, ...rest) => {
  let mode = rest[0] || "lrgb";
  if (!interpolator_default[mode] && !rest.length) {
    mode = Object.keys(interpolator_default)[0];
  }
  if (!interpolator_default[mode]) {
    throw new Error(`interpolation mode ${mode} is not defined`);
  }
  if (type_default(col1) !== "object") col1 = new Color_default(col1);
  if (type_default(col2) !== "object") col2 = new Color_default(col2);
  return interpolator_default[mode](col1, col2, f13).alpha(
    col1.alpha() + f13 * (col2.alpha() - col1.alpha())
  );
};

// node_modules/chroma-js/src/ops/mix.js
Color_default.prototype.mix = Color_default.prototype.interpolate = function(col2, f13 = 0.5, ...rest) {
  return mix_default(this, col2, f13, ...rest);
};

// node_modules/chroma-js/src/ops/premultiply.js
Color_default.prototype.premultiply = function(mutate = false) {
  const rgb3 = this._rgb;
  const a50 = rgb3[3];
  if (mutate) {
    this._rgb = [rgb3[0] * a50, rgb3[1] * a50, rgb3[2] * a50, a50];
    return this;
  } else {
    return new Color_default([rgb3[0] * a50, rgb3[1] * a50, rgb3[2] * a50, a50], "rgb");
  }
};

// node_modules/chroma-js/src/io/lch/lch2lab.js
var { sin, cos } = Math;
var lch2lab = (...args) => {
  let [l22, c24, h7] = unpack_default(args, "lch");
  if (isNaN(h7)) h7 = 0;
  h7 = h7 * DEG2RAD;
  return [l22, cos(h7) * c24, sin(h7) * c24];
};
var lch2lab_default = lch2lab;

// node_modules/chroma-js/src/io/lch/lch2rgb.js
var lch2rgb = (...args) => {
  args = unpack_default(args, "lch");
  const [l22, c24, h7] = args;
  const [L, a50, b_] = lch2lab_default(l22, c24, h7);
  const [r91, g12, b6] = lab2rgb_default(L, a50, b_);
  return [r91, g12, b6, args.length > 3 ? args[3] : 1];
};
var lch2rgb_default = lch2rgb;

// node_modules/chroma-js/src/io/lch/hcl2rgb.js
var hcl2rgb = (...args) => {
  const hcl2 = reverse3(unpack_default(args, "hcl"));
  return lch2rgb_default(...hcl2);
};
var hcl2rgb_default = hcl2rgb;

// node_modules/chroma-js/src/io/lch/lab2lch.js
var { sqrt, atan2, round: round2 } = Math;
var lab2lch = (...args) => {
  const [l22, a50, b6] = unpack_default(args, "lab");
  const c24 = sqrt(a50 * a50 + b6 * b6);
  let h7 = (atan2(b6, a50) * RAD2DEG + 360) % 360;
  if (round2(c24 * 1e4) === 0) h7 = Number.NaN;
  return [l22, c24, h7];
};
var lab2lch_default = lab2lch;

// node_modules/chroma-js/src/io/lch/rgb2lch.js
var rgb2lch = (...args) => {
  const [r91, g12, b6, ...rest] = unpack_default(args, "rgb");
  const [l22, a50, b_] = rgb2lab_default(r91, g12, b6);
  const [L, c24, h7] = lab2lch_default(l22, a50, b_);
  return [L, c24, h7, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
var rgb2lch_default = rgb2lch;

// node_modules/chroma-js/src/io/lch/index.js
Color_default.prototype.lch = function() {
  return rgb2lch_default(this._rgb);
};
Color_default.prototype.hcl = function() {
  return reverse3(rgb2lch_default(this._rgb));
};
var lch = (...args) => new Color_default(...args, "lch");
var hcl = (...args) => new Color_default(...args, "hcl");
Object.assign(chroma_default, { lch, hcl });
input_default.format.lch = lch2rgb_default;
input_default.format.hcl = hcl2rgb_default;
["lch", "hcl"].forEach(
  (m5) => input_default.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack_default(args, m5);
      if (type_default(args) === "array" && args.length === 3) {
        return m5;
      }
    }
  })
);

// node_modules/chroma-js/src/ops/saturate.js
Color_default.prototype.saturate = function(amount = 1) {
  const me = this;
  const lch3 = me.lch();
  lch3[1] += lab_constants_default.Kn * amount;
  if (lch3[1] < 0) lch3[1] = 0;
  return new Color_default(lch3, "lch").alpha(me.alpha(), true);
};
Color_default.prototype.desaturate = function(amount = 1) {
  return this.saturate(-amount);
};

// node_modules/chroma-js/src/ops/set.js
Color_default.prototype.set = function(mc, value, mutate = false) {
  const [mode, channel] = mc.split(".");
  const src = this[mode]();
  if (channel) {
    const i39 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
    if (i39 > -1) {
      if (type_default(value) == "string") {
        switch (value.charAt(0)) {
          case "+":
            src[i39] += +value;
            break;
          case "-":
            src[i39] += +value;
            break;
          case "*":
            src[i39] *= +value.substr(1);
            break;
          case "/":
            src[i39] /= +value.substr(1);
            break;
          default:
            src[i39] = +value;
        }
      } else if (type_default(value) === "number") {
        src[i39] = value;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const out = new Color_default(src, mode);
      if (mutate) {
        this._rgb = out._rgb;
        return this;
      }
      return out;
    }
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};

// node_modules/chroma-js/src/ops/shade.js
Color_default.prototype.tint = function(f13 = 0.5, ...rest) {
  return mix_default(this, "white", f13, ...rest);
};
Color_default.prototype.shade = function(f13 = 0.5, ...rest) {
  return mix_default(this, "black", f13, ...rest);
};

// node_modules/chroma-js/src/interpolator/rgb.js
var rgb = (col1, col2, f13) => {
  const xyz0 = col1._rgb;
  const xyz1 = col2._rgb;
  return new Color_default(
    xyz0[0] + f13 * (xyz1[0] - xyz0[0]),
    xyz0[1] + f13 * (xyz1[1] - xyz0[1]),
    xyz0[2] + f13 * (xyz1[2] - xyz0[2]),
    "rgb"
  );
};
interpolator_default.rgb = rgb;

// node_modules/chroma-js/src/interpolator/lrgb.js
var { sqrt: sqrt2, pow: pow2 } = Math;
var lrgb = (col1, col2, f13) => {
  const [x1, y1, z1] = col1._rgb;
  const [x2, y2, z2] = col2._rgb;
  return new Color_default(
    sqrt2(pow2(x1, 2) * (1 - f13) + pow2(x2, 2) * f13),
    sqrt2(pow2(y1, 2) * (1 - f13) + pow2(y2, 2) * f13),
    sqrt2(pow2(z1, 2) * (1 - f13) + pow2(z2, 2) * f13),
    "rgb"
  );
};
interpolator_default.lrgb = lrgb;

// node_modules/chroma-js/src/interpolator/lab.js
var lab2 = (col1, col2, f13) => {
  const xyz0 = col1.lab();
  const xyz1 = col2.lab();
  return new Color_default(
    xyz0[0] + f13 * (xyz1[0] - xyz0[0]),
    xyz0[1] + f13 * (xyz1[1] - xyz0[1]),
    xyz0[2] + f13 * (xyz1[2] - xyz0[2]),
    "lab"
  );
};
interpolator_default.lab = lab2;

// node_modules/chroma-js/src/interpolator/_hsx.js
var hsx_default = (col1, col2, f13, m5) => {
  let xyz0, xyz1;
  if (m5 === "hsl") {
    xyz0 = col1.hsl();
    xyz1 = col2.hsl();
  } else if (m5 === "hsv") {
    xyz0 = col1.hsv();
    xyz1 = col2.hsv();
  } else if (m5 === "hcg") {
    xyz0 = col1.hcg();
    xyz1 = col2.hcg();
  } else if (m5 === "hsi") {
    xyz0 = col1.hsi();
    xyz1 = col2.hsi();
  } else if (m5 === "lch" || m5 === "hcl") {
    m5 = "hcl";
    xyz0 = col1.hcl();
    xyz1 = col2.hcl();
  } else if (m5 === "oklch") {
    xyz0 = col1.oklch().reverse();
    xyz1 = col2.oklch().reverse();
  }
  let hue0, hue1, sat0, sat1, lbv0, lbv1;
  if (m5.substr(0, 1) === "h" || m5 === "oklch") {
    [hue0, sat0, lbv0] = xyz0;
    [hue1, sat1, lbv1] = xyz1;
  }
  let sat, hue, lbv, dh;
  if (!isNaN(hue0) && !isNaN(hue1)) {
    if (hue1 > hue0 && hue1 - hue0 > 180) {
      dh = hue1 - (hue0 + 360);
    } else if (hue1 < hue0 && hue0 - hue1 > 180) {
      dh = hue1 + 360 - hue0;
    } else {
      dh = hue1 - hue0;
    }
    hue = hue0 + f13 * dh;
  } else if (!isNaN(hue0)) {
    hue = hue0;
    if ((lbv1 == 1 || lbv1 == 0) && m5 != "hsv") sat = sat0;
  } else if (!isNaN(hue1)) {
    hue = hue1;
    if ((lbv0 == 1 || lbv0 == 0) && m5 != "hsv") sat = sat1;
  } else {
    hue = Number.NaN;
  }
  if (sat === void 0) sat = sat0 + f13 * (sat1 - sat0);
  lbv = lbv0 + f13 * (lbv1 - lbv0);
  return m5 === "oklch" ? new Color_default([lbv, sat, hue], m5) : new Color_default([hue, sat, lbv], m5);
};

// node_modules/chroma-js/src/interpolator/lch.js
var lch2 = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "lch");
};
interpolator_default.lch = lch2;
interpolator_default.hcl = lch2;

// node_modules/chroma-js/src/io/num/num2rgb.js
var num2rgb = (num3) => {
  if (type_default(num3) == "number" && num3 >= 0 && num3 <= 16777215) {
    const r91 = num3 >> 16;
    const g12 = num3 >> 8 & 255;
    const b6 = num3 & 255;
    return [r91, g12, b6, 1];
  }
  throw new Error("unknown num color: " + num3);
};
var num2rgb_default = num2rgb;

// node_modules/chroma-js/src/io/num/rgb2num.js
var rgb2num = (...args) => {
  const [r91, g12, b6] = unpack_default(args, "rgb");
  return (r91 << 16) + (g12 << 8) + b6;
};
var rgb2num_default = rgb2num;

// node_modules/chroma-js/src/io/num/index.js
Color_default.prototype.num = function() {
  return rgb2num_default(this._rgb);
};
var num = (...args) => new Color_default(...args, "num");
Object.assign(chroma_default, { num });
input_default.format.num = num2rgb_default;
input_default.autodetect.push({
  p: 5,
  test: (...args) => {
    if (args.length === 1 && type_default(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
      return "num";
    }
  }
});

// node_modules/chroma-js/src/interpolator/num.js
var num2 = (col1, col2, f13) => {
  const c1 = col1.num();
  const c24 = col2.num();
  return new Color_default(c1 + f13 * (c24 - c1), "num");
};
interpolator_default.num = num2;

// node_modules/chroma-js/src/io/hcg/hcg2rgb.js
var { floor } = Math;
var hcg2rgb = (...args) => {
  args = unpack_default(args, "hcg");
  let [h7, c24, _g] = args;
  let r91, g12, b6;
  _g = _g * 255;
  const _c = c24 * 255;
  if (c24 === 0) {
    r91 = g12 = b6 = _g;
  } else {
    if (h7 === 360) h7 = 0;
    if (h7 > 360) h7 -= 360;
    if (h7 < 0) h7 += 360;
    h7 /= 60;
    const i39 = floor(h7);
    const f13 = h7 - i39;
    const p7 = _g * (1 - c24);
    const q = p7 + _c * (1 - f13);
    const t57 = p7 + _c * f13;
    const v2 = p7 + _c;
    switch (i39) {
      case 0:
        [r91, g12, b6] = [v2, t57, p7];
        break;
      case 1:
        [r91, g12, b6] = [q, v2, p7];
        break;
      case 2:
        [r91, g12, b6] = [p7, v2, t57];
        break;
      case 3:
        [r91, g12, b6] = [p7, q, v2];
        break;
      case 4:
        [r91, g12, b6] = [t57, p7, v2];
        break;
      case 5:
        [r91, g12, b6] = [v2, p7, q];
        break;
    }
  }
  return [r91, g12, b6, args.length > 3 ? args[3] : 1];
};
var hcg2rgb_default = hcg2rgb;

// node_modules/chroma-js/src/io/hcg/rgb2hcg.js
var rgb2hcg = (...args) => {
  const [r91, g12, b6] = unpack_default(args, "rgb");
  const minRgb = min2(r91, g12, b6);
  const maxRgb = max2(r91, g12, b6);
  const delta = maxRgb - minRgb;
  const c24 = delta * 100 / 255;
  const _g = minRgb / (255 - delta) * 100;
  let h7;
  if (delta === 0) {
    h7 = Number.NaN;
  } else {
    if (r91 === maxRgb) h7 = (g12 - b6) / delta;
    if (g12 === maxRgb) h7 = 2 + (b6 - r91) / delta;
    if (b6 === maxRgb) h7 = 4 + (r91 - g12) / delta;
    h7 *= 60;
    if (h7 < 0) h7 += 360;
  }
  return [h7, c24, _g];
};
var rgb2hcg_default = rgb2hcg;

// node_modules/chroma-js/src/io/hcg/index.js
Color_default.prototype.hcg = function() {
  return rgb2hcg_default(this._rgb);
};
var hcg = (...args) => new Color_default(...args, "hcg");
chroma_default.hcg = hcg;
input_default.format.hcg = hcg2rgb_default;
input_default.autodetect.push({
  p: 1,
  test: (...args) => {
    args = unpack_default(args, "hcg");
    if (type_default(args) === "array" && args.length === 3) {
      return "hcg";
    }
  }
});

// node_modules/chroma-js/src/interpolator/hcg.js
var hcg2 = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "hcg");
};
interpolator_default.hcg = hcg2;

// node_modules/chroma-js/src/io/hsi/hsi2rgb.js
var { cos: cos2 } = Math;
var hsi2rgb = (...args) => {
  args = unpack_default(args, "hsi");
  let [h7, s15, i39] = args;
  let r91, g12, b6;
  if (isNaN(h7)) h7 = 0;
  if (isNaN(s15)) s15 = 0;
  if (h7 > 360) h7 -= 360;
  if (h7 < 0) h7 += 360;
  h7 /= 360;
  if (h7 < 1 / 3) {
    b6 = (1 - s15) / 3;
    r91 = (1 + s15 * cos2(TWOPI * h7) / cos2(PITHIRD - TWOPI * h7)) / 3;
    g12 = 1 - (b6 + r91);
  } else if (h7 < 2 / 3) {
    h7 -= 1 / 3;
    r91 = (1 - s15) / 3;
    g12 = (1 + s15 * cos2(TWOPI * h7) / cos2(PITHIRD - TWOPI * h7)) / 3;
    b6 = 1 - (r91 + g12);
  } else {
    h7 -= 2 / 3;
    g12 = (1 - s15) / 3;
    b6 = (1 + s15 * cos2(TWOPI * h7) / cos2(PITHIRD - TWOPI * h7)) / 3;
    r91 = 1 - (g12 + b6);
  }
  r91 = limit_default(i39 * r91 * 3);
  g12 = limit_default(i39 * g12 * 3);
  b6 = limit_default(i39 * b6 * 3);
  return [r91 * 255, g12 * 255, b6 * 255, args.length > 3 ? args[3] : 1];
};
var hsi2rgb_default = hsi2rgb;

// node_modules/chroma-js/src/io/hsi/rgb2hsi.js
var { min: min3, sqrt: sqrt3, acos } = Math;
var rgb2hsi = (...args) => {
  let [r91, g12, b6] = unpack_default(args, "rgb");
  r91 /= 255;
  g12 /= 255;
  b6 /= 255;
  let h7;
  const min_ = min3(r91, g12, b6);
  const i39 = (r91 + g12 + b6) / 3;
  const s15 = i39 > 0 ? 1 - min_ / i39 : 0;
  if (s15 === 0) {
    h7 = NaN;
  } else {
    h7 = (r91 - g12 + (r91 - b6)) / 2;
    h7 /= sqrt3((r91 - g12) * (r91 - g12) + (r91 - b6) * (g12 - b6));
    h7 = acos(h7);
    if (b6 > g12) {
      h7 = TWOPI - h7;
    }
    h7 /= TWOPI;
  }
  return [h7 * 360, s15, i39];
};
var rgb2hsi_default = rgb2hsi;

// node_modules/chroma-js/src/io/hsi/index.js
Color_default.prototype.hsi = function() {
  return rgb2hsi_default(this._rgb);
};
var hsi = (...args) => new Color_default(...args, "hsi");
chroma_default.hsi = hsi;
input_default.format.hsi = hsi2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "hsi");
    if (type_default(args) === "array" && args.length === 3) {
      return "hsi";
    }
  }
});

// node_modules/chroma-js/src/interpolator/hsi.js
var hsi2 = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "hsi");
};
interpolator_default.hsi = hsi2;

// node_modules/chroma-js/src/io/hsl/hsl2rgb.js
var hsl2rgb = (...args) => {
  args = unpack_default(args, "hsl");
  const [h7, s15, l22] = args;
  let r91, g12, b6;
  if (s15 === 0) {
    r91 = g12 = b6 = l22 * 255;
  } else {
    const t310 = [0, 0, 0];
    const c24 = [0, 0, 0];
    const t210 = l22 < 0.5 ? l22 * (1 + s15) : l22 + s15 - l22 * s15;
    const t1 = 2 * l22 - t210;
    const h_ = h7 / 360;
    t310[0] = h_ + 1 / 3;
    t310[1] = h_;
    t310[2] = h_ - 1 / 3;
    for (let i39 = 0; i39 < 3; i39++) {
      if (t310[i39] < 0) t310[i39] += 1;
      if (t310[i39] > 1) t310[i39] -= 1;
      if (6 * t310[i39] < 1) c24[i39] = t1 + (t210 - t1) * 6 * t310[i39];
      else if (2 * t310[i39] < 1) c24[i39] = t210;
      else if (3 * t310[i39] < 2) c24[i39] = t1 + (t210 - t1) * (2 / 3 - t310[i39]) * 6;
      else c24[i39] = t1;
    }
    [r91, g12, b6] = [c24[0] * 255, c24[1] * 255, c24[2] * 255];
  }
  if (args.length > 3) {
    return [r91, g12, b6, args[3]];
  }
  return [r91, g12, b6, 1];
};
var hsl2rgb_default = hsl2rgb;

// node_modules/chroma-js/src/io/hsl/rgb2hsl.js
var rgb2hsl = (...args) => {
  args = unpack_default(args, "rgba");
  let [r91, g12, b6] = args;
  r91 /= 255;
  g12 /= 255;
  b6 /= 255;
  const minRgb = min2(r91, g12, b6);
  const maxRgb = max2(r91, g12, b6);
  const l22 = (maxRgb + minRgb) / 2;
  let s15, h7;
  if (maxRgb === minRgb) {
    s15 = 0;
    h7 = Number.NaN;
  } else {
    s15 = l22 < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
  }
  if (r91 == maxRgb) h7 = (g12 - b6) / (maxRgb - minRgb);
  else if (g12 == maxRgb) h7 = 2 + (b6 - r91) / (maxRgb - minRgb);
  else if (b6 == maxRgb) h7 = 4 + (r91 - g12) / (maxRgb - minRgb);
  h7 *= 60;
  if (h7 < 0) h7 += 360;
  if (args.length > 3 && args[3] !== void 0) return [h7, s15, l22, args[3]];
  return [h7, s15, l22];
};
var rgb2hsl_default = rgb2hsl;

// node_modules/chroma-js/src/io/hsl/index.js
Color_default.prototype.hsl = function() {
  return rgb2hsl_default(this._rgb);
};
var hsl = (...args) => new Color_default(...args, "hsl");
chroma_default.hsl = hsl;
input_default.format.hsl = hsl2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "hsl");
    if (type_default(args) === "array" && args.length === 3) {
      return "hsl";
    }
  }
});

// node_modules/chroma-js/src/interpolator/hsl.js
var hsl2 = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "hsl");
};
interpolator_default.hsl = hsl2;

// node_modules/chroma-js/src/io/hsv/hsv2rgb.js
var { floor: floor2 } = Math;
var hsv2rgb = (...args) => {
  args = unpack_default(args, "hsv");
  let [h7, s15, v2] = args;
  let r91, g12, b6;
  v2 *= 255;
  if (s15 === 0) {
    r91 = g12 = b6 = v2;
  } else {
    if (h7 === 360) h7 = 0;
    if (h7 > 360) h7 -= 360;
    if (h7 < 0) h7 += 360;
    h7 /= 60;
    const i39 = floor2(h7);
    const f13 = h7 - i39;
    const p7 = v2 * (1 - s15);
    const q = v2 * (1 - s15 * f13);
    const t57 = v2 * (1 - s15 * (1 - f13));
    switch (i39) {
      case 0:
        [r91, g12, b6] = [v2, t57, p7];
        break;
      case 1:
        [r91, g12, b6] = [q, v2, p7];
        break;
      case 2:
        [r91, g12, b6] = [p7, v2, t57];
        break;
      case 3:
        [r91, g12, b6] = [p7, q, v2];
        break;
      case 4:
        [r91, g12, b6] = [t57, p7, v2];
        break;
      case 5:
        [r91, g12, b6] = [v2, p7, q];
        break;
    }
  }
  return [r91, g12, b6, args.length > 3 ? args[3] : 1];
};
var hsv2rgb_default = hsv2rgb;

// node_modules/chroma-js/src/io/hsv/rgb2hsv.js
var { min: min4, max: max3 } = Math;
var rgb2hsl2 = (...args) => {
  args = unpack_default(args, "rgb");
  let [r91, g12, b6] = args;
  const min_ = min4(r91, g12, b6);
  const max_ = max3(r91, g12, b6);
  const delta = max_ - min_;
  let h7, s15, v2;
  v2 = max_ / 255;
  if (max_ === 0) {
    h7 = Number.NaN;
    s15 = 0;
  } else {
    s15 = delta / max_;
    if (r91 === max_) h7 = (g12 - b6) / delta;
    if (g12 === max_) h7 = 2 + (b6 - r91) / delta;
    if (b6 === max_) h7 = 4 + (r91 - g12) / delta;
    h7 *= 60;
    if (h7 < 0) h7 += 360;
  }
  return [h7, s15, v2];
};
var rgb2hsv_default = rgb2hsl2;

// node_modules/chroma-js/src/io/hsv/index.js
Color_default.prototype.hsv = function() {
  return rgb2hsv_default(this._rgb);
};
var hsv = (...args) => new Color_default(...args, "hsv");
chroma_default.hsv = hsv;
input_default.format.hsv = hsv2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "hsv");
    if (type_default(args) === "array" && args.length === 3) {
      return "hsv";
    }
  }
});

// node_modules/chroma-js/src/interpolator/hsv.js
var hsv2 = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "hsv");
};
interpolator_default.hsv = hsv2;

// node_modules/chroma-js/src/utils/multiply-matrices.js
function multiplyMatrices(A, B) {
  let m5 = A.length;
  if (!Array.isArray(A[0])) {
    A = [A];
  }
  if (!Array.isArray(B[0])) {
    B = B.map((x) => [x]);
  }
  let p7 = B[0].length;
  let B_cols = B[0].map((_, i39) => B.map((x) => x[i39]));
  let product = A.map(
    (row) => B_cols.map((col) => {
      if (!Array.isArray(row)) {
        return col.reduce((a50, c24) => a50 + c24 * row, 0);
      }
      return row.reduce((a50, c24, i39) => a50 + c24 * (col[i39] || 0), 0);
    })
  );
  if (m5 === 1) {
    product = product[0];
  }
  if (p7 === 1) {
    return product.map((x) => x[0]);
  }
  return product;
}

// node_modules/chroma-js/src/io/oklab/oklab2rgb.js
var oklab2rgb = (...args) => {
  args = unpack_default(args, "lab");
  const [L, a50, b6, ...rest] = args;
  const [X, Y, Z] = OKLab_to_XYZ([L, a50, b6]);
  const [r91, g12, b_] = xyz2rgb(X, Y, Z);
  return [r91, g12, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function OKLab_to_XYZ(OKLab) {
  var LMStoXYZ = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var OKLabtoLMS = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
  return multiplyMatrices(
    LMStoXYZ,
    LMSnl.map((c24) => c24 ** 3)
  );
}
var oklab2rgb_default = oklab2rgb;

// node_modules/chroma-js/src/io/oklab/rgb2oklab.js
var rgb2oklab = (...args) => {
  const [r91, g12, b6, ...rest] = unpack_default(args, "rgb");
  const xyz = rgb2xyz(r91, g12, b6);
  const oklab3 = XYZ_to_OKLab(xyz);
  return [...oklab3, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function XYZ_to_OKLab(XYZ) {
  const XYZtoLMS = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  const LMStoOKLab = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  const LMS = multiplyMatrices(XYZtoLMS, XYZ);
  return multiplyMatrices(
    LMStoOKLab,
    LMS.map((c24) => Math.cbrt(c24))
  );
}
var rgb2oklab_default = rgb2oklab;

// node_modules/chroma-js/src/io/oklab/index.js
Color_default.prototype.oklab = function() {
  return rgb2oklab_default(this._rgb);
};
var oklab = (...args) => new Color_default(...args, "oklab");
Object.assign(chroma_default, { oklab });
input_default.format.oklab = oklab2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "oklab");
    if (type_default(args) === "array" && args.length === 3) {
      return "oklab";
    }
  }
});

// node_modules/chroma-js/src/interpolator/oklab.js
var oklab2 = (col1, col2, f13) => {
  const xyz0 = col1.oklab();
  const xyz1 = col2.oklab();
  return new Color_default(
    xyz0[0] + f13 * (xyz1[0] - xyz0[0]),
    xyz0[1] + f13 * (xyz1[1] - xyz0[1]),
    xyz0[2] + f13 * (xyz1[2] - xyz0[2]),
    "oklab"
  );
};
interpolator_default.oklab = oklab2;

// node_modules/chroma-js/src/interpolator/oklch.js
var oklch = (col1, col2, f13) => {
  return hsx_default(col1, col2, f13, "oklch");
};
interpolator_default.oklch = oklch;

// node_modules/chroma-js/src/generator/average.js
var { pow: pow3, sqrt: sqrt4, PI: PI2, cos: cos3, sin: sin2, atan2: atan22 } = Math;
var average_default = (colors, mode = "lrgb", weights = null) => {
  const l22 = colors.length;
  if (!weights) weights = Array.from(new Array(l22)).map(() => 1);
  const k3 = l22 / weights.reduce(function(a50, b6) {
    return a50 + b6;
  });
  weights.forEach((w, i39) => {
    weights[i39] *= k3;
  });
  colors = colors.map((c24) => new Color_default(c24));
  if (mode === "lrgb") {
    return _average_lrgb(colors, weights);
  }
  const first = colors.shift();
  const xyz = first.get(mode);
  const cnt = [];
  let dx = 0;
  let dy = 0;
  for (let i39 = 0; i39 < xyz.length; i39++) {
    xyz[i39] = (xyz[i39] || 0) * weights[0];
    cnt.push(isNaN(xyz[i39]) ? 0 : weights[0]);
    if (mode.charAt(i39) === "h" && !isNaN(xyz[i39])) {
      const A = xyz[i39] / 180 * PI2;
      dx += cos3(A) * weights[0];
      dy += sin2(A) * weights[0];
    }
  }
  let alpha = first.alpha() * weights[0];
  colors.forEach((c24, ci) => {
    const xyz2 = c24.get(mode);
    alpha += c24.alpha() * weights[ci + 1];
    for (let i39 = 0; i39 < xyz.length; i39++) {
      if (!isNaN(xyz2[i39])) {
        cnt[i39] += weights[ci + 1];
        if (mode.charAt(i39) === "h") {
          const A = xyz2[i39] / 180 * PI2;
          dx += cos3(A) * weights[ci + 1];
          dy += sin2(A) * weights[ci + 1];
        } else {
          xyz[i39] += xyz2[i39] * weights[ci + 1];
        }
      }
    }
  });
  for (let i39 = 0; i39 < xyz.length; i39++) {
    if (mode.charAt(i39) === "h") {
      let A = atan22(dy / cnt[i39], dx / cnt[i39]) / PI2 * 180;
      while (A < 0) A += 360;
      while (A >= 360) A -= 360;
      xyz[i39] = A;
    } else {
      xyz[i39] = xyz[i39] / cnt[i39];
    }
  }
  alpha /= l22;
  return new Color_default(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
};
var _average_lrgb = (colors, weights) => {
  const l22 = colors.length;
  const xyz = [0, 0, 0, 0];
  for (let i39 = 0; i39 < colors.length; i39++) {
    const col = colors[i39];
    const f13 = weights[i39] / l22;
    const rgb3 = col._rgb;
    xyz[0] += pow3(rgb3[0], 2) * f13;
    xyz[1] += pow3(rgb3[1], 2) * f13;
    xyz[2] += pow3(rgb3[2], 2) * f13;
    xyz[3] += rgb3[3] * f13;
  }
  xyz[0] = sqrt4(xyz[0]);
  xyz[1] = sqrt4(xyz[1]);
  xyz[2] = sqrt4(xyz[2]);
  if (xyz[3] > 0.9999999) xyz[3] = 1;
  return new Color_default(clip_rgb_default(xyz));
};

// node_modules/chroma-js/src/generator/scale.js
var { pow: pow4 } = Math;
function scale_default(colors) {
  let _mode = "rgb";
  let _nacol = chroma_default("#ccc");
  let _spread = 0;
  let _positions = [0, 1];
  let _domain = [0, 1];
  let _pos = [];
  let _padding = [0, 0];
  let _classes = false;
  let _colors = [];
  let _out = false;
  let _min = 0;
  let _max = 1;
  let _correctLightness = false;
  let _colorCache = {};
  let _useCache = true;
  let _gamma = 1;
  const setColors = function(colors2) {
    colors2 = colors2 || ["#fff", "#000"];
    if (colors2 && type_default(colors2) === "string" && chroma_default.brewer && chroma_default.brewer[colors2.toLowerCase()]) {
      colors2 = chroma_default.brewer[colors2.toLowerCase()];
    }
    if (type_default(colors2) === "array") {
      if (colors2.length === 1) {
        colors2 = [colors2[0], colors2[0]];
      }
      colors2 = colors2.slice(0);
      for (let c24 = 0; c24 < colors2.length; c24++) {
        colors2[c24] = chroma_default(colors2[c24]);
      }
      _pos.length = 0;
      for (let c24 = 0; c24 < colors2.length; c24++) {
        _pos.push(c24 / (colors2.length - 1));
      }
    }
    resetCache();
    return _colors = colors2;
  };
  const getClass = function(value) {
    if (_classes != null) {
      const n46 = _classes.length - 1;
      let i39 = 0;
      while (i39 < n46 && value >= _classes[i39]) {
        i39++;
      }
      return i39 - 1;
    }
    return 0;
  };
  let tMapLightness = (t57) => t57;
  let tMapDomain = (t57) => t57;
  const getColor = function(val, bypassMap) {
    let col, t57;
    if (bypassMap == null) {
      bypassMap = false;
    }
    if (isNaN(val) || val === null) {
      return _nacol;
    }
    if (!bypassMap) {
      if (_classes && _classes.length > 2) {
        const c24 = getClass(val);
        t57 = c24 / (_classes.length - 2);
      } else if (_max !== _min) {
        t57 = (val - _min) / (_max - _min);
      } else {
        t57 = 1;
      }
    } else {
      t57 = val;
    }
    t57 = tMapDomain(t57);
    if (!bypassMap) {
      t57 = tMapLightness(t57);
    }
    if (_gamma !== 1) {
      t57 = pow4(t57, _gamma);
    }
    t57 = _padding[0] + t57 * (1 - _padding[0] - _padding[1]);
    t57 = limit_default(t57, 0, 1);
    const k3 = Math.floor(t57 * 1e4);
    if (_useCache && _colorCache[k3]) {
      col = _colorCache[k3];
    } else {
      if (type_default(_colors) === "array") {
        for (let i39 = 0; i39 < _pos.length; i39++) {
          const p7 = _pos[i39];
          if (t57 <= p7) {
            col = _colors[i39];
            break;
          }
          if (t57 >= p7 && i39 === _pos.length - 1) {
            col = _colors[i39];
            break;
          }
          if (t57 > p7 && t57 < _pos[i39 + 1]) {
            t57 = (t57 - p7) / (_pos[i39 + 1] - p7);
            col = chroma_default.interpolate(
              _colors[i39],
              _colors[i39 + 1],
              t57,
              _mode
            );
            break;
          }
        }
      } else if (type_default(_colors) === "function") {
        col = _colors(t57);
      }
      if (_useCache) {
        _colorCache[k3] = col;
      }
    }
    return col;
  };
  var resetCache = () => _colorCache = {};
  setColors(colors);
  const f13 = function(v2) {
    const c24 = chroma_default(getColor(v2));
    if (_out && c24[_out]) {
      return c24[_out]();
    } else {
      return c24;
    }
  };
  f13.classes = function(classes) {
    if (classes != null) {
      if (type_default(classes) === "array") {
        _classes = classes;
        _positions = [classes[0], classes[classes.length - 1]];
      } else {
        const d41 = chroma_default.analyze(_positions);
        if (classes === 0) {
          _classes = [d41.min, d41.max];
        } else {
          _classes = chroma_default.limits(d41, "e", classes);
        }
      }
      return f13;
    }
    return _classes;
  };
  f13.domain = function(domain) {
    if (!arguments.length) {
      return _domain;
    }
    _domain = domain.slice(0);
    _min = domain[0];
    _max = domain[domain.length - 1];
    _pos = [];
    const k3 = _colors.length;
    if (domain.length === k3 && _min !== _max) {
      for (let d41 of Array.from(domain)) {
        _pos.push((d41 - _min) / (_max - _min));
      }
    } else {
      for (let c24 = 0; c24 < k3; c24++) {
        _pos.push(c24 / (k3 - 1));
      }
      if (domain.length > 2) {
        const tOut = domain.map((d41, i39) => i39 / (domain.length - 1));
        const tBreaks = domain.map((d41) => (d41 - _min) / (_max - _min));
        if (!tBreaks.every((val, i39) => tOut[i39] === val)) {
          tMapDomain = (t57) => {
            if (t57 <= 0 || t57 >= 1) return t57;
            let i39 = 0;
            while (t57 >= tBreaks[i39 + 1]) i39++;
            const f14 = (t57 - tBreaks[i39]) / (tBreaks[i39 + 1] - tBreaks[i39]);
            const out = tOut[i39] + f14 * (tOut[i39 + 1] - tOut[i39]);
            return out;
          };
        }
      }
    }
    _positions = [_min, _max];
    return f13;
  };
  f13.mode = function(_m) {
    if (!arguments.length) {
      return _mode;
    }
    _mode = _m;
    resetCache();
    return f13;
  };
  f13.range = function(colors2, _pos2) {
    setColors(colors2, _pos2);
    return f13;
  };
  f13.out = function(_o) {
    _out = _o;
    return f13;
  };
  f13.spread = function(val) {
    if (!arguments.length) {
      return _spread;
    }
    _spread = val;
    return f13;
  };
  f13.correctLightness = function(v2) {
    if (v2 == null) {
      v2 = true;
    }
    _correctLightness = v2;
    resetCache();
    if (_correctLightness) {
      tMapLightness = function(t57) {
        const L0 = getColor(0, true).lab()[0];
        const L1 = getColor(1, true).lab()[0];
        const pol = L0 > L1;
        let L_actual = getColor(t57, true).lab()[0];
        const L_ideal = L0 + (L1 - L0) * t57;
        let L_diff = L_actual - L_ideal;
        let t0 = 0;
        let t1 = 1;
        let max_iter = 20;
        while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
          (function() {
            if (pol) {
              L_diff *= -1;
            }
            if (L_diff < 0) {
              t0 = t57;
              t57 += (t1 - t57) * 0.5;
            } else {
              t1 = t57;
              t57 += (t0 - t57) * 0.5;
            }
            L_actual = getColor(t57, true).lab()[0];
            return L_diff = L_actual - L_ideal;
          })();
        }
        return t57;
      };
    } else {
      tMapLightness = (t57) => t57;
    }
    return f13;
  };
  f13.padding = function(p7) {
    if (p7 != null) {
      if (type_default(p7) === "number") {
        p7 = [p7, p7];
      }
      _padding = p7;
      return f13;
    } else {
      return _padding;
    }
  };
  f13.colors = function(numColors, out) {
    if (arguments.length < 2) {
      out = "hex";
    }
    let result = [];
    if (arguments.length === 0) {
      result = _colors.slice(0);
    } else if (numColors === 1) {
      result = [f13(0.5)];
    } else if (numColors > 1) {
      const dm = _positions[0];
      const dd = _positions[1] - dm;
      result = __range__(0, numColors, false).map(
        (i39) => f13(dm + i39 / (numColors - 1) * dd)
      );
    } else {
      colors = [];
      let samples = [];
      if (_classes && _classes.length > 2) {
        for (let i39 = 1, end = _classes.length, asc = 1 <= end; asc ? i39 < end : i39 > end; asc ? i39++ : i39--) {
          samples.push((_classes[i39 - 1] + _classes[i39]) * 0.5);
        }
      } else {
        samples = _positions;
      }
      result = samples.map((v2) => f13(v2));
    }
    if (chroma_default[out]) {
      result = result.map((c24) => c24[out]());
    }
    return result;
  };
  f13.cache = function(c24) {
    if (c24 != null) {
      _useCache = c24;
      return f13;
    } else {
      return _useCache;
    }
  };
  f13.gamma = function(g12) {
    if (g12 != null) {
      _gamma = g12;
      return f13;
    } else {
      return _gamma;
    }
  };
  f13.nodata = function(d41) {
    if (d41 != null) {
      _nacol = chroma_default(d41);
      return f13;
    } else {
      return _nacol;
    }
  };
  return f13;
}
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i39 = left; ascending ? i39 < end : i39 > end; ascending ? i39++ : i39--) {
    range.push(i39);
  }
  return range;
}

// node_modules/chroma-js/src/generator/bezier.js
var binom_row = function(n46) {
  let row = [1, 1];
  for (let i39 = 1; i39 < n46; i39++) {
    let newrow = [1];
    for (let j = 1; j <= row.length; j++) {
      newrow[j] = (row[j] || 0) + row[j - 1];
    }
    row = newrow;
  }
  return row;
};
var bezier = function(colors) {
  let I, lab0, lab1, lab22;
  colors = colors.map((c24) => new Color_default(c24));
  if (colors.length === 2) {
    [lab0, lab1] = colors.map((c24) => c24.lab());
    I = function(t57) {
      const lab3 = [0, 1, 2].map((i39) => lab0[i39] + t57 * (lab1[i39] - lab0[i39]));
      return new Color_default(lab3, "lab");
    };
  } else if (colors.length === 3) {
    [lab0, lab1, lab22] = colors.map((c24) => c24.lab());
    I = function(t57) {
      const lab3 = [0, 1, 2].map(
        (i39) => (1 - t57) * (1 - t57) * lab0[i39] + 2 * (1 - t57) * t57 * lab1[i39] + t57 * t57 * lab22[i39]
      );
      return new Color_default(lab3, "lab");
    };
  } else if (colors.length === 4) {
    let lab3;
    [lab0, lab1, lab22, lab3] = colors.map((c24) => c24.lab());
    I = function(t57) {
      const lab4 = [0, 1, 2].map(
        (i39) => (1 - t57) * (1 - t57) * (1 - t57) * lab0[i39] + 3 * (1 - t57) * (1 - t57) * t57 * lab1[i39] + 3 * (1 - t57) * t57 * t57 * lab22[i39] + t57 * t57 * t57 * lab3[i39]
      );
      return new Color_default(lab4, "lab");
    };
  } else if (colors.length >= 5) {
    let labs, row, n46;
    labs = colors.map((c24) => c24.lab());
    n46 = colors.length - 1;
    row = binom_row(n46);
    I = function(t57) {
      const u8 = 1 - t57;
      const lab3 = [0, 1, 2].map(
        (i39) => labs.reduce(
          (sum, el, j) => sum + row[j] * u8 ** (n46 - j) * t57 ** j * el[i39],
          0
        )
      );
      return new Color_default(lab3, "lab");
    };
  } else {
    throw new RangeError("No point in running bezier with only one color.");
  }
  return I;
};
var bezier_default = (colors) => {
  const f13 = bezier(colors);
  f13.scale = () => scale_default(f13);
  return f13;
};

// node_modules/chroma-js/src/io/rgb/index.js
var { round: round3 } = Math;
Color_default.prototype.rgb = function(rnd = true) {
  if (rnd === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(round3);
};
Color_default.prototype.rgba = function(rnd = true) {
  return this._rgb.slice(0, 4).map((v2, i39) => {
    return i39 < 3 ? rnd === false ? v2 : round3(v2) : v2;
  });
};
var rgb2 = (...args) => new Color_default(...args, "rgb");
Object.assign(chroma_default, { rgb: rgb2 });
input_default.format.rgb = (...args) => {
  const rgba = unpack_default(args, "rgba");
  if (rgba[3] === void 0) rgba[3] = 1;
  return rgba;
};
input_default.autodetect.push({
  p: 3,
  test: (...args) => {
    args = unpack_default(args, "rgba");
    if (type_default(args) === "array" && (args.length === 3 || args.length === 4 && type_default(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
      return "rgb";
    }
  }
});

// node_modules/chroma-js/src/generator/blend.js
var blend = (bottom, top, mode) => {
  if (!blend[mode]) {
    throw new Error("unknown blend mode " + mode);
  }
  return blend[mode](bottom, top);
};
var blend_f = (f13) => (bottom, top) => {
  const c0 = chroma_default(top).rgb();
  const c1 = chroma_default(bottom).rgb();
  return chroma_default.rgb(f13(c0, c1));
};
var each = (f13) => (c0, c1) => {
  const out = [];
  out[0] = f13(c0[0], c1[0]);
  out[1] = f13(c0[1], c1[1]);
  out[2] = f13(c0[2], c1[2]);
  return out;
};
var normal = (a50) => a50;
var multiply = (a50, b6) => a50 * b6 / 255;
var darken = (a50, b6) => a50 > b6 ? b6 : a50;
var lighten = (a50, b6) => a50 > b6 ? a50 : b6;
var screen = (a50, b6) => 255 * (1 - (1 - a50 / 255) * (1 - b6 / 255));
var overlay = (a50, b6) => b6 < 128 ? 2 * a50 * b6 / 255 : 255 * (1 - 2 * (1 - a50 / 255) * (1 - b6 / 255));
var burn = (a50, b6) => 255 * (1 - (1 - b6 / 255) / (a50 / 255));
var dodge = (a50, b6) => {
  if (a50 === 255) return 255;
  a50 = 255 * (b6 / 255) / (1 - a50 / 255);
  return a50 > 255 ? 255 : a50;
};
blend.normal = blend_f(each(normal));
blend.multiply = blend_f(each(multiply));
blend.screen = blend_f(each(screen));
blend.overlay = blend_f(each(overlay));
blend.darken = blend_f(each(darken));
blend.lighten = blend_f(each(lighten));
blend.dodge = blend_f(each(dodge));
blend.burn = blend_f(each(burn));
var blend_default = blend;

// node_modules/chroma-js/src/generator/cubehelix.js
var { pow: pow5, sin: sin3, cos: cos4 } = Math;
function cubehelix_default(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
  let dh = 0, dl;
  if (type_default(lightness) === "array") {
    dl = lightness[1] - lightness[0];
  } else {
    dl = 0;
    lightness = [lightness, lightness];
  }
  const f13 = function(fract) {
    const a50 = TWOPI * ((start + 120) / 360 + rotations * fract);
    const l22 = pow5(lightness[0] + dl * fract, gamma);
    const h7 = dh !== 0 ? hue[0] + fract * dh : hue;
    const amp = h7 * l22 * (1 - l22) / 2;
    const cos_a = cos4(a50);
    const sin_a = sin3(a50);
    const r91 = l22 + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
    const g12 = l22 + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
    const b6 = l22 + amp * (1.97294 * cos_a);
    return chroma_default(clip_rgb_default([r91 * 255, g12 * 255, b6 * 255, 1]));
  };
  f13.start = function(s15) {
    if (s15 == null) {
      return start;
    }
    start = s15;
    return f13;
  };
  f13.rotations = function(r91) {
    if (r91 == null) {
      return rotations;
    }
    rotations = r91;
    return f13;
  };
  f13.gamma = function(g12) {
    if (g12 == null) {
      return gamma;
    }
    gamma = g12;
    return f13;
  };
  f13.hue = function(h7) {
    if (h7 == null) {
      return hue;
    }
    hue = h7;
    if (type_default(hue) === "array") {
      dh = hue[1] - hue[0];
      if (dh === 0) {
        hue = hue[1];
      }
    } else {
      dh = 0;
    }
    return f13;
  };
  f13.lightness = function(h7) {
    if (h7 == null) {
      return lightness;
    }
    if (type_default(h7) === "array") {
      lightness = h7;
      dl = h7[1] - h7[0];
    } else {
      lightness = [h7, h7];
      dl = 0;
    }
    return f13;
  };
  f13.scale = () => chroma_default.scale(f13);
  f13.hue(hue);
  return f13;
}

// node_modules/chroma-js/src/generator/random.js
var digits = "0123456789abcdef";
var { floor: floor3, random } = Math;
var random_default = (rng = random) => {
  let code = "#";
  for (let i39 = 0; i39 < 6; i39++) {
    code += digits.charAt(floor3(rng() * 16));
  }
  return new Color_default(code, "hex");
};

// node_modules/chroma-js/src/utils/analyze.js
var { log, pow: pow6, floor: floor4, abs } = Math;
function analyze(data, key = null) {
  const r91 = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if (type_default(data) === "object") {
    data = Object.values(data);
  }
  data.forEach((val) => {
    if (key && type_default(val) === "object") val = val[key];
    if (val !== void 0 && val !== null && !isNaN(val)) {
      r91.values.push(val);
      r91.sum += val;
      if (val < r91.min) r91.min = val;
      if (val > r91.max) r91.max = val;
      r91.count += 1;
    }
  });
  r91.domain = [r91.min, r91.max];
  r91.limits = (mode, num3) => limits(r91, mode, num3);
  return r91;
}
function limits(data, mode = "equal", num3 = 7) {
  if (type_default(data) == "array") {
    data = analyze(data);
  }
  const { min: min6, max: max6 } = data;
  const values = data.values.sort((a50, b6) => a50 - b6);
  if (num3 === 1) {
    return [min6, max6];
  }
  const limits2 = [];
  if (mode.substr(0, 1) === "c") {
    limits2.push(min6);
    limits2.push(max6);
  }
  if (mode.substr(0, 1) === "e") {
    limits2.push(min6);
    for (let i39 = 1; i39 < num3; i39++) {
      limits2.push(min6 + i39 / num3 * (max6 - min6));
    }
    limits2.push(max6);
  } else if (mode.substr(0, 1) === "l") {
    if (min6 <= 0) {
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    }
    const min_log = Math.LOG10E * log(min6);
    const max_log = Math.LOG10E * log(max6);
    limits2.push(min6);
    for (let i39 = 1; i39 < num3; i39++) {
      limits2.push(pow6(10, min_log + i39 / num3 * (max_log - min_log)));
    }
    limits2.push(max6);
  } else if (mode.substr(0, 1) === "q") {
    limits2.push(min6);
    for (let i39 = 1; i39 < num3; i39++) {
      const p7 = (values.length - 1) * i39 / num3;
      const pb = floor4(p7);
      if (pb === p7) {
        limits2.push(values[pb]);
      } else {
        const pr = p7 - pb;
        limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
      }
    }
    limits2.push(max6);
  } else if (mode.substr(0, 1) === "k") {
    let cluster;
    const n46 = values.length;
    const assignments = new Array(n46);
    const clusterSizes = new Array(num3);
    let repeat = true;
    let nb_iters = 0;
    let centroids = null;
    centroids = [];
    centroids.push(min6);
    for (let i39 = 1; i39 < num3; i39++) {
      centroids.push(min6 + i39 / num3 * (max6 - min6));
    }
    centroids.push(max6);
    while (repeat) {
      for (let j = 0; j < num3; j++) {
        clusterSizes[j] = 0;
      }
      for (let i39 = 0; i39 < n46; i39++) {
        const value = values[i39];
        let mindist = Number.MAX_VALUE;
        let best;
        for (let j = 0; j < num3; j++) {
          const dist = abs(centroids[j] - value);
          if (dist < mindist) {
            mindist = dist;
            best = j;
          }
          clusterSizes[best]++;
          assignments[i39] = best;
        }
      }
      const newCentroids = new Array(num3);
      for (let j = 0; j < num3; j++) {
        newCentroids[j] = null;
      }
      for (let i39 = 0; i39 < n46; i39++) {
        cluster = assignments[i39];
        if (newCentroids[cluster] === null) {
          newCentroids[cluster] = values[i39];
        } else {
          newCentroids[cluster] += values[i39];
        }
      }
      for (let j = 0; j < num3; j++) {
        newCentroids[j] *= 1 / clusterSizes[j];
      }
      repeat = false;
      for (let j = 0; j < num3; j++) {
        if (newCentroids[j] !== centroids[j]) {
          repeat = true;
          break;
        }
      }
      centroids = newCentroids;
      nb_iters++;
      if (nb_iters > 200) {
        repeat = false;
      }
    }
    const kClusters = {};
    for (let j = 0; j < num3; j++) {
      kClusters[j] = [];
    }
    for (let i39 = 0; i39 < n46; i39++) {
      cluster = assignments[i39];
      kClusters[cluster].push(values[i39]);
    }
    let tmpKMeansBreaks = [];
    for (let j = 0; j < num3; j++) {
      tmpKMeansBreaks.push(kClusters[j][0]);
      tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
    }
    tmpKMeansBreaks = tmpKMeansBreaks.sort((a50, b6) => a50 - b6);
    limits2.push(tmpKMeansBreaks[0]);
    for (let i39 = 1; i39 < tmpKMeansBreaks.length; i39 += 2) {
      const v2 = tmpKMeansBreaks[i39];
      if (!isNaN(v2) && limits2.indexOf(v2) === -1) {
        limits2.push(v2);
      }
    }
  }
  return limits2;
}

// node_modules/chroma-js/src/utils/contrast.js
var contrast_default = (a50, b6) => {
  a50 = new Color_default(a50);
  b6 = new Color_default(b6);
  const l1 = a50.luminance();
  const l22 = b6.luminance();
  return l1 > l22 ? (l1 + 0.05) / (l22 + 0.05) : (l22 + 0.05) / (l1 + 0.05);
};

// node_modules/chroma-js/src/utils/contrastAPCA.js
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
var W_offset = 0.027;
var P_in = 5e-4;
var P_out = 0.1;
var R_scale = 1.14;
var B_threshold = 0.022;
var B_exp = 1.414;
var contrastAPCA_default = (text, bg) => {
  text = new Color_default(text);
  bg = new Color_default(bg);
  if (text.alpha() < 1) {
    text = mix_default(bg, text, text.alpha(), "rgb");
  }
  const l_text = lum(...text.rgb());
  const l_bg = lum(...bg.rgb());
  const Y_text = l_text >= B_threshold ? l_text : l_text + Math.pow(B_threshold - l_text, B_exp);
  const Y_bg = l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);
  const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
  const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
  const C = Math.abs(Y_bg - Y_text) < P_in ? 0 : Y_text < Y_bg ? S_norm * R_scale : S_rev * R_scale;
  const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
  return S_apc * 100;
};
function lum(r91, g12, b6) {
  return 0.2126729 * Math.pow(r91 / 255, 2.4) + 0.7151522 * Math.pow(g12 / 255, 2.4) + 0.072175 * Math.pow(b6 / 255, 2.4);
}

// node_modules/chroma-js/src/utils/delta-e.js
var { sqrt: sqrt5, pow: pow7, min: min5, max: max4, atan2: atan23, abs: abs2, cos: cos5, sin: sin4, exp, PI: PI3 } = Math;
function delta_e_default(a50, b6, Kl = 1, Kc = 1, Kh = 1) {
  var rad2deg = function(rad) {
    return 360 * rad / (2 * PI3);
  };
  var deg2rad = function(deg) {
    return 2 * PI3 * deg / 360;
  };
  a50 = new Color_default(a50);
  b6 = new Color_default(b6);
  const [L1, a1, b1] = Array.from(a50.lab());
  const [L2, a210, b22] = Array.from(b6.lab());
  const avgL = (L1 + L2) / 2;
  const C1 = sqrt5(pow7(a1, 2) + pow7(b1, 2));
  const C2 = sqrt5(pow7(a210, 2) + pow7(b22, 2));
  const avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - sqrt5(pow7(avgC, 7) / (pow7(avgC, 7) + pow7(25, 7))));
  const a1p = a1 * (1 + G);
  const a2p = a210 * (1 + G);
  const C1p = sqrt5(pow7(a1p, 2) + pow7(b1, 2));
  const C2p = sqrt5(pow7(a2p, 2) + pow7(b22, 2));
  const avgCp = (C1p + C2p) / 2;
  const arctan1 = rad2deg(atan23(b1, a1p));
  const arctan2 = rad2deg(atan23(b22, a2p));
  const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
  const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
  const avgHp = abs2(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
  const T = 1 - 0.17 * cos5(deg2rad(avgHp - 30)) + 0.24 * cos5(deg2rad(2 * avgHp)) + 0.32 * cos5(deg2rad(3 * avgHp + 6)) - 0.2 * cos5(deg2rad(4 * avgHp - 63));
  let deltaHp = h2p - h1p;
  deltaHp = abs2(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
  deltaHp = 2 * sqrt5(C1p * C2p) * sin4(deg2rad(deltaHp) / 2);
  const deltaL = L2 - L1;
  const deltaCp = C2p - C1p;
  const sl = 1 + 0.015 * pow7(avgL - 50, 2) / sqrt5(20 + pow7(avgL - 50, 2));
  const sc = 1 + 0.045 * avgCp;
  const sh = 1 + 0.015 * avgCp * T;
  const deltaTheta = 30 * exp(-pow7((avgHp - 275) / 25, 2));
  const Rc = 2 * sqrt5(pow7(avgCp, 7) / (pow7(avgCp, 7) + pow7(25, 7)));
  const Rt = -Rc * sin4(2 * deg2rad(deltaTheta));
  const result = sqrt5(
    pow7(deltaL / (Kl * sl), 2) + pow7(deltaCp / (Kc * sc), 2) + pow7(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh))
  );
  return max4(0, min5(100, result));
}

// node_modules/chroma-js/src/utils/distance.js
function distance_default(a50, b6, mode = "lab") {
  a50 = new Color_default(a50);
  b6 = new Color_default(b6);
  const l1 = a50.get(mode);
  const l22 = b6.get(mode);
  let sum_sq = 0;
  for (let i39 in l1) {
    const d41 = (l1[i39] || 0) - (l22[i39] || 0);
    sum_sq += d41 * d41;
  }
  return Math.sqrt(sum_sq);
}

// node_modules/chroma-js/src/utils/valid.js
var valid_default = (...args) => {
  try {
    new Color_default(...args);
    return true;
  } catch (e67) {
    return false;
  }
};

// node_modules/chroma-js/src/utils/scales.js
var scales_default = {
  cool() {
    return scale_default([chroma_default.hsl(180, 1, 0.9), chroma_default.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return scale_default(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode(
      "rgb"
    );
  }
};

// node_modules/chroma-js/src/colors/colorbrewer.js
var colorbrewer = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
};
var colorbrewerTypes = Object.keys(colorbrewer);
var typeMap = new Map(colorbrewerTypes.map((key) => [key.toLowerCase(), key]));
var colorbrewerProxy = typeof Proxy === "function" ? new Proxy(colorbrewer, {
  get(target, prop) {
    const lower = prop.toLowerCase();
    if (typeMap.has(lower)) {
      return target[typeMap.get(lower)];
    }
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(colorbrewerTypes);
  }
}) : colorbrewer;
var colorbrewer_default = colorbrewerProxy;

// node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js
var cmyk2rgb = (...args) => {
  args = unpack_default(args, "cmyk");
  const [c24, m5, y2, k3] = args;
  const alpha = args.length > 4 ? args[4] : 1;
  if (k3 === 1) return [0, 0, 0, alpha];
  return [
    c24 >= 1 ? 0 : 255 * (1 - c24) * (1 - k3),
    // r
    m5 >= 1 ? 0 : 255 * (1 - m5) * (1 - k3),
    // g
    y2 >= 1 ? 0 : 255 * (1 - y2) * (1 - k3),
    // b
    alpha
  ];
};
var cmyk2rgb_default = cmyk2rgb;

// node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js
var { max: max5 } = Math;
var rgb2cmyk = (...args) => {
  let [r91, g12, b6] = unpack_default(args, "rgb");
  r91 = r91 / 255;
  g12 = g12 / 255;
  b6 = b6 / 255;
  const k3 = 1 - max5(r91, max5(g12, b6));
  const f13 = k3 < 1 ? 1 / (1 - k3) : 0;
  const c24 = (1 - r91 - k3) * f13;
  const m5 = (1 - g12 - k3) * f13;
  const y2 = (1 - b6 - k3) * f13;
  return [c24, m5, y2, k3];
};
var rgb2cmyk_default = rgb2cmyk;

// node_modules/chroma-js/src/io/cmyk/index.js
Color_default.prototype.cmyk = function() {
  return rgb2cmyk_default(this._rgb);
};
var cmyk = (...args) => new Color_default(...args, "cmyk");
Object.assign(chroma_default, { cmyk });
input_default.format.cmyk = cmyk2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "cmyk");
    if (type_default(args) === "array" && args.length === 4) {
      return "cmyk";
    }
  }
});

// node_modules/chroma-js/src/io/css/hsl2css.js
var hsl2css = (...args) => {
  const hsla = unpack_default(args, "hsla");
  let mode = last_default(args) || "lsa";
  hsla[0] = rnd2(hsla[0] || 0) + "deg";
  hsla[1] = rnd2(hsla[1] * 100) + "%";
  hsla[2] = rnd2(hsla[2] * 100) + "%";
  if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
    hsla[3] = "/ " + (hsla.length > 3 ? hsla[3] : 1);
    mode = "hsla";
  } else {
    hsla.length = 3;
  }
  return `${mode.substr(0, 3)}(${hsla.join(" ")})`;
};
var hsl2css_default = hsl2css;

// node_modules/chroma-js/src/io/css/lab2css.js
var lab2css = (...args) => {
  const laba = unpack_default(args, "lab");
  let mode = last_default(args) || "lab";
  laba[0] = rnd2(laba[0]) + "%";
  laba[1] = rnd2(laba[1]);
  laba[2] = rnd2(laba[2]);
  if (mode === "laba" || laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `lab(${laba.join(" ")})`;
};
var lab2css_default = lab2css;

// node_modules/chroma-js/src/io/css/lch2css.js
var lch2css = (...args) => {
  const lcha = unpack_default(args, "lch");
  let mode = last_default(args) || "lab";
  lcha[0] = rnd2(lcha[0]) + "%";
  lcha[1] = rnd2(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (mode === "lcha" || lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `lch(${lcha.join(" ")})`;
};
var lch2css_default = lch2css;

// node_modules/chroma-js/src/io/css/oklab2css.js
var oklab2css = (...args) => {
  const laba = unpack_default(args, "lab");
  laba[0] = rnd2(laba[0] * 100) + "%";
  laba[1] = rnd3(laba[1]);
  laba[2] = rnd3(laba[2]);
  if (laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `oklab(${laba.join(" ")})`;
};
var oklab2css_default = oklab2css;

// node_modules/chroma-js/src/io/oklch/rgb2oklch.js
var rgb2oklch = (...args) => {
  const [r91, g12, b6, ...rest] = unpack_default(args, "rgb");
  const [l22, a50, b_] = rgb2oklab_default(r91, g12, b6);
  const [L, c24, h7] = lab2lch_default(l22, a50, b_);
  return [L, c24, h7, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
var rgb2oklch_default = rgb2oklch;

// node_modules/chroma-js/src/io/css/oklch2css.js
var oklch2css = (...args) => {
  const lcha = unpack_default(args, "lch");
  lcha[0] = rnd2(lcha[0] * 100) + "%";
  lcha[1] = rnd3(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `oklch(${lcha.join(" ")})`;
};
var oklch2css_default = oklch2css;

// node_modules/chroma-js/src/io/css/rgb2css.js
var { round: round4 } = Math;
var rgb2css = (...args) => {
  const rgba = unpack_default(args, "rgba");
  let mode = last_default(args) || "rgb";
  if (mode.substr(0, 3) === "hsl") {
    return hsl2css_default(rgb2hsl_default(rgba), mode);
  }
  if (mode.substr(0, 3) === "lab") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lab2css_default(rgb2lab_default(rgba), mode);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode.substr(0, 3) === "lch") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lch2css_default(rgb2lch_default(rgba), mode);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode.substr(0, 5) === "oklab") {
    return oklab2css_default(rgb2oklab_default(rgba));
  }
  if (mode.substr(0, 5) === "oklch") {
    return oklch2css_default(rgb2oklch_default(rgba));
  }
  rgba[0] = round4(rgba[0]);
  rgba[1] = round4(rgba[1]);
  rgba[2] = round4(rgba[2]);
  if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
    rgba[3] = "/ " + (rgba.length > 3 ? rgba[3] : 1);
    mode = "rgba";
  }
  return `${mode.substr(0, 3)}(${rgba.slice(0, mode === "rgb" ? 3 : 4).join(" ")})`;
};
var rgb2css_default = rgb2css;

// node_modules/chroma-js/src/io/oklch/oklch2rgb.js
var oklch2rgb = (...args) => {
  args = unpack_default(args, "lch");
  const [l22, c24, h7, ...rest] = args;
  const [L, a50, b_] = lch2lab_default(l22, c24, h7);
  const [r91, g12, b6] = oklab2rgb_default(L, a50, b_);
  return [r91, g12, b6, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
var oklch2rgb_default = oklch2rgb;

// node_modules/chroma-js/src/io/css/css2rgb.js
var INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
var FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
var PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
var RE_S = /\s*/.source;
var SEP = /\s+/.source;
var COMMA = /\s*,\s*/.source;
var ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
var ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
var RE_RGB = new RegExp(
  "^rgba?\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
var RE_RGB_LEGACY = new RegExp(
  "^rgb\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
var RE_RGBA_LEGACY = new RegExp(
  "^rgba\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT, FLOAT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
var RE_HSL = new RegExp(
  "^hsla?\\(" + RE_S + [ANLGE, PCT, PCT].join(SEP) + ALPHA + "\\)$"
);
var RE_HSL_LEGACY = new RegExp(
  "^hsl?\\(" + RE_S + [ANLGE, PCT, PCT].join(COMMA) + RE_S + "\\)$"
);
var RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
var RE_LAB = new RegExp(
  "^lab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
var RE_LCH = new RegExp(
  "^lch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
var RE_OKLAB = new RegExp(
  "^oklab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
var RE_OKLCH = new RegExp(
  "^oklch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
var { round: round5 } = Math;
var roundRGB = (rgb3) => {
  return rgb3.map((v2, i39) => i39 <= 2 ? limit_default(round5(v2), 0, 255) : v2);
};
var percentToAbsolute = (pct, min6 = 0, max6 = 100, signed = false) => {
  if (typeof pct === "string" && pct.endsWith("%")) {
    pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
    if (signed) {
      pct = min6 + (pct + 1) * 0.5 * (max6 - min6);
    } else {
      pct = min6 + pct * (max6 - min6);
    }
  }
  return +pct;
};
var noneToValue = (v2, noneValue) => {
  return v2 === "none" ? noneValue : v2;
};
var css2rgb = (css5) => {
  css5 = css5.toLowerCase().trim();
  if (css5 === "transparent") {
    return [0, 0, 0, 0];
  }
  let m5;
  if (input_default.format.named) {
    try {
      return input_default.format.named(css5);
    } catch (e67) {
    }
  }
  if ((m5 = css5.match(RE_RGB)) || (m5 = css5.match(RE_RGB_LEGACY))) {
    let rgb3 = m5.slice(1, 4);
    for (let i39 = 0; i39 < 3; i39++) {
      rgb3[i39] = +percentToAbsolute(noneToValue(rgb3[i39], 0), 0, 255);
    }
    rgb3 = roundRGB(rgb3);
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
  if (m5 = css5.match(RE_RGBA_LEGACY)) {
    const rgb3 = m5.slice(1, 5);
    for (let i39 = 0; i39 < 4; i39++) {
      rgb3[i39] = +percentToAbsolute(rgb3[i39], 0, 255);
    }
    return rgb3;
  }
  if ((m5 = css5.match(RE_HSL)) || (m5 = css5.match(RE_HSL_LEGACY))) {
    const hsl3 = m5.slice(1, 4);
    hsl3[0] = +noneToValue(hsl3[0].replace("deg", ""), 0);
    hsl3[1] = +percentToAbsolute(noneToValue(hsl3[1], 0), 0, 100) * 0.01;
    hsl3[2] = +percentToAbsolute(noneToValue(hsl3[2], 0), 0, 100) * 0.01;
    const rgb3 = roundRGB(hsl2rgb_default(hsl3));
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
  if (m5 = css5.match(RE_HSLA_LEGACY)) {
    const hsl3 = m5.slice(1, 4);
    hsl3[1] *= 0.01;
    hsl3[2] *= 0.01;
    const rgb3 = hsl2rgb_default(hsl3);
    for (let i39 = 0; i39 < 3; i39++) {
      rgb3[i39] = round5(rgb3[i39]);
    }
    rgb3[3] = +m5[4];
    return rgb3;
  }
  if (m5 = css5.match(RE_LAB)) {
    const lab3 = m5.slice(1, 4);
    lab3[0] = percentToAbsolute(noneToValue(lab3[0], 0), 0, 100);
    lab3[1] = percentToAbsolute(noneToValue(lab3[1], 0), -125, 125, true);
    lab3[2] = percentToAbsolute(noneToValue(lab3[2], 0), -125, 125, true);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb3 = roundRGB(lab2rgb_default(lab3));
    setLabWhitePoint(wp);
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
  if (m5 = css5.match(RE_LCH)) {
    const lch3 = m5.slice(1, 4);
    lch3[0] = percentToAbsolute(lch3[0], 0, 100);
    lch3[1] = percentToAbsolute(noneToValue(lch3[1], 0), 0, 150, false);
    lch3[2] = +noneToValue(lch3[2].replace("deg", ""), 0);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb3 = roundRGB(lch2rgb_default(lch3));
    setLabWhitePoint(wp);
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
  if (m5 = css5.match(RE_OKLAB)) {
    const oklab3 = m5.slice(1, 4);
    oklab3[0] = percentToAbsolute(noneToValue(oklab3[0], 0), 0, 1);
    oklab3[1] = percentToAbsolute(noneToValue(oklab3[1], 0), -0.4, 0.4, true);
    oklab3[2] = percentToAbsolute(noneToValue(oklab3[2], 0), -0.4, 0.4, true);
    const rgb3 = roundRGB(oklab2rgb_default(oklab3));
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
  if (m5 = css5.match(RE_OKLCH)) {
    const oklch3 = m5.slice(1, 4);
    oklch3[0] = percentToAbsolute(noneToValue(oklch3[0], 0), 0, 1);
    oklch3[1] = percentToAbsolute(noneToValue(oklch3[1], 0), 0, 0.4, false);
    oklch3[2] = +noneToValue(oklch3[2].replace("deg", ""), 0);
    const rgb3 = roundRGB(oklch2rgb_default(oklch3));
    const alpha = m5[4] !== void 0 ? +percentToAbsolute(m5[4], 0, 1) : 1;
    rgb3[3] = alpha;
    return rgb3;
  }
};
css2rgb.test = (s15) => {
  return (
    // modern
    RE_RGB.test(s15) || RE_HSL.test(s15) || RE_LAB.test(s15) || RE_LCH.test(s15) || RE_OKLAB.test(s15) || RE_OKLCH.test(s15) || // legacy
    RE_RGB_LEGACY.test(s15) || RE_RGBA_LEGACY.test(s15) || RE_HSL_LEGACY.test(s15) || RE_HSLA_LEGACY.test(s15) || s15 === "transparent"
  );
};
var css2rgb_default = css2rgb;

// node_modules/chroma-js/src/io/css/index.js
Color_default.prototype.css = function(mode) {
  return rgb2css_default(this._rgb, mode);
};
var css = (...args) => new Color_default(...args, "css");
chroma_default.css = css;
input_default.format.css = css2rgb_default;
input_default.autodetect.push({
  p: 5,
  test: (h7, ...rest) => {
    if (!rest.length && type_default(h7) === "string" && css2rgb_default.test(h7)) {
      return "css";
    }
  }
});

// node_modules/chroma-js/src/io/gl/index.js
input_default.format.gl = (...args) => {
  const rgb3 = unpack_default(args, "rgba");
  rgb3[0] *= 255;
  rgb3[1] *= 255;
  rgb3[2] *= 255;
  return rgb3;
};
var gl = (...args) => new Color_default(...args, "gl");
chroma_default.gl = gl;
Color_default.prototype.gl = function() {
  const rgb3 = this._rgb;
  return [rgb3[0] / 255, rgb3[1] / 255, rgb3[2] / 255, rgb3[3]];
};

// node_modules/chroma-js/src/io/hex/index.js
Color_default.prototype.hex = function(mode) {
  return rgb2hex_default(this._rgb, mode);
};
var hex = (...args) => new Color_default(...args, "hex");
chroma_default.hex = hex;
input_default.format.hex = hex2rgb_default;
input_default.autodetect.push({
  p: 4,
  test: (h7, ...rest) => {
    if (!rest.length && type_default(h7) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h7.length) >= 0) {
      return "hex";
    }
  }
});

// node_modules/chroma-js/src/io/temp/temperature2rgb.js
var { log: log2 } = Math;
var temperature2rgb = (kelvin) => {
  const temp2 = kelvin / 100;
  let r91, g12, b6;
  if (temp2 < 66) {
    r91 = 255;
    g12 = temp2 < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g12 = temp2 - 2) + 104.49216199393888 * log2(g12);
    b6 = temp2 < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b6 = temp2 - 10) + 115.67994401066147 * log2(b6);
  } else {
    r91 = 351.97690566805693 + 0.114206453784165 * (r91 = temp2 - 55) - 40.25366309332127 * log2(r91);
    g12 = 325.4494125711974 + 0.07943456536662342 * (g12 = temp2 - 50) - 28.0852963507957 * log2(g12);
    b6 = 255;
  }
  return [r91, g12, b6, 1];
};
var temperature2rgb_default = temperature2rgb;

// node_modules/chroma-js/src/io/temp/rgb2temperature.js
var { round: round6 } = Math;
var rgb2temperature = (...args) => {
  const rgb3 = unpack_default(args, "rgb");
  const r91 = rgb3[0], b6 = rgb3[2];
  let minTemp = 1e3;
  let maxTemp = 4e4;
  const eps = 0.4;
  let temp2;
  while (maxTemp - minTemp > eps) {
    temp2 = (maxTemp + minTemp) * 0.5;
    const rgb4 = temperature2rgb_default(temp2);
    if (rgb4[2] / rgb4[0] >= b6 / r91) {
      maxTemp = temp2;
    } else {
      minTemp = temp2;
    }
  }
  return round6(temp2);
};
var rgb2temperature_default = rgb2temperature;

// node_modules/chroma-js/src/io/temp/index.js
Color_default.prototype.temp = Color_default.prototype.kelvin = Color_default.prototype.temperature = function() {
  return rgb2temperature_default(this._rgb);
};
var temp = (...args) => new Color_default(...args, "temp");
Object.assign(chroma_default, { temp, kelvin: temp, temperature: temp });
input_default.format.temp = input_default.format.kelvin = input_default.format.temperature = temperature2rgb_default;

// node_modules/chroma-js/src/io/oklch/index.js
Color_default.prototype.oklch = function() {
  return rgb2oklch_default(this._rgb);
};
var oklch2 = (...args) => new Color_default(...args, "oklch");
Object.assign(chroma_default, { oklch: oklch2 });
input_default.format.oklch = oklch2rgb_default;
input_default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack_default(args, "oklch");
    if (type_default(args) === "array" && args.length === 3) {
      return "oklch";
    }
  }
});

// node_modules/chroma-js/index.js
Object.assign(chroma_default, {
  analyze,
  average: average_default,
  bezier: bezier_default,
  blend: blend_default,
  brewer: colorbrewer_default,
  Color: Color_default,
  colors: w3cx11_default,
  contrast: contrast_default,
  contrastAPCA: contrastAPCA_default,
  cubehelix: cubehelix_default,
  deltaE: delta_e_default,
  distance: distance_default,
  input: input_default,
  interpolate: mix_default,
  limits,
  mix: mix_default,
  random: random_default,
  scale: scale_default,
  scales: scales_default,
  valid: valid_default
});
var chroma_js_default = chroma_default;

// src/app/features/style-guide/sections/color-palette/store/color-palette.helper.ts
var import_lodash = __toESM(require_lodash());
var ctx;
function initColorPaletteHelperContext(context) {
  ctx = context;
}
function initColorPalette() {
  return from(Promise.all([
    globalThis.runElectronCommand("read-data", { target: "schemes/color-palette.scheme" }),
    globalThis.runElectronCommand("read-data", { target: "data/color-palette.data" })
  ])).pipe(map(([{ steps, names }, palettes]) => ({
    steps,
    palettes: [
      ...names.map((colorName) => {
        const label = (0, import_lodash.upperFirst)(colorName);
        return {
          name: colorName,
          label,
          custom: false,
          colors: steps.map((step) => {
            const { name, value } = ns(`${colorName}.${step}`);
            return {
              color: `${value}`,
              token: name,
              step
            };
          })
        };
      }),
      ...palettes
    ]
  })));
}
function isValidColor(color) {
  return /^#([0-9A-Fa-f]{6})$/.test(color);
}
function checkColor(color, palettes) {
  if (!color) {
    return false;
  }
  if (palettes.flatMap(({ colors }) => colors.map(({ color: color2 }) => color2)).includes(color)) {
    return false;
  }
  return isValidColor(color);
}
var lightnessSteps = {
  "50": 97,
  "100": 93,
  "200": 85,
  "300": 72,
  "400": 58,
  "500": 45,
  "600": 36,
  "700": 26,
  "800": 18,
  "900": 11,
  "950": 5
};
var chromaScales = {
  "50": 0.25,
  "100": 0.35,
  "200": 0.55,
  "300": 0.75,
  "400": 0.9,
  "500": 1,
  "600": 1.05,
  "700": 1.1,
  "800": 1.1,
  "900": 1.05,
  "950": 1
};
var white = chroma_js_default("#ffffff");
var black = chroma_js_default("#000000");
function isPureColor(hex2) {
  const [r91, g12, b6] = chroma_js_default(hex2).rgb();
  return r91 === 255 && g12 === 0 && b6 === 0 || r91 === 0 && g12 === 255 && b6 === 0 || r91 === 0 && g12 === 0 && b6 === 255;
}
function generatePurePalette(hex2) {
  const out = {};
  const baseIndex = 5;
  const base = chroma_js_default(hex2);
  out["500"] = hex2;
  ctx.steps().forEach((step, i39) => {
    if (i39 === baseIndex)
      return;
    if (i39 < baseIndex) {
      const t57 = Math.min((baseIndex - i39) / baseIndex, 0.9);
      out[step] = chroma_js_default.mix(base, white, t57, "rgb").hex();
    } else {
      const t57 = Math.min((i39 - baseIndex) / (ctx.steps().length - 1 - baseIndex), 0.9);
      out[step] = chroma_js_default.mix(base, black, t57, "rgb").hex();
    }
  });
  return out;
}
function generateLchPalette(hex2) {
  const [baseL, baseC, baseH] = chroma_js_default(hex2).lch();
  let closestStep = "500";
  let minDiff = Infinity;
  for (const [step, L] of Object.entries(lightnessSteps)) {
    const diff = Math.abs(L - baseL);
    if (diff < minDiff) {
      minDiff = diff;
      closestStep = step;
    }
  }
  const out = {};
  out[closestStep] = hex2;
  for (const step of Object.keys(lightnessSteps)) {
    if (step === closestStep)
      continue;
    const targetL = lightnessSteps[step];
    const scale = chromaScales[step];
    const targetC = Math.max(6, baseC * scale);
    try {
      out[step] = chroma_js_default.lch(targetL, targetC, baseH).hex();
    } catch {
      out[step] = chroma_js_default.lch(targetL, Math.max(6, targetC * 0.8), baseH).hex();
    }
  }
  const sorted = {};
  Object.keys(lightnessSteps).forEach((k3) => sorted[k3] = out[k3]);
  return sorted;
}
function getCustomPalette(hex2) {
  const norm = hex2.startsWith("#") ? hex2 : `#${hex2}`;
  const colors = Object.entries(isPureColor(norm) ? generatePurePalette(norm) : generateLchPalette(norm)).map(([step, color]) => ({ step, color, token: "" }));
  return {
    name: "",
    label: "",
    colors,
    custom: true
  };
}
function electronWritePalettes() {
  runElectronCommand("write-data", { target: "data/color-palette.data", data: ctx.palettes().filter(({ custom }) => custom), reload: false });
}
function createColorPalette() {
  const preset = ctx.palettes().filter(({ custom }) => custom).map(({ name, colors }) => ({ name, colors: colors.reduce((total, { step, color }) => __spreadProps(__spreadValues({}, total), { [step]: color }), {}) })).reduce((total, { name, colors }) => __spreadProps(__spreadValues({}, total), { [name]: colors }), {});
  return preset;
}

// src/app/features/style-guide/sections/border-radius/store/border-radius.slice.ts
var initialBorderRadiusSlice = {
  scheme: [],
  borderRadius: {}
};

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t2 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1rem", fontWeight: "600", fontSize: "{typography.font.size}", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1rem 1rem 1rem" };
var c = { root: o, panel: r, header: t2, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}" };
var l = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var i = { width: "2.25rem", sm: { width: "1.75rem" }, lg: { width: "2.625rem" }, background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f = { borderRadius: "{border.radius.sm}", focusBackground: "light-dark({surface.200}, {surface.700})", focusColor: "light-dark({surface.800}, {surface.0})" };
var c2 = { padding: "{list.option.padding}" };
var s = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: f, emptyMessage: c2 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "1.75rem", height: "1.75rem", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o3 = { size: "0.875rem" };
var r3 = { borderColor: "{content.background}", offset: "-0.625rem" };
var t3 = { width: "2.625rem", height: "2.625rem", fontSize: "1.25rem", icon: { size: "1.25rem" }, group: { offset: "-0.875rem" } };
var i2 = { width: "3.5rem", height: "3.5rem", fontSize: "1.75rem", icon: { size: "1.75rem" }, group: { offset: "-1.25rem" } };
var n = { root: e3, icon: o3, group: r3, lg: t3, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.375rem", fontSize: "0.625rem", fontWeight: "700", minWidth: "1.25rem", height: "1.25rem" };
var e4 = { size: "0.5rem" };
var a2 = { fontSize: "0.5rem", minWidth: "1.125rem", height: "1.125rem" };
var o4 = { fontSize: "0.75rem", minWidth: "1.5rem", height: "1.5rem" };
var d2 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var i3 = { background: "{primary.color}", color: "{primary.contrast.color}" };
var t4 = { background: "light-dark({surface.100}, {surface.800})", color: "light-dark({surface.600}, {surface.300})" };
var c3 = { background: "light-dark({green.500}, {green.400})", color: "light-dark({surface.0}, {green.950})" };
var g = { background: "light-dark({sky.500}, {sky.400})", color: "light-dark({surface.0}, {sky.950})" };
var n2 = { background: "light-dark({orange.500}, {orange.400})", color: "light-dark({surface.0}, {orange.950})" };
var s2 = { background: "light-dark({red.500}, {red.400})", color: "light-dark({surface.0}, {red.950})" };
var h = { background: "light-dark({surface.950}, {surface.0})", color: "light-dark({surface.0}, {surface.950})" };
var l2 = { root: r4, dot: e4, sm: a2, lg: o4, xl: d2, primary: i3, secondary: t4, success: c3, info: g, warn: n2, danger: s2, contrast: h };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var e5 = { typography: { lineHeight: "1.5", fontFamily: "inherit", fontWeight: "normal", fontSize: "0.875rem" }, transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "0.875rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}", color: "light-dark({primary.500}, {primary.400})", contrastColor: "light-dark(#ffffff, {surface.900})", hoverColor: "light-dark({primary.600}, {primary.300})", activeColor: "light-dark({primary.700}, {primary.200})" }, formField: { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", paddingX: "0.625rem", paddingY: "0.375rem", sm: { fontSize: "0.75rem", paddingX: "0.5rem", paddingY: "0.25rem" }, lg: { fontSize: "1rem", paddingX: "0.75rem", paddingY: "0.5rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}", background: "light-dark({surface.0}, {surface.950})", disabledBackground: "light-dark({surface.200}, {surface.700})", filledBackground: "light-dark({surface.50}, {surface.800})", filledHoverBackground: "light-dark({surface.50}, {surface.800})", filledFocusBackground: "light-dark({surface.50}, {surface.800})", borderColor: "light-dark({surface.300}, {surface.600})", hoverBorderColor: "light-dark({surface.400}, {surface.500})", focusBorderColor: "{primary.color}", invalidBorderColor: "light-dark({red.400}, {red.300})", color: "light-dark({surface.700}, {surface.0})", disabledColor: "light-dark({surface.500}, {surface.400})", placeholderColor: "light-dark({surface.500}, {surface.400})", invalidPlaceholderColor: "light-dark({red.600}, {red.400})", floatLabelColor: "light-dark({surface.500}, {surface.400})", floatLabelFocusColor: "light-dark({primary.600}, {primary.color})", floatLabelActiveColor: "light-dark({surface.500}, {surface.400})", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 0.875rem 0.125rem 0.875rem" }, option: { padding: "0.25rem 0.625rem", borderRadius: "{border.radius.sm}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", transitionDuration: "0s", focusBackground: "light-dark({surface.100}, {surface.800})", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", selectedFontWeight: "{typography.font.weight}", icon: { color: "light-dark({surface.400}, {surface.500})", focusColor: "light-dark({surface.500}, {surface.400})" } }, optionGroup: { padding: "0.25rem 0.625rem", fontWeight: "600", fontSize: "{typography.font.size}", background: "transparent", color: "{text.muted.color}" } }, content: { borderRadius: "{border.radius.md}", background: "light-dark({surface.0}, {surface.900})", hoverBackground: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "{text.color}", hoverColor: "{text.hover.color}" }, mask: { transitionDuration: "0.3s", background: "light-dark(rgba(0,0,0,0.4), rgba(0,0,0,0.6))", color: "{surface.200}" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.25rem 0.625rem", borderRadius: "{border.radius.sm}", gap: "0.5rem", focusBackground: "light-dark({surface.100}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.800})", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { size: "{icon.size}", color: "light-dark({surface.400}, {surface.500})", focusColor: "light-dark({surface.500}, {surface.400})", activeColor: "light-dark({surface.500}, {surface.400})" }, label: { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" }, transitionDuration: "0s" }, submenuLabel: { padding: "0.25rem 0.625rem", fontWeight: "600", fontSize: "{typography.font.size}", background: "transparent", color: "{text.muted.color}" }, submenuIcon: { size: "0.75rem", color: "light-dark({surface.400}, {surface.500})", focusColor: "light-dark({surface.500}, {surface.400})", activeColor: "light-dark({surface.500}, {surface.400})" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.200}, {surface.700})", color: "{text.color}" }, popover: { borderRadius: "{border.radius.md}", padding: "0.625rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.200}, {surface.700})", color: "{text.color}" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.125rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", background: "light-dark({surface.0}, {surface.900})", borderColor: "light-dark({surface.200}, {surface.700})", color: "{text.color}" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, surface: { 0: "#ffffff", 50: "light-dark({slate.50}, {zinc.50})", 100: "light-dark({slate.100}, {zinc.100})", 200: "light-dark({slate.200}, {zinc.200})", 300: "light-dark({slate.300}, {zinc.300})", 400: "light-dark({slate.400}, {zinc.400})", 500: "light-dark({slate.500}, {zinc.500})", 600: "light-dark({slate.600}, {zinc.600})", 700: "light-dark({slate.700}, {zinc.700})", 800: "light-dark({slate.800}, {zinc.800})", 900: "light-dark({slate.900}, {zinc.900})", 950: "light-dark({slate.950}, {zinc.950})" }, highlight: { background: "light-dark({primary.50}, color-mix(in srgb, {primary.400}, transparent 84%))", focusBackground: "light-dark({primary.100}, color-mix(in srgb, {primary.400}, transparent 76%))", color: "light-dark({primary.700}, rgba(255,255,255,.87))", focusColor: "light-dark({primary.800}, rgba(255,255,255,.87))" }, text: { color: "light-dark({surface.700}, {surface.0})", hoverColor: "light-dark({surface.800}, {surface.0})", mutedColor: "light-dark({surface.500}, {surface.400})", hoverMutedColor: "light-dark({surface.600}, {surface.300})" } };
var a3 = { primitive: r5, semantic: e5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o5 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o6 = { padding: "0.875rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var i4 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t5 = { color: "{navigation.item.icon.color}" };
var n3 = { root: o6, item: i4, separator: t5 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r7 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.25rem", fontSize: "{form.field.font.size}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "1.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "2.625rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}", primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", borderColor: "light-dark({surface.100}, {surface.800})", hoverBorderColor: "light-dark({surface.200}, {surface.700})", activeBorderColor: "light-dark({surface.300}, {surface.600})", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } }, info: { background: "light-dark({sky.500}, {sky.400})", hoverBackground: "light-dark({sky.600}, {sky.300})", activeBackground: "light-dark({sky.700}, {sky.200})", borderColor: "light-dark({sky.500}, {sky.400})", hoverBorderColor: "light-dark({sky.600}, {sky.300})", activeBorderColor: "light-dark({sky.700}, {sky.200})", color: "light-dark(#ffffff, {sky.950})", hoverColor: "light-dark(#ffffff, {sky.950})", activeColor: "light-dark(#ffffff, {sky.950})", focusRing: { color: "light-dark({sky.500}, {sky.400})", shadow: "none" } }, success: { background: "light-dark({green.500}, {green.400})", hoverBackground: "light-dark({green.600}, {green.300})", activeBackground: "light-dark({green.700}, {green.200})", borderColor: "light-dark({green.500}, {green.400})", hoverBorderColor: "light-dark({green.600}, {green.300})", activeBorderColor: "light-dark({green.700}, {green.200})", color: "light-dark(#ffffff, {green.950})", hoverColor: "light-dark(#ffffff, {green.950})", activeColor: "light-dark(#ffffff, {green.950})", focusRing: { color: "light-dark({green.500}, {green.400})", shadow: "none" } }, warn: { background: "light-dark({orange.500}, {orange.400})", hoverBackground: "light-dark({orange.600}, {orange.300})", activeBackground: "light-dark({orange.700}, {orange.200})", borderColor: "light-dark({orange.500}, {orange.400})", hoverBorderColor: "light-dark({orange.600}, {orange.300})", activeBorderColor: "light-dark({orange.700}, {orange.200})", color: "light-dark(#ffffff, {orange.950})", hoverColor: "light-dark(#ffffff, {orange.950})", activeColor: "light-dark(#ffffff, {orange.950})", focusRing: { color: "light-dark({orange.500}, {orange.400})", shadow: "none" } }, help: { background: "light-dark({purple.500}, {purple.400})", hoverBackground: "light-dark({purple.600}, {purple.300})", activeBackground: "light-dark({purple.700}, {purple.200})", borderColor: "light-dark({purple.500}, {purple.400})", hoverBorderColor: "light-dark({purple.600}, {purple.300})", activeBorderColor: "light-dark({purple.700}, {purple.200})", color: "light-dark(#ffffff, {purple.950})", hoverColor: "light-dark(#ffffff, {purple.950})", activeColor: "light-dark(#ffffff, {purple.950})", focusRing: { color: "light-dark({purple.500}, {purple.400})", shadow: "none" } }, danger: { background: "light-dark({red.500}, {red.400})", hoverBackground: "light-dark({red.600}, {red.300})", activeBackground: "light-dark({red.700}, {red.200})", borderColor: "light-dark({red.500}, {red.400})", hoverBorderColor: "light-dark({red.600}, {red.300})", activeBorderColor: "light-dark({red.700}, {red.200})", color: "light-dark(#ffffff, {red.950})", hoverColor: "light-dark(#ffffff, {red.950})", activeColor: "light-dark(#ffffff, {red.950})", focusRing: { color: "light-dark({red.500}, {red.400})", shadow: "none" } }, contrast: { background: "light-dark({surface.950}, {surface.0})", hoverBackground: "light-dark({surface.900}, {surface.100})", activeBackground: "light-dark({surface.800}, {surface.200})", borderColor: "light-dark({surface.950}, {surface.0})", hoverBorderColor: "light-dark({surface.900}, {surface.100})", activeBorderColor: "light-dark({surface.800}, {surface.200})", color: "light-dark({surface.0}, {surface.950})", hoverColor: "light-dark({surface.0}, {surface.950})", activeColor: "light-dark({surface.0}, {surface.950})", focusRing: { color: "light-dark({surface.950}, {surface.0})", shadow: "none" } } };
var o7 = { primary: { hoverBackground: "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))", activeBackground: "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))", borderColor: "light-dark({primary.200}, {primary.700})", color: "{primary.color}" }, secondary: { hoverBackground: "light-dark({surface.50}, rgba(255,255,255,0.04))", activeBackground: "light-dark({surface.100}, rgba(255,255,255,0.16))", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.500}, {surface.400})" }, success: { hoverBackground: "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))", activeBackground: "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))", borderColor: "light-dark({green.200}, {green.700})", color: "light-dark({green.500}, {green.400})" }, info: { hoverBackground: "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))", activeBackground: "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))", borderColor: "light-dark({sky.200}, {sky.700})", color: "light-dark({sky.500}, {sky.400})" }, warn: { hoverBackground: "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))", activeBackground: "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))", borderColor: "light-dark({orange.200}, {orange.700})", color: "light-dark({orange.500}, {orange.400})" }, help: { hoverBackground: "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))", activeBackground: "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))", borderColor: "light-dark({purple.200}, {purple.700})", color: "light-dark({purple.500}, {purple.400})" }, danger: { hoverBackground: "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))", activeBackground: "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))", borderColor: "light-dark({red.200}, {red.700})", color: "light-dark({red.500}, {red.400})" }, contrast: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", borderColor: "light-dark({surface.700}, {surface.500})", color: "light-dark({surface.950}, {surface.0})" }, plain: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", borderColor: "light-dark({surface.200}, {surface.600})", color: "light-dark({surface.700}, {surface.0})" } };
var a4 = { primary: { hoverBackground: "light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))", activeBackground: "light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))", color: "{primary.color}" }, secondary: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.500}, {surface.400})" }, success: { hoverBackground: "light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))", activeBackground: "light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))", color: "light-dark({green.500}, {green.400})" }, info: { hoverBackground: "light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))", activeBackground: "light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))", color: "light-dark({sky.500}, {sky.400})" }, warn: { hoverBackground: "light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))", activeBackground: "light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))", color: "light-dark({orange.500}, {orange.400})" }, help: { hoverBackground: "light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))", activeBackground: "light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))", color: "light-dark({purple.500}, {purple.400})" }, danger: { hoverBackground: "light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))", activeBackground: "light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))", color: "light-dark({red.500}, {red.400})" }, contrast: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.950}, {surface.0})" }, plain: { hoverBackground: "light-dark({surface.50}, {surface.800})", activeBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.700}, {surface.0})" } };
var e6 = { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var d3 = { root: r7, outlined: o7, text: a4, link: e6 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o8 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var t6 = { padding: "1.125rem", gap: "0.5rem" };
var r8 = { gap: "0.5rem" };
var e7 = { fontSize: "1.125rem", fontWeight: "500" };
var a5 = { color: "{text.muted.color}", fontSize: "1rem", fontWeight: "{typography.font.weight}" };
var n4 = { root: o8, body: t6, caption: r8, title: e7, subtitle: a5 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r9 = { transitionDuration: "{transition.duration}" };
var o9 = { gap: "0.25rem" };
var i5 = { padding: "1rem", gap: "0.5rem" };
var a6 = { width: "1.75rem", height: "0.5rem", borderRadius: "{content.border.radius}", background: "light-dark({surface.200}, {surface.700})", hoverBackground: "light-dark({surface.300}, {surface.600})", activeBackground: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t7 = { root: r9, content: o9, indicatorList: i5, indicator: a6 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o10 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" }, fontWeight: "{form.field.font.weight}", fontSize: "{form.field.font.size}" };
var r10 = { width: "2.25rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l3 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.75rem" }, fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}" };
var i6 = { color: "{form.field.icon.color}" };
var f2 = { root: o10, dropdown: r10, overlay: d4, list: l3, option: e8, clearIcon: i6 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r11 = { borderRadius: "{border.radius.sm}", width: "1.125rem", height: "1.125rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "0.875rem", height: "0.875rem" }, lg: { width: "1.25rem", height: "1.25rem" } };
var o11 = { size: "0.75rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.625rem" }, lg: { size: "0.875rem" } };
var e9 = { root: r11, icon: o11 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var r12 = { borderRadius: "1rem", paddingX: "0.625rem", paddingY: "0.375rem", gap: "0.375rem", transitionDuration: "{transition.duration}", background: "light-dark({surface.100}, {surface.800})", focusBackground: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.800}, {surface.0})" };
var o12 = { width: "1.75rem", height: "1.75rem" };
var e10 = { size: "0.875rem", color: "light-dark({surface.800}, {surface.0})" };
var a7 = { fontWeight: "{typography.font.weight}", fontSize: "0.75rem" };
var i7 = { size: "0.875rem", color: "light-dark({surface.800}, {surface.0})", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var s3 = { root: r12, image: o12, icon: e10, label: a7, removeIcon: i7 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r13 = { transitionDuration: "{transition.duration}" };
var o13 = { width: "1.375rem", height: "1.375rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}", background: "light-dark({surface.800}, {surface.900})", borderColor: "light-dark({surface.900}, {surface.700})" };
var a8 = { color: "{surface.0}" };
var s4 = { root: r13, preview: o13, panel: e11, handle: a8 };

// node_modules/@primeuix/themes/dist/aura/commandmenu/index.mjs
var o14 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", height: "25rem" };
var r14 = { padding: "0.375rem 1.125rem", background: "{content.background}", borderColor: "{content.border.color}" };
var e12 = { padding: "0.375rem 0", fontSize: "1rem", fontWeight: "{typography.font.weight}", color: "{form.field.color}", placeholderColor: "{form.field.placeholder.color}" };
var d5 = { padding: "0.375rem" };
var n5 = { padding: "2rem 0", color: "{content.color}" };
var t8 = { padding: "0.625rem 1.125rem", background: "{content.background}", borderColor: "{content.border.color}" };
var c4 = { root: o14, header: r14, input: e12, list: d5, empty: n5, footer: t8 };

// node_modules/@primeuix/themes/dist/aura/compare/index.mjs
var o15 = { borderRadius: "{content.border.radius}" };
var r15 = { background: "{content.background}", size: "1px" };
var e13 = { size: "1.5rem", background: "{content.background}", borderRadius: "{content.border.radius}", focusRing: { width: "2px", style: "solid", color: "{content.background}", offset: "2px" }, icon: { color: "{text.muted.color}", size: "{icon.size}" } };
var n6 = { root: o15, handle: r15, indicator: e13 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o16 = { size: "1.5rem", color: "{overlay.modal.color}" };
var e14 = { gap: "0.875rem" };
var t9 = { color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var r16 = { icon: o16, content: e14, message: t9 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o17 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.125rem" };
var r17 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var e15 = { size: "1.25rem", color: "{overlay.popover.color}" };
var p = { color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var a9 = { gap: "0.375rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var d6 = { root: o17, content: r17, icon: e15, message: p, footer: a9 };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o18 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{navigation.item.transition.duration}" };
var i8 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n7 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a10 = { mobileIndent: "1rem" };
var t10 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e16 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r18 = { borderColor: "{content.border.color}" };
var c5 = { root: o18, list: i8, item: n7, submenu: a10, submenuLabel: t10, submenuIcon: e16, separator: r18 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var a11 = "\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o19 = { transitionDuration: "0s", borderColor: "light-dark({content.border.color}, {surface.800})" };
var r19 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.5rem 0.875rem", sm: { padding: "0.125rem 0.375rem" }, lg: { padding: "0.75rem 1.125rem" } };
var e17 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.875rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.125rem 0.375rem" }, lg: { padding: "0.75rem 1.125rem" } };
var t11 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var d7 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", stripedBackground: "light-dark({surface.50}, {surface.950})", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var c6 = { borderColor: "{datatable.border.color}", padding: "0.5rem 0.875rem", fontWeight: "{typography.font.size}", fontSize: "{typography.font.size}", selectedBorderColor: "light-dark({primary.100}, {primary.900})", sm: { padding: "0.125rem 0.375rem" }, lg: { padding: "0.75rem 1.125rem" } };
var l4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.5rem 0.875rem", sm: { padding: "0.125rem 0.375rem" }, lg: { padding: "0.75rem 1.125rem" } };
var n8 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var a12 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.5rem 0.875rem", sm: { padding: "0.125rem 0.375rem" }, lg: { padding: "0.75rem 1.125rem" } };
var i9 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g2 = { width: "1px", color: "{primary.color}" };
var p2 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.75rem" };
var u = { size: "1.75rem" };
var b = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h2 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var css2 = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k = { root: o19, header: r19, headerCell: e17, columnTitle: t11, row: d7, bodyCell: c6, footerCell: l4, columnFooter: n8, footer: a12, dropPoint: i9, columnResizer: s5, resizeIndicator: g2, sortIcon: p2, loadingIcon: u, rowToggleButton: b, filter: m, paginatorTop: h2, paginatorBottom: f3, css: css2 };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o20 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r20 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.625rem 0.875rem", borderRadius: "0" };
var d8 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e18 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.625rem 0.875rem", borderRadius: "0" };
var t12 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n9 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c7 = { root: o20, header: r20, content: d8, footer: e18, paginatorTop: t12, paginatorBottom: n9 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o21 = { transitionDuration: "{transition.duration}" };
var r21 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e19 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var t13 = { gap: "0.5rem", fontWeight: "500", fontSize: "{typography.font.size}" };
var n10 = { width: "2.25rem", sm: { width: "1.75rem" }, lg: { width: "2.625rem" }, background: "light-dark({surface.100}, {surface.800})", hoverBackground: "light-dark({surface.200}, {surface.700})", activeBackground: "light-dark({surface.300}, {surface.600})", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "light-dark({surface.600}, {surface.300})", hoverColor: "light-dark({surface.700}, {surface.200})", activeColor: "light-dark({surface.800}, {surface.100})", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { color: "{form.field.icon.color}" };
var c8 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", fontWeight: "500", fontSize: "{typography.font.size}" };
var a13 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", fontWeight: "500", fontSize: "{typography.font.size}" };
var i10 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l5 = { margin: "0.5rem 0 0 0" };
var g3 = { padding: "0.25rem", fontWeight: "500", fontSize: "{typography.font.size}", color: "{content.color}" };
var s6 = { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "1.75rem", height: "1.75rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f4 = { margin: "0.5rem 0 0 0" };
var h3 = { padding: "0.25rem", borderRadius: "{content.border.radius}" };
var u2 = { margin: "0.5rem 0 0 0" };
var p3 = { padding: "0.25rem", borderRadius: "{content.border.radius}" };
var b2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.125rem", color: "{content.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var y = { background: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.900}, {surface.0})" };
var k2 = { root: o21, panel: r21, header: e19, title: t13, dropdown: n10, inputIcon: d9, selectMonth: c8, selectYear: a13, group: i10, dayView: l5, weekDay: g3, date: s6, monthView: f4, month: h3, yearView: u2, year: p3, buttonbar: b2, timePicker: m2, today: y };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o22 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a14 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d10 = { fontSize: "1.125rem", fontWeight: "600" };
var r22 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.375rem" };
var e20 = { root: o22, header: a14, title: d10, content: r22, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r23 = { borderColor: "{content.border.color}" };
var o23 = { background: "{content.background}", color: "{text.color}" };
var n11 = { margin: "0.875rem 0", padding: "0 0.875rem", content: { padding: "0 0.375rem" } };
var e21 = { margin: "0 0.875rem", padding: "0.375rem 0", content: { padding: "0.375rem 0" } };
var t14 = { root: r23, content: o23, horizontal: n11, vertical: e21 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r24 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o24 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "2.625rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d11 = { root: r24, item: o24 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o25 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a15 = { padding: "{overlay.modal.padding}" };
var d12 = { fontSize: "1.125rem", fontWeight: "600" };
var r25 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l7 = { padding: "{overlay.modal.padding}" };
var e22 = { root: o25, header: a15, title: d12, content: r25, footer: l7 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r26 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t15 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d13 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l8 = { toolbar: o26, toolbarItem: r26, overlay: e23, overlayOption: t15, content: d13 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o27 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1rem 1rem 1rem", transitionDuration: "{transition.duration}" };
var r27 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: ".375rem 0.625rem", gap: "0.5rem", fontWeight: "600", fontSize: "{typography.font.size}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t16 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n12 = { padding: "0" };
var e24 = { root: o27, legend: r27, toggleIcon: t16, content: n12 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r28 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o28 = { background: "transparent", color: "{text.color}", padding: "1rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e25 = { highlightBorderColor: "{primary.color}", padding: "0 1rem 1rem 1rem", gap: "0.875rem" };
var t17 = { padding: "0.875rem", gap: "0.875rem", borderColor: "{content.border.color}", info: { gap: "0.125rem" } };
var n13 = { color: "{text.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var a16 = { color: "{text.muted.color}", fontWeight: "{typography.font.weight}", fontSize: "0.75rem" };
var i11 = { gap: "0.5rem" };
var d14 = { height: "0.25rem" };
var g4 = { gap: "0.5rem" };
var c9 = { root: r28, header: o28, content: e25, file: t17, fileName: n13, fileSize: a16, fileList: i11, progressbar: d14, basic: g4 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o29 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "{form.field.font.weight}", fontSize: "{form.field.font.size}", active: { fontSize: "0.625rem", fontWeight: "400" } };
var i12 = { active: { top: "-1.125rem" } };
var e26 = { input: { paddingTop: "1.125rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var r29 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var f5 = { root: o29, over: i12, in: e26, on: r29 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var r30 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o30 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "2.625rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e27 = { size: "1.25rem" };
var s7 = { background: "{content.background}", padding: "0.875rem 0.25rem" };
var a17 = { size: "1.75rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", hoverBackground: "light-dark({surface.100}, {surface.700})", color: "light-dark({surface.600}, {surface.400})", hoverColor: "light-dark({surface.700}, {surface.0})", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t18 = { size: "0.875rem" };
var c10 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "0.875rem" };
var n14 = { gap: "0.5rem", padding: "0.875rem" };
var i13 = { width: "0.875rem", height: "0.875rem", background: "light-dark({surface.200}, {surface.700})", hoverBackground: "light-dark({surface.300}, {surface.600})", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var u3 = { background: "rgba(0, 0, 0, 0.5)" };
var d15 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g5 = { size: "2.625rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f6 = { size: "1.25rem" };
var l9 = { root: r30, navButton: o30, navIcon: e27, thumbnailsContent: s7, thumbnailNavButton: a17, thumbnailNavButtonIcon: t18, caption: c10, indicatorList: n14, indicatorButton: i13, insetIndicatorList: u3, insetIndicatorButton: d15, closeButton: g5, closeButtonIcon: f6 };

// node_modules/@primeuix/themes/dist/aura/gallery/index.mjs
var r31 = { background: "{surface.950}" };
var o31 = { padding: "0.75rem 1rem", background: "{surface.950}" };
var a18 = { padding: "0.25rem 0", background: "{surface.950}", borderColor: "{surface.800}" };
var e28 = { transitionDuration: "0.3s" };
var i14 = { size: "2.25rem", borderRadius: "50%", color: "{surface.400}", hoverBackground: "{surface.800}", hoverColor: "{surface.0}", disabledOpacity: "{disabled.opacity}", transitionDuration: "{transition.duration}", icon: { size: "1rem" } };
var n15 = { background: "color-mix(in srgb, {surface.800}, transparent 40%)", size: "2.25rem", borderRadius: "50%", color: "{surface.400}", hoverBackground: "{surface.800}", hoverColor: "{surface.0}", offset: "0.5rem", transitionDuration: "{transition.duration}", icon: { size: "1rem" } };
var t19 = { size: "5rem", padding: "0.25rem", background: "{surface.800}", borderRadius: "0.25rem", borderWidth: "3px", hoverBorderColor: "{surface.700}", activeBorderColor: "{primary.color}", activeScale: "0.85", transitionDuration: "{transition.duration}" };
var d16 = { padding: "0.25rem 0" };
var s8 = { backdrop: r31, header: o31, footer: a18, item: e28, action: i14, navigation: n15, thumbnail: t19, thumbnailContent: d16 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o32 = { color: "{form.field.icon.color}" };
var r32 = { icon: o32 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o33 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontWeight: "{form.field.font.weight}", fontSize: "0.625rem" };
var i15 = { paddingTop: "1.125rem", paddingBottom: "{form.field.padding.y}" };
var l10 = { root: o33, input: i15 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o34 = { transitionDuration: "{transition.duration}" };
var r33 = { icon: { size: "1.25rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a19 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i16 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "2.625rem", iconSize: "1.25rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e29 = { root: o34, preview: r33, toolbar: a19, action: i16 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o35 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r34 = { handle: o35 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o36 = { fontWeight: "500" };
var a20 = { size: "1rem" };
var e30 = { background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {blue.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" };
var n16 = { background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {green.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" };
var l11 = { background: "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.600}, {yellow.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" };
var i17 = { background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {red.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" };
var s9 = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" };
var t20 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" };
var d17 = { root: r35, text: o36, icon: a20, info: e30, success: n16, warn: l11, error: i17, secondary: s9, contrast: t20 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o37 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r36 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n17 = { root: o37, display: r36 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o38 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r37 = { borderRadius: "{border.radius.sm}", focusBackground: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.800}, {surface.0})" };
var d18 = { root: o38, chip: r37 };

// node_modules/@primeuix/themes/dist/aura/inputcolor/index.mjs
var r38 = { borderColor: "{content.border.color}" };
var o39 = { borderRadius: "{content.border.radius}" };
var e31 = { borderRadius: "{content.border.radius}", size: "1rem" };
var d19 = { size: "1rem", borderColor: "#ffffff", borderWidth: "3px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)", transitionDuration: "{transition.duration}", focusRing: { borderWidth: "2px", borderColor: "#ffffff", outlineWidth: "2px", outlineColor: "rgba(255, 255, 255, 0.3)", outlineOffset: "2px" } };
var t21 = { color: "{surface.100}", background: "#ffffff", tileSize: "0.5rem" };
var i18 = { size: "2.25rem", borderRadius: "{content.border.radius}" };
var a21 = { root: r38, area: o39, slider: e31, handle: d19, transparencyGrid: t21, swatch: i18 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var o40 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0 0.5rem", minWidth: "2.25rem", fontWeight: "{form.field.font.weight}", fontSize: "{form.field.font.size}" };
var r39 = { addon: o40 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r40 = { transitionDuration: "{transition.duration}" };
var o41 = { width: "2.25rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}", background: "transparent", hoverBackground: "light-dark({surface.100}, {surface.800})", activeBackground: "light-dark({surface.200}, {surface.700})", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "light-dark({surface.500}, {surface.300})", activeColor: "light-dark({surface.600}, {surface.200})" };
var a22 = { root: r40, button: o41 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r41 = { gap: "0.5rem" };
var t22 = { width: "2.25rem", sm: { width: "1.75rem" }, lg: { width: "2.625rem" } };
var e32 = { root: r41, input: t22 };

// node_modules/@primeuix/themes/dist/aura/inputtags/index.mjs
var o42 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", gap: "0.25rem" };
var r42 = { borderRadius: "{form.field.border.radius}" };
var d20 = { root: o42, item: r42 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o43 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d21 = { root: o43 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o44 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r43 = { background: "{primary.color}" };
var t23 = { background: "{content.border.color}" };
var n18 = { color: "{text.muted.color}", fontSize: "1.125rem", fontWeight: "normal" };
var i19 = { root: o44, value: r43, range: t23, text: n18 };

// node_modules/@primeuix/themes/dist/aura/label/index.mjs
var t24 = { gap: "0.375rem", fontSize: "{typography.font.size}", fontWeight: "500", textColor: "{text.color}", disabledOpacity: "{disabled.opacity}" };
var o45 = { root: t24 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o46 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var i20 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var t25 = { fontWeight: "{list.option.font.weight}", fontSize: "{list.option.font.size}", focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", stripedBackground: "light-dark({surface.50}, {surface.900})" };
var r44 = { background: "{list.option.group.background}", color: "{list.option.group.color}", padding: "{list.option.group.padding}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}" };
var d22 = { color: "{list.option.color}", gutterStart: "-0.25rem", gutterEnd: "0.25rem" };
var e33 = { padding: "{list.option.padding}" };
var l12 = { root: o46, list: i20, option: t25, optionGroup: r44, checkmark: d22, emptyMessage: e33 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o47 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.375rem 0.625rem", gap: "0.5rem" }, transitionDuration: "{navigation.item.transition.duration}" };
var n19 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i21 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a23 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var t26 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var e34 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var r45 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c11 = { borderColor: "{content.border.color}" };
var g6 = { borderRadius: "50%", size: "1.5rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d23 = { root: o47, baseItem: n19, item: i21, overlay: a23, submenu: t26, submenuLabel: e34, submenuIcon: r45, separator: c11, mobileButton: g6 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o48 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{navigation.item.transition.duration}" };
var n20 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var i22 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a24 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", fontSize: "{navigation.submenu.label.font.size}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t27 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var e35 = { borderColor: "{content.border.color}" };
var r46 = { root: o48, list: n20, item: i22, submenuLabel: a24, submenuIcon: t27, separator: e35 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o49 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.375rem 0.625rem", transitionDuration: "{navigation.item.transition.duration}" };
var i23 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n21 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "0.875rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var t28 = { borderColor: "{content.border.color}" };
var r47 = { borderRadius: "50%", size: "1.5rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e36 = { root: o49, baseItem: i23, item: n21, submenu: a25, separator: t28, mobileButton: r47 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var r48 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var o50 = { padding: "0.375rem 0.625rem", gap: "0.5rem", sm: { padding: "0.25rem 0.5rem" }, lg: { padding: "0.5rem 0.75rem" } };
var e37 = { fontSize: "{typography.font.size}", fontWeight: "500", sm: { fontSize: "0.75rem" }, lg: { fontSize: "1rem" } };
var l13 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var a26 = { width: "1.5rem", height: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var n22 = { size: "0.875rem", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var t29 = { root: { borderWidth: "1px" } };
var i24 = { content: { padding: "0" } };
var s10 = { background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {blue.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({blue.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({blue.600}, {blue.500})", shadow: "none" } }, outlined: { color: "light-dark({blue.600}, {blue.500})", borderColor: "light-dark({blue.600}, {blue.500})" }, simple: { color: "light-dark({blue.600}, {blue.500})" } };
var d24 = { background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {green.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({green.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({green.600}, {green.500})", shadow: "none" } }, outlined: { color: "light-dark({green.600}, {green.500})", borderColor: "light-dark({green.600}, {green.500})" }, simple: { color: "light-dark({green.600}, {green.500})" } };
var g7 = { background: "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.600}, {yellow.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({yellow.600}, {yellow.500})", shadow: "none" } }, outlined: { color: "light-dark({yellow.600}, {yellow.500})", borderColor: "light-dark({yellow.600}, {yellow.500})" }, simple: { color: "light-dark({yellow.600}, {yellow.500})" } };
var c12 = { background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {red.500})", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({red.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({red.600}, {red.500})", shadow: "none" } }, outlined: { color: "light-dark({red.600}, {red.500})", borderColor: "light-dark({red.600}, {red.500})" }, simple: { color: "light-dark({red.600}, {red.500})" } };
var u4 = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({surface.200}, {surface.700})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } }, outlined: { color: "light-dark({surface.500}, {surface.400})", borderColor: "light-dark({surface.500}, {surface.400})" }, simple: { color: "light-dark({surface.500}, {surface.400})" } };
var h4 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.50}, {surface.950})", shadow: "none" } }, outlined: { color: "light-dark({surface.950}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.0})" }, simple: { color: "light-dark({surface.950}, {surface.0})" } };
var b3 = { root: r48, content: o50, text: e37, icon: l13, closeButton: a26, closeIcon: n22, outlined: t29, simple: i24, info: s10, success: d24, warn: g7, error: c12, secondary: u4, contrast: h4 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e38 = { borderRadius: "{content.border.radius}", gap: "0.875rem" };
var r49 = { background: "{content.border.color}", size: "0.375rem" };
var a27 = { gap: "0.375rem" };
var o51 = { size: "0.375rem" };
var t30 = { fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var l14 = { size: "0.875rem" };
var i25 = { verticalGap: "0.375rem", horizontalGap: "0.875rem" };
var n23 = { root: e38, meters: r49, label: a27, labelMarker: o51, labelText: t30, labelIcon: l14, labelList: i25 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o52 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r50 = { width: "2.25rem", color: "{form.field.icon.color}" };
var d25 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var i26 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "0.5rem 0.5rem 0.125rem 0.875rem" } };
var e39 = { fontSize: "{list.option.font.size}", fontWeight: "{list.option.font.weight}", focusBackground: "{list.option.focus.background}", selectedBackground: "transparent", selectedFocusBackground: "transparent", color: "{list.option.color}", focusColor: "{list.option.color}", selectedColor: "{list.option.color}", selectedFocusColor: "{list.option.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var l15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var n24 = { borderRadius: "{border.radius.sm}" };
var t31 = { padding: "{list.option.padding}" };
var a28 = { root: o52, dropdown: r50, overlay: d25, list: i26, option: e39, optionGroup: l15, chip: n24, clearIcon: f7, emptyMessage: t31 };

// node_modules/@primeuix/themes/dist/aura/navigationmenu/index.mjs
var i27 = { padding: "0.375rem 0.625rem", gap: "0.25rem" };
var a29 = { padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", fontSize: "{navigation.item.label.font.size}", fontWeight: "500", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", focusBackground: "{navigation.item.focus.background}", activeColor: "{navigation.item.active.color}", activeBackground: "{navigation.item.active.background}", transitionDuration: "{navigation.item.transition.duration}" };
var o53 = { root: i27, baseItem: a29 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r51 = { gap: "1rem" };
var a30 = { gap: "0.5rem" };
var o54 = { root: r51, controls: a30 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o55 = { gutter: "0.625rem", transitionDuration: "{transition.duration}" };
var r52 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.625rem 0.875rem", toggleablePadding: "0.625rem 0.875rem 1.125rem 0.875rem", borderRadius: "{content.border.radius}", fontSize: "{typography.font.size}", fontWeight: "{typography.font.weight}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e40 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.25rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, icon: { size: "0.75rem" } };
var t32 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n25 = { root: o55, node: r52, nodeToggleButton: e40, connector: t32 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o56 = { outline: { width: "2px", color: "{content.background}" } };
var t33 = { root: o56 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o57 = { padding: "0.375rem 0.875rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var t34 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.25rem", height: "2.25rem", borderRadius: "50%", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r53 = { color: "{text.muted.color}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var e41 = { maxWidth: "2.25rem" };
var n26 = { root: o57, navButton: t34, currentPageReport: r53, jumpToPageInput: e41 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r54 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o58 = { background: "transparent", color: "{text.color}", padding: "1rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e42 = { padding: "0.375rem 1rem" };
var t35 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var d26 = { padding: "0 1rem 1rem 1rem" };
var n27 = { padding: "0 1rem 1rem 1rem" };
var a31 = { root: r54, header: o58, toggleableHeader: e42, title: t35, content: d26, footer: n27 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o59 = { gap: "0.5rem", transitionDuration: "{navigation.item.transition.duration}" };
var i28 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n28 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var r55 = { indent: "1rem" };
var t36 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a32 = { root: o59, panel: i28, item: n28, submenu: r55, submenuIcon: t36 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var o60 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "0.625rem" };
var r56 = { color: "{form.field.icon.color}" };
var e43 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a33 = { gap: "0.5rem" };
var d27 = { fontSize: "{typography.font.size}", fontWeight: "{typography.font.weight}" };
var t37 = { weakBackground: "light-dark({red.500}, {red.400})", mediumBackground: "light-dark({amber.500}, {amber.400})", strongBackground: "light-dark({green.500}, {green.400})" };
var n29 = { meter: o60, icon: r56, overlay: e43, content: a33, meterText: d27, strength: t37 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r57 = { gap: "1rem" };
var a34 = { gap: "0.5rem" };
var o61 = { root: r57, controls: a34 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o62 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.125rem" };
var r58 = { padding: "{overlay.popover.padding}" };
var e44 = { root: o62, content: r58 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r59 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.125rem" };
var o63 = { background: "{primary.color}" };
var e45 = { color: "{primary.contrast.color}", fontSize: "0.625rem", fontWeight: "600" };
var t38 = { root: r59, value: o63, label: e45 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var r60 = { colorOne: "light-dark({red.500}, {red.400})", colorTwo: "light-dark({blue.500}, {blue.400})", colorThree: "light-dark({green.500}, {green.400})", colorFour: "light-dark({yellow.500}, {yellow.400})" };
var e46 = { root: r60 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o64 = { width: "1.125rem", height: "1.125rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "0.875rem", height: "0.875rem" }, lg: { width: "1.25rem", height: "1.25rem" } };
var r61 = { size: "0.625rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "0.75rem" } };
var e47 = { root: o64, icon: r61 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o65 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r62 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i29 = { root: o65, icon: r62 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var a35 = { background: "light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.3))" };
var r63 = { root: a35 };

// node_modules/@primeuix/themes/dist/aura/scrollarea/index.mjs
var o66 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r64 = { padding: "1rem" };
var n30 = { background: "transparent", margin: "0.25rem", size: "0.25rem", transitionDuration: "{transition.duration}" };
var t39 = { background: "{content.border.color}" };
var e48 = { fadeSize: "40px" };
var a36 = { root: o66, viewport: r64, scrollbar: n30, handle: t39, mask: e48 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var o67 = { transitionDuration: "{transition.duration}" };
var r65 = { size: "9px", borderRadius: "{border.radius.sm}", background: "light-dark({surface.100}, {surface.800})", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s11 = { root: o67, bar: r65 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o68 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r66 = { width: "2.25rem", color: "{form.field.icon.color}" };
var d28 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var i30 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var e49 = { fontSize: "{list.option.font.size}", fontWeight: "{list.option.font.weight}", focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", selectedFontWeight: "{list.option.selected.font.weight}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l16 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", fontSize: "{list.option.group.font.size}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var t40 = { color: "{list.option.color}", gutterStart: "-0.25rem", gutterEnd: "0.25rem" };
var n31 = { padding: "{list.option.padding}" };
var c13 = { root: o68, dropdown: r66, overlay: d28, list: i30, option: e49, optionGroup: l16, clearIcon: f8, checkmark: t40, emptyMessage: n31 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r67 = { borderRadius: "{form.field.border.radius}", invalidBorderColor: "{form.field.invalid.border.color}" };
var o69 = { root: r67 };

// node_modules/@primeuix/themes/dist/aura/sidebar/index.mjs
var o70 = { borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i31 = { background: "light-dark({surface.50}, {surface.900})" };
var n32 = { padding: "0.5rem", gap: "0.5rem" };
var r68 = { padding: "0.5rem", gap: "0.5rem" };
var e50 = { background: "{content.background}", color: "{content.color}", floatingBorderRadius: "{content.border.radius}", floatingShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" };
var a37 = { gap: "0.125rem" };
var t41 = { padding: "0.5rem" };
var c14 = { padding: "0.5rem" };
var g8 = { padding: "0 0.5rem", height: "2rem", borderRadius: "{content.border.radius}", fontSize: "0.75rem", fontWeight: "500", color: "{text.muted.color}" };
var d29 = { top: "0.875rem", right: "0.75rem", size: "1.25rem", borderRadius: "{content.border.radius}", color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", focusBackground: "{navigation.item.focus.background}", icon: { size: "{navigation.item.icon.size}" } };
var u5 = { gap: "{navigation.list.gap}" };
var m3 = { padding: "0.25rem 0.625rem", gap: "{navigation.item.gap}", height: "2rem", borderRadius: "{navigation.item.border.radius}", fontSize: "{navigation.item.label.font.size}", fontWeight: "{navigation.item.label.font.weight}", color: "{navigation.item.color}", focusBackground: "{navigation.item.focus.background}", focusColor: "{navigation.item.focus.color}", activeBackground: "{navigation.item.active.background}", activeColor: "{navigation.item.active.color}", iconOnlyWidth: "2rem", withActionPaddingEnd: "2rem", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" } };
var s12 = { top: "0.375rem", right: "0.25rem", width: "1.25rem", borderRadius: "{content.border.radius}", color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", focusBackground: "{navigation.item.focus.background}", icon: { size: "{navigation.item.icon.size}" } };
var l17 = { top: "0.375rem", right: "0.25rem", height: "1.25rem", minWidth: "1.25rem", borderRadius: "0.375rem", padding: "0 0.25rem", fontSize: "0.75rem", fontWeight: "500", background: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}" };
var f9 = { paddingBlock: "0.125rem", gap: "0.125rem", indentMargin: "0.875rem", indentPadding: "0.625rem", collapsibleIndent: "1.5rem", collapsibleTopMargin: "0.125rem", collapsibleBorderRadius: "0.375rem" };
var v = { padding: "{navigation.item.padding}", gap: "{navigation.item.gap}", height: "2rem", borderRadius: "{navigation.item.border.radius}", fontSize: "{navigation.item.label.font.size}", fontWeight: "{navigation.item.label.font.weight}", color: "{navigation.item.color}", focusBackground: "{navigation.item.focus.background}", focusColor: "{navigation.item.focus.color}", activeBackground: "{navigation.item.active.background}", activeColor: "{navigation.item.active.color}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", size: "{navigation.item.icon.size}" } };
var b4 = { background: "light-dark({surface.50}, {surface.900})", floatingBackground: "light-dark({surface.50}, {surface.900})", insetBackground: "light-dark({surface.0}, {surface.950})", margin: "0.5rem", borderRadius: "{content.border.radius}", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" };
var p4 = { root: o70, layout: i31, header: n32, footer: r68, content: a37, aside: t41, panel: e50, group: c14, groupLabel: g8, groupAction: d29, menu: u5, menuButton: m3, menuAction: s12, menuBadge: l17, menuSub: f9, menuSubButton: v, main: b4 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r69 = { borderRadius: "{content.border.radius}", background: "light-dark({surface.200}, rgba(255, 255, 255, 0.06))", animationBackground: "light-dark(rgba(255,255,255,0.4), rgba(255, 255, 255, 0.04))" };
var a38 = { root: r69 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n33 = { background: "{primary.color}" };
var t42 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", background: "light-dark({surface.0}, {surface.950})", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var a39 = { root: o71, track: r70, range: n33, handle: t42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t43 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a40 = { root: t43 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r71 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d30 = { root: r71 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o72 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r72 = { background: "{content.border.color}" };
var n34 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t44 = { root: o72, gutter: r72, handle: n34 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o73 = { transitionDuration: "{transition.duration}" };
var r73 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.375rem", size: "2px" };
var e51 = { padding: "0.375rem", gap: "0.875rem" };
var t45 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n35 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500", fontSize: "{typography.font.size}" };
var a41 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c15 = { padding: "0.75rem 0.375rem 1rem 0.375rem" };
var i32 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "0.875rem" };
var d31 = { root: o73, separator: r73, step: e51, stepHeader: t45, stepTitle: n35, stepNumber: a41, steppanels: c15, steppanel: i32 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o74 = { transitionDuration: "{transition.duration}" };
var r74 = { background: "{content.border.color}" };
var t46 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e52 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n36 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { root: o74, separator: r74, itemLink: t46, itemLabel: e52, itemNumber: n36 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o75 = { transitionDuration: "{transition.duration}" };
var r75 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t47 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e53 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c17 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n37 = { root: o75, tablist: r75, item: t47, itemIcon: e53, activeBar: c17 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o76 = { transitionDuration: "{transition.duration}" };
var r76 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t48 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "0.875rem 1rem", fontWeight: "600", fontSize: "{typography.font.size}", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { background: "{content.background}", color: "{content.color}", padding: "0.75rem 1rem 1rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var e54 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.25rem", shadow: "0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var a42 = { height: "1px", bottom: "0", background: "{primary.color}" };
var c18 = { root: o76, tablist: r76, tab: t48, tabpanel: n38, navButton: e54, activeBar: a42 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o77 = { transitionDuration: "{transition.duration}" };
var r77 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t49 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n39 = { background: "{content.background}", color: "{content.color}" };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", shadow: "0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))" };
var a43 = { root: o77, tabList: r77, tab: t49, tabPanel: n39, navButton: c19 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r78 = { fontSize: "0.75rem", fontWeight: "700", padding: "0.125rem 0.375rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var a44 = { size: "0.625rem" };
var o78 = { background: "light-dark({primary.100}, color-mix(in srgb, {primary.500}, transparent 84%))", color: "light-dark({primary.700}, {primary.300})" };
var e55 = { background: "light-dark({surface.100}, {surface.800})", color: "light-dark({surface.600}, {surface.300})" };
var n40 = { background: "light-dark({green.100}, color-mix(in srgb, {green.500}, transparent 84%))", color: "light-dark({green.700}, {green.300})" };
var d32 = { background: "light-dark({sky.100}, color-mix(in srgb, {sky.500}, transparent 84%))", color: "light-dark({sky.700}, {sky.300})" };
var i33 = { background: "light-dark({orange.100}, color-mix(in srgb, {orange.500}, transparent 84%))", color: "light-dark({orange.700}, {orange.300})" };
var g9 = { background: "light-dark({red.100}, color-mix(in srgb, {red.500}, transparent 84%))", color: "light-dark({red.700}, {red.300})" };
var t50 = { background: "light-dark({surface.950}, {surface.0})", color: "light-dark({surface.0}, {surface.950})" };
var c20 = { root: r78, icon: a44, primary: o78, secondary: e55, success: n40, info: d32, warn: i33, danger: g9, contrast: t50 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var o79 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "16rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}", fontWeight: "{typography.font.weight}", fontSize: "{typography.font.size}" };
var r79 = { gap: "0.25rem" };
var d33 = { margin: "2px 0" };
var e56 = { root: o79, prompt: r79, commandResponse: d33 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o80 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d34 = { root: o80 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{navigation.item.transition.duration}" };
var i34 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n41 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}", size: "{navigation.item.icon.size}" }, label: { fontWeight: "{navigation.item.label.font.weight}", fontSize: "{navigation.item.label.font.size}" } };
var a45 = { mobileIndent: "0.875rem" };
var t51 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var e57 = { borderColor: "{content.border.color}" };
var r80 = { root: o81, list: i34, item: n41, submenu: a45, submenuIcon: t51, separator: e57 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e58 = { minHeight: "4.5rem" };
var r81 = { eventContent: { padding: "0.875rem 0" } };
var o82 = { eventContent: { padding: "0 0.875rem" } };
var n42 = { size: "1rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t52 = { color: "{content.border.color}", size: "2px" };
var d35 = { event: e58, horizontal: r81, vertical: o82, eventMarker: n42, eventConnector: t52 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var r82 = { width: "22rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "0.3s", blur: "10px", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o83 = { size: "1rem", margin: "1px 0 0 0" };
var e59 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a46 = { gap: "0.25rem" };
var n43 = { fontWeight: "500", fontSize: "{typography.font.size}" };
var t53 = { fontWeight: "500", fontSize: "0.75rem" };
var l18 = { width: "1.5rem", height: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s13 = { size: "0.875rem" };
var c21 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{text.color}", detailColor: "{text.muted.color}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{content.hover.background}", focusRing: { color: "{focus.ring.color}", shadow: "none" } } };
var i35 = { background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))", borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))", color: "light-dark({blue.600}, {blue.500})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({blue.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({blue.600}, {blue.500})", shadow: "none" } } };
var d36 = { background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))", borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))", color: "light-dark({green.600}, {green.500})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({green.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({green.600}, {green.500})", shadow: "none" } } };
var g10 = { background: "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))", borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))", color: "light-dark({yellow.600}, {yellow.500})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({yellow.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({yellow.600}, {yellow.500})", shadow: "none" } } };
var u6 = { background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))", borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))", color: "light-dark({red.600}, {red.500})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({red.100}, rgba(255, 255, 255, 0.05))", focusRing: { color: "light-dark({red.600}, {red.500})", shadow: "none" } } };
var h5 = { background: "light-dark({surface.100}, {surface.800})", borderColor: "light-dark({surface.200}, {surface.700})", color: "light-dark({surface.600}, {surface.300})", detailColor: "light-dark({surface.700}, {surface.0})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "light-dark({surface.200}, {surface.700})", focusRing: { color: "light-dark({surface.600}, {surface.300})", shadow: "none" } } };
var f10 = { background: "light-dark({surface.900}, {surface.0})", borderColor: "light-dark({surface.950}, {surface.100})", color: "light-dark({surface.50}, {surface.950})", detailColor: "light-dark({surface.0}, {surface.950})", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "light-dark({surface.800}, {surface.100})", focusRing: { color: "light-dark({surface.50}, {surface.950})", shadow: "none" } } };
var p5 = { root: r82, icon: o83, content: e59, text: a46, summary: n43, detail: t53, closeButton: l18, closeIcon: s13, normal: c21, info: i35, success: d36, warn: g10, error: u6, secondary: h5, contrast: f10 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r83 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", fontSize: "{form.field.font.size}", background: "light-dark({surface.100}, {surface.950})", checkedBackground: "light-dark({surface.100}, {surface.950})", hoverBackground: "light-dark({surface.100}, {surface.950})", borderColor: "light-dark({surface.100}, {surface.950})", color: "light-dark({surface.500}, {surface.400})", hoverColor: "light-dark({surface.700}, {surface.300})", checkedColor: "light-dark({surface.900}, {surface.0})", checkedBorderColor: "light-dark({surface.100}, {surface.950})", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var e60 = { color: "light-dark({surface.500}, {surface.400})", hoverColor: "light-dark({surface.700}, {surface.300})", checkedColor: "light-dark({surface.900}, {surface.0})", disabledColor: "{form.field.disabled.color}" };
var o84 = { padding: "0.125rem 0.625rem", borderRadius: "{content.border.radius}", checkedBackground: "light-dark({surface.0}, {surface.800})", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.125rem 0.625rem" }, lg: { padding: "0.125rem 0.625rem" } };
var d37 = { root: r83, icon: e60, content: o84 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r84 = { width: "2.25rem", height: "1.375rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s", background: "light-dark({surface.300}, {surface.700})", disabledBackground: "light-dark({form.field.disabled.background}, {surface.600})", hoverBackground: "light-dark({surface.400}, {surface.600})", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" };
var o85 = { borderRadius: "50%", size: "0.875rem", background: "light-dark({surface.0}, {surface.400})", disabledBackground: "light-dark({form.field.disabled.color}, {surface.900})", hoverBackground: "light-dark({surface.0}, {surface.300})", checkedBackground: "light-dark({surface.0}, {surface.900})", checkedHoverBackground: "light-dark({surface.0}, {surface.900})", color: "light-dark({text.muted.color}, {surface.900})", hoverColor: "light-dark({text.color}, {surface.800})", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" };
var e61 = { root: r84, handle: o85 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o86 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.625rem" };
var r85 = { root: o86 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r86 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.375rem 0.625rem", borderRadius: "{overlay.popover.border.radius}", fontWeight: "{typography.font.weight}", fontSize: "0.75rem", background: "{surface.700}", color: "{surface.0}" };
var o87 = { root: r86 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o88 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem", gap: "2px", indent: "0.875rem", transitionDuration: "0s" };
var e62 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.375rem" };
var r87 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t54 = { fontWeight: "{typography.font.weight}", selectedFontWeight: "{list.option.selected.font.weight}", fontSize: "{typography.font.size}" };
var n44 = { borderRadius: "50%", size: "1.5rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c22 = { size: "1.75rem" };
var d38 = { margin: "0 0 0.5rem 0" };
var css3 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var l19 = { root: o88, node: e62, nodeIcon: r87, nodeLabel: t54, nodeToggleButton: n44, loadingIcon: c22, filter: d38, css: css3 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o89 = { fontSize: "{form.field.font.size}", fontWeight: "{form.field.font.weight}", background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r88 = { width: "2.25rem", color: "{form.field.icon.color}" };
var d39 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var e63 = { padding: "{list.padding}" };
var l20 = { padding: "{list.option.padding}" };
var i36 = { borderRadius: "{border.radius.sm}" };
var f11 = { color: "{form.field.icon.color}" };
var a47 = { root: o89, dropdown: r88, overlay: d39, tree: e63, emptyMessage: l20, chip: i36, clearIcon: f11 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o90 = { transitionDuration: "0s", borderColor: "light-dark({content.border.color}, {surface.800})" };
var r89 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.5rem 0.875rem" };
var e64 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.5rem 0.875rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t55 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var c23 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n45 = { borderColor: "{treetable.border.color}", padding: "0.5rem 0.875rem", gap: "0.5rem", fontWeight: "{typography.font.size}", fontSize: "{typography.font.size}", selectedBorderColor: "light-dark({primary.100}, {primary.900})" };
var d40 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.5rem 0.875rem" };
var l21 = { fontWeight: "600", fontSize: "{typography.font.size}" };
var a48 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.5rem 0.875rem" };
var i37 = { width: "0.5rem" };
var g11 = { width: "1px", color: "{primary.color}" };
var s14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.75rem" };
var h6 = { size: "1.75rem" };
var u7 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f12 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var css4 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var p6 = { root: o90, header: r89, headerCell: e64, columnTitle: t55, row: c23, bodyCell: n45, footerCell: d40, columnFooter: l21, footer: a48, columnResizer: i37, resizeIndicator: g11, sortIcon: s14, loadingIcon: h6, nodeToggleButton: u7, paginatorTop: b5, paginatorBottom: f12, css: css4 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o91 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "1.75rem" } };
var e65 = { loader: o91 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r90 = Object.defineProperty;
var e66 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i38 = Object.getOwnPropertySymbols;
var t56 = Object.prototype.hasOwnProperty;
var a49 = Object.prototype.propertyIsEnumerable;
var o92 = (e67, m5, i39) => m5 in e67 ? r90(e67, m5, { enumerable: true, configurable: true, writable: true, value: i39 }) : e67[m5] = i39;
var Zr;
var $r = (Zr = ((r91, e67) => {
  for (var m5 in e67 || (e67 = {})) t56.call(e67, m5) && o92(r91, m5, e67[m5]);
  if (i38) for (var m5 of i38(e67)) a49.call(e67, m5) && o92(r91, m5, e67[m5]);
  return r91;
})({}, a3), e66(Zr, m4({ components: { accordion: c, autocomplete: s, avatar: n, badge: l2, blockui: o5, breadcrumb: n3, button: d3, card: n4, carousel: t7, cascadeselect: f2, checkbox: e9, chip: s3, colorpicker: s4, commandmenu: c4, compare: n6, confirmdialog: r16, confirmpopup: d6, contextmenu: c5, datatable: k, dataview: c7, datepicker: k2, dialog: e20, divider: t14, dock: d11, drawer: e22, editor: l8, fieldset: e24, fileupload: c9, floatlabel: f5, galleria: l9, gallery: s8, iconfield: r32, iftalabel: l10, image: e29, imagecompare: r34, inlinemessage: d17, inplace: n17, inputchips: d18, inputcolor: a21, inputgroup: r39, inputnumber: a22, inputotp: e32, inputtags: d20, inputtext: d21, knob: i19, label: o45, listbox: l12, megamenu: d23, menu: r46, menubar: e36, message: b3, metergroup: n23, multiselect: a28, navigationmenu: o53, orderlist: o54, organizationchart: n25, overlaybadge: t33, paginator: n26, panel: a31, panelmenu: a32, password: n29, picklist: o61, popover: e44, progressbar: t38, progressspinner: e46, radiobutton: e47, rating: i29, ripple: r63, scrollarea: a36, scrollpanel: s11, select: c13, selectbutton: o69, sidebar: p4, skeleton: a38, slider: a39, speeddial: a40, splitbutton: d30, splitter: t44, stepper: d31, steps: c16, tabmenu: n37, tabs: c18, tabview: a43, tag: c20, terminal: e56, textarea: d34, tieredmenu: r80, timeline: d35, toast: p5, togglebutton: d37, toggleswitch: e61, toolbar: r85, tooltip: o87, tree: l19, treeselect: a47, treetable: p6, virtualscroller: e65 }, css: a11 })));

// src/app/shared/helpers/utils.helpers.ts
var import_lodash2 = __toESM(require_lodash());
function emitOnUserEdit({ value, generation, emit, debounce = 400, injector }) {
  let lastGeneration = null;
  let timer;
  effect(() => {
    value();
    const current = untracked(generation);
    const previous = lastGeneration;
    const isReset = current.length !== previous?.length || current.some((item, index) => item !== previous?.[index]);
    if (isReset) {
      lastGeneration = current;
      clearTimeout(timer);
      return;
    }
    clearTimeout(timer);
    if (debounce > 0) {
      timer = setTimeout(emit, debounce);
    } else {
      emit();
    }
  }, { injector });
}
function fieldValidator(field, name, type) {
  return validate(field, ({ value }) => {
    if (value() === null) {
      return null;
    }
    let error = null;
    switch (type) {
      case "":
        break;
      case "rem": {
        const tokens = value().trim().split(/\s+/).filter(Boolean);
        const valid = tokens.length > 0 && tokens.every((token) => /^(0|-?(\d+(\.\d+)?|\.\d+)rem)$/.test(token));
        error = valid ? null : { kind: "rem", message: `${name} should be REM` };
        break;
      }
      default:
        break;
    }
    return error;
  });
}
function getStyleCssOverrides(overrides) {
  return (overrides ?? []).map(({ selector, properties }) => ({ selector, properties: properties.map(({ name, value }) => `${name}: ${value};`).join(" ") })).map(({ selector, properties }) => `${selector} { ${properties} }`).join(" ");
}
var isPlainObject = (val) => typeof val === "object" && val !== null && !Array.isArray(val);
var NO_CHANGE = /* @__PURE__ */ Symbol("no-change");
function diffEntry(aVal, bVal, keyInB) {
  if (!keyInB) {
    return aVal;
  }
  if (isPlainObject(aVal) && isPlainObject(bVal)) {
    const diff = getDeepDiff(aVal, bVal);
    return diff === void 0 ? NO_CHANGE : diff;
  }
  return (0, import_lodash2.isEqual)(aVal, bVal) ? NO_CHANGE : aVal;
}
function getDeepDiff(a50, b6) {
  if (typeof a50 !== "object" || a50 === null) {
    return (0, import_lodash2.isEqual)(a50, b6) ? void 0 : a50;
  }
  const bObj = b6 !== null && typeof b6 === "object" ? b6 : {};
  const result = Array.isArray(a50) ? [] : {};
  for (const key in a50) {
    const entry = diffEntry(a50[key], bObj[key], key in bObj);
    if (entry !== NO_CHANGE) {
      result[key] = entry;
    }
  }
  return Object.keys(result).length > 0 ? result : void 0;
}
function unflatten(flat) {
  const result = {};
  for (const path in flat) {
    const keys = path.split(".");
    let cur = result;
    for (let i39 = 0; i39 < keys.length - 1; i39++) {
      if (typeof cur[keys[i39]] !== "object" || cur[keys[i39]] === null) {
        cur[keys[i39]] = {};
      }
      cur = cur[keys[i39]];
    }
    cur[keys.at(-1)] = flat[path];
  }
  return result;
}

// src/app/features/style-guide/sections/border-radius/store/border-radius.helper.ts
var ctx2;
function initBorderRadiusHelperContext(context) {
  ctx2 = context;
}
function initBorderRadius() {
  return from(Promise.all([
    globalThis.runElectronCommand("read-data", { target: "schemes/border-radius.scheme" }),
    globalThis.runElectronCommand("read-data", { target: "data/border-radius.data" })
  ])).pipe(map(([scheme, borderRadius]) => ({ scheme, borderRadius })));
}
function electronWriteBorderRadius() {
  runElectronCommand("write-data", { target: "data/border-radius.data", data: ctx2.borderRadius(), reload: false });
}
function createBorderRadius() {
  const preset = unflatten(ctx2.borderRadius());
  return getDeepDiff(preset, $r.primitive);
}

// src/app/features/style-guide/sections/border-radius/store/border-radius.updates.ts
function initBorderRadiusStore(scheme, borderRadius) {
  return (_) => ({ scheme, borderRadius });
}
function putBorderRadius(borderRadius) {
  return (_) => ({ borderRadius });
}

// src/app/features/style-guide/sections/border-radius/store/border-radius.store.ts
var Store3 = signalStore(
  { providedIn: "root" },
  withState(initialBorderRadiusSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let styleGuidStore = null;
    return {
      _injector: injector,
      _styleGuidStore: () => {
        styleGuidStore ??= runInInjectionContext(injector, () => inject(Store2));
        return styleGuidStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      initStore: rxMethod(pipe(switchMap((_) => initBorderRadius().pipe(tapResponse({
        next: ({ scheme, borderRadius }) => updateState(store, "[BorderRadiusStore] Init Store", initBorderRadiusStore(scheme, borderRadius)),
        error: (err) => console.error(err)
      })))), { injector: store._injector }),
      putBorderRadius: (borderRadius) => {
        updateState(store, "[BorderRadiusStore] Put Custom Border Radius", putBorderRadius(borderRadius));
        electronWriteBorderRadius();
        store._styleGuidStore().createPreset();
      }
    };
  }),
  withComputed((store) => {
    return {
      getBorderRadius: computed(() => createBorderRadius())
      // vmodel: computed(() => vmodel())
    };
  }),
  withHooks({
    onInit(store) {
      initBorderRadiusHelperContext({
        borderRadius: computed(() => store.borderRadius())
      });
    }
  }),
  // withDevtools('border-radius-store'),
  environment.production ? withDevToolsStub("border-radius-store") : withDevtools("border-radius-store")
);

// src/app/features/style-guide/sections/semantic/store/semantic.slice.ts
var initialSemanticSlice = {
  scheme: [],
  semantic: {}
};

// src/app/features/style-guide/sections/semantic/store/semantic.helper.ts
var ctx3;
function initSemanticHelperContext(context) {
  ctx3 = context;
}
function initSemantis() {
  return from(Promise.all([
    globalThis.runElectronCommand("read-data", { target: "schemes/semantic.scheme" }),
    globalThis.runElectronCommand("read-data", { target: "data/semantic.data" })
  ])).pipe(map(([scheme, semantic]) => ({ scheme, semantic })));
}
function electronWriteSemantic() {
  runElectronCommand("write-data", { target: "data/semantic.data", data: ctx3.semantic(), reload: false });
}
function createSemantic() {
  const flaten = __spreadValues({}, ctx3.semantic());
  const primary = ctx3.colorSteps().map((step) => ({ key: step, value: `{${ctx3.semantic()["primarySet"]}.${step}}` })).reduce((total, { key, value }) => __spreadProps(__spreadValues({}, total), { [key]: value }), {});
  delete flaten["primarySet"];
  const [surfaceLight, surfaceDark] = ctx3.semantic()["surfaceSet"].split(",").map((node) => node.trim());
  const surface = ctx3.colorSteps().map((step) => ({ key: step, value: `light-dark({${surfaceLight}.${step}}, {${surfaceDark}.${step}})` })).reduce((total, { key, value }) => __spreadProps(__spreadValues({}, total), { [key]: value }), {});
  delete flaten["surfaceSet"];
  const preset = unflatten(flaten);
  preset.primary = __spreadValues(__spreadValues({}, preset.primary), primary);
  preset.surface = __spreadValues({
    0: flaten["surface.0"]
  }, surface);
  return getDeepDiff(preset, $r.semantic) ?? {};
}
function applyPreset(data) {
  const flaten = __spreadValues({}, data);
  const primary = ctx3.colorSteps().map((step) => ({ key: step, value: `{${data["primarySet"]}.${step}}` })).reduce((total, { key, value }) => __spreadProps(__spreadValues({}, total), { [key]: value }), {});
  delete flaten["primarySet"];
  const [surfaceLight, surfaceDark] = data["surfaceSet"].split(",").map((node) => node.trim());
  const surface = ctx3.colorSteps().map((step) => ({ key: step, value: `light-dark({${surfaceLight}.${step}}, {${surfaceDark}.${step}})` })).reduce((total, { key, value }) => __spreadProps(__spreadValues({}, total), { [key]: value }), {});
  delete flaten["surfaceSet"];
  const semantic = unflatten(flaten);
  semantic.primary = __spreadValues(__spreadValues({}, semantic.primary), primary);
  semantic.surface = __spreadValues({
    0: flaten["surface.0"]
  }, surface);
  a({ semantic });
  console.log(semantic);
}

// src/app/features/style-guide/sections/semantic/store/semantic.updates.ts
function initSemanticStore(scheme, semantic) {
  return (_) => ({ scheme, semantic });
}
function putSemantic(semantic) {
  return (_) => ({ semantic });
}

// src/app/features/style-guide/sections/semantic/store/semantic.store.ts
var Store4 = signalStore(
  { providedIn: "root" },
  withState(initialSemanticSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let styleGuidStore = null;
    return {
      _injector: injector,
      _styleGuidStore: () => {
        styleGuidStore ??= runInInjectionContext(injector, () => inject(Store2));
        return styleGuidStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      initStore: rxMethod(pipe(switchMap((_) => initSemantis().pipe(tapResponse({
        next: ({ scheme, semantic }) => updateState(store, "[SemanticStore] Init Store", initSemanticStore(scheme, semantic)),
        error: (err) => console.error(err)
      })))), { injector: store._injector }),
      putSemantic: (semantic) => {
        updateState(store, "[SemanticStore] Put Semantic", putSemantic(semantic));
        electronWriteSemantic();
        store._styleGuidStore().createPreset();
      },
      applyPreset
    };
  }),
  withComputed((store) => {
    return {
      getSemantic: computed(() => createSemantic())
    };
  }),
  withHooks({
    onInit(store) {
      initSemanticHelperContext({
        semantic: computed(() => store.semantic()),
        colorSteps: computed(() => store._styleGuidStore().colorSteps())
      });
    }
  }),
  // withDevtools('semantic-store'),
  environment.production ? withDevToolsStub("semantic-store") : withDevtools("semantic-store")
);

// src/app/features/style-guide/sections/css-overrides/store/css-overrides.slice.ts
var initialCssOverridesSlice = {
  overrides: []
};

// src/app/features/style-guide/sections/css-overrides/store/css-overrides.helper.ts
var ctx4;
function initCssOverridesHelperContext(context) {
  ctx4 = context;
}
function initCssOverrides() {
  return from(globalThis.runElectronCommand("read-data", { target: "data/css-overrides.data" }));
}
function electronWriteCssOverrides() {
  runElectronCommand("write-data", { target: "data/css-overrides.data", data: ctx4.overrides(), reload: false });
}
function getColorCssOverrides() {
  const colors = ctx4.palettes().filter(({ custom }) => custom).flatMap(({ name, colors: colors2 }) => colors2.map(({ step, token, color }) => ({ name, step, token, color })));
  return [
    ...colors.map(({ token, name, color, step }) => [
      // `${token}: ${color};`,
      `.bg-${name}-${step} { background-color: var(${token}) !important; }`,
      `.text-${name}-${step} { color: var(${token}) !important; }`,
      `.border-${name}-${step} { border-color: var(${token}) !important; }`
    ].join(" "))
  ].join(" ");
}
function getDimensionsCssOverrides() {
  const dimensions = Array.from({ length: 100 }, (_, index) => `${index + 1}rem`);
  return [
    ...[
      { label: "w", property: "width" },
      { label: "min-w", property: "min-width" },
      { label: "max-w", property: "max-width" },
      { label: "h", property: "height" },
      { label: "min-h", property: "min-height" },
      { label: "max-h", property: "max-height" }
    ].flatMap((({ label, property }) => dimensions.map((dim) => `.${label}-${dim} { ${property}: ${dim}; }`))),
    ...dimensions.map((dim) => `.fix-w-${dim} { width: ${dim}; min-width: ${dim}; max-width: ${dim}; } .fix-h-${dim} { height: ${dim}; min-height: ${dim}; max-height: ${dim}; }`),
    ...dimensions.map((dim) => `.size-${dim} { width: ${dim}; height: ${dim}; } .fix-size-${dim} { width: ${dim}; min-width: ${dim}; max-width: ${dim}; height: ${dim}; min-height: ${dim}; max-height: ${dim}; }`)
  ].join(" ");
}
function createCssOverrides() {
  const preset = [
    getColorCssOverrides(),
    getDimensionsCssOverrides(),
    getStyleCssOverrides(ctx4.overrides())
  ];
  return preset.join(" ");
}
function applyPreset2(overrides) {
  const css5 = [
    getColorCssOverrides(),
    getDimensionsCssOverrides(),
    getStyleCssOverrides(overrides)
  ].join(" ");
  a({ css: css5 });
}

// src/app/features/style-guide/sections/css-overrides/store/css-overrides.updates.ts
function initCssOverridesStore(overrides) {
  return (_) => ({ overrides });
}
function putCssOverrides(overrides) {
  return (_) => ({ overrides });
}

// src/app/features/style-guide/sections/css-overrides/store/css-overrides.store.ts
var Store5 = signalStore(
  { providedIn: "root" },
  withState(initialCssOverridesSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let styleGuidStore = null;
    return {
      _injector: injector,
      _styleGuidStore: () => {
        styleGuidStore ??= runInInjectionContext(injector, () => inject(Store2));
        return styleGuidStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      initStore: rxMethod(pipe(switchMap((_) => initCssOverrides().pipe(tapResponse({
        next: (overrides) => updateState(store, "[CssOverridesStore] Init Store", initCssOverridesStore(overrides)),
        error: (err) => console.error(err)
      })))), { injector: store._injector }),
      putCssOverrides: (overrides) => {
        updateState(store, "[CssOverridesStore] Put CssOverrides", putCssOverrides(overrides));
        electronWriteCssOverrides();
        store._styleGuidStore().createPreset();
      },
      testCssOverrides: (overrides) => {
        console.log(overrides);
      },
      applyPreset: applyPreset2
    };
  }),
  withComputed((store) => {
    return {
      getCssOverrides: computed(() => createCssOverrides())
    };
  }),
  withHooks({
    onInit(store) {
      initCssOverridesHelperContext({
        overrides: computed(() => store.overrides()),
        palettes: computed(() => store._styleGuidStore().palettes())
      });
    }
  }),
  // withDevtools('css-overrides-store'),
  environment.production ? withDevToolsStub("css-overrides-store") : withDevtools("css-overrides-store")
);

// src/app/features/style-guide/sections/ui-component/store/ui-component.slice.ts
var initialUiComponentSlice = {
  schemes: [],
  components: []
};

// src/app/features/style-guide/sections/ui-component/store/ui-component.helper.ts
var ctx5;
function initUiComponentHelperContext(context) {
  ctx5 = context;
}
function initUiComponent() {
  return from(Promise.all([
    globalThis.runElectronCommand("read-data", { target: "schemes/components.scheme" }),
    globalThis.runElectronCommand("read-data", { target: "data/components.data" })
  ])).pipe(map(([schemes, components]) => ({ schemes, components })));
}
function electronWriteUiComponent() {
  runElectronCommand("write-data", { target: "data/components.data", data: ctx5.components(), reload: false });
}
function createUiComponent() {
  const preset = ctx5.components().map(({ name, data, css: css5 }) => ({ [name]: css5.length ? __spreadProps(__spreadValues({}, unflatten(data)), { css: getStyleCssOverrides(css5) }) : unflatten(data) })).reduce((total, current) => __spreadValues(__spreadValues({}, total), current), {});
  return getDeepDiff(preset, $r.components) ?? {};
}
function applyPreset3(name, data, css5) {
  const components = {
    [name]: __spreadProps(__spreadValues({}, unflatten(data)), {
      css: getStyleCssOverrides(css5)
    })
  };
  a({ components });
}

// src/app/features/style-guide/sections/ui-component/store/ui-component.updates.ts
function initUiComponentStore(schemes, components) {
  return (_) => ({ schemes, components });
}
function putUiComponent(name, data, css5) {
  return (store) => ({
    components: store.components.map((component) => component.name === name ? { name, data, css: css5 } : component)
  });
}

// src/app/features/style-guide/sections/ui-component/store/ui-component.vm-builder.ts
function vmodel(state, name, components, schemes) {
  const { data, css: css5 } = components.find((node) => node.name === name) ?? {};
  const scheme = schemes.find((node) => node.name === name)?.data ?? [];
  return {
    name,
    css: css5,
    form: data,
    scheme
  };
}

// src/app/features/style-guide/sections/ui-component/store/ui-component.store.ts
var Store6 = signalStore(
  { providedIn: "root" },
  withState(initialUiComponentSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let appStore = null;
    let styleGuidStore = null;
    return {
      _injector: injector,
      _styleGuidStore: () => {
        styleGuidStore ??= runInInjectionContext(injector, () => inject(Store2));
        return styleGuidStore;
      },
      _appStore: () => {
        appStore ??= runInInjectionContext(injector, () => inject(Store));
        return appStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      initStore: rxMethod(pipe(switchMap((_) => initUiComponent().pipe(tapResponse({
        next: ({ schemes, components }) => updateState(store, "[UiComponentStore] Init Store", initUiComponentStore(schemes, components)),
        error: (err) => console.error(err)
      })))), { injector: store._injector }),
      putUiComponent: (name, data, css5) => {
        updateState(store, "[UiComponentStore] Put UiComponent", putUiComponent(name, data, css5));
        electronWriteUiComponent();
        store._styleGuidStore().createPreset();
      },
      applyPreset: applyPreset3
    };
  }),
  withComputed((store) => {
    return {
      vmodel: computed(() => vmodel(store._appStore().aciveState(), store._appStore().activeName(), store.components(), store.schemes())),
      getComponents: computed(() => createUiComponent())
    };
  }),
  withHooks({
    onInit(store) {
      initUiComponentHelperContext({
        components: computed(() => store.components())
      });
    }
  }),
  // withDevtools('ui-component-store'),
  environment.production ? withDevToolsStub("ui-component-store") : withDevtools("ui-component-store")
);

// src/app/features/style-guide/store/style-guide.slice.ts
var initialStyleGuideSlice = {
  showDrawer: false
};

// src/app/features/style-guide/store/style-guide.helper.ts
var ctx6;
function initStyleGuideHelperContext(context) {
  ctx6 = context;
}
function electronWritePreset(data) {
  runElectronCommand("write-data", { target: "preset", data, reload: true });
}
function createPreset() {
  const preset = {
    primitive: __spreadValues(__spreadValues({}, ctx6.borderRadius()), ctx6.colorPalette()),
    semantic: ctx6.semantic(),
    components: ctx6.components(),
    css: ctx6.cssOverrides()
  };
  console.log("= preset =========================");
  console.log(preset);
  electronWritePreset(preset);
}

// src/app/features/style-guide/store/style-guide.updates.ts
function putShowDrawer(showDrawer) {
  return (_) => ({ showDrawer });
}

// src/app/features/style-guide/store/style-guide.vm-builder.ts
function vmDrawer(active, availableComponents, bookmarks) {
  return {
    active,
    isAvailable: availableComponents.includes(active),
    isBookmarked: bookmarks.includes(active)
  };
}

// src/app/features/style-guide/store/style-guide.store.ts
var Store2 = signalStore(
  { providedIn: "root" },
  withState(initialStyleGuideSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let appStore = null;
    let colorPaletteStore = null;
    let borderRadiusStore = null;
    let semanticStore = null;
    let cssOverridesStore = null;
    let uiComponentStore = null;
    return {
      _injector: injector,
      _appStore: () => {
        appStore ??= runInInjectionContext(injector, () => inject(Store));
        return appStore;
      },
      _colorPaletteStore: () => {
        colorPaletteStore ??= runInInjectionContext(injector, () => inject(Store7));
        return colorPaletteStore;
      },
      _borderRadiusStore: () => {
        borderRadiusStore ??= runInInjectionContext(injector, () => inject(Store3));
        return borderRadiusStore;
      },
      _semanticStore: () => {
        semanticStore ??= runInInjectionContext(injector, () => inject(Store4));
        return semanticStore;
      },
      _cssOverridesStore: () => {
        cssOverridesStore ??= runInInjectionContext(injector, () => inject(Store5));
        return cssOverridesStore;
      },
      _uiComponentStore: () => {
        uiComponentStore ??= runInInjectionContext(injector, () => inject(Store6));
        return uiComponentStore;
      },
      _active: computed(() => {
        const state = appStore?.aciveState() ?? "";
        console.log(state);
        console.log("***********");
        return "aa";
      })
    };
  }),
  withMethods((store) => {
    return {
      initStore: () => {
        store._colorPaletteStore().initStore();
        store._borderRadiusStore().initStore();
        store._semanticStore().initStore();
        store._cssOverridesStore().initStore();
        store._uiComponentStore().initStore();
      },
      toggleDrawer: () => updateState(store, "[StyleGuideStore] Put ShowDrawer", putShowDrawer(!store.showDrawer())),
      toggleBookmark: store._appStore().toggleBookmark,
      toggleAvailableComponent: store._appStore().toggleAvailableComponent,
      createPreset
    };
  }),
  withComputed((store) => {
    const active = computed(
      () => {
        const state = store._appStore().aciveState() ?? "";
        if (state === "define-semantic") {
          return "define-semantic";
        }
        if (state !== "component-settings") {
          return "";
        }
        return store._appStore().activeName() ?? "";
      },
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    return {
      active,
      colorSteps: computed(() => store._colorPaletteStore().steps()),
      palettes: computed(() => store._colorPaletteStore().palettes()),
      vmDrawer: computed(() => vmDrawer(active(), store._appStore().availableComponents(), store._appStore().bookmarks()))
    };
  }),
  withHooks({
    onInit(store) {
      initStyleGuideHelperContext({
        colorPalette: computed(() => store._colorPaletteStore().getColorPalette()),
        borderRadius: computed(() => store._borderRadiusStore().getBorderRadius()),
        semantic: computed(() => store._semanticStore().getSemantic()),
        cssOverrides: computed(() => store._cssOverridesStore().getCssOverrides()),
        components: computed(() => store._uiComponentStore().getComponents())
      });
      updateState(store, "[StyleGuideStore] Put ShowDrawer", putShowDrawer(true));
    }
  }),
  // withDevtools('style-guide-store'),
  environment.production ? withDevToolsStub("style-guide-store") : withDevtools("style-guide-store")
);

// src/app/features/style-guide/sections/color-palette/store/color-palette.slice.ts
var initialColorPaletteSlice = {
  steps: [],
  palettes: [],
  searchColor: "",
  //#dc2625
  customPalettesOnly: false
};

// src/app/features/style-guide/sections/color-palette/store/color-palette.updates.ts
function initColorPaletteStore(palettes, steps) {
  return (_) => ({ palettes, steps });
}
function toggleCustomPalettesOnly() {
  return (store) => ({ customPalettesOnly: !store.customPalettesOnly });
}
function updateSearchColor(searchColor) {
  return (_) => ({ searchColor });
}
function pushPalette(palette) {
  return (store) => ({ palettes: [...store.palettes, palette] });
}
function putPalette(name, palette) {
  return (store) => ({ palettes: store.palettes.map((node) => name === node.name ? palette : node) });
}
function deletePalette(name) {
  return (store) => ({ palettes: store.palettes.filter((node) => name !== node.name) });
}

// src/app/features/style-guide/sections/color-palette/store/color-palette.vm-builder.ts
function vmColorPalettes(palettes, steps, search, customPalettesOnly) {
  return {
    steps,
    customPalettesOnly,
    palettes: palettes.map((palette) => __spreadProps(__spreadValues({}, palette), {
      colors: palette.colors.map((node) => __spreadProps(__spreadValues({}, node), { active: node.color === search }))
    }))
  };
}
function vmRightHeader(search, customPalettesOnly, disabled) {
  return {
    search,
    customPalettesOnly,
    addColorDisabled: disabled
  };
}

// src/app/features/style-guide/sections/color-palette/store/color-palette.store.ts
var Store7 = signalStore(
  { providedIn: "root" },
  withState(initialColorPaletteSlice),
  withProps((_) => {
    const injector = inject(Injector);
    let styleGuidStore = null;
    return {
      _injector: injector,
      _styleGuidStore: () => {
        styleGuidStore ??= runInInjectionContext(injector, () => inject(Store2));
        return styleGuidStore;
      }
    };
  }),
  withMethods((store) => {
    return {
      // initStore2: ({ steps, names }: { steps: number[]; names: string[] }) => {
      //     updateState(store, '[ColorPalette Store] Init Store', initStore(steps, names));
      //     rxMethod<void>(
      //         pipe(
      //             switchMap(_ =>
      //                 getPalette().pipe(
      //                     tapResponse({
      //                         next: palettes => updateState(store, '[ColorPalette Store] Init Palettes', initPalettes(palettes)),
      //                         error: err => console.error(err),
      //                     })
      //                 )
      //             )
      //         ),
      //         { injector: store._injector }
      //     )();
      // },
      initStore: rxMethod(pipe(switchMap((_) => initColorPalette().pipe(tapResponse({
        // next: ({ scheme, semantic }) => updateState(store, '[SemanticStore] Init Store', initSemanticStore(scheme, semantic)),
        next: ({ palettes, steps }) => updateState(store, "[ColorPalette Store] Init Palettes", initColorPaletteStore(palettes, steps)),
        error: (err) => console.error(err)
      })))), { injector: store._injector }),
      toggleCustomPalettesOnly: () => updateState(store, "[ColorPalette Store] Toggle Custom Palettes Only", toggleCustomPalettesOnly()),
      updateSearchColor: (search) => updateState(store, "[ColorPalette Store] Update Search Color", updateSearchColor(search)),
      pushPalette: (palette) => {
        updateState(store, "[ColorPalette Store] Push Custom Palette", pushPalette(palette));
        electronWritePalettes();
        store._styleGuidStore().createPreset();
      },
      putPalette: (name, palette) => {
        updateState(store, "[ColorPalette Store] Put Custom Palette", putPalette(name, palette));
        electronWritePalettes();
        store._styleGuidStore().createPreset();
      },
      deletePalette: (name) => {
        updateState(store, "[ColorPalette Store] Delete Custom Palette", deletePalette(name));
        electronWritePalettes();
        store._styleGuidStore().createPreset();
      }
    };
  }),
  withComputed((store) => {
    return {
      vmColorPalettes: computed(() => vmColorPalettes(store.palettes(), store.steps(), store.searchColor(), store.customPalettesOnly())),
      vmRightHeader: computed(() => vmRightHeader(store.searchColor(), store.customPalettesOnly(), !checkColor(store.searchColor(), store.palettes()))),
      getColorPalette: computed(() => createColorPalette())
    };
  }),
  withHooks({
    onInit(store) {
      initColorPaletteHelperContext({
        steps: computed(() => store.steps()),
        palettes: computed(() => store.palettes())
      });
    }
  }),
  // withDevtools('color-palette-store'),
  environment.production ? withDevToolsStub("color-palette-store") : withDevtools("color-palette-store")
);

export {
  t,
  require_lodash,
  getCustomPalette,
  Store7 as Store,
  $r,
  emitOnUserEdit,
  fieldValidator,
  Store3 as Store2,
  Store4 as Store3,
  Store5 as Store4,
  Store6 as Store5,
  Store2 as Store6
};
//# sourceMappingURL=chunk-I7ZYIMSW.js.map
