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
				initMap();
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

			}
		}
	});
	//百度地图
	function initMap (argument) {
    var sContent = '<div style="margin:0;line-height:20px;padding:12px 6px;width:300px;height:90px;">' +
                    '<img id="mapImg" src="img/home/0.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '<p>联系人：陈小姐</p><p>电话：(010)59928888</p><p>地址：河北省承德市丰宁满族自治县大滩镇元山子村</p>' +
                  '</div>';
    var map = new BMap.Map("baiduMap");
  	var point = new BMap.Point(116.011016,41.613199);
  	var marker = new BMap.Marker(point);
  	var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
  	infoWindow.width = 300;
  	map.centerAndZoom(point, 8);
  	map.addOverlay(marker);
  	map.addControl(new BMap.NavigationControl());    
  	map.addControl(new BMap.ScaleControl());    
  	map.addControl(new BMap.OverviewMapControl());  
	  marker.openInfoWindow(infoWindow);
	  //图片加载完毕重绘infowindow
	  // document.getElementById('mapImg').onload = function (){
		 //  infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	  // }
	}
});

