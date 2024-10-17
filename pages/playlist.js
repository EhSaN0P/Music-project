
function playlist(){
    let arrimg = ["image\\Avatar.jpg" , "image\\image 1_10.jpg" , "image\\image 3.jpg" , "image\\image 6.jpg" , "image\\image 7.jpg" , "image\\image 8.jpg"]
    for(let i = 0 ; i < 6 ; i++){
        let main = document.querySelectorAll("body > .song-playlist").item(0)
        let section = document.createElement("div")
        
let playlist = document.createElement("div")
let img = document.createElement("img")
let info = document.createElement("div")
let h4 = document.createElement("h4")
let p = document.createElement("p")
let btn = document.createElement("button")


let musiclist = document.getElementById("musiclist")
let myplaylist = document.getElementById("myplaylist")

h4.innerText = "Juhda"
p.innerText = "Lady Gaga"

btn.innerText = "Add to playlist"
btn.style.padding = "5px"
btn.style.position = "absolute"
btn.style.marginLeft = "85%"
btn.style.background = "linear-gradient(to right,var(--leftBarBgColor1),var(--leftBarBgColor2))"
btn.style.border = "0"
btn.style.borderRadius = "15px"



img.src = arrimg[i]



section.style.marginLeft = "250px"
section.style.marginBottom = "-50px"


main.style.display = "none"



playlist.style.display = "flex"
playlist.style.width = "1200px"
playlist.style.height = "200px"
playlist.style.justifyItems = "center"
playlist.style.flexDirection = "row"
playlist.style.color = "white"


img.style.width = "15%"
img.style.height = "60%"
img.style.marginLeft = "15%"
img.style.borderBottomLeftRadius = "15px"
img.style.borderTopLeftRadius = "15px"



info.style.background = "linear-gradient(to right,var(--leftBarBgColor1),var(--leftBarBgColor2))"
info.style.width = "80%"
info.style.height = "60%"
info.style.display = "flex"
info.style.position = "relative"
info.style.flexDirection = "row"
info.style.alignItems = "center"
info.style.borderTopRightRadius = "15px"
info.style.borderBottomRightRadius = "15px"

h4.style.marginLeft = "5%"
h4.style.fontSize = "36px"

p.style.marginLeft = "5%"
p.style.fontSize = "16px"
p.style.opacity = "0.5"




main.appendChild(section)
section.appendChild(playlist)
playlist.appendChild(img)
playlist.appendChild(info)
info.appendChild(btn)
info.appendChild(h4)
info.appendChild(p)


musiclist.onclick = function(){
    musiclist.style.opacity = "1"
    main.style.display = "block"
    myplaylist.style.opacity = "0.2"
    main1.style.display = "none"
}
myplaylist.onclick = function(){
    musiclist.style.opacity = "0.2"
    myplaylist.style.opacity = "1"
    main.style.display = "none"
    main1.style.display = "block"
}



let main1 = document.querySelectorAll("body > .song-playlist1").item(0)
let section1 = document.createElement("div")
let caption = document.createElement("p")










}







}




playlist()



