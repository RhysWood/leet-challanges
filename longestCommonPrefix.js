/* Write a function to find the longest common prefix string amongst an array of strings. 
If there is no common prefix, return an empty string "". */


// Solution 1: Horizontal Scanning
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    return prefix;
};

// Solution 2: Vertical Scanning
const longestCommonPrefix2 = function(strs) {
    if (strs.length === 0) return "";
    for (let i = 0; i < strs[0].length; i++)
        for (let j = 0; j < strs.length; j++)
            if (strs[j][i] !== strs[0][i]) return strs[0].slice(0, i);
    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix2(["flower","flow","flight"]));
console.log(longestCommonPrefix2(["dog","racecar","car"]));

/* 
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

strs[i] consists of only lowercase English letters.
*/