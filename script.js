// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var startGen = document.getElementById("#generate");
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+?~"
let password = "";

// Write password to the #password input, create random selection variable and convert array to string
function generatePassword() {
  startGen = parseInt(prompt("How  many characters would you like your password to contain? Must be between 8 and 128"));
if (!startGen) {
  alert("Please enter a value");
}

else if (startGen < 8 || startGen > 128) {
  alert("Password must be at least 8 characters long and no more than 128 characters long.");
  return
}
numberCharc = confirm("Do you want password to contain Numeric values?");
specialCharc = confirm("Do you want password to contain special characters values?");
lowercaseCharc = confirm("Do you want password tocontain values in lowercase?");
uppercaseCharc = confirm("Do you want password to contain values in upper case?");

let randomPassword = [];
  for (var i = 0; i <= startGen; i++) {
    let password = values.charAt[Math.floor(Math.random()* Math.floor(values.length -1))];
    randomPassword.push(password);
    console.log(password);
  }
  
  return randomPassword;
}
  // Add password to textarea/copy generated passwords to list section
  document.getElementById("password").value = password;
// document.getElementById("savedPasswords").innerHTML += password; + "<br />";

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// function copyPassword() {
//   var copy = copyPassword();
//   var passwordText = document.querySelector("#password");
//   // passwordText.value = copy.password;
// }


// Add event listener to generate button/ copy
generateBtn.addEventListener("click", writePassword);
// copyBtn.addEventListener("click", copyPassword);