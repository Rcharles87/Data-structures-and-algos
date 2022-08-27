//**** this is an example of not using a pointer ****
//num 1 and num2 do not point to the same place in memory 
// let num1 = 5;
// let num2 = num1;

// this is why when you console.log(num1, num2) you get 5 and 5 
// console.log(num1, num2);
//here we change the value of num1 to 10
// console.log(num1 = 10)
// and when we  console.log(num1, num2) and we get 10 and 5 
//because num2 is point to a differnt place in memory than num1
// console.log(num1, num2)



//**** this is an example of using a pointer ****
//in this case we are using a pointer to point to the value of value in obj1 not this actual obj itself 
let obj1 = {
    value: 11
}

//you would think that this would equal 
// obj2 = {
//     value: 11
// }
//which is an entirely different object same values but different memory address
//but what its acutally doing is pointing to the value of obj1 which is 11
// so it looks more like
// obj2 = obj1 = {
//     value: 11
// }
// obj2 and obj1 are pointing to the same object in memory 
let obj2 = obj1;

let obj3 = {
    value: 57
}
obj2 = obj3
obj1 = obj2

console.log("obj1",obj1)
console.log("obj2",obj2)
obj1.value = 22;
console.log(obj1,obj2)