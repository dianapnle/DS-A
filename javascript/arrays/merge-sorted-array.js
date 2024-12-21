
var merge = function(nums1, m, nums2, n) {
    //last pointer is to the place holders in nums 1 array at the end
    //iterate backwards through nums 1
    //if nums1[m] > nums2[n] -> replace nums[last] with greater value, move last pointer
    let last = nums1.length - 1;
    while (m > 0 &&  n > 0) {
        //[1,2,3,0,0,0] has to be - 1 cause m and n are length so - 1 for 0 index
        if (nums1[m - 1] > nums2[n - 1]) {
            //replace the nums1[last] pointer to the bigger value and move pointer
            nums1[last] = nums1[m - 1];
            m -= 1;
        } else {
            //if its equal or nums2[n] is bigger
            nums1[last] = nums2[n - 1]
            n -= 1;
        }
        //move last pointer
        last -= 1
    }
    //if there are leftover numbers, add the left over n numbers
    while (n  > 0) {
        nums1[last] = nums2[n - 1];
        n -= 1;
        last -= 1;
    };
    return nums1
};
//time = O(n), space is O(1)
