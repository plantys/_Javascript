class Transaction {
    constructor(type, amount) {   //this needs two parameters to initialize
      this.type = type;
      this.amount = amount;
    }
  }
  
  class Account {
    constructor() {  //this needs no parameters to initialize
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push(new Transaction('deposit', amount));
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Insufficient funds');
        return;
      }
      this.balance -= amount;
      this.transactions.push(new Transaction('withdraw', amount));
    }
    
    printStatement() {
      for (let i in this.transactions) { 
        const transaction = this.transactions[i];
        switch (transaction.type) { 
          case 'deposit':
            console.log(`Deposited: ${transaction.amount}`);
            break; 
          case 'withdraw':
            console.log(`Withdrew: ${transaction.amount}`);
            break;
          default: 
            console.log('Unknown transaction type');
        }
      }
    }
  }
  
  const myAccount = new Account();
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.withdraw(100);
  myAccount.deposit(40);
  console.log(`Is myAccount an instance of Account? ${myAccount instanceof Account}`); // 'instanceof' keyword
  
  myAccount.printStatement();
  
  const voidExample = void myAccount.deposit(100); // 'void' keyword
  console.log(`Result of void expression: ${voidExample}`);
  