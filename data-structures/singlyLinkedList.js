class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  remove(data) {
    if (this.length === 0) {
      console.log("List is already empty.");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return data;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next && current.next.data === data) {
      current.next = current.next.next;
      this.length--;
      return data;
    } else {
      console.log("Data not found in the list.");
      return;
    }
  }

  removeAt(index) {
    if (this.length === 0) {
      console.log("List is already empty.");
      return;
    }

    let deletedData = undefined;

    if (index === 0) {
      deletedData = this.head.data;
      this.head = this.head.next;
    } else {
      if (index > 0 && index < this.length) {
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }

        deletedData = current.next.data;
        current.next = current.next.next;
      } else {
        console.log(
          "Invalid index. Index must be from 0 to " + this.length - 1
        );
        return deletedData;
      }
    }

    this.length--;
    return deletedData;
  }

  insertAt(data, index) {
    if (this.length === 0 && index !== 0) {
      console.log("Cannot insert into an empty list at an index other than 0.");
      return;
    }

    if (index === 0) {
      this.prepend(data);
    } else {
      if (index > 0 && index <= this.length) {
        let newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
      } else {
        console.log("Invalid index. Index must be from 0 to " + this.length);
        return;
      }
    }

    this.length++;
  }

  get(index) {
    if (this.length === 0) {
      console.log("List is empty");
      return undefined;
    }

    if (index < 0 || index >= this.length) {
      console.log("Invalid index. Index should be from 0 to ", this.length - 1);
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }

  display() {
    if (this.length === 0) {
      console.log("Empty list.");
      return;
    }

    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = SinglyLinkedList