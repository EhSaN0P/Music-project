
    function creat(x){
        
        
        let sliderCard = document.createElement("article");
        sliderCard.classList = "slider-card p-3";
        
        let albums = document.getElementsByClassName("Albums-slider p-3");
        
        
        let sliderCardImg = document.createElement("img");
        
        sliderCardImg.src = x;
        
        let sliderCardSec1 = document.createElement("section");
        sliderCardSec1.classList = "slider-card-sec1   p-1";
        
        let sliderCardSec1Div = document.createElement("div");
        sliderCardSec1Div.classList = "slider-card-sec1-div";
        let h4 = document.createElement("h4");
        h4.innerText ="song name"
        let p = document.createElement("p");
        p.innerText ="artist"
        let i = document.createElement("i");
        i.classList = "fa fa-heart-o";
        
        let sliderCardSec2 = document.createElement("section");
        sliderCardSec2.classList = "slider-card-2";
        
        let i1 = document.createElement("i");
        i1.innerText ="N tracks"
        
        let i2 = document.createElement("i");
        i2.innerText ="N likes"
        
        let divPlay = document.createElement("div");
        divPlay.innerText ="▶"
        



        albums.item(0).appendChild(sliderCard)

        sliderCard.appendChild(sliderCardImg)

        sliderCard.appendChild(sliderCardSec1)

        sliderCardSec1.appendChild(sliderCardSec1Div)
        sliderCardSec1Div.appendChild(h4)
        sliderCardSec1Div.appendChild(p)
        sliderCardSec1.appendChild(i)
        
        sliderCard.appendChild(sliderCardSec2)
        sliderCardSec2.appendChild(i1)
        sliderCardSec2.appendChild(i2)
        sliderCardSec2.appendChild(divPlay)
        
        
        
        
        
        
    }
    let i= 0
    
    let imgArray = ["image/image 12.jpg","image/image 13.jpg","image/image 14.jpg","image/image 15.jpg","image/image 16.jpg","image/image 17.jpg","image/image 18.jpg"]
    
        for (let index = 0; index < imgArray.length; index++) {
            const x = imgArray[index];
            creat( x )            
        }



        let s = document.getElementsByClassName("Albums-slider p-3").item(0)

 
            
            
                


            

            

            

            

        