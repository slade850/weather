
var success = function(data){
     var tp = document.getElementById('temp');
     var hm = document.getElementById('hum');
     var hr = document.getElementById('hour');
     var tw = document.getElementById('town');
     var wh = document.getElementById('weath');
     var wim = document.getElementById('wi');
     hm.innerHTML ="Taux d'humidité: "+data.main.humidity+"%";
     tp.innerHTML = "la temperature est de: "+ data.main.temp+"C°";
     hr.innerHTML = "Horaire: " + data.dt;
     tw.innerHTML = "Lieu: " + data.name;
     wh.innerHTML = "Condition meteo: " + data.weather[0].description;
     wim.setAttribute("src", "http://openweathermap.org/img/w/"+data.weather[0].icon+".png");
}
var success2 = function(dataI){
     var tit = document.getElementById('title');
     var art = document.getElementById('article');
     tit.innerHTML = dataI.articles[0].title;
     art.innerHTML = dataI.articles[0].description;
     console.log(dataI.articles[0].description)
}
function appel(){
         let city = document.getElementById("truc").value;
         var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=fr&appid=22b673e2f8d2486cd9234e78213e22f3";
         
         $.get(url, success).done(function() {

         })
         .fail(function() {
             alert("error");
         })
         .always(function() {

         });
         newsApp(city);
        }

function newsApp(count){
          var urli = "https://newsapi.org/v2/everything?q="+count+"&language=fr&apiKey=c13696762c15461facf0f7ae702e1628";
          $.get(urli, success2).done(function() {

        })
        .fail(function() {
            alert("error");
        })
        .always(function() {

        });
       } 
       $('#cloud').hover(function() {  
          $('.mouth').toggleClass('mouth-hover');
          $('.left-eye').toggleClass('eyes-hover');
          $('.right-eye').toggleClass('eyes-hover');
          $('.happy').toggleClass('sad');  
     });