document.addEventListener("DOMContentLoaded",function(){

    let menubar = document.querySelector(".main_menu");
    window.addEventListener("scroll",function(){

        if(window.scrollY > menubar.offsetHeight){
            menubar.classList.add("sticky"); 

            
        }else{
            menubar.classList.remove("sticky");
        }
    });

});