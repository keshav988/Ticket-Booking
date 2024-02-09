const body = document.querySelector('body');
const fromStation = document.querySelector('#from');
const toStation = document.querySelector('#to');
const journeyDate = document.querySelector('#journey-date');
const journeyClass = document.querySelector('#journey-class');
const button = document.querySelector('#search-btn');


// by default travel date is today
let travelDate = new Date().toLocaleDateString();


journeyDate.addEventListener('change', () => {
    inputDate = journeyDate.value;
    let newDate = new Date(inputDate);
    console.log(newDate.toLocaleDateString());

    travelDate = newDate.toLocaleDateString();
})


button.addEventListener('click', () => {
    searchForTrain();
})


function searchForTrain() {
    if (fromStation.value !== "" || toStation.value !== "") {
            if(journeyClass.value !== ""){
                // alert(`Boarding at: ${fromStation.value}\nDestination: ${toStation.value}\nJourney Date: ${travelDate}\nClass type: ${journeyClass.value}`);

                localStorage.setItem('fromStation', fromStation.value);
                localStorage.setItem('toStation', toStation.value);
                localStorage.setItem('travelDate', travelDate);
                localStorage.setItem('journeyClass', journeyClass.value);

                window.location.href = 'train.html';

            }
    }
}
