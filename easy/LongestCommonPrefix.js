// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight", "flights"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
  if (strs.length <= 1) {
    return strs[0] || "";
  }

  let prefix = "";

  for (let i = 0; i < strs.length; i++) {
    let currentPrefix = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (i === 0 || strs[i][j] === prefix[j]) {
        // Compare with prefix or set prefix on first iteration
        currentPrefix += strs[i][j];
      } else {
        break;
      }
    }

    if (!prefix) {
      prefix = currentPrefix;
    }
    if (currentPrefix == prefix.substring(0, currentPrefix.length)) {
      prefix = prefix.substring(0, currentPrefix.length);
    }
  }

  return prefix;
}

console.log("LCP: ", longestCommonPrefix(["reflower", "flow", "flight"]));
