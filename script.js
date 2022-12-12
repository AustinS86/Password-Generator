// My list of various arrays I use throughout the JS.
var generateBtn = document.querySelector("#generate");
var passwordLength = 8 - 128;
var pWord = "";
var specialChar = "!@#$%^&*()";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// This function calls onto the getPW below that runs the questions needed to crate a password. If true than "if" will generate a password.
function writePassword() {
    var correctPW = getPW();
    var passwordText = document.querySelector("#password");

    if (correctPW) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }

}
//This function will run a series of questions that will determine what the pasword will be. I decided to use the "confirm" prompt so you wouldnt have to type in the box everytime. 
function getPW() {
    pWord = "";

    passwordLength = prompt("How many characters do you want your password to include? 8 - 128 characters");

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a at least 8 - 128 characters");
        return false;
    }
    if (confirm("Would you like to use special characters? Ok = Yes/Cancel = No")) {
        pWord = pWord.concat(specialChar);
    }
    if (confirm("Would you like to use numbers? Ok = Yes/Cancel = No ")) {
        pWord = pWord.concat(number);
    }
    if (confirm("Would you like to use lowercase characters? Ok = Yes/Cancel = No")) {
        pWord = pWord.concat(lowercase);
    }
    if (confirm("Would you like to use UPPERCASE characters? Ok = Yes/Cancel = No")) {
        pWord = pWord.concat(UPPERCASE);
    }
    return password;
}
// This function generates a password by using a for loop to determine the length of the password.
function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * pWord.length);
        password = password + pWord[random];
    }
    return password;
}

// This will generate the password that we requested
generateBtn.addEventListener("click", writePassword);