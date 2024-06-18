$("h1").text("Hola");
$("h1").addClass("big-title margin1");
$("button").html("<em>Submit</em>");
$("button").addClass("margin2");
$("a").text("Apple");
$("a").addClass("margin2");
$("a").attr("href", "https://www.apple.com");
// $("h1").click(function () {
//   $("h1").css("color", "green");
// });
// $("button").click(function () {
//   $("h1").css("color", "yellow");
// });
// $("body").keypress(function (event) {
//   $("h1").text(event.key);
// });
// $("h1").before("<button>new</button>");
// $("h1").after("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("h1").append("<button>new</button>");
// $("button").on("click", function () {
//   $("h1").hide();
// });
// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({margin: 20});
});
