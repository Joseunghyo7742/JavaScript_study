const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput=toDoForm.querySelector("input");
//const toDoInput=document.querySelector("#todo-form input"); 과 동일
const toDos=[];

function deleteTodo(event){
    const li= event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
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