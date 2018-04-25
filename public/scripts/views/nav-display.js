$('.nav-icon').click(function(){
  $('body').toggleClass('hidden');
  $('.main-nav ul').toggleClass('menu');
  $('.main-nav ul').toggleClass('display-nav');
});

$('.main-nav ul li').click(function(){
  $('body').removeClass('hidden');
  $('.main-nav ul').addClass('menu');
  $('.main-nav ul').removeClass('display-nav');
});

// view.menuToggle = () => {
 //   var $menu = $('#menu');
 //   var $hamburger = $('.icon-menu');
 //
 //   $hamburger.on('click', function(){
 //     $menu.toggleClass('active');
 //     $hamburger.toggleClass('active');
 //   });
 // };
