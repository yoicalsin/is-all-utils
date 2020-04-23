const is = <T = any>(type?: any) => (value: T): boolean => {
    if (type && type.name != 'is' && isFunction(type)) return type(value);
    return toString.call(value) === toString.call(type);
};

// Number
export const isNumber = is(7);
export const isInteger = is<number>(Number.isInteger);
export const isFloat = is<number>((v: any) =>
    /(?:\.)+/.test(parseFloat(v) as any),
);

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
export const isSymbol = is(Symbol());

// Error, Date
export const isError = is(new Error());
export const isDate = is(new Date());

// Promise
export const isPromise = is(new Promise(() => {}));

export { is };
