$(function(){
	
	//自定义滚动条
	$(".scroll").panel({iWheelStep: 32});

	// Featured tab切换
	$(".feaTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("feaBtn").siblings().removeClass("feaBtn");
       $(".feaContent .content").eq(index).addClass("feaActive").siblings().removeClass("feaActive");
 	});

	// Events tab切换
	$(".eventsTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("eventsBtn").siblings().removeClass("eventsBtn");
       $(".eventsContent .content").eq(index).addClass("eventsActive").siblings().removeClass("eventsActive");
 	});

 	// Cities tab切换
	$(".citiesTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("citiesBtn").siblings().removeClass("citiesBtn");
       $(".citiesContent .content").eq(index).addClass("citiesActive").siblings().removeClass("citiesActive");
 	});

  	var swiperSchool = new Swiper('.feaSchool', {
	    slidesPerView: 3,
	    slidesPerColumn: 2,
	    spaceBetween: 16,
	    autoplay: true,
    	loopFillGroupWithBlank: true,
	    // slidesPerGroup: 4,
	    pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	    },
    });
    var swiperHealth = new Swiper('.feaHealth', {
	    slidesPerView: 3,
	    slidesPerColumn: 2,
	    spaceBetween: 16,
	    autoplay: true,
    	loopFillGroupWithBlank: true,
	    // slidesPerGroup: 4,
	    observer: true,
	    observeParents: true,
	    pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	    },
    });

	// Magazines tab切换
	$(".magazinesTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("magazinesBtn").siblings().removeClass("magazinesBtn");
       $(".magazinesContent .content").eq(index).addClass("magazinesActive").siblings().removeClass("magazinesActive");
 	});



});