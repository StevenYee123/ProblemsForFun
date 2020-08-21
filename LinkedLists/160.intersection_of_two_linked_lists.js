var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null){
        return null;
    }
    
    let pointer1 = headA;
    let pointer2 = headB;
    
    while (pointer1 !== pointer2){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
        
        //This handles the case that there is no intersection i.e. both are null.
        if (pointer1 === pointer2){
            return pointer1;
        }
        
        if (pointer1 === null){
            pointer1 = headB;
        }
        
        if (pointer2 === null){
            pointer2 = headA;
        }
    }
    
    //Either pointer would work
    return pointer1;
};