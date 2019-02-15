// Get elements
const player = document.querySelector('.player');
const vidElem = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');


const toggle = player.querySelector('.toggle');
const play = player.querySelector('[title="Toggle Play"]');
const skipButtons = player.querySelector('[dataSkip]');
const ranges= player.querySelector('.player__slider');


// build functions
function togglePlay(){
    vidElem.paused? vidElem.play() : vidElem.pause();     
};

function updateButton(){
    console.log(this.paused, " play/pause");
    const icon = this.paused? '►' : '❚ ❚';
    
    console.log(icon);
    toggle.textContent = icon;

}
// hook up event listeners 

vidElem.addEventListener('click', togglePlay);
vidElem.addEventListener('play', updateButton);
vidElem.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);