'use strict';

const loginUser=(id, password)=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(
                (id ==='seunghyo'&& password==='dream')||
                (id ==='coder'&& password ==='academy')
            )
            resolve(id);
            else
                reject(new Error('not found'));
        },1000);
    });
const getRoles=(id)=>
    new Promise((resolve, reject)=>{
        if(id ==='seunghyo')
            resolve({name:'seunghyo',role:'admin'});
        else
            reject(new Error('no access'));
    });

 
const id = prompt('enter your id');
const password = prompt('enter your password');
loginUser(id, password)
.then(id=>getRoles(id))
.catch(console.log)
.then(user=>{alert(`Hello ${user.name}, you have a ${user.role}`);})
.catch(console.log);
