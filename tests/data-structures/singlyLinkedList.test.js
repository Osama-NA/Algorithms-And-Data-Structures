const listTest = require('./listTest')
const SinglyLinkedList = require('../../data-structures/singlyLinkedList')

test("Singly linked list:", function () {
    const linkedList = new SinglyLinkedList();
    listTest(linkedList);
});
