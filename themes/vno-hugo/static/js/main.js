$(document).ready(function() {

  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    $('.main-post-list').removeClass('hidden');
    $('.projects-list').addClass('hidden');
    $('.projects-blur').addClass('hidden');
    $('.projects-blur').css('zIndex', '780');
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  $('a.projects-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#projects") return;
    $('.projects-list').removeClass('hidden');
    $('.projects-blur').removeClass('hidden');
    $('.main-post-list').addClass('hidden');
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.projects-list').addClass('hidden');
    $('.projects-blur').addClass('hidden');

    $('.main-post-list').removeClass('hidden');

  }

  if (window.location.hash && window.location.hash == "#projects") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').addClass('hidden');

    $('.projects-list').removeClass('hidden');
    $('.projects-blur').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }

    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });
});


var Samesies = function() {
  console.log('yoo');
  var blur=$('.projects-blur').css('height');
  var wrapper=$('.content-wrapper').css('height');


  if(blur < wrapper){
    $('.projects-blur').css('height', wrapper);
  }

  if ($(window).width()>810 && window.location.hash == "#projects") {
    if ($('.projects-blur').hasClass('hidden')){
      $('.projects-blur').removeClass('hidden');
    }

  }  else {
    $('.projects-blur').addClass('hidden');
  }
  console.log($(window).width()>810);

  console.log($('.projects-blur').hasClass('hidden'));
};

setInterval(Samesies, 500); // call every 1000 milliseconds

// Custom
// $(function() {
//   var $typed = $("#typed");
//   $typed.typed({
//     strings: [$typed.text()],
//     typeSpeed: 50,
//     startDelay: 1000
//   });
// });

// var blur=document.getElementById('projects-blur').style.height;
// var wrapper=document.getElementById('content-wrapper').style.height;
// if(wrapper != blur)
// {
//   console.log('heeere');
//   document.getElementById('projects-blur').style.height=wrapper;
// }
