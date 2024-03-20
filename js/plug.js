$(document).ready(function () {

$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});

    $('.sidenav .direct').on('click', function() {
            $(this).parent().toggleClass('open').children('.mob_menu').collapse('toggle');
            $(this).parent().siblings().removeClass('open').children('.mob_menu.in').collapse('hide');
        });

    $(".pro_drop").hover(function(){
            $(this).parent().find(".pro_menu").slideToggle();
        });

    $(".sub_cat:first-of-type .mob_item").click(function(){
            $(".sub_cat:last-of-type .mob_item").css('display','block');
        });


$(window).scroll(function () {  
		if ($(window).scrollTop() > 121) {
			$('.logo').css('width','80px');
		}
		if ($(window).scrollTop() < 122) {
			$('.logo').css('width','136px');
		}
	});


$(".mainslider").owlCarousel({
		items:1,
		autoplay:true,
		rtl:true,
		loop: true,
        nav: true,
        navText:[]
	});


$('.pro_slider').owlCarousel({
		items:4,
		autoplay:false,
		rtl:true,
		loop: true,
		nav:true,
        navText:[],
        margin:0,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:3
			},
			991:{
				items:3
			},
			1199:{
				items:4
			}
		}
	}); 

 $('.par_slider').owlCarousel({
		items:9,
		autoplay:false,
		rtl:true,
		loop: true,
        margin:15,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:5
			},
			991:{
				items:7
			},
			1199:{
				items:9
			}
		}
	});

});