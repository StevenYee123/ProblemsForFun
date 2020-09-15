var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let diameter = 0;

  function getDepth(root) {
    if (!root) return 0;

    let left = getDepth(root.left);
    let right = getDepth(root.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }

  getDepth(root);

  return diameter;
};
