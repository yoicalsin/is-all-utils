const is = <T = any>(type?: any) => (value: T): boolean => {
    if (toString.call(type) === '[object Function]' && type.name != 'is') {
        return type(value);
    }
    return toString.call(value) === toString.call(type);
};

// Number
export const isNumber = is(7);
export const isNumberFn = is((v) => v === Number);
export const isInteger = is<number>(Number.isInteger);
export const isFloat = is<number>((v) => /(?:\.)+/.test(parseFloat(v) as any));

// Object
export const isObj = is((v: any) => typeof v === 'object');
export const isObject = is({});
export const isObjectFn = is((v) => v === Object);
export const isArray = is([]);
export const isArrayFn = is((v) => v === Array);
export const isString = is('');
export const isStringFn = is((v) => v === String);
export const isRegExp = is(/7/gi);
export const isRegExpFn = is((v) => v === RegExp);
export const isBoolean = is(true);
export const isBooleanFn = is((v) => v === Boolean);
export const isBool = is((v) => isBoolean(v) || v == 0 || v == 1);

// Null
export const isUndefined = is();
export const isNull = is(null);
export const isNil = is((v: any) => isUndefined(v) || isNull(v));

// Function
export const isFunction = is(is);
export const isAsyncFunction = is(async () => {});
export const isFn = is((v: any) => typeof v === 'function');
export const isSymbol = is(Symbol());
export const isSymbolFn = is((v) => v === Symbol);

// Class
export const isClass = is(
    (v) => isObject((v || {}).prototype) && isFn(v.prototype.constructor),
);

// Error, Date
export const isError = is(new Error());
export const isErrorFn = is((v) => v === Error);
export const isDate = is(new Date());
export const isDateFn = is((v) => v === Date);

// Promise
export const isPromise = is(new Promise(() => {}));
export const isPromiseFn = is((v) => v === Promise);

export { is };
