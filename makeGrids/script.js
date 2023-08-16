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

function newGrid(){
    document.getElementById("container").innerHTML = "";
    let numGrids = window.prompt("Enter num of Grids:");
    createGrid(numGrids);
    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });
}

$(document).ready(function () {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });
});




