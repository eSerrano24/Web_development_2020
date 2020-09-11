$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "green");
});

$("input").keypress(function (e) {
  $("h1").text(e.key);
});
