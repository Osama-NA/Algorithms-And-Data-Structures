class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.tail = null;
        this.length = 0;
    }

    push(data){
        let newNode = new Node(data);

        if(!this.tail){
            this.tail = newNode
        }else{
            newNode.prev = this.tail 
            this.tail = newNode
        }

        this.length++
    }

    pop(){
        if(!this.tail){
            return
        }

        let removedNode = this.tail
        this.tail = this.tail.prev
        this.length--

        return removedNode.data
    }

    peek(){
        if(!this.tail){
            return
        }

        return this.tail.data
    }
}

module.exports = Stack;