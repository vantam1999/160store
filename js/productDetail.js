const previewImage = function() {
    var imageSmall = document.querySelectorAll('.type__imgSmall div');
    var imageLarge = document.querySelector('.preview__imgLarge');
    
    imageSmall.forEach((item, index)=> {
        item.addEventListener('click', function(e){
            let srcImg = e.target.getAttribute('src');
            imageLarge.setAttribute('src', srcImg);          
        });
    });
};
const activeSize = function() {
    var listSize = document.querySelectorAll('.list__size div');

    listSize.forEach(item => {
        item.addEventListener('click', function(e) {
            for(let i = 0; i < listSize.length; i++) {
                listSize[i].classList.remove('active__size');
            }
            e.target.classList.add('active__size');
        });
    });
};
const chooseQuantity = function() {
    var quantity = document.querySelector('.quantity');
    var minus = document.querySelector('.minus');
    var plus = document.querySelector('.plus');
    var valQuantity = parseInt(quantity.value);

    function decreaseQuantity() {
        valQuantity--;
        if(valQuantity >= 1) {
            quantity.setAttribute('value', valQuantity);
        } else {
            valQuantity = 1;
            return;
        }        
    }   
    function increaseQuantity() {
        valQuantity++;
        if(valQuantity <= 20) {
            quantity.setAttribute('value', valQuantity);
        } else {
            valQuantity = 20;
            return;
        } 
    }
    minus.addEventListener('click', function() {
        decreaseQuantity();
    });
    plus.addEventListener('click', function() {
        increaseQuantity();
    });
};

document.addEventListener('DOMContentLoaded', function() {
    previewImage();
    activeSize();
    chooseQuantity();
});