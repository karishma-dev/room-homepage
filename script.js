const data = [
    {
        "img": "./images/desktop-image-hero-1.jpg",
        "head": "Discover innovative <br />ways to decorate",
        "desc": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        "img": "./images/desktop-image-hero-2.jpg",
        "head": "We are available all across the globe",
        "desc": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        "img": "./images/desktop-image-hero-3.jpg",
        "head": "Manufactured with the best materials",
        "desc": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const img = document.getElementById('headerImg');
const head = document.getElementById('headerHead');
const para = document.getElementById('headerPara');
let index = 0;

prevBtn.addEventListener('click', () => {
    if(index > 0){
        index--;
        img.src = data[index].img;
        head.innerHTML = data[index].head;
        para.innerHTML = data[index].desc;
    }
});
nextBtn.addEventListener('click', () => {
    if(index < data.length-1){
        index++;
        img.src = data[index].img;
        head.innerHTML = data[index].head;
        para.innerHTML = data[index].desc;
    }
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-menu a");
let menuOn = false;
hamburger.addEventListener("click", function(){
    menuOn = !menuOn;
    if(menuOn){
        hamburger.src = "./images/icon-close.svg";
    }else{
        hamburger.src = "./images/icon-hamburger.svg";
    }
    navMenu.classList.toggle("active");
})
navLink.forEach((item) => {
     item.addEventListener("click", function(){
        menuOn = !menuOn;
        if(menuOn){
            hamburger.src = "./images/icon-close.svg";
        }else{
            hamburger.src = "./images/icon-hamburger.svg";
        }
       navMenu.classList.remove("active");
     })
});