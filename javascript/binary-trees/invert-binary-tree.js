class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return null;

        //swap the children
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        this.invertTree(root.left);
        this.invertTree(root.right);
        return root;
    }
}
