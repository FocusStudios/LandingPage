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
const Close = document.querySelector(".window .Close");
const Price = document.querySelector(".orders .Price");
const Confirm = document.querySelector(".orders .Price button");


// Check if the user uses touch screen or not
if ("ontouchstart" in document.documentElement) {

  document.body.classList.replace("mouse","touch");

} else {

  document.body.classList.replace("touch","mouse");

}


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
 setTimeout(() => {menu.classList.remove("active");},300);

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
 setTimeout(() => {menu.classList.remove("active");},300);

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


Close.addEventListener("click",() => {

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

  { img: "Images/offer1.png", title: "Pizza Burger Deluxe", description: "Juicy beef burger topped with pepperoni, cheese, and bold flavor.", badge: "Images/New.svg" },
  { img: "Images/offer2.png", title: "Buy One, Get One For Free!", description: "Buy one chicken sandwich meal, get another free today only.", badge: "Images/LimitedTime.svg" },
  { img: "Images/offer3.png", title: "Flash Fried Chicken", description: "Enjoy a complete crispy feast at an unbeatable price today!", badge: "Images/25Off.svg" },
  { img: "Images/offer4.png", title: "Festive Burger Special", description: "Enjoy these delicious mini burgers at an irresistible price today!", badge: "Images/New.svg" },
  { img: "Images/offer5.png", title: "Wrap & Fries Deal", description: "Enjoy a delicious chicken wrap with crispy fries and dip.", badge: "Images/50Off.svg" },
  { img: "Images/offer6.png", title: "Ultimate Feast Deal", description: "Burger, hot dog, nuggets, and fries together at one great price.", badge: "Images/LimitedTime.svg" },
  { img: "Images/offer7.png", title: "Weekend Strip Feast", description: "Savor premium chicken strips served with two dipping sauces.", badge: "Images/New.svg" },
  { img: "Images/offer8.png", title: "Family Nugget Feast", description: "Extra large nugget portion perfect for sharing with family.", badge: "Images/25Off.svg" },
  { img: "Images/offer9.png", title: "Pizza Burger Combo", description: "Enjoy our savory pizza burger with a tasty side included.", badge: "Images/50Off.svg" },
  { img: "Images/offer10.png", title: "Family Favorite Combo", description: "Satisfying burger meal served with crispy sides and refreshing cola.", badge: "Images/LimitedTime.svg" },
  { img: "Images/offer11.png", title: "Burger & Pizza Deal", description: "Enjoy crispy chicken burger, mini pizza, and golden fries.", badge: "Images/25Off.svg" },
  { img: "Images/offer12.png", title: "Burger & Wedges Deal", description: "Taste a juicy cheeseburger paired with potato wedges.", badge: "Images/New.svg" }

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

  { img: "Images/drink1.png", title: "Classic Cola", description: "Ice-Cold cola", price: "$ 4", shadow: "rgba(59, 19, 0, 0.2)", color1: "#993802", color2: "#401801" },
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

   <img class="image" src="${offer.img}">

   <div class="details">

    <h2>${offer.title}</h2>
    <p>${offer.description}</p>
    
    <button><span>TRY NOW</span></button>

   </div>

   <img class="badge" src="${offer.badge}">

  </li>

 `;

});


reviews.forEach(review => {

 Review.querySelector("ul").innerHTML += `

  <li>

   <img class="profile" src="${review.img}">

   <div class="details">

     <p>${review.text}</p>

     <div class="line"></div>

     <div class="Rate">

      <span>${review.name}</span>

      <div class="rate">

       <img class="star" src="Images/star.svg">
       <img class="star" src="Images/star.svg">
       <img class="star" src="Images/star.svg">
       <img class="star" src="Images/star.svg">
       <img class="star" src="Images/star.svg">
    
      </div>

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

     <div class="main-container">
   
     <div class="container">

      <svg style="--shadow:${item.shadow};" width="180" height="122.4" viewBox="0 0 250 170">

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

     </div>

     <img class="check" src="Images/check.svg">
   
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

 Button.addEventListener("click",() => {
  
  document.querySelector(".orders .wrapper .button.active").classList.remove("active");
  Button.classList.add("active");document.querySelector(".orders ul.active").classList.remove("active");
  Sections[index].classList.add("active");

  animateOrders();

 });

});


window.addEventListener("resize", animateOrders);

const Items = document.querySelectorAll(".orders ul li");

const prices = [10, 11, 12, 12, 13, 13, 14, 15, 5, 6, 7, 9, 8, 7, 4, 6, 2, 1, 3, 1, 3, 1, 2, 2, 4, 5, 5, 4, 7, 6, 7, 8];

let totalPrice = 0;

Items.forEach((Item, index) => {

    Item.addEventListener("click", () => {

        if (Item.classList.contains("active")) {

            Item.classList.remove("active");

            totalPrice -= prices[index];

        } else {

            Item.classList.add("active");

            totalPrice += prices[index];

        }

        Price.querySelector("h1").innerHTML =
            `Total : $ ${totalPrice}`;

    

         // Show Price if at least one item is active
        if ([...Items].some(item => item.classList.contains("active"))) {

            Price.style.display = "flex";

        } else {

            Price.style.display = "none";

        }
    });

});


Confirm.addEventListener("click", () => {

 document.querySelector(".confirmation-container").classList.add("active");
 Confirm.classList.add("active");
 Container.style.filter="brightness(75%)";

 setTimeout(() => {

  document.querySelector(".confirmation-container .success").classList.add("active");

  setTimeout(() => {
   document.querySelector(".confirmation-container").classList.remove("active");
   document.querySelector(".confirmation-container").scrollTop = 0;
   Confirm.classList.remove("active");

   Items.forEach(Item => Item.classList.remove("active"));
   Price.style.display = "none";
   totalPrice = 0;

   setTimeout(() => {
    document.querySelector(".confirmation-container .success").classList.remove("active");
   },500);

  },1000);

 },300);

});


// FAQ
faqs.forEach(faq => {

 FAQ.querySelector("ul").innerHTML += `

  <li>

   <div class="line"></div>

   <div class="wrapper">

    <span>${faq.question}</span>
    <p>${faq.answer}</p>

    <img class="arrow" src="Images/arrow.svg">

    <div class="Line" style="bottom:1px;display:${faq.display};"></div>

   </div>

  </li>

`;

});


const sections = document.querySelectorAll(".FAQ .wrapper");

sections.forEach(section => {

    section.querySelector(".arrow").addEventListener("click", () => {
        
        if (section.classList.contains("active")) {
          
            section.classList.remove("active");           
        
        }else{

          section.classList.add("active");
          
        }
      
    });
});


const carousel = document.querySelector(".offers .carousel");

let isDragging = false;
let isVerticalScroll = false;
let startX = 0;
let startY = 0;
let slidesInView;
let SlidesPerView;


let totalRealSlides = document.querySelectorAll(".slide").length;

let N;

N = 2 * document.querySelectorAll(".slide").length;

for (let i = 0; i < N; i++) {

 let clone = document.querySelectorAll(".slide")[i % document.querySelectorAll(".slide").length].cloneNode(true);

 carousel.appendChild(clone);

}


let P = 0;
let centralSlide = totalRealSlides + 1;
let currentIndex = centralSlide;


function updateLayout() {

 SlidesPerView = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--x"));

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;
  
 }

}


updateLayout();
window.addEventListener("resize", updateLayout);


function appendSlides() {

  const slides = carousel.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {

    slides[i].style.transition = "none";
    carousel.append(slides[i]);
    
  }

  currentIndex -= SlidesPerView;

}


function prependSlides() {

  const slides = carousel.querySelectorAll(".slide");

  for (let i = 0; i < SlidesPerView; i++) {
    
    slides[i].style.transition = "none";
    carousel.prepend(slides[slides.length - i - 1]);

  }

  currentIndex += SlidesPerView;

}


function forward() {

 currentIndex += SlidesPerView;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

 }

}


function backward() {

 currentIndex -= SlidesPerView;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    
   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

 }

}


function dragStart(e) {

 stopAutoplay();
 carousel.style.cursor="grab";

 isDragging = false;
 isVerticalScroll = false;

 document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0s");

 if(currentIndex > centralSlide){appendSlides();}
 if(currentIndex < centralSlide){prependSlides();}

 startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
 startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

}


function dragging(e) {

 if (isVerticalScroll) return;
 carousel.style.cursor="grabbing";

 let dx;
 let dy;

 dx = e.type.includes("touch") ? e.touches[0].clientX - startX : e.clientX - startX;
 dy = e.type.includes("touch") ? e.touches[0].clientY - startY : e.clientY - startY;
 

 // Detect vertical scroll intent
 if (!isDragging && Math.abs(dy) > Math.abs(dx) && carousel.classList.contains("touch")) {

   isVerticalScroll = true;
   document.body.style.overflowY="auto";

   return;

 }else{
  
   document.body.style.overflowY="hidden";
  
 }


 isDragging = true;

 P = dx;

 for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

   document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap) + ${dx}px)`;
  
 }


}

function dragEnd() {

 carousel.style.cursor="grab";

 if(!isDragging) return;
 isDragging = false;

 document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0.4s");

 if(P >= -60 && P <= 60){

   for(let i = 0; i < document.querySelectorAll(".slide").length; i++) {

     document.querySelectorAll(".slide")[i].style.left=`calc(${i - currentIndex}*(var(--width) + var(--gap)) + 2*var(--gap))`;

   }

  }else if(P > 60){

   backward();

  }else if(P < -60) {

   forward();

  }

 resetAutoplayDelay();

}


// Touch Events
carousel.addEventListener('touchstart', (e) => {dragStart(e);});
carousel.addEventListener('touchmove', (e) => {dragging(e);});
carousel.addEventListener('touchend', dragEnd);

let isMouseDown = false;

// Mouse Events
carousel.addEventListener('mousedown', (e) => {
isMouseDown = true;
dragStart(e);
});

carousel.addEventListener('mousemove', (e) => {
if (!isMouseDown) return;
dragging(e);
});

carousel.addEventListener('mouseup', () => {
if (!isMouseDown) return;
isMouseDown = false;
dragEnd();
});

carousel.addEventListener('mouseleave', () => {
if (!isMouseDown) return;
isMouseDown = false;
dragEnd();
});


// Autoplay logic
let autoplayTimer = null;
let autoplayInterval = 1500;
let idleTimeout = null;

function startAutoplay() {

 if (autoplayTimer) return;

 autoplayTimer = setInterval(() => {

   document.querySelectorAll(".slide").forEach(Slide => Slide.style.transition="0.4s");

   appendSlides();
   forward();

 }, autoplayInterval);

}


function stopAutoplay() {

  clearInterval(autoplayTimer);
  autoplayTimer = null;
  clearTimeout(idleTimeout);

}

function resetAutoplayDelay() {

  stopAutoplay();
  clearTimeout(idleTimeout);

  idleTimeout = setTimeout(() => {
    startAutoplay();
  }, 5000);

}


const Mouse = document.querySelector(".Mouse");



function demo () {

// Step 1
setTimeout(() => {
  
Header.classList.add("active");

startAutoplay();

// Step 2
setTimeout(() => {

Container.style.transform = "translateY(-600px)";

Yummy.classList.add("active");


// Step 3
setTimeout(() => {

Container.style.transform = "translateY(-1650px)";


// Step 4
setTimeout(() => {

Mouse.style.transform = "translate(-330px,-460px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Buttons[1].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 5
setTimeout(() => {

Mouse.style.transform = "translate(-230px,-460px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Buttons[2].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 6
setTimeout(() => {

Mouse.style.transform = "translate(-115px,-460px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Buttons[3].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 7
setTimeout(() => {

Mouse.style.transform = "translate(-440px,-460px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Buttons[0].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 8
setTimeout(() => {

Mouse.style.transform = "translate(-370px,-250px)";

setTimeout(() => {

Items[0].querySelector(".main-container").style.transform = "scale(1.2)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Items[0].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 9
setTimeout(() => {

Mouse.style.transform = "translate(-150px,-250px)";

setTimeout(() => {

Items[1].querySelector(".main-container").style.transform = "scale(1.2)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Items[1].click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 10
setTimeout(() => {

Mouse.style.transform = "translate(380px,160px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

Confirm.click();

setTimeout(() => {

Items[0].querySelector(".main-container").style.transform = "scale(1)";
Items[1].querySelector(".main-container").style.transform = "scale(1)";

Mouse.querySelector(".cursor").classList.remove("active");


// Step 11
setTimeout(() => {

Container.style.transform = "translateY(-2360px)";


// Step 12
setTimeout(() => {

Mouse.style.transform = "translate(450px,15px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
Review.querySelector(".right").classList.add("click");


Review.querySelector(".left").classList.add("active");
Review.querySelector(".carousel").style.transform = "translateX(-260px)"

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");
Review.querySelector(".right").classList.remove("click");


// Step 13
setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
Review.querySelector(".right").classList.add("click");

Review.querySelector(".carousel").style.transform = "translateX(-560px)"

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");
Review.querySelector(".right").classList.remove("click");


// Step 14
setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
Review.querySelector(".right").classList.add("click");

Review.querySelector(".right").classList.remove("active");
Review.querySelector(".carousel").style.transform = "translateX(-820px)"

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");
Review.querySelector(".right").classList.remove("click");


// Step 15
setTimeout(() => {

Container.style.transform = "translateY(-2900px)";

setTimeout(() => {

Mouse.style.transform = "translate(420px,-275px)";


setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
sections[0].querySelector(".arrow").click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 16
setTimeout(() => {

Mouse.style.transform = "translate(420px,-195px)";


setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
sections[1].querySelector(".arrow").click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 17
setTimeout(() => {

Mouse.style.transform = "translate(420px,-235px)";


setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");
sections[1].querySelector(".arrow").click();

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");


// Step 18
setTimeout(() => {

Container.style.transform = "translateY(0)";
Container.style.transition = "2s";
Mouse.style.transform = "translate(500px,0)";
Header.classList.remove("active");
stopAutoplay();


// Step 19
setTimeout(() => {

Yummy.classList.remove("active");
Container.style.transition = "0.6s";
Review.querySelector(".left").classList.remove("active");
Review.querySelector(".right").classList.add("active");
Review.querySelector(".carousel").style.transform = "translateX(0)"


},2000);


},1000);


},500);

},500);

},1000);


},500);

},500);

},1000);


},500);

},500);

},500);

},1000);


},500);

},1500);


},500);

},1500);


},500);

},500);

},1000);


},1500);


},500);

},500);

},800);


},500);

},500);

},200);

},800);


},500);

},500);

},200);

},1200);


},500);

},500);

},1200);


},500);

},500);

},1200);


},500);

},500);

},1200);


},500);

},500);

},1200);



},3000);


},3000);


},100);


}


demo();
setInterval(() => {demo();},38000);
