//1. String concatenation
console.log('my'+'cat');
console.log('2'+1);
console.log(`string literals: 1+2= ${1+2}`)

//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1);//divide
console.log(1*1);//multiply
console.log(5%2);//remainder
console.log(2**3)//exponentiation지수

//3. Increment and decrement operators
let counter=2;
const preIncrement= ++counter;
const postIncrement=counter++;

//4. Assignment operators
let x= 3;
let y= 6;
x+=y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10<=6); //less than or equal
console.log(10>6); //greater than
console.log(10>=6);//greater than or equal

//6. Logical operators: || (or) , && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//|| (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
function check(){
    for (let i = 0; i<10; i++){
        //wasting time
        console.log('🍕');
    }
    return true;
}

//!(not)
console.log(!value1);

//7. Equality
const stringFive='5';
const numberFive=5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equlity, no type conversion 웬만하면 스트릭 이퀄리티 사용하기
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlity by reference
const seunghyo1 = {name : 'seunghyo'};
const seunghyo2 = {name: 'seunghyo'};
const seunghyo3= seunghyo1;
console.log(seunghyo1 == seunghyo2);
console.log(seunghyo1 === seunghyo2);
console.log(seunghyo1 ===seunghyo3);

// 8. Conditional operators: if
// if, else if, else
const name= 'seunghyo';
if( name === 'seunghyo'){
    console.log('Welcome, seunghyo!');
}else if (name ==='coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2 ;
console.log(name=== 'seunghyo' ? 'yes':'no');

//10. Switch statement
// use for multiple if checks
//use for enum-like value check
// use for multiple type checks in TS
//타입스크립트에서 정해져있는 타입을 검사하거나 enum 비슷한 아이들을 검사할 때 유용
const browser= 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case "Chrome":
        console.log('love you!');
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed
let i =3;
while(i>0){
    console.log(`while:${i}`);
    i--;
    console.log(i);
}
//do while loop, body code is executed first
//then check the condition.

do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//for loop, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for( let i = 3; i>0; i= i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//break,continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for( let i=0 ; i<=10; i++){
    if(i%2!==0)
        continue;
    console.log(i);
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0;i<=10; i++){
    if(i===8)
        break;
    console.log(i);
}