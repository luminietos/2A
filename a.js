//alternatively: document.getElementById('submit_btn).addEventListener ('click', getTrainData);
const submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', getTrainData)

//the API url we're retrieving data from
var api ="https://rata.digitraffic.fi/api/v1/live-trains/station/";
//gets the desired userinput station (from the html)
input = select.getElementById(station);
//arrived/arriving & departed/departing trains' schedules
var schedules = "?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false";

//function
function getTrainData() {
    //the url is the api path + the userinput parameters (station)
    var url = api + input.value() + schedules;
}
   
getTrainData();