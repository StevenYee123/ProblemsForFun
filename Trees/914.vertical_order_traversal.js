const verticalTraversal = (root) => {
    const nodeInfos = [];
    
    //inOrder Traversal
    function getNodeInfos(node, x, y){
        if(node){
            getNodeInfos(node.left, x - 1, y - 1); //traverse left
            nodeInfos.push([x, y, node.val]);
            getNodeInfos(node.right, x + 1, y - 1); //traverse right
        }
    }
    
    getNodeInfos(root, 0, 0); //start off at the very beginning
    
    //Sort by following order of importance
    //  1. x - coordinate
	//  2. y - coordinate precedence given to higher value
	//  3. node val in ascending order
    nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
    
    const map = new Map();
    for(let [x, y, val] of nodeInfos){
        if(!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    
    return [...map.values()];
}