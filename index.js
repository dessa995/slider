$(document).ready(function(){

    // Ovo je JSON
    const objectList = [
        {
            id: 1,
            name: "pera", 
        },
        {
            id: 2,
            name: "mika",
        },
        {
            id: 3,
            name: "laza",
        },
        {
            id: 4,
            name: "jovan",
        },
        {
            id: 5,
            name: "mirko",
        },
    ];

    objectList.forEach(object => {
        $(".slider-hero").append(`
            <div class="first-slide">
                <p class="slide-content">${object.id}</p>
                <p class="slide-content">${object.name}</p>
            </div>
        `)
    });

    $('.slider-hero').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

  });