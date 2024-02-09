const body = document.querySelector('body');
const fromStation = document.querySelector('#from');
const toStation = document.querySelector('#to');
const journeyDate = document.querySelector('#journey-date');
const journeyClass = document.querySelector('#journey-class');
const button = document.querySelector('#search-btn');


// by default travel date is today
travellDate = new Date().toLocaleDateString();


journeyDate.addEventListener('change', () => {
    inputDate = journeyDate.value;
    let newDate = new Date(inputDate);
    console.log(newDate.toLocaleDateString());

    travellDate = newDate.toLocaleDateString();
})


button.addEventListener('click', () => {
    searchForTrain();
})


function searchForTrain() {
    if (fromStation.value !== "" || toStation.value !== "") {
            if(journeyClass.value !== ""){
                alert(`Boarding at: ${fromStation.value}\nDestination: ${toStation.value}\nJourney Date: ${travellDate}\nClass type: ${journeyClass.value}`);
                window.location.href = 'train.html';
            }
    }
}
