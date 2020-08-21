const carouselBanner = function() {
    var carInner = document.querySelector('.carousel__banner .carousel__inner');
    var carItem = document.querySelectorAll('.carousel__banner .carousel__banner--item');
    var prev = document.querySelector('.controls__prev');
    var next = document.querySelector('.controls__next');
    var wWindow = window.innerWidth;    
    var wCarInner = carItem.length * wWindow;   
    var wItem = wWindow; 

    // === set width === //
    carInner.style.width = wCarInner + "px";
    carItem.forEach( item => {
        item.style.width = wWindow + "px";
    });
    
    function moveSlide(w) {
        for(let i = 0; i < carItem.length; i++) {          
            carItem[i].style.transform += "translateX("+ w +"px)";
            carItem[i].style.transition = "all .4s";
        }
    }

    next.addEventListener('click', function() {               
        if(wItem < wCarInner) {
            moveSlide(-wWindow);
            wItem += wWindow;    
        } else {
            wItem = wWindow;
            for(let i = 0; i < carItem.length; i++) {          
                carItem[i].style.transform = "translateX(0px)";
                carItem[i].style.transition = "all .4s";
            }
        }             
        console.log(wItem);      
    });
    prev.addEventListener('click', function() {
        if(wItem > wWindow) {
            moveSlide(wWindow);
            wItem -= wWindow;
        } else {
            wItem = wCarInner;            
            let wTemp = wCarInner - wWindow;
            for(let i = 0; i < carItem.length; i++) {          
                carItem[i].style.transform += "translateX("+ -wTemp +"px)";
                carItem[i].style.transition = "all .4s";
            }
        }     
        console.log(wItem);
    });
};
const buttonMore = function() {
    
};
const sliderProduct = function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        
        responsive:{
            0:{
                items:1,                
            },
            600:{
                items:3,              
            },
            1100:{
                items:5,                
            }
        }
    });
};


document.addEventListener('DOMContentLoaded', function() {        
    carouselBanner();  
    buttonMore();
    sliderProduct();    
});
