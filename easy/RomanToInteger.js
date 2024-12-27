function romanToInt(input) {
  let sumOfRoman = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < input.length - 1; i++) {
    if (roman[input[i]] < roman[input[i + 1]]) {
      sumOfRoman -= roman[input[i]];
      console.log("sumOfRoman minus: ", sumOfRoman);
    } else {
      sumOfRoman += roman[input[i]];
      console.log("sumOfRoman add: ", sumOfRoman);
    }
  }

  return sumOfRoman + roman[input[input.length - 1]];
}

console.log(romanToInt("MCM"));
