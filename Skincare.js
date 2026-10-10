const Ham = document.querySelector(".Ham");
const Cross = document.querySelector(".Cross");
const menu = document.querySelector(".menu");
const Container = document.querySelector(".Container");
const Header = document.querySelector("header");
const Collection = document.querySelector(".collections");
const Routine = document.querySelector(".daily-routine");
const Product = document.querySelector(".products");
const Feature = document.querySelector(".features");
const Buttons = document.querySelectorAll(".products .wrapper button");
const Sections = document.querySelectorAll(".products ul");
const BestSeller = document.querySelector(".products .best-seller");
const NewArrival = document.querySelector(".products .new-arrival");
const Serum = document.querySelector(".products .serum");
const Cream = document.querySelector(".products .cream");
const Cleanser = document.querySelector(".products .cleanser");
const IMGs = document.querySelectorAll(".daily-routine img");
const SignUp = document.querySelector(".sign-up");
const Login = document.querySelector(".login");
const Window = document.querySelector(".window-container");
const Submits = document.querySelectorAll(".submit");

if ("ontouchstart" in document.documentElement) {
  
  document.body.classList.replace("mouse","touch");

}else{
  
  document.body.classList.replace("touch","mouse");

}

document.querySelector(".Main-Container").addEventListener("scroll",() => {

if(document.querySelector(".Main-Container").scrollTop > Header.offsetHeight){

Routine.classList.add("active");

}

Feature.querySelectorAll("ul li").forEach((element,index) => {

if(document.querySelector(".Main-Container").scrollTop  > Header.offsetHeight + Collection.offsetHeight + Routine.offsetHeight + 0.9*Product.offsetHeight + index*Feature.offsetHeight/3){
 
  element.style.opacity="1";

}

});

});

function signUp() {

 Window.querySelector("h1").innerHTML="Sign Up";
 Window.querySelector(".username").style.display="flex";
 Window.querySelector(".password a").style.display="none";
 Window.querySelector("button").innerHTML="Sign Up";
 Window.querySelector(".switch p").innerHTML="Already have account?";
 Window.querySelector(".switch span").innerHTML="Login";
 Window.querySelector(".success span").innerHTML="Signed Up";

}

function login() {

 Window.querySelector("h1").innerHTML="Login";
 Window.querySelector(".username").style.display="none";
 Window.querySelector(".password a").style.display="flex";
 Window.querySelector("button").innerHTML="Login";
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

if(document.body.classList.contains("mouse")){
menu.style.filter="brightness(75%)";
menu.style.pointerEvents="none";
}

SignUp.classList.add("active");
document.querySelector(".Main-Container").style.pointerEvents="none";

signUp();
setTimeout(() => {
menu.classList.remove("active");},300);

});

Login.addEventListener("click",() => {

Window.classList.add("active");
Container.style.filter="brightness(75%)";

if(document.body.classList.contains("mouse")){
menu.style.filter="brightness(75%)";
menu.style.pointerEvents="none";
}

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


const collections = [

  { img: "Images/collection1.png", brand: "IRISYA Collection", off: "50% OFF" },
  { img: "Images/collection2.png", brand: "RIRI Collection", off: "25% OFF" },
  { img: "Images/collection3.png", brand: "RADIANCE Collection", off: "25% OFF" },
  { img: "Images/collection4.png", brand: "LUMIÈRE Collection", off: "25% OFF" },
  { img: "Images/collection5.png", brand: "SAKURA Collection", off: "50% OFF" },
  { img: "Images/collection6.png", brand: "Lumèra Collection", off: "25% OFF" }

];

const list1 = [

  { img: "Images/cream8.jpg", product: "L'Oréal Anti-Aging Cream", price: "$ 35" },
  { img: "Images/serum5.jpg", product: "Medicube Peptide Serum", price: "$ 20" },
  { img: "Images/cleanser1.jpg", product: "Cetaphil Skin Cleanser", price: "$ 15" },
  { img: "Images/serum4.jpg", product: "ELEMIS Pro-Collagen Serum", price: "$ 35" },
  { img: "Images/cream3.jpg", product: "GARNIER Vitamin C Cream", price: "$ 17" },
  { img: "Images/cleanser2.jpg", product: "CeraVe Foaming Cleanser", price: "$ 13" },
  { img: "Images/cream5.jpg", product: "Neutrogena Water Gel Cream", price: "$ 20" },
  { img: "Images/serum3.jpg", product: "JUMISO Niacinamide Serum", price: "$ 32" } 

];

const list2 = [

  { img: "Images/serum2.jpg", product: "Iunik Tea Tree Serum", price: "$ 25" },
  { img: "Images/cleanser8.jpg", product: "NIVEA Wash Gel", price: "$ 14" },
  { img: "Images/cream2.jpg", product: "Medicube Collagene Cream", price: "$ 34" },
  { img: "Images/cleanser7.jpg", product: "MoonLook Daily Feminine", price: "$ 16" },
  { img: "Images/serum7.jpg", product: "CENTELLA Serum", price: "$ 18" },
  { img: "Images/cream8.jpg", product: "L'Oréal Anti-Aging Cream", price: "$ 35" },
  { img: "Images/cream3.jpg", product: "GARNIER Vitamin C Cream", price: "$ 17" },
  { img: "Images/serum5.jpg", product: "Medicube Peptide Serum", price: "$ 20" }

];

const list3 = [

  { img: "Images/serum1.jpg", product: "GARNIER Vitamin C Serum", price: "$ 12" },
  { img: "Images/serum2.jpg", product: "Iunik Tea Tree Serum", price: "$ 25" },
  { img: "Images/serum3.jpg", product: "JUMISO Niacinamide Serum", price: "$ 32" },
  { img: "Images/serum4.jpg", product: "ELEMIS Pro-Collagen Serum", price: "$ 35" },
  { img: "Images/serum5.jpg", product: "Medicube Peptide Serum", price: "$ 20" },
  { img: "Images/serum6.jpg", product: "Ordinary Niacinamide Serum", price: "$ 28" },
  { img: "Images/serum7.jpg", product: "CENTELLA Serum", price: "$ 18" },
  { img: "Images/serum8.jpg", product: "LA ROCHE-POSAY B5 Serum", price: "$ 36" }

];

const list4 = [

  { img: "Images/cream1.jpg", product: "CeraVe Moisturzing Cream", price: "$ 23" },
  { img: "Images/cream2.jpg", product: "Medicube Collagene Cream", price: "$ 34" },
  { img: "Images/cream3.jpg", product: "GARNIER Vitamin C Cream", price: "$ 17" },
  { img: "Images/cream4.jpg", product: "Cetaphil Moisturizer Cream", price: "$ 24" },
  { img: "Images/cream5.jpg", product: "Neutrogena Water Gel Cream", price: "$ 20" },
  { img: "Images/cream6.jpg", product: "NIVEA Soft Cream", price: "$ 15" },
  { img: "Images/cream7.jpg", product: "NIVEA Cream", price: "$ 26" },
  { img: "Images/cream8.jpg", product: "L'Oréal Anti-Aging Cream", price: "$ 35" }

];

const list5 = [

  { img: "Images/cleanser1.jpg", product: "Cetaphil Skin Cleanser", price: "$ 15" },
  { img: "Images/cleanser2.jpg", product: "CeraVe Foaming Cleanser", price: "$ 13" },
  { img: "Images/cleanser3.jpg", product: "GARNIER Micellar Vitamin C", price: "$ 19" },
  { img: "Images/cleanser4.jpg", product: "SAKURA Cleanser", price: "$ 18" },
  { img: "Images/cleanser5.jpg", product: "LA ROCHE-POSAY Cleanser", price: "$ 26" },
  { img: "Images/cleanser6.jpg", product: "Neutrogena Foaming Cleanser", price: "$ 22" },
  { img: "Images/cleanser7.jpg", product: "MoonLook Daily Feminine", price: "$ 16" },
  { img: "Images/cleanser8.jpg", product: "NIVEA Wash Gel", price: "$ 14" }

];

const lists = [

  { data: list1, element: BestSeller },
  { data: list2, element: NewArrival },
  { data: list3, element: Serum },
  { data: list4, element: Cream },
  { data: list5, element: Cleanser }

];


collections.forEach(collection => {

Collection.querySelector("ul").innerHTML += `

 <li>

  <img src="${collection.img}">

  <div class="details">

   <h1>${collection.off}</h1>

   <div class="brand">

    <div class="line"></div>

    <span>${collection.brand}</span>

    <div class="line"></div>

   </div>

   <button>BUY NOW</button>

  </div>

</li>

`;

});


lists.forEach(list => {

    list.data.forEach(item => {

        list.element.innerHTML += `

      <li>

       <img src="${item.img}">
      
       <div class="info">

        <p>${item.product}</p>
        <span>${item.price}</span>

        <button>

        <svg class="cart" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5 6.84375C5 6.37618 5.37471 6 5.84046 6H7.43383C8.20426 6 8.88713 6.45 9.2058 7.125H23.5987C24.5197 7.125 25.1921 8.0039 24.9504 8.89687L23.5146 14.2511C23.217 15.355 22.2189 16.125 21.0808 16.125H10.9778L11.1669 17.1269C11.2439 17.5242 11.5906 17.8125 11.9933 17.8125H22.0894C22.5551 17.8125 22.9298 18.1887 22.9298 18.6562C22.9298 19.1238 22.5551 19.5 22.0894 19.5H11.9933C10.7817 19.5 9.7416 18.6351 9.51748 17.4434L7.71049 7.91601C7.68597 7.78241 7.57041 7.68749 7.43383 7.68749H5.84046C5.37471 7.68749 5 7.31133 5 6.84375ZM9.48246 22.3124C9.48246 22.0909 9.52593 21.8714 9.61041 21.6667C9.69488 21.4619 9.8187 21.2759 9.97479 21.1192C10.1309 20.9626 10.3162 20.8382 10.5201 20.7535C10.7241 20.6686 10.9426 20.6249 11.1634 20.6249C11.3841 20.6249 11.6027 20.6686 11.8066 20.7535C12.0106 20.8382 12.1959 20.9626 12.352 21.1192C12.5081 21.2759 12.6319 21.4619 12.7163 21.6667C12.8008 21.8714 12.8443 22.0909 12.8443 22.3124C12.8443 22.5341 12.8008 22.7535 12.7163 22.9582C12.6319 23.1629 12.5081 23.349 12.352 23.5057C12.1959 23.6624 12.0106 23.7867 11.8066 23.8715C11.6027 23.9563 11.3841 24 11.1634 24C10.9426 24 10.7241 23.9563 10.5201 23.8715C10.3162 23.7867 10.1309 23.6624 9.97479 23.5057C9.8187 23.349 9.69488 23.1629 9.61041 22.9582C9.52593 22.7535 9.48246 22.5341 9.48246 22.3124ZM21.2489 20.6249C21.6947 20.6249 22.1223 20.8027 22.4375 21.1192C22.7527 21.4357 22.9298 21.8649 22.9298 22.3124C22.9298 22.76 22.7527 23.1892 22.4375 23.5057C22.1223 23.8222 21.6947 24 21.2489 24C20.8031 24 20.3755 23.8222 20.0603 23.5057C19.7451 23.1892 19.568 22.76 19.568 22.3124C19.568 21.8649 19.7451 21.4357 20.0603 21.1192C20.3755 20.8027 20.8031 20.6249 21.2489 20.6249ZM13.8248 11.625C13.8248 12.0117 14.14 12.3281 14.5252 12.3281H16.0661V13.875C16.0661 14.2617 16.3812 14.5781 16.7664 14.5781C17.1517 14.5781 17.4668 14.2617 17.4668 13.875V12.3281H19.0077C19.3929 12.3281 19.7081 12.0117 19.7081 11.625C19.7081 11.2383 19.3929 10.9218 19.0077 10.9218H17.4668V9.37499C17.4668 8.98827 17.1517 8.67187 16.7664 8.67187C16.3812 8.67187 16.0661 8.98827 16.0661 9.37499V10.9218H14.5252C14.14 10.9218 13.8248 11.2383 13.8248 11.625Z"/>
        </svg>

        <svg class="check" cwidth="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9492 9.5C21.1529 9.5 21.3549 9.54027 21.543 9.61816L21.6807 9.68359C21.8146 9.7553 21.937 9.84709 22.0449 9.95508L22.0459 9.9541C22.3367 10.2449 22.5 10.6397 22.5 11.0508C22.5 11.4619 22.3367 11.8566 22.0459 12.1475L14.1719 20.0215C14.0212 20.1723 13.8418 20.2916 13.6455 20.373C13.449 20.4544 13.2381 20.4961 13.0254 20.4961C12.866 20.4961 12.7077 20.4728 12.5557 20.4268L12.4053 20.373C12.2091 20.2916 12.0295 20.1723 11.8789 20.0215V20.0205L7.9668 16.1104L7.96777 16.1094C7.82267 15.9676 7.70616 15.799 7.62598 15.6123C7.54473 15.4232 7.50178 15.2194 7.5 15.0137C7.49826 14.8079 7.53733 14.6035 7.61523 14.4131C7.69319 14.2227 7.80865 14.0498 7.9541 13.9043L8.06836 13.8008C8.18729 13.7034 8.3202 13.6239 8.46289 13.5654H8.46387C8.65423 13.4876 8.85845 13.4483 9.06445 13.4502C9.27025 13.452 9.47421 13.4951 9.66309 13.5762C9.84935 13.6563 10.0184 13.7719 10.1602 13.917L13.0244 16.7812L19.8525 9.9541V9.95508C19.9966 9.81086 20.1675 9.69617 20.3555 9.61816L20.499 9.56641C20.6447 9.52224 20.7965 9.50001 20.9492 9.5Z"/>
        </svg>

        </button>

        <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.9248 5.11328C18.4387 3.14475 21.3645 3.08988 23.7754 4.33984L24.0068 4.46484C26.6652 5.95682 28.5815 9.02108 28.4971 12.6436C28.3954 17.0076 24.8407 21.2334 17.7334 25.2979V25.2988C17.1125 25.6542 16.6874 25.9331 16.1797 26.1748C15.7107 26.398 15.3369 26.5 15 26.5C14.6801 26.5 14.3021 26.3974 13.8184 26.168C13.3063 25.9251 12.8654 25.6407 12.2646 25.2969L11.6094 24.915C4.94172 20.969 1.60143 16.8699 1.50293 12.6436C1.41848 9.02141 3.33504 5.95844 5.99414 4.46484L5.99316 4.46387C8.4471 3.08876 11.481 3.08185 14.0752 5.11328C14.6184 5.53865 15.3816 5.53865 15.9248 5.11328Z" stroke-linejoin="round"/>
        </svg>

       </div>

      </li>

    `;

  });

});


const Icons = document.querySelectorAll(".products .icon");
const buttons = document.querySelectorAll(".products ul button");

document.querySelectorAll(".products ul.active li").forEach((Product,index) => {
 Product.style.animation=`Show 0.4s forwards ${index*0.2}s`;
});

Buttons.forEach((Button,index) => {

Button.addEventListener("click",() => {

 document.querySelector(".products .wrapper button.active").classList.remove("active");
 Button.classList.add("active");

 document.querySelector(".products ul.active").classList.remove("active");
 Sections[index].classList.add("active");

 document.querySelectorAll(".products ul.active li").forEach((Product,index) => {
  Product.style.animation=`Show 0.4s forwards ${index*0.2}s`;
 });

});

});

Icons.forEach(Icon => {

Icon.addEventListener("click",() => {

 document.querySelector("audio").play();

 if(Icon.classList.contains("active")){

  Icon.classList.remove("active");

 }else{

 Icon.classList.add("active");

 }

});

});

buttons.forEach(button => {

button.addEventListener("click",() => {

 if(button.classList.contains("active")){

  button.classList.remove("active");

 }else{

  button.classList.add("active");

 }

});

});


// Carousel
let MaxScrollLeft = Collection.querySelector(".wrapper").scrollWidth - Collection.querySelector(".wrapper").clientWidth;

window.addEventListener("resize",() => {MaxScrollLeft = Collection.querySelector(".wrapper").scrollWidth - Collection.querySelector(".wrapper").clientWidth;});

Collection.querySelector(".wrapper").addEventListener("scroll",() => {


if(Collection.querySelector(".wrapper").scrollLeft <= 10){
  
  Collection.querySelector(".left").classList.remove("active");

}else{
  
  Collection.querySelector(".left").classList.add("active");

}

if(Collection.querySelector(".wrapper").scrollLeft >= MaxScrollLeft - 10){
  
  Collection.querySelector(".right").classList.remove("active");

}else{
  
  Collection.querySelector(".right").classList.add("active");

}

});

Collection.querySelector(".left").addEventListener("click",() => {

Collection.querySelector(".wrapper").scrollLeft -= 300;

});


Collection.querySelector(".right").addEventListener("click",() => {

Collection.querySelector(".wrapper").scrollLeft += 300;

});
