const Stack = require('../../data-structures/stack')

test("Stack:", function () {
    const list = new Stack();

    list.push(5);
    list.push(7);
    list.push(9);

    expect(list.pop()).toEqual(9);
    expect(list.length).toEqual(2);

    list.push(11);
    expect(list.pop()).toEqual(11);
    expect(list.pop()).toEqual(7);
    expect(list.peek()).toEqual(5);
    expect(list.pop()).toEqual(5);
    expect(list.pop()).toEqual(undefined);

    list.push(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});