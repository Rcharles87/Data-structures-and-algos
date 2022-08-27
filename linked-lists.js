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




