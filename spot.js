console.log("Hello world")

let index = 0;
let songIndex = 0;
let audioElement = new Audio("0.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "Srivalli", filePath : "jhalak.mp3", coverPath : "sri.jpg"},
    {songName : "Man mast magan", filePath : "mast.mp3", coverPath : "mastc.jpg"},
    {songName : "Ilahi", filePath : "ilahi.mp3", coverPath : "ilahic.jpg"},
    {songName : "Aarambh Hai Prachand", filePath : "arb.mp3", coverPath : "ar.jpg"},
    {songName : "Srivalli", filePath : "jhalak.mp3", coverPath : "sri.jpg"},
    {songName : "Srivalli", filePath : "jhalak.mp3", coverPath : "sri.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName ;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
masterSongName.innerText = songs[songIndex].songName;
audioElement.src =`${songIndex}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

    
document.getElementById('next').addEventListener('click',()=>{
if (songIndex>=5){
    songIndex = 0;
}
else{
    songIndex +=1;
}
audioElement.src =`${songIndex}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
    })

//end..............................
function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
                }