/* ==========================================
   PASSWORD
========================================== */

const SECRET_PASSWORD = "priyanga";


/* ==========================================
   MUSIC
========================================== */

let music = null;
let musicButton = null;


/* ==========================================
   INITIAL SETUP
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    music = document.getElementById("backgroundMusic");

    musicButton = document.getElementById("musicButton");


    if (music) {

        music.volume = 0.7;

        console.log("🎵 Audio element found");

        console.log(
            "Audio source:",
            music.currentSrc
        );

    } else {

        console.error(
            "❌ Audio element not found"
        );
    }


    const password =
        document.getElementById("password");


    if (password) {

        password.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    checkPassword();

                }

            }
        );

    }

});


/* ==========================================
   START MUSIC
========================================== */

function startMusic() {

    if (!music) {

        music =
            document.getElementById(
                "backgroundMusic"
            );
    }


    if (!music) {

        console.error(
            "Music element not found!"
        );

        return;
    }


    music.volume = 0.7;


    music.play()

        .then(function () {

            console.log(
                "🎵 MUSIC PLAYING"
            );


            if (musicButton) {

                musicButton.innerHTML =
                    "🎵";

                musicButton.classList.add(
                    "music-playing"
                );

            }

        })

        .catch(function (error) {

            console.error(
                "❌ Music error:",
                error
            );


            if (musicButton) {

                musicButton.innerHTML =
                    "▶️";
            }

        });

}


/* ==========================================
   TOGGLE MUSIC
========================================== */

function toggleMusic() {

    if (!music) {

        music =
            document.getElementById(
                "backgroundMusic"
            );
    }


    if (!music) {

        return;
    }


    if (music.paused) {

        music.play()

            .then(function () {

                if (musicButton) {

                    musicButton.innerHTML =
                        "🎵";

                    musicButton.classList.add(
                        "music-playing"
                    );

                }

            })

            .catch(function (error) {

                console.error(
                    "Music play error:",
                    error
                );

            });

    } else {

        music.pause();


        if (musicButton) {

            musicButton.innerHTML =
                "🔇";

            musicButton.classList.remove(
                "music-playing"
            );

        }

    }

}


/* ==========================================
   PASSWORD CHECK
========================================== */

function checkPassword() {

    const password =
        document.getElementById(
            "password"
        );


    const wrongPassword =
        document.getElementById(
            "wrongPassword"
        );


    if (!password) {

        return;
    }


    if (
        password.value ===
        SECRET_PASSWORD
    ) {

        if (wrongPassword) {

            wrongPassword.innerHTML =
                "Unlocked ❤️";

        }


        /* Start music */

        startMusic();


        /* Cinematic heart animation */

        playHeartUnlock();


        /* Open birthday page after animation */

        setTimeout(
            function () {

                showBirthday();

                createConfetti();

            },
            2300
        );


    } else {

        if (wrongPassword) {

            wrongPassword.innerHTML =
                "Wrong secret... Try again ❤️";

        }


        password.value = "";

        password.focus();

    }

}


/* ==========================================
   CINEMATIC HEART UNLOCK
========================================== */

function playHeartUnlock() {

    const overlay =
        document.getElementById(
            "heartUnlock"
        );


    if (!overlay) {

        /* If overlay is missing,
           simply continue */

        return;

    }


    /* Reset animation */

    overlay.classList.remove(
        "heart-open",
        "heart-fade"
    );


    overlay.classList.add(
        "show"
    );


    overlay.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Open heart */

    setTimeout(
        function () {

            overlay.classList.add(
                "heart-open"
            );

            createHeartBurst();

        },
        850
    );


    /* Fade */

    setTimeout(
        function () {

            overlay.classList.add(
                "heart-fade"
            );

        },
        1950
    );


    /* Remove */

    setTimeout(
        function () {

            overlay.classList.remove(
                "show",
                "heart-open",
                "heart-fade"
            );


            overlay.setAttribute(
                "aria-hidden",
                "true"
            );


            overlay
                .querySelectorAll(
                    ".burst-heart"
                )
                .forEach(
                    function (item) {

                        item.remove();

                    }
                );


        },
        2350
    );

}


/* ==========================================
   HEART BURST
========================================== */

function createHeartBurst() {

    const overlay =
        document.getElementById(
            "heartUnlock"
        );


    if (!overlay) {

        return;
    }


    const symbols = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💘",
        "✨",
        "🌸"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "burst-heart";


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            120 +
            Math.random() *
            320;


        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );


        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );


        particle.style.setProperty(
            "--delay",
            Math.random() *
            0.25 +
            "s"
        );


        particle.style.setProperty(
            "--size",
            14 +
            Math.random() *
            22 +
            "px"
        );


        overlay.appendChild(
            particle
        );

    }

}


/* ==========================================
   HIDE ALL SCREENS
========================================== */

function hideAllScreens() {

    const screens =
        document.querySelectorAll(
            ".screen"
        );


    screens.forEach(
        function (screen) {

            screen.classList.remove(
                "active"
            );

        }
    );

}


/* ==========================================
   BIRTHDAY
========================================== */

function showBirthday() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "birthdayScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }


    createConfetti();

}


/* ==========================================
   STORY
========================================== */

function showStory() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "storyScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }

}


/* ==========================================
   REASONS
========================================== */

function showReasons() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "reasonsScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }

}


/* ==========================================
   PHOTOS
========================================== */

function showPhotos() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "photosScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }


    updatePhoto();

}


/* ==========================================
   LOVE LETTER
========================================== */

function showLetter() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "letterScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }

}


/* ==========================================
   FINAL SURPRISE
========================================== */

function finalSurprise() {

    hideAllScreens();


    const screen =
        document.getElementById(
            "finalScreen"
        );


    if (screen) {

        screen.classList.add(
            "active"
        );

    }


    createConfetti();


    setTimeout(
        createConfetti,
        1200
    );


    setTimeout(
        createConfetti,
        2500
    );

}


/* ==========================================
   10 REASONS
========================================== */

const reasons = {

    1:
        "Your smile can instantly make my day better. ❤️",

    2:
        "I love the way you care about me. 🥰",

    3:
        "You make even ordinary moments feel special. ✨",

    4:
        "I love how comfortable I feel when I'm with you. ❤️",

    5:
        "You understand me in ways that very few people do. 🌸",

    6:
        "Every memory with you is precious to me. 💖",

    7:
        "You make me want to become a better person. 🌹",

    8:
        "I love your beautiful heart and kindness. ❤️",

    9:
        "You are one of the most beautiful parts of my life. 🥹",

    10:
        "No matter how many reasons I give, I simply love YOU. ❤️"

};


/* ==========================================
   SHOW REASON
========================================== */

function showReason(number) {

    const box =
        document.getElementById(
            "reasonText"
        );


    if (!box) {

        return;
    }


    box.style.opacity = "0";


    setTimeout(
        function () {

            box.innerHTML =
                reasons[number];

            box.style.opacity =
                "1";

        },
        200
    );

}


/* ==========================================
   PHOTO SYSTEM
========================================== */

let currentPhoto = 1;

const totalPhotos = 15;


const photoCaptions = [

    "The beginning of our beautiful memories. ❤️",

    "A moment I'll always remember. 💕",

    "You make every picture special. 🥰",

    "One more beautiful memory with you. 🌸",

    "A moment frozen in time. ❤️",

    "Every picture brings back a smile. 😊",

    "A memory worth keeping forever. 💖",

    "Just you and me. ❤️",

    "One of my favorite moments. 🥹",

    "Another chapter of our story. 🌹",

    "Beautiful memories with my beautiful girl. ❤️",

    "Some moments are simply unforgettable. 💕",

    "A memory I'll keep close to my heart. 💗",

    "Together, making memories. 🥰",

    "And this is only the beginning... ❤️"

];


/* ==========================================
   UPDATE PHOTO
========================================== */

function updatePhoto() {

    const mainPhoto =
        document.getElementById(
            "mainPhoto"
        );


    const photoNumber =
        document.getElementById(
            "photoNumber"
        );


    const caption =
        document.getElementById(
            "photoCaption"
        );


    if (!mainPhoto) {

        console.error(
            "mainPhoto element not found"
        );

        return;
    }


    /* Fade out */

    mainPhoto.style.opacity =
        "0";


    mainPhoto.style.transform =
        "scale(.96)";


    setTimeout(
        function () {

            /* CHANGE IMAGE */

            mainPhoto.src =
                "images/photo" +
                currentPhoto +
                ".jpg";


            /* IMAGE NUMBER */

            if (photoNumber) {

                photoNumber.innerHTML =
                    currentPhoto +
                    " / " +
                    totalPhotos;

            }


            /* CAPTION */

            if (caption) {

                caption.innerHTML =
                    photoCaptions[
                        currentPhoto - 1
                    ];

            }


            /* Fade in */

            mainPhoto.style.opacity =
                "1";


            mainPhoto.style.transform =
                "scale(1)";


        },
        200
    );


    /* ======================================
       UPDATE THUMBNAILS
    ====================================== */

    const thumbnails =
        document.querySelectorAll(
            ".thumbnail"
        );


    thumbnails.forEach(
        function (
            thumbnail,
            index
        ) {

            thumbnail.classList.remove(
                "active-thumb"
            );


            if (
                index ===
                currentPhoto - 1
            ) {

                thumbnail.classList.add(
                    "active-thumb"
                );

            }

        }
    );

}


/* ==========================================
   NEXT PHOTO
========================================== */

function nextPhoto() {

    currentPhoto =
        currentPhoto + 1;


    if (
        currentPhoto >
        totalPhotos
    ) {

        currentPhoto = 1;

    }


    updatePhoto();

}


/* ==========================================
   PREVIOUS PHOTO
========================================== */

function previousPhoto() {

    currentPhoto =
        currentPhoto - 1;


    if (
        currentPhoto < 1
    ) {

        currentPhoto =
            totalPhotos;

    }


    updatePhoto();

}


/* ==========================================
   SELECT PHOTO
========================================== */

function selectPhoto(number) {

    if (
        number < 1 ||
        number > totalPhotos
    ) {

        return;

    }


    currentPhoto =
        number;


    updatePhoto();

}


/* ==========================================
   AUTOMATIC SLIDESHOW
========================================== */

setInterval(
    function () {

        const photosScreen =
            document.getElementById(
                "photosScreen"
            );


        if (
            photosScreen &&
            photosScreen.classList.contains(
                "active"
            )
        ) {

            nextPhoto();

        }

    },
    5000
);


/* ==========================================
   FULLSCREEN PHOTO
========================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.id ===
            "mainPhoto"
        ) {

            event.target.classList.toggle(
                "fullscreen"
            );

        }

    }
);


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        const photosScreen =
            document.getElementById(
                "photosScreen"
            );


        if (
            !photosScreen ||
            !photosScreen.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextPhoto();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousPhoto();

        }


        if (
            event.key ===
            "Escape"
        ) {

            const photo =
                document.getElementById(
                    "mainPhoto"
                );


            if (photo) {

                photo.classList.remove(
                    "fullscreen"
                );

            }

        }

    }
);


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const container =
        document.querySelector(
            ".hearts"
        );


    if (!container) {

        return;
    }


    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const heartTypes = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🌸"

    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() *
        100 +
        "%";


    heart.style.fontSize =
        (
            15 +
            Math.random() *
            25
        ) +
        "px";


    const duration =
        5 +
        Math.random() *
        6;


    heart.style.animationDuration =
        duration +
        "s";


    container.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        duration * 1000
    );

}


setInterval(
    createHeart,
    500
);


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        const symbols = [

            "❤️",
            "💕",
            "💖",
            "✨",
            "🎉"

        ];


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() *
            100 +
            "vw";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            (
                12 +
                Math.random() *
                20
            ) +
            "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        const duration =
            2 +
            Math.random() *
            3;


        confetti.style.transition =
            "transform " +
            duration +
            "s linear, opacity " +
            duration +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(
            function () {

                confetti.style.transform =
                    "translateY(110vh) rotate(" +
                    (
                        Math.random() *
                        720
                    ) +
                    "deg)";


                confetti.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                confetti.remove();

            },
            duration * 1000 + 100
        );

    }

}