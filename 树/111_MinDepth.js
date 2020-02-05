// leetcode 111. 二叉树的最小深度  难度简单

// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明: 叶子节点是指没有子节点的节点。给定一个二叉树，找出其最小深度。

var minDepth = function(root) {
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
                if(depth < res){
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

