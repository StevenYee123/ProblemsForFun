const flatten = (root) => {
    const list = [];
    helper(root, list);
    
    if(list.length === 0 ) return;
    
    for(let i = 0; i < list.length - 1; i++) {
        const node = list[i];
        node.left = null;
        node.right = list[i + 1];
    }
    
    const lastNode = list[list.length -1];
    lastNode.left = null;
    lastNode.right = null;
};

//We need the helper to populate the list using pre-order traversal
const helper = (node, list) => {
    if(!node) return;
    
    list.push(node);
    helper(node.left, list);
    helper(node.right, list);
}