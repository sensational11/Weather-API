//Variable Declaration
var clickSearch = document.getElementById("searchMe");
var inputSearch = document.getElementById("city");
var cityLocation = inputSearch.innerHTML;
var dayOfTheWeek = moment().format("MMMMM Do YYY, h:mm:ss a");
var apiKey = "e09abfee77f5d4e2ce7773085ff94cc9";

clickSearch.addEventListener("click", getLocation); 

console.log(clickSearch);
console.log(cityLocation);

function getLocation (event) { 
    event.preventDefault()
    console.log(cityLocation);
    
    fetch(apiKeyUrl).then(function(response){
        console.log(response)
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
                var latitudeLocation = data[0].lat;
                var longitudeLocation = data[0].lon;
                cityLocation = data[0].name;
                var latitudeString = latitudeLocation.toString();
                var longitudeString = longitudeLocation.toString();
                getWeather(latitudeString, longitudeString)
            }
    )}
    }
    )
}
