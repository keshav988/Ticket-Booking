const body = document.querySelector('body');
const backArrow = document.querySelector('#back-arrow');
const fromStation = document.querySelector('#from');
const toStation = document.querySelector('#to');
const journeyDate = document.querySelector('#journey-date');
const journeyClass = document.querySelector('#journey-class');
const searchDiv = document.querySelector('#search-div');


backArrow.addEventListener('click', () => {
    window.location.href = 'index.html';
})

// Retrieve the query from local storage
fromStation.innerText = localStorage.getItem('fromStation');
toStation.innerText = localStorage.getItem('toStation');
journeyDate.innerText = localStorage.getItem('travelDate');
journeyClass.innerText = localStorage.getItem('journeyClass');


if(screen.width < 600){
    searchDiv.classList.add('hidden');
}
else{
    searchDiv.classList.remove('hidden');
}

