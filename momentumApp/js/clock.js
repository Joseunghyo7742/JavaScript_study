const clock= document.querySelector("#clock");

function getClock(){
    const date= new Date();
    const hours= String(date.getHours()).padStart(2,"0");
    const minutes= String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
    
}
getClock()
setInterval(getClock, 1000);
//첫 번째 argu-호출 함수 , 두 번째 argu- 호출 간격 ms
