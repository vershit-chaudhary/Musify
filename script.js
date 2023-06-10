console.log("welcome to spotify");
let songindex=0;
let AudioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById("gif");

let songs=[
    {songName:"Dil Diyan Gallan",filepath:"song/1.mp3",coverPath:"cover1.jpg"},
    {songName:"Naina",filepath:"song/1.mp3",coverPath:"cover2.jpg"},
    {songName:"Baawra Mann",filepath:"song/1.mp3",coverPath:"cover3.jpg"},
    {songName:"Nazarre",filepath:"song/1.mp3",coverPath:"cover4.jpg"},
    {songName:"Gaddi Pichhe Naa",filepath:"song/1.mp3",coverPath:"cover5.jpg"},
    {songName:"Humma Humma",filepath:"song/1.mp3",coverPath:"cover6.jpg"},
];
masterplay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        AudioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
AudioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    myprogressbar.value=progress;
});
myprogressbar.addEventListener('change',()=>{
    AudioElement.currentTime=myprogressbar.value*AudioElement.duration/100;
})
const makeallplays =()=>{
    Array.from(document.getElementsByClassName('music')).forEach(element=> {
        element.classList.add('fa-circle-play');
    });
}
Array.from(document.getElementsByClassName('fa-regular')).forEach(element=> {
    element.addEventListener('click',(e)=>{
        makeallplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        AudioElement.src="1.mp3";
        AudioElement.play();
    })
});