'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const is = (type) => (value) => {
    if (type && type.name != 'is' && typeof type === 'function') {
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
exports.isBool = is((v) => !!v);
exports.isUndefined = is();
exports.isNull = is(null);
exports.isNil = is((v) => isUndefined(v) || isNull(v));
exports.isFunction = is(is);
exports.isSymbol = is(Symbol());
exports.isError = is(new Error());
exports.isDate = is(new Date());
exports.isPromise = is(new Promise(() => {}));
