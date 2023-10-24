/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // If either inorder or postorder is empty, return null.
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }

  // The last element of postorder is the root of the current subtree.
  const rootVal = postorder.pop();
  const root = new TreeNode(rootVal);

  // Find the index of the root value in inorder.
  const rootIndexInInorder = inorder.indexOf(rootVal);

  // Recursively build the right and left subtrees (order matters).
  // Use slice to separate the left and right portions of inorder and postorder.
  root.right = buildTree(inorder.slice(rootIndexInInorder + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndexInInorder), postorder);

  return root;
};
