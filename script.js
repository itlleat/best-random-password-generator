// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// const keys = {
//   lowerCase: [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ],
//   nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   upperCase: [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ],
//   special: ["!", "@", "#", "$", "%", "^", "&", "*", "/", "_", "-",]
// };

// function generatePassword() {
//   let userCriteria = [];
//   // User Input
//   // How many characters would you like your password to contain?
//   var passwordLength = 0;
//   function askPassword() {
//     var answer = prompt("How many characters would you like in your password?");
//     if (
//       answer.trim() !== "" &&
//       !isNaN(answer) &&
//       parseInt(answer) > 8 &&
//       parseInt(answer) < 128
//     ) {
//       passwordLength = parseInt(answer);
//     } else {
//       askPassword();
//     }
//   }
//   askPassword();
//   // Lower confirm
//   let lowercase;
//   if (confirm("Do you want lowercase letters in your password?") == true) {
//     userCriteria.push(...keys.lowerCase);
//   }
//   // nums confirm
//   let nums;
//   if (
//     confirm("Do you want numbers in your password, or are you a big baby?") ==
//     true
//   ) {
//     userCriteria.push(...keys.nums);
//   }
//   // Uppercase confirm
//   let upperCase;
//   if (confirm("Do you want Uppercase letters in your password?") == true) {
//     userCriteria.push(...keys.upperCase);
//   }
//   // special character confirm
//   let special;
//   if (confirm("Do you want special characters in your password?") == true) {
//     userCriteria.push(...keys.special);
//   }

//   console.log(passwordLength);
//   console.log(userCriteria);

//   for (let i = 0; i < passwordLength; i++) {
//     console.log(userCriteria[Math.floor(Math.random() * userCriteria.length)]);

//     // Array for each one
//     const getKey = [
//       function lowerCase() {
//         return keys.lowerCase[
//           Math.floor(math.random() * keys.lowerCase.length)
//         ];
//       },
//       function nums() {
//         return keys.nums[Math.floor(math.random() * keys.nums.length)];
//       },
//       function upperCase() {
//         return keys.upperCase[
//           Math.floor(math.random() * keys.upperCase.length)
//         ];
//       },
//       function special() {
//         return keys.special[Math.floor(math.random() * keys.special.length)];
//       },
//     ];
//   }
// }

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// generateBtn.addEventListener("click", writePassword);

// Assignment Code
let generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Arrays where the password information to be returned are stored
const lowerCase = ["abcdefghijklmnopqrstuvwxyz"];

const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const nums = ["0123456789"];

const special = ["!@#$%^&*()_-/.;><?"];
// UserSelect will be the user input
let userSelect = [""];

// Creating a function for a series of prompts for the users password
function generatePassword() {
  console.log("btn was clicked");
  let pwdLength = prompt(
    "how long would you like your password to be? Between 8 and 128 characters please."
  );
  // If the user inputs a password length that is less than 8 characters and more than 128 OR is not a number at all, alert them of their error
  // *Please note you can not type in a number as text, such as "twenty"
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowercase characters?");
    if (lowerCase) {
      // If the user confirms a character type it is added to allChar
      userSelect += lowerCase;
    }
    let upperCase = confirm("Would you like to use uppercase characters?");
    if (upperCase) {
      userSelect += upperCase;
    }
    let numbers = confirm("Would you like to use numbers?");
    if (nums) {
      userSelect += nums;
    }
    let specialCharacters = confirm(
      "Would you like to use special characters?"
    );
    if (special) {
      userSelect += special;
    }
    // If the user does not select any character type they will be prompted to select at least one
    if (
      lowerCase === false &&
      upperCase === false &&
      numbers === false &&
      specialCharacters === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  // Here is a loop the script is running that returns the users password based on their desired length
  let pwd = "";
  for (let i = 0; i < pwdLength; i++) {
    // Lets randomize the characters in userSelect and multiply into the desired length
    pwd += userSelect.charAt(Math.random() * userSelect.length);
  }
  return pwd;
}

function writePassword() {
  // This function calls on our generatePassword function seen on line 160
  let password = generatePassword();
  // We use the method querySelector to access our html id "#password" in the DOM
  let passwordText = document.querySelector("#password");
  // Our passwordText value is the result of our generatePassword function and the value of passwordText will be displayed in the appropriate section of our html
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
