$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['Previous','Next'],
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})