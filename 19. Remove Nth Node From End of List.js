/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let totalNum = 0;

  let current=head
  while (current) {
    totalNum++;
    current = current.next;
  }

  const indexNum = totalNum - n;

  if (!indexNum) return head.next

  current = dummy;
  for (let i = 0; i < indexNum; i++) {
    current = current.next;
  }

  current.next = current.next.next

  return dummy.next;
};