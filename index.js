"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = exports.isPromise = exports.isDate = exports.isError = exports.isClass = exports.isSymbol = exports.isFn = exports.isAsyncFunction = exports.isFunction = exports.isNil = exports.isNull = exports.isUndefined = exports.isWeakSet = exports.isSet = exports.isWeakMap = exports.isMap = exports.isBool = exports.isBoolean = exports.isRegExp = exports.isString = exports.isArray = exports.isObject = exports.isObj = exports.isFloat = exports.isInteger = exports.isNumber = void 0;
const is = (type) => (value) => {
    if (toString.call(type) === '[object Function]' && type.name != 'is') {
        return type(value);
    }
    return toString.call(value) === toString.call(type);
};
exports.is = is;
exports.isNumber = is(7);
exports.isInteger = is(Number.isInteger);
exports.isFloat = is((v) => /(?:\.)+/.test(v));
exports.isObj = is((v) => typeof v === 'object');
exports.isObject = is({});
exports.isArray = is([]);
exports.isString = is('');
exports.isRegExp = is(/7/gi);
exports.isBoolean = is(true);
exports.isBool = is((v) => exports.isBoolean(v) || v == 0 || v == 1);
exports.isMap = is(new Map());
exports.isWeakMap = is(new WeakMap());
exports.isSet = is(new Set());
exports.isWeakSet = is(new WeakSet());
exports.isUndefined = is();
exports.isNull = is(null);
exports.isNil = is((v) => exports.isUndefined(v) || exports.isNull(v));
exports.isFunction = is(is);
exports.isAsyncFunction = is(async () => { });
exports.isFn = is((v) => typeof v === 'function');
exports.isSymbol = is(Symbol());
exports.isClass = is((v) => exports.isObject((v || {}).prototype) && exports.isFn(v.prototype.constructor));
exports.isError = is(new Error());
exports.isDate = is(new Date());
exports.isPromise = is(new Promise(() => { }));
