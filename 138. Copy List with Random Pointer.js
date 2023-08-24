/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  // Step 1: Create new nodes and place them after the original nodes
  let dummy = head;
  while (dummy) {
    const newNode = new Node(dummy.val);
    newNode.next = dummy.next;
    dummy.next = newNode;
    dummy = newNode.next;
  }

  // Step 2: Set random pointers of new nodes
  dummy = head;
  while (dummy) {
    if (dummy.random) {
      dummy.next.random = dummy.random.next;
    }
    dummy = dummy.next.next;
  }

  // Step 3: Separate the combined list into two lists
  const newHead = head.next;
  let original = head;
  let copied = newHead;

  while (original) {
    original.next = original.next.next;
    copied.next = copied.next ? copied.next.next : null;
    original = original.next;
    copied = copied.next;
  }

  return newHead;
};