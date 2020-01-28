const holder = document.getElementById('audioHolder')

audio = new Audio("audio/governer.wav");




audio.addEventListener('ended', function () {
    audio.src = "audio/forever.wav";
    audio.pause();
    audio.load();
    audio.play();
});
holder.appendChild(audio)