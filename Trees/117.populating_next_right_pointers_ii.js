var connect = (root) => {
    let startOfNextLevel = root;
    let current = null;
    let lastVisited;
    
    while(startOfNextLevel){
        //Move to next level
        current = startOfNextLevel;
        startOfNextLevel = null;
        lastVisited = null;
        
        //Traverse tree level exactly like a linked list
        while(current){
            for(let child of [current.left, current.right]){
                if(child) {
                    //If we already have a last visited set its next pointer to the child
                    if(lastVisited) {
                        lastVisited.next = child;
                    } else {
                         startOfNextLevel = child;    
                    }
                    
                    lastVisited = child;
                }
            }
            
            current = current.next;
        }
    }
    
    return root;
};