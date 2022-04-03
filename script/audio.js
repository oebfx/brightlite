const playerButton = document.querySelectorAll('.player-button'),
    audio = document.querySelector('audio'),
    timeline = document.querySelectorAll('.timeline'),
    soundButton = document.querySelectorAll('.sound-button'),
    playTime = document.querySelectorAll(".play-time"),
    soundTime = document.querySelectorAll(".sound-time"),
    playIcon = `
    <img src="img/play-audio.svg" alt="">
      `,
    pauseIcon = `
    <img src="img/stop-audio.svg" alt="">
      `,
    soundIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
    muteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;






function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playerButton.forEach(element => {
            element.innerHTML = pauseIcon;
        })

    } else {
        audio.pause();
        playerButton.forEach(element => {
            element.innerHTML = playIcon;
        })
    }



}


playerButton.forEach(element => {
    element.addEventListener('click', toggleAudio);
    audioPlay = setInterval(function (numTreck) {
        // Получаем значение на какой секунде песня
        let audioTime = Math.round(audio.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(audio.duration)
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        if (audioTime == audioLength && treck < 5) {
            treck++; // То Увеличиваем переменную 
            switchTreck(treck); // Меняем трек
            audio_button[treck].classList.add("active");
            // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && treck >= 5) {
            treck = 0; // То присваиваем treck ноль
            switchTreck(treck); //Меняем трек
            audio_button[treck].classList.add("active");
        }

    }, 10)
})

// function switchClass() {
//     let =
//     audio_button[treck].classList.add("active");
// }
// switchClass();

function changeTimelinePosition() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.forEach(element => {
        element.style.backgroundSize = `${percentagePosition}% 100%`;
    })
    timeline.forEach(element => {
        element.value = percentagePosition;
    })

}

//функция вывода текущего времени воспроизведения
audio.ontimeupdate = function () {
    changeTimelinePosition();
    var sec_num = audio.currentTime;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    playTime.forEach(element => {
        element.innerHTML = minutes + ':' + seconds + '-';
    });

}


function audioEnded() {
    playerButton.forEach(element => {
        element.innerHTML = playIcon;
    });

}

audio.onended = audioEnded;

function changeSeek() {
    const time0 = (timeline[0].value * audio.duration) / 100;
    const time1 = (timeline[1].value * audio.duration) / 100;
    // window.addEventListener(scroll)
    if (window.pageYOffset < 1000) {
        audio.currentTime = time0;
    } else {
        audio.currentTime = time1;
    }



}

timeline.forEach(element => {
    element.addEventListener('change', changeSeek);
})

function toggleSound() {
    audio.muted = !audio.muted;
    soundButton.forEach(element => {
        element.innerHTML = audio.muted ? muteIcon : soundIcon;

    })

}

soundButton.forEach(element => {
    element.addEventListener('click', toggleSound);
})




//функция вывода длительности трека

audio.onloadedmetadata = function () {

    var sec_start = audio.duration;
    var hour = Math.floor(sec_start / 3600);
    var minute = Math.floor((sec_start - (hour * 3600)) / 60);
    var second = sec_start - (hour * 3600) - (minute * 60);
    second = Math.round(second);
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    soundTime.forEach(element => {
        element.innerHTML = minute + ':' + second;
    })


};




//треклист

let playlist = [
    'treck1.mp3',
    'treck2.mp3',
    'treck3.mp3',
    'treck4.mp3',
    'treck5.mp3',
    'treck6.mp3',
];

let treck; // Переменная с индексом трека

// Событие перед загрузкой страницы
window.onload = function () {
    treck = 0; // Присваиваем переменной ноль
}


let audio_button = document.querySelectorAll(".audio-button");



function switchTreck(numTreck) {
    // Меняем значение атрибута src
    audio.src = 'audio/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    audio.play();
    playerButton.forEach(element => {
        element.innerHTML = pauseIcon;
    })


    audio_button.forEach(element => {
        element.classList.remove("active");
    })



}




audio0.onclick = function () {
    // Проверяем что переменная treck не равна нулю
    if (treck != 0) { // Если да, то
        treck = 0; // Увеличиваем её на один
        switchTreck(treck); // Меняем песню 
    } else { // Иначе
        switchTreck(treck);


    }
    audio0.classList.add("active");
}
audio1.onclick = function () {
    treck = 1;
    switchTreck(treck);
    audio1.classList.add("active");

}
audio2.onclick = function () {
    treck = 2;
    switchTreck(treck);
    audio2.classList.add("active");

}
audio3.onclick = function () {
    treck = 3;
    switchTreck(treck);
    audio3.classList.add("active");
}
audio4.onclick = function () {
    treck = 4;
    switchTreck(treck);
    audio4.classList.add("active");
}
audio5.onclick = function () {
    treck = 5;
    switchTreck(treck);
    audio5.classList.add("active");
}