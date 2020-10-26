var swapPairs = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp;
    
    while(current.next && current.next.next){
        // Establish the two base points
        let firstNode = current.next;
        let secondNode = current.next.next;
        //Set up our "next"
        firstNode.next = secondNode.next;

        //Appropriately assign the 2 next nodes
        current.next = secondNode;
        current.next.next = firstNode;

        //Make sure we traverse
        current = current.next.next;
    }
    
    return temp.next;
};