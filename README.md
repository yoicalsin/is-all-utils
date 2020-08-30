## Is all utils, +32 functions

Some functions to validate the type, and they are very light; take a look at the documentation!

<a href="https://github.com/yonycalsin/is-all-utils"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/v/is-all-utils" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/l/is-all-utils" alt="Package License" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/dm/is-all-utils" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/is-all-utils" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonycalsin/is-all-utils"><img src="https://img.shields.io/badge/Github%20Page-is.all.utils-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yony%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonycalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"></a>

### Installation

```bash
npm install --save is-all-utils

# Or

yarn add is-all-utils
```

### Usage

For import with `typescript` or `ES6+`

```ts
import { isNil /* ...more functions */ } from 'is-all-utils';
```

For import with `javascript standar or ES5-`

```js
const is = require('is-all-utils');

// Use with javascript standar
is.isNil;
```

```ts
// Number
isNumber(546); //=> true
isNumber(76.945); //=> true
isNumber(Number); //=> false
isNumber(Number(7)); //=> true
isNumber(new Date().getTime()); //=> true

isInteger(654); //=> true
isInteger(654.645); //=> false

isFloat(546); //=> false
isFloat(546.9465); //=> true
isFloat(546.0); //=> false

// Object
isObj({}); //=> true
isObj([]); //=> true
isObj(Array(7, 18)); //=> true

isObject([]); //=> false
isObject({}); //=> true
isObject(Object); //=> false

isArray({}); //=> false
isArray([]); //=> true
isArray(Array); //=> false
isArray(Array(7, 18)); //=> true

isString('Hello World !'); //=> true
isString(String('Hello World !')); //=> true
isString(String); //=> false

isRegExp(/7/g); //=> true
isRegExp(RegExp('7', 'g')); //=> true
isRegExp(RegExp); //=> false

isBoolean(true); //=> true
isBoolean(false); //=> true
isBoolean(1); //=> false
isBoolean(Boolean(1)); //=> true

isBool(true); //=> true
isBool(1); //=> true
isBool(0); //=> true
isBool(false); //=> true

// Map
isMap(new Map()); //=> true
isMap(Map); //=> false
isMap(new Map(Object.entries({ twitter: '@yonycalsin' }))); //=> true

// WeakMap
isWeakMap(new WeakMap()); //=> true
isWeakMap(new Map()); //=> false

// Set
isSet(new Set()); //=> true
isSet(Set); //=> false

// WeakSet
isWeakSet(new WeakSet()); //=> true
isWeakSet(new Map()); //=> false
isWeakSet(new Set()); //=> false

// Undefined
isUndefined(undefined); //=> true
isUndefined(null); //=> false

isNull(undefined); //=> false
isNull(null); //=> true

isNil(undefined); //=> true
isNil(null); //=> true

// Function
isFunction(() => {}); //=> true
isFunction(class {}); //=> true
isFunction(async () => {}); //=> false
isFunction(Function); //=> true

isAsyncFunction(async () => {}); //=> true
isAsyncFunction(() => {}); //=> false

isFn(() => {}); //=> true
isFn(async () => {}); //=> true
isFn(class {}); //=> true
isFn(Number); //=> true
isFn(Number); //=> true
isFn(Function); //=> true

isClass(class {}); //=> true
isClass(() => {}); //=> false

isSymbol(Symbol()); //=> true
isSymbol(class {}); //=> false
isSymbol(Symbol); //=> false

// Error, Date
isError(new Error('Hi, Error ❓')); //=> true
isError(Error); //=> false

isDate(new Date()); //=> true
isDate(new Date().getTime()); //=> false
isDate(Date); //=> false

isPromise(new Promise(() => {})); //=> true
isPromise(async () => {}); //=> false
isPromise((async () => {})()); //=> true
isPromise(Promise); //=> false
```

## ⭐ Support for

`is-all-utils` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](https://twitter.com/yonycalsin).

## 🎩 Stay in touch

-   Github [@yonycalsin](https://github.com/yonycalsin)
-   Twitter [@yonycalsin](https://twitter.com/yonycalsin)
-   Instagram [@yony_calsin](https://instagram.com/yony_calsin)
-   Medium [@yonycalsin](https://medium.com/@yonycalsin)
-   Dev [@yonycalsin](https://dev.to/yonycalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`is-all-utils` under [License MIT.](LICENSE)
