'use strict';

//Javascript is synchronous. 
//Execute the code block in order after hoisting
//hoisting: var, function declaration 
console.log('1');
setTimeout(()=>console.log('2'),1000);
console.log('2');
console.log('3');

//Synchronous callback
function printImeediately(print){
    print();
}
printImeediately(()=>console.log('hello'));
//Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

console.clear();

//callback Hell example
class UserStorage{
    // onSuccess, on Error -> callback function
    loginUser(id, password, onSuccess, onError){
        console.log("1. 인자를 전달 받음");
        setTimeout(()=>{
            console.log("2. 조건문 비교 ");
            if(
                (id ==='seunghyo'&& password==='dream')||
                (id ==='coder'&& password ==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        console.log("4. 인자 전달완료");
        setTimeout(()=> {
            console.log("5. 비교");
            if(user ==='seunghyo'){
                onSuccess({name:'seunghyo',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}
const userStorage= new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user)=> {// id 전달받은 걸 user 변수로
        console.log("3. 조건문 후, onSuccess 실행");
        userStorage.getRoles(
            user,
            (userWithRole)=>{alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}role`)}, 
            (error)=>{console.log(error);}
        );
        },
    (error)=>{console.log(error)})