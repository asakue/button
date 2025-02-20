const soundButton = document.getElementById('soundButton');
let currentAudio = null;

const sounds = [
    'sounds/sound1.mp3',
'sounds/sound2.mp3',
'sounds/sound3.mp3',
'sounds/sound4.mp3',
'sounds/sound5.mp3',
'sounds/sound6.mp3',
'sounds/sound7.mp3',
'sounds/sound8.mp3',
'sounds/sound9.mp3',
'sounds/sound10.mp3',
'sounds/sound11.mp3'
];

soundButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    currentAudio = new Audio(randomSound);
    currentAudio.play();

    soundButton.textContent = 'Playing...';
    currentAudio.addEventListener('ended', () => {
        soundButton.textContent = 'Play Sound';
    });

    currentAudio.addEventListener('error', () => {
        alert('Ошибка при загрузке звука. Попробуйте еще раз.');
        soundButton.textContent = 'Play Sound';
    });
});




