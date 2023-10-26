// this use global
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      dropdownContent.style.display = "none";
    }
  });
});
