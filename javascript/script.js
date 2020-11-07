var enterEl;
var confirmspecialCharc;
var confirmnumericCharc;
var confirmupperCaseCharc;
var confirmlowerCaseCharc;

// Password generator variables available for selection:

// Special Characters:
var specialCharc = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

// Numeric Characters:
var numericCharc = ["0","1","2","3","4","5","6","7","8","9"];

// Upper Case Characters:
var upperCaseCharc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Lower Case Characters:
var lowerCaseCharc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Get code generation:
var getEl = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
}

// Start generating password options:
function getpasswordOptions(){
  // Ask user for input:
  enterEl =parseInt(prompt("How  many characters would you like your password to contain? Must be between 8 and 128"));
if (!enterEl) {
  alert("Please type a value");
}
else if (enterEl < 8 || enterEl > 128 ) {
  alert("Password must be at least 8 characters long and no more than 128 characters long.");
return
}
// The actions in lines 33 through 38 ensures valid user responses and prompts inputs if necessary
enterEl = parseInt(prompt("Please choose between 8 and 128"));

// Runs when user's input is validated:
if (confirmlowerCaseCharc && confirmupperCaseCharc && confirmspecialCharc && confirmspecialCharc) {
    confirmnumericCharc = confirm("Does this contain Numeric values?");
    confirmspecialCharc = confirm("Does this contaiin Special Character values?");
    confirmupperCaseCharc = confirm("Does this contain Upper Case Character values?");
    confirmlowerCaseCharc = confirm("Does this contain Lower Case Character values?");
  }

if(!confirmlowerCaseCharc && !confirmupperCaseCharc && !confirmspecialCharc && !confirmspecialCharc) {
  options = alert("Must select criteria!");
}
else if (confirmlowerCaseCharc && confirmupperCaseCharc && confirmspecialCharc && confirmspecialCharc) {
  options = confirmspecialCharc.concat(numericCharc,lowerCaseCharc,upperCaseCharc);
}

else if(confirmspecialCharc && confirmupperCaseCharc && confirmnumericCharc){
  options = confirmspecialCharc.concat(confirmupperCaseCharc, confirmnumericCharc);
}
else if(confirmspecialCharc && confirmlowerCaseCharc && confirmnumericCharc) {
  options = confirmspecialCharc.concat(confirmlowerCaseCharc, confirmnumericCharc);
}
else if(confirmnumericCharc && confirmlowerCaseCharc && confirmupperCaseCharc){
  options = confirmnumericCharc.concat(confirmlowerCaseCharc, confirmupperCaseCharc);
}
else if(confirmspecialCharc && confirmnumericCharc) {
  options = confirmspecialCharc.concat(confirmnumericCharc);
}
else if(confirmspecialCharc && confirmupperCaseCharc){
  options = confirmspecialCharc.concat(confirmupperCaseCharc);
}
else if(confirmspecialCharc && confirmlowerCaseCharc){
  options = confirmspecialCharc.concat(confirmlowerCaseCharc);
}
else if(confirmlowerCaseCharc && confirmnumericCharc){
  options = lowerCaseCharc.concat(confirmnumericCharc);
}
else if(confirmlowerCaseCharc && confirmupperCaseCharc){
  options = confirmlowerCaseCharc.concat(confirmupperCaseCharc);
}
else if(confirmnumericCharc && confirmupperCaseCharc){
  options = confirmnumericCharc.concat(confirmupperCaseCharc);
}
else if(confirmspecialCharc){
  options = confirmspecialCharc;
}
else if(confirmnumericCharc){
  options = confirmnumericCharc;
}
else if(confirmupperCaseCharc){
  options = confirmupperCaseCharc;
}
else if(confirmlowerCaseCharc){
  options = confirmlowerCaseCharc;
}
// Uppercase variable for conversion:
else if(confirmupperCaseCharc){
  options = space.concat(confirmupperCaseCharc);
}

// Write password as array placeholder for length generation:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Random selection variables:
  for (var i = 0; i < enterEl; i++); 
  {
    var pickOptions = options[Math.floor(Math.random()* options.length)
       (password.push(pickOptions))];
  }

// Join password array and convert to string
var ps = password.join("");{
UserInput(ps);
return ps;
}

// Add value to textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Add copy password element
var copy = document.querySelector("#copy");
copy.addEventListener("click",function(){
  copyPassword();
})

function copyPassword() {}
  document.getElementById("password").querySelector();
  document.execCommand("Copy");
  alert("Password copiedd to clipboard!");
}