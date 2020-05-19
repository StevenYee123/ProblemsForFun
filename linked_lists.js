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
};

// var reverseList = function(head) {
//     let prev = null;
    
//     while (head) {
//         let next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
    
//     return prev;
// };

// Recursive

var reverseList = function(head, prev = null) {
    if (head === null) {
        return null;
    }
    const next = reverseList(head.next, head);
    head.next = prev;
    return next || head;
    
};