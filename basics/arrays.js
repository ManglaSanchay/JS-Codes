const myArr = [1, 2, 3, 4, 5 , "sanchay"];
// in js it is not mandatory that all the elements of the array should be of same type. It can be of different types.
console.log(myArr[0]);

 // array can be created using the new keyword as well.
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[0]); 

// array can also be created using the Array.of() method.
const myArr3 = Array.of(1, 2, 3, 4, 5);
console.log(myArr3[0]); // array can also be created using the Array() method.                              

// array can also be created using the Array.from() method.
const myArr4 = Array.from("sanchay");
console.log(myArr4[0]); // s  

// array copy operations create shallow copy 
