$(document).ready(function(){
	
	function hoverBtn1() {
		$("header .top_menu .box > li").hover(
			function(){
				$(this).addClass("active");
				$(this).find("ul").addClass("active");
			},
			function(){
				$("header .top_menu .box > li").removeClass("active");
				$("header .top_menu .box > li ul").removeClass("active");
			}
		);
	};
	hoverBtn1(); // 탑 메뉴
	
	function clickBtn1() {
		var btn = true;
		
		$("header .lang ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
		
		$("header .lang h2").click(function(){
			
			if(btn) {
				btn = false;
				$(this).addClass("active");
				$("header .lang ul").addClass("active");
			}
			else {
				btn = true;
				$(this).removeClass("active");
				$("header .lang ul").removeClass("active");
			}
		});
	};
	clickBtn1(); // 언어 버튼
	
	function scrollHeader() {
		$(window).scroll(function(){
			var sc = $(this).scrollTop();
			var sv = $("section#main_research").offset().top;
			
			if (sc > sv) {
				$("#scroll_top").addClass("active");
			}
			else if (sc > 0) {
				$("header").css({"background":"#fff","box-shadow":"2px 2px 10px rgb(0 0 0 / 10%)"});
				$("header .wrap").addClass("floating");
				$("header .wrap .logo img:first-child").attr("src","./images/logo.svg");
				$("header .top_menu .box > li").addClass("scroll");
				$("header i.xi-apps").addClass("scroll");
				$("header .top_menu li").hover(
					function(){
					$(this).find("h2").addClass("scroll");
					$(this).on("scroll touchmove mousewheel",function(){
						event.preventDefault();
  						event.stopPropagation();
  						return false;
					});
					},
					function(){
					$(this).find("h2").removeClass("scroll");
					$(this).off('scroll touchmove mousewheel');
					}
				)
			}
			else {
				$("header").css({"background":"none","box-shadow":"none"});
				$("header .wrap").removeClass("floating");
				$("header .wrap .logo img:first-child").attr("src","./images/logo_w.svg");
				$("header .top_menu .box > li").removeClass("scroll");
				$("header i.xi-apps").removeClass("scroll");
				$("#scroll_top").removeClass("active");
			}
		});
	};
	scrollHeader(); // 스크롤했을때 헤더색
	
	function visibleBtn() {
		$("section#main_visual .inner1 .cont1 .box1 ul li").click(function(){
			var ln = $(this).index()+1;
			
			
			$(this).children().addClass("active").parent().siblings().children().removeClass("active");
			$("section#main_visual .inner1 .cont2 ul li:nth-child("+ln+")").addClass("active").siblings().removeClass("active");
			$("section#main_visual .inner1 .cont3 ul li:nth-child("+ln+")").addClass("active").siblings().removeClass("active");
		});
	};
	visibleBtn();
	
	function intervalClick() {
		
		var n = $("section#main_visual .inner1 .cont1 .box1 ul li.active").index()+1;
		
		
		$("section#main_visual .inner1 .cont1 .box1 ul li").click(function(){
			n = $(this).index()+1;
			
		});
		
		function clickBtn() {
			
			n++
			if(n > 3) {
				$("section#main_visual .inner1 .cont1 .box1 ul li:nth-child("+(n-3)+")").click();
				n = 1;
			}
			else {
				$("section#main_visual .inner1 .cont1 .box1 ul li:nth-child("+n+")").click();
			}
		};
		
		var timer = setInterval(clickBtn,3000);
	};
	intervalClick();
	
	function wrapTag() {
		$("section#main_visual .inner1 .cont4 .box2 .table1").wrap("<div class='area'></div>");
		$("section#main_about .wrap .inner1 h3").wrap("<div class='mod'></div>");
	};
	
	wrapTag(); // 태그 감싸는 랩 추가하기
	
	
	function rotateBtn1() {
		$(".rotate").parent().hover(
			function(){
				if($(window).width() > 1024) {
					$(this).children(".rotate").addClass("hover");
				}
			},
			function(){
				if($(window).width() > 1024) {
					$(this).children(".rotate").removeClass("hover");
				}
			}
		)
	}
	rotateBtn1(); // 버튼 호버시 회전효과
    
    
    function slideBnr1() {
        
        var n = 0;
        var ln = 0;
        var lh = 0;
        var uh = 0;
        
        ln = $("section#main_visual .inner1 .cont4 .box2 .table1 li").length;
        
        uh = $("section#main_visual .inner1 .cont4 .box2 .table1").height();
        
        lh = $("section#main_visual .inner1 .cont4 .box2 .table1 li").outerHeight(true);
        
        $("section#main_visual .inner1 .cont4 .box2 .table1").append($("section#main_visual .inner1 .cont4 .box2 .table1 li:first-child").clone());
        
		console.log("ln:"+ln);
		
        function next() {
			n++
			if(n >= ln) {
				$("section#main_visual .inner1 .cont4 .box2 .table1").animate({"top":-n*lh+"px"},function(){
					$("section#main_visual .inner1 .cont4 .box2 .table1").css({"top":"0"});
				});
				n = 0
			}
			else {
				$("section#main_visual .inner1 .cont4 .box2 .table1").animate({"top":-n*lh+"px"});
			}
        };
        
		$("section#main_visual .inner1 .cont4 .box2 .table2 .content3 > div .next").click(function(){
			
			next();
			
			$("section#main_visual .inner1 .cont4 .box2 .table2 .content1 p span:first-child").text("0"+(n+1));
			
			$("section#main_visual .inner1 .cont4 .box2 .table2 .content2 .bar").animate({"left":-(80-n*20)+"%"},300);
		});
		
		function prev() {
			n--
			if(n < 0) {
				n = ln-1;
				console.log(n);
				$("section#main_visual .inner1 .cont4 .box2 .table1").css({"top":-(n+1)*lh+"px"});
				$("section#main_visual .inner1 .cont4 .box2 .table1").animate({"top":-n*lh+"px"});
			}
			else {
				$("section#main_visual .inner1 .cont4 .box2 .table1").animate({"top":-n*lh+"px"});
			}
        };
		
		$("section#main_visual .inner1 .cont4 .box2 .table2 .content3 > div .prev").click(function(){
			
			prev();
			
			$("section#main_visual .inner1 .cont4 .box2 .table2 .content1 p span:first-child").text("0"+(n+1));
			
			$("section#main_visual .inner1 .cont4 .box2 .table2 .content2 .bar").animate({"left":-(80-n*20)+"%"},300);
		});
    };
	slideBnr1(); //메인배너 슬라이드 효과
	
	
	function menuClick() {
		var btn = true;
		
		$("header .wrap > i").click(function(){
			if($(window).width() > 1025) {
				if (btn) {
					btn = false;
					$("section#pc_menu").addClass("active");
					$("header i.xi-apps").addClass("active");
					$("header i.xi-close").addClass("active");
					$("header .logo a img:first-child").css({"display":"none"});
					$("header .logo a img.active").css({"display":"block"});
					$("body").css({"overflow-y":"hidden"});
					$("header").addClass("mobile");
				}
				
				else {
					btn = true;
					$("section#pc_menu").removeClass("active");
					$("header i.xi-apps").removeClass("active");
					$("header i.xi-close").removeClass("active");
					$("header .logo a img:first-child").css({"display":"block"});
					$("header .logo a img.active").css({"display":"none"});
					$("body").css({"overflow-y":"auto"});
					$("header").removeClass("mobile");
				}
			}
			else {
				$("section#mobile_menu").toggleClass("mob_act");
				$("header").toggleClass("mob_act");
				if (btn) {
					btn = false;
					$("header .logo a img:first-child").css({"display":"none"});
					$("header .logo a img.mob_act").css({"display":"block"});
					$("body").css({"overflow-y":"hidden"});
					
				}
				else {
					btn = true;
					$("header .logo a img:first-child").css({"display":"block"});
					$("header .logo a img.mob_act").css({"display":"none"});
					$("body").css({"overflow-y":"auto"});
				}
			}
		});
	};
	menuClick(); // 3선메뉴 선택했을때 효과
	
	function mobileMenu() {
		$("section#pc_menu .wrap .inner .cont1 > li").hover(
			function(){
				$(this).children("h3").css({"color":"#ffc240","border-color":"#ffc240"});
			},
			function(){
				$(this).children("h3").css({"color":"#fff","border-color":"rgba(255,255,255,.3)"});
			}
		)
	};
	mobileMenu(); // 모바일 메뉴 효과
	
	
	function swiperPlugin() {
		var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: "button.next",
        prevEl: "button.prev",
      },
	  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
	};
	swiperPlugin();
	
	
	
	
	function hoverBtn2() {
		$("section#main_research .cont1 .area1 a").mouseover(function(){
			$(this).children("i").css({"color":"#fff"});
		});
		$("section#main_research .cont1 .area1 a").mouseleave(function(){
			$(this).children("i").css({"color":"#9cafb8"});
		});
		
		$("section#main_research .cont2 ul li").on("mouseover",function(event){
			if ($(window).width() > 1024) {
				$(this).children("div").css({"border-color":"#003876"});
				$(this).find("a").css({"color":"#222"});
			}
			else {
				return false;
			}
		});
	
		$("section#main_research .cont2 ul li").on("mouseleave",function(event){
			if ($(window).width() > 1024) {
				$(this).children("div").css({"border-color":"#e5e5e5"});
				$(this).find("a").css({"color":"#aaa"});
			}
			else {
				return false;
			}
		});
	};
	hoverBtn2();
	
	
	function rotateBtn2() {
		
		$("section#main_research .cont2 ul li").hover(
			function(){
				if ($(window).width() > 1024) {
					$(this).find("i").addClass("hover");
				}
			},
			function(){
				if ($(window).width() > 1024) {
					$(this).find("i").removeClass("hover");
				}
			}
		)
		
	};
	rotateBtn2();
	
	function rotateBtn3() {
		$("section#main_fund .wrap .inner1 a").hover(
			function(){
				if ($(window).width() > 1024) {
					$(this).animate({rotate:"-180deg"},300);
				}
			},
			function(){
				if ($(window).width() > 1024) {
				$(this).animate({rotate:"0deg"},300);
				}
			}
		)
	};
	rotateBtn3();
	
	
	function slideToggleBtn() {
//		$("section#main_fund .wrap .inner2 ul li .cont1").click(function(){
//			$(this).parent().siblings().find(".cont2").slideUp();
//			$(this).next().slideDown(200);
//			$("section#main_fund .wrap .inner2 ul li").removeClass("active");
//			$(this).parent().addClass("active");
//		});
		
		$("section#main_fund .wrap .inner2 ul li .cont1").click(function(){
			$(this).parent().siblings().find(".cont2").css({"display":"none"});
			$(this).next().slideDown(200);
			$("section#main_fund .wrap .inner2 ul li").removeClass("active");
			$(this).parent().addClass("active");
		});
		
		var liHeightAct = $("section#main_fund .wrap .inner2 ul li.active").height();
		var liList = $("section#main_fund .wrap .inner2 ul li.active").siblings().get();
		
		var liHeight = $.map(liList, function(value, index) {
			return $(value).height();
		});
		
		
		var result = liHeight.reduce(function add(sum, cur){
			return sum + cur;
		},0);
		
		var ulHeight = liHeightAct + result;
		
		$("section#main_fund .wrap .inner2 ul").height(ulHeight);
		
	};
	slideToggleBtn();
    
    
    
    function slideBar() {
        
        
        $("section#main_community .wrap .inner1 .cont1 .table1 .content3 i.next").click(function() {
            var ln = $("section#main_community .wrap .inner2 .cont1 ul li.select").index()+1;
            
            if (ln >= 4) {ln=1;}
            else {ln++;}
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content2 .bar").animate({"left":-(100-(ln*100/4))+"px"});
            
            $("section#main_community .wrap .inner2 .cont1 ul li:nth-child("+ln+")").addClass("select").siblings().removeClass("select");
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content1 p span:first-child").text("0"+ln);
			
			$("section#main_community .wrap .inner2 .cont2 img").css({"opacity":"0.5"}).stop().attr("src","./images/main_community_img"+ln+".png").animate({"opacity":"1"},500);
        });
        
        
        $("section#main_community .wrap .inner1 .cont1 .table1 .content3 i.prev").click(function() {
            var ln = $("section#main_community .wrap .inner2 .cont1 ul li.select").index()+1;
            
            if (ln <= 1) {ln=4;}
            else {ln--;}
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content2 .bar").animate({"left":-(100-(ln*100/4))+"px"});
            
            $("section#main_community .wrap .inner2 .cont1 ul li:nth-child("+ln+")").addClass("select").siblings().removeClass("select");
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content1 p span:first-child").text("0"+ln);
			
			$("section#main_community .wrap .inner2 .cont2 img").css({"opacity":"0.5"}).stop().attr("src","./images/main_community_img"+ln+".png").animate({"opacity":"1"},500);
        });
        
        $("section#main_community .wrap .inner2 .cont1 ul li").click(function() {
            $(this).addClass("select").siblings().removeClass("select");
            
            var ln = $("section#main_community .wrap .inner2 .cont1 ul li.select").index()+1;
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content2 .bar").animate({"left":-(100-(ln*100/4))+"px"});
            
            $("section#main_community .wrap .inner1 .cont1 .table1 .content1 p span:first-child").text("0"+ln);
        });
    }
    slideBar();
	
    function slideUp1() {
		$("footer .wrap .inner1 .cont2 p").click(function() {
			$(this).next().slideToggle(300);
			$(this).find("i").toggleClass("active");
		});
	}
	slideUp1();
	
	function screenTopBtn1() {
		$("#scroll_top").click(function() {
			$("html").animate({scrollTop:0},300);
		});
		
		history.scrollRestoration = "manual"; /* 새로고침 했을때 스크롤 0 */
	};
	screenTopBtn1();
	
	
	function slideBar2() {
		$("section#main_research .nav > div").click(function(){
			var ln = $(this).index();
			
			$(".swiper-wrapper").attr("class",)
		});
	};
	slideBar2();
	
	
	function addEl() {
		$(".swiper-pagination-bullet").append("<div class='bar'><div>")
		$(".swiper-pagination").position("section#main_research .cont2 ul li > div").top;
	}
	addEl(); /*요소 추가하기*/
	
	function locationAd() {
		
		$(window).resize(function() {
			if($(this).width() < 1024) {
			var top1 = $("section#main_research .cont2 ul li").offset().top;
			var top2 = $("section#main_research .cont2 ul li figure").height()+150;
			$(".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction").offset({top:top1+top2});
			$("section#main_research .cont1 .area1 a.detail").offset({top:top1+top2+50});
			}
			else {
				return false;
			}
		});
		
		if($(window).width() < 1024) {
			var top1 = $("section#main_research .cont2 ul li").offset().top;
			var top2 = $("section#main_research .cont2 ul li figure").height()+150;
			$(".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction").offset({top:top1+top2});
			$("section#main_research .cont1 .area1 a.detail").offset({top:top1+top2+50});
		}
	}
	locationAd(); /* 위치조정 */
	
	
	function clickBtn2() {
		$("section#main_community .wrap .inner2 .cont2 ul li").click(function() {
			var ln = $(this).index()+1;
			$(this).addClass("active").siblings().removeClass("active");
			$("section#main_community .wrap .inner2 .cont1 ul li:nth-child("+ln+")").addClass("select").siblings().removeClass("select");
			$("section#main_community .wrap .inner2 .cont2 img").css({"opacity":"0.5"}).stop().attr("src","./images/main_community_img"+ln+".png").animate({"opacity":"1"},500);
		});
		$("section#main_community .wrap .inner2 .cont1 ul li").click(function() {
			var ln = $(this).index()+1;
			$(this).addClass("select").siblings().removeClass("select");
			$("section#main_community .wrap .inner2 .cont2 ul li:nth-child("+ln+")").addClass("active").siblings().removeClass("active");
			$("section#main_community .wrap .inner2 .cont2 img").css({"opacity":"0.5"}).stop().attr("src","./images/main_community_img"+ln+".png").animate({"opacity":"1"},500);
		});
		$("")
	};
	clickBtn2();
	
	function slideToggleBtn1() {
		
		$("section#mobile_menu .wrap .cont1 .box1 > ul > li > a i").click(function() {
			var ln = $(this).parents("li").index()+1;
			$("section#mobile_menu .wrap .cont1 .box1 > ul > li:nth-child("+ln+") > ul").slideToggle(300);
			$(this).parents("li").siblings().find("ul").slideUp(300);
			$(this).toggleClass("active");
		});
	};
	slideToggleBtn1 ();
	
	
});