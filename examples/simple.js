webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = camelCase;
/* harmony export (immutable) */ __webpack_exports__["b"] = endsWith;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeSpaceFromRgb;
/* harmony export (immutable) */ __webpack_exports__["d"] = assoc;
var numberReSnippet = '(?:NaN|-?(?:(?:\\d+|\\d*\\.\\d+)(?:[E|e][+|-]?\\d+)?|Infinity))';
var matchOnlyNumberRe = new RegExp('^(' + numberReSnippet + ')$');
function isNumber(str) {
    return !!str.trim().match(matchOnlyNumberRe);
}
function camelCase(name) {
    return name.replace(/-(\w)/g, function (_w, g) {
        return g.toUpperCase();
    });
}
function endsWith(str, suffix) {
    return str && str.slice(0 - suffix.length) === suffix;
}
function removeSpaceFromRgb(value) {
    return value.replace(/\([^)]+\)/, function (m) {
        return m.replace(/\s+/g, '');
    });
}
function assoc(prop, value) {
    var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    obj[prop] = value;
    return obj;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(12);


/* eslint no-console: 0 */
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src___["a" /* transform */])('padding', '10px 5px'));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = border;
var BORDER_STYLE_ENUM = {
    none: 1,
    hidden: 1,
    dotted: 1,
    dashed: 1,
    solid: 1,
    double: 1,
    groove: 1,
    ridge: 1,
    inset: 1,
    outset: 1
};
var VALID_BORDER_STYLE_ENUM = {
    solid: 1,
    dotted: 1,
    dashed: 1
};
var DEFAULT_BORDER_STYLE = 'solid';
function border(name, value, _ref) {
    var warning = _ref.warning,
        lengthUnitReg = _ref.lengthUnitReg,
        lengthProcessor = _ref.lengthProcessor;

    var processed = void 0;
    ['border', 'borderTop', 'borderLeft', 'borderRight', 'borderBottom'].forEach(function (cssName) {
        // react-native does not support border-bottom-style
        if (name === cssName + 'Style' && name !== 'borderStyle') {
            warning(name, value);
            processed = false;
        } else if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            });
            var ret = {};
            values.forEach(function (v) {
                v = v.toLowerCase();
                if (v.match(lengthUnitReg)) {
                    ret[cssName + 'Width'] = lengthProcessor(name, v);
                } else if (BORDER_STYLE_ENUM[v]) {
                    if (cssName === 'border') {
                        ret[cssName + 'Style'] = VALID_BORDER_STYLE_ENUM[v] ? v : DEFAULT_BORDER_STYLE;
                    } else {
                        warning(cssName + 'Style', value);
                    }
                } else {
                    ret[cssName + 'Color'] = v;
                }
            });
            processed = ret;
        }
    });
    return processed;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = borderColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function borderColor(name, value) {
    var processed = void 0;
    ['borderColor'].forEach(function (cssName) {
        // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color
        if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            });
            if (values.length === 4) {
                processed = {
                    borderTopColor: values[0],
                    borderRightColor: values[1],
                    borderBottomColor: values[2],
                    borderLeftColor: values[3]
                };
            } else if (values.length === 3) {
                processed = {
                    borderTopColor: values[0],
                    borderLeftColor: values[1],
                    borderRightColor: values[1],
                    borderBottomColor: values[2]
                };
            } else if (values.length === 2) {
                processed = {
                    borderTopColor: values[0],
                    borderBottomColor: values[0],
                    borderLeftColor: values[1],
                    borderRightColor: values[1]
                };
            } else {
                processed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, values[0]);
            }
        }
    });
    return processed;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = borderRadius;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function borderRadius(name, value, _ref) {
    var lengthProcessor = _ref.lengthProcessor;

    var processed = void 0;
    ['borderRadius'].forEach(function (cssName) {
        // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius
        if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            }).map(function (v) {
                return lengthProcessor(name, v);
            });
            if (values.length === 4) {
                var _processed;

                processed = (_processed = {}, _defineProperty(_processed, 'borderTopLeftRadius', values[0]), _defineProperty(_processed, 'borderTopRightRadius', values[1]), _defineProperty(_processed, 'borderBottomRightRadius', values[2]), _defineProperty(_processed, 'borderBottomLeftRadius', values[3]), _processed);
            } else if (values.length === 3) {
                var _processed2;

                processed = (_processed2 = {}, _defineProperty(_processed2, 'borderTopLeftRadius', values[0]), _defineProperty(_processed2, 'borderTopRightRadius', values[1]), _defineProperty(_processed2, 'borderBottomLeftRadius', values[1]), _defineProperty(_processed2, 'borderBottomRightRadius', values[2]), _processed2);
            } else if (values.length === 2) {
                var _processed3;

                processed = (_processed3 = {}, _defineProperty(_processed3, 'borderTopLeftRadius', values[0]), _defineProperty(_processed3, 'borderBottomRightRadius', values[0]), _defineProperty(_processed3, 'borderTopRightRadius', values[1]), _defineProperty(_processed3, 'borderBottomLeftRadius', values[1]), _processed3);
            } else {
                processed = _defineProperty({}, name, values[0]);
            }
        }
    });
    return processed;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = borderWidth;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function borderWidth(name, value, _ref) {
    var lengthProcessor = _ref.lengthProcessor;

    var processed = void 0;
    ['borderWidth'].forEach(function (cssName) {
        // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width
        if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            }).map(function (v) {
                return lengthProcessor(name, v);
            });
            if (values.length === 4) {
                var _processed;

                processed = (_processed = {}, _defineProperty(_processed, 'borderTopWidth', values[0]), _defineProperty(_processed, 'borderRightWidth', values[1]), _defineProperty(_processed, 'borderBottomWidth', values[2]), _defineProperty(_processed, 'borderLeftWidth', values[3]), _processed);
            } else if (values.length === 3) {
                var _processed2;

                processed = (_processed2 = {}, _defineProperty(_processed2, 'borderTopWidth', values[0]), _defineProperty(_processed2, 'borderLeftWidth', values[1]), _defineProperty(_processed2, 'borderRightWidth', values[1]), _defineProperty(_processed2, 'borderBottomWidth', values[2]), _processed2);
            } else if (values.length === 2) {
                var _processed3;

                processed = (_processed3 = {}, _defineProperty(_processed3, 'borderTopWidth', values[0]), _defineProperty(_processed3, 'borderBottomWidth', values[0]), _defineProperty(_processed3, 'borderLeftWidth', values[1]), _defineProperty(_processed3, 'borderRightWidth', values[1]), _processed3);
            } else {
                processed = _defineProperty({}, name, values[0]);
            }
        }
    });
    return processed;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = display;
function display(name, value, _ref) {
    var style = _ref.style;

    if (name === 'display' && value === 'flex') {
        var all = {};
        if (!style['flex-direction']) {
            all.flexDirection = 'row';
        }
        return all;
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function flex(name, value, _ref) {
    var warning = _ref.warning;

    var processed = void 0;
    ['flex'].forEach(function (cssName) {
        if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            });
            if (values.length === 3) {
                var _processed;

                processed = (_processed = {}, _defineProperty(_processed, 'flexGrow', parseFloat(values[0])), _defineProperty(_processed, 'flexShrink', parseFloat(values[1])), _defineProperty(_processed, 'flexBasis', parseFloat(values[2])), _processed);
            } else if (values.length === 2) {
                var _processed2;

                processed = (_processed2 = {}, _defineProperty(_processed2, 'flexGrow', parseFloat(values[0])), _defineProperty(_processed2, 'flexShrink', parseFloat(values[1])), _processed2);
            } else if (values.length === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* isNumber */])(values[0])) {
                processed = _defineProperty({}, name, parseFloat(values[0]));
            } else {
                warning(name, value);
            }
        }
    });
    return processed;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__borderRadius__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borderColor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__borderWidth__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paddingMargin__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__position__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flex__ = __webpack_require__(7);









/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__border__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__borderRadius__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__borderColor__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__borderWidth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__display__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__paddingMargin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__position__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__flex__["a" /* default */]]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = paddingMargin;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function paddingMargin(name, value, _ref) {
    var lengthProcessor = _ref.lengthProcessor;

    var processed = void 0;
    ['padding', 'margin'].forEach(function (cssName) {
        if (name === cssName) {
            var values = value.split(/\s+/).filter(function (s) {
                return !!s.trim();
            }).map(function (v) {
                return lengthProcessor(name, v);
            });
            if (values.length === 4) {
                var _processed;

                processed = (_processed = {}, _defineProperty(_processed, cssName + 'Top', values[0]), _defineProperty(_processed, cssName + 'Right', values[1]), _defineProperty(_processed, cssName + 'Bottom', values[2]), _defineProperty(_processed, cssName + 'Left', values[3]), _processed);
            } else if (values.length === 3) {
                var _processed2;

                processed = (_processed2 = {}, _defineProperty(_processed2, cssName + 'Top', values[0]), _defineProperty(_processed2, cssName + 'Right', values[1]), _defineProperty(_processed2, cssName + 'Bottom', values[2]), _defineProperty(_processed2, cssName + 'Left', values[1]), _processed2);
            } else if (values.length === 2) {
                var _processed3;

                processed = (_processed3 = {}, _defineProperty(_processed3, cssName + 'Top', values[0]), _defineProperty(_processed3, cssName + 'Right', values[1]), _defineProperty(_processed3, cssName + 'Bottom', values[0]), _defineProperty(_processed3, cssName + 'Left', values[1]), _processed3);
            } else {
                processed = _defineProperty({}, name, values[0]);
            }
        }
    });
    return processed;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = position;
function position(name, value) {
    // ignore
    if (name === 'position' && value === 'relative') {
        return false;
    }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = display;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

var ps = {
    fontWeight: 1
};
function display(name, value) {
    if (ps[name]) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, String(value));
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformers_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_index__ = __webpack_require__(8);



var defaultLengthUnitReg = /(?:px)$/i;
function transform(_name, value) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        lengthProcessor = _ref.lengthProcessor,
        _ref$lengthUnitReg = _ref.lengthUnitReg,
        lengthUnitReg = _ref$lengthUnitReg === undefined ? defaultLengthUnitReg : _ref$lengthUnitReg,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style,
        reasons = _ref.reasons;

    var name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* camelCase */])(_name);
    var processLength = lengthProcessor || defaultLengthProcessor;
    function defaultLengthProcessor(pname, pvalue) {
        if (typeof pvalue === 'string') {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* endsWith */])(pvalue, 'px')) {
                return parseFloat(pvalue.slice(0, -2));
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* isNumber */])(pvalue)) {
                return parseFloat(pvalue);
            }
            if (pvalue === 'auto') {
                warning(pname, pvalue);
                return undefined;
            }
        }
        return pvalue;
    }
    function warning(pname, pvalue, preason) {
        if (reasons) {
            reasons.push('[style] \'' + pname + ': ' + pvalue + '\' is not supported' + (preason ? ': ' + preason : ''));
        }
    }
    var params = {
        lengthProcessor: processLength,
        lengthUnitReg: lengthUnitReg,
        warning: warning,
        style: style
    };
    if (typeof value !== 'string') {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, value);
    }
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__filters_index__["a" /* default */].length; i++) {
        var ret = __WEBPACK_IMPORTED_MODULE_2__filters_index__["a" /* default */][i](name, value, params);
        if (ret !== undefined) {
            return ret;
        }
    }
    if (__WEBPACK_IMPORTED_MODULE_1__transformers_index__["a" /* default */][name]) {
        return __WEBPACK_IMPORTED_MODULE_1__transformers_index__["a" /* default */][name](name, value, params);
    }
    value = processLength(name, value);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, value);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function transform(name, value, _ref) {
    var warning = _ref.warning;

    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* removeSpaceFromRgb */])(value);
    var parts = value && value.split(/\s+/).filter(function (s) {
        return !!s;
    }) || [];
    for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (p.charAt(0) === '#' || p.slice(0, 3) === 'rgb') {
            return {
                backgroundColor: p
            };
        }
    }
    warning(name, value);
    return false;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function transform(name, value, _ref) {
    var warning = _ref.warning,
        lengthProcessor = _ref.lengthProcessor;

    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* removeSpaceFromRgb */])(value);
    var values = value.split(/\s+/).filter(function (s) {
        return !!s.trim();
    });
    // rn only support shadow-offset and shadow-color
    if (values.length >= 2) {
        var shadowOffset = {};
        var shadowRadius = void 0;
        var shadowColor = void 0;
        values.forEach(function (v) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* endsWith */])(v, 'px') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* isNumber */])(v)) {
                // first num means width
                if (!shadowOffset.width) {
                    shadowOffset.width = lengthProcessor(name, v);
                    // second num means height
                } else if (!shadowOffset.height) {
                    shadowOffset.height = lengthProcessor(name, v);
                    // third num means radius
                } else if (!shadowRadius) {
                    shadowRadius = lengthProcessor(name, v);
                }
            } else if (v !== 'inset' && !shadowColor) {
                shadowColor = v;
            }
        });
        var processed = {
            shadowOffset: shadowOffset,
            shadowOpacity: 1,
            overflow: 'visible'
        };
        if (shadowColor) {
            processed.shadowColor = shadowColor;
        }
        if (shadowRadius) {
            processed.shadowRadius = shadowRadius;
        }
        return processed;
    }
    warning(name, value);
    return false;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function transform(name, value, _ref) {
    var warning = _ref.warning;

    var values = value.split(',').map(function (v) {
        var ret = v.trim();
        if (ret.charAt(0) === '\'' || ret.charAt(0) === '"') {
            ret = ret.slice(1, -1);
        }
        return ret;
    });
    if (values.length) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, values[0], {});
    } else {
        warning(name, value);
        return false;
    }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boxShadow__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fontFamily__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textShadow__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transform__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textDecoration__ = __webpack_require__(17);






/* harmony default export */ __webpack_exports__["a"] = ({
    textDecoration: __WEBPACK_IMPORTED_MODULE_5__textDecoration__["a" /* default */],
    background: __WEBPACK_IMPORTED_MODULE_0__background__["a" /* default */],
    boxShadow: __WEBPACK_IMPORTED_MODULE_1__boxShadow__["a" /* default */],
    fontFamily: __WEBPACK_IMPORTED_MODULE_2__fontFamily__["a" /* default */],
    textShadow: __WEBPACK_IMPORTED_MODULE_3__textShadow__["a" /* default */],
    transform: __WEBPACK_IMPORTED_MODULE_4__transform__["a" /* default */]
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = textDecoration;
function textDecoration(_name, value) {
    return {
        textDecorationLine: value
    };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

function transform(name, value, _ref) {
    var lengthProcessor = _ref.lengthProcessor;

    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* removeSpaceFromRgb */])(value);
    var values = value.trim().split(/\s+/);
    var pxs = [];
    var textShadowColor = void 0;
    values.forEach(function (v) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* endsWith */])(v, 'px') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* isNumber */])(v)) {
            pxs.push(v);
        } else {
            textShadowColor = v;
        }
    });
    var all = {};
    if (textShadowColor) {
        all.textShadowColor = textShadowColor;
    }
    if (pxs.length >= 3) {
        all.textShadowRadius = lengthProcessor(name, pxs[2]);
    }
    if (pxs.length >= 2) {
        var textShadowOffset = all.textShadowOffset = {};
        textShadowOffset.width = lengthProcessor(name, pxs[0]);
        textShadowOffset.height = lengthProcessor(name, pxs[1]);
    }
    return all;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

var TRANSFORM_PARTS = {
    perspective: 1,
    rotate: 1,
    rotateX: 1,
    rotateY: 1,
    rotateZ: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 1,
    translateY: 1,
    skewX: 1,
    skewY: 1
};
function transform(name, value, _ref) {
    var warning = _ref.warning,
        lengthProcessor = _ref.lengthProcessor;

    var expressionTagReg = /(\w+)\(([^)]+)\)/g;
    var match = void 0;
    var ret = [];
    /* tslint:disable:no-conditional-assignment */
    while (match = expressionTagReg.exec(value)) {
        var p = match[1];
        var v = match[2];
        if (TRANSFORM_PARTS[p]) {
            if (p === 'rotate') {
                p = 'rotateZ';
            }
            ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(p, lengthProcessor(p, v)));
        } else if (p === 'translate' || p === 'skew') {
            var ss = v.split(',').map(function (s) {
                return s.trim();
            }).filter(function (s) {
                return !!s;
            });
            ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(p + 'X', lengthProcessor(p, ss[0])));
            ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(p + 'Y', lengthProcessor(p, ss[1])));
        } else if (p === 'scale') {
            var _ss = v.split(',').map(function (s) {
                return s.trim();
            }).filter(function (s) {
                return !!s;
            });
            ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(p + 'X', lengthProcessor(p, _ss[0])));
            ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(p + 'Y', lengthProcessor(p, _ss[1] === undefined ? _ss[0] : _ss[1])));
        } else {
            warning(p, v);
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* assoc */])(name, ret);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
],[20]);
//# sourceMappingURL=simple.js.map