//1.4
// 1. Number: Numeric values, including integers and floating-point numbers
let interestRate = 3.5;

// 2. String: Text values, can be enclosed in single or double quotes, or template literals
let accountHolderName = 'John Doe';

// 3. Boolean: True or false values
let isAccountActive = true;

// 4. Null: Represents an intentional absence of any value
let middleName = null;

// 5. Undefined: Represents a variable that has not been assigned a value
let lastName;

// 6. Symbol: Represents a unique identifier, used as keys for object properties
const accountId = Symbol('id');

// 7. Object: Represents a collection of properties and methods
let account = {
  [accountId]: 12345,
  transactionId: 12345,
  accountHolderName,
  accountType: 'checking',
  balance: 1000,
};

// 8. Array: Represents an ordered list of values, can hold any data type
let transactions = [
  { type: 'deposit', amount: 1000 },
  { type: 'withdrawal', amount: 200 },
];

// 9. Set: Represents a collection of unique values, can hold any data type
let uniqueAccountTypes = new Set(['checking', 'savings', 'credit']);

// 10. Map: Represents a collection of key-value pairs, can hold any data type for both keys and values
let accountBalances = new Map([
  ['checking', 1000],
  ['savings', 5000],
]);

// Perform operations using the various data types

// 1. Object (#7)
let updatedBalance = account.balance + 100;
console.log(updatedBalance); // Output: 1100

// 2. Array (#8)
transactions.push({ type: 'withdraw', amount: 50 });
console.log(transactions); // Output: [{type: 'deposit', amount: 100}, {type: 'withdraw', amount: 50}]

// Array - Find index of an element
const index = transactions.findIndex(transaction => transaction.type === 'withdraw');
console.log(index); // Output: 1

// Array - Remove an element
transactions.splice(index, 1);
console.log(transactions); // Output: [{type: 'deposit', amount: 100}]

// 3. Set (#9)
uniqueAccountTypes.delete('credit');
console.log(uniqueAccountTypes); // Output: Set(2) { 'checking', 'savings' }

// Set - Check if a value exists
const hasChecking = uniqueAccountTypes.has('checking');
console.log(hasChecking); // Output: true

// 4. Map (#10)
accountBalances.set('credit', 2000);
console.log(accountBalances.get('credit')); // Output: 2000

// Map - Check if a key exists
const hasCredit = accountBalances.has('credit');
console.log(hasCredit); // Output: true

// Map - Delete a key-value pair
accountBalances.delete('credit');
console.log(accountBalances); // Output: Map(2) { 'checking' => 1000, 'savings' => 500 }

// Object (#7): No additional operations available.
// Array (#8):
// Iterate over elements using forEach:
transactions.forEach(transaction => console.log(transaction.type));
// Output: deposit, withdraw

// Filter elements based on a condition using filter:
const deposits = transactions.filter(transaction => transaction.type === 'deposit');
console.log(deposits); // Output: [{type: 'deposit', amount: 100}]
// Transform elements using map:
const amounts = transactions.map(transaction => transaction.amount);
console.log(amounts); // Output: [100, 50]

//Iterate over elements using forEach:
uniqueAccountTypes.forEach(type => console.log(type));
// Output: checking, savings
//Convert a Set to an Array:
const accountTypesArray = Array.from(uniqueAccountTypes);
console.log(accountTypesArray); // Output: ['checking', 'savings']

//Map (#10):
// Iterate over key-value pairs using forEach:
accountBalances.forEach((balance, type) => console.log(`${type}: ${balance}`));

// Output: checking: 1000, savings: 500
//Retrieve all keys using keys:

const accountTypes = Array.from(accountBalances.keys());
console.log(accountTypes); // Output: ['checking', 'savings']
//Retrieve all values using values:
const balances = Array.from(accountBalances.values());
console.log(balances); // Output: [1000, 500]

//Object (#7):
//Merge two objects using Object.assign:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

//Array (#8):
// Reduce an array to a single value using reduce:
const sum = amounts.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 150

// Check if an array includes a specific value using includes:
const hasSavings = accountTypesArray.includes('savings');
console.log(hasSavings); // Output: true

// Set (#9):
// Check if a Set includes a specific value using has:
const hasChecking1 = uniqueAccountTypes.has('checking');
console.log(hasChecking1); // Output: true
// Remove a specific value from a Set using delete:
uniqueAccountTypes.delete('checking');
console.log(uniqueAccountTypes); // Output: Set(1) { 'savings' }
//Map (#10):

// Remove a specific key-value pair from a Map using delete:
accountBalances.delete('checking');
console.log(accountBalances); // Output: Map(1) { 'savings' => 500 }
//Check if a Map includes a specific key using has:
const hasCheckingAccount = accountBalances.has('checking');
console.log(hasCheckingAccount); // Output: true
console.log();
