// Get elements
const player = document.querySelector('.player');
const vidElem = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');


const toggle = player.querySelector('.toggle');
const play = player.querySelector('[title="Toggle Play"]');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges= player.querySelectorAll('.player__slider');
const ranges= player.querySelector('.full_screen');


// build functions
function togglePlay(){
    vidElem.paused? vidElem.play() : vidElem.pause();     
};

function updateButton(){
    console.log(this.paused, " play/pause");
    const icon = this.paused? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    vidElem.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    vidElem[this.name] = this.value;
   // debugger;
}

function handleProgress(e){
    let percent = vidElem.currentTime/vidElem.duration * 100 + '%';
    progressBar.style.flexBasis = percent;
}
let mousedown = false;
function setFlag(e){
   e.type == 'mousedown'? mousedown = true: mousedown = false;
}
function scrub(e){
    if(e.type == 'mousemove'&& mousedown == false) return;
    let fraction = e.layerX/this.clientWidth; 
    vidElem.currentTime = fraction * vidElem.duration;
}


// hook up event listeners 

vidElem.addEventListener('click', togglePlay);
vidElem.addEventListener('play', updateButton);
vidElem.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach((x)=> x.addEventListener('click', skip));
ranges.forEach((x)=> x.addEventListener('change', handleRangeUpdate));
vidElem.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', setFlag);
progress.addEventListener('mouseup', setFlag);
//progress.addEventListener('mouseout', setFlag);
