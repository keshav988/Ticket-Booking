const body = document.querySelector('body');
const fromStation = document.querySelector('#from');
const toStation = document.querySelector('#to');
const journeyDate = document.querySelector('#journey-date');
const journeyClass = document.querySelector('#journey-class');


// Retrieve the query from local storage
fromStation.innerText = localStorage.getItem('fromStation');
toStation.innerText = localStorage.getItem('toStation');
journeyDate.innerText = localStorage.getItem('travelDate');
journeyClass.innerText = localStorage.getItem('journeyClass');


