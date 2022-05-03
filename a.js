//establishing userinput into a separate variable
let station_1 = document.getElementById("station_1").value.trim();

//THE URL
let api_url = `https://rata.digitraffic.fi/api/v1/live-trains/station/${station_1}`
const specs = `?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false`;
const url = api_url + specs;

//FUNCTIONS
async function getData() {
    const station_1 = document.getElementById("station_1").value.trim();
    //if userinput is null, app gives an error message
    if (!station_1) return alert("Enter a station, please.");

    //external API's url with the station being 
    //a variable that changes via userinput 
    let api_url = `https://rata.digitraffic.fi/api/v1/live-trains/station/${station_1}`;
    const specs = `?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false`;
    const url = api_url + specs;

    try {
        //fetching the text-area's id from HTML, assigning value
        document.getElementById("traindata").value = "Loading...";
        //calling fetch, passing in the url
        const response = await fetch(url);

        //if the response is not acceptable...
        if (!response.ok) throw new Error("Error");
        const data = await response.json();

        //displays the response to the userinput
        document.getElementById("traindata").value = JSON.stringify(data, null, 4);
    } catch (error) {
        //error message
        alert(error);
    }

    if (station_1) {
        //if station_1's input is fetched correctly...
    }
}


//"RAW DATA" (CONTAINER) FUNCTION
async function getTrainData() {
    const station = document.getElementById("station").value.trim();
    //if userinput is null, app gives an error message
    if (!station) return alert("Enter a station, please.");

    //external API's url with the station being 
    //a variable that changes via userinput 
    let api_url = `https://rata.digitraffic.fi/api/v1/live-trains/station/${station}`;
    const specs = `?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false`;
    const url = api_url + specs;
    //const second_url = `https://rata.digitraffic.fi/api/v1/metadata/stations`;
    //||

    try {
        //fetching the text-area's id from HTML, assigning value
        document.getElementById("rawdata").value = "Loading...";
        //calling fetch, passing in the url
        const response = await fetch(url);

        //if the response is not acceptable...
        if (!response.ok) throw new Error("Error");
        const data = await response.json();

        //displays the response to the userinput
        document.getElementById("rawdata").value = JSON.stringify(data, null, 4);
    } catch (error) {
        //error message
        alert(error);
    }
}