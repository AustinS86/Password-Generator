var passwordLength = 8 - 128;
var pWord=[];
var specialChar = "!@#$%^&*()";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generateBtn = document.querySelector("#generate");

function writePassword(){
    var correctPW= getPW();
    var passwordText = document.querySelector("#password");

    if (correctPW){
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    }else{
        passwordText.value = "";
    }
    
}


function generatePassword() {
    var password= "";
    for (var i = 0; i < passwordLength; i++) {
         var randomWord = Math.floor(Math.random() * password.length);
            password = password + pWord[randomWord];
    }
    return password;
}


function getPW() {
     pWord="";
     
     passwordLength = parseInt(prompt("How many characters do you want your password to include? 8 - 128 characters"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert("Password length must be a at least 8 - 128 characters") ;
        return false;
    }

    if (confirm("Would you like to use special characters?")){
        pWord = pWord.concat(specialChar);
       
    }

    if (confirm("Would you like to use numbers?")) {
        pWord = pWord.concat(number);
       

    }

    if (confirm("Would you like to use lowercase letters?")) {
        pWord = pWord.concat(lowercase);
       

    }

    if (confirm("Would you like to use UPPERCASE letters?")) {
        pWord = pWord.concat(UPPERCASE);
       

    }

    return password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);