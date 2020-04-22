export const is = (type?: any) => (value: any) =>
  toString.call(value) === toString.call(type);

export const isObject = is({});
export const isArray = is([]);
export const isNumber = is(7);
export const isString = is("");
export const isClass = is(class {});
export const isRegex = is(/7/gi);
export const isBoolean = is(true);
export const isUndefined = is();
export const isNull = is(null);
export const isFunction = is(is);
