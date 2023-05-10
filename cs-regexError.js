// Define a function to validate account number format
function validateAccountNumber(accountNumber) {
    // Define the regular expression for account number format
    let regex = /^\d{12}$/; // ^\d{12}$ means exactly 12 digits
  
    if (!regex.test(accountNumber)) { // If the account number format is incorrect
      throw new Error("Invalid account number format!"); // Throw an error
    }
      console.log("Account number is valid."); // If no error is thrown, the account number is valid
  }
  
  // Test the function with a valid account number
  validateAccountNumber("123456789012"); // Output: Account number is valid.
  
  // Test the function with an invalid account number
  try {
    validateAccountNumber("1234abc78901"); // This will throw an error
  } catch(e) {
    console.log(e.message); // Output: Invalid account number format!
  }
  