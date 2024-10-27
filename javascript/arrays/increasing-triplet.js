var increasingTriplet = function(nums) {
    //loop through loop at index i check the next two indicies
    let prev1 = -Infinity;
    let prev2 = -Infinity;
    let increasingTriplet = false;

    for(let i = 0; i < nums.length; i ++) {
        if (nums[i] > prev2 && prev2 > prev1) {
            increasingTriplet = true;
            break;
        }
        //if current nums[i] is > prev1, replace prev2
        if (nums[i] > prev1) {
            prev2 = nums[i]
        } else {
            //else its smaller than prev 1 so replace prev1
            prev = nums[i]
        }
    }
        return increasingTriplet;

};

//o(n) time and o(1) space
