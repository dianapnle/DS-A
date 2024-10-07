class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //iterate through the temperatures list
        //stack with [temp, index]
        //place holder 0's that will get replaced later
        let res = new Array(temperatures.length).fill(0)
        let stack = [];
        for (let i = 0; i < temperatures.length; i ++) {
            let current = temperatures[i]
            while (stack.length !== 0 && current > stack[stack.length - 1][0] ) {
                //if the current temp is bigger than the latest item on stack, push diff into res
                //pop the last item on stack and take the diff in index
                const [stackTemp, prevStackIndex] = stack.pop();
                console.log(current, prevStackIndex)
                res[prevStackIndex] = i - prevStackIndex
            }
            //else it is not bigger so simply push the index into stack
            stack.push([current, i])
        }
        return res
    }
}
//time and space is O(n)
