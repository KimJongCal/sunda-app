$(document).ready(function () {
  var p_height = $(window).height();
  var prev_tab = $("#home_btn");
  prev_tab.animate({
    opacity: "0.2"
  }, "slow");
  $(".d").css("height", p_height);
  $(".fa").click(function () {
    var body = $("html, body");
    var count = $(this).attr("index");
    prev_tab.animate({
      opacity: "1"
    }, "slow");
    $(this).animate({
      opacity: "0.2"
    }, "slow");
    body.animate({
      scrollTop: (p_height * (count - 1))
    }, 1500);
    prev_tab = $(this);
  });
});