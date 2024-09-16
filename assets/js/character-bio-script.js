// // Select all toggle headers
// const toggleHeaders = document.querySelectorAll('.toggle-header');

// // clickable subheaders functions
// toggleHeaders.forEach(header => {
//     header.addEventListener('click', function() {
//         const subContainer = header.nextElementSibling; // Get the corresponding sub-container
        
//          subContainer.style.display = subContainer.style.display === 'none' || subContainer.style.display === '' 
//              ? 'block' // Show the sub-container
//              : 'none'; // Hide the sub-container
//     });
// });

// document query selectors
const nameInput = document.querySelector('#name-container');
const imageInput = document.querySelector('#image-container');
const bioInput = document.querySelector('#bio-container');
const strategyInput = document.querySelector('#strategy-container');
const comboInput = document.querySelector('#combo-container');
const replaysInput = document.querySelector('#replay-container');

// load page elements based on character object selected
// function loadCharacterName() {
//     nameInput.textContent = ryu.name;
// }
// function loadCharacterImage() {
//     imageInput.src = ryu.profileImg;
// }
// function loadCharacterBio() {
//     bioInput.textContent = ryu.bio;
// }
// function loadCharacterStrategy() {
//     strategyInput.textContent = ryu.strategy;
// }
// function loadCharacterCombo() {
//     comboInput.textContent = ryu.combos;
// }
// function loadCharacterReplay() {
//     replaysInput.textContent = ryu.replays;
// }

function comboList(charSelect) {
    console.log(charSelect.combos);
    for (let i=0; i < charSelect.combos.length; i++){
        const com = charSelect.combos[i];
        
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = com;

        const comEnd = charSelect.combosEnd[i];

        const img = document.createElement('img');
        img.className = 'rounded float-end'
        img.src = comEnd;

        li.appendChild(img);
        comboInput.appendChild(li);
    }

    // const li = document.createElement('li');
    // li.className = 'list-group-item';
    // li.textContent = charSelect.combos;
    // comboInput.appendChild(li);
}

function loadPage(charSelect){
    console.log(character);
    if ((charSelect !== null)){
        nameInput.textContent = charSelect.name;
        imageInput.src = charSelect.profileImg;
        bioInput.textContent = charSelect.bio;
        strategyInput.textContent = charSelect.strategy;
        comboList(charSelect);

        //comboInput.textContent = charSelect.combos;
        replaysInput.textContent = charSelect.replays;
    } else {
        nameInput.textContent = character.name;
        imageInput.src = character.profileImg;
        bioInput.textContent = character.bio;
        strategyInput.textContent = character.strategy;
        comboInput.textContent = character.combos;
        replaysInput.textContent = character.replays;
    }
}

//render page
function init() {
    // loadCharacterName();
    // loadCharacterImage();
    // loadCharacterBio();
    // loadCharacterStrategy();
    // loadCharacterCombo;
    // loadCharacterReplay();
    let charSelect = getCharSelect();
    console.log(charSelect);
    loadPage(charSelect);
}

init();