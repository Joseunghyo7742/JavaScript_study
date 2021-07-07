'use strict';
//object : 서로 연관된 특징과 행동들을 묶어 놓는 것
//array: 비슷한 object, 타입들을 묶어 두는 것 

//Array🍬

//💡1. Declaration
const arr1= new Array();
const arr2= [1,2];

//💡2. Index position
const fruits =['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);//last index

//💡3. Looping over an array
//print all fruits
console.clear();
//a. for
for(let i =0; i<fruits.length; i++)
    console.log(fruits[i]);
console.clear();
//b. for of
for(let fruit of fruits){
    console.log(fruit);
}
console.clear();
//c. forEach
fruits.forEach((fruit, index, array) =>console.log(fruit,index,array));

//💡 4. Addition,deletion, copy
//push: add an item to the end
fruits.push('strawberry');
//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift:add an item to the beginning
fruits.unshift('strawberry');
console.log(fruits);
//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!!! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('strawberry','lemon');
console.log(fruits);
fruits.splice(3);
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(1,1,'watermelone','mango');
console.log(fruits);

//combine two arrays
const fruits2=['pare'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

//💡 5. Searching
//find the index 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('watermelone'));

console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

