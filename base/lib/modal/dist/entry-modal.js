(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.EntryModal = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  var eventSet = new Set();
  var withDefaultModal = function withDefaultModal(WrappedComponent, argsList) {
    return function () {
      var _container, _promise, _isShow;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return new (_container = /*#__PURE__*/new WeakMap(), _promise = /*#__PURE__*/new WeakMap(), _isShow = /*#__PURE__*/new WeakMap(), /*#__PURE__*/function () {
        function _class2(props) {
          var _this = this;
          _classCallCheck(this, _class2);
          _classPrivateFieldInitSpec(this, _container, {
            writable: true,
            value: null
          });
          _classPrivateFieldInitSpec(this, _promise, {
            writable: true,
            value: null
          });
          _classPrivateFieldInitSpec(this, _isShow, {
            writable: true,
            value: true
          });
          _defineProperty(this, "handleEvent", function (resolve, reject) {
            return function (event) {
              if (_classPrivateFieldGet(_this, _container)) {
                if (_classPrivateFieldGet(_this, _container).remove) {
                  _classPrivateFieldGet(_this, _container).remove();
                } else {
                  _classPrivateFieldGet(_this, _container).parentNode.removeChild(_classPrivateFieldGet(_this, _container));
                }
              }
              eventSet.delete(resolve);
              resolve(event);
            };
          });
          if (eventSet.size > 0) {
            var _iterator = _createForOfIteratorHelper(eventSet.values()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var resolve = _step.value;
                resolve();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            eventSet.clear();
          }
          var modal = document.querySelector('#EntryModal');
          if (modal) {
            _classPrivateFieldSet(this, _container, modal);
          } else {
            var body = document.querySelector('body');
            _classPrivateFieldSet(this, _container, document.createElement('div'));
            _classPrivateFieldGet(this, _container).id = 'EntryModal';
            _classPrivateFieldGet(this, _container).className = 'entry-modal-modal';
            body.appendChild(_classPrivateFieldGet(this, _container));
          }
          return this.render(props);
        }
        _createClass(_class2, [{
          key: "render",
          value: function render(props) {
            var _this2 = this;
            if (_classPrivateFieldGet(this, _container)) {
              return new Promise(function (resolve, reject) {
                eventSet.add(resolve);
                var handleClose = function handleClose() {
                  _classPrivateFieldSet(_this2, _isShow, false);
                  runRender();
                };
                var _onEvent = _this2.handleEvent(resolve, reject);
                var runRender = function runRender() {
                  ReactDOM.render( /*#__PURE__*/React.createElement("div", {
                    className: 'entry-modal-box'
                  }, _classPrivateFieldGet(_this2, _isShow) && /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, argsList.reduce(function (acc, key, i) {
                    acc[key] = props[i];
                    return acc;
                  }, {}), {
                    eventEmitter: _this2,
                    onEvent: function onEvent(event) {
                      handleClose();
                      _onEvent(event);
                    }
                  }))), _classPrivateFieldGet(_this2, _container));
                };
                runRender();
              });
            }
          }
        }]);
        return _class2;
      }())(args);
    };
  };
  var withDefaultModal$1 = withDefaultModal;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  var Button = function Button(props) {
    var style = props.style,
      className = props.className,
      onClick = props.onClick,
      onMouseDown = props.onMouseDown,
      children = props.children,
      text = props.text,
      btnValue = props.btnValue;
    var handleOnClick = React.useCallback(function (event) {
      if (onClick) {
        onClick(event);
      }
    }, [onClick]);
    var handleOnMouseDown = React.useCallback(function (event) {
      if (onMouseDown) {
        onMouseDown(event);
      }
    }, [onMouseDown]);
    var buttonContent = React.useMemo(function () {
      if (children) {
        return children;
      } else if (text) {
        return text;
      }
      return null;
    }, [children, text]);
    return /*#__PURE__*/React.createElement("div", {
      style: style,
      className: "entry-modal-button ".concat(className),
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      "data-value": btnValue
    }, buttonContent);
  };
  var Button$1 = Button;

  var Title = function Title(props) {
    var _props$className = props.className,
      className = _props$className === void 0 ? 'entry-modal-entryLmsTitle' : _props$className,
      children = props.children,
      isClose = props.isClose,
      onClose = props.onClose,
      _props$closeBtnValue = props.closeBtnValue,
      closeBtnValue = _props$closeBtnValue === void 0 ? 'close' : _props$closeBtnValue;
    var closeButton = React.useMemo(function () {
      if (isClose !== false) {
        return /*#__PURE__*/React.createElement(Button$1, {
          className: "entry-modal-entryLmsClose",
          onClick: onClose,
          btnValue: closeBtnValue
        });
      }
      return null;
    }, [isClose, onClose]);
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement("div", {
      className: "entry-modal-entryLmsText"
    }, children), closeButton);
  };
  var Title$1 = Title;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  var freeGlobal$1 = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal$1 || freeSelf || Function('return this')();

  var root$1 = root;

  /** Built-in value references. */
  var Symbol$1 = root$1.Symbol;

  var Symbol$2 = Symbol$1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$4.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$3.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray$1 = isArray;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$1['__core-js_shared__'];

  var coreJsData$1 = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray$1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  var nativeCreate$1 = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

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

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root$1, 'Map');

  var Map$1 = Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var stringToPath$1 = stringToPath;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray$1(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath$1(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var getLang = function getLang() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var defaultValue = arguments.length > 1 ? arguments[1] : undefined;
    var _ref = window || {},
      _ref$Lang = _ref.Lang,
      Lang = _ref$Lang === void 0 ? {} : _ref$Lang;
    return get(Lang, key, defaultValue || key);
  };

  var Alert = function Alert(props) {
    var content = props.content,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options,
      onEvent = props.onEvent;
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dontShowChecked = _useState2[0],
      setDontShowChecked = _useState2[1];
    var keyboardEvent = React.useCallback(function (event) {
      var keyCode = event.keyCode;
      if (event.repeat) {
        return;
      }
      if (keyCode === 13) {
        event.preventDefault();
        handleButtonClick('ok');
      } else if (keyCode === 27) {
        event.preventDefault();
        handleButtonClick('close');
      }
    }, []);
    var preventDefault = React.useCallback(function (event) {
      event.preventDefault();
    }, []);
    var _useMemo = React.useMemo(function () {
        return {
          title: props.title || getLang('General.alert_title', 'alert'),
          positiveButtonText: options.positiveButtonText || getLang('Buttons.course_done', 'ok'),
          positiveButtonStyle: options.positiveButtonStyle || {},
          withDontShowAgain: options.withDontShowAgain || false,
          withDontShowAgainText: options.withDontShowAgainText || getLang('General.dont_show_again', 'don`t show again')
        };
      }, [props.title, options]),
      title = _useMemo.title,
      positiveButtonText = _useMemo.positiveButtonText,
      positiveButtonStyle = _useMemo.positiveButtonStyle,
      withDontShowAgain = _useMemo.withDontShowAgain,
      withDontShowAgainText = _useMemo.withDontShowAgainText;
    var renderContent = React.useMemo(function () {
      try {
        if (_typeof(content) === 'object') {
          return /*#__PURE__*/React.createElement("div", {
            className: "entry-modal-content entrylmsAlertContent",
            dangerouslySetInnerHTML: {
              __html: content.outerHTML
            }
          });
        } else if (typeof content === 'string') {
          return /*#__PURE__*/React.createElement("div", null, content);
        }
      } catch (_unused) {
        return null;
      }
    }, [content]);
    var handleButtonClick = React.useCallback(function (event) {
      if (!onEvent) {
        return;
      }
      var value;
      if (typeof event === 'string') {
        value = event;
      } else {
        value = get(event, 'target.dataset.value');
      }
      if (value === 'ok') {
        if (withDontShowAgain) {
          onEvent({
            dontShowChecked: dontShowChecked
          });
        } else {
          onEvent(true);
        }
      } else {
        onEvent(false);
      }
    }, [onEvent, withDontShowAgain, dontShowChecked]);
    var handleDontShowChecked = React.useCallback(function () {
      setDontShowChecked(!dontShowChecked);
    }, [dontShowChecked]);
    React.useEffect(function () {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', keyboardEvent);
      document.addEventListener('touchmove', preventDefault, {
        passive: false
      });
      return function () {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', keyboardEvent);
        document.removeEventListener('touchmove', preventDefault, {
          passive: false
        });
      };
    }, [keyboardEvent, preventDefault]);
    return /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-alert'
    }, /*#__PURE__*/React.createElement(Title$1, {
      className: 'entry-modal-title',
      isClose: true,
      onClose: handleButtonClick,
      btnValue: 'close'
    }, title), /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-contentView'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-content'
    }, renderContent), /*#__PURE__*/React.createElement(Button$1, {
      className: 'entry-modal-button',
      text: positiveButtonText,
      style: positiveButtonStyle,
      onClick: handleButtonClick,
      btnValue: 'ok'
    }), withDontShowAgain && /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-checkBox',
      onClick: handleDontShowChecked
    }, /*#__PURE__*/React.createElement("div", {
      className: "entry-modal-checkDiv ".concat(dontShowChecked && 'entry-modal-checked'),
      style: {
        width: 18,
        height: 18
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: 'entry-modal-label'
    }, withDontShowAgainText))));
  };
  var Alert$1 = Alert;

  var Confirm = function Confirm(props) {
    var content = props.content,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options,
      onEvent = props.onEvent;
    var _useMemo = React.useMemo(function () {
        return {
          title: props.title || getLang('General.confirm_title', 'confirm'),
          negativeButtonText: options.negativeButtonText || getLang('Buttons.cancel', 'cancel'),
          positiveButtonText: options.positiveButtonText || getLang('Buttons.course_done', 'cancel')
        };
      }, [props.title, options]),
      title = _useMemo.title,
      negativeButtonText = _useMemo.negativeButtonText,
      positiveButtonText = _useMemo.positiveButtonText;
    var handleButtonClick = React.useCallback(function (event) {
      if (!onEvent) {
        return;
      }
      var value;
      if (typeof event === 'string') {
        value = event;
      } else {
        value = get(event, 'target.dataset.value');
      }
      onEvent(value === 'ok');
    }, [onEvent]);
    var renderContent = React.useMemo(function () {
      try {
        if (_typeof(content) === 'object') {
          return /*#__PURE__*/React.createElement("div", {
            className: "entry-modal-content entrylmsAlertContent",
            dangerouslySetInnerHTML: {
              __html: content.outerHTML
            }
          });
        } else if (typeof content === 'string') {
          return /*#__PURE__*/React.createElement("div", null, content);
        }
      } catch (e) {
        return null;
      }
    }, []);
    var keyboardEvent = React.useCallback(function (event) {
      var keyCode = event.keyCode;
      if (event.repeat) {
        return;
      }
      if (keyCode === 13) {
        event.preventDefault();
        handleButtonClick('ok');
      } else if (keyCode === 27) {
        event.preventDefault();
        handleButtonClick('close');
      }
    }, []);
    var preventDefault = React.useCallback(function (event) {
      event.preventDefault();
    }, []);
    React.useEffect(function () {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', keyboardEvent);
      document.addEventListener('touchmove', preventDefault, {
        passive: false
      });
      return function () {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', keyboardEvent);
        document.removeEventListener('touchmove', preventDefault, {
          passive: false
        });
      };
    }, [keyboardEvent, preventDefault]);
    return /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-confirm'
    }, /*#__PURE__*/React.createElement(Title$1, {
      className: 'entry-modal-title',
      isClose: true,
      onClose: handleButtonClick,
      closeBtnValue: "close"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-contentView'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-content'
    }, renderContent), /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-button-group'
    }, /*#__PURE__*/React.createElement(Button$1, {
      className: "entry-modal-button entry-modal-cancelButton",
      text: negativeButtonText,
      onClick: handleButtonClick,
      btnValue: 'cancel'
    }), /*#__PURE__*/React.createElement(Button$1, {
      className: 'entry-modal-button',
      text: positiveButtonText,
      onClick: handleButtonClick,
      btnValue: 'ok'
    }))));
  };
  var Confirm$1 = Confirm;

  var Prompt = function Prompt(props) {
    var defaultValue = props.defaultValue,
      content = props.content,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options,
      onEvent = props.onEvent;
    var inputBox = React.useRef();
    var _useMemo = React.useMemo(function () {
        return {
          title: props.title || getLang('General.prompt_title', 'prompt'),
          negativeButtonText: options.negativeButtonText || getLang('Buttons.cancel', 'cancel'),
          positiveButtonText: options.positiveButtonText || getLang('Buttons.course_done', 'ok'),
          placeholder: options.placeholder || ''
        };
      }, [props.title, options]),
      title = _useMemo.title,
      negativeButtonText = _useMemo.negativeButtonText,
      positiveButtonText = _useMemo.positiveButtonText,
      placeholder = _useMemo.placeholder;
    var handleButtonClick = React.useCallback(function (event) {
      if (!onEvent) {
        return;
      }
      var value;
      if (typeof event === 'string') {
        value = event;
      } else {
        value = get(event, 'target.dataset.value');
      }
      if (value === 'ok') {
        onEvent(inputBox.current.value || '');
      } else {
        onEvent(null);
      }
    }, [onEvent]);
    var renderContent = React.useMemo(function () {
      try {
        if (_typeof(content) === 'object') {
          return /*#__PURE__*/React.createElement("div", {
            className: "entry-modal-content entrylmsAlertContent",
            dangerouslySetInnerHTML: {
              __html: content.outerHTML
            }
          });
        } else if (typeof content === 'string') {
          return /*#__PURE__*/React.createElement("div", null, content);
        }
      } catch (_unused) {
        return null;
      }
    }, [content]);
    var keyboardEvent = React.useCallback(function (event) {
      var keyCode = event.keyCode;
      if (event.repeat) {
        return;
      }
      if (keyCode === 13) {
        event.preventDefault();
        handleButtonClick('ok');
      } else if (keyCode === 27) {
        event.preventDefault();
        handleButtonClick('close');
      }
    }, []);
    var preventDefault = React.useCallback(function (event) {
      event.preventDefault();
    }, []);
    React.useEffect(function () {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keyup', keyboardEvent);
      document.addEventListener('touchmove', preventDefault, {
        passive: false
      });
      requestAnimationFrame(function () {
        if (inputBox.current) {
          inputBox.current.focus();
        }
      });
      return function () {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keyup', keyboardEvent);
        document.removeEventListener('touchmove', preventDefault, {
          passive: false
        });
      };
    });
    return /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-prompt'
    }, /*#__PURE__*/React.createElement(Title$1, {
      className: 'entry-modal-title',
      isClose: true,
      onClose: handleButtonClick,
      btnValue: 'close'
    }, title), /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-contentView'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-content'
    }, renderContent), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      className: 'entry-modal-prompt-input',
      ref: inputBox,
      type: "text",
      placeholder: placeholder,
      defaultValue: defaultValue,
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", {
      className: 'entry-modal-button-group'
    }, /*#__PURE__*/React.createElement(Button$1, {
      className: "entry-modal-button entry-modal-cancelButton",
      text: negativeButtonText,
      onClick: handleButtonClick,
      btnValue: 'cancel'
    }), /*#__PURE__*/React.createElement(Button$1, {
      className: 'entry-modal-button',
      text: positiveButtonText,
      onClick: handleButtonClick,
      btnValue: 'ok'
    }))));
  };
  var Prompt$1 = Prompt;

  var withReactModal = function withReactModal(WrappedComponent) {
    return function (props) {
      var isShow = props.isShow;
      var _useState = React.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        modalEl = _useState2[0],
        setModalEl = _useState2[1];
      React.useEffect(function () {
        var modalRoot = document.querySelector('body');
        if (!modalEl) {
          var el = document.createElement('div');
          el.className = 'entry-modal-modal';
          setModalEl(el);
        }
        if (isShow) {
          modalRoot.appendChild(modalEl);
          return function () {
            if (modalEl) {
              modalRoot.removeChild(modalEl);
            }
          };
        }
      }, [isShow, modalEl]);
      if (!isShow || !modalEl) {
        return null;
      }
      return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: 'entry-modal-box'
      }, /*#__PURE__*/React.createElement(WrappedComponent, props)), modalEl);
    };
  };
  var withReactModal$1 = withReactModal;

  var AlertConteiner = withReactModal$1(Alert$1);

  var ConfirmConteiner = withReactModal$1(Confirm$1);

  var PromptConteiner = withReactModal$1(Prompt$1);

  var alert = withDefaultModal$1(Alert$1, ['content', 'title', 'options']);
  var confirm = withDefaultModal$1(Confirm$1, ['content', 'title', 'options']);
  var prompt = withDefaultModal$1(Prompt$1, ['content', 'defaultValue', 'title', 'options']);
  var Component = {
    Alert: AlertConteiner,
    Confirm: ConfirmConteiner,
    Prompt: PromptConteiner
  };

  exports.Component = Component;
  exports.alert = alert;
  exports.confirm = confirm;
  exports.prompt = prompt;

}));
//# sourceMappingURL=entry-modal.js.map
