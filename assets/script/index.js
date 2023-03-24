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
          $(".cityName").text(response.city.name + " (" + day + ")");
          $(".temperature").text("Temp: " + tempC.toFixed(2) + "C");
          $(".wind").text("Wind: " + response.list[0].wind.speed + "KPH");
          $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");

        //weather forecast 

        //weather forecast day 1
          var tomorrow = moment().add(1, 'd').format("D/M/YYYY");
          //console.log(tomorrow)
          var tempTomorrowC = response.list[3].main.temp - 273.15 
          $(".tomorrow").text(tomorrow);
          $(".tomorrowTem").text("Temp: " + tempTomorrowC.toFixed(2) + "C");
          $(".tomorrowWind").text("Wind: " + response.list[3].wind.speed + "KPH");
          $(".tomorrowHum").text("Humidity: " + response.list[3].main.humidity + "%");


           //City information for two days    
           var twoDays = moment().add(2, 'd').format("D/M/YYYY")
           var tempTwoDaysC = response.list[15].main.temp - 273.15 
 
           $(".twoDays").text(twoDays);
           $(".twoDaysTem").text("Temp: " + tempTwoDaysC.toFixed(2) + "C");
           $(".twoDaysWind").text("Wind: " + response.list[15].wind.speed + "KPH");
         $(".twoDaysHum").text("Humidity: " + response.list[15].main.humidity + "%");
         
         // forecast day 3
 var threeDays = moment().add(3, 'd').format("D/M/YYYY")
 var tempthreeDaysC = response.list[23].main.temp - 273.15 
 
 $(".threeDays").text(threeDays);
 $(".threeDaysTem").text("Temp: " + tempthreeDaysC.toFixed(2) + "C")
 $(".threeDaysWind").text("Wind: " + response.list[23].wind.speed + "KPH")
 $(".threeDaysHum").text("Humidity: " + response.list[23].main.humidity + "%")

 //forecast day 4
 var fourDays = moment().add(4, 'd').format("D/M/YYYY")
          var tempFourDaysC = response.list[31].main.temp - 273.15 
          
          $(".fourDays").text(fourDays);
          $(".fourDaysTem").text("Temp: " + tempFourDaysC.toFixed(2) + "C")
          $(".fourDaysWind").text("Wind: " + response.list[31].wind.speed + "KPH")
          $(".fourDaysHum").text("Humidity: " + response.list[31].main.humidity + "%")

 //forecast day 5      
 var fiveDays = moment().add(2, 'd').format("D/M/YYYY")
 var tempTwoDaysC = response.list[39].main.temp - 273.15 
 
 $(".fiveDays").text(fiveDays);
 $(".fiveDaysTem").text("Temp: " + tempTwoDaysC.toFixed(2) + "C");
 $(".fiveDaysWind").text("Wind: " + response.list[39].wind.speed + "KPH");
 $(".fiveDaysHum").text("Humidity: " + response.list[39].main.humidity + "%");

 // displaying weather icon
 $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=836d5aa760eed71ca3c64381a74cc400", function(data) {
    var iconCode = data.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/"  + iconCode + ".png" ;
  
    $(".icon").attr("src", iconURL);
  });    
        
        
    })
}

//funtion to display the city searched
function listGroup()
{
    $("#history").empty();
   
    for (var i = 0; i < cityList.length; i++) {
       
        var historyEl = $("<button class='btnList'>") ; 
        
        historyEl.text(cityList[i].toUpperCase());
        $("#history").append(historyEl)
        

    }
    
}

//Search button event listener
$("#search-button").on("click", function(event)
{
    event.preventDefault()
    var city = $("#search-input").val().trim();
    if(city == "") return;
    $(".hide").removeClass("hide")
    
    //var cityList
    
    cityList.push(city);
    localStorage.setItem("cities", JSON.stringify(cityList))
    
    
  
    listGroup();
    getInfo();

});

//clear button
$("#clear-button").on("click", function(event){
    event.preventDefault();
    $("#history").empty();
    localStorage.removeItem("cities")
})

//function to retrieve the information
function loadPage() {
    var citySearch = JSON.parse(localStorage.getItem("cities"));
        
       
        if(citySearch == "") return;
        
        for(var i = 0; i < citySearch.length; i++){
        var pButton = $("<button>")
        pButton.addClass("btnList")
        pButton.text(citySearch[i].toUpperCase())
        $("#history").append(pButton);          
   }
   
}

 loadPage();
