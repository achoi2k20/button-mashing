// create array of characters
const characters = [];

// character object and properties (FAV button should be something saved in localStorage)
let character = {
    name: 'John Streets',
    profileImg: 'https://preview.redd.it/by-the-end-of-sf6-john-streetfighter-will-be-the-most-v0-4zl54dv2e1yc1.jpeg?width=1080&crop=smart&auto=webp&s=3d0747840c1170d7e17396d911ae1b71f5dac34a',
    bio: 'John Streets is the avatar character for World Tour mode. He can learn and use anything from the other characters. If you are on this page, you either have not selected a character or the character is not implemented yet. Please go back and choose a real character.',
    bioShort: '',
    strategy: 'Anything anyone can do, he can do too.',
    combos: ['Any combo from any character and more!'],
    combosEnd: ['https://media1.tenor.com/m/FMA5pkk5dN4AAAAd/drive-impact-sf6.gif'],
    replays: 'some whacky video',
    // a field that should be saved to localStorage
    fav: false,
};

// character constructor. favorite left out
function Character(name,profileImg,bio,bioshort,strategy,combos,combosEnd,replays) {
    this.name = name;
    this.profileImg = profileImg;
    this.bio = bio;
    this.bioshort = bioshort;
    this.strategy = strategy;
    this.combos = combos;
    this.combosEnd = combosEnd;
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

    // ryu
        const ryuProfileImg = 'https://www.streetfighter.com/6/assets/images/character/ryu/ryu.png';
        const ryuBio = 'As the original shoto character, Ryu embodies all the meaningful aspects of Street Fighter gameplay in one concise package. Ryu emphasizes a patient playstyle with strong defensive tools using his signature moves: Hadoken and Shoryuken.';
        const ryuBioShort = 'Ryu controls the flow of battle with his Hadoken and Shoryuken.';
        const ryuStrategy = 'Use different speeds of Hadoken to throw off the their timing. When they try to jump, hit them with the Shoryuken';
        //might need to make combos and replays into an array
        const ryuCombos = ['2LK ~ 2LP ~ 5LP > 214LK/623HP: Anywhere','2MK > 214MK/236MK/(236KK, 623HP): Anywhere', '6HP, 2MP, 5LK > 214MK/236LK: Anywhere'];
        const ryuCombosEnd = ['https://ultimateframedata.com/sf6/hitboxes/Ryu/ryu-shoryuken-hp.gif','https://wiki.supercombo.gg/images/thumb/8/8f/SF6_Ryu_236k.png/359px-SF6_Ryu_236k.png','https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGd5Mmx6cW85aHM2Zmg2b3h3bDc1bnU5ODJtODk5eDQ1ZzFydXd2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8HDJGRUXHO957DwBEB/giphy.webp']
        const ryuReplays = 'something to watch';
    const ryu = new Character('Ryu',ryuProfileImg,ryuBio,ryuBioShort,ryuStrategy,ryuCombos,ryuCombosEnd,ryuReplays);
    characters.push(ryu);
    // luke
        const lukeProfileImg = 'https://www.streetfighter.com/6/assets/images/character/luke/luke.png';
        const lukeBio = 'Luke plays similarly to Ryu, but with a stronger emphasis on midrange pressure and whiff punishing.';
        const lukeBioShort = 'Luke forces the opponent to respect his Sand Blasts and his strong meterless combos.';
        const lukeStrategy = 'Wear down the opponent with Sand Blasts and forward advancing pokes. When they whiff, punish them heavily';
        //might need to make combos and replays into an array
        const lukeCombos = 'something to get started';
        const lukeCombosEnd = ['https://media1.tenor.com/m/FMA5pkk5dN4AAAAd/drive-impact-sf6.gif'];
        const lukeReplays = 'something to watch';
    const luke = new Character('Luke',lukeProfileImg,lukeBio,lukeBioShort,lukeStrategy,lukeCombos,lukeCombosEnd,lukeReplays);
    characters.push(luke);
 
// localStorage logic for characters
function storeCharSelect(charSelect) {
    localStorage.setItem('charSelect', JSON.stringify(charSelect));
};

function getCharSelect() {
    return JSON.parse(localStorage.getItem('charSelect'));
}

// event listeners for each image
const ryuSelect = document.querySelector('.ryu');
const lukeSelect = document.querySelector('.luke');

ryuSelect.addEventListener('click', function(event) {
    event.preventDefault();
    storeCharSelect(ryu);
    console.log("stored");
    window.location.href = './characterbio.html';
})

lukeSelect.addEventListener('click', function(event) {
    event.preventDefault();
    storeCharSelect(luke);
    console.log("stored");
    window.location.href = './characterbio.html';
})