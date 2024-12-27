// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

const { reverse } = require("dns");

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = function (x) {
  var reverseNumber = 0;
  var copyOfX = x;

  while (copyOfX > 0) {
    const lastDigit = copyOfX % 10;
    console.log("last Digit: ", lastDigit);
    reverseNumber = reverseNumber * 10 + lastDigit;
    console.log("reverse Number: ", reverseNumber);
    copyOfX = Math.floor(copyOfX / 10);
    console.log("new X: ", copyOfX);
    console.log("-----------------------");
  }

  console.log("Reverse number is: ", reverseNumber);
  return reverseNumber == x;
};

console.log("Is Palindrome?: ", isPalindrome(81));
