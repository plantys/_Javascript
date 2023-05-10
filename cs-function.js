function namedFunctionDeclaration(a, b) {a * b;}
console.log(namedFunctionDeclaration(3, 4)); // Output: 12


// 1. Anonymous Function Expression
const anonymousFunctionExpression = (a, b) => a + b; // Compact form of arrow function
console.log(anonymousFunctionExpression(2, 3)); // Output: 5

// 2. Non-Anonymous Function Expression
const namedFunctionExpression = function add(a, b) {
  return a + b;
};
console.log(namedFunctionExpression(4, 6)); // Output: 10

// 3. Anonymous Function Declaration (not allowed in JavaScript)
(function() {
    console.log("This is an anonymous function declaration.");
  })();

// 4. Non-Anonymous Function Declaration
function namedFunctionDeclaration(a, b) {
  return a * b;
}
console.log(namedFunctionDeclaration(3, 4)); // Output: 12

 //   1.1.1 Function as a Constructor
function Account(accountNo, holderName) { // Constructor function
  this.accountNo = accountNo;
  this.holderName = holderName;
}
let acc1 = new Account('123456', 'John Doe'); // Create a new object
console.log(acc1); // Expected: Account { accountNo: '123456', holderName: 'John Doe' }

/* 1.1.2 Higher Order Function (Function that returns a Function)
function transactionFeeCalculator(feePercentage) {
  return function calculateFee(amount) {
    return amount * feePercentage / 100; // Returns a function that calculates a fee
  };
}
let feeCalculator = transactionFeeCalculator(1.5);
console.log(feeCalculator(2000)); // Expected: 30 (1.5% of 2000)
*/
// 1.1.2A Alternate to above  If 2 =>, then it means 2 functions
const transactionFeeCalculator = (feePercentage) => (amount) => amount * feePercentage / 100;
const feeCalculator2_5 = transactionFeeCalculator(2.5);
const feeCalculator3 = transactionFeeCalculator(3);
const result = feeCalculator2_5(2000);
console.log(result); // Expected: 50 (2.5% of 2000)



// 1.1.3 Immediately Invoked Function Expressions (IIFE)
(function () {
  let tempAccountBalance = 5000;
  console.log('Temporary account balance is ', tempAccountBalance); // Expected: Temporary account balance is 5000
})();

// 1.1.4 Arrow Function
let balanceChecker = (balance) => balance >= 5000 ? 'Sufficient balance' : 'Insufficient balance';
console.log(balanceChecker(6000)); // Expected: Sufficient balance

// 1.1.5 Function with Default Parameters
function createAccount(accountNo, holderName, accountType = 'checking') { // Default parameter
  return { accountNo, holderName, accountType };
}
console.log(createAccount('123456', 'John Doe', 'Saving')); // Expected: { accountNo: '123456', holderName: 'John Doe', accountType: 'checking' }

// 1.1.6 Function with Rest Parameters
function sum(...nums) { // Rest parameter
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Expected: 15

// 1.1.7 Recursive Function
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1); // Recursive call
}
console.log(factorial(5)); // Expected: 120

// @@@1.1.8 Callback Function
/*function processTransaction(amount, callback) {
  let newBalance = callback() - amount;
  return newBalance;
}
let getBalance = () => 5000;
console.log(processTransaction(1500, getBalance)); // Expected: 3500*/
const processTransaction = (amt, cb) => cb() - amt;
const getBalance = () => 5000;
console.log(processTransaction(1500, getBalance)); // Expected: 3500




// 1.1.9 Function as a Method of an Object
let account = {
  balance: 5000,
  deposit: function (amount) { // Method of an object
    this.balance += amount;
    return this.balance;
  }
};
console.log(account.deposit(2000)); // Expected: 7000

// 1.1.10 Generator Function
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++; // Generator function
  }
}
let generateId = idGenerator();
console.log(generateId.next().value); // Expected: 1
console.log(generateId.next().value); // Expected: 2