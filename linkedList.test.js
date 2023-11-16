const LinkedList = require("./linkedList");

test("that linked-linst is empty", () => {
    let list = new LinkedList();
    let isTrue = list.isEmpty();
    expect(isTrue).toBe(true);
})

test("that elements can be inserted at the head", () => {
    let list = new LinkedList();
    list.insertAtHead(5);
    let headValue = list.head.value;
    expect(headValue).toBe(5);
})

test("that element can be inserted at end", () => {
    let list = new LinkedList();
    list.insertAtHead(5``);
    list.insertAtHead(2);
    list.insertAtHead(3);

    let headValue = list.getHead()
    expect(last)
})

test("that element's size can be determined", () => {
    let list = new LinkedList();
    list.add(30);
    list.add(40);
    list.add(90);
    list.add(10);
    list.add(12);

    let headValue = list.returnLength()
    expect(5)
})
