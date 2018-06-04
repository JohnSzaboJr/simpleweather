var info;

navigator.geolocation.getCurrentPosition(success, error);

var lat = 0;

function success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=a9e4b8f8e32736da449d4bd4207895e3&units=metric', function(data) {
    info = JSON.stringify(data);
    document.getElementById("div1").innerHTML = info;
});
}

function error(position) {
    document.getElementById("div1").innerHTML = 'Geodata location not supported';
}


