/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const lessHead = new ListNode(0);
  const greaterHead = new ListNode(0);
  let lessCurrent = lessHead;
  let greaterCurrent = greaterHead;

  let current = head;

  while (current) {
    if (current.val < x) {
      lessCurrent.next = current;
      lessCurrent = lessCurrent.next;
    } else {
      greaterCurrent.next = current;
      greaterCurrent = greaterCurrent.next;
    }
    current = current.next;
  }

  lessCurrent.next = greaterHead.next;
  greaterCurrent.next = null;
  return lessHead.next;
};

