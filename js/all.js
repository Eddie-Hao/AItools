$(document).ready(function () {
  // 漢堡選單
  $('.navbar-collapse-btn').click(function () {
    $('.navbar-collapse').toggleClass('active');
    $('.navbar-collapse-icon').toggleClass('d-none');
  });
  // 篩選功能 頁面切換
  $('.tools-type-btn').click(function (e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('.tools-type-btn').removeClass('active');
  }) 
  // 篩選功能 下拉選單
  // 種類
  $('.dropdown-filter-btn').click(function(e){
    e.preventDefault();
    $('.dropdown-filter-menu').toggleClass('d-none');
  });
  // 新舊
  $('.dropdown-order-btn').click(function(e){
    e.preventDefault();
    $('.dropdown-order-menu').toggleClass('d-none');
  });
  $('.new-to-old').click(function(e){
    e.preventDefault();
    $('.dropdown-order-menu').toggleClass('d-none');
    $('.dropdown-order-btnText').text('由新到舊');
  });
  $('.old-to-new').click(function(e){
    e.preventDefault();
    $('.dropdown-order-menu').toggleClass('d-none');
    $('.dropdown-order-btnText').text('由舊到新');
  });

  // 手風琴
  $('.qa-list-link').click(function(e){
    e.preventDefault();
    $(this).find('.material-icons').toggleClass('d-none');
    $(this).find('h5,span').toggleClass('text-primary');
    $(this).parent().find('p').slideToggle('fast').toggleClass('d-none');
   
  });

  // back to top
  $('.back-to-top').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},800);
  });
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 1
    }
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

