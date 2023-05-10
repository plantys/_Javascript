

// Example 1: A function that takes an indefinite number of arguments and sums them.
function sum(...nums) {return nums.reduce((acc, num) => acc + num, 0);} 
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

// Example 2: A function that takes a string and an indefinite number of functions, applies the functions to the string, and returns the result.
function stringProcessor(str, ...fns) {return fns.reduce((acc, fn) => fn(acc), str);} 
let toUpper = str => str.toUpperCase(); 
let addExclamation = str => str + '!'; 
console.log(stringProcessor('hello', toUpper, addExclamation)); // Outputs: 'HELLO!'

// Example 3: A function that takes a bank account object and an indefinite number of transactions, applies the transactions, and returns the final balance.
function applyTransactions(account, ...transactions) {return transactions.reduce((balance, transfer) => transfer(balance), account.balance);} // Transaction Application function
let deposit = amount => balance => balance + amount; 
let withdraw = amount => balance => balance - amount; 
let deposithalf = amount => balance => balance + amount/2; 
console.log(applyTransactions({balance: 1000}, deposit(200), withdraw(500), deposithalf(80))); // Outputs: 700

// Example 4: A function that takes an array and returns an object with the first element as a key and the rest of the elements as values.
function arrayToObject([key, ...values]) {return {[key]: values};} // Array to Object function
console.log(arrayToObject(['fruits', 'apple', 'banana', 'grape'])); // Outputs: {fruits: ['apple', 'banana', 'grape']}

// Example 5: A function that uses the rest parameter to collect arguments from the second argument onwards.
function secondOnwards(first, ...rest) {return rest;} // Function to collect rest of the arguments
console.log(secondOnwards('first', 'second', 'third', 'fourth')); // Outputs: ['second', 'third', 'fourth']


  