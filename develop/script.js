// Assignment code here
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var numbers = ["0","1","2","3","4","5","6","7","8","9"]
    var special = ["!","@","#","$","%","^","&","*","-","_","=","+"]
    var chosenCharacters = "";




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
  
  if(length < 8 || length > 128) {
    window.alert("Please select numbers between 8 - 128 ");
    return generatePassword()    
  }
 //added true var
  var hasUppercase = confirm("Does this password include uppercase letters?");
  var hasLowercase = confirm("Does this password include lowercase letters?");
  var hasNumbers = confirm("Does this password include numbers?");
  var hasSpecial = confirm("Does this password include special characters?");

 {

  }
 
  
  
  
  
  
  for(var i = 0; i < available.length; i++) {
    var picker = Math.floor(Math.random()* available.length);
    arr.push(available.length[picker])
    
  }
  arr.length = 10
  console.log(arr.join(""))

console.log(generatePassword())
}
// Add event listener to generate button
 