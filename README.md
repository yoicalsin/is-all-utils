## Is all utils

they are functions to validate types!

### Usage

```ts
import {
  isObject,
  isArray,
  isNumber,
  isString,
  isClass,
  isRegex,
  isBoolean,
  isUndefined,
  isNull,
  isFunction,
} from "is-all-utils";

// Object
isObject([425, 235, 5]); // => false
isObject({
  year: 2020,
}); // => true

// Array
isArray([1, 23, 515]); // => true

// Number
isNumber(516); // => true
isNumber(NaN); // => true

// String
isString("yoni-calsin"); // => true

// Class
isClass(class {}); // => true

// Regex
isRegex(/7/); // => true

// Boolean
isBoolean(false); // => true
isBoolean(true); // => true

// Undefined
isUndefined(undefined); // => true
isUndefined(null); // => false

// Null
isNull(null); // => true
isNull(undefined); // => false

// Function
isFunction(function () {
  // Here your code !
}); // => true

isFunction(class {}); // => false
```
