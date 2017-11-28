// 1st attempt fail
// function insertionSort (nums) {
//   for (var i = 0; i < nums.length; i++) {
//     var insertElement = i + 1;
//     var k = i;
//     while (nums[insert] < nums[k]) {
//       if (k === 0) nums.splice(k, 0, nums[insert]);
//       k--;
//     }
//     nums.splice(k, 0, nums[insert]);
//   }
// }

// insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])

// Brain Holt's Solution
const insertionSort = (nums) => {
  for (let i= 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
}
