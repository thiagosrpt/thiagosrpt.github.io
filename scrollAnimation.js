window.addEventListener("load", function() {

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

//GEAR 3
const gear3 = document.querySelector('.topart-gear3')
const gear3Style = getComputedStyle(gear3);
const gear3LeftPosition = parseInt(gear3Style.left.replace('px',''));
const gear3TopPosition = parseInt(gear3Style.top.replace('px',''));

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

//topart-lightbulb
const topartLightbulb = document.querySelector('.topart-lightbulb')
const topartLightbulbStyle = getComputedStyle(topartLightbulb);
const topartLightbulbLeftPosition = parseInt(topartLightbulbStyle.left.replace('px',''));
const topartLightbulbTopPosition = parseInt(topartLightbulbStyle.top.replace('px',''));

//topart_address-bar
const topartAddressBar = document.querySelector('.topart_address-bar')
const topartAddressBarStyle = getComputedStyle(topartAddressBar);
const topartAddressBarLeftPosition = parseInt(topartAddressBarStyle.left.replace('px',''));
const topartAddressBarTopPosition = parseInt(topartAddressBarStyle.top.replace('px',''));

//topart_bug
const topartBug = document.querySelector('.topart_bug')
const topartBugStyle = getComputedStyle(topartBug);
const topartBugLeftPosition = parseInt(topartBugStyle.left.replace('px',''));
const topartBugTopPosition = parseInt(topartBugStyle.top.replace('px',''));

//topart_GET
const topartGET = document.querySelector('.topart_GET')
const topartGETStyle = getComputedStyle(topartGET);
const topartGETLeftPosition = parseInt(topartGETStyle.left.replace('px',''));
const topartGETTopPosition = parseInt(topartGETStyle.top.replace('px',''));

//topart_green-lock-nut

//topart_phone
const topartPhone = document.querySelector('.topart_phone')
const topartPhoneStyle = getComputedStyle(topartPhone);
const topartPhoneLeftPosition = parseInt(topartPhoneStyle.left.replace('px',''));
const topartPhoneTopPosition = parseInt(topartPhoneStyle.top.replace('px',''));

//topart_POST

//topart_screw-driver
const topartScrewDriver = document.querySelector('.topart_screw-driver')
const topartScrewDriverStyle = getComputedStyle(topartScrewDriver);
const topartScrewDriverLeftPosition = parseInt(topartScrewDriverStyle.left.replace('px',''));
const topartScrewDriverTopPosition = parseInt(topartScrewDriverStyle.top.replace('px',''));



  window.addEventListener("scroll", () => {
    // GEAR 1
    let gear1NewLeftPosition = gear1LeftPosition + window.scrollY;
    let gear1NewTopPosition = gear1TopPosition - window.scrollY;
    gear1.style.left = `${gear1NewLeftPosition}px`
    gear1.style.top = `${gear1NewTopPosition}px`
    
    //GEAR 2
    let gear2NewLeftPosition = gear2LeftPosition + window.scrollY;
    gear2.style.left = `${gear2NewLeftPosition}px`

    //GEAR 3

      let gear3NewLeftPosition = gear3LeftPosition + (window.scrollY * 0.9);
      let gear3NewTopPosition = gear3TopPosition + (window.scrollY * 0.7);
      gear3.style.left = `${gear3NewLeftPosition}px`;
      gear3.style.top = `${gear3NewTopPosition}px`;


    // GEAR 4

      let gear4NewLeftPosition = gear4LeftPosition + (window.scrollY * 1.5);
      let gear4NewTopPosition = gear4TopPosition + (window.scrollY * 0.5);
      gear4.style.left = `${gear4NewLeftPosition}px`;
      gear4.style.top = `${gear4NewTopPosition}px`;
      gear4.style.transform = `rotate(${window.scrollY}deg)`;


    // GEAR 5
      let gear5NewLeftPosition = gear5LeftPosition + (window.scrollY * 1.2);
      let gear5NewTopPosition = gear5TopPosition - (window.scrollY * 0.5);
      gear5.style.left = `${gear5NewLeftPosition}px`;
      gear5.style.top = `${gear5NewTopPosition}px`;


    // GEAR 8

      let gear8NewLeftPosition = gear8LeftPosition - (window.scrollY * 0.95);
      let gear8NewTopPosition = gear8TopPosition + (window.scrollY);
      gear8.style.left = `${gear8NewLeftPosition}px`;
      gear8.style.top = `${gear8NewTopPosition}px`;


    // GEAR 9

      let gear9NewLeftPosition = gear9LeftPosition - window.scrollY;
      let gear9NewTopPosition = gear9TopPosition + (window.scrollY * 0.3);
      gear9.style.left = `${gear9NewLeftPosition}px`;
      gear9.style.top = `${gear9NewTopPosition}px`;


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
    gear11.style.transform = `rotate(${window.scrollY}deg)`;

    //topart-lightbulb topartLightbulb
    let topartLightbulbNewLeftPosition = topartLightbulbLeftPosition - (window.scrollY * 1.5);
    let topartLightbulbNewTopPosition = topartLightbulbTopPosition + (window.scrollY * 1.3);
    topartLightbulb.style.left = `${topartLightbulbNewLeftPosition}px`;
    topartLightbulb.style.top = `${topartLightbulbNewTopPosition}px`;
    topartLightbulb.style.transform = `rotate(${window.scrollY}deg)`;

    //topartAddressBar
    let topartAddressBarNewLeftPosition = topartAddressBarLeftPosition - (window.scrollY * 1.5);
    let topartAddressBarNewTopPosition = topartAddressBarTopPosition + (window.scrollY * 1.3);
    topartAddressBar.style.left = `${topartAddressBarNewLeftPosition}px`;
    topartAddressBar.style.top = `${topartAddressBarNewTopPosition}px`;
    topartAddressBar.style.transform = `rotate(${window.scrollY}deg)`;

    //topart_bug
    let topartBugNewLeftPosition = topartBugLeftPosition + (window.scrollY * 1.5);
    let topartBugNewTopPosition = topartBugTopPosition + (window.scrollY * 1.3);
    topartBug.style.left = `${topartBugNewLeftPosition}px`;
    topartBug.style.top = `${topartBugNewTopPosition}px`;
    topartBug.style.transform = `rotate(-${window.scrollY}deg)`;

    //topartGET
    let topartGETNewLeftPosition = topartGETLeftPosition - (window.scrollY * 1.5);
    let topartGETNewTopPosition = topartGETTopPosition - (window.scrollY * 1.3);
    topartGET.style.left = `${topartGETNewLeftPosition}px`;
    topartGET.style.top = `${topartGETNewTopPosition}px`;
    topartGET.style.transform = `rotate(${window.scrollY}deg)`;


    //topartPhone
    let topartPhoneNewLeftPosition = topartPhoneLeftPosition - (window.scrollY * 1.5);
    let topartPhoneNewTopPosition = topartPhoneTopPosition - (window.scrollY * 1.3);
    topartPhone.style.left = `${topartPhoneNewLeftPosition}px`;
    topartPhone.style.top = `${topartPhoneNewTopPosition}px`;
    topartPhone.style.transform = `rotate(${window.scrollY}deg)`;

    //topartScrewDriver
    let topartScrewDriverNewLeftPosition = topartScrewDriverLeftPosition + (window.scrollY * 1);
    let topartScrewDriverNewTopPosition = topartScrewDriverTopPosition - (window.scrollY * 1);
    topartScrewDriver.style.left = `${topartScrewDriverNewLeftPosition}px`;
    topartScrewDriver.style.top = `${topartScrewDriverNewTopPosition}px`;
    topartScrewDriver.style.transform = `rotate(${window.scrollY}deg)`;


  });

});