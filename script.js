let searchBtn = document.querySelector('#search-btn'), searchBar = document.querySelector('.search-bar-container'),
formBtn=document.querySelector('#login-btn'),
loginForm=document.querySelector('.login-form-container'),
formClose=document.querySelector('#form-close'),
menu = document.querySelector('#menu-bar'),
navbar =document.querySelector('.navbar'),
videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active')
})
formClose.addEventListener('click', () =>{ 
    loginForm.classList.remove('active')
})
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})
var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraktion:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});
var swiper = new Swiper(".brand-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraktion:false,
    },
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:5,
        },
    },
});


