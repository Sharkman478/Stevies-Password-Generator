// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword() {
  // This prompts the user to input numbers between 8 and 128 for the password
  var characters = prompt("Enter the amount of characters you want in your password between 8 and 128");
  console.log(characters, typeof characters);
  var charNumber = Number.parseInt(characters);
  // The isNan makes it sure that it is a number and if it doesn't it brings up the alert
  if (isNaN(charNumber) || charNumber < 8 || charNumber > 128) {
    alert("Input was not a number or password must be between 8 and 128 characters!");
    return
  }
// These confirms confirm the user to choose what they want in their password
  var confirmLower = confirm("Do you want lowercase?");
  var confirmUpper = confirm("Do you want uppercase?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSpecialchar = confirm("Do you want special characters?");
// These are the variables for the confirms
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!@#$%^&*?";

  
  // Modify conditions for other confirms later
  if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecialchar) {
    alert("Cannot generate password with all options false")
    return
  }

  
  
  var passwordChars = []
//  This is the code that pushes the confirms into the array for it to be randomized
  if (confirmLower) {
    passwordChars += lower;
  }
  if (confirmUpper) {
    passwordChars += upper;
  }
  if (confirmNumbers) {
    passwordChars += numbers;
  }
  if (confirmSpecialchar) {
    passwordChars += specialChar;
  }
  var result = "";
  // This randomizes the password
  for (let i = 0; i < charNumber; i++) {
    result += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }
  // This returns the result
  return result;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
