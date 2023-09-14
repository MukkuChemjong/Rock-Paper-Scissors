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
    /*Body Section*/
    let bodyClass = document.createElement("div");
    let body = document.body;
    let welcomeMessage = document.createElement("h1");
    let labelHours = document.createElement("h2");
    let labelSpecials = document.createElement("h2");
    let hours = document.createElement("div");
    let hour1 = document.createElement("div");
    let hour2 = document.createElement("div");
    let hour3 = document.createElement("div");
    let hour4 = document.createElement("div");
    let hour5 = document.createElement("div");
    let hour6 = document.createElement("div");
    let hour7 = document.createElement("div");
    let dailySpecials = document.createElement("div");
    let special1 = document.createElement("div");
    let special2 = document.createElement("div");
    let special3 = document.createElement("div");
    let special4 = document.createElement("div");
    let special5 = document.createElement("div");
    let special6 = document.createElement("div");
    let special7 = document.createElement("div");

    bodyClass.setAttribute("class", "body");
    welcomeMessage.setAttribute("class", "welcomeMessage");
    labelHours.setAttribute("class", "titles");
    labelSpecials.setAttribute("class", "titles");
    hours.setAttribute("class", "hours");
    hour1.setAttribute("class", "day");
    hour2.setAttribute("class", "day");
    hour3.setAttribute("class", "day");
    hour4.setAttribute("class", "day");
    hour5.setAttribute("class", "day");
    hour6.setAttribute("class", "day");
    hour7.setAttribute("class", "day");

    dailySpecials.setAttribute("class", "dailySpecials");
    special1.setAttribute("class", "special");
    special2.setAttribute("class","special");
    special3.setAttribute("class", "special");
    special4.setAttribute("class","special");
    special5.setAttribute("class", "special");
    special6.setAttribute("class","special");
    special7.setAttribute("class", "special");

    welcomeMessage.innerHTML = " Welcome to Erie Estate: Where Hauntingly Delicious Dining Awaits!";

    labelHours.innerHTML = "Schedule and Events";
    hour1.innerHTML = "Sunday: 08:00 AM - 09:00 PM Haunted Dining Nights";
    hour2.innerHTML = "Monday: 08:00 AM - 09:00 PM Ghostly Mystery Dinner";
    hour3.innerHTML = "Tuesday: 08:00 AM - 09:00 PM Halloween Costume Parties";
    hour4.innerHTML = "Wednesday: 08:00 AM - 09:00 PM Themed Movie Nights";
    hour5.innerHTML = "Thursday: 08:00 AM - 09:00 PM Potion-Making Nights";
    hour6.innerHTML = "Friday: 08:00 AM - 09:00 PM Ghost Tours";
    hour7.innerHTML = "Saturday: 08:00 AM - 09:00 PM Live Performances";

    labelSpecials.innerHTML = "Daily Specials";
    special1.innerHTML = "Witch's Cauldron Stew";
    special2.innerHTML = "Sleeping Beauty's Enchanted Salad";
    special3.innerHTML = "Dragon's Breath Tacos";
    special4.innerHTML = "Frog Prince Legs";
    special5.innerHTML = "Hansel and Gretel's Sweet Potato Fries";
    special6.innerHTML = "Snow White's Poisoned Apple Salad";
    special7.innerHTML = "Cinderella's Pumpkin Risotto";

    body.appendChild(bodyClass);
    bodyClass.appendChild(welcomeMessage);
    bodyClass.appendChild(labelHours);
    bodyClass.appendChild(hours);
    hours.appendChild(hour1);
    hours.appendChild(hour2);
    hours.appendChild(hour3);
    hours.appendChild(hour4);
    hours.appendChild(hour5);
    hours.appendChild(hour6);
    hours.appendChild(hour7);
    bodyClass.appendChild(labelSpecials);
    bodyClass.appendChild(dailySpecials);
    dailySpecials.appendChild(special1);
    dailySpecials.appendChild(special2);
    dailySpecials.appendChild(special3);
    dailySpecials.appendChild(special4);
    dailySpecials.appendChild(special5);
    dailySpecials.appendChild(special6);
    dailySpecials.appendChild(special7);
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
