var binaryTreePaths = function(root, path = "", result = []) {
    if(!root) return [];
    
    if(!root.left && !root.right){
        path += root.val;
        result.push(path);
    } else {
        path += root.val + "->";
    }
    
    binaryTreePaths(root.left, path, result);
    binaryTreePaths(root.right, path, result);
    return result;
};