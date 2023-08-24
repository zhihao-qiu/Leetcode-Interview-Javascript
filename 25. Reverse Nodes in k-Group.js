/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const getLength = (node) => {
    let length = 0;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  };

  const reverseSublist = (head, k) => {
    let prev = null;
    let current = head;
    let count = 0;

    while (current && count < k) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
      count++;
    }

    return [prev, current]; // Return both the new head and the next node
  };

  const length = getLength(head);
  if (length < k) {
    return head;  // No need to reverse if there are fewer nodes than k
  }

  const [groupEnd, nextGroupHead] = reverseSublist(head, k);
  head.next = reverseKGroup(nextGroupHead, k); // Recursive call with nextGroupHead

  return groupEnd;
};