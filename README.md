## Is all utils

Some functions to validate the type, and they are very light; take a look at the documentation!

<a href="https://github.com/yoicalsin/is-all-utils"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/v/is-all-utils" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/l/is-all-utils" alt="Package License" /></a>
<a href="https://www.npmjs.com/is-all-utils" target="_blank">
<img src="https://img.shields.io/npm/dm/is-all-utils" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/is-all-utils" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/is-all-utils"><img src="https://img.shields.io/badge/Github%20Page-is.all.utils-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

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

isInteger(654); //=> true
isInteger(654.645); //=> false

isFloat(546); //=> false
isFloat(546.9465); //=> true

// Object
isObj({}); //=> true
isObj([]); //=> true

isObject([]); //=> false
isObject({}); //=> true

isArray({}); //=> false
isArray([]); //=> true

isString('Hello World !'); //=> true

isRegex(/7/g); //=> true
isRegex(new RegExp('7', 'g')); //=> true

isBoolean(true); //=> true
isBoolean(false); //=> true
isBoolean(1); //=> false

isBool(true); //=> true
isBool(1); //=> true
isBool(0); //=> true
isBool(false); //=> true

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

isAsyncFunction(async () => {}); //=> true
isAsyncFunction(() => {}); //=> false

isFn(() => {}); //=> true
isFn(async () => {}); //=> true
isFn(class {}); //=> true

isClass(class {}); //=> true
isClass(() => {}); //=> false

isSymbol(Symbol()); //=> true
isSymbol(class {}); //=> false

// Error, Date
isError(new Error('Hi, Error ❓')); //=> true
isError(Error); //=> false

isDate(new Date()); //=> true
isDate(new Date().getTime()); //=> false
isDate(Date); //=> false

isPromise(new Promise(() => {})); //= true
isPromise(Promise); //= false
```

## 🏆 Migration v1.0.3 to v1.0.4

Two new functions, `isAsyncFunction`, `isFn`, and `isClass` functions.

```ts
isAsyncFunction(async () => {}); //=> true
isAsyncFunction(() => {}); //=> false

isFn(() => {}); //=> true
isFn(async () => {}); //=> true
isFn(class {}); //=> true

isClass(class {}); //=> true
isClass(() => {}); //=> false
isClass(async () => {}); //=> false
```

## ⭐ Support for

`is-all-utils` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-   Author [Yoni Calsin](https://github.com/yoicalsin)
-   Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`is-all-utils` under [License MIT.](LICENSE)
