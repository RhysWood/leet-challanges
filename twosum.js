/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

const twoSum = function(nums, target) {
    let solved = false;
    let solutionArr = [];
    let i = 0;

    while(i < nums.length && !solved){
        let j = i + 1;
        while(j < nums.length && !solved){
            if(nums[i] + nums[j] === target){
                let solved = true;
                solutionArr.push(i)
                solutionArr.push(j)
                return solutionArr;
            }
            j+=1 
        }
        i+=1
    }
};

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums, target));


/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
