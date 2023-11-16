// script.js
function initMap() {
  // Create a map centered at a specific location
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
console.log(initMap);


// popular products
var likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('fas');
        this.classList.toggle('far');
    });
});
