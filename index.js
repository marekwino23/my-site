document.addEventListener("DOMContentLoaded", function(){
    let box = document.querySelector(".flex-parent")
    box.addEventListener("scroll", function(e){
        box.style.display="flex";
    })
})