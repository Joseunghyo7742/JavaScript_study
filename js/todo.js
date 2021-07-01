const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput=toDoForm.querySelector("input");
//const toDoInput=document.querySelector("#todo-form input"); 과 동일

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
}
toDoForm.addEventListener("submit", handleToDoSubmit);