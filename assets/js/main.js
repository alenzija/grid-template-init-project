$(document).ready(function () {
  $(".navbar-action").on("click", function () {
    $(this).toggleClass("open");
    $(".navbar-list").toggleClass("navbar-list--active");
  });
});
