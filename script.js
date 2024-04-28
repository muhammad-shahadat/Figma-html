const product = document.querySelectorAll(".product");
let x = 0;
let movePerClick = 30;
let maxMove = 225;

let mobileView = window.matchMedia("(max-width:768px)");
if (mobileView.matches) {
    movePerClick = 120;
    maxMove = 650;
}


let prevSlider = ()=>{
    x = x - movePerClick;
    for (let i= 0; i<product.length; i++) {
        // @ts-ignore
        product[i].style.left = "-" + x + "%";
       
    }
   
}
let nextSlider = () =>{
    if (x >=maxMove) {
        x = 0;
        if (x=0) {
            x = x+movePerClick;
        }
        
    }
    
    else{
        x = x + movePerClick;
    }

    
    for(let i = 0; i<product.length; i++) {
        // @ts-ignore
        product[i].style.left = "-" + x + "%";
        
    }
   
}

