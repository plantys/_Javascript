
//1.3

const accountTypes = ['checking', 'savings', 'checking', 'savings', 'checking'];
const typeCount = accountTypes.reduce((acc, type) => {  acc[type] = (acc[type] || 0) + 1;  return acc;}, {});
console.log(typeCount); // Output: { checking: 3, savings: 2 }


const account = { id: 1, balance: 1000 };
const { id, balance } = account;
console.log(id, balance); // Output: 1 1000

const printAccountInfo = ({ id, balance }) => console.log(`Account ID: ${id}, Balance: ${balance}`);
printAccountInfo(account); // Output: Account ID: 1, Balance: 1000

const customer = { name: 'Alice', address: { city: 'New York', country: 'USA' } };
const { name, address: { city, country } } = customer;
console.log(name, city, country); // Output: Alice New York USA

const { id: accountId, balance: accountBalance } = account;
console.log(accountId, accountBalance); // Output: 1 1000

const accounts = [
  { id: 1, balance: 1000 },
  { id: 2, balance: 2000 },
  { id: 3, balance: 1500 },
];
const totalBalance = accounts.reduce((acc, { balance }) => acc + balance, 0);

// Output: 4500

const transactions = [100, -50, 200, -25, 150];
const positiveTransactions = transactions.filter((amount) => amount > 0);
console.log(positiveTransactions);
// Output: [100, 200, 150]

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(isPrime(7));
console.log("test");
// Usage: isPrime(7) // Output: true

const sum = (a, b) => a + b;
// Usage: sum(3, 4) // Output: 7
console.log(sum(3, 4));
console.log("test");
