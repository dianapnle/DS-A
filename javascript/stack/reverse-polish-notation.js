class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (const char of tokens) {
            if (char === "+") {
                //pop the prev two values in the stack
                stack.push(stack.pop() + stack.pop())
            } else if (char === "-") {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b - a)
            } else if (char === "*") {
                stack.push(stack.pop() * stack.pop())
            } else if (char === "/") {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b / a))
            } else {
                //where its something else which is a number so just push number but convert to a number first
                stack.push(parseInt(char))
            }
        }
        return stack.pop();
    }
}
