$(document).ready(function () {
  // ========== DropDown Navbar And Its Icons ==========
  $(".nav-icons i").on("click", function () {
    $(this).fadeOut(500).delay(100);
    $(this).siblings(".d-none").removeClass("d-none");
    $("header .dropdown").slideToggle(400);
    $(this).siblings().fadeIn(500);
  });
  // ========== DropDown Search And Its Icon ==========
  $("header .icons i:last-of-type").on("click", function () {
    $(this).toggleClass("active");
    $("header input").fadeToggle(500);
  });
  // ========== DropDown Navbar And Its Icons ==========

  // ========== DropDown Navbar And Its Icons ==========
});
