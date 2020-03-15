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

LinkedList.prototype.insertAtEnd = function (data) {
    let node = new Node(data);
    let current = this.head;
    if (this.head == null) {
        this.head = node;
    } else {
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
    return this.head;
}

LinkedList.prototype.insertAtIndex = function (data, index) {
    var node = new Node(data);
    let count = 0;
    let previous, current;
    // !this.head same as this.head == null
    if (!this.head) {
        this.head = node;
        this.size++;
        return this.head;
    }
    if (index == 0) { 
        // if only one element already availabel in list
        node.next = this.head; 
        this.head = node; 
        this.size++;
    }else{
        current = this.head;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
            
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }
    
    return this.head;
}

LinkedList.prototype.deleteFirstNode = function(){
    if(this.head == null){
        return;
    }
    this.head = this.head.next;
    this.size--;
    return this.head;
};

LinkedList.prototype.deleteLastNode = function () {
    let current = this.head;
    let previous;
    if(this.head == null){
        //if no element present in list
        return;
    }else if(this.head.next == null){
        //if only one element is present in list i.e at index=0
        this.head = this.head.next;
        this.size--;
        return;
    }else  {
        while(current.next !=null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
    }
    return this.head;
}

LinkedList.prototype.deleteAtIndex = function (index) {
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
    previous.next = current.next; // or previous.next = previous.next.next
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
