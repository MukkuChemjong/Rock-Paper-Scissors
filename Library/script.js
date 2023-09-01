const myLibrary = [
    {
    author: "J. R. R. Tolkien",
    title: "The Lord of the Rings",
    pages: 1216
    }
];

function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function showWindow(){
    console.log("here");
    document.getElementById("form").style.opacity = "1";
}

function addBook(){
    var author = document.getElementById("authorId").value;
    var title = document.getElementById("titleId").value;
    var pages = document.getElementById("pagesId").value;;

    const newbook = new Book(author,title,pages);
    myLibrary.push(newbook);

    if(author === null || title === null || pages === null){
        prompt("Error!");
    }
    else{
        document.getElementById("form").style.opacity = "0";
        document.getElementById("titleGridId").innerHTML += `<div class='title'>${newbook.title}</div>`;
        document.getElementById("authorGridId").innerHTML += `<div class='author'>${newbook.author}</div>`;
        document.getElementById("pagesGridId").innerHTML += `<div class='pages'>${newbook.pages}</div>`;
    }
}

