/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const newListNode = new ListNode(0);
  let current = newListNode;
  while (list1 || list2) {
    const val1 = list1 ? list1.val : 101;
    const val2 = list2 ? list2.val : 101;

    if (val1 <= val2) {
      current.next = new ListNode(val1);
      list1 = list1.next;
    } else {
      current.next = new ListNode(val2);
      list2 = list2.next;
    }
    current = current.next;
  }
  return newListNode.next;
};