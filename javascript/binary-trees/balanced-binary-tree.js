class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[0] === 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    dfs(root) {
        if (!root) {
            //the 1 also means true
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        //checks balance of left and right sub trees
        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        //recursive
        //if tree is empty, it is balanced
        if (root === null) return true;
        if (this.dfs(root) === -1) return false;
        return true;
    }

    dfs(root) {
        //base casse
        if (root === null) return 0;
        //height of the left and right subtree
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);

        //check if left subtree or right subtree is unbalanced
        if (left === -1 || right == -1) return - 1
        //find difference in heights
        if (Math.abs(left - right) > 1) return -1;

        //otherwise return the height of the subtree as max
        return Math.max(left, right) + 1
    }
}
