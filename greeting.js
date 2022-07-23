window.addEventListener("load", function() {

  let userLocation = document.getElementById("user-location");
  let visitor = document.getElementById("avisitor");
  let weatherPhrase = document.getElementById("weather_phrase");

  
  

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

async function getCoordinates(ip) {
    const location = await `${[[proxy]]}http://ip-api.com/json/${ip}`;
    fetch(location)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { lat } = data;
        const { lon } = data;
        const { city } = data;
        getWeather(lat, lon, city);
      });
  }

  async function getWeather(lat, log, city) {
    const api = await `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${log}&aqi=no`; // REAL REQUEST

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let { text } = data.current.condition;
        let { feelslike_f } = data.current;
        if (city != null) {
          userLocation.innerHTML = ` <b>${city}</b>`;
          visitor.innerHTML = `A visitor from`;
        }
        if(text === "Sunny") {
          weatherPhrase.innerHTML = " It's seems to be a ☀️ day over there!";
        }
        if(feelslike_f > 85) {
          weatherPhrase.innerHTML = " It's hot today 🥵, stay hydrated.";
        }
        if (text == "Clear"){
          weatherPhrase.innerHTML = " It seems to be a <b>nice evening</b> over there 🌙.";
        }
        if (text.includes("rain")) {
          weatherPhrase.innerHTML = " Raining today?<b> Don't Forget your umbrella</b>!";
        }
        if (text.includes("Blizzard") || text.includes("reezing") || text.includes("snow")) {
          weatherPhrase.innerHTML = " Bruh... Stay warm!";
        }
        if(feelslike_f < 44) {
          weatherPhrase.innerHTML = " Bruh! it's cold 🥶, stay warm.";
        }
      });
  }

});





