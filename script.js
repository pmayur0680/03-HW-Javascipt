// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword()
{
  // Criteria 1: length of at least 8 characters and no more than 128 characters
  var pwdlength = prompt("Choose a length of the password between 8 characters to 128 characters:")

  if(isNaN(pwdlength) || parseInt(pwdlength) < 8  || parseInt(pwdlength) > 128 )
  {
    alert("Invalid response!")
    generatePassword();
  }
  
  // Criteria 2: character types to include
  var pwdstring = "";
  
  var islowercase = confirm("Do you want to include lowercase in your password?");
  
  if(islowercase == true)
    pwdstring += "abcdefghijklmnopqrstuvwxyz";

  var isuppercase = confirm("Do you want to include uppercase in your password?");

  if(isuppercase == true)
    pwdstring += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  var isnumeric = confirm("Do you want to include number in your password?");

  if(isnumeric == true)
    pwdstring += "0123456789";

  var isspecialchar = confirm("Do you want to include special characters in your password?");

  if(isspecialchar == true)
    pwdstring += "@#$!%&?";

  // generate desired length of password
  var password = '';

  for(i=1; i<=pwdlength; i++)
  {    
    // using Math.random with length to generate random number from 0 to length
    // while chatAt method returns character at specfic index in string    
    password += pwdstring.charAt(Math.floor(Math.random() * pwdstring.length));    
  }  
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
