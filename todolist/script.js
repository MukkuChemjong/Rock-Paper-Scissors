function addFolder(){
    let folderName = document.querySelector(".nameInput");
    let folderStorage = document.querySelector(".folderStorage");
    let folder = document.createElement("button");

    folder.innerHTML = folderName.value;
    folderStorage.appendChild(folder);
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
        tasks.appendChild(taskHolder);
        document.querySelector(".taskName").value = "Your Task";
        document.querySelector(".date").value = "";
    };
}

function finished(div){
    div.remove();
}