var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    
    //Here we start a fast pointer to index away from the end
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    //We reach the actual end of the list
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    //Delete a node by changing pointers around
    slow.next = slow.next.next;
    
    return dummy.next;
};