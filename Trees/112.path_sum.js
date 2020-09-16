var hasPathSum = function(root, sum) {
    if(!root || sum < 0) return false;
    
    if(!root.left && !root.right && (sum - root.val) === 0) return true;
    
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};