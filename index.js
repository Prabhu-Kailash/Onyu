const texts = ["Onyu", "ఒన్యూ", "ஒன்யூ", "ಓನ್ಯೂ", "ഓന്യു", "ओन्यू"];
let index = 0;

function changeText() {
    const dynamicText = document.getElementById("dynamic-text");
    index = (index + 1) % texts.length; // Cycle through the texts
    dynamicText.textContent = texts[index]; // Change the text
}

// Change the text every 2 seconds
setInterval(changeText, 2000);



var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

function changeWord() {
var cw = wordArray[currentWord];
var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
}

for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
setTimeout(function() {
        cw[i].className = 'letter out';
}, i*80);
}

function animateLetterIn(nw, i) {
setTimeout(function() {
        nw[i].className = 'letter in';
}, 340+(i*80));
}

function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
}

wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close other open FAQs
        faqItems.forEach(el => {
            if (el !== item) el.classList.remove('active');
        });

        // Toggle the current FAQ
        item.classList.toggle('active');
    });
});