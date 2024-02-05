class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = new Node(data)

    if (this.length === 0) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length++;
  }

  dequeue(){
    if(this.length === 0){
        return 
    }

    const removedNode = this.head
    this.head = this.head.next

    if (!this.head) {
        this.tail = null;
    }

    this.length--

    return removedNode.data
  }

  peek(){
    if(!this.head){
        return 
    }

    return this.head.data
  }
}

module.exports = Queue;