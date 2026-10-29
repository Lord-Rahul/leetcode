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
var reverseKGroup = function (head, k) {
    if (head === null) return null;
    let left = head;
    let right;
    let res = null;
    let prevleft = null;

    while (true) {
        right = left;
        for (let i = 0; i < k - 1; i++) {
            if (right === null) break;
            right = right.next
        }
        if (right) {
            let nextleft = right.next;
            reverse(left, k)
            if (prevleft) {
                prevleft.next = right;
            }
            prevleft = left;
            if (res === null) res = right;
            left = nextleft
        }
        else {
            if (prevleft)
                prevleft.next = left;
            if (res === null)
                res = left;
            break;
        }

    }
    return res
}
const reverse = (ll, n) => {
    let curr = ll;
    let prev = null;
    while (n--) {
        let nex = curr.next;
        curr.next = prev
        prev = curr;
        curr = nex;
    }
}

