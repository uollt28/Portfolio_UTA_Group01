$(document).ready(function() {
    $('.slideshow img:first-child').addClass('active').show();
  
    setInterval(function() {
      var active = $('.slideshow img.active');
      var next = active.next('img');
  
      if (next.length === 0) {
        next = $('.slideshow img:first-child');
      }
  
      active.removeClass('active').fadeOut(0);
      next.addClass('active').fadeIn(2000);
    }, 3000); // Thời gian chuyển đổi giữa các hình ảnh (3 giây trong ví dụ)
  });
  $(document).ready(function() {
    $('.slideshow1 img:first-child').addClass('active').show();
  
    setInterval(function() {
      var active = $('.slideshow1 img.active');
      var next = active.next('img');
  
      if (next.length === 0) {
        next = $('.slideshow1 img:first-child');
      }
  
      active.removeClass('active').fadeOut(0);
      next.addClass('active').fadeIn(2000);
    }, 3000); // Thời gian chuyển đổi giữa các hình ảnh (3 giây trong ví dụ)
  });
  