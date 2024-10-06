class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeHash = {'}':'{', ']' : '[', ')': '('};

        for (let char of s) {
            //if not a closing bracket and is an opening one, push char onto stack
            if (!(char in closeHash)) {
                stack.push(char);
                continue
            }
            //if it is a closing bracket then check if the last item in stack is a corresponding open bracket
            if (stack[stack.length - 1] === closeHash[char]) {
                stack.pop();
                continue
            } else {
                return false
            }
        }
        return stack.length === 0
    }
}

////second solution
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                //if a opening paranthesis, simply push to stack
                stack.push(char)
            } else {
                //its a closing paranthesis so have to check if its last one is a matching open
                //if stack length is empty or
                if (stack.length === 0 ||
                    (char === ")" && stack[stack.length - 1] !== "(") ||
                    (char === "]" && stack[stack.length - 1] !== "[") ||
                    (char === "}" && stack[stack.length - 1] !== "{")) {
                        return false
                    }
                    //else if it does match, pop
                    stack.pop();
            }
        }
        // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
        // so the string is valid, otherwise, there are unmatched opening brackets, so return false
        return stack.length === 0
    }
}
//time and space is O(n)
//The space complexity of the solution is O(n), where n is the length of the input string. This is because the worst-case scenario is when all opening brackets are present in the string and the stack will have to store them all.
