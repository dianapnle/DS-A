var removeDuplicates = function(nums) {

    if (nums.length === 0) {
        return 0;
}

    let insertIndex = 1;
    let count = 1;


    for (let i = 1; i < nums.length; i++) {
        //if they are the same number, increment count
        if (nums[i] == nums[i - 1]) {
            count ++;
        } else {
            //else count is greater than 2
            count = 1;
            //reset the count for new element (count is greater than 2)
        }

        if (count <=2) {
            //update the array in place
            nums[insertIndex] = nums[i];
            insertIndex++;
        }

    }
    return insertIndex;
};
