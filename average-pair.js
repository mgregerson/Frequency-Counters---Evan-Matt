// add whatever parameters you deem necessary & write docstring
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

