window.addEventListener("load", function() {

  let userLocation = document.getElementById("user-location");
  let visitor = document.getElementById("avisitor");
  let weatherPhrase = document.getElementById("weather_phrase");



  const proxy = "https://cros-anywhere.herokuapp.com/";
  let ip_response = `https://api.ipify.org?format=json`;

  fetch(ip_response)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { ip } = data;
      getCoordinates(ip);
    });

async function getCoordinates(ip) {
    const location = await `http://ip-api.com/json/${ip}`;
    fetch(location)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { lat } = data;
        const { lon } = data;
        const { city } = data;
        const { regionName} = data;
        getWeather(lat, lon, city, regionName);
      });
  }

  async function getWeather(lat, log, city, regionName) {
    const api = await `https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${log}&aqi=no`; // REAL REQUEST

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let { text } = data.current.condition;
        let { feelslike_f } = data.current;
        let { localtime } = data.location;
        let hour = localtime.substring(10,13);
        if (city != null) {
          visitor.innerHTML = `Visiting from `;
          userLocation.innerHTML = ` <b>${regionName}?</b>`;
        }
        if(text === "Sunny") {
          weatherPhrase.innerHTML = " It seems to be a ☀️ day over there!";
        }

        if(text === "Partly cloudy" && feelslike_f > 80 && hour < 18) {
          weatherPhrase.innerHTML = " It seems to be a nice day 🌤️ enjoy!";
        }

        if(text === "Partly cloudy" && feelslike_f > 80 && hour > 18) {
          weatherPhrase.innerHTML = " It seems to be a pleasant evening 🌙";
        }

        if(feelslike_f > 86) {
          weatherPhrase.innerHTML = " It's hot today 🥵 over there, stay hydrated.";
        }

        if (text == "Clear"){
          weatherPhrase.innerHTML = " It seems to be a <b>nice evening</b> over there 🌙.";
        }

        if (text.includes("rain")) {
          weatherPhrase.innerHTML = " It may rain today 🌧️<b> Don't forget your umbrella ☂️ </b>!";
        }

        if (text.includes("Blizzard") || text.includes("reezing") || text.includes("snow")) {
          weatherPhrase.innerHTML = " Bruh...🥶 Stay warm!";
        }

        if(feelslike_f < 44) {
          weatherPhrase.innerHTML = " Bruh! it's cold 🥶, stay warm.";
        }
      });
  }

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.style.opacity = "0.7";
    } else {
      toTop.style.opacity = "0";
    }
  });

});







