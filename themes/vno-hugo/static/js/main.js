$(document).ready(function() {


  $('a.blog-button').click(function() {
    if (location.hash && location.hash == "#blog") return;
    $('.main-post-list').toggleClass('hidden');
    $('.projects-list, .projects-blur, .shop-list').addClass('hidden');
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

  $('a.shop-button').click(function() {
    if (location.hash && location.hash == "#shop") return;
    $('.shop-list').toggleClass('hidden');
    $('.projects-list, .projects-blur, .main-post-list').addClass('hidden');
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
    if (location.hash && location.hash == "#projects") return;
    $('.projects-list, projects-blur').toggleClass('hidden');
    $('.shop-list, .main-post-list').addClass('hidden');

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }

  });


  // if (window.location.hash && window.location.hash == "#blog") {
  //   $('.panel-cover').addClass('panel-cover--collapsed');
  //   $('.projects-list').addClass('hidden');
  //   $('.projects-blur').addClass('hidden');
  //   $('.shop-list').addClass('hidden');
  //
  //   $('.main-post-list').removeClass('hidden');
  //
  // }
  //
  // if (window.location.hash && window.location.hash == "#shop") {
  //   $('.shop-list').removeClass('hidden');
  //
  //   $('.panel-cover').addClass('panel-cover--collapsed');
  //   $('.projects-list').addClass('hidden');
  //   $('.projects-blur').addClass('hidden');
  //   $('.main-post-list').addClass('hidden');
  //
  //
  // }
  //
  // if (window.location.hash && window.location.hash == "#projects") {
  //   $('.panel-cover').addClass('panel-cover--collapsed');
  //   $('.main-post-list').addClass('hidden');
  //   $('.shop-list').addClass('hidden');
  //
  //   $('.projects-list').removeClass('hidden');
  //   $('.projects-blur').removeClass('hidden');
  // }

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

  $('.navigation-wrapper .projects-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }

    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .shop-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }

    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  // hide the snipcart total price on page load
  $('.snipcart-total-price').hide();

  // add click event listener to all navigation links except for the shop link
  $('.navigation li:not(.shop-button)').click(function(event) {
    // hide the snipcart total price
    $(".snipcart-total-price").stop(true, true).fadeOut(200);
    // $('.snipcart-total-price').hide();
  });

  // show the snipcart total price when the shop link is clicked
  $('.navigation li .shop-button').click(function(event) {
    // show the snipcart total price

    $(".snipcart-total-price").stop(true, true).fadeIn(200).animate({marginLeft: "-150px"}, 50).animate({marginLeft: "-170px"}, 50).animate({marginLeft: "-160px"}, 50);
    event.preventDefault();
    // $('.snipcart-total-price').show();
  });


});


var Samesies = function() {
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
  // console.log($(window).width()>810);

  // console.log($('.projects-blur').hasClass('hidden'));
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
