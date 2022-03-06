$('.reviews__slider').slick({
    infinite: true,
    fade: true,
    dots: true,
    centerMode: true,
    arrows: false,
    
    responsive: [
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 0.5,
              slidesToScroll: 1,
              fade: true,
            }
          },
    ]
});