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

    /*Menu Section */
    let menu = document.createElement("div");
    let menuSubtitle = document.createElement("h3");
    let menuTitle = document.createElement("h2");
    let appetizersList = document.createElement("ul");
    let aItem1 = document.createElement("li");
    let aItem2 = document.createElement("li");
    let aItem3 = document.createElement("li");
    let mainMenu = document.createElement("h3");
    let menuList = document.createElement("ul");
    let menu1 = document.createElement("li");
    let menu2 = document.createElement("li");
    let menu3 = document.createElement("li");
    let desertMenu = document.createElement("h3");
    let desertList = document.createElement("ul");
    let desert1 = document.createElement("li");
    let desert2 = document.createElement("li");
    let desert3 = document.createElement("li");

    menuTitle.innerHTML = "Menu";
    menuSubtitle.innerHTML = "Appetizers";
    aItem1.innerHTML = "Witch's Cauldron Stew";
    aItem2.innerHTML = "Dragon's Breath Tacos";
    aItem3.innerHTML = "Ghostly Sliders";

    mainMenu.innerHTML = "Main Course";
    menu1.innerHTML = "Enchanted Forest Pasta";
    menu2.innerHTML = "Hauntingly Delicious Pizza";
    menu3.innerHTML = "Frog Prince Legs with Pumpkin Risotto";

    desertMenu.innerHTML = "Desserts";
    desert1.innerHTML = "Snow White's Poisoned Apple Pie";
    desert2.innerHTML = "Midnight Chocolate Cake";
    desert3.innerHTML = "Sleeping Beauty's Dreamy Tiramisu";

    menu.setAttribute("class", "menu");
    bodyClass.appendChild(menu);
    menu.appendChild(menuTitle);
    menu.appendChild(menuSubtitle);
    menu.appendChild(appetizersList);
    appetizersList.appendChild(aItem1);
    appetizersList.appendChild(aItem2);
    appetizersList.appendChild(aItem3);
    menu.appendChild(mainMenu);
    menu.appendChild(menuList);
    menuList.appendChild(menu1);
    menuList.appendChild(menu2);
    menuList.appendChild(menu3);
    menu.appendChild(desertMenu);
    desertMenu.appendChild(desertList);
    desertList.appendChild(desert1);
    desertList.appendChild(desert2);
    desertList.appendChild(desert3);

    /*About us Section*/
    let aboutUs = document.createElement("div");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let paragraph3 = document.createElement("p");
    let paragraph4 = document.createElement("p");
    let aboutusSubtitle = document.createElement("h2");

    aboutUs.setAttribute("class", "aboutUs");

    aboutusSubtitle.innerHTML = "About Us";
    paragraph1.innerHTML = "Welcome to Erie Estate, your premier destination for a hauntingly delightful dining experience. Nestled within the walls of our centuries-old castle, we offer a unique blend of culinary artistry and supernatural ambiance.";
    paragraph2.innerHTML = "Our story begins with a legendary chef who, centuries ago, made a pact with the spirits of the castle to create dishes that are out of this world—both in flavor and presentation. Over the years, our chefs have continued this tradition, crafting dishes that are as enchanting as they are delicious.";
    paragraph3.innerHTML = "At Erie Estate, we pride ourselves on delivering exceptional dining experiences. From our Haunted Dining Nights to Ghost Tours, each visit promises a touch of magic and mystery that you won't find anywhere else.";
    paragraph4.innerHTML = "Come and join us for an unforgettable journey into the world of the supernatural, where every meal is a spellbinding adventure.";

    bodyClass.appendChild(aboutUs);
    aboutUs.appendChild(aboutusSubtitle);
    aboutUs.appendChild(paragraph1);
    aboutUs.appendChild(paragraph2);
    aboutUs.appendChild(paragraph3);
    aboutUs.appendChild(paragraph4);
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
