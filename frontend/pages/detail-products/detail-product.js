let currentSlide = 0;

function showSlide(index) {
  let slides = document.getElementsByClassName("carousel-item");
  slides[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  let totalSlides = document.getElementsByClassName("carousel-item").length;
  showSlide((currentSlide + 1) % totalSlides);
}

window.onload = function () {
  showSlide(0);
  setInterval(nextSlide, 4000);
};
 function handleSizeClick(element, size) {
   // Remove the 'selected' class from all elements
   document.querySelectorAll(".size-img").forEach(function (el) {
     el.classList.remove("selected");
   });

   // Add the 'selected' class to the clicked element
   element.classList.add("selected");

   // Placeholder for your custom logic
   console.log("Selected size: " + size);
   // Add your logic for handling the size click event
   // For example, you can update a variable or perform other actions
 }

function handleSizeClick(element, size) {
  // Remove the 'selected' class from all elements
  document.querySelectorAll(".size-img").forEach(function (el) {
    el.classList.remove("selected");
  });

  // Add the 'selected' class to the clicked element
  element.classList.add("selected");

  // Placeholder for your custom logic
  console.log("Selected size: " + size);
  // Add your logic for handling the size click event
  // For example, you can update a variable or perform other actions
}
