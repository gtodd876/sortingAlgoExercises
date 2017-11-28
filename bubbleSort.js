// my first try
// function bubbleSort (nums) {
//   var i = 0;
//   while (nums[i] > nums[i +1]) {
//     for (var k = 0; k < nums.length; k++) {
//       if (nums[k] > nums[k+1]) {
//         var temp = nums[k];
//         nums[k] = nums[k+1];
//         nums[k+1] = temp; 
//         i = 0;
//         k = 0;
//       }
//     }
//   }
// } 

// Brian Holt's Solution
var bubbleSort = nums => {
  do {
    var swapped = false;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped); 
};

