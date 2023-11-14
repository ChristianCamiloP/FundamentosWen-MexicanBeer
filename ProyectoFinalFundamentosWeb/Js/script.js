var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev" 
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    loopFillGrouopWithBlank:true,
   
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev" 
    },
    breakpoints :{
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        950:{
            slidesPerView:3
        }

    }
 
});
