var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function helperSum(root) {
    if (!root) return;

    if (root.left && !root.left.left && !root.left.right) sum += root.left.val;
    helperSum(root.left);
    helperSum(root.right);
  }

  helperSum(root);

  return sum;
};
