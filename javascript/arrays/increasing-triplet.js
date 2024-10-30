var increasingTriplet = function(nums) {
    //a prev variable
    //a second prev variable
    let prev1 = Infinity;
    let prev2 = Infinity;
    let last = Infinity;

    //loop through the array of nums
    //if the current is less than prev variable, set it to prev, if its less than prev2 and last set it
    for (let i = 0; i < nums.length; i ++) {

        if (nums[i] <= prev1) {
           prev1 = nums[i]
        } else if (nums[i] <= prev2) {
            prev2 = nums[i]
        } else if (nums[i] <= last) {
            last =  nums[i]
        }
    }

    if (last < Infinity && last > prev2 && prev2 > prev1) {
        return true
    }

    return false;

};

//o(n) time and o(1) space
