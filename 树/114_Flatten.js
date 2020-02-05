// leetcode 114. 二叉树展开为链表  难度中等

// 给定一个二叉树，原地将它展开为链表。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    while(root){
        if(!root.left){
            root = root.right
        }else{
            let pre = root.left
            while(pre.right){
                pre = pre.right
            }
            pre.right = root.right // 将整个链，插入到右子树
            root.right = root.left
            root.left = null
            root = root.right
        }
    }
    return root
};