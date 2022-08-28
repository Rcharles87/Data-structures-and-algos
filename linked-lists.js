//**** INTRODUCTION ****

//linked list are similar to arrays but they are not arrays.
//example array: [11,3,23,7] and there indices are 0,1,2,3 arrays are in contiguous places in memory
//example linked list: 11->3->23->7->null no indices linked list are not in contiguous places in memory
// linked list have 2 variables: head(11) and tail(7) head is the first node and tail is the last node
// each item in the linked list points to the next item in the linked list so 11 points to 3 and 3 
// points to 23 and 23 points to 7 and 7 points to null

//**** BIG O OF LINKED LISTS  ****

//given the linked list above of 11->3->23->7->null what if we wanted to add a new node of 4 to the end of the linked list
//instead of 7 pointing to null 7 would point to 4 and 4 would point to null
//this is O(1) constant time because we are just "pushing" a new node to the end of the linked list

// if we wanted to pop the last node or the number 4 in this case we would have to point go to a node that points to 7 
// and since we cant go backwards in a linked list we have to iterate through the linked list till we hit 23 
// and then point 23 to 7 and 7 to null this is O(n) linear time because we have to iterate through the linked list

//adding to the beginning of the linked list is O(1) constant time because we are just "pushing" a new node to the beginning of the linked list
//and point that to the head  and then point the head to the new node

//removing from the beginning of the linked list is O(1) constant time because we are just "popping" the first node off the linked list
//and point the head to the second node and then we can remove the first node  then it flows as normal where head points to 3 and 3 to 23 and 23 to 7 and 7 to null

//inserting into the middle of the linked list is O(n) linear time because we have to iterate through the linked list to find the node we want to insert after

// to remove from the middle of the linked list is O(n) linear time because we have to iterate through the linked list to find the node we want to remove

//finding an item in the linked list is O(n) linear time because we have to iterate through the linked list to find the node we want to find


//**** LINKED LIST UNDER THE HOOD ****
// example of a linked list 11->3->23->7->null
// a node is normally represented like this 7->null but in reality it looks like:
// {
//     value: 7,
//     next: null
// }
// a node is the value and its pointer 

// when we say 23 points to 7  it can look like this:
// {
//     value: 23,
//         next: -> {
//             value: 7,
//             next: null
//         }
// }

//in fact whole linked list can be respresented like this:
// {
//  this is the head ---->value: 11,
//                          next: -> {
//                              value: 3,
//                                  next: -> {
//                                     value: 23,
//   this is the tail ---->               next: -> {
//                                           value: 7, 
//                                              next: null
//                                                  }       
//                                             }
//                                      }
// }

// the tail actually points to the last node in the linked which is the "next" value of the node with a value of 23
//so that we can keep the "next" which points to null




// //**** LINKED LIST CONSTRUCTOR****
// class Node {
//     //constructor creates a new node with a value and a pointer to the next node
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     //constructor creates a new linked list with a head and a tail
//     constructor(value) {
//         //create a new node using the Node Class with the value passed in as an argument
//         const newNode = new Node(value)
//         //points the head to the new node
//         this.head = newNode;
//         //points the tail to the new node which is 4 can also just be equal to newNode
//         this.tail = this.head;
//         this.length = 1;
//     }
// }

// let myLinkedList = new LinkedList(4)
// console.log(myLinkedList)


//**** LINKED LIST METHODS ****
//PUSH

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//          this.head = newNode;
//          this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }
// }

// let myLinkedList = new LinkedList(7)
// myLinkedList.push(4)
// console.log(myLinkedList)


//POP

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }
// }

// let myLinkedList = new LinkedList(1);
// myLinkedList.push(2);
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList);



//Unshift


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// let myLinkedList = new LinkedList(11);
// myLinkedList.push(3);
// myLinkedList.push(23);
// myLinkedList.push(7);
// console.log(myLinkedList);
// myLinkedList.unshift(4);
// console.log(myLinkedList);


//Shift

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--     
//         if(this.length === 0){
//             this.tail = null
//         }
//         temp.next = null
//         return this
//     }
// }

// let myLinkedList = new LinkedList(2);
// myLinkedList.push(1)
// console.log(myLinkedList)
// myLinkedList.shift()
// console.log(myLinkedList)
// myLinkedList.shift()
// console.log(myLinkedList)
// console.log(myLinkedList.shift())

//GET 

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--     
//         if(this.length === 0){
//             this.tail = null
//         }
//         temp.next = null
//         return this
//     }

//     get(index){
//         if(index < 0 || index>= this.length){
//             return undefined
//         }
//         let temp = this.head;
//         for (let i =0; i < index; i++){
//            temp = temp.next  
//         }
//         return temp 
//     }
// }

// let myLinkedList = new LinkedList(0);
// myLinkedList.push(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// console.log(myLinkedList)
// console.log(myLinkedList.get(2))



//SET 

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--     
//         if(this.length === 0){
//             this.tail = null
//         }
//         temp.next = null
//         return this
//     }

//     get(index){
//         if(index < 0 || index>= this.length){
//             return undefined
//         }
//         let temp = this.head;
//         for (let i =0; i < index; i++){
//            temp = temp.next  
//         }
//         return temp 
//     }

//     set(index,value){
//         let temp = this.get(index)
//         if(temp){
//             temp.value = value
//             return true
//         }
//         return false

//         // this is repeating code its better to just use the get method which is above
//         // if(index < 0 || index >= this.length){
//         //     return undefined
//         // }
//         // let temp = this.head
//         // for (let i = 0; i < index; i++){
//         //     temp = temp.next
//         // }
//         // temp.value = value
//         // return temp 
//     }
// }

// let myLinkedList = new LinkedList(11);
// myLinkedList.push(4)
// myLinkedList.push(23)
// myLinkedList.push(7)
// console.log(myLinkedList.set(1,35))
// console.log(myLinkedList)


//INSERT

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--     
//         if(this.length === 0){
//             this.tail = null
//         }
//         temp.next = null
//         return this
//     }

//     get(index){
//         if(index < 0 || index>= this.length){
//             return undefined
//         }
//         let temp = this.head;
//         for (let i =0; i < index; i++){
//            temp = temp.next  
//         }
//         return temp 
//     }

//     set(index,value){
//         let temp = this.get(index)
//         if(temp){
//             temp.value = value
//             return true
//         }
//         return false
//     }

//     insert(index,value){
//         if(index === 0) return this.unshift(value);
//         if(index === this.length) return this.push(value);
//         if(index < 0 || index >= this.length) return false 

//         const newNode = new Node(value);
//         let temp = this.get(index - 1)
//         newNode.next = temp.next;
//         temp.next = newNode
//         this.length++
//         return true
//     }
// }

// let myLinkedList = new LinkedList(11);
// myLinkedList.push(4)
// myLinkedList.push(23)
// myLinkedList.push(7)
// console.log(myLinkedList)
// myLinkedList.insert(2,17)
// console.log(myLinkedList)



// REMOVE

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;   
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;   
//     }

//     pop(value){
//         if(!this.head){
//             return undefined;
//         }else{
//             let temp = this.head;
//             let pre = this.head;
//             while(temp.next){
//                 pre = temp;
//                 temp = temp.next;
//             }
//             this.tail = pre;
//             this.tail.next = null;
//             this.length--;
//             if(this.length === 0){
//                 this.head = null;
//                 this.tail = null;
//             }
//             return temp;
//         }
//     }

//     unshift(value){
//         const newNode = new Node (value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--     
//         if(this.length === 0){
//             this.tail = null
//         }
//         temp.next = null
//         return this
//     }

//     get(index){
//         if(index < 0 || index>= this.length){
//             return undefined
//         }
//         let temp = this.head;
//         for (let i =0; i < index; i++){
//            temp = temp.next  
//         }
//         return temp 
//     }

//     set(index,value){
//         let temp = this.get(index)
//         if(temp){
//             temp.value = value
//             return true
//         }
//         return false
//     }

//     insert(index,value){
//         if(index === 0) return this.unshift(value);
//         if(index === this.length) return this.push(value);
//         if(index < 0 || index >= this.length) return false 

//         const newNode = new Node(value);
//         let temp = this.get(index - 1)
//         newNode.next = temp.next;
//         temp.next = newNode
//         this.length++
//         return true
//     }

//     remove(index){
//         if(index === 0) return this.shift()
//         if(index === this.length-1) return this.pop()
//         if(index < 0 || index >= this.length) return undefined

//         let before = this.get(index - 1)
//         let temp = before.next

//         before.next = temp.next
//         temp.next = null;
//         this.length--
//         return temp

//     }
// }

// let myLinkedList = new LinkedList(11)
// myLinkedList.push(3)
// myLinkedList.push(23)
// myLinkedList.push(7)
// console.log(myLinkedList)
// console.log(myLinkedList.remove(1))
// console.log(myLinkedList)


//REVERSE


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;   
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;   
    }

    pop(value){
        if(!this.head){
            return undefined;
        }else{
            let temp = this.head;
            let pre = this.head;
            while(temp.next){
                pre = temp;
                temp = temp.next;
            }
            this.tail = pre;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return temp;
        }
    }

    unshift(value){
        const newNode = new Node (value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--     
        if(this.length === 0){
            this.tail = null
        }
        temp.next = null
        return this
    }

    get(index){
        if(index < 0 || index>= this.length){
            return undefined
        }
        let temp = this.head;
        for (let i =0; i < index; i++){
           temp = temp.next  
        }
        return temp 
    }

    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index,value){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index >= this.length) return false 

        const newNode = new Node(value);
        let temp = this.get(index - 1)
        newNode.next = temp.next;
        temp.next = newNode
        this.length++
        return true
    }

    remove(index){
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        if(index < 0 || index >= this.length) return undefined

        let before = this.get(index - 1)
        let temp = before.next

        before.next = temp.next
        temp.next = null;
        this.length--
        return temp

    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next; 
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this 
    }
}


let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList)
console.log(myLinkedList.reverse())




