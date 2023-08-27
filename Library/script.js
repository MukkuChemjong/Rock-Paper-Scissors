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

function addBook(){
    var author = document.getElementById("authorId").value;
    var title = document.getElementById("titleId").value;
    var pages = document.getElementById("pagesId").value;;

    const newbook = new Book(author,title,pages);
    myLibrary.push(newbook);
    document.getElementById("bookLibrary").innerHTML += `<div id='books'>${newbook.author} <br> ${newbook.title} <br> ${newbook.pages} <br> </div>`;
}

