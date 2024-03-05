$(document).ready(function(){
	
		$(window).resize(function() {
			if ($(window).width() < 800) { 		
				$('.rsp').css({"width":"94%"});
			}
			else if ($(window).width() < 1280) {
				$('.rsp').css({"width":"100%"});
			}
			else {
				$('.rsp').css({"width":"1280px"});
			}
		}); // 창크기에 따라 width값 바뀜
		
		
		function mouseHover() {
			$("#main_menu .nav1 li").on("mouseover",function(){
				$("header").addClass("on");
				var sel = $(this).index()+1;
				$("#sub_menu .wrap div:nth-of-type("+sel+")").css({"display":"block"}).siblings().css({"display":"none"});
				$("#main_menu.pc").css({"background":"#fff"});
				$("#main_menu.pc .logo img").attr("src","./images/logo_on.png");
				$("#main_menu .nav1 li a").css({"color":"#121212"});
				$("#main_menu .nav1 li a:hover").css({"color":"#0c4da2"});
			});
			
			$("header").on("mouseleave",function(){
				$("header").removeClass("on");
				$("#main_menu").css({"background":"none"});
				$("#main_menu .nav1 li a").css({"color":"#fff"});
				$("#main_menu .logo img").attr("src","./images/logo.png");
			});
							  }; /* 탑 메뉴바 호버했을때 내려오는 효과*/
	
		mouseHover();
		
		$(window).scroll(function(){
			var sc = $(this).scrollTop();
			
			if (sc > 1) {
				$("#main_menu .nav1 li").off();
				$("header").off();
				$("#top_gnb").css({"display":"none"});
				$("header").addClass("fix");
				$("#main_menu").css({"background":"#fff"});
				$("#main_menu .nav1 li a").css({"color":"#121212"});
				$("#main_menu .logo img").attr("src","./images/logo_on.png");
				$("header #top_menu_mob .box ul").css({"top":"0"});
				
				$("#main_menu .nav1 li").on("mouseover",function(){
					$("header").addClass("on");
					$("#sub_menu").css({"display":"block"});
					var sel = $(this).index()+1;
					$("#sub_menu .wrap div:nth-of-type("+sel+")").css({"display":"block"}).siblings().css({"display":"none"});
					$("#main_menu").css({"background":"#fff"});
					$("#main_menu .logo i	mg").attr("src","./images/logo_on.png");
					$("#main_menu .nav1 li a").css({"color":"#121212"});
					$("#main_menu .nav1 li a:hover").css({"color":"#0c4da2"});
				});
			
				$("header").on("mouseleave",function(){
					$("header").removeClass("on");
					$("#sub_menu").css({"display":"none"});
					$("#main_menu").css({"background":"#fff"});
					$("#main_menu .nav1 li a").css({"color":"#121212"});
					$("#main_menu .logo img").attr("src","./images/logo_on.png");
				});
			}
			else {
				$("#main_menu .nav1 li").off();
				$("header").off();
				$("#top_gnb").css({"display":"block"});
				$("#sub_menu").css({"display":"block"});
				$("header").removeClass("fix");
				$("#main_menu").css({"background":"none"});
				$("#main_menu .nav1 li a").css({"color":"#fff"});
				$("#main_menu .logo img").attr("src","./images/logo.png");
				$("header #top_menu_mob .box ul").css({"top":"40px"});
				
				$("#main_menu.fix").css({"position":"relative","top":"40px"});
				
				$("#main_menu .nav1 li").on("mouseover",function(){
					$("header").addClass("on");
					var sel = $(this).index()+1;
					$("#sub_menu .wrap div:nth-of-type("+sel+")").css({"display":"block"}).siblings().css({"display":"none"});
					$("#main_menu").css({"background":"#fff"});
					$("#main_menu .logo img").attr("src","./images/logo_on.png");
					$("#main_menu .nav1 li a").css({"color":"#121212"});
					$("#main_menu .nav1 li a:hover").css({"color":"#0c4da2"});
				});
			
				$("header").on("mouseleave",function(){
					$("header").removeClass("on");
					$("#main_menu").css({"background":"none"});
					$("#main_menu .nav1 li a").css({"color":"#fff"});
					$("#main_menu .logo img").attr("src","./images/logo.png");
				});
			}
		}); /* 스크롤 했을때 탑메뉴바 css 바뀜*/
	
		function slideBnr1 () {
			var n = 0;
			var ln = 0;
			var sw;
			var lw;
			var timer;
			
			ln = $("#main .slide > li").length;
			
			sw = Number((ln+1) * 100);
			
			lw = Number(100 / (ln+1));
			
			
			$("#main .slide").css({"width":sw+"%"});
			$("#main .slide > li").css({"width":lw+"%"});
			$("#main .slide").append( $("#main .slide > li:first-child").clone() );
			
			for (var i = 1; i <= ln; i++) {
				if (i == 1) {
					$("#sub1 .page").append("<li class='select'></li>");
				}
				else {
					$("#sub1 .page").append("<li></li>");
				}
			}
			
			function auto() {
				n++;
				if (n >= ln) {
					$("#main .slide").animate({"left":-n*100+"%"},300,function(){
					$("#main .slide").css({"left":0});
				});
				n = 0;
				}
				else {
					$("#main .slide").animate({"left":-n*100+"%"},300);
				}
				$("#sub1 .page li").eq(n).addClass("select").siblings().removeClass();
				$("#sub1 .box1 strong").text(n+1);
			};
			
			function autoPlay() {
				timer = setInterval(auto,2000);
			};
			
			function autoPause() {
				clearInterval(timer);
			};
			
			
			$("#sub1 .play").on("click",function(){
				autoPlay();
				$(this).removeClass("on").next().addClass("on");
			});
			
			$("#sub1 .pause").on("click",function(){
				autoPause();
				$(this).removeClass("on").prev().addClass("on");
			});
			
			
			$("#sub1 .next").click(function() {
				auto();
			});
			
			$("#sub1 .prev").click(function(){
				n--;
				if (n < 0) {
					n = ln-1;
					$("#main .slide").css({"left":-ln*100+"%"});
					$("#main .slide").animate({"left":-n*100+"%"},300);
				}
				else {
					$("#main .slide").animate({"left":-n*100+"%"},300);
				}
				$("#sub1 .page li").eq(n).addClass("select").siblings().removeClass();
				$("#sub1 .box1 strong").text(n+1);
			});
			
			$("#sub1 .page li").click(function(){
				n = $(this).index();
				$("#main .slide").animate({"left":-n*100+"%"},300);
				$("#sub1 .page li").eq(n).addClass("select").siblings().removeClass();
				$("#sub1 .box1 strong").text(n+1);
			});
			
		}; // 메인배너 버튼 슬라이드 효과
	
		slideBnr1();
	
		function slideBnr2() {
			
			var n = 0;
			var ln = 0;
			var sw;
			var lw;
			
			ln = $("section#sub2 .cont > div").length;
			console.log("ln"+ln);
			sw = Number((ln+1) * 100);
			console.log("sw"+sw);
			lw = Number(100 / (ln+1));
			console.log("lw"+lw);
			
			$("section#sub2 .cont").css({"width":sw+"%"});
			$("section#sub2 .cont > div").css({"width":lw+"%"});
			$("section#sub2 .cont").append( $("section#sub2 .cont > div:first-child").clone() );
			
			
			function auto() {
				n++;
				console.log (n);
				if (n >= ln) {
					$("section#sub2 .cont").animate({"left": -n*100+"%"},300,function(){
					$("section#sub2 .cont").css({"left": 0});
				});
				n = 0;
				}
				else {
					$("section#sub2 .cont").animate({"left":-n*100+"%"},300);
				}
			};
			
			function autoPlay() {
				timer = setInterval(auto,2000);
			};
			
			function autoPause() {
				clearInterval(timer);
			};
			
			
			$("#sub1 .play").on("click",function(){
				autoPlay();
			});
			
			$("#sub1 .pause").on("click",function(){
				autoPause();
			});
			
			$("#sub1 .next").click(function() {
				auto();
			});
			
			$("#sub1 .prev").click(function(){
				n--;
				if (n < 0) {
					n = ln-1;
					$("section#sub2 .cont").css({"left":-ln*100+"%"});
					$("section#sub2 .cont").animate({"left":-n*100+"%"},300);
				}
				else {
					$("section#sub2 .cont").animate({"left":-n*100+"%"},300);
				}
			});
			
			$("#sub1 .page li").click(function(){
				n = $(this).index();
				$("section#sub2 .cont").animate({"left":-n*100+"%"},300);
			});
		};
	
		slideBnr2();
		
		function sectionAnimate () {
			$("section#sub2 .cont > div ul li").hover(
				function(){
					$(this).addClass("slide");
				},
				function(){
					$(this).removeClass("slide");
				}
			);
		}; // 메인배너 a태그 마우스 호버했을때 위로갔다가 돌아오는 효과
	
		sectionAnimate();
		
		function quickMenuFix () {
			var n = parseInt($("#quick_menu .aside").css("top"));
			
			$(window).scroll(function(){
				var sc = $(window).scrollTop();
				$("#quick_menu .aside").stop().animate({"top":sc+n+"px"},1000);
			});
		}; // 왼쪽 사이드 퀵메뉴 스크롤했을때 따라오는 효과
	
		quickMenuFix();
	
		function slideBtn () {
			
			var n = 0;
			
			
			var n1 = $("section#content1 .cont1").outerWidth(true);
			console.log("컨테이너 넓이 n1:"+n1);
			
			$("section#content1 .cont1 .bbox > div").css({"width":n1+"px"});
			
			var ln = $("section#content1 .cont1 .bbox > div").length;
			
			var bw = $("section#content1 .cont1 .bbox > div").width();
			
			console.log("박스넓이 bw:"+bw);
			
			$("section#content1 .cont1 .bbox").css({"width":bw*(ln+1)+"px"});
			
			
			$("section#content1 .cont1 .bbox").append( $("section#content1 .cont1 .box1").clone());
			
			function auto() {
				n++;
				if (n > 3) {
					$("section#content1 .cont1 .bbox").animate({"left":-n*bw+"px"},300,function(){
					$("section#content1 .cont1 .bbox").css({"left":0});
				});
				n = 0;
				}
				else {
					$("section#content1 .cont1 .bbox").animate({"left":-n*bw+"px"},300);
				}
				
			};
			
			$("section#content1 .lid .next").click(function() {
				auto();
			});
			
			$("section#content1 .lid .prev").click(function() {
				n--;
				if (n < 0) {
					$("section#content1 .cont1 .bbox").css({"left":-4*bw+"px"});
					$("section#content1 .cont1 .bbox").animate({"left":-3*bw+"px"},300);
					n=3
				}
				else {
					$("section#content1 .cont1 .bbox").animate({"left":-n*bw+"px"},300);
				}
			});
			
			var timer1 = setInterval(auto,3000);
			
			$("section#content1 .cont1").hover(
				function(){
					clearInterval(timer1);
				},
				function(){
					timer1 = setInterval(auto,3000);
				}
			);
			
		}; // 콘텐츠1에서 버튼 눌렀을때 슬라이드 효과
		slideBtn();
	
	
		function activeBtn () {
			$("section#content1 .cont2 .lid p").click(function(){
				
				var n = $(this).index();
				
				$(this).addClass("active").siblings().removeClass("active");
				$(this).parent().siblings().eq(n).addClass("active").siblings().removeClass("active");
			});
		}; // 콘텐츠1 컨테이너2에 (공지사항,홍보자료)탭 눌렀을때 내용바뀌는 효과
		
		activeBtn();
	
		function slideBtn2 () {
			
			var n = 0;
			
			var ln = $("section#content2 .cont1 .bbox > div").length;
			
			
			var bw = $("section#content2 .cont1 .box1").width();
			
			$("section#content2 .cont1 .bbox").css({"width":bw*(ln+1)+"px"});
			
			$("section#content2 .cont1 .bbox").append( $("section#content2 .cont1 .box1").clone());
			
			function auto() {
				n++;
				if (n >= ln) {
					$("section#content2 .cont1 .bbox").animate({"left":-n*bw+"px"},300,function(){
					$("section#content2 .cont1 .bbox").css({"left":0});
				});
				n = 0;
				}
				else {
					$("section#content2 .cont1 .bbox").animate({"left":-n*bw+"px"},300);
				}
				
			};
			
			$("section#content2 .next").click(function() {
				auto();
			});
			
			$("section#content2 .prev").click(function() {
				n--;
				if (n < 0) {
					$("section#content2 .cont1 .bbox").css({"left":-ln*bw+"px"});
					$("section#content2 .cont1 .bbox").animate({"left":-(ln-1)*bw+"px"},300);
					n=ln
				}
				else {
					$("section#content2 .cont1 .bbox").animate({"left":-n*bw+"px"},300);
				}
			});
			
			var timer2 = setInterval(auto,3000);
			
			$("section#content2 .cont1").hover(
				function(){
					clearInterval(timer2);
				},
				function(){
					timer2 = setInterval(auto,3000);
				}
			);
			
		}; //콘텐츠2 슬라이드효과
	
		slideBtn2();
	
		function slideBtn3() {
			
			if ($(window).width() < 800) {
				var wd = 800
				var n = 0;
				var ln = $("section#content4 .wrap ul li").length;
				$(window).resize(function(){
					var ww = $("section#content4 .wrap").width();
					var lw = ww / 2 + 56;
					var sw = lw * ln * 2;
					$("section#content4 .wrap ul li").css({"width":lw+"px"});
					$("section#content4 .wrap ul").css({"width":sw+10+"px"});
				});
				
				$("section#content4 .wrap ul").append( $("section#content4 ul li").clone());
			} 
			else {
				var lw = 246
				var wd = 1280
				var n = 0;
				var ln = $("section#content4 .wrap ul li").length;
				var sw = lw * ln * 2;
				
				$("section#content4 .wrap ul li").css({"width":lw+"px"});
				$("section#content4 .wrap ul").css({"width":sw+"px"});
				$("section#content4 .wrap ul").append( $("section#content4 ul li").clone());
			}
			
			console.log("랩넓이:"+wd+" lw값: "+lw);
			
			function auto() {
				n++;
				if (n >= ln) {
					$("section#content4 .wrap ul").animate({"left":-n*lw+"px"},300,function(){
					$("section#content4 .wrap ul").css({"left":0});
				});
				n = 0;
				}
				else {
					$("section#content4 .wrap ul").animate({"left":-n*lw+"px"},300);
				}
				
			};
			
			$("section#content4 .next").click(function() {
				auto();
			});
			
			$("section#content4 .prev").click(function() {
				n--;
				console.log(n);
				if (n < 0) {
					$("section#content4 .wrap ul").css({"left":-ln*lw+"px"});
					$("section#content4 .wrap ul").animate({"left":-(ln-1)*lw+"px"},300);
					n=ln
				}
				else {
					$("section#content4 .wrap ul").animate({"left":-n*lw+"px"},300);
				}
			});
			
			if ($(window).width() > 1280) {
				var timer3 = setInterval(auto,3000);
				
				$("section#content4 .wrap").hover(
					function(){
						clearInterval(timer3);
					},
					function(){
						timer3 = setInterval(auto,3000);
					}
				);
			}
		}; // 콘텐츠4 슬라이드효과
	
		slideBtn3();
	
		function scrollMenu() {
			
			$("#scroll li:first-child").click(function(){
				$("html").animate({scrollTop:0},1000);
			});
			
			$("#scroll li:nth-child(n+2)").click(function(){
				var n = $(this).index();
				var st = $("#content"+n).offset().top;
				$("html").animate({scrollTop:st},1000);
				return false;
			});
			
			$(window).scroll(function(){
				
				
				var sc = $(this).scrollTop();
				
				
				if (sc > 2800) {
					$("#scroll li:nth-child(4)").addClass("select").siblings().removeClass();
				}
				else if (sc > 1800) {
					$("#scroll li:nth-child(3)").addClass("select").siblings().removeClass();
				}
				else if (sc > 800) {
					$("#scroll li:nth-child(2)").addClass("select").siblings().removeClass();
				}
				else {
					$("#scroll li:nth-child(1)").addClass("select").siblings().removeClass();
				}
				
			});
		}; // 왼쪽 사이드 탭 눌렀을때 화면 이동되는 효과
		scrollMenu();
		
		function scrollMenu2() {
			
			$(window).scroll(function(){
				var sc = $(this).scrollTop();
				
				console.log(sc);
				
				if (sc > 1) {
					$("#scroll_top .box").removeClass("hidden");
				}
				else {
					$("#scroll_top .box").addClass("hidden");
				}
			});
			
			
			$("#scroll_top .box").click(function(){
				$("html").animate({scrollTop:0},1000);
			}); //스크롤 탑 버튼 누르면 위로가는 효과
		};
		
		scrollMenu2();
		
	
		function slideBtn4() {
			
			$("section#content4 .slide li").click(function(){
				$(this).addClass("select").siblings().removeClass("select");
				
				var ln = $(this).index();
				
				var n = $("section#content4 .slide li").length;
				
				var lw = 256 * n;
				
				$("section#content4 .wrap ul").animate({"left":-ln*lw+"px"},300);
				
				
				
				
			});
		}; // 콘텐츠4 원모양 슬라이드 버튼
	
		slideBtn4();
	
		
		function mobileMenu() {
			var btn = true;
			
			$("header #top_menu_mob .menu").click(function(){
				
				if(btn) {
					btn = false;
					$("header #top_menu_mob .menu span:nth-child(2)").css({"display":"none"});
					$("header #top_menu_mob .menu span:nth-child(1)").css({"transform":"rotate(45deg)","position":"absolute","right":"0","top":"10px"});
					$("header #top_menu_mob .menu span:nth-child(3)").css({"transform":"rotate(-45deg)","position":"absolute","right":"0","top":"10px"});
					$("header #top_menu_mob .box ul").animate({"right":"0"},300);
					$("header #top_menu_mob .bg").css({"display":"block"});
					$("section#scroll_top").css({"display":"none"});
				}
				
				else {
					btn = true;
					$("header #top_menu_mob .menu span:nth-child(2)").css({"display":"block"});
					$("header #top_menu_mob .menu span:nth-child(1)").css({"transform":"none","position":"static","right":"auto","top":"auto"});
					$("header #top_menu_mob .menu span:nth-child(3)").css({"transform":"none","position":"static","right":"auto","top":"auto"});
					$("header #top_menu_mob .box ul").animate({"right":"-80%"},300);
					$("header #top_menu_mob .bg").css({"display":"none"});
					$("section#scroll_top").css({"display":"block"});
				}
			});
		};
	
		mobileMenu();
		
		function reactWeb(){
			
			if (matchMedia("screen and (max-width: 500px)").matches) {
				$("section#content2 .cont2 .box1 img").attr("src","./images/section3_bn_m06_.jpg");
				$("section#content2 .cont2 .box2 img").attr("src","./images/section3_bn_m05.jpg");
				$("section#content2 .cont3 .box1 img").attr("src","./images/m_section3_bn_01.jpg");
				$("section#content2 .cont3 .box2 img:nth-child(1)").attr("src","./images/m_section3_bn_02.jpg");
				$("section#content2 .cont3 .box2 img:nth-child(2)").attr("src","./images/m_section3_bn_03.jpg");
				$("section#content2 .cont3 .box3 img").attr("src","./images/m_section3_bn_04.jpg");
			}
			
			else if (matchMedia("screen and (max-width: 800px)").matches) {
				var n1 = $("section#content1 .cont1").width();
				console.log("n1:"+n1);
				$("section#content1 .cont1 .bbox > div").css({"width":n1+"px"});
				$("section#content1 .cont1 .bbox").css({"width":n1*5+"px"});
				$("section#content1 .cont1 .box img").wrap("<div class='iwrap'></div>");
				$("section#content1 .cont1 .box1 img").attr("src","./images/v6yxuL_4u-fB-F8x.jpg");
				$("section#content1 .cont3 .box1 ul li img").css({"width":"100%"});
				$("section#content1 .wrap").css({"width":"94%"});
				$("section#content2 .wrap").css({"width":"94%"});
				$("section#content3 .wrap").css({"width":"94%"});
				$("section#content4 .wrap").css({"width":"94%"});
				$("section#content3 .cont3").css({"width":"100%"});
			} 
			else if  (matchMedia("screen and (max-width: 1300px)").matches) {
				$("section#content1 .wrap").css({"width":"80%"});
				$("section#content2 .wrap").css({"width":"80%"});
				$("section#content3 .wrap").css({"width":"80%"});
				$("section#content4 .wrap").css({"width":"80%"});
				$("section#content1 .cont2").css({"padding-left":"0px"});
				$("section#content1 .cont2").css({"margin-top":"100px"});
				$("section#content1 .cont3 .box1 ul li img").css({"width":"calc((800px / 5) - 12px)","height":"130px"});
				$("section#content1 .cont1 .box").css({"width":"auto"});
				$("section#content1 .cont1 .box1 img").attr("src","./images/main_noimg.jpg");
				$("section#content2").css({"height":"auto"});
				$("section#content2 .cont1").css({"display":"none"});
				$("section#content2 .cont2").css({"flex-direction":"row","height":"auto","margin":"0 auto","width":"80%"});
				$("section#content2 .cont2 .box1").css({"margin-top":"0"});
				$("section#content2 .cont2 img").css({"max-width":"100%"});
				$("section#content2 .cont3").css({"flex-wrap":"wrap","width":"80%","height":"100%","margin":"0 auto","padding-top":"20px"});
				$("section#content2 .cont3 > div").css({"width":"calc(100% / 4 - 30px)"});
				$("section#content2 .cont3 .box2").css({"order":"1"});
				$("section#content2 .cont3 img").css({"width":"100%","height":"120px"});
				$("section#content3 .wrap").css({"background":"url(../images/section4_cont3_bg.png) no-repeat right -90px bottom"})
				$("section#content3 .cont1 ul li img").css({"max-width":"100%","min-width":"60px"});
				$("section#content3 .cont2").css({"width":"calc(100%/2)"});
				$("section#content3 .cont3").css({"width":"calc(100%/2)"});
				$("section#content3 .cont3 span").css({"left":"40%"});
				$("section#content4").css({"border":"none"});
				$("section#content4 .wrap").css({"width":"1024px","border":"none","z-index":"0"});
				$("section#content4 .blank").css({"display":"none"});
				$("section#content4 .wrap ul li").css({"border":"1px solid #dadada"});
				$("section#content4 .prev").css({"display":"none"});
				$("section#content4 .next").css({"display":"none"});
				$("section#content4 .slide li").css({"display":"block"});
				$("footer").css({"border-top":"1px solid #ccc"});
			}
			else {
  			} // 해당 화면 크기에서 시작할때 화면
			
			
		
			$(window).resize(function(){
				
				if ($(window).width() < 500) {
					$("section#content2 .cont2 .box1 img").attr("src","./images/section3_bn_m06_.jpg");
					$("section#content2 .cont2 .box2 img").attr("src","./images/section3_bn_m05.jpg");
					$("section#content2 .cont3 .box1 img").attr("src","./images/m_section3_bn_01.jpg");
					$("section#content2 .cont3 .box2 img:nth-child(1)").attr("src","./images/m_section3_bn_02.jpg");
					$("section#content2 .cont3 .box2 img:nth-child(2)").attr("src","./images/m_section3_bn_03.jpg");
					$("section#content2 .cont3 .box3 img").attr("src","./images/m_section3_bn_04.jpg");
					$("section#content2 .cont2").css({"flex-direction":"colunm","height":"auto","margin":"0","width":"100%","flex-wrap":"wrap"});
					$("section#content2 .cont3").css({"flex-wrap":"wrap","width":"100%","height":"auto","margin":"0","padding-top":"0"});
					$("section#content2 .cont3 > div").css({"width":"100%"});
					$("section#content2 .cont3 img").css({"width":"100%","height":"auto"});
					$("section#content2 .cont3 .box2").css({"order":"0"});
				}
				
				else if ($(window).width() < 800) {
					var n1 = $("section#content1 .cont1").width();
					console.log("n1:"+n1);
					$("section#content1 .cont1 .bbox > div").css({"width":n1+"px"});
					$("section#content1 .cont1 .bbox").css({"width":n1*5+"px"});
					$("section#content1 .cont1 .box1 img").attr("src","./images/v6yxuL_4u-fB-F8x.jpg");
					$("section#content2 .cont2 .box1 img").attr("src","./images/section3_bn_06_.jpg");
					$("section#content2 .cont2 .box2 img").attr("src","./images/section3_bn_05.jpg");
					$("section#content2 .cont3 .box1 img").attr("src","./images/section3_bn_01.jpg");
					$("section#content2 .cont3 .box2 img:nth-child(1)").attr("src","./images/section3_bn_02.jpg");
					$("section#content2 .cont3 .box2 img:nth-child(2)").attr("src","./images/section3_bn_03.jpg");
					$("section#content2 .cont3 .box3 img").attr("src","./images/section3_bn_04.jpg");
					$("section#content1 .cont3 .box1 ul li img").css({"width":"100%"});
					$("section#content1 .wrap").css({"width":"94%"});
					$("section#content2 .wrap").css({"width":"94%"});
					$("section#content3 .wrap").css({"width":"94%"});
					$("section#content4 .wrap").css({"width":"94%"});
					$("section#content3 .cont3").css({"width":"100%"});
				}
				else if ($(window).width() < 1300) {
					$("section#content1 .wrap").css({"width":"80%"});
					$("section#content2 .wrap").css({"width":"80%"});
					$("section#content3 .wrap").css({"width":"80%"});
					$("section#content4 .wrap").css({"width":"80%"});
					$("section#content1 .cont2").css({"padding-left":"0px"});
					$("section#content1 .cont2").css({"margin-top":"100px"});
					$("section#content1 .cont3 .box1 ul li img").css({"width":"calc((800px / 5) - 12px)","height":"130px"});
					$("section#content1 .cont1 .box").css({"width":"auto"});
					$("section#content1 .cont1 .box1 img").attr("src","./images/main_noimg.jpg");
					$("section#content2").css({"height":"auto"});
					$("section#content2 .cont1").css({"display":"none"});
					$("section#content2 .cont2").css({"flex-direction":"row","height":"auto","margin":"0 auto","width":"80%"});
					$("section#content2 .cont2 .box1").css({"margin-top":"0"});
					$("section#content2 .cont2 img").css({"max-width":"100%"});
					$("section#content2 .cont3").css({"flex-wrap":"wrap","width":"80%","height":"100%","margin":"0 auto","padding-top":"20px"});
					$("section#content2 .cont3 > div").css({"width":"calc(100% / 4 - 30px)"});
					$("section#content2 .cont3 .box2").css({"order":"1"});
					$("section#content2 .cont3 img").css({"width":"100%","height":"120px"});
					$("section#content3 .wrap").css({"background":"url(../images/section4_cont3_bg.png) no-repeat right -90px bottom"})
					$("section#content3 .cont1 ul li img").css({"max-width":"100%","min-width":"60px"});
					$("section#content3 .cont2").css({"width":"calc(100%/2)"});
					$("section#content3 .cont3").css({"width":"calc(100%/2)"});
					$("section#content3 .cont3 span").css({"left":"40%"});
					$("section#content4").css({"border":"none"});
					$("section#content4 .wrap").css({"width":"1024px","border":"none","z-index":"0"});
					$("section#content4 .blank").css({"display":"none"});
					$("section#content4 .wrap ul li").css({"border":"1px solid #dadada"});
					$("section#content4 .prev").css({"display":"none"});
					$("section#content4 .next").css({"display":"none"});
					$("section#content4 .slide li").css({"display":"block"});
					$("footer").css({"border-top":"1px solid #ccc"});
					
				}
				else {
					$("section#content1 .wrap").css({"width":"1280px"});
					$("section#content2 .wrap").css({"width":"1280px"});
					$("section#content3 .wrap").css({"width":"1280px"});
					$("section#content4 .wrap").css({"width":"1280px"});
					$("section#content1 .cont2").css({"padding-left":"50px"});
					$("section#content1 .cont2").css({"margin-top":"0px"});
					$("section#content1 .cont3 .box1 ul li img").css({"width":"calc((1280px / 5) - 12px)","height":"190px"});
					$("section#content2").css({"height":"720px"});
					$("section#content2 .cont1").css({"display":"block"});
					$("section#content2 .cont2").css({"flex-direction":"column","height":"389px","margin":"0","width":"auto"});
					$("section#content2 .cont2 .box1").css({"margin-top":"59px"});
					$("section#content2 .cont2 img").css({"max-width":"auto"});
					$("section#content2 .cont3").css({"flex-wrap":"nowrap","width":"100%","height":"auto","margin":"0","padding":"0"});
					$("section#content2 .cont3 > div").css({"width":"auto"});
					$("section#content2 .cont3 .box2").css({"order":"0"});
					$("section#content2 .cont3 img").css({"width":"auto","height":"auto"});
					$("section#content3 .cont1 ul li img").css({"max-width":"none","min-width":"none"});
					$("section#content3 .cont2").css({"width":"640px"});
					$("section#content3 .cont3").css({"width":"640px"});
					$("section#content3 .cont3 span").css({"left":"260px"});
					$("section#content4").css({"border-top":"1px solid #dadada", "border-bottom":"1px solid #dadada"});
					$("section#content4 .wrap").css({"width":"1280px","border-right": "1px solid #dadada", "border-left": "1px solid #dadada","z-index":"1"});
					$("section#content4 .blank").css({"display":"block"});
					$("section#content4 .wrap ul li").css({"border":"none"});
					$("section#content3 .wrap").css({"background":"url(../images/section4_cont3_bg.png) no-repeat right 60px bottom"})
					$("section#content4 .prev").css({"display":"block"});
					$("section#content4 .next").css({"display":"block"});
					$("section#content4 .slide li").css({"display":"none"});
					$("section#content4 .wrap").css({"z-index":"1"});
					$("footer").css({"border-top":"none"});
				}
			});	 // 화면 줄이거나 늘릴때 변화되는 효과
		}; 
	
		reactWeb();
	
});