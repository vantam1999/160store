const navHeader = function() {
    var navItem = document.querySelectorAll('.nav .has-dropdown');          
    var menu = document.querySelector('.menu');
    var menuHome = document.querySelector('.menu__home');

    window.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop >= 250) {
            menu.style.position = "fixed";
            menu.style.top = "0";
            menu.style.zIndex = "1000";
            menu.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px -2px 6px 0px";
            menuHome.style.padding = "0";
        } else {
            menu.style.position = "relative";
            menu.style.boxShadow = "none";
            menuHome.style.padding = "10px 0";
        }
    });

    function activeHover(e) {                 
        var dropdown = e.target.nextElementSibling;   
        var dropList = dropdown.children[0];
        var dropListHeight = dropList.offsetHeight;     
        dropdown.classList.add('dropdown__active');        
        dropdown.style.height = dropListHeight + "px";        
    }
    function removeHover(e) {
        var dropdown = e.target.nextElementSibling;       
        dropdown.classList.remove('dropdown__active');
        dropdown.style.height = "0";
    }
    navItem.forEach( item => {
        item.addEventListener('click', function(e) {                         
            if(!e.target.nextElementSibling.classList.contains('dropdown__active')) {
                activeHover(e);
            } else {
                removeHover(e);
            }
        });
    });
};
const effectSocial = function() {
    var btnOpen = document.querySelector('.contact__social--open');
    var itemSocial = document.querySelectorAll('.contact__social li');
    var isClick = false;

    function onOpen() {       
        for(let i = 0; i < itemSocial.length; i++) {
            itemSocial[i].style.transition = "all .4s";
            itemSocial[i].style.transitionDelay = i*0.08+'s';
        }        
        itemSocial[0].style.transform = "translate(0, -58px) rotate(720deg)";
        itemSocial[1].style.transform = "translate(-46px, -45px) rotate(720deg)";
        itemSocial[2].style.transform = "translate(-58px, 0px) rotate(720deg)";
        itemSocial[3].style.transform = "translate(-46px, 45px) rotate(720deg)";
        itemSocial[4].style.transform = "translate(0, 58px) rotate(720deg)";
    }
    function onClose() {        
        itemSocial[0].style.transform = "translate(0, 0) rotate(0)";
        itemSocial[1].style.transform = "translate(0, 0) rotate(0)";
        itemSocial[2].style.transform = "translate(0, 0) rotate(0)";
        itemSocial[3].style.transform = "translate(0, 0) rotate(0)";
        itemSocial[4].style.transform = "translate(0, 0) rotate(0)";
    }

    btnOpen.addEventListener('click', function() {
        if(!isClick) {
            onOpen();            
        } else {
            onClose();            
        }
        isClick = !isClick;
    });
};

window.addEventListener('load', function() {
    var wrapper = document.querySelector('.wrapper');
    var loading = document.querySelector('.loading');
    wrapper.style.display = 'block';
    loading.style.display = 'none';
    
    navHeader();
    effectSocial();    
});
