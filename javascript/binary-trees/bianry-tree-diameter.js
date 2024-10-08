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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
    // Initialize a list to hold the maximum diameter encountered
        let res = [0];
    // Call the diameter function starting from the root
        this.dfs(root, res);
    //return the maximum diameter encountered
        return res[0]
    }

    //returns height
    dfs(root, res) {
        if (root === null) return 0;
    // Recursively calculate the diameter of left and right subtrees
        let left = this.dfs(root.left, res);
        let right = this.dfs(root.right, res);
    //update the maximum diameter encountered so far
        res[0] = Math.max(res[0], left + right);
    //return the height of the current node
        return 1 + Math.max(left, right)
    }
}

//time and space is O(n)
