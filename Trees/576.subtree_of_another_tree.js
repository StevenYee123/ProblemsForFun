var isSubtree = function (s, t) {
  if (!s) return !t;

  return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const isSameTree = (tree1, tree2) => {
  if (!tree1 && !tree2) {
    return true;
  } else if (!tree1 || !tree2) {
    return false;
  } else if (tree1.val !== tree2.val) {
    return false;
  } else {
    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    );
  }
};
