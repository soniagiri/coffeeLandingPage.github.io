const navToggle = document.querySelector(".toggle-btn")
const closeBtn = document.querySelector(".ri-close-fill")
const hamburger = document.querySelector(".ri-menu-fill")
const links = document.querySelector(".links")

navToggle.addEventListener("click", ()=>{
    links.classList.toggle("show-links")
    hamburger.classList.toggle("hamburger-hide")
    closeBtn.classList.toggle("close")
    document.body.classList.toggle("overflow")
})