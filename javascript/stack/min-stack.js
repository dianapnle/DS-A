class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        //push min value
        if (this.minStack.length !== 0) {
            this.minStack.push((Math.min(val, this.minStack[this.minStack.length - 1])))
        } else {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.stack.length - 1]
    }
}

//time and space is O(n)
