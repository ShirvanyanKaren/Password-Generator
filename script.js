// Assignment Code
// Phase 1: creating variable and obtaining required info
// What do we need?




// Create a arrays of available characters (lower/uppercase, numbers, special characters)
// all are yes/no except for length
// Think about edge cases for bad length inputs
// If user puts in less than 8 characters -- tell them it's wrong/ insufficient characters
// If user puts in more than 128 characters tell them it's too big
// If no length or non-numerical inouts tell user it's wrong entry
// If user says no to every type of confirm questions inform them to have atleast one type 

//Phase 2
// What variables to be tracked
// Cresate password variable that is an empty string
// create a for loop that runs the user chosen length amount of time
// In for loop we need to generate a single random character and append this character to the password
// For loop steps
// Create random number between 0 and length of our availabe character type array depending on what user chooses
// Select one variable from array of availablechars at index random number we gen
// var newChar= availablechars[randomNum]
// Append this to newPassword for user
// Return result


var generateBtn = document.querySelector("#generate");

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperChar = lowerChar.map(function(element) {
  return element.toUpperCase();
});

var numbersPass = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
//Function called write password
function writePassword() {
  
  // creates variable name "password" and sets it equal to return for function "generatePassword"
  // var password = generatePassword();
  
  // creates variable "passwordText" that grabs "id=password" in html
  var passwordText = document.querySelector("#password");

  // sets value to password
  passwordText.value = password;

  // Must prompt used for password length (8-128)
var lengthPass = prompt("How many characters would you like your password to be? Choose between 8-128?");

if (!lengthPass){
  alert("Number of Characters Required");
}
else if (lengthPass < 8 || lengthPass > 128){
alert("Number must be between 8 and 128");
}
else {
  // Confirm if user wants upper/lower characters
var confirmUpper = confirm("Would you like to use upper case characters?");
// Confirm if user wants to use numbers and special characters
var confirmNum = confirm("Would you like to use numbers?");
var confirmSpecial = confirm("Would you like to use special ;characters?")
// Based on choices, create availableChars variable to assign them to
}










}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

