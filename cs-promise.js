let booleanVar = true; // Declare a Boolean
console.log(booleanVar); // Output: true

// Promise-Example1
let promiseVar = new Promise((resolve, reject) => {
  setTimeout(() => {
    // You can change the condition for rejection as needed.
    const shouldReject = false; // Change this to true to test the reject part
    if (shouldReject) {
      reject("Promise rejected");
    } else {
      resolve("Promise resolved!");
    }
  }, 1000);
});
promiseVar
  .then(console.log) // Output: Promise resolved! (after 10 seconds)
  .catch(console.error); // Output: Promise rejected (after 10 seconds, if shouldReject is set to true)




// Promise-Example2
// 1. Check balance
const checkBalance = (account) => {
    const balance = account.balance; // Replace with actual balance
    return new Promise((resolve, reject) => {
      balance >= 0 ? resolve(balance) : reject("Invalid balance");
    });
  };
  
  // 2. Process transaction
  const processTransaction = (amount, balance) => {
    const updatedBalance = balance - amount;
    return new Promise((resolve, reject) => {
      amount > 0 && updatedBalance >= 0 ? resolve(updatedBalance) : reject("Transaction failed");
    });
  };
  
  // 3. Update account statement
  const updateStatement = (transaction, balance) => {
    // Simulate updating the account statement
    return new Promise((resolve, reject) => {
      const success = false; // Change this to false to test the reject part
      success ? resolve({transaction, balance}) : reject("Failed to update statement");
    });
  };
  
  // Example account and transaction data
  const account = {balance: 0};
  console.log(typeof(account));
  const transactionAmount = 200; // Change this value to test different scenarios
  
  // Promise chain
  checkBalance(account)
    .then((balance) => {
      console.log("Current balance:", balance);
      return processTransaction(transactionAmount, balance);
    })
    .then((updatedBalance) => {
      console.log("Updated balance:", updatedBalance);
      return updateStatement(transactionAmount, updatedBalance);
    })
    .then(({transaction, balance}) => {
      console.log("Transaction successful:", transaction, "New balance:", balance);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  