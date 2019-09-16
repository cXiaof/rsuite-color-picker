'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClass = 'rsuite-color-picker';

var ColorPicker = _react2.default.memo(function (props) {
    var defaultValue = props.defaultValue,
        value = props.value,
        disabled = props.disabled,
        title = props.title,
        onChange = props.onChange,
        onChangeComplete = props.onChangeComplete;

    var _useState = (0, _react.useState)(defaultValue || '#00BCD4'),
        _useState2 = _slicedToArray(_useState, 2),
        color = _useState2[0],
        updateColor = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        visible = _useState4[0],
        setVisible = _useState4[1];

    (0, _react.useEffect)(function () {
        var listener = function listener(_ref) {
            var target = _ref.target;

            if (isOut(target)) setVisible(false);
        };
        document.body.addEventListener('click', listener);
        return function () {
            document.body.removeEventListener('click', listener);
        };
    }, []);

    var handleClick = (0, _react.useCallback)(function () {
        if (!disabled) setVisible(function (show) {
            return !show;
        });
    }, [disabled]);
    var handleChange = (0, _react.useCallback)(function (current, e) {
        updateColor(current.hex);
        onChange && onChange(current, e);
    }, [onChange]);
    var handleChangeComplete = (0, _react.useCallback)(function (current, e) {
        updateColor(current.hex);
        onChangeComplete && onChangeComplete(current, e);
    }, [onChangeComplete]);

    var currentValue = value || color;
    return _react2.default.createElement(
        'div',
        { className: '' + baseClass + (disabled ? ' disabled' : '') },
        title && _react2.default.createElement(
            'div',
            { className: 'label-text' },
            title
        ),
        _react2.default.createElement('div', {
            className: baseClass + '-review',
            style: { backgroundColor: getBgColor(currentValue) },
            onClick: handleClick
        }),
        visible && _react2.default.createElement(
            'div',
            { className: baseClass + '-overlay' },
            _react2.default.createElement(_reactColor.ChromePicker, {
                color: currentValue,
                onChange: handleChange,
                onChangeComplete: handleChangeComplete
            })
        )
    );
});

var isOut = function isOut(dom) {
    while (dom && dom.tagName.toUpperCase() !== 'BODY') {
        if (dom.className.includes(baseClass)) return false;
        dom = dom.parentNode;
    }
    return true;
};

var getBgColor = function getBgColor(color) {
    if (!color || typeof color === 'string') return color;
    var defaultEnd = '1)';
    if (notUndefined(color.r)) {
        var r = color.r,
            g = color.g,
            b = color.b,
            a = color.a;

        var result = 'rgba(' + parse(r) + ', ' + parse(g) + ', ' + parse(b) + ', ';
        result += notUndefined(a) ? parse(a) + ')' : defaultEnd;
        return result;
    }
    if (notUndefined(color.h)) {
        var h = color.h,
            s = color.s,
            l = color.l,
            _a = color.a;

        var _result = 'hsla(' + parse(h) + ', ' + parse(s, 100) + '%, ' + parse(l, 100) + '%, ';
        _result += notUndefined(_a) ? parse(_a) + ')' : defaultEnd;
        return _result;
    }
};

var notUndefined = function notUndefined(attr) {
    return attr !== undefined;
};
var parse = function parse(attr) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return parseInt(attr * times, 0) || 0;
};

exports.default = ColorPicker;