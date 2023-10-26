// Assignment Code
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

//function to make password
function generatePassword() {
  //this segment prompts the user to input the length of the password and makes them try again if it is not between 8-128
  var length
  fetchLength()
  function fetchLength() {
    length = prompt("How long do you want your password to be? \nChoose between 8 and 128.");
    if(length >= 8 && length <= 128) {
      console.log(length);
    } else {
      fetchLength();
    }
  }
  // this segment prompts the user on character types and makes them try again of they dont choose any
  var lowercase
  var uppercase
  var numeric
  var special
  fetchCharacter()
  function fetchCharacter() {
    alert("Please choose at least one of the 4 following prompts.")
    lowercase = confirm("Would you like to include lowercase characters?")
    uppercase = confirm("Would you like to include uppercase characters?")
    numeric = confirm("Would you like to include numeric characters?")
    special = confirm("Would you like to include special characters?")
    var howMany = lowercase + uppercase + numeric + special

    if(howMany < 1) {
      fetchCharacter()
    } else {
      console.log(lowercase)
      console.log(uppercase)
      console.log(numeric)
      console.log(special)
    }
  }
  // this segment has all possible charachters
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numericList = ["0","1","2","3","4","5","6","7","8","9"]
  var specialList = ["!","#","$","%","&","*","?","@","~"]
  var allCharList = []
  var finishedPassword =""
  // this segment combines the previous lists if the user selected them
  passwordFactory()
  function passwordFactory() {
    if(lowercase === true) {
      allCharList = allCharList.concat(lowercaseList)
    }

    if(uppercase === true) {
      allCharList = allCharList.concat(uppercaseList)
    }

    if(numeric === true) {
      allCharList = allCharList.concat(numericList)
    }

    if(special === true) {
      allCharList = allCharList.concat(specialList)
    }

    console.log (allCharList)
    // this segment randomly selects a charachter from the user selected list and makes a password
    for (let i = 1; i <= length; i++) {
      finishedPassword = finishedPassword + allCharList[(Math.floor(Math.random() * allCharList.length))]
    }
  }
  return finishedPassword
}
