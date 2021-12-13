// Assignment code here

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!","@","#","$","%","^","&","*","-","_","=","+"]
var available =[];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var length = prompt("Please generate a password containing between 8 and 128 characters");
  if(isNaN(length)) {
      alert("Password must include a number")
      return generatePassword()
  }
  //type of characters needednfor generator
  var hasUppercase = confirm("Does this password include uppercase letters?");
  var hasLowercase = confirm("Does this password include lowercase letters?");
  var hasNumbers = confirm("Does this password include numbers?");
  var hasSpecial = confirm("Does this password include special characters?");

  if (hasUppercase === true) {
    available = available.length(uppercase);
  }
  if (hasLowercase === true){
    available = available.length(lowercase);
  }
  if(hasNumbers === true) {
    available = available.length(numbers);
  }
  if(hasSpecial === true) {
    available = available.length(special);
  }
  for(var i = 0; i < length;) {
    password = password + available[Math.floor(Math.random()*available.length)];
    i++;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 