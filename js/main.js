// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Gnerate event listen on click
generateEl.addEventListener('click', () => {
  // String to number with + prefix
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length,
  );
});

// Generate password function
function generatePassword(upper, lower, number, symbol) {
  // Initialize password variable
  // Filter out unchecked types
  // Loop over the length
  // Add final pw to the pw and return it

  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    element => Object.values(element)[0],
  );

  console.log('typesArray', typesArr);
}

// Generator functions
// See chars at http://net-comber.com/charset.html String.fromCharCode(97)

function getRandomLower() {
  // Chars needs to be within 97-122 (a-z)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // Chars needs to be within 65-90 (A-Z)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // Chars needs to be within 48-57 (0-10)
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
