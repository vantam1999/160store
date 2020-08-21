const navHeader = function() {
    var navItem = document.querySelectorAll('.nav .has-dropdown');          

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


window.addEventListener('load', function() {
    var wrapper = document.querySelector('.wrapper');
    var loading = document.querySelector('.loading');
    wrapper.style.display = 'block';
    loading.style.display = 'none';
    
    navHeader();    
});
