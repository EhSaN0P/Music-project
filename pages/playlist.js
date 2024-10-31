
for (let i = 0; i < 5; i++) {
    
let musicSec = document.createElement("section");
musicSec.classList = "musicSec p-1 rounded m-3 ";


let musicSecImageContainer = document.createElement("div");
musicSecImageContainer.classList = "musicSec-image-con col-3  ";



let musicImg = document.createElement("img");
musicImg.src ="image/image 12.jpg";


let musicInfo = document.createElement("div");
musicInfo.classList = "col-5 infoo";
let songName = document.createElement("h4");
songName.innerText = "Song Name";
let artistName = document.createElement("h5");
artistName.innerText = "artist";

let audioControllerDiv = document.createElement("div");
audioControllerDiv.classList = "col-3  audio-controls";
let audio = document.createElement("audio");
audio.classList = "music";
audio.src = "audio/@Faravahr_Sound - 666 MYSTERY   Member.mp3"
let musicPlayBtn = document.createElement("button");
musicPlayBtn.classList = "music-play";
musicPlayBtn.innerText = "Play";

let addMusicCon = document.createElement("div");
addMusicCon.classList ="col-1 add"
// let addMusic = document.createElement("i");
// addMusic.classList = "addMusictoPl"
// addMusic.innerText="+";
// addMusic.addEventListener



let musicbar = document.getElementsByClassName("musics").item(0);

musicbar.appendChild(musicSec);

musicSec.appendChild(musicSecImageContainer);
musicSecImageContainer.appendChild(musicImg);

musicSec.appendChild(musicInfo);
musicInfo.appendChild(songName);
musicInfo.appendChild(artistName);

musicSec.appendChild(audioControllerDiv);
audioControllerDiv.appendChild(audio);
audioControllerDiv.appendChild(musicPlayBtn);

musicSec.appendChild(addMusicCon);

//  addmusic to playlist
// addMusic.addEventListener("click", element=>{

    
    

// })


}



function showPlaylist(){
    let playlistCreat =  document.getElementById("playlistMenu");
    playlistCreat.style.transform = "scale(1)"
    playlistCreat.style.opacity = "1"
    

}

function hideCreatePlaylist() {
    let playlistCreat =  document.getElementById("playlistMenu");
    playlistCreat.style.transform = "scale(0)"
    playlistCreat.style.opacity = "0"
}


// creating playlist


function creatingPlaylist() {
    let  playlistName = document.getElementById("playlistName").value ;
    
    

    
    if(document.getElementById("playlistName").value.length>0){
        let playlistCreat =  document.getElementById("playlistMenu");
        playlistCreat.style.transform = "scale(0)"
        playlistCreat.style.opacity = "0"
    
    
        let musicPlace = document.getElementById("musicsPlace");
    
        let plyList = document.createElement("article");
        plyList.classList = "yourPlaylists";
        let plyImg = document.createElement("img");
        // plyImg.src = y;

        plyImg.src = "image/image 12.jpg"
        
        // ساخت پلی لیست
                 plyList.addEventListener("click",e=>{
                    // گرفتن تگ بادی و ساخت یک کانتینر برای پلی لیست
                    let body = document.getElementsByTagName("body").item(0);
                    let CurrentplaylistMenu = document.createElement("article");
                    CurrentplaylistMenu.id = "CurrentplaylistMenu"
                    CurrentplaylistMenu.classList = "p-2 col-1  gap-5";
        
                    // اسم پلی لیست
                    let CurrentplaylistMenuH2 = document.createElement("h2");
                    CurrentplaylistMenuH2.id = "plname"
                    CurrentplaylistMenuH2.style.textTransform = "capitalize";
                    CurrentplaylistMenuH2.style.color = "rgb(0, 174, 255)";
                    CurrentplaylistMenuH2.style.textAlign = "center";
                    CurrentplaylistMenuH2.innerText = playlistName
                    // عکس پلی لیست
                    let CurrentplaylistMenuImg = document.createElement("img")
                    CurrentplaylistMenuImg.classList = "img-fluid offset-3"
                    CurrentplaylistMenuImg.style.width = "70%"
                    CurrentplaylistMenuImg.style.height = "20rem"
                    CurrentplaylistMenuImg.src = "image/image 12.jpg"
                    // ساخت یک یو ال برای ال ای هایی که نگه دارنده موزیک ها هستند
                    let CurrentplaylistMenuUl = document.createElement("ul")
                    CurrentplaylistMenuUl.classList = "list-group"
                    // close ایجاد گزینه   
                    let CurrentplaylistMenuClose = document.createElement("div")
                    CurrentplaylistMenuClose.classList = "x"
        
                    // سطر پیش فرض اول که برای دکمه های حذف و اضافه هست
                    let btnLis = document.createElement("li")
                    btnLis.classList = "list-group-item active"
                    btnLis.id = "firstLi"

                    //ایجاد دکمه اضافه کردن اهنگ
                    let addbtn = document.createElement("a")
                    addbtn.role ="button"
                    addbtn.classList = "btn btn-primary"
                    addbtn.style.transition = "500ms"
                    addbtn.href = "#"
                    addbtn.innerText = "add song"
                    addbtn.addEventListener("click",e=>{

                            // اضافه کردن دکمه + به همه المان های موزیک//


                                let addmusicSec =  document.getElementsByClassName("musicSec")
                            // for adding add icone
                                for (let i = 0; i < addmusicSec.length; i++) {

                                    let addMusic = document.createElement("i");
                                    addMusic.classList = "addMusictoPl"
                                    addMusic.innerText="+";

                                    addMusic.addEventListener("click",event=>{
                                     addMusic.id = "addMusic+Clicked"

                                         let informations = document.getElementById("addMusic+Clicked")
                                        //  let musiceName =  informations.firstChild.innerText
                                        //  let artistName =  informations.lastChild.innerText
                                         let parentElement  = informations.parentElement.parentElement
                                         let info = parentElement.children[1]; 

                                         let songName = info.children[0].innerHTML
                                         console.log(songName);
                                         
                                         let artistName = info.children[1].innerHTML
                                        console.log(artistName);
                                        
                                         let ul = document.getElementsByClassName("list-group").item(0)
                                         
                                         let songLis = document.createElement("li")
                                         songLis.classList = "list-group-item d-flex gap-1"
                                         songLis.id = "musicLi"                                         
                                       
                                         let imgmm = document.createElement('img')
                                         imgmm.classList = "imgmm col-3"//
                                         imgmm.src = "image/image 12.jpg"
                                         
                                         let h3 = document.createElement("h3")
                                         h3.classList = "h3MusicName col-3"
                                         h3.innerText = songName
                                   
                                         let h4 = document.createElement("h4")
                                         h4.classList = "h4ArtistName col-3"
                                         h4.innerText = artistName

                                         let musicPlayBtn = document.createElement("button");
                                            musicPlayBtn.classList = "music-play-inplaylist col-3";
                                            musicPlayBtn.innerText = "play";
                                               
                                         ul.appendChild(songLis)
                                         songLis.appendChild(imgmm)
                                         songLis.appendChild(h3)
                                         songLis.appendChild(h4)
                                         songLis.appendChild(musicPlayBtn)
                                                        
                                         addMusic.id = "" 

                                        //  lets go for img
                                         


                                    })

                                    addmusicSec[i].lastElementChild.appendChild(addMusic)
                            
                                    

                                }
                                
    

                            



                                // پنهان شدن دکمه های حذف و اضافه
                            let btnnn = document.querySelectorAll("#firstLi > a")
                           btnnn.item(0).style.transition = "500ms"
                           btnnn.item(1).style.transition = "500ms"
                            btnnn.item(0).style.scale = "0"
                            btnnn.item(1).style.scale = "0"

                            
                            
                            
                            

                            
                    })

                    // اضافه کردن دکمه - به همه المان های موزیک
                    let removebtn = document.createElement("a")
                    removebtn.role ="button"
                    removebtn.classList = "btn btn-danger"
                    removebtn.href = "#"
                    removebtn.innerText = "remove song"
                    removebtn.style.transition = "500ms"

                    removebtn.addEventListener("click",e=>{
                        let addmusicSec =  document.getElementsByClassName("musicSec")

                        for (let i = 0; i < addmusicSec.length; i++) {

                            let removeMusic = document.createElement("i");
                            removeMusic.classList = "addMusictoPl"
                            removeMusic.innerText="-";

                            addmusicSec[i].lastElementChild.appendChild(removeMusic)
                            
                        }

                            // removeMusic.addEventListener

                        // پنهان شدن دکمه های حذف و اضافه
                        let btnnn = document.querySelectorAll("#firstLi > a")
                        btnnn.item(0).style.transition = "500ms"
                        btnnn.item(1).style.transition = "500ms"
                         btnnn.item(0).style.scale = "0"
                         btnnn.item(1).style.scale = "0"


                    })

                    // بستن کانتینر پلی لیست
                    let CurrentplaylistMenuCloseP = document.createElement("p")
                    CurrentplaylistMenuCloseP.innerText = "x"
                    CurrentplaylistMenuCloseP.addEventListener("click",ee=>{
                        body.removeChild(CurrentplaylistMenu)
                        let addmusicSec =  document.getElementsByClassName("musicSec")
                        for (let i = 0; i < addmusicSec.length; i++) {



                            addmusicSec[i].lastElementChild.lastElementChild.remove()
                            
                            
                            
                        }
                        
                        

                    })
        

                    // اضافه کردن المان ها به سند
                    body.appendChild(CurrentplaylistMenu)
                    CurrentplaylistMenu.appendChild(CurrentplaylistMenuH2)
                    CurrentplaylistMenu.appendChild(CurrentplaylistMenuImg)
                    CurrentplaylistMenu.appendChild(CurrentplaylistMenuUl)
                    CurrentplaylistMenuUl.appendChild(btnLis)
                    btnLis.appendChild(addbtn)
                    btnLis.appendChild(removebtn)
                    CurrentplaylistMenu.appendChild(CurrentplaylistMenuClose)
                    CurrentplaylistMenuClose.appendChild(CurrentplaylistMenuCloseP)
        
        
                 })

                
        let playlistSongName = document.createElement("p")
        playlistSongName.innerText = playlistName;
    


        musicPlace.appendChild(plyList);
        plyList.appendChild(plyImg)
        plyList.appendChild(playlistSongName)
        
        document.getElementById("playlistName").style.backgroundColor = "green"
        document.getElementById("playlistName").value = ""

        // playlist on click 
    


    }
    
    else {
        document.getElementById("playlistName").style.backgroundColor = "red"
        
    }

    

}

