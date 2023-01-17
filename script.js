// Assignment Code
var generateBtn = document.querySelector("#generate");

const keys = {
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "/", "_", "-",]
};

function generatePassword() {
  let userCriteria = [];
  // User Input
  // How many characters would you like your password to contain?
  var passwordLength = 0;
  function askPassword() {
    var answer = prompt("How many characters would you like in your password?");
    if (
      answer.trim() !== "" &&
      !isNaN(answer) &&
      parseInt(answer) > 8 &&
      parseInt(answer) < 128
    ) {
      passwordLength = parseInt(answer);
    } else {
      askPassword();
    }
  }
  askPassword();
  // Lower confirm
  let lowercase;
  if (confirm("Do you want lowercase letters in your password?") == true) {
    userCriteria.push(...keys.lowerCase);
  }
  // nums confirm
  let nums;
  if (
    confirm("Do you want numbers in your password, or are you a big baby?") ==
    true
  ) {
    userCriteria.push(...keys.nums);
  }
  // Uppercase confirm
  let upperCase;
  if (confirm("Do you want Uppercase letters in your password?") == true) {
    userCriteria.push(...keys.upperCase);
  }
  // special character confirm
  let special;
  if (confirm("Do you want special characters in your password?") == true) {
    userCriteria.push(...keys.special);
  }

  console.log(passwordLength);
  console.log(userCriteria);

  for (let i = 0; i < passwordLength; i++) {
    console.log(userCriteria[Math.floor(Math.random() * userCriteria.length)]);

    // Array for each one
    const getKey = [
      function lowerCase() {
        return keys.lowerCase[
          Math.floor(math.random() * keys.lowerCase.length)
        ];
      },
      function nums() {
        return keys.nums[Math.floor(math.random() * keys.nums.length)];
      },
      function upperCase() {
        return keys.upperCase[
          Math.floor(math.random() * keys.upperCase.length)
        ];
      },
      function special() {
        return keys.special[Math.floor(math.random() * keys.special.length)];
      },
    ];
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
