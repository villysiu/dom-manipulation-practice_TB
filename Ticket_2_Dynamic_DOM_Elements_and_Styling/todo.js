const todoListEl = document.getElementById("todo-list");

const addTaskBtn = document.getElementById("add-task");
const remTaskBtn = document.getElementById("remove-task");
const clearListBtn = document.getElementById("clear-list");

addTaskBtn.addEventListener("click", ()=>{
    const newEl = document.createElement("li");
    newEl.textContent = "Task 3";
    todoListEl.appendChild(newEl);
})

remTaskBtn.addEventListener("click", ()=>{
    const lastChild = todoListEl.lastElementChild
    if(lastChild)
        todoListEl.removeChild(lastChild)
})

clearListBtn.addEventListener("click", ()=>{
    todoListEl.innerText = "";
})

const liList = document.querySelectorAll("li");

for(let liEl of liList){
    liEl.addEventListener("click", ()=>{
        liEl.classList.toggle("completed")

    })
}

// todoListEl.forEach(el=>{
//     el.addEv
// })



