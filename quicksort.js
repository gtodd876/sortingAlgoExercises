//first 20 min attempt
const quickSort = (nums) => {
  if (nums.length < 2) return nums;
  let left = [];
  let right = [];
  const pivot = nums[nums.length - 1];
  for (let i = 0 ; i < nums.length - 1; i++) {
    if (nums[i] <= pivot) left.push(nums[i]);
    if (nums[i] > pivot) right.push(nums[i]);
  }
  return quickSort(left).concat(quickSort(right);
 
}

//Brian Holt's solution
const quickSort = (nums) => {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } 
    else {
      right.push(nums[i]);
    }
  }
  //return [...quickSort(left), pivot, ...quickSort(right)]
  return quickSort(left).concat(pivot, quickSort(right));
}
