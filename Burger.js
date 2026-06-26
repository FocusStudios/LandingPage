const Ham = document.querySelector(".Ham");
const Cross = document.querySelector(".Cross");
const menu = document.querySelector(".menu");
const Container = document.querySelector(".Container");
const Header = document.querySelector("header");
const Offer = document.querySelector(".offers");
const Yummy = document.querySelector(".yummy");
const Review = document.querySelector(".reviews");
const FAQ = document.querySelector(".FAQ");
const Order = document.querySelector(".orders");
const Buttons = document.querySelectorAll(".orders .wrapper .button");
const Sections = document.querySelectorAll(".orders ul");
const Burger = document.querySelector(".orders .burger");
const Meal = document.querySelector(".orders .meal");
const Drink = document.querySelector(".orders .drink");
const Dessert = document.querySelector(".orders .dessert");
const SignUp = document.querySelector(".sign-up");
const Login = document.querySelector(".login");
const Window = document.querySelector(".window-container");
const Submits = document.querySelectorAll(".submit");
const Back = document.querySelector(".window .Back");

if ("ontouchstart" in document.documentElement) {document.body.classList.add("touch");document.body.classList.remove("mouse");}else{document.body.classList.add("mouse");document.body.classList.remove("touch");};

setTimeout(() => {Header.classList.add("active");},100);
document.querySelector(".Main-Container").addEventListener("scroll",() => {

if(document.querySelector(".Main-Container").scrollTop > Header.offsetHeight + 0.25*Offer.offsetHeight){
Yummy.classList.add("active");}

});

function signUp() {

Window.querySelector("h1").innerHTML="Sign Up";
Window.querySelector(".username").style.display="flex";
Window.querySelector(".password a").style.display="none";
Window.querySelector("button span").innerHTML="Sign Up";
Window.querySelector(".switch p").innerHTML="Already have account?";
Window.querySelector(".switch span").innerHTML="Login";
Window.querySelector(".success span").innerHTML="Signed Up";

}

function login() {

Window.querySelector("h1").innerHTML="Login";
Window.querySelector(".username").style.display="none";
Window.querySelector(".password a").style.display="flex";
Window.querySelector("button span").innerHTML="Login";
Window.querySelector(".switch p").innerHTML="Don't have account?";
Window.querySelector(".switch span").innerHTML="Create One";
Window.querySelector(".success span").innerHTML="Logged In";

}

function success() {

Window.querySelector(".window").classList.add("Success");

setTimeout(() => {

Window.querySelector(".wrapper").style.display="none";
Window.querySelector(".switch").style.display="none";
Window.querySelector(".loader").style.display="none";
Window.querySelector(".success").classList.add("active");
Window.scrollTop = 0;

setTimeout(() => {

SignUp.style.display="none";
Login.style.display="none";
if(window.innerWidth <= 1200){menu.querySelector("ul").style.top="80px";}
menu.querySelector(".container").style.display="flex";

   menu.classList.remove("active");
   Window.classList.remove("active");
   Login.classList.remove("active");
   SignUp.classList.remove("active");

   Window.querySelectorAll(".wrapper .input-field").forEach(Input => {
   Input.querySelector("p").innerHTML="";});

   Container.style.filter="brightness(100%)";

menu.style.filter="brightness(100%)";
menu.style.pointerEvents="auto";
Ham.style.pointerEvents="auto";
document.querySelector(".Main-Container").style.pointerEvents="auto";

},1200);

},1500);

}

SignUp.addEventListener("click",() => {

Window.classList.add("active");
Container.style.filter="brightness(75%)";

menu.style.filter="brightness(75%)";
menu.style.pointerEvents="none";
Ham.style.pointerEvents="none";

SignUp.classList.add("active");

document.querySelector(".Main-Container").style.pointerEvents="none";

signUp();
setTimeout(() => {
menu.classList.remove("active");},300);

});

Login.addEventListener("click",() => {

Window.classList.add("active");
Container.style.filter="brightness(75%)";

menu.style.filter="brightness(75%)";
menu.style.pointerEvents="none";
Ham.style.pointerEvents="none";

Login.classList.add("active");

document.querySelector(".Main-Container").style.pointerEvents="none";

login();
setTimeout(() => {
menu.classList.remove("active");},300);

});

Window.querySelector(".switch span").addEventListener("click",() => {

if(Login.classList.contains("active")){
Login.classList.remove("active");
SignUp.classList.add("active");
signUp();

}else{

SignUp.classList.remove("active");
Login.classList.add("active");
login();

}

Window.querySelectorAll(".wrapper .input-field").forEach(Input => Input.querySelector("p").innerHTML="");
Window.querySelectorAll(".wrapper .input-field input").forEach(input => input.value = "");

});

Window.querySelectorAll(".wrapper .input-field").forEach(Input => {

Input.addEventListener("input",() => {
if(Input.querySelector("input").value.trim() != ""){Input.querySelector("p").innerHTML="";}

});
});

Window.querySelector(".wrapper button").addEventListener("click", () => {

    let hasError = false;

    Window.querySelectorAll(".wrapper .input-field").forEach(input => {

        // Ignore hidden fields
        if (getComputedStyle(input).display === "none") return;

        const field = input.querySelector("input");
        const error = input.querySelector("p");

        if (field.value.trim() === "") {
            error.innerHTML = "This field cannot be empty";
            hasError = true;
        } else {
            error.innerHTML = "";
        }

    });

    if (!hasError) {
        success();
    }

});

Submits.forEach(Submit => {
Submit.addEventListener("click",() => {

success();

});
});

Ham.addEventListener("click",() => {
menu.classList.add("active");
Container.style.filter="brightness(75%)";
});

Cross.addEventListener("click",() => {

   menu.classList.remove("active");
   Window.classList.remove("active");
   Login.classList.remove("active");
   SignUp.classList.remove("active");

   menu.style.filter="brightness(100%)";
   menu.style.pointerEvents="auto";
   Ham.style.pointerEvents="auto";

   Window.querySelectorAll(".wrapper .input-field").forEach(Input => {
   Input.querySelector("p").innerHTML="";});

   Container.style.filter="brightness(100%)";

});

document.addEventListener("click", (e) => {

  const resetUI = () => {
    menu.style.filter = "brightness(100%)";
    menu.style.pointerEvents = "auto";
    Ham.style.pointerEvents = "auto";

    Container.style.filter = "brightness(100%)";
    document.querySelector(".Main-Container").style.pointerEvents="auto";
  };

  if (!menu.contains(e.target) && !Ham.contains(e.target) && !Window.classList.contains("active")) {
    menu.classList.remove("active");
    resetUI();
  }

  if (
    !Window.querySelector(".window").contains(e.target) &&
    !SignUp.contains(e.target) &&
    !Login.contains(e.target) &&
    !menu.classList.contains("active") &&
    !Ham.contains(e.target)) {

    Window.classList.remove("active");
    Login.classList.remove("active");
    SignUp.classList.remove("active");

  
    Window.querySelectorAll(".wrapper .input-field p").forEach(p => p.innerHTML = "");

    resetUI();
  }

});

Back.addEventListener("click",() => {

menu.classList.remove("active");
Window.classList.remove("active");
Login.classList.remove("active");
SignUp.classList.remove("active");

menu.style.filter="brightness(100%)";
menu.style.pointerEvents="auto";

Window.querySelectorAll(".wrapper .input-field").forEach(Input => {
Input.querySelector("p").innerHTML="";});

Container.style.filter="brightness(100%)";
document.querySelector(".Main-Container").style.pointerEvents="auto";

});

const offers = [
  { img: "Images/offer1.png", title: "Pizza Burger Deluxe", description: "Juicy beef burger topped with pepperoni, cheese, and bold flavor.", offer: "NEW", display: "none", font: "1.5rem" },
  { img: "Images/offer2.png", title: "Buy One, Get One For Free!", description: "Buy one chicken sandwich meal, get another free today only.", offer: "Limited Time", display: "flex", font: "1.1rem" },
  { img: "Images/offer3.png", title: "Flash Fried Chicken", description: "Enjoy a complete crispy feast at an unbeatable price today!", offer: "25% OFF", display: "flex", font: "1.2rem" },
  { img: "Images/offer4.png", title: "Festive Burger Special", description: "Enjoy these delicious mini burgers at an irresistible price today!", offer: "50% OFF", display: "flex", font: "1.2rem" },
  { img: "Images/offer5.png", title: "Wrap & Fries Deal", description: "Enjoy a delicious chicken wrap with crispy fries and dip.", offer: "NEW", display: "flex", font: "1.5rem" },
  { img: "Images/offer6.png", title: "Ultimate Feast Deal", description: "Burger, hot dog, nuggets, and fries together at one great price.", offer: "50% OFF", display: "flex", font: "1.2rem" },
  { img: "Images/offer7.png", title: "Weekend Strip Feast", description: "Savor premium chicken strips served with two dipping sauces.", offer: "50% OFF", display: "none", font: "1.2rem" },
  { img: "Images/offer8.png", title: "Family Nugget Feast", description: "Extra large nugget portion perfect for sharing with family.", offer: "50% OFF", display: "none", font: "1.2rem" },
  { img: "Images/offer9.png", title: "Pizza Burger Combo", description: "Enjoy our savory pizza burger with a tasty side included.", offer: "NEW", display: "flex", font: "1.5rem" },
  { img: "Images/offer10.png", title: "Family Favorite Combo", description: "Satisfying burger meal served with crispy sides and refreshing cola.", offer: "NEW", display: "none", font: "1.5rem"},
  { img: "Images/offer11.png", title: "Burger & Pizza Deal", description: "Enjoy crispy chicken burger, mini pizza, and golden fries.", offer: "NEW", display: "flex", font: "1.5rem" },
  { img: "Images/offer12.png", title: "Burger & Wedges Deal", description: "Taste a juicy cheeseburger paired with potato wedges.", offer: "NEW", display: "none", font: "1.5rem"}
];

const reviews = [
  {name: "Olivia", text: "The burgers were incredibly fresh and full of flavor. Definitely one of the best burger places I've ever tried!", img: "Images/review1.png"},
  {name: "Sophia", text: "Fast delivery, great quality, and generous portions. The crispy fries were the perfect side, fresh and delicious.", img: "Images/review2.png"},
  {name: "Emma", text: "Perfectly cooked burgers with premium ingredients. Highly recommended for burger lovers seeking exceptional taste and quality.", img: "Images/review3.png"},
  {name: "James", text: "The combo deals are fantastic and the food always arrives hot. Great experience every time with fast, reliable service.", img: "Images/review4.png"},
  {name: "Michael", text: "I loved the variety of burgers and the ability to customize my order exactly how I wanted. The options were fresh and delicious.", img: "Images/review5.png"},
  {name: "Diana", text: "Excellent service, delicious food, and amazing value for money. I'll definitely order again and recommend it to my friends.", img: "Images/review6.png"}
];

const list1 = [
  { img: "Images/burger1.png", title: "Classic Burger", description: "Fries + Iced Soda", price: "$ 10", shadow: "rgba(255,157,0,0.2)", color1: "#FFE100", color2: "#FFA500" },
  { img: "Images/burger2.png", title: "Cheese Burger", description: "Fries + Cold Drink", price: "$ 11", shadow: "rgba(255,133,0,0.2)", color1: "#FFE100", color2: "#FF8500" },
  { img: "Images/burger3.png", title: "Egg Burger", description: "Fries + Fresh Juice", price: "$ 12", shadow: "rgba(255,133,0,0.2)", color1: "#FFC700", color2: "#FF8500" },
  { img: "Images/burger4.png", title: "Chicken Burger", description: "Fries + Iced Soda", price: "$ 12", shadow: "rgba(250,92,0,0.2)", color1: "#FFC300", color2: "#FA5C00" },
  { img: "Images/burger5.png", title: "Mushroom Burger", description: "Fries + Garlic Dip", price: "$ 13", shadow: "rgba(255,106,0,0.2)", color1: "#FFA500", color2: "#E04502" },
  { img: "Images/burger6.png", title: "Vegan Burger", description: "Salad + Fresh Juice", price: "$ 13", shadow: "rgba(255,10,0,0.2)", color1: "#FF8800", color2: "#FF0A00" },
  { img: "Images/burger7.png", title: "Pepperoni Burger", description: "Fries + Iced Soda", price: "$ 14", shadow: "rgba(255,20,20,0.2)", color1: "#FF1414", color2: "#940600" },
  { img: "Images/burger8.png", title: "Barbeque Burger", description: "Fries + BBQ Dip", price: "$ 15", shadow: "rgba(255,9,9,0.2)", color1: "#FF0000", color2: "#540400" }
];

const list2 = [
  { img: "Images/side1.png", title: "French Fries", description: "Regular Size", price: "$ 5", shadow: "rgba(255,157,0,0.2)", color1: "#FFE100", color2: "#FFA500" },
  { img: "Images/side2.png", title: "Potato Wedges", description: "Large Portion", price: "$ 6", shadow: "rgba(255,133,0,0.2)", color1: "#FFE100", color2: "#FF8500" },
  { img: "Images/side3.png", title: "Onion Rings", description: "8 Crispy Pieces", price: "$ 7", shadow: "rgba(255,133,0,0.2)", color1: "#FFC700", color2: "#FF8500" },
  { img: "Images/side4.png", title: "Fried Chicken", description: "5 Crispy Pieces", price: "$ 9", shadow: "rgba(250,92,0,0.2)", color1: "#FFC300", color2: "#FA5C00" },
  { img: "Images/side5.png", title: "Chicken Nuggets", description: "12 Pieces", price: "$ 8", shadow: "rgba(255,106,0,0.2)", color1: "#FFA500", color2: "#E04502" },
  { img: "Images/side6.png", title: "Mozzarella Sticks", description: "6 Pieces", price: "$ 7", shadow: "rgba(255,10,0,0.2)", color1: "#FF8800", color2: "#FF0A00" },
  { img: "Images/side7.png", title: "Sweet Corn", description: "Serves 1 Person", price: "$ 4", shadow: "rgba(255,20,20,0.2)", color1: "#FF1414", color2: "#940600" },
  { img: "Images/side8.png", title: "Fresh Salad", description: "Fresh Bowl Size", price: "$ 6", shadow: "rgba(255,9,9,0.2)", color1: "#FF0000", color2: "#540400" }
];

const list3 = [
  { img: "Images/sauce1.png", title: "Ranch", description: "Herb Cream", price: "$ 2", shadow: "rgba(255,157,0,0.2)", color1: "#FFE100", color2: "#FFA500" },
  { img: "Images/sauce2.png", title: "Mayonnaise", description: "Velvet Smooth", price: "$ 1", shadow: "rgba(255,133,0,0.2)", color1: "#FFE100", color2: "#FF8500" },
  { img: "Images/sauce3.png", title: "Big Tasty", description: "Special Sauce", price: "$ 3", shadow: "rgba(255,133,0,0.2)", color1: "#FFC700", color2: "#FF8500" },
  { img: "Images/sauce4.png", title: "Mustard", description: "Bold Tang", price: "$ 1", shadow: "rgba(250,92,0,0.2)", color1: "#FFC300", color2: "#FA5C00" },
  { img: "Images/sauce5.png", title: "Cheddar", description: "Melty Flavor", price: "$ 3", shadow: "rgba(255,106,0,0.2)", color1: "#FFA500", color2: "#E04502" },
  { img: "Images/sauce6.png", title: "Ketchup", description: "Tomato Flavor", price: "$ 1", shadow: "rgba(255,10,0,0.2)", color1: "#FF8800", color2: "#FF0A00" },
  { img: "Images/sauce7.png", title: "Sweet Chili", description: "Sweet Heat", price: "$ 2", shadow: "rgba(255,20,20,0.2)", color1: "#FF1414", color2: "#940600" },
  { img: "Images/sauce8.png", title: "Barbeque", description: "Grill Flavor", price: "$ 2", shadow: "rgba(255,9,9,0.2)", color1: "#FF0000", color2: "#540400" }
];

const list4 = [
  { img: "Images/drink1.png", title: "Classic Cola", description: "Ice-Cold cola", price: "$ 4", shadow: "rgba(0, 0, 0, 0.2)", color1: "#993802", color2: "#401801" },
  { img: "Images/drink2.png", title: "Orange Soda", description: "Sweet orange fizz", price: "$ 5", shadow: "rgba(255,119,0,0.2)", color1: "#FFA500", color2: "#E04502" },
  { img: "Images/drink3.png", title: "Pineapple Soda", description: "Fresh pineapple taste", price: "$ 5", shadow: "rgba(255,199,0,0.2)", color1: "#FFC700", color2: "#FF8500" },
  { img: "Images/drink4.png", title: "Lemon Soda", description: "Fresh lemon sparkle", price: "$ 4", shadow: "rgba(140, 255, 0, 0.2)", color1: "#C8FF00", color2: "#3EAD02" },
  { img: "Images/drink5.png", title: "Choclate Shake", description: "Rich chocolate shake", price: "$ 7", shadow: "rgba(192, 83, 0, 0.2)", color1: "#C48856", color2: "#7D3800" },
  { img: "Images/drink6.png", title: "Ice Coffee", description: "Smooth cold coffee", price: "$ 6", shadow: "rgba(255, 98, 0, 0.2)", color1: "#FFA75E", color2: "#D15E00" },
  { img: "Images/drink7.png", title: "Strawberry Shake", description: "Creamy berry shake", price: "$ 7", shadow: "rgba(255, 50, 146, 0.2)", color1: "#FF86B5", color2: "#FF3493" },
  { img: "Images/drink8.png", title: "Matcha Latte", description: "Creamy matcha latte", price: "$ 8", shadow: "rgba(200,255,0,0.2)", color1: "#BAFC80", color2: "#87FF1F" }
];

const lists = [
    { data: list1, element: Burger },
    { data: list2, element: Meal },
    { data: list3, element: Drink },
    { data: list4, element: Dessert }
];

const faqs = [
  {question: "Do you use fresh ingredients ?", answer: "Yes, we prepare every burger using fresh vegetables, premium-quality meat, and freshly baked buns.", display: "none"},
  {question: "How long does delivery take ?", answer: "Most orders are delivered within 20–40 minutes, depending on your location and current order volume.", display: "none"},
  {question: "Do you offer vegetarian burgers ?", answer: "Yes, we offer a selection of delicious vegetarian burgers made with fresh ingredients and flavorful plant-based patties.", display: "none"},
  {question: "Can I customize my burger ?", answer: "Absolutely! You can customize your burger by adding or removing toppings, choosing your preferred sauce.", display: "none"},
  {question: "What payment methods do you accept ?", answer: "We accept major credit and debit cards, digital wallets, and cash on delivery for your convenience.", display: "flex"}
];

offers.forEach(offer => {

Offer.querySelector("ul").innerHTML += `

<li class="slide">
<img src="${offer.img}">
<div class="details">
<h2>${offer.title}</h2>
<p>${offer.description}</p>
<button><span>TRY NOW</span></button>
</div>
<div class="offer" style="display:${offer.display};">
<span style="font-size:${offer.font};">${offer.offer}</span>
</div>
</li>

`;

});

reviews.forEach(review => {

Review.querySelector("ul").innerHTML += `

<li>

<img class="profile" src="${review.img}">

<p>${review.text}</p>

<div class="line"></div>

<div class="wrapper">

<span>${review.name}</span>

<div class="rate">
<img class="star" src="Images/star.svg">
<img class="star" src="Images/star.svg">
<img class="star" src="Images/star.svg">
<img class="star" src="Images/star.svg">
<img class="star" src="Images/star.svg">
</div>

</div>

</li>

`;

});

lists.forEach((list, listIndex) => {

  list.data.forEach((item, itemIndex) => {

    const gradientId = `gradient-${listIndex}-${itemIndex}`;

    list.element.innerHTML += `

    <li>
   
      <svg style="--shadow:${item.shadow};" width="250" height="170" viewBox="0 0 250 170">
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${item.color1}" />
            <stop offset="100%" stop-color="${item.color2}" />
          </linearGradient>
        </defs>

        <path fill="url(#${gradientId})" d="M0 21.5645C0 10.1409 10.0985 1.32048 21.4077 2.93325C135.56 19.2123 192.28 38.6286 240.001 91.7518C246.683 99.191 250 108.982 250 118.982V151.095C250 161.536 241.536 170 231.095 170H18.905C8.46406 170 0 161.536 0 151.095V21.5645Z"/>
      </svg>

      <img src="${item.img}">

     <div class="info">
       <span>${item.title}</span>
       <p>${item.description}</p>
       <h1>${item.price}</h1>
     </div>
   
    </li>

    `;
  });

});

// Oreders
function animateOrders() {

    const list = document.querySelector(".orders ul.active");
    const items = list.querySelectorAll("li");

    const cols = getComputedStyle(list).gridTemplateColumns.split(" ").length;

    items.forEach((item, index) => {

        const row = Math.floor(index / cols);
        const col = index % cols;

        const animationIndex = row * cols + (cols - 1 - col);

        item.style.animation =
            `Slow-TranslateX 1.5s forwards ${animationIndex * 0.2}s`;

    });
}

document.querySelectorAll(".orders ul.active li").forEach((Order,index) => {Order.style.animation=`Slow-TranslateX 1s forwards ${index*0.2}s`;});
Buttons.forEach((Button,index) => {
Button.addEventListener("click",() => {document.querySelector(".orders .wrapper .button.active").classList.remove("active");Button.classList.add("active");document.querySelector(".orders ul.active").classList.remove("active");Sections[index].classList.add("active");
animateOrders();
});});

window.addEventListener("resize", animateOrders);

// FAQ
faqs.forEach(faq => {

FAQ.querySelector("ul").innerHTML += `

<li>
<div class="line"></div>
<div class="wrapper">
<span>${faq.question}</span>
<p>${faq.answer}</p>
<svg class="arrow" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3543 17.5611C14.5236 17.3964 14.7533 17.3038 14.9928 17.3038C15.2322 17.3038 15.4619 17.3964 15.6312 17.5611L20.1014 21.9108L24.5715 17.5611C24.7426 17.4061 24.9689 17.3217 25.2027 17.3257C25.4365 17.3297 25.6596 17.4218 25.825 17.5826C25.9904 17.7434 26.0853 17.9604 26.0897 18.1879C26.0941 18.4153 26.0076 18.6356 25.8484 18.8023L20.7406 23.7739C20.5712 23.9387 20.3415 24.0312 20.1021 24.0312C19.8626 24.0312 19.6329 23.9387 19.4636 23.7739L14.3543 18.8037C14.185 18.6389 14.0898 18.4154 14.0898 18.1824C14.0898 17.9494 14.185 17.7259 14.3543 17.5611Z"/>
</svg>
<div class="Line" style="bottom:1px;display:${faq.display};"></div>
</div>
</li>

`;

});

const sections = document.querySelectorAll(".FAQ .wrapper");

let MaxScrollLeft;

function updateFAQ() {

    sections.forEach(section => {
        const H1 = section.querySelector("span").offsetHeight;       
        const H2 = section.querySelector("p").offsetHeight;
        section.querySelector("p").style.top = `${H1}px`;       
        section.querySelector(".arrow").style.top = `${(H1 - 40) / 2}px`;
        if (section.classList.contains("active")) {section.style.height = `${H1 + H2}px`;} else {section.style.height = `${H1}px`;}
    });

    MaxScrollLeft = Review.querySelector(".wrapper").scrollWidth - Review.querySelector(".wrapper").clientWidth;

}

sections.forEach(section => {

    section.querySelector(".arrow").addEventListener("click", () => {

        const H1 = section.querySelector("span").offsetHeight;       
        const H2 = section.querySelector("p").offsetHeight;
        const isActive = section.classList.contains("active");
        sections.forEach(item => {
            const itemH1 = item.querySelector("span").offsetHeight;
            item.classList.remove("active");            item.style.height = `${itemH1}px`;
        });

        if (!isActive) {
            section.classList.add("active");           
         section.style.height = `${H1 + H2}px`;
        }
    });
});

window.addEventListener("load", async () => {
    await document.fonts.ready;
    updateFAQ();
});

window.addEventListener("resize", updateFAQ);

// Reviews
Review.querySelector(".right").classList.add("active");

Review.querySelector(".wrapper").addEventListener("scroll",() => {

if(Review.querySelector(".wrapper").scrollLeft <= 10){Review.querySelector(".left").classList.remove("active");}else{Review.querySelector(".left").classList.add("active");};
if(Review.querySelector(".wrapper").scrollLeft >= MaxScrollLeft - 10){Review.querySelector(".right").classList.remove("active");}else{Review.querySelector(".right").classList.add("active");};

});

Review.querySelector(".left").addEventListener("click",() => {

Review.querySelector(".wrapper").scrollLeft -= 300;

});

Review.querySelector(".right").addEventListener("click",() => {

Review.querySelector(".wrapper").scrollLeft += 300;

});

