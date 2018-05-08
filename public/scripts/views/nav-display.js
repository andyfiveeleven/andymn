$('.nav-icon').click(function(){
  $('.nav-icon').toggleClass('open');
  $('body').toggleClass('hidden');
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
});

$('.main-nav ul li').click(function(){
  $('.nav-icon').toggleClass('open');
  $('body').removeClass('hidden');
  $('.main-nav ul').addClass('menu');
  $('.main-nav ul').removeClass('display-nav');
});
