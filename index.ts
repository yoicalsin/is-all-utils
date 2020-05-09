const is = <T = any>(type?: any) => (value: T): boolean => {
    if (toString.call(type) === '[object Function]' && type.name != 'is') {
        return type(value);
    }
    return toString.call(value) === toString.call(type);
};

// Number
export const isNumber = is(7);
export const isInteger = is<number>(Number.isInteger);
export const isFloat = is<number>((v) => /(?:\.)+/.test(parseFloat(v) as any));

// Object
export const isObj = is((v: any) => typeof v === 'object');
export const isObject = is({});
export const isArray = is([]);
export const isString = is('');
export const isRegex = is(/7/gi);
export const isBoolean = is(true);
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

// Class
export const isClass = is(
    (v) => isObject((v || {}).prototype) && isFn(v.prototype.constructor),
);

// Error, Date
export const isError = is(new Error());
export const isDate = is(new Date());

// Promise
export const isPromise = is(new Promise(() => {}));

export { is };
