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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        //if the tree is empty, there is no subroot to compare to
        if (!root) return false;

        if (this.sameTree(root, subRoot)) return true

        //if not check if the subtree is a subtree of root.left and root.right
        if (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)) {
            return true
        } else {
            return false
        }
    }

    sameTree (root, subRoot) {
        if (!root && !subRoot) return true;

        if (root && subRoot && root.val === subRoot.val) {
           return(this.sameTree(root.left, subRoot.left) && this.sameTree(root.right, subRoot.right))
        }
        //if one of the tree is empty and the other is non empty
        return false
    }
}
