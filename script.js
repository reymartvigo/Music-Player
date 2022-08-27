let track_image = document.querySelector(".track-image")
let title = document.querySelector("#title")
let singer = document.querySelector("#singer")
let volume_show = document.querySelector("#volume_show")
let volume = document.querySelector("#volume")
let pre = document.querySelector("#pre")
let play = document.querySelector("#play")
let next = document.querySelector("#next")
let auto = document.querySelector("#auto")
let show_duration = document.querySelector("#show_duration")
let slider = document.querySelector("#duration_slider")

let timer; 
let index = 0 ;
let autoplay = 0;
let playing_song = false;

let track = document.createElement('audio');


// song objects 
let songs = [{
    name: "Over the Top (Cover)",
    path: "music/music1.mp3",
    image: "image/image1.jpg",
    singer: "ROMI"
},
{
    name: "Paper Moon (Cover)",
    path: "music/music2.mp3",
    image: "image/image2.jpg",
    singer: "ROMI"
},
{
    name: "The HERO (Cover)",
    path: "music/music3.mp3",
    image: "image/image3.jpg",
    singer: "Rommie"
}
];

// loading tracks

function load_track(index){
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    track_image.src = songs[index].image;
    singer.innerHTML = songs[index].singer;
    track.load();
    timer = setInterval(range_slider, 1000);
} 

load_track(index);

function mute_sound(){
    track.volume = 0 ;
    volume.value = 0
    volume_show.innerHTML = 0;
}

// play song condition

function justplay() {
	if (playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


//play song 
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class= "fa fa-pause"> </i>';
}

// pause song

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class= "fa fa-play"></i> '
}

// next song

function next_song(){
    if(index < songs.length - 1 ){
        index += 1 ;
        load_track(index)
        playsong();
    }else{
        index = 0 ;
        load_track(index)
        playsong();
    }
}

// prev song 
 function previous_song(){
    if(index > 0){
        index -= 1 ; 
        load_track(index)
        playsong();
    }else{
        index = songs.length
        load_track(index)
        playsong();
    }
 }

 // vol. change 

 function volume_change(){
    volume_show.innerHTML = volume.value
    track.volume = volume.value / 100
 }

 // changing duration 

 function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

 function range_slider(){
    let position = 0 ;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100/ track.duration)
        slider.value = position
    }   
// play next song if current song is over 
    if(track.ended){
        play.innerHTML = '<i class="fa fa-play"</i>';
        if(autoplay == 1 ){
            index += 1;
            load_track(index);
            playsong();
        }
 }
}

// auto play function
 function autoplay_switch(){
    if(autoplay== 1 ){
        autoplay = 0;
        auto.style.background = "none"
        auto.style.color= "#000"
    }else {
        autoplay = 1;
        auto.style.background = "#000";
        auto.style.color = "#FFF";
    }
 }
