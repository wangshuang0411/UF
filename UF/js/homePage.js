$(function(){
	// 相册轮播
	$('.home-slick-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		arrows: false,
		speed: 500,
		infinite: false,
		fade: true,
		swipe: false,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				arrows: true,
						fade: false,
						swipe: true,
						infinite: true,
						dots: true
			  	}
			},
			{
			  breakpoint: 300,
			  settings: "unslick" // destroys slick
			}
		],
		asNavFor: '.home-slick-thumb'
	});
	$('.home-slick-thumb').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.home-slick-big',
		dots: false,
		infinite: false,
		focusOnSelect: true   
	});

	$('.slick-big').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			},
			{
				breakpoint: 300,
				settings: "unslick"
			}
		]
	});

	(function(){
		var trigger_slick = $(".trigger-slick");

		$(".article-item").each(function(index){
			$(this).on("mouseover",function(){
					var index = $(this).index();
					$(".home-slick-big").slick("slickGoTo", index, true);
					$(this).siblings().css("background-color","#000");
					$(this).siblings().find("p").css("color","#eee");
					$(this).css('background-color','#3d3d3d');
					$(this).find("p").css("color","#fff");
				}
			)
		})
	})();

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

  	var swiperSchool = new Swiper('.feaSchool', {
	    slidesPerView: 4,
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
	    slidesPerView: 4,
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

	$(".treebox .level1>a").click(function(){
		$(this).addClass('current')   //给当前元素添加"current"样式
		.find('i').addClass('down')   //小箭头向下样式
		.parent().next().slideDown('slow','easeOutQuad')  //下一个元素显示
		.parent().siblings().children('a').removeClass('current')//父元素的兄弟元素的子元素去除"current"样式
		.find('i').removeClass('down').parent().next().slideUp('slow','easeOutQuad');//隐藏
		 return false; //阻止默认时间
	});

	// Magazines tab切换
	$(".magazinesTab a").off("click").on("click",function(){
       var index = $(this).index();
       $(this).addClass("magazinesBtn").siblings().removeClass("magazinesBtn");
       $(".magazinesContent .content").eq(index).addClass("magazinesActive").siblings().removeClass("magazinesActive");
 	});



});