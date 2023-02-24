"use strict";

/** Takes an array of numbers and a target average
 * Returns true if the array of numbers contains a pair whose average is equal
 * to target average
 * Otherwise returns false
 * */

function averagePair(nums, targetAvg) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) return true;

    if (avg < targetAvg) {
      left++;
    } else if (avg > targetAvg) {
      right--;
    }
  }
  return false;
}

