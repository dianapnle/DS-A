class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {    //create an array of pairs where each pair consister of the position and speed of each car
    //sort the array in descending order of positions to ensure the process that the cars on top of stack are furthest from the target
    //use stack to keep track of the times when each fleet arrives, if the current car cannot catch up to the fleet in front of it, it forms a new fleet
    //return the number of fleets, which correspod to the size of the stack
        let stack = [];
        //where p is the value in position, i is the index
        let pairs = position.map((p, i) => [p, speed[i]]);
        //sort the pairs in descending order
        pairs.sort((a, b) => b[0] - a[0]);

        for (let [pos, speed] of pairs) {
            //time reach destination, push each pair of time into stack
           stack.push((target - pos) / speed);
            //if statement and not while because just checking with the next one, not whole stack
            //if the further one reaches the one before it -> combine this to the one before it and pop out of stack
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length
    };

}

//O(n) time and O(n) constant space
