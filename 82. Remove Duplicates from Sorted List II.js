/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;
  const dummy = new ListNode();
  dummy.next = head;
  let current = dummy;

  while (current.next && current.next.next) {

    if (current.next.val == current.next.next.val) {
      const duplicateValue = current.next.val;
      while (current.next && current.next.val == duplicateValue) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return dummy.next;

};