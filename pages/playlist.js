
function playlist(){
    for(let i = 0 ; i < 10 ; i++){
        let main = document.querySelectorAll("body > .song-playlist").item(0)
        let section = document.createElement("div")
        
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
section.style.marginLeft = "250px"
section.style.marginBottom = "-50px"



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



}
}


function list(){
    let lists = document.querySelectorAll("body > .con-main > .lists").item(0)
    let songs = document.createElement("div")
    songs.style.width = "150px"
    songs.style.height = "150px"
    songs.style.marginTop = "100px"
    songs.style.borderRadius = "20px"
    songs.style.background = "linear-gradient(to right,var(--leftBarBgColor1),var(--leftBarBgColor2))"
    songs.style.position = "absolute"
    songs.onclick = function(){
        songs.style.width = "1000px"
        songs.style.height = "600px"
        songs.style.transition = "1s"
    }
    songs.onmouseout = function(){
        songs.style.width = "150px"
        songs.style.height = "150px"
        songs.style.transition = "1s"
    }
    lists.appendChild(songs)
}
playlist()
list()

