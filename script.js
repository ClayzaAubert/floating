
document.addEventListener('DOMContentLoaded', function() {
    const menu1 = document.getElementById('menu-1');
    const menu2 = document.getElementById('menu-2');
    const submenu1 = document.getElementById('sub-menu-1');
    const submenu2 = document.getElementById('sub-menu-2');
    const submenu3 = document.getElementById('sub-menu-3');
    const submenu4 = document.getElementById('sub-menu-4');
    
    menu1.addEventListener('click', () => {
        menu1.style.display = 'none';
        menu2.style.display = 'block';
        submenu1.style.display = "inline-block";
        submenu2.style.display = "block";
        submenu3.style.display = "inline-block";
        submenu4.style.display = "block";
    });

    menu2.addEventListener('click', () => {
        menu2.style.display = 'none';
        submenu1.style.display = "none";
        submenu2.style.display = "none";
        submenu3.style.display = "none";
        submenu4.style.display = "none";
        menu1.style.display = 'block';
    });
});

function redirectToWebsite() {
    // Ganti URL berikut dengan URL website yang ingin Anda tuju
    var websiteURL = 'https://nonbiri.space/bookmark/';
    
    // Mengarahkan ke website yang ditentukan
    window.location.href = websiteURL;
}

function reportowner() {
    // Ganti URL berikut dengan URL website yang ingin Anda tuju
    var websiteURL = 'http://wa.me/6281280405626';
    
    // Mengarahkan ke website yang ditentukan
    window.location.href = websiteURL;
}

// Daftar lagu
var songs = [
    "https://clayzaaubert.github.io/library/Nightcore  Creature Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  Devils Lullaby Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  Flowers Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  Hunger TheFatRat Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  New Rules Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  One Time Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  Sunset Blue Lyrics.mp3",
    "https://clayzaaubert.github.io/library/Nightcore  Summertime Sadness Lyrics.mp3"
  ];

    // Mendapatkan elemen audio
    var audio = document.getElementById("myAudio");

// Mengacak daftar lagu
shuffleArray(songs);

// Memilih lagu pertama dari daftar
var currentSongIndex = 0;
audio.src = songs[currentSongIndex];

// Memutar lagu saat lagu sebelumnya selesai
audio.addEventListener("ended", function() {
// Memilih lagu berikutnya secara acak
currentSongIndex = (currentSongIndex + 1) % songs.length;
audio.src = songs[currentSongIndex];
audio.play();
});

// Fungsi untuk mengacak array menggunakan algoritma Fisher-Yates
function shuffleArray(array) {
for (var i = array.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
}
    // Menambahkan event listener ke elemen dengan id "sub-menu-2"
    var menu2 = document.getElementById("sub-menu-2");
    menu2.addEventListener("click", toggleAudio);

    var isPlaying = false;

    // Fungsi untuk memainkan atau menghentikan audio
    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }

    function setVolume(volume) {
        if (audio) {
          audio.volume = volume;
        }
      }
    
      // Panggil fungsi untuk mengatur volume menjadi 50% (0.5)
      setVolume(0.1);
