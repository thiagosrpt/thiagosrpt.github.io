/*

var topSectionLastPosition = 0


window.addEventListener("scroll", function() {
  var topSection = document.querySelector('.top-section');
  var current = topSection.getBoundingClientRect();
  var scroller = document.getElementById('about-section')

  if (current.y < topSectionLastPosition){
    // going down
    console.log("going down " + current.y)

 } else {
    // going up code
    console.log("going up")
 }
 topSectionLastPosition = current.y;
});

*/
/*

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  console.log("st: " + st)
  console.log("lastScroll " + lastScrollTop)
  if (st > lastScrollTop){
    // going down
    console.log("going down")

 } else {
    // going up code
    console.log("going up")
 }
 lastScrollTop = st <= 0 ? 0 : st;
});

*/