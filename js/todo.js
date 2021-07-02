const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput=toDoForm.querySelector("input");
//const toDoInput=document.querySelector("#todo-form input"); 과 동일
const toDos=[];
const TODOS_KEY="todos";

function deleteTodo(event){
    const li= event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span= document.createElement("span");
    span.innerText=newTodo;
    const button= document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){

}

const savedToDos= localStoage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
    //parsedToDos.forEach((item)=> console.log("this is the turn of",item)); 
    //함수 작성안하고 allow function을 이용 할 수 있음
}