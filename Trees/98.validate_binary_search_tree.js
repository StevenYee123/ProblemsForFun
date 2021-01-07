var isValidBST = function(root) {
    let check = [];  
    
    function inOrderTraversal(root){
        if (!root) return;
        
        inOrderTraversal(root.left);
        check.push(root.val);
        inOrderTraversal(root.right);
    }
    
    inOrderTraversal(root);
    if (check.length <= 1) return true;
    
    for (let i = 0; i < check.length - 1; i++){
        if (check[i] >= check[i + 1]) return false;
    }
    
    return true;
};