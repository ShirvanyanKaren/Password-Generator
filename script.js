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

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperChar = lowerChar.map(function (element) {
  return element.toUpperCase();
});
console.log(upperChar)
var numbersPass = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", , "]", "\\", "^", "_", "`", "{", "|", "}", "~",]

var userOutput;
// blankPass var to join password to
var blankPass;
// Based on choices, create availableChars variable to assign them to
var availableChars;
var guaranteeChar;

//Function called write password
function writePassword() {
  // creates variable name "password" and sets it equal to return for function "generatePassword"
  var password = genPassword();
  // creates variable "passwordText" that grabs "id=password" in html
  var passwordText = document.querySelector("#password");
  // sets value to password
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

function genPassword() {


  // Must prompt used for password length (8-128) 
  var lengthPass = Number(prompt("How many characters would you like your password to be? Choose between 8-128?"));
  if (isNaN(lengthPass)){
    alert("Input must be number");
    return null;
  }
  //Created a while loop if user doesn't meet sufficient requirements
  while (lengthPass < 8 || lengthPass > 128 || !lengthPass) {
    alert("Number must be between 8 and 128");
    return null;
  }

  // Confirm if user wants upper/lower, numbers and or special characters
  if (lengthPass => 8 && lengthPass <= 128) {
    var confirmUpper = confirm("Would you like to use upper case characters?");
    var confirmLower = confirm("Would you like to use lower case characters?");
    var confirmNum = confirm("Would you like to use numbers?");
    var confirmSpecial = confirm("Would you like to use special characters?");

  }
  // if no value is confirmed, prompt user to input at least one value
  while (!confirmNum && !confirmSpecial && !confirmLower && !confirmUpper) {
    alert("You have to select atleast one attribute.");
    var confirmUpper = confirm("Would you like to use upper case characters?");
    var confirmLower = confirm("Would you like to use upper case characters?");
    var confirmNum = confirm("Would you like to use numbers?");
    var confirmSpecial = confirm("Would you like to use special characters?");
  }

  var blankPass = [];

//Created a randomizer for the confirms that ensures 
  if (confirmLower) {
    guaranteeChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
    blankPass.push(guaranteeChar);
  }
  if (confirmUpper) {
    guaranteeChar = upperChar[Math.floor(Math.random() * upperChar.length)];
    blankPass.push(guaranteeChar);
  }
  if (confirmNum) {
    guaranteeChar = numbersPass[Math.floor(Math.random() * numbersPass.length)];
    blankPass.push(guaranteeChar);
  }
  if (confirmSpecial) {
    guaranteeChar = specialChar[Math.floor(Math.random() * specialChar.length)];
    blankPass.push(guaranteeChar);
  }
//these if statements are to ensure that if the user only chooses one option, the loop runs through it as availableChar
  if (confirmLower) {
      availableChars = lowerChar;
    }
    if (confirmUpper) {
      availableChars = upperChar;
    }
    if (confirmNum) {
      availableChars = numbersPass;
    }
    if (confirmSpecial) {
      availableChars = specialChar;
    }

  if (confirmLower) {
    availableChars = availableChars.concat(lowerChar);
  }
  if (confirmUpper) {
    availableChars = availableChars.concat(upperChar);
  }
  if (confirmNum) {
    availableChars = availableChars.concat(numbersPass);
  }
  if (confirmSpecial) {
    availableChars = availableChars.concat(specialChar);
  }


  

  // created for loop that generates password given the user choices, and continues until outcom is equal to the lengthPass stated by user
  for (var i = blankPass.length; i < lengthPass; i++) {
    userOutput = availableChars[Math.floor(Math.random() * availableChars.length)]
    blankPass.push(userOutput)
    console.log(userOutput);
  }
  //We push the blackPass var and join it to ("") so password can output the result as a string value which then becomes navigated to passwordText

  //shuffle blanpass as your own challenge
  var password = shuffle(blankPass);
  return password.join('');
  // console.log(password)
}


// Add event listener to generate button

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
