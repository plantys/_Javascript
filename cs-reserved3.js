class Bank {
    constructor() {
      this.accounts = new Map(); // 'Map' keyword
      this.idSymbol = Symbol('id'); // 'Symbol' keyword
    }
  
    createAccount(name) {
      let newAccount = { name, balance: 0 };
      newAccount[this.idSymbol] = Math.random().toString(36).substr(2, 9);
      this.accounts.set(newAccount[this.idSymbol], newAccount); // 'set' keyword as a Map method
    }
  
    deposit(accountId, amount) {
      let account = this.accounts.get(accountId); // 'get' keyword as a Map method
      if (!account) return console.log("Account not found");
      account.balance += amount;
    }
  
    printAccounts() {
      this.accounts.forEach(account => console.log(`Account ID: ${account[this.idSymbol]}, Name: ${account.name}, Balance: ${account.balance}`));
    }
  }
  
  let myBank = new Bank();
  myBank.createAccount("John Doe");
  myBank.createAccount("Jane Doe");
  myBank.deposit("someAccountId", 1000); // Replace "someAccountId" with a valid accountId
  myBank.printAccounts();
  