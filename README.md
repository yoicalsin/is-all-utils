## Is all utils

they are functions to validate types!

### Usage

```ts
import {
    // Number
    isNumber,
    isInteger,
    isFloat,

    // Object
    isObj,
    isObject,
    isArray,
    isString,
    isRegex,
    isBoolean,
    isBool,

    // Undefined
    isUndefined,
    isNull,
    isNil,

    // Function
    isFunction,
    isSymbol,

    // Date, Error
    isError,
    isDate,

    // Promise
    isPromise,
} from 'is-all-utils';

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

isSymbol(Symbol()); //=> true
isSymbol(class {}); //=> false

// Error, Date
isError(new Error('Hi, Error ❓')); //=> true

isDate(new Date()); //=> true
isDate(new Date().getTime()); //=> false
isDate(Date); //=> false

isPromise(new Promise(() => {})); //= true
isPromise(Promise); //= false
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
