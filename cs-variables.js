//(param1, param2, ...) => expression | ARROW FN - Can have no parameters i.e. (). Need {} & return statement for multi-statement functions. Better to keep () for single param as well.
function applyReducer(initialValue, ...args) { return args.reduce((accumulator, current) => current(accumulator), initialValue);  }  //also can directly return a formula
const transactionFeeCalculator = (feePercentage) => (amount) => amount * feePercentage / 100; //higher order arrow function. Stuff within () are parameters. () can be ommitted.
//promises - resolve, reject, then, and catch



function name(parameters) { logic } | return outputs a value from a function | If no return, function gives undefined | return not needed when function modifies external variables or performs an action not requiring a result.
/*Primitive types*/ Undefined, Null, Boolean, Number, BigInt, String, Symbol
/*Object types*/ Object, Function, Array, Map, Set, WeakMap, WeakSet, Date, RegExp, Promise, Proxy, DataView, ArrayBuffer, SharedArrayBuffer, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Error (EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError)


let booleanVar = true; // Declare a Boolean
let stringVar = "Hello, World!"; // Declare a String
let numberVar = 12345; // Declare a Number
let objectVar = { id: 1, name: 'Account 1', balance: 1000 }; // Declare an Object
let arrayVar = [1, 2, 3, 4, 5]; // Declare an Array
let nullVar = null; // Declare Null
let undefinedVar; // Declare Undefined
let bigIntVar = 1234567890123456789012345678901234567890n;  // BigInt
let dateVar = new Date();// Date

console.log(booleanVar); // Output: true
console.log(stringVar); // Output: "Hello, World!"
console.log(numberVar); // Output: 12345
console.log(objectVar); // Output: { id: 1, name: 'Account 1', balance: 1000 }
console.log(arrayVar); // Output: [1, 2, 3, 4, 5]
console.log(nullVar); // Output: null
console.log(undefinedVar); // Output: undefined
console.log(bigIntVar); // Output: 1234567890123456789012345678901234567890n
console.log(dateVar); // Output: current date and time






