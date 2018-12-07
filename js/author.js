	$('#author').click(function(){
        alert("Autor Strony: rav337\nKontakt: piotrt337@gmail.com");

	});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
});