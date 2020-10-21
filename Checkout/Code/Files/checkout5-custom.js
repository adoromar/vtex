$('body').on('click', '.coupon-label', function(event) {
  $('.coupon-fields > span').first().slideToggle();
});

setTimeout(function(){  
  $('#summary-postal-code').attr('placeholder', 'Digite seu CEP');
}, 2000);


$('body').on('focus', '#ship-more-info', function(event) {
 $('#ship-more-info').attr('maxlength', '30')
});