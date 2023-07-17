//  Buttons
const addBtn = document.getElementById("button-add");
const deleteAllBtn = document.getElementById("button-clear-list");
const searchBtn = document.getElementById("button-search");
const deleteBtn = document.getElementsByClassName('button-delete'); // returns html collection
const checkBtn = document.querySelectorAll('.button-check'); // returns node list

// Input

const taskInput = document.querySelector(".get-task");
const filterInput = document.querySelector(".filter-input");

// Containers
const taskContainer = document.querySelector('.list-container');
const tasks = document.querySelectorAll('.list-container .input-group');

    // Create Task Func

    function createTask() {
        // Task Group Div
        const newDiv = document.createElement("div");
        newDiv.className = "input-group mb-3";

        // Delete Button

        const newDelBtn = document.createElement("button");
        newDelBtn.className = "button-delete btn btn-outline-danger";
        newDelBtn.type = "button";
        newDelBtn.id = "button-delete";
        newDelBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        // Input

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.className = "form-control";
        newInput.placeholder = "";
        newInput.setAttribute("aria-label", "Example text with button addon");
        newInput.setAttribute("aria-describedby", "button-delete");
        newInput.readOnly = true;
            if (!(taskInput.value.trim() === "")) {
                newInput.value = taskInput.value;
            } else {
                alert("Lütfen görev ekleme alanını boş bırakmayın!");
                return 0;
            }
    
        // Check Button

        const newChkBtn = document.createElement("button");
        newChkBtn.className = "button-check btn btn-outline-success";
        newChkBtn.type = "button";
        newChkBtn.id = "button-check";
        newChkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        newDiv.appendChild(newDelBtn);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newChkBtn);
        
        return newDiv;
    }


// EventListeners
taskContainer.addEventListener("click", deleteTask);
taskContainer.addEventListener("click", checkTask);
deleteAllBtn.addEventListener("click", deleteAllTasks);
addBtn.addEventListener("click", addTask);
filterInput.addEventListener("keyup", filterTask);


// Functions
function addTask() {
    taskContainer.appendChild(createTask());
};

function deleteAllTasks(){
    console.log(taskContainer.children.length);
    if (taskContainer.children.length === 1) {
        alert("Görev listesi zaten boş!");
    }
    while(!(taskContainer.children.length === 1)){
        taskContainer.lastChild.remove();
    }
};

function deleteTask(e){
    if (e.target.className === "fa-solid fa-trash") {
        e.target.parentElement.parentElement.remove();
    } else if(e.target.className === "button-delete btn btn-outline-danger" ) {
        e.target.parentElement.remove();
    }
};

function checkTask(e){
    if (e.target.className === "fa-solid fa-check") {
        e.target.parentElement.previousSibling.className = "text-light bg-success form-control";
    } else if(e.target.className === "button-check btn btn-outline-success" ) {
        e.target.previousSibling.className = "text-light bg-success form-control";
    }
};

function filterTask(e){
    console.log("calistim");
    let elements = document.querySelectorAll("#list-container input");
    key = filterInput.value.trim();
    key.toLowerCase();
    for(var i=0;i<elements.length;i++){
        let value = elements[i].value;
        value.trim();
        value.toLowerCase();
        if(value.includes(key)){
            elements[i].parentElement.setAttribute("style","display:flex");
        }else{
            elements[i].parentElement.setAttribute("style","display:none");
        }
    }
}