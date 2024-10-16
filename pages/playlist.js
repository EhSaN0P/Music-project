let main = document.querySelector("body > .con-main")
let section = document.createElement("div")
function playlist(){
    for(let i = 0 ; i < 10 ; i++){

let playlist = document.createElement("div")
let img = document.createElement("img")
let info = document.createElement("div")
let h4 = document.createElement("h4")
let p = document.createElement("p")
let checkbox = document.createElement("input")

checkbox.type = "checkbox"
h4.innerText = "Juhda"
p.innerText = "Lady Gaga"


img.src = "image\\Avatar.jpg"



playlist.style.display = "flex"
playlist.style.width = "800px"
playlist.style.height = "200px"
playlist.style.justifyItems = "center"
playlist.style.flexDirection = "row"
playlist.style.color = "white"


img.style.width = "15%"
img.style.height = "50%"
img.style.marginLeft = "15%"
img.style.borderBottomLeftRadius = "15px"
img.style.borderTopLeftRadius = "15px"

info.style.background = "linear-gradient(to right,var(--leftBarBgColor1),var(--leftBarBgColor2))"
info.style.width = "80%"
info.style.height = "50%"
info.style.display = "flex"
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
playlist.appendChild(checkbox)
info.appendChild(h4)
info.appendChild(p)
console.log(main);


let playlistBox = document.createElement("div")
if(checkbox.checked == true)
    
    playlistBox.className = ("playlist-box")
    main.appendChild(playlistBox)
    playlistBox.appendChild(section)
    
}
}
console.log(main);
playlist()

