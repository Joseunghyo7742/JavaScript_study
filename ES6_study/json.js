//JavaScript Object Notation
//1. Object to JSON
//stringfy(obj)
let json= JSON.stringify(true);
console.log(json);

json= JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
};
json= JSON.stringify(rabbit,['name','color']);
console.log(json);

//2. JSON to Object
//parse
const obj= JSON.parse(json);
console.log(obj);