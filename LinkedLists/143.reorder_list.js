var reorderList = function (head) {
  let stack = [], node = head
  if (!node) return

  //Populate the stack
  while (node) {
    stack.push(node)
    node = node.next
  }

  //Keep track of original stack length  
  let len = stack.length

  //Reset head position
  node = head
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0){
      node.next = stack.shift()
    } else {
      node.next = stack.pop()
    }
    node = node.next
  }
  node.next = null
};