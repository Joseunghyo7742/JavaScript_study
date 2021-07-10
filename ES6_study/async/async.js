//async & await
//clear style of using promise 
//1. async
async function fetchUser(){

    return 'seunghyo';
}
const user= fetchUser();
user.then(console.log);
console.log(user);

//2. await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

}

async function getApple(){
    await delay(3000);
    return '🍎';
}
async function getBanana(){
    await delay(3000);
    return '🍌';
}
function getBanana()
{
    return delay(3000)
    .then(()=> 'banana');
}
//before
function pickFruits(){
    return getApple()
    .then(apple=> {
        return getBanana()
        .then(banana => `${apple}+${banana}`);
    });
}
pickFruits().then(console.log);

//after
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);

//병렬처리
async function pickFruits(){
    const applePromise= getApple();
    const bananaPromise=getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]) //배열 형태로 
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBana()]);
}
pickOnlyOne().then(console.log);