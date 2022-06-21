const feature=document.querySelector(".feature");
const arrowDwn=document.querySelector(".arrow-dwn");
const arrowUp=document.querySelector(".arrow-up");
const company=document.querySelector(".company");
const arrowDwn_2=document.querySelector(".arrow-dwn-2");
const arrowUp_2=document.querySelector(".arrow-up-2");
const drpdwn_feature=document.querySelector(".drpdwn-feature");
const drpdwn_company=document.querySelector(".drpdwn-company");
const hambtn=document.querySelector(".hamburger");
const closebtn=document.querySelector(".close-btn");
const modalWin=document.querySelector(".modal-window");

feature.addEventListener("click",()=>{
    arrowDwn.classList.toggle("none");
    arrowUp.classList.toggle("none");
    drpdwn_feature.classList.toggle("none");
    drpdwn_feature.classList.toggle("elementToFadeIn");
})

company.addEventListener("click",()=>{
    arrowDwn_2.classList.toggle("none");
    arrowUp_2.classList.toggle("none");
    drpdwn_company.classList.toggle("none");
    drpdwn_company.classList.toggle("elementToFadeIn");
})

modalWin.classList.toggle("elementToFadeIn");
hambtn.addEventListener("click",()=>{
    modalWin.style.display="flex";
})

closebtn.addEventListener("click",()=>{
    modalWin.style.display="none";
})