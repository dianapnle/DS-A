/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //create a hashmap
    let counts = {};
    for  (let num of nums) {
        //if it does not exist, create and set to 1
        if( !counts[num]) {
            counts[num] = 1;
        } else {
            //else it exists
            counts[num] += 1;
        }
    }

    for (let num in counts) {
        if (counts[num] > nums.length / 2 ) {
            return Number(num);
        }
    }
    return 0;
};
