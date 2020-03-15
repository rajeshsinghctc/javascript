/*
What is a linked list?
A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. 
Each node consists of two parts: data & pointer to the next node.
Unlike arrays, data elements are not stored at contiguous locations. The data elements or nodes are linked using pointers, 
hence called a linked list.
A linked list has the following properties:
Successive nodes are connected by pointers.
The last node points to null.
A head pointer is maintained which points to the first node of the list.
A linked list can grow and shrink in size during execution of the program.
It can be made just as long as required.
It allocates memory as the list grows. Unlike arrays, which have a fixed size. Therefore, the upper limit on the number of 
elements must be known in advance. Generally, the allocated memory is equal to the upper limit irrespective of the usage. 
This is one the key advantages of using a linked list over an array.
Another advantage of a linked list
In contrast to an array, which stores data contiguously in memory, a linked list can easily insert or remove nodes from the list 
without reorganization of the entire data structure.
Few drawbacks:
Random access of data elements is not allowed. Nodes must be accessed sequentially starting from the first one. 
Therefore, search operation is slow on a linked list.
It uses more memory than arrays because of the storage used by their pointers.
Types of Linked lists
There are a few different types of linked lists. But the most popular ones are: singly, doubly and circular.
Singly linked list

A singly linked list is collection of nodes wherein each node has 2 parts: data and a pointer to the next node. 
The list terminates with a node pointing at null.Main operations on a linked list are: insert and delete.
*/


// Single linked list program
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
