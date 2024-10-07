class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        function backTrack(openN, closedN, current) {
            //Condition: If the number of open and close parentheses are equal and the total length of the string is 2 * n, it means we have a valid combination, so push the res with the combo

            if (openN === closedN && openN + closedN === n * 2) {
                res.push(current);
                return
            }
//Condition: If the number of open parentheses used (openP) is less than n, we can add another open parenthesis.
            if (openN < n) {
                backTrack(openN + 1, closedN, current + "(")
            }
//Condition: If the number of close parentheses used (closeP) is less than the number of open parentheses, we can add a close parenthesis to maintain balance.
            if (closedN < openN) {
                backTrack(openN, closedN + 1, current + ")")
            }
        }
    //initiate the call to the recursive with 0 open and 0 closed paranthesis and empty string
       backTrack(0, 0, "")
        return res;
    }
}
//time is O(n^&2) and O(n) memory
