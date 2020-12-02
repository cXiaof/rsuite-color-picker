"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var baseClass = 'rsuite-color-picker';

var ColorPicker = /*#__PURE__*/_react.default.memo(function (props) {
  var title = props.title,
      disabled = props.disabled,
      value = props.value,
      defaultValue = props.defaultValue,
      disableAlpha = props.disableAlpha,
      onChange = props.onChange,
      onChangeComplete = props.onChangeComplete;
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(defaultValue || '#00BCD4'),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      updateColor = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var currentValue = (0, _react.useMemo)(function () {
    return value || color;
  }, [color, value]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      var el = ref.current;
      el && !el.contains(e.target) && setVisible(false);
    };

    document.addEventListener('click', handler);
    return function () {
      document.removeEventListener('click', handler);
    };
  }, []);
  var handleClick = (0, _react.useCallback)(function () {
    if (!disabled) setVisible(function (show) {
      return !show;
    });
  }, [disabled]);
  var handleChange = (0, _react.useCallback)(function (current, e) {
    updateColor(current.rgb);
    onChange && onChange(current, e);
  }, [onChange]);
  var handleChangeComplete = (0, _react.useCallback)(function (current, e) {
    updateColor(current.rgb);
    onChangeComplete && onChangeComplete(current, e);
  }, [onChangeComplete]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "".concat(baseClass).concat(disabled ? ' disabled' : '')
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: "label-text"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClass, "-review"),
    style: {
      backgroundColor: getBgColor(currentValue)
    },
    onClick: handleClick
  }), visible && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClass, "-overlay")
  }, /*#__PURE__*/_react.default.createElement(_reactColor.ChromePicker, {
    color: currentValue,
    disableAlpha: disableAlpha,
    onChange: handleChange,
    onChangeComplete: handleChangeComplete
  })));
});

var getBgColor = function getBgColor(color) {
  if (!color || typeof color === 'string') return color;
  var defaultEnd = '1)';

  if (notUndefined(color.r)) {
    var r = color.r,
        g = color.g,
        b = color.b,
        a = color.a;
    var result = "rgba(".concat(parse(r), ", ").concat(parse(g), ", ").concat(parse(b), ", ");
    result += notUndefined(a) ? "".concat(parse(a), ")") : defaultEnd;
    return result;
  }

  if (notUndefined(color.h)) {
    var h = color.h,
        s = color.s,
        l = color.l,
        _a = color.a;

    var _result = "hsla(".concat(parse(h), ", ").concat(parse(s, 100), "%, ").concat(parse(l, 100), "%, ");

    _result += notUndefined(_a) ? "".concat(parse(_a), ")") : defaultEnd;
    return _result;
  }
};

var notUndefined = function notUndefined(attr) {
  return attr !== undefined;
};

var parse = function parse(attr) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return parseFloat(attr * times) || 0;
};

var _default = ColorPicker;
exports.default = _default;