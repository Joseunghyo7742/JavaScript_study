// 1. Use strict
// added in ES 5
// use this for Valina Javscript.
'use strict';

// 2. Variable (read, write)
//let (added in ES6)
//don't use var!
//var hoisting (move declaration from bottom to top)
let name= 'seunghyo';
console.log(name);
{
    let name='hello';
    name='hi';
    console.log(name);
}
console.log (name);

//3. Constants, r (read only)
//use const whenever possible.
// only use let if variable needs to change.

//Note!
//Immutable data types: premitive types, frozen objects
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// -security
// -thread safety
// - reduce human mistakes
const daysInweek=7;

// 4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count=17; //integer
const size= 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
//num-special numeric values: infinity, -infinity, Nan
const infinity= 1/0;
const negativeInfinity= -1/0;
const nAn= 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char='c';
//boolean
const canRead=true;
const hi = 3<1; //false

//null
let noting= null;
//undefined
let x;
console.log(`value : ${x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2= Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1= Symbol.for('id');
const gSymbol2= Symbol.for('id');
console.log(gSymbol1=== gSymbol2); //true
console.log(`value: ${symbol1.description}`); //description을 써야 오류 x

//5. Dynamic typing: dynamically typed language
//런타임 때 할당된 값에 의해서 변한다
// 규모가 있는 프로젝트일 때 오류가 생길 수 있다.
let text= 'hello';
text=1; //num
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5; //string
console.log(`value: ${text}, type: ${typeof text}`);
text= '8'/'2'; //num
console.log(`value: ${text}, type: ${typeof text}`);

