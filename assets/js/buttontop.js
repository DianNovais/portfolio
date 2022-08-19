const button = document.querySelector("#back-top");
button.style.display = "none";

addEventListener("scroll", scrollTop);
        
function scrollTop(){
    const button = document.querySelector("#back-top");
    
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    button.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop= 0;
    });
        if(c > 700){
            button.style.display = "block";
        }
        else{
            button.style.display = "none";
        }
    
    };