var swapPairs = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp;
    
    while(current.next && current.next.next){
        let firstNode = current.next;
        let secondNode = current.next.next;
        firstNode.next = secondNode.next;
        current.next = secondNode;
        current.next.next = firstNode;
        current = current.next.next;
    }
    
    return temp.next;
};s