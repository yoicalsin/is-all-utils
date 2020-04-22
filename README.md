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

## ⭐ Support for

`is-all-utils` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

- Author [Yoni Calsin](https://github.com/yoicalsin)
- Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`is-all-utils` under [License MIT.](LICENSE)
