/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let nums_dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let matchNumber = target - current;
    if (matchNumber in nums_dictionary) {
      return [nums_dictionary[matchNumber], i];
    } else {
      nums_dictionary[current] = i;
    }
  }
};
