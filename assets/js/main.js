$(function () {


  console.log($(".full-screen"));

  // section1のスライダー用
  $('.bgimg-slider').bgSwitcher({
    images: ['./assets/img/beach.jpeg', './assets/img/livingroom2.jpeg', './assets/img/out.jpg'],
    effect: "fade",
    easing: "linear"
  });
});