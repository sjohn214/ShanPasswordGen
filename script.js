// Assignment Code
var generateBtn = document.querySelector("#generate");
var startGen = document.getElementById("#generate");
let values = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0,!,@,#,$,%,^,&,*,(,),_,+,?,~"];

// Password generator variables available for selection:

// Special Characters:
var specialCharc = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

// Numeric Characters:
var numericCharc = ["0","1","2","3","4","5","6","7","8","9"];

// Upper Case Characters:
var uppercaseCharc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Lower Case Characters:
var lowercaseCharc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let password = [""];



    

// Write password to the #password input, create random selection variable and convert array to string
function generatePassword() {

length = parseInt(prompt("How  many characters would you like your password to contain? Must be between 8 and 128"));
if (!length) {
  alert("Please enter a value");
}

else if (length < 8 || length > 128) {
  alert("Password must be at least 8 characters long and no more than 128 characters long.");
  return
}

useNumericCharc = confirm("Do you want password to contain numeric values?");
useSpecialCharc = confirm("Do you want password to contain special characters values?");
useLowercaseCharc = confirm("Do you want password to contain values in lowercase?");
useUppercaseCharc = confirm("Do you want password to contain values in upper case?");

if (
  useNumericCharc === false &&
  useSpecialCharc === false &&
  useLowercaseCharc === false &&
  useUppercaseCharc === false
){
  alert('Please include minimum of one character type and one special character.');
  return;
}

  

function getPasswordOptions() {
  var passwordOptions = {
    length: length,
    numCharc: useNumericCharc,
    specChar: useSpecialCharc,
    lowCharc: useLowercaseCharc,
    upCharc: useUppercaseCharc,

  };
  return passwordOptions;
}


function getRandomPassword(options) {
let randomPassword = [];
let selectedPassword = [];


if (options.numCharc) {
  randomPassword = randomPassword.concat(numericCharc);
  // selectedPassword.push(getRandom(numericCharc));
}
if (options.specCharc) {
  randomPassword = randomPassword.concat(specialCharc);
  // selectedPassword.push(getRandom(specialCharc));
}
if (options.lowCharc) {
  randomPassword = randomPassword.concat(lowercaseCharc);
  // selectedPassword.push(getRandom(lowercaseCharc));
}
if (options.upCharc) {
  randomPassword = randomPassword.concat(uppercaseCharc);
  // selectedPassword.push(getRandom(uppercaseCharc));
}
  for (var i = 0; i < options.length; i++) 
  {
    let password = randomPassword[Math.floor(Math.random()* randomPassword.length)];
    selectedPassword.push(password);
    console.log(randomPassword);
    
    
  }
  return selectedPassword;
}
var options = getPasswordOptions();
var generatedPassword = getRandomPassword(options);

var passwordString = generatedPassword.join("");
console.log(passwordString);
  return passwordString;
  

}
 
function userText(passwordString){
  document.getElementById("password").textContent = passwordString;
}

// Develop folder
function writePassword(){
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    // Add password to textarea/copy generated passwords to list section
  // document.getElementById("#savedPasswords").value = password;


}
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);

