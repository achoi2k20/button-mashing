// Select all toggle headers
const toggleHeaders = document.querySelectorAll('.toggle-header');

// clickable subheaders functions
toggleHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const subContainer = header.nextElementSibling; // Get the corresponding sub-container
        
         subContainer.style.display = subContainer.style.display === 'none' || subContainer.style.display === '' 
             ? 'block' // Show the sub-container
             : 'none'; // Hide the sub-container
    });
});

// document query selectors
const nameInput = document.querySelector('#name-container');
const imageInput = document.querySelector('#image-container');
const bioInput = document.querySelector('#bio-container');
const strategyInput = document.querySelector('#strategy-container');
const comboInput = document.querySelector('#combo-container');
const replaysInput = document.querySelector('#replay-container');

// load page elements based on character object selected
function loadCharacterName() {
    nameInput.textContent = ryu.name;
}
function loadCharacterImage() {
    imageInput.src = ryu.profileImg;
}
function loadCharacterBio() {
    bioInput.textContent = ryu.bio;
}
function loadCharacterStrategy() {
    strategyInput.textContent = ryu.strategy;
}
function loadCharacterCombo() {
    comboInput.textContent = ryu.combos;
}
function loadCharacterReplay() {
    replaysInput.textContent = ryu.replays;
}

//render page
function init() {
    loadCharacterName();
    loadCharacterImage();
    loadCharacterBio();
    loadCharacterStrategy();
    loadCharacterCombo;
    loadCharacterReplay();
}

init();