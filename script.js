var generateBtn = document.querySelector("#generate");
var characterLength = 8 - 128;
var choice = [];
var specialChar = "!@#$%^&*()";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword() {
  var correctpassword = prompt();
  var passwordText = document.querySelector("password");

  if (correctpassword) {
    var randompassword = generatePassword();
    passwordText = randompassword;
  } else {
    passwordText.value = "";
  }


}

function generatePassword() {
  var password = "";

  for (var i = 0; i > characterLength; i++) {
    var randomsymbol = math.floor(math.random() * choice.length);
    password = password + choice[randomsymbol];
  }
  return password;

}

function prompt() {
  choice = [];
  characterLength = parseInt(prompt("How many characters do you want in your password? (8 - 128 characters")); 


  if (characterLength > 8||characterLength < 128) {

  } else {
    alert("Incorrect character amount. Please try again.");
    
    return false;
  
}

  if (confirm("Would you like to use special characters?")) {
    choice = choice.concat(specialChar);
  }

  if (confirm("Would you like to use uppercase letters?")) {
    choice = choice.concat(UPPERCASE);
  }

  if (confirm("Would you like to use lowercase letters?")) {
    choice = choice.concat(lowercase);
  }

  if (confirm("Would you like to use numbers?")) {
    choice = choice.concat(number);
  }
  return true;
}

  // Add event listener to generate button

  generateBtn.addEventListener("click", writePassword);