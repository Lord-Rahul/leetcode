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
var rotateRight = function (head, k) {
    if (k === 0) return head
    if (head === null) return null
    let length = 1;
    let last = head;
    while (last.next !== null) {
        length++;
        last = last.next;
    }
    k = k % length
    if (k == 0) return head;

    let t = head;
    let count=1
    while (t !== null){
        if(count==(length-k)) break
        count++
        t=t.next
    }
    last.next=head;
    let result = t.next
    t.next=null;

    return result



    
    
};