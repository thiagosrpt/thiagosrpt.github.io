//document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function() {
const form = document.getElementById("form");
form.addEventListener('click', Submit);

  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDegreeC = document.querySelector(".temperature-degree-celcius");
  let locationTimezone = document.querySelector(".location-timezone");
  let locationRegion = document.querySelector(".city-name");
  let locationLocalTime = document.querySelector(".localtime");
  let currentHumidity = document.querySelector(".humidity");
  

  const proxy = "https://cros-anywhere.herokuapp.com/";
  let ip_response = `${[[proxy]]}https://api.ipify.org?format=json`;
  fetch(ip_response)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { ip } = data;
      getCoordinates(ip);
    });

  function getCoordinates(ip) {
    const location = `${[[proxy]]}http://ip-api.com/json/${ip}`;
    fetch(location)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { lat } = data;
        const { lon } = data;
        getWeather(lat, lon);
      });
  }



  function getWeather(lat, log) {
    const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${log}&aqi=no`; // REAL REQUEST
    //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=12.52,-69.96&aqi=no`; //ARUBATEST
    //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=30.0444,31.2357&aqi=no`; //CAIRO TEST
    //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${long}&aqi=no`;

    //must be place here bc the const api is not available outise of this bracket scope.
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { temp_f, temp_c, condition, humidity } = data.current;
        const { tz_id, region , country, localtime} = data.location;
        const { text } = data.current.condition;
        //set DOM Elements from the API:
        temperatureDegree.textContent = Math.round(temp_f);
        temperatureDegreeC.textContent = Math.round(temp_c);
        locationRegion.textContent = `${region}, ${country}`;
        currentHumidity.textContent = `${humidity}% humidity`;
        temperatureDescription.textContent = condition.text.toLowerCase();
        locationTimezone.textContent = tz_id;
        const currentDate = new Date(localtime).toLocaleTimeString(undefined, {
            day:    'numeric',
            month:  'numeric',
            year:   'numeric',
            hour:   '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        //found this formula to convert time here https://www.toptal.com/software/definitive-guide-to-datetime-manipulation#:~:text=Getting%20the%20Current%20Time%20Stamp&text=const%20currentDate%20%3D%20new%20Date()%3B%20const%20timestamp%20%3D%20currentDate.,IE8%2C%20you%20can%20use%20Date.
        locationLocalTime.textContent = `Local Time: ${currentDate}`
        //Set icon
        setIcons(text);
      });
  }

  function setIcons(text) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = "?";
    console.log(text);
    skycons.play();
    //return skycons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
    if (text.includes("rain")) {
      skycons.add(document.getElementById("icon"), Skycons.RAIN);
    }
    if (text.includes("cloudy")) {
      skycons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_DAY);
    }
    if (text.includes("cloudy") && text.includes("night")) {
      skycons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_NIGHT);
    }
    if (text.includes("cloudy")) {
      skycons.add(document.getElementById("icon"), Skycons.CLOUDY);
    }
    if (text.includes("snow")) {
      skycons.add(document.getElementById("icon"), Skycons.SNOW);
    }
    if (text.includes("light drizzle") || text.includes("light rain")) {
      skycons.add(document.getElementById("icon"), Skycons.SLEET);
    }
    if (text.includes("sunny")) {
      skycons.add(document.getElementById("icon"), Skycons.CLEAR_DAY);
    }
    if (text.includes("clear") || text.includes("light rain")) {
      skycons.add(document.getElementById("icon"), Skycons.CLEAR_NIGHT);
    } else {
      skycons.add(document.getElementById("icon"), Skycons.FOG);
    }
  }

    function Submit() {
        const q = document.getElementById("country-input").placeholder;
        console.log(q);
        newQuery(q);
    }

    function newQuery(q){
        const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${q}&aqi=no`;
    
        //must be place here bc the const api is not available outise of this bracket scope.
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const { lat, lon } = data.location;
                getWeather(lat, lon);
            });
    
    }


    function newQ() {
        const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=Madrid&aqi=no`; // REAL REQUEST
        //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=12.52,-69.96&aqi=no`; //ARUBATEST
        //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=30.0444,31.2357&aqi=no`; //CAIRO TEST
        //const api = `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${long}&aqi=no`;
    
        //must be place here bc the const api is not available outise of this bracket scope.
        fetch(api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const { temp_f, condition } = data.current;
            const { tz_id } = data.location;
            const { text } = data.current.condition;
            //set DOM Elements from the API:
            temperatureDegree.textContent = temp_f;
            locationTimezone.textContent = tz_id;
            temperatureDescription.textContent = condition.text.toUpperCase();
            //Set icon
            setIcons(text);
          });
      }


});





