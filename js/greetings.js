const loginInput=document.querySelector("#login-form input");
const loginForm= document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"; //String만 포함된 변수는 대문자로만 표기
const USERNAME_KEY="username"; //오타방지

function onLoginSubmit(event){
    event.preventDefault(); //이벤트의 기본행동을 막음
    const username= loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);//css .HIDEEN- display:none
    paintGreetings(username);
    // greeting.innerText=`Hello ${username}`; //${변수명}으로 표현 ``사용
    // //"Hello "+ username
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername= localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}