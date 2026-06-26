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

if ("ontouchstart" in document.documentElement) {document.body.classList.add("touch");document.body.classList.remove("mouse");}else{document.body.classList.add("mouse");document.body.classList.remove("touch");};

document.querySelector(".Main-Container").addEventListener("scroll",() => {

if(document.querySelector(".Main-Container").scrollTop > Header.offsetHeight){
IMGs[0].style.animation="PopUp1 0.4s cubic-bezier(0,0,0.5,2) forwards";
IMGs[1].style.animation="PopUp2 0.4s cubic-bezier(0,0,0.5,2) forwards 0.2s";
IMGs[2].style.animation="PopUp3 0.4s cubic-bezier(0,0,0.5,2) forwards 0.4s";
IMGs[3].style.animation="PopUp4 0.4s cubic-bezier(0,0,0.5,2) forwards 0.6s";
document.querySelectorAll(".daily-routine h1")[0].style.opacity="1";
document.querySelectorAll(".daily-routine h1")[1].style.opacity="1";
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
  { img: "Images/cleanser2.jpg", product: "CeraVe Foaming Facial Cleanser", price: "$ 13" },
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
  { img: "Images/cleanser2.jpg", product: "CeraVe Foaming Facial Cleanser", price: "$ 13" },
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
<div class="line" style="top:0;"></div>
<span>${collection.brand}<span>
<div class="line" style="bottom:0;"></div>
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
<path d="M5 7.04749C5 6.58174 5.37471 6.20703 5.84046 6.20703H7.43383C8.20426 6.20703 8.88713 6.65528 9.2058 7.32765H23.5987C24.5197 7.32765 25.1921 8.20312 24.9504 9.09261L23.5146 14.426C23.217 15.5256 22.2189 16.2926 21.0808 16.2926H10.9778L11.1669 17.2906C11.2439 17.6863 11.5906 17.9735 11.9933 17.9735H22.0894C22.5551 17.9735 22.9298 18.3482 22.9298 18.8139C22.9298 19.2797 22.5551 19.6544 22.0894 19.6544H11.9933C10.7817 19.6544 9.7416 18.7929 9.51748 17.6058L7.71049 8.11558C7.68597 7.9825 7.57041 7.88795 7.43383 7.88795H5.84046C5.37471 7.88795 5 7.51325 5 7.04749ZM9.48246 22.4559C9.48246 22.2352 9.52593 22.0166 9.61041 21.8127C9.69488 21.6087 9.8187 21.4234 9.97479 21.2673C10.1309 21.1113 10.3162 20.9874 10.5201 20.903C10.7241 20.8185 10.9426 20.775 11.1634 20.775C11.3841 20.775 11.6027 20.8185 11.8066 20.903C12.0106 20.9874 12.1959 21.1113 12.352 21.2673C12.5081 21.4234 12.6319 21.6087 12.7163 21.8127C12.8008 22.0166 12.8443 22.2352 12.8443 22.4559C12.8443 22.6767 12.8008 22.8953 12.7163 23.0992C12.6319 23.3031 12.5081 23.4884 12.352 23.6445C12.1959 23.8006 12.0106 23.9244 11.8066 24.0089C11.6027 24.0934 11.3841 24.1369 11.1634 24.1369C10.9426 24.1369 10.7241 24.0934 10.5201 24.0089C10.3162 23.9244 10.1309 23.8006 9.97479 23.6445C9.8187 23.4884 9.69488 23.3031 9.61041 23.0992C9.52593 22.8953 9.48246 22.6767 9.48246 22.4559ZM21.2489 20.775C21.6947 20.775 22.1223 20.9521 22.4375 21.2673C22.7527 21.5826 22.9298 22.0101 22.9298 22.4559C22.9298 22.9017 22.7527 23.3293 22.4375 23.6445C22.1223 23.9598 21.6947 24.1369 21.2489 24.1369C20.8031 24.1369 20.3755 23.9598 20.0603 23.6445C19.7451 23.3293 19.568 22.9017 19.568 22.4559C19.568 22.0101 19.7451 21.5826 20.0603 21.2673C20.3755 20.9521 20.8031 20.775 21.2489 20.775ZM13.8248 11.8101C13.8248 12.1953 14.14 12.5105 14.5252 12.5105H16.0661V14.0513C16.0661 14.4365 16.3812 14.7517 16.7664 14.7517C17.1517 14.7517 17.4668 14.4365 17.4668 14.0513V12.5105H19.0077C19.3929 12.5105 19.7081 12.1953 19.7081 11.8101C19.7081 11.4249 19.3929 11.1097 19.0077 11.1097H17.4668V9.56887C17.4668 9.18366 17.1517 8.86849 16.7664 8.86849C16.3812 8.86849 16.0661 9.18366 16.0661 9.56887V11.1097H14.5252C14.14 11.1097 13.8248 11.4249 13.8248 11.8101Z" fill="var(--base)"/>
</svg>

<svg class="check" cwidth="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6924 10.0228C21.8894 10.2198 22 10.487 22 10.7655C22 11.0441 21.8894 11.3113 21.6924 11.5083L13.818 19.3827C13.714 19.4868 13.5904 19.5693 13.4544 19.6257C13.3185 19.682 13.1727 19.711 13.0255 19.711C12.8784 19.711 12.7326 19.682 12.5966 19.6257C12.4607 19.5693 12.3371 19.4868 12.2331 19.3827L8.32073 15.4711C8.22039 15.3741 8.14035 15.2582 8.08529 15.13C8.03023 15.0019 8.00125 14.864 8.00004 14.7245C7.99883 14.585 8.02541 14.4467 8.07823 14.3176C8.13106 14.1885 8.20906 14.0712 8.30771 13.9725C8.40635 13.8739 8.52364 13.7959 8.65276 13.743C8.78187 13.6902 8.92021 13.6636 9.0597 13.6649C9.1992 13.6661 9.33705 13.6951 9.46523 13.7501C9.5934 13.8052 9.70932 13.8852 9.80624 13.9855L13.0252 17.2045L20.2062 10.0228C20.3038 9.92516 20.4196 9.84772 20.5471 9.79488C20.6746 9.74204 20.8113 9.71484 20.9493 9.71484C21.0873 9.71484 21.224 9.74204 21.3515 9.79488C21.479 9.84772 21.5948 9.92516 21.6924 10.0228Z" fill="var(--base)" stroke="var(--base)"/>
</svg>

</button>

<svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9248 5.11328C18.4387 3.14475 21.3645 3.08988 23.7754 4.33984L24.0068 4.46484C26.6652 5.95682 28.5815 9.02108 28.4971 12.6436C28.3954 17.0076 24.8407 21.2334 17.7334 25.2979V25.2988C17.1125 25.6542 16.6874 25.9331 16.1797 26.1748C15.7107 26.398 15.3369 26.5 15 26.5C14.6801 26.5 14.3021 26.3974 13.8184 26.168C13.3063 25.9251 12.8654 25.6407 12.2646 25.2969L11.6094 24.915C4.94172 20.969 1.60143 16.8699 1.50293 12.6436C1.41848 9.02141 3.33504 5.95844 5.99414 4.46484L5.99316 4.46387C8.4471 3.08876 11.481 3.08185 14.0752 5.11328C14.6184 5.53865 15.3816 5.53865 15.9248 5.11328Z" stroke="var(--primary)" stroke-width="3" stroke-linejoin="round"/>
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

window.addEventListener("resize",() => {
MaxScrollLeft = Collection.querySelector(".wrapper").scrollWidth - Collection.querySelector(".wrapper").clientWidth;});

Collection.querySelector(".wrapper").addEventListener("scroll",() => {


if(Collection.querySelector(".wrapper").scrollLeft <= 10){Collection.querySelector(".left").style.pointerEvents="none";Collection.querySelector(".left").style.opacity="0";}else{Collection.querySelector(".left").style.pointerEvents="auto";Collection.querySelector(".left").style.opacity="1";}
if(Collection.querySelector(".wrapper").scrollLeft >= MaxScrollLeft - 10){Collection.querySelector(".right").style.pointerEvents="none";Collection.querySelector(".right").style.opacity="0";}else{Collection.querySelector(".right").style.pointerEvents="auto";Collection.querySelector(".right").style.opacity="1";}

});

Collection.querySelector(".left").addEventListener("click",() => {

Collection.querySelector(".wrapper").scrollLeft -= 300;

});


Collection.querySelector(".right").addEventListener("click",() => {

Collection.querySelector(".wrapper").scrollLeft += 300;

});