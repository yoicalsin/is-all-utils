const is = (type?: any, fn?: Function) => (value: any) => {
  const isAfter = toString.call(value) === toString.call(type);
  if (type == "none" && fn) return fn(value);
  if (fn) return isAfter && fn(value);
  return isAfter;
};

export const isObject = is({});
export const isArray = is([]);
export const isNumber = is(7);
export const isNaN = is(NaN);
export const isString = is("");
export const isClass = is(class {});
export const isRegex = is(/7/gi);
export const isBoolean = is(true);
export const isUndefined = is();
export const isNull = is(null);
export const isFunction = is(is);
export const isError = is(new Error());
export const isDate = is(new Date());
export const isInteger = is(7, Number.isInteger);
export const isSymbol = is(Symbol());
export const isPrimitive = is(
  "none",
  (value: any) =>
    isNumber(value) ||
    isBoolean(true) ||
    isString(value) ||
    isSymbol(value) ||
    isUndefined(value)
);

export { is };
