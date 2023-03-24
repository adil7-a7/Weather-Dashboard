var cityList = []
var day = moment().format("D/M/YYYY")

function getInfo() {
    var city = $("#search-input").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=836d5aa760eed71ca3c64381a74cc400"
       // console.log(city)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
              console.log(response)