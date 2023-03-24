var cityList = []
var day = moment().format("D/M/YYYY")

function getInfo() 
{
    var city = $("#search-input").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=836d5aa760eed71ca3c64381a74cc400"
       // console.log(city)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
              console.log(response)


            
        //weather today
        var tempC = response.list[0].main.temp - 273.15 
          $(".cityName").text(response.city.name + " (" + day + ")")
          $(".temperature").text("Temp: " + tempC.toFixed(2) + "C")
          $(".wind").text("Wind: " + response.list[0].wind.speed + "KPH")
          $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%")

        //weather forecast 

        //weather forecast day 1
          var tomorrow = moment().add(1, 'd').format("D/M/YYYY")
          //console.log(tomorrow)
          var tempTomorrowC = response.list[3].main.temp - 273.15 
          $(".tomorrow").text(tomorrow);
          $(".tomorrowTem").text("Temp: " + tempTomorrowC.toFixed(2) + "C")
          $(".tomorrowWind").text("Wind: " + response.list[3].wind.speed + "KPH")
          $(".tomorrowHum").text("Humidity: " + response.list[3].main.humidity + "%")