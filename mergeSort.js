//first attempt to split array
// function mergeSort(nums) {
//   if (nums.length < 2) {
//     return nums
//   }
//   let list1 = [];
//   let list2 = [];
//   for (var i = 0; i < nums.length; i+=2) {
//     if (nums[i] !== undefined) list1.push(nums[i]);
//     if (nums[i+1] !== undefined) list2.push(nums[i+1]);
//   }
//   console.log(list1);
//   console.log(list2);
// }
  
// mergeSort([10,5,3,8,2,6,4,7,9,1,7]);

//Brian Holt's solution
const mergeSort = (nums) => {
  if (nums.length < 2 ) {
    return nums;
  }
  
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const results = [];
  
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }
  return results;
}
