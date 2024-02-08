const body = document.querySelector('body');
const fromStation = document.querySelector('#from');
const toStation = document.querySelector('#to');
const journeyDate = document.querySelector('#journey-date');
const journeyClass = document.querySelector('#journey-class');
const button = document.querySelector('#search-btn');


let travellDate = 0;


fromStation.addEventListener('keypress', (e) => {
    if (fromStation.value !== "") {
        if (e.key === "Enter") {
            console.log(fromStation.value);
        }
    }
})

toStation.addEventListener('keypress', (e) => {
    if (toStation.value !== "") {
        if (e.key === "Enter") {
            console.log(toStation.value);
        }
    }
})

journeyDate.addEventListener('change', () => {
    inputDate = journeyDate.value;
    let newDate = new Date(inputDate);
    console.log(newDate.toLocaleDateString());

    travellDate = newDate;
})


journeyClass.addEventListener('change', () => {
    console.log(journeyClass.value);
})


button.addEventListener('click', () => {
    searchForTrain();
})


function searchForTrain() {
    if (fromStation.value !== "" || toStation.value !== "") {
        if (travellDate === 0) {
            travellDate = new Date().toLocaleDateString();
            // console.log(travellDate);
        }
        else{
            if(journeyClass.value !== ""){
                alert(`Boarding at: ${fromStation.value}\nDestination: ${toStation.value}\nJourney Date: ${journeyDate.value}\nClass type: ${journeyClass.value}`);
            }
        }
    }
}
