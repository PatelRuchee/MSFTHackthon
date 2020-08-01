const people = document.querySelector('.progress-people');
const planet = document.querySelector('.progress-planet');
const animal = document.querySelector('.progress-animal');

setTimeout(() => {
    people.style.opacity = 1;
    people.style.width = people.getAttribute('data-done') + '%';

    planet.style.opacity = 1;
    planet.style.width = planet.getAttribute('data-done') + '%';

    animal.style.opacity = 1;
    animal.style.width = animal.getAttribute('data-done') + '%';
}, 500)

// File that runs when you click on the extension

// Displays an alert with the current URL
var currentUrl = chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    //alert(tabURL);
});
