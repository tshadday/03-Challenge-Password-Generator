// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomLetterLower = "abcdefghijklmnopqrstuvwxyz";
var randomLetterUpper = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
var randomNumber = "0123456789";
var randomSpecial = "!@#$%^&*-_=+?/:;<,>.";
var characterSet = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passLength = prompt("Please choose password length from 8 to 128", "8");
  if (passLength > 8 && passLength < 128){
    alert("thank you");
  }
  else{
    alert("Please insert a number between 8 and 128");
  }

  var lowerCase = confirm("Would you like lowercase letters?");
  if (lowerCase === true){
    alert("thank you")
    var characterSet = randomLetterLower;
  }
  else if (lowerCase === false){
    alert("thank you")
  }

  var upperCase = confirm("Would you like uppercase letters?");
  if (upperCase === true){
    alert("thank you")
    var characterSet = characterSet + randomLetterUpper;
  }
  else if (upperCase === false){
    alert("thank you")
  }
 
  var number = confirm("Would you like to include numbers?");
  if (number === true){
    alert("thank you")
    var characterSet = characterSet + randomNumber;
  }
  else if (number === false){
    alert("thank you")
  }

  var specialChar = confirm("Would you like to include special characters?");
  if (specialChar === true){
    alert("thank you")
    var characterSet = characterSet + randomSpecial;
  }
  else if (specialChar === false){
    alert("thank you")
  }

  for (i = 0; i < passLength; i++ ) {
    var randomizer = Math.floor(Math.random() * characterSet.length);
    var randomPassword = characterSet.substring(randomizer, randomizer +1);
    console.log(randomPassword);
   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);