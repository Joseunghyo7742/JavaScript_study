'use strict';
//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object={key:value};

//1. Literals and properties
const obj1= {}; //'object literal' syntax
const obj2= new Object();//'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const seunghyo={name:'seunghyo', age :4};
print(seunghyo);

seunghyo.hasJob=true;// 런타임프로그래밍
console.log(seunghyo.hasJob);

delete seunghyo.hasJob;

//2. Computed properties
//key should be always string
console.log(seunghyo.name);//두가지 방법으로 접근 가능
console.log(seunghyo['name']);//key는 항상 스트링타입으로 지정해서 value를 받아옴
seunghyo['hasJob']=true;
console.log(seunghyo.hasJob);

//동적으로 키에 대한 value를 받아와야할 때 computed properties사용
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(seunghyo, 'name');
printValue(seunghyo, 'age');

//3. Property value shorthand
const p1= {name:'bob', age:2};
const p2= MakePerson('seunghyo',30);
console.log(p2);
function MakePerson(name,age){
    return {
        name,//key와 value의 이름이 동일하면 생략가능 name:name,
        age,//age:age,
    };
}

//5. in operator: property existence check( key in obj)
console.log('name'in seunghyo);
console.log('random' in seunghyo);
console.log(seunghyo.random);

//6. for ..in vs for..of
//for(key in obj)
console.clear();
for (let key in seunghyo){
    console.log(key);
}

//for (value of iterable)
const array= [1,2,3,4,5];
//for(let i =0; i<array.length; i++){
//    console.log(array[i]);
//}
for(let value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user= {name: 'seunghyo', age: '20'};
const user2= user;
user2.name= 'coder';
console.log(user);
//같은 object를 가르키고 있음

//old way
const user3={};
for ( let key in user){
    user3[key]=user[key];
}
console.clear();
user3.name='hi';
console.log(user);
// new way
const user4={};
Object.assign(user4, user);
console.log(user4);
// const user4= Object.assign({},user);

//another example
const fruit1= {color: 'red'};
const fruit2= {color: 'blue', size: 'big'};
const mixed= Object.assign({}, fruit1, fruit2); //중복시 뒤에 있는걸로 덮어씌움
console.log(mixed.color);
console.log(mixed.size);



