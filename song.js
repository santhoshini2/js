let song1 = {
    artistname: 'xyz..',
    songname:'asfd',
    year:2021,
    play: function() {
        console.log(this.songname + 'is playing');

    }
}
console.log(song1);
song1.play();