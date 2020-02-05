// leetcode 102. 二叉树的层次遍历  难度中等

// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }

    let result = []
    function level(node , lv){
        if(lv == result.length){
            result.push([])
        }
        result[lv].push(node.val)
        if(node.left){
            level(node.left , lv + 1)
        }
        if(node.right){
            level(node.right , lv + 1)
        }
    }
    level(root , 0)
    return result
};