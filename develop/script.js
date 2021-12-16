// Assignment code here
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers = [1,2,3,4,5,6,7,8,9,0]
    var special =  ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",";"];
    var chosenCharacters = [];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
generateBtn.addEventListener("click", generatePassword);


function generatePassword(){
  var result = "";
  var length = prompt("Please generate a password containing between 8 and 128 characters");
  if(isNaN(length)){
    window.alert("Password must include a number");
    return generatePassword()
  }
  
  if(length< 8 || length> 128) {
    alert("Please select numbers between 8 - 128 ");
    return generatePassword()    
  }
 //added true var
  var hasUppercase = confirm("Does this password include uppercase letters?");
  var hasLowercase = confirm("Does this password include lowercase letters?");
  var hasNumbers = confirm("Does this password include numbers?");
  var hasSpecial = confirm("Does this password include special characters?");

  //added false var
 if(hasUppercase === null && hasLowercase === null && hasNumbers === null && hasSpecial === null){
   alert("You must select at least 1 character type.")
   return generatePassword()
 }
  if(hasUppercase){
    chosenCharacters += uppercase
  }
  if(hasLowercase){
    chosenCharacters += lowercase
  }  
  if(hasNumbers){
    chosenCharacters += numbers
  }
  if(hasSpecial){
    chosenCharacters += special
  }
  
  for (var i = 0; i < length; i++) {
  var index = (Math.floor(Math.random() * chosenCharacters.length));
  password = password + chosenCharacters [index]
  }
return result
}
// Add event listener to generate button
 