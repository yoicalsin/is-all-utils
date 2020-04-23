const is = (type?: any, fn?: Function) => (value: any) => {
    const iscall = toString.call(value) === toString.call(type);
    if (type == 'fn' && fn) return fn(value);
    if (fn) return iscall && fn(value);
    return iscall;
};
// Number
export const isNumber = is(7);
export const isInteger = is(7, Number.isInteger);

// Object
export const isObject = is({});
export const isArray = is([]);
export const isString = is('');
export const isRegex = is(/7/gi);
export const isBoolean = is(true);

// Null
export const isUndefined = is();
export const isNull = is(null);

// Function
export const isFunction = is(is);
export const isClass = is(class {});
export const isSymbol = is(Symbol());

// Error
export const isError = is(new Error());
export const isDate = is(new Date());

// Promise
export const isPromise = is(new Promise(() => {}));
