/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !k) return head;

  // find the length of ListNode
  let length = 1;
  let tail = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }

  k = k % length;

  if (!k) return head;

  let newTail = head;
  for (let i = 1; i < length - k; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;

  return newHead;
};
