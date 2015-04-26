$(document).ready(function() {
	//图片轮播
	function imgSlider(){
		var url;
		var bgIndex = $(".homeSlider").children().length;
		var currIndex = 0;

		for(var i = 0;i < $(".homeSlider").children().length;i++){
			url = $(".homeSlider li:nth("+ i +")").data("bg");
			$(".homeSlider li:nth("+ i +")").css({
				'background-image': 'url('+url+')'
			});
		}
		
		setInterval(function(){
			if(currIndex == bgIndex-1){
				//如果是最后一个，从头开始轮播
				currIndex = 0;
				url = $(".homeSlider li:nth("+ (bgIndex-1) +")").data("bg");
				$(".homeSlider").css({'background-image':'url('+url+')'});
				$(".homeSlider li:nth("+ currIndex +")").fadeIn();
				$(".homeSlider li:nth("+ (bgIndex-1) +")").fadeOut(3000);
				// $(".homeSlider li:nth("+ currIndex +")").slideDown();
				// $(".homeSlider li:nth("+ (bgIndex-1) +")").slideUp();
			}
			else{
				url = $(".homeSlider li:nth("+ (currIndex+1) +")").data("bg");
				$(".homeSlider").css({'background-image':'url('+url+')'});
				$(".homeSlider li:nth("+ (currIndex+1) +")").fadeIn();
				$(".homeSlider li:nth("+ currIndex +")").fadeOut(3000);
				// $(".homeSlider li:nth("+ (currIndex+1) +")").slideDown();
				// $(".homeSlider li:nth("+ currIndex +")").slideUp();
				currIndex++;
			}

		},5000);
	}
	imgSlider();
	
	$.fn.fullpage({
		slidesColor: ['#fff', '#C2E5FF', '#FDF6E1', '#E9E9E9', '##3AD160', '#f3f3f3'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',

		resize: true,
		verticalCentered: false,
		// scrollOverflow: true,
		// controlArrows: false,
		// controlArrowColor: "rgba(0,0,0,0)",
		// slidesNavigation: true,
  //   slidesNavPosition: 'bottom',
  //   loopHorizontal: true,
		afterRender: function(){

		},
		afterLoad: function(anchorLink, index){
			var currSection = $(this);
			if(index == 1){
				console.log(currSection);
				$(".screen-main").find('h1').addClass("animated fadeInUp");
				$(".screen-main").find('h2').addClass("animated fadeInUp");
				$(".screen-main").find('p').addClass("animated fadeInUp");
			}
			if(index == 2){
				$(".section2").find(".intro").addClass("animated zoomIn");
			}
			if(index == 6){
				$('.contact-con a').fadeIn(1000);
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$(".screen-main").find('h1').removeClass("animated fadeInUp");
				$(".screen-main").find('h2').removeClass("animated fadeInUp");
				$(".screen-main").find('p').removeClass("animated fadeInUp");
			}
			if(index == 2){
				$(".section2").find(".intro").removeClass("animated zoomIn");

			}
			if(index == 6){
				$('.zanzhu-con a').fadeOut(1000);
			}
		}
	});
});

