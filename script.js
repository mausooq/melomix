console.log("hello world");
// initalizing
let audioelement =new Audio('chaleya.mp3');
let songindex =0;
let playsong=document.getElementById('playsong');
let playtrack=document.getElementById('playtrack');
let gif =document.getElementById('gif');
let item=Array.from(document.getElementsByClassName('item'));
let song=[
    {songName:"chaleya",filePath:"chaleya.mp3",coverPath:"covers/chaleya.jpg"},
    {songName:"bahara",filePath:"bahara.mp3",coverPath:"covers/bahara.jpg"},
    {songName:"Khali salam dua",filePath:"ksd.mp3",coverPath:"covers/ksd.jpg"},
    {songName:"latoo",filePath:"latoo.mp3",coverPath:"covers/latoo.jpg"},
    {songName:"marps",filePath:"marps.mp3",coverPath:"covers/marps.jpg"},
    {songName:"tum mile",filePath:"tummile.mp3",coverPath:"covers/tummile.jpg"},
    {songName:"tum se hi",filePath:"tuimsehi.mp3",coverPath:"covers/888888888tum_se_hi.jpg"},
];
// item.forEach((element,i) => {
//     console.log(element,i);
//     element.getElementsByTagName('img')[0].src=song[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = song[i].songName;
// });
// audioelement.play();
// playing music (play or pause)
playsong.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();//to play music
        playsong.classList.remove('fa-circle-play');
        playsong.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        playsong.classList.remove('fa-circle-pause');
        playsong.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})
// listen to EVENT for song track
audioelement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    // update track 
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    playtrack.value=progress;    
})
playtrack.addEventListener('change',()=>{
    audioelement.currentTime=playtrack.value*audioelement.duration/100;
})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add("fa-circle-play");
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            index=parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add('fa-circle-pause');
            audioelement.src='${index}.mp3';
            audioelement.currentTime=0;
            audioelement.play();
        })
});

