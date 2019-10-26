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
