class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //binary solution
        //max value could be max value of piles
        let l = 0;
        //have to spread the values directly from array into max
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            let totalHours = 0;
            for (let p of piles) {
                //rounds up
                totalHours += Math.ceil(p / mid)
            }
            //if the mid point is <= h, move right pointer midpoint - 1
            if (totalHours <= h) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1
            }
        }
        return res
    }
}
//time is O(log(max(p) * p) space is O(1)
