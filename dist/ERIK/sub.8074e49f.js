$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() < 800) $(".rsp").css({
            "width": "94%"
        });
        else if ($(window).width() < 1280) $(".rsp").css({
            "width": "100%"
        });
        else $(".rsp").css({
            "width": "1280px"
        });
    }); // 창크기에 따라 width값 바뀜
    function mouseHover() {
        $("#main_menu .nav1 li").on("mouseover", function() {
            $("header").addClass("on");
            var sel = $(this).index() + 1;
            $("#sub_menu .wrap div:nth-of-type(" + sel + ")").css({
                "display": "block"
            }).siblings().css({
                "display": "none"
            });
            $("#main_menu.pc").css({
                "background": "#fff"
            });
            $("#main_menu.pc .logo img").attr("src", "./images/logo_on.png");
            $("#main_menu .nav1 li a").css({
                "color": "#121212"
            });
            $("#main_menu .nav1 li a:hover").css({
                "color": "#0c4da2"
            });
        });
        $("header").on("mouseleave", function() {
            $("header").removeClass("on");
            $("#main_menu").css({
                "background": "none"
            });
            $("#main_menu .nav1 li a").css({
                "color": "#fff"
            });
            $("#main_menu .logo img").attr("src", "./images/logo.png");
        });
    }
    mouseHover();
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 1) {
            $("#main_menu .nav1 li").off();
            $("header").off();
            $("#top_gnb").css({
                "display": "none"
            });
            $("header").addClass("fix");
            $("#main_menu").css({
                "background": "#fff"
            });
            $("#main_menu .nav1 li a").css({
                "color": "#121212"
            });
            $("#main_menu .logo img").attr("src", "./images/logo_on.png");
            $("header #top_menu_mob .box ul").css({
                "top": "0"
            });
            $("#main_menu .nav1 li").on("mouseover", function() {
                $("header").addClass("on");
                $("#sub_menu").css({
                    "display": "block"
                });
                var sel = $(this).index() + 1;
                $("#sub_menu .wrap div:nth-of-type(" + sel + ")").css({
                    "display": "block"
                }).siblings().css({
                    "display": "none"
                });
                $("#main_menu").css({
                    "background": "#fff"
                });
                $("#main_menu .logo i	mg").attr("src", "./images/logo_on.png");
                $("#main_menu .nav1 li a").css({
                    "color": "#121212"
                });
                $("#main_menu .nav1 li a:hover").css({
                    "color": "#0c4da2"
                });
            });
            $("header").on("mouseleave", function() {
                $("header").removeClass("on");
                $("#sub_menu").css({
                    "display": "none"
                });
                $("#main_menu").css({
                    "background": "#fff"
                });
                $("#main_menu .nav1 li a").css({
                    "color": "#121212"
                });
                $("#main_menu .logo img").attr("src", "./images/logo_on.png");
            });
        } else {
            $("#main_menu .nav1 li").off();
            $("header").off();
            $("#top_gnb").css({
                "display": "block"
            });
            $("#sub_menu").css({
                "display": "block"
            });
            $("header").removeClass("fix");
            $("#main_menu").css({
                "background": "none"
            });
            $("#main_menu .nav1 li a").css({
                "color": "#fff"
            });
            $("#main_menu .logo img").attr("src", "./images/logo.png");
            $("header #top_menu_mob .box ul").css({
                "top": "40px"
            });
            $("#main_menu.fix").css({
                "position": "relative",
                "top": "40px"
            });
            $("#main_menu .nav1 li").on("mouseover", function() {
                $("header").addClass("on");
                var sel = $(this).index() + 1;
                $("#sub_menu .wrap div:nth-of-type(" + sel + ")").css({
                    "display": "block"
                }).siblings().css({
                    "display": "none"
                });
                $("#main_menu").css({
                    "background": "#fff"
                });
                $("#main_menu .logo img").attr("src", "./images/logo_on.png");
                $("#main_menu .nav1 li a").css({
                    "color": "#121212"
                });
                $("#main_menu .nav1 li a:hover").css({
                    "color": "#0c4da2"
                });
            });
            $("header").on("mouseleave", function() {
                $("header").removeClass("on");
                $("#main_menu").css({
                    "background": "none"
                });
                $("#main_menu .nav1 li a").css({
                    "color": "#fff"
                });
                $("#main_menu .logo img").attr("src", "./images/logo.png");
            });
        }
    }); /* 스크롤 했을때 탑메뉴바 css 바뀜*/ 
    function mobileMenu() {
        var btn = true;
        $("header #top_menu_mob .menu").click(function() {
            if (btn) {
                btn = false;
                $("header #top_menu_mob .menu span:nth-child(2)").css({
                    "display": "none"
                });
                $("header #top_menu_mob .menu span:nth-child(1)").css({
                    "transform": "rotate(45deg)",
                    "position": "absolute",
                    "right": "0",
                    "top": "10px"
                });
                $("header #top_menu_mob .menu span:nth-child(3)").css({
                    "transform": "rotate(-45deg)",
                    "position": "absolute",
                    "right": "0",
                    "top": "10px"
                });
                $("header #top_menu_mob .box ul").animate({
                    "right": "0"
                }, 300);
                $("header #top_menu_mob .bg").css({
                    "display": "block"
                });
                $("section#scroll_top").css({
                    "display": "none"
                });
            } else {
                btn = true;
                $("header #top_menu_mob .menu span:nth-child(2)").css({
                    "display": "block"
                });
                $("header #top_menu_mob .menu span:nth-child(1)").css({
                    "transform": "none",
                    "position": "static",
                    "right": "auto",
                    "top": "auto"
                });
                $("header #top_menu_mob .menu span:nth-child(3)").css({
                    "transform": "none",
                    "position": "static",
                    "right": "auto",
                    "top": "auto"
                });
                $("header #top_menu_mob .box ul").animate({
                    "right": "-80%"
                }, 300);
                $("header #top_menu_mob .bg").css({
                    "display": "none"
                });
                $("section#scroll_top").css({
                    "display": "block"
                });
            }
        });
    }
    mobileMenu();
    function slideBtn() {
        var btn = true;
        $("section#sub_content .left_box .box1").click(function() {
            $(this).children("div.active").removeClass("active").siblings().addClass("active");
            $(this).next().stop().slideToggle(300);
            if (btn) {
                btn = false;
                $(this).removeClass("active");
            } else {
                btn = true;
                $(this).addClass("active");
            }
        });
    }
    slideBtn();
    function tabBtn() {
        var btn = true;
        $("section#sub_content .content .txt_area ul.tabs li").click(function() {
            var n = $(this).index() + 1;
            $(this).addClass("active").siblings().removeClass("active");
            console.log(n);
            $("section#sub_content .content .txt_area dl:nth-of-type(" + n + ")").addClass("active").siblings().removeClass("active");
        });
    }
    tabBtn();
    function quickMenuFix() {
        var n = parseInt($("#quick_menu .aside").css("top"));
        $(window).scroll(function() {
            var sc = $(window).scrollTop();
            $("#quick_menu .aside").stop().animate({
                "top": sc + n + "px"
            }, 1000);
        });
    }
    quickMenuFix();
});

//# sourceMappingURL=sub.8074e49f.js.map
