function bubbleSort (nums) {
  var i = 0;
  while (nums[i] > nums[i +1]) {
    for (var k = 0; k < nums.length; k++) {
      if (nums[k] > nums[k+1]) {
        var temp = nums[k];
        nums[k] = nums[k+1];
        nums[k+1] = temp; 
        i = 0;
        k = 0;
      }
    }
  }
} 
