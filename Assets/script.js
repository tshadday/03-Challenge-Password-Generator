// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomLetter = "abcdefghijklmnopqrstuvwxyz"
var randomNumer = "0123456789"
var randomSpecial = "!@#$%^&*-_=+?/:;<,>."

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

  var lowerCase = prompt("Would you like lowercase letters? Yes or No?", "Yes");
  if (lowerCase === "Yes"){
    alert("thank you")
  }
  else if (lowerCase === "No"){
    alert("thank you")
  }
  else{
    alert("Please answer either Yes or No");
  }

  var upperCase = prompt("Would you like uppercase letters? Yes or No?", "Yes");
  if (upperCase === "Yes"){
    alert("thank you")
  }
  else if (upperCase === "No"){
    alert("thank you")
  }
  else{
    alert("Please answer either Yes or No");
  }

  var number = prompt("Would you like to include numbers? Yes or No?", "Yes");
  if (number === "Yes"){
    alert("thank you")
  }
  else if (number === "No"){
    alert("thank you")
  }
  else{
    alert("Please answer either Yes or No");
  }

  var specialChar = prompt("Would you like to include special characters? Yes or No?", "Yes");
  if (specialChar === "Yes"){
    alert("thank you")
  }
  else if (specialChar === "No"){
    alert("thank you")
  }
  else{
    alert("Please answer either Yes or No");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
