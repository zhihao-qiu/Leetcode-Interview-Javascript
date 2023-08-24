/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || left == right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // start to find the node at left-1
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let reversed = current;

  for (let i = left; i <= right; i++) {
    const nextNode = current.next;
    current.next = reversed;
    reversed = current;
    current = nextNode;
  }

  prev.next.next = current;
  prev.next = reversed;

  return dummy.next;
};