/*
Projects Slider Java Script
Coder: Royce Wilson
*/ 

//Declaring const
const slides = document.querySelectorAll(".slides img");
const titles = document.querySelectorAll(".titles h2");
const desc = document.querySelectorAll(".description p");

let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

//Creating functions
function initializeSlider(){
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        titles[slideIndex].classList.add("displaySlide");
        desc[slideIndex].classList.add("displaySlide");
    }
    
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    titles.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    titles[slideIndex].classList.add("displaySlide");

    desc.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    desc[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}