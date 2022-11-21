//Variable Declaration
var clickSearch = $("searchMe");
var inputSearch = "";
var cityLocation = "";
var dayOfTheWeek = moment().format("MMMMM Do YYY, h:mm:ss a");
var apiKey = "e09abfee77f5d4e2ce7773085ff94cc9"

clickSearch.click(function () {
    // console.log("clickSearch");
    inputSearch = $("searchMe").val().trim();
    getLocation(inputSearch);
});


function getLocation (inputSearch) {
    var apiKeyUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + inputSearch + "&limit=1&appid=" + apiKey;
    fetch(apiKeyUrl).then(function(response){
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
