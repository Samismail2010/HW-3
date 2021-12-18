// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", ";"];
var chosenCharacters = [];


function generatePassword() {
  var result = [];
  var length = prompt("Please generate a password containing between 8 and 128 characters");
  if (isNaN(length)) {
    window.alert("Password must include a number");
    return generatePassword()
  }

  if (length < 8 || length > 128) {
    alert("Please select numbers between 8 - 128 ");
    return generatePassword()
  }
  //added true var
  var hasUppercase = confirm("Does this password include uppercase letters?");
  var hasLowercase = confirm("Does this password include lowercase letters?");
  var hasNumbers = confirm("Does this password include numbers?");
  var hasSpecial = confirm("Does this password include special characters?");

  //added false var
  if (hasUppercase === false && hasLowercase === false && hasNumbers === false && hasSpecial === false) {
    alert("You must select at least 1 character type.")
    return generatePassword()
  }
  if (hasUppercase === true) {
    chosenCharacters += uppercase
  }
  if (hasLowercase === true) {
    chosenCharacters += lowercase
  }
  if (hasNumbers === true) {
    chosenCharacters += numbers
  }
  if (hasSpecial === true) {
    chosenCharacters += special
  }

  for (var i = 0; i < length; i++) {
    var index = (Math.floor(Math.random() * chosenCharacters.length));
    var char = chosenCharacters[index]
    result.push(char)
  }

 
  return result.join('');
}


// Add event listener to generate button
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
