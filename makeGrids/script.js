function createGrid(numGrids){
    for(var rows = 0; rows < numGrids; rows++){
        for(var columns = 0; columns < numGrids; columns++){
            document.getElementById("container").innerHTML += "<div class='grid' id='grid'></div>";
        }
    }
    $(".grid").width(`${960/numGrids}px`);
    $(".grid").height(`${960/numGrids}px`);
}

createGrid(16);