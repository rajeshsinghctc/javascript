class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

LinkedList.prototype.insertAtBeginning = function (data) {
    let node = new Node(data);
    if(this.head == null){
        this.head = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.size++;
    return this.head;
}

LinkedList.prototype.deleteAtIndex = function (index) {
    // console.log(node);

    let current = this.head;
    let previous;
    let count =0;
    if(this.head == null){
        //if no element present in list
        return;
    }
    if(index ==0){
        this.head =  this.head.next;
        return this.head;
    }
    while(count < index){
        previous = current;
        current= current.next;
        count++;
    }
    previous.next = previous.next.next;
    this.size--;
    return this.head;
}


let list = new LinkedList();
list.insertAtBeginning(9);
list.insertAtBeginning(10)
list.insertAtBeginning(100)
list.insertAtBeginning(103)
console.log(list.deleteAtIndex(2))
console.log(list.size)
