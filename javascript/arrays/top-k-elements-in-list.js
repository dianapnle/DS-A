class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        //index is the frequency/count and the values is the list of values
        //console.log(Array.from([1, 2, 3], (x) => x + x));
        // Expected output: Array [2, 4, 6]
        // console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
        //create nums +1 arrays to account for the index 0
        let freq = Array.from({ length: nums.length + 1}, () => []);

        //[1,2,2,3,3,3]
        //count = {1: 1, 2:2, 3:3}
        //[1,  2,  3] c
        //[1] [2] [3] v / f[c]/f[i]
        //count how many times the num occurs and store in count object with index being the num and the value being # of occurences
        for (let n of nums) {
            //for count of this particular n value, add 1 or initialize it to 0 if it doesn't already exist
            count[n] = (count[n] || 0) + 1;
        }

        //now push the actual n value into the empty array(the value) of frequency where the index of frequency is the count
        for (let n in count) {
            //parseInt pases a string argument and returns the integer vers '123' -> 123
            freq[count[n]].push(parseInt(n))
        }

        const res = [];
        //now iterate backwards through the frequency array because the index would be the # frequenct/count and you want the top k values
        for (let i = freq.length - 1 ; i > 0 ; i-- ) {
            //iterate over the nums in the sub-arrays in the values to append to result until k is reached
            for (let n of freq[i]) {
                res.push(n)
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}

//time and space are O(n)
