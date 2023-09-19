const folders = {};
let currentFolder = "test";
folders["test"] = [];


function addFolder(){
    let folderName = document.querySelector(".nameInput");
    let folderStorage = document.querySelector(".folderStorage");
    let folder = document.createElement("button");
    let tasks = document.querySelector(".tasks");

    folder.setAttribute("class", "folderItem");
    folder.setAttribute("onclick", `showTasks(${folderName.value})`);

    folder.innerHTML = folderName.value;
    folderStorage.appendChild(folder);
    folders[`${currentFolder}`] = [];
    currentFolder = folderName.value;
    tasks.innerHTML = "";
    console.log(folders);
}

function addTask(){
    let tasks = document.querySelector(".tasks");
    let taskName = document.querySelector(".taskName");
    let date = document.querySelector(".date");
    let taskHolder = document.createElement("div");
    let finished = document.createElement("button");

    if(taskName.value != null && date.value != ""){
        taskHolder.setAttribute("class", "taskHolder");
        finished.setAttribute("class", "finished");
        finished.setAttribute("onclick", `finished(this.parentNode)`);
        taskName.setAttribute("required", "element.required = true;");
    
        taskHolder.innerHTML += taskName.value + ("&nbsp;").repeat(10);
        taskHolder.innerHTML += date.value + ("&nbsp;".repeat(10));
        taskHolder.appendChild(finished);

        folders[currentFolder].push(taskHolder);

        tasks.appendChild(taskHolder);

        document.querySelector(".taskName").value = "Your Task";
        document.querySelector(".date").value = "";
    };
}

function finished(div){
    div.remove();
}

function showTasks(){
    let tasks = document.querySelector(".tasks");
    tasks.innerHTML = "";

    for(let i = 0; folders[currentFolder].length < 0;i++){
        tasks.appendChild(folders[currentFolder][i]);
    }
}
