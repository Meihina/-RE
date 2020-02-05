// 104. 二叉树的最大深度  难度简单

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 把最小深度解法的 depth < res 改为 depth > res
var maxDepth = function(root) {
    if(!root){
        return 0
    }else if(!root.left && !root.right){
        return 1
    }
    let res = null
    function Depth(root , depth){
        if(root.left != null){
            depth = Depth(root.left , depth + 1)
        }
        if(root.right != null){
            depth = Depth(root.right , depth + 1)
        }
        if(root.left == null && root.right == null){
            if(res){
                if(depth > res){
                    res = depth
                }
            }else{
                res = depth
            }
        }
        return depth - 1
    }
    Depth(root , 1)
    return res
};