let prev=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next')
let track_image=document.querySelector('#track_img')
let track=document.createElement('audio');
let title=document.querySelector('#title');
let recent_volume=document.querySelector('#Volume')
let volume_show=document.querySelector('#volume_show');
let duration_slider=document.querySelector('#dur_slider');
let sound=document.querySelector('#vol_icon');

let timer;
let mute_voice=true;
let autoplay=0;
let index_no=0;

let play_song=false;

let All_Song=[
    {
        name:'Avijog',
        path:'music/Avijog.mp3',
        img:"images/img1.jpg"

    },

    {
        name:'Mi Medicina',
        path:'music/cnco.mp3',
        img:"images/img3.jpg"

    },
    {
        name:'Perfect',
        path:'music/sheeran.mp3',
        img:"images/img2.jpg"

    }

];

function load_track(index_no)
{
    track.src=All_Song[index_no].path;
    track_image.src=All_Song[index_no].img;
    title.innerHTML=All_Song[index_no].name;
    track.load();
}
load_track(index_no);

function just_play()
{
    if(play_song==false)
    {
        playsong();
    }
    else
    {
        pausesong();
    }
}

function playsong()
{
    track.play();
    play_song=true;
    play.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';

}

function pausesong()
{
    track.pause();
    play_song=false;
    play.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';

}

function next_song()
{
    if(index_no < All_Song.length)
    {
        index_no+=1;
        load_track(index_no);
        playsong();
        console.log(index_no);
    }
    else
    {
        index_no=0;
        load_track(index_no);
        playsong();
    }
}

function prev_song()
{
    if(index_no>0)
    {
        index_no-=1
        load_track(index_no);
        playsong();
    }else{
        index_no=All_Song.length;
        load_track(index_no);
        playsong();
    }
}

function volume_change()
{
    volume_show.innerHTML=recent_volume.value;
    console.log(recent_volume.value);
    track.volume=recent_volume.value/100;

}

function change_dur()
{
    slide_pos=track.duration * (duration_slider.value/100);
    track.currentTime=slide_pos;
    
}

function slider()
{
   

}

function mute_kro()
{
    track.volume=0;
    
    mute_voice=true
    sound.innerHTML='<i class="fa fa-volume-off" aria-hidden="true"></i>';

}

function unmute()
{
    track.volume=1;
 
    mute_voice=false
    sound.innerHTML='<i class="fa fa-volume-up" aria-hidden="true" ></i>';

}



function mute()
{
    if(mute_voice==true)
    {
        unmute();
    }
    else
    {
        mute_kro();
    }
}

