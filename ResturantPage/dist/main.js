window.onload = function()
{
   /*The header section*/ 
    let header = document.createElement("div");
    let logo = document.createElement("img");
    let main = document.createElement("button");
    let home = document.createElement("button");
    let aboutus = document.createElement("button");

    header.setAttribute("class" , "header");
    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("class", "logo");
    main.setAttribute("class", "menu-button");
    main.setAttribute("onclick", "toggleMenu()");
    main.innerHTML = "Menu";
    home.setAttribute("class", "home-button");
    home.innerHTML = "Home";
    home.setAttribute("onclick", "showHome()")
    aboutus.setAttribute("class", "aboutus");
    aboutus.setAttribute("onclick", "showAboutUs()");
    aboutus.innerHTML = "About Us"; 
    
    document.body.appendChild(header);

    document.querySelector(".header").appendChild(logo);    
    document.querySelector(".header").appendChild(home);   
    document.querySelector(".header").appendChild(main);   
    document.querySelector(".header").appendChild(aboutus); 
};

function toggleMenu() {
    var menuDiv = document.querySelector(".menu");
    var hoursDiv = document.querySelector(".hours");
    var specialsDiv = document.querySelector(".dailySpecials");

    if (menuDiv.style.display === "none" || menuDiv.style.display === "") {
        menuDiv.style.display = "block";
        hoursDiv.style.display = "none";
        specialsDiv.style.display = "none";
        document.querySelectorAll(".titles")[0].style.display = "none";
        document.querySelectorAll(".titles")[1].style.display = "none";
        document.querySelector(".aboutUs").style.display = "none";
    }
}

function showHome() {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".hours").style.display = "block";
    document.querySelector(".dailySpecials").style.display = "block";
    document.querySelectorAll(".titles")[0].style.display = "block";
    document.querySelectorAll(".titles")[1].style.display = "block";
    document.querySelector(".aboutUs").style.display = "none";
}

function showAboutUs() {
    console.log("here");
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".hours").style.display = "none";
    document.querySelector(".dailySpecials").style.display = "none";
    document.querySelectorAll(".titles")[0].style.display = "none";
    document.querySelectorAll(".titles")[1].style.display = "none";
    document.querySelector(".aboutUs").style.display = "block";
}
