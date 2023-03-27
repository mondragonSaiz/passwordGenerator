// Assignment code here
function generatePassword() {
  // First we ask our user how many characters wil the password contain, we ask for it's length.
  var lengh_of_password = parseInt(
    prompt("Plase enter the length of you password. (8-128)")
  );

  //  We evaluate the user prompted value in order to be in the
  //  range of 1 and 128 characters.
  //  We also make sure that the user response is
  //  always a number, with the help of the function
  //  "IsNaN" (is not a number)
  // if it doesnt meet the range or the user enter a character
  // that isn't a number, our function "generatePasssword()" will
  // stop and return a specific message (rangeErrorMsg).
  var rangeErrorMsg =
    "Invalid input, please enter any number between 8 and 128";
  if (
    lengh_of_password < 8 ||
    lengh_of_password > 128 ||
    isNaN(lengh_of_password)
  ) {
    return rangeErrorMsg;
  }
  // We ask the especific charcateristics of the password
  // with the help of the confirm function, which returns
  // a boolean value, we'll add or not the different
  // charcateristics of our password
  var lowercase_charset = confirm(
    "Would you like to include lowercase characters ?"
  );
  console.log(lowercase_charset);
  //
  var uppercase_charset = confirm(
    "Would you like to include uppercase characters ?"
  );
  console.log(uppercase_charset);
  //
  var numeric_charset = confirm(
    "Would you like to include numeric characters ?"
  );
  console.log(numeric_charset);
  //
  var special_charset = confirm(
    "Would you like to include special characters ?"
  );
  console.log(special_charset);

  //we create our initial arrray, which will include
  // the different set of characters that the user will
  // confirm or not
  var user_charset = [];

  // if the users confirms any of the above characteristics
  // we'll add those characteristics to our initial array
  if (lowercase_charset) {
    user_charset += "abcdefghijklmnopqrstuvwxyz";
  }
  console.log("1 : " + user_charset);
  if (uppercase_charset) {
    user_charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  console.log("2 : " + user_charset);
  if (numeric_charset) {
    user_charset += "0123456789";
  }
  console.log("3 : " + user_charset);
  if (special_charset) {
    user_charset += "!@#$%^&*()_-+=";
  }
  console.log("4 : " + user_charset);

  // We create our initial array for the password to be generated,
  // this will contain our final result to display on screen.
  var password_result = "";

  // With the help of a for loop, which value  "i" starts in 0
  // and ends when the value "i" is equal to our length of our
  // password to generate, which makes sense cause we include the
  // value for i= 0", we then generate a random number for the index
  // of the character that is selected inside the "user_charset"
  // we then add that character with a random index to our password_result
  for (let i = 0; i < lengh_of_password; i++) {
    var index = Math.floor(Math.random() * user_charset.length);
    password_result += user_charset[index];
  }
  // we return our final result
  return password_result;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hola");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
