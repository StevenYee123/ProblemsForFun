// ############################################################################################################
// Check if a binary tree is balanced

var isBalanced = function(root) {
    //handle case when root itself is null
	if(root === null) return true;
	//turns to false if unbalanced tree encountered
    let flag = true;
	//recursive function - it recursively returns the height of the tree 
    function helper(root) {
	    //base case of recursion - tree with no nodes return height 0
        if(root.left === null && root.right === null) {
            return 0
        }
        let leftHeight = 0, rightHeight = 0;
        if(root.left !== null) {
		    //height of left subtree is one plus the height of child sub tree
            leftHeight = 1 + helper(root.left);
        }
        if(root.right !== null) {
		   //height of right subtree is one plus the height of child sub tree
            rightHeight = 1 + helper(root.right);   
        }
		//height of tree is max between height of left and right subtree
        let actualHeight = Math.max(leftHeight, rightHeight);
		//if abs diff between leftHt and right Ht greater than one; turn flag to false
        if(Math.abs(leftHeight-rightHeight) > 1) flag = false;
        return actualHeight;
    }
    helper(root);
    return flag
};