console.log("Welcome to My Music")
//Initialize the variable
let songIndex= 0
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from (document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Nine lakh Stars- Bipul Chhetri",filePath:"song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Arthur Gunn - Save Me Now (Official Music Video)",filePath:"song/2.mp3",coverPath: "covers/5.jpg"},
    {songName: "AURORA - Running With The Wolves",filePath:"song/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "BEEST - Sapana Haru Ferdai (Official Video)",filePath:"song/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "HAJARAW RAHARA   ANMOL GURUNG feat.",filePath:"song/5.mp3",coverPath: "covers/5.jpg"}
    ]

    songs.forEach((song, index) => {
        const songItem = songItems[index];
        const imgElement = songItem.querySelector("img");
        imgElement.src = song.coverPath;
        songItem.querySelector(".songName").innerText = song.songName;
    });    
    

//..audio element.play()


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-play');
        masterPlay.classList.add('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-pause');
        masterPlay.classList.add('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-play');
        gif.style.opacity = 0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeUpdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.add('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-pause');
//     });
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target);
//         makeAllPlays();
//         e.target.classList.remove('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-play');
//         e.target.classList.add('fa-sharp', 'fa-3x', 'fa-solid', 'fa-circle-pause');
//     });
// });

// // Function to handle song change when small play button is clicked
// const handleSongChange = (index) => {
//     if (index !== songIndex) { // Only change the song if it's different from the currently playing one
//         songIndex = index;
//         audioElement.src = songs[songIndex].filePath; // Change the audio source to the selected song
//         togglePlayPause(); // Start playing the new song
//     }
// };

// // Add event listeners to small play buttons to change the song when clicked
// playButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         handleSongChange(index);
//     });
// });
// Function to play the next song
