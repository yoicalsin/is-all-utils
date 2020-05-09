'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const is = (type) => (value) => {
    if (toString.call(type) === '[object Function]' && type.name != 'is') {
        return type(value);
    }
    return toString.call(value) === toString.call(type);
};
exports.is = is;
exports.isNumber = is(7);
exports.isInteger = is(Number.isInteger);
exports.isFloat = is((v) => /(?:\.)+/.test(parseFloat(v)));
exports.isObj = is((v) => typeof v === 'object');
exports.isObject = is({});
exports.isArray = is([]);
exports.isString = is('');
exports.isRegex = is(/7/gi);
exports.isBoolean = is(true);
exports.isBool = is((v) => exports.isBoolean(v) || v == 0 || v == 1);
exports.isUndefined = is();
exports.isNull = is(null);
exports.isNil = is((v) => exports.isUndefined(v) || exports.isNull(v));
exports.isFunction = is(is);
exports.isAsyncFunction = is(async () => {});
exports.isFn = is((v) => typeof v === 'function');
exports.isSymbol = is(Symbol());
exports.isClass = is(
    (v) =>
        exports.isObject((v || {}).prototype) &&
        exports.isFn(v.prototype.constructor),
);
exports.isError = is(new Error());
exports.isDate = is(new Date());
exports.isPromise = is(new Promise(() => {}));
