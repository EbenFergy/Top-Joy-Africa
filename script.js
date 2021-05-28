const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links")

navLinks.style.maxHeight = "0vh";


const sideMenu = () => {
    if(navLinks.style.maxHeight === "0vh"){
        navLinks.style.maxHeight = "50vh";
    }
    
    else{
        navLinks.style.maxHeight = "0vh";
    }
}