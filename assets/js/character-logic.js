// create array of characters
const characters = [];

// character object and properties (FAV button should be something saved in localStorage)
let character = {
    name: 'John Streets',
    profileImg: '',
    bio: '',
    bioShort: '',
    strategy: '',
    combos: '',
    replays: '',
    // a field that should be saved to localStorage
    fav: false,
};

// character constructor. favorite left out
function Character(name,profileImg,bio,bioshort,strategy,combos,replays) {
    this.name = name;
    this.profileImg = profileImg;
    this.bio = bio;
    this.bioshort = bioshort;
    this.strategy = strategy;
    this.combos = combos;
    this.replays = replays;
};

// function to favorite or unfavorite a character
function characterFav() {
    if (this.fav = false) {
        this.fav = true;
    } else {
        this.fav =false;
    }
}

// creating objects, will need seperate variables to keep the inside of the constructor consice and easier to change
const ryuProfileImg = 'https://www.streetfighter.com/6/assets/images/character/ryu/ryu.png';
const ryuBio = 'As the original shoto character, Ryu embodies all the meaningful aspects of Street Fighter gameplay in one concise package. Ryu emphasizes a patient playstyle with strong defensive tools using his signature moves: Hadoken and Shoryuken.';
const ryuBioShort = 'Ryu controls the flow of battle with his Hadoken and Shoryuken.';
const ryuStrategy = 'Use different speeds of Hadoken to throw off the their timing. When they try to jump, hit them with the Shoryuken';
//might need to make combos and replays into an array
const ryuCombos = 'something to get started';
const ryuReplays = 'something to watch';
const ryu = new Character('Ryu',ryuProfileImg,ryuBio,ryuBioShort,ryuStrategy,ryuCombos,ryuReplays);

// 