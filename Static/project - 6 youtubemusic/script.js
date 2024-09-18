// UI

document.querySelectorAll('#player h3').forEach(function (data) {
    data.addEventListener('mouseover', function () {
        data.style.background = "white";

        data.querySelector('i').style.color = "black";
    })
})

document.querySelectorAll('#player h3').forEach(function (data) {
    data.addEventListener('mouseout', function () {
        data.style.background = "";

        data.querySelector('i').style.color = "";
    })
})

// Audio

var audio = new Audio()
var AllSongs = document.querySelector('#All-Songs')

var selactedSong = 0
var Poster = document.querySelector("#left")

var flag = 0

var playCurrentSong = document.querySelector("#play")
var nextSong = document.querySelector("#foeward")
var previesSong = document.querySelector("#backward")

// Logic

var arr = [
    { name: "Why this kolaveri di", Img: "./images/why this kolaveri di.jpg", Song: "./songs/Why This Kolaveri Di.mp3", Duration: "4:20" },
    { name: "FRIENDS (Marshmello & Anne-Marie)", Img: "./images/Marshmello & Anne-Marie - FRIENDS.jpg", Song: "./songs/Marshmello_ft_Anne-Marie_-_Friends.mp3", Duration: "3:26" },
    { name: "Alone (Nightcore)", Img: "./images/Nightcore - Alone.jpg", Song: "./songs/Nico_Collins_-_Alone_(Hydr0.org).mp3", Duration: "3:54" },
    { name: "Angel With A Shotgun (Nightcore)", Img: "./images/Nightcore - Angel With A Shotgun.jpg", Song: "./songs/Nightcore - Angel With A Shotgun.mp3", Duration: "3:18" }
]


function addSongs() {

    var clutter = ''

    arr.forEach(function (data, indx) {
        clutter += `<div class="song-card" id="${indx}">
                        <div class="part1">
                            <img src="${data.Img}"
                                alt="">
                                <h2>${data.name}</h2>
                                </div>
                        <h6>${data.Duration}</h6>
                    </div>`
    })
    AllSongs.innerHTML = clutter
    audio.src = arr[selactedSong].Song
    Poster.style.backgroundImage = `url("${arr[selactedSong].Img}")`
}

function playAndPause() {

    playCurrentSong.addEventListener('click', function () {
        if (flag == 0) {
            playCurrentSong.innerHTML = `<i class="ri-pause-fill"></i>`
            flag = 1
            addSongs()
            audio.play()
        }
        else {
            playCurrentSong.innerHTML = `<i class="ri-play-fill"></i>`
            flag = 0
            addSongs()
            audio.pause()
        }
    })

    nextSong.addEventListener('click', function () {
        previesSong.style.opacity = 1;
        if (selactedSong < arr.length - 1) {
            nextSong.style.opacity = 1;
            playCurrentSong.innerHTML = `<i class="ri-pause-fill"></i>`
            flag = 1
            selactedSong++;
            addSongs()
            audio.play()
        }
        else {
            nextSong.style.opacity = 0.3;
        }
    })

    previesSong.addEventListener('click', function () {
        nextSong.style.opacity = 1;
        if (selactedSong > 0) {
            previesSong.style.opacity = 1;
            playCurrentSong.innerHTML = `<i class="ri-pause-fill"></i>`
            flag = 1
            selactedSong--;
            addSongs()
            audio.play()
        }
        else {
            previesSong.style.opacity = 0.3;
        }
    })
}



function playSong() {

    AllSongs.addEventListener('click', function (e) {

        selactedSong = e.target.id
        playCurrentSong.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
        addSongs()
        audio.play()
    })


}


addSongs()
playSong()
playAndPause()
