var middleNode = function (head) {
    let slowpointer = head;
    let fastpointer = head;

    while (fastpointer !== null && fastpointer.next !== null) {
        slowpointer = slowpointer.next;
        fastpointer = fastpointer.next.next;
    }
    return slowpointer
};