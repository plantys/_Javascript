class BankAccount { 
    constructor(accountHolder, accountType) { 
      this.accountHolder = accountHolder;
      this.accountType = accountType;
      this.balance = 0;
    }
     deposit(amount) {
      if (typeof amount !== 'number' || amount <= 0) { 
        throw new Error('Deposit amount must be a positive number'); 
      }
      this.balance += amount;
      return this.balance;
    }
      withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Withdraw amount must be a positive number');
      } else if (amount > this.balance) { 
        throw new Error('Insufficient balance');
    }
    this.balance -= amount;
    return this.balance;
    }
    }
    
    class BankTransaction { 
    constructor(account, amount) {
    this.account = account;
    this.amount = amount;
    this.completed = false;
    }
    completeTransaction() {
    try { 
    this.account.withdraw(this.amount);
    this.completed = true;
    } catch (error) { 
    console.log(`Transaction failed: ${error.message}`); 
    } finally {
    console.log('Transaction attempted');
    }
    }
    }
    
 
    const myAccount = new BankAccount('John Doe', 'Checking'); 
    
    
    let myTransaction = new BankTransaction(myAccount, -200);
    
    try { 
    myAccount.deposit('200'); 
    } catch (error) { 
    console.log(`Deposit failed: ${error.message}`);
    }
    
    try {
    myAccount.deposit(200); // This will succeed
    myTransaction.completeTransaction(); // This will succeed
    } catch (error) {
    console.log(`Operation failed: ${error.message}`);
    } finally { 
    console.log('Operations completed');
    }
    
    console.log(`Final balance: ${myAccount.balance}`);

    
//In this code, we're using classes to define a bank account and a transaction. We're using 'try', 'catch', and 'finally' blocks to handle errors and ensure that certain code gets run no matter what. We're also using 'if', 'else', and 'throw' to do some basic error checking. The 'new' keyword is used to create instances of our classes, and 'this' is used to refer to the current instance of a class. The 'typeof' keyword is used to ensure that we're working with numbers when we're doing our banking operations.
