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
        const { regionName} = data;
        getWeather(lat, lon, city, regionName);
      });
  }

  async function getWeather(lat, log, city, regionName) {
    const api = await `${[[proxy]]}https://api.weatherapi.com/v1/current.json?key=c2ef9cc9ff124396863165707220705&q=${lat},${log}&aqi=no`; // REAL REQUEST

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


// Scroll effect

//GEAR 1
const gear1 = document.querySelector('.topart-gear1')
const gear1Style = getComputedStyle(gear1);
const gear1LeftPosition = parseInt(gear1Style.left.replace('px',''));
const gear1TopPosition = parseInt(gear1Style.top.replace('px',''));

//GEAR 2
const gear2 = document.querySelector('.topart-gear2')
const gear2Style = getComputedStyle(gear2);
const gear2LeftPosition = parseInt(gear2Style.left.replace('px',''));

//GEAR 4
const gear4 = document.querySelector('.topart-gear4')
const gear4Style = getComputedStyle(gear4);
const gear4LeftPosition = parseInt(gear4Style.left.replace('px',''));
const gear4TopPosition = parseInt(gear4Style.top.replace('px',''));

//GEAR 5
const gear5 = document.querySelector('.topart-gear5')
const gear5Style = getComputedStyle(gear5);
const gear5LeftPosition = parseInt(gear5Style.left.replace('px',''));
const gear5TopPosition = parseInt(gear5Style.top.replace('px',''));

//GEAR 8
const gear8 = document.querySelector('.topart-gear8')
const gear8Style = getComputedStyle(gear8);
const gear8LeftPosition = parseInt(gear8Style.left.replace('px',''));
const gear8TopPosition = parseInt(gear8Style.top.replace('px',''));

//GEAR 9
const gear9 = document.querySelector('.topart-gear9')
const gear9Style = getComputedStyle(gear9);
const gear9LeftPosition = parseInt(gear9Style.left.replace('px',''));
const gear9TopPosition = parseInt(gear9Style.top.replace('px',''));

//GEAR 10
const gear10 = document.querySelector('.topart-gear10')
const gear10Style = getComputedStyle(gear10);
const gear10LeftPosition = parseInt(gear10Style.left.replace('px',''));
const gear10TopPosition = parseInt(gear10Style.top.replace('px',''));

//GEAR 11
const gear11 = document.querySelector('.topart-gear11')
const gear11Style = getComputedStyle(gear11);
const gear11LeftPosition = parseInt(gear11Style.left.replace('px',''));
const gear11TopPosition = parseInt(gear11Style.top.replace('px',''));



window.addEventListener("scroll", () => {

  // GEAR 1
  let gear1NewLeftPosition = gear1LeftPosition + window.scrollY;
  let gear1NewTopPosition = gear1TopPosition - window.scrollY;
  gear1.style.left = `${gear1NewLeftPosition}px`
  gear1.style.top = `${gear1NewTopPosition}px`

  //GEAR 2
  let gear2NewLeftPosition = gear2LeftPosition + window.scrollY;
  gear2.style.left = `${gear2NewLeftPosition}px`

  // GEAR 4
  if(window.scrollY < 200) {
    let gear4NewLeftPosition = gear4LeftPosition + window.scrollY;
    let gear4NewTopPosition = gear4TopPosition + window.scrollY;
    gear4.style.left = `${gear4NewLeftPosition}px`;
    gear4.style.top = `${gear4NewTopPosition}px`;
  }

  // GEAR 5
    let gear5NewLeftPosition = gear5LeftPosition + window.scrollY;
    let gear5NewTopPosition = gear5TopPosition - window.scrollY;
    gear5.style.left = `${gear5NewLeftPosition}px`;
    gear5.style.top = `${gear5NewTopPosition}px`;


  // GEAR 8
  let gear8NewLeftPosition = gear8LeftPosition - window.scrollY;
  let gear8NewTopPosition = gear8TopPosition + window.scrollY;
  gear8.style.left = `${gear8NewLeftPosition}px`;
  gear8.style.top = `${gear8NewTopPosition}px`;

  // GEAR 9
  if(window.scrollY < 325) {
    let gear9NewLeftPosition = gear9LeftPosition - window.scrollY;
    let gear9NewTopPosition = gear9TopPosition + window.scrollY;
    gear9.style.left = `${gear9NewLeftPosition}px`;
    gear9.style.top = `${gear9NewTopPosition}px`;
  }

  // GEAR 10
  let gear10NewLeftPosition = gear10LeftPosition - window.scrollY;
  let gear10NewTopPosition = gear10TopPosition - window.scrollY;
  gear10.style.left = `${gear10NewLeftPosition}px`;
  gear10.style.top = `${gear10NewTopPosition}px`;

  // GEAR 11
  let gear11NewLeftPosition = gear11LeftPosition - window.scrollY;
  let gear11NewTopPosition = gear11TopPosition - window.scrollY;
  gear11.style.left = `${gear11NewLeftPosition}px`;
  gear11.style.top = `${gear11NewTopPosition}px`;


});

});







