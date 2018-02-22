$(document).ready(function(){
    //鼠标移上去，li下有横线
    $(".nav ul li").mouseover(function(){
        var width = this.offsetWidth;
        var left = this.offsetLeft;
        $("#nav-line").fadeIn(200).css({"width":width,"left":left});
    });
    //离开nav，横线消失
    $(".top-nav").mouseleave(function(e){
       $("#nav-line").fadeOut(20);
    });
    //清空购物车
    $("#shopCar-b").click(function(){
        $("#price").html("$0.00");
        $("#pro_num").html("0");
        console.log(1);
    });
    //轮播图
    var width = $(".top-banner ul li").eq(0).width();
    var num = 0;
    var key = 0;
    $(".top-banner ul li").each(function(){
        $(".top-banner ol").append("<li></li>");
    }).eq(0).clone(true).appendTo(".top-banner ul");
    $(".top-banner ol li").eq(0).addClass("current");
    var sum =  $(".top-banner ul li").length;
    $(".top-banner ol li").on("mouseenter",function(){
        $(this).addClass("current").siblings("li").removeClass("current");
        var index = $(this).index();
        num = key = index;
        $(".top-banner ul").animate({"left":-index*width+"px"},600,"swing");
    });
    $(".arrow-r").on("click",function(){
        arrowR();
    });
    $(".arrow-l").on("click",function(){
        num--;
        key--;
        if(num<0){
            $(".top-banner ul").css({"left":-(sum-1)*width+"px"});
            num = sum-2;
        }
        if(key<0){
            key = sum-2;
        }
        $(".top-banner ol li").eq(key).addClass("current").siblings("li").removeClass("current");
        $(".top-banner ul").animate({"left":-num*width+"px"},"swing");
    });
    clearInterval(timer);
    var timer = setInterval(arrowR,5000);
    $(".top-banner").mouseenter(function(){
        $(".arrow-r").fadeIn(1000);
        $(".arrow-l").fadeIn(1000);
        clearInterval(timer)
    }).mouseleave(function(){
        $(".arrow-r").fadeOut(1000);
        $(".arrow-l").fadeOut(1000);
        timer = setInterval(arrowR,5000);
    });
    function arrowR(){
        num++;
        key++;
        if(num>sum-1){
            num = 1;
            $(".top-banner ul").css({"left":"0"});
        }
        if(key>sum-2){
            key = 0;
        }
        $(".top-banner ol li").eq(key).addClass("current").siblings("li").removeClass("current");
        $(".top-banner ul").animate({"left":-num*width},"swing");
    }
    //arrival的鼠标悬停特效
    var style_in = "easeOutBounce";
    var style_out = "jswing";
    var speed_in = 1000;
    var speed_out = 300;
    var neg = Math.round($(".pro_item ol li").width()/2)*-1;
    var height = Math.round($(".pro_item ol li").height()/2)*-1;
    var pos = neg*(-1);
    var out = pos*2;
    var posH = height*(-1);
    var outH = posH*2;
    $(".pro_item ol li").each(function(){
        var img = $(this).find("img").attr("src");
        $("img",this).remove();
        $(this).append('<div class="topLeft"></div><div class="topRight"></div><div class="bottomLeft"></div><div class="bottomRight"></div>');
        $(this).children('div').css('background-image','url('+ img + ')');
        $(this).find("div.topLeft").css({top:0,left:0,width:pos,height:posH});
        $(this).find('div.topRight').css({top:0, left:pos, width:pos , height:posH});
        $(this).find('div.bottomLeft').css({bottom:0, left:0, width:pos , height:posH});
        $(this).find('div.bottomRight').css({bottom:0, left:pos, width:pos , height:posH});

    }).hover(function(){
        $(this).find('div.topLeft').stop(false, true).animate({top:neg, left:neg}, {duration:speed_out, easing:style_out});
        $(this).find('div.topRight').stop(false, true).animate({top:neg, left:out}, {duration:speed_out, easing:style_out});
        $(this).find('div.bottomLeft').stop(false, true).animate({bottom:neg, left:neg}, {duration:speed_out, easing:style_out});
        $(this).find('div.bottomRight').stop(false, true).animate({bottom:neg, left:out}, {duration:speed_out, easing:style_out});


    }, function () {
            $(this).find('div.topLeft').stop(false, true).animate({top:0, left:0}, {duration:speed_in, easing:style_in});
            $(this).find('div.topRight').stop(false, true).animate({top:0, left:pos}, {duration:speed_in, easing:style_in});
            $(this).find('div.bottomLeft').stop(false, true).animate({bottom:0, left:0}, {duration:speed_in, easing:style_in});
            $(this).find('div.bottomRight').stop(false, true).animate({bottom:0, left:pos}, {duration:speed_in, easing:style_in});
        }).click (function () {
        window.location = $(this).find('a').attr('href');
    });
    banner();
    //arrival的小轮播图
    function banner () {
        var ulMove = $(".pro_item ol");
        var liArr = $(".pro_item ol li");
        var width = liArr.eq(0).width() + 50;
        var timer = null;
        var index = 0;

        function startTransition() {
            ulMove.css("transition", "all 1s");
        }

        function endTransition() {
            ulMove.css("transition", "");
        }

        function startTransform(distance) {
            ulMove.css("transform", "translateX(" + distance + "px)");
        }
        clearInterval(timer);
        timer = setInterval(moveBanner, 2000);
        $(".arrow-right").click(function(){
            clearInterval(timer);
            moveBanner();
        });
        $(".arrow-left").click(function(){
            clearInterval(timer);
            index--;
            startTransition();
            startTransform(index * width * -1);
        });
        function moveBanner() {
            index++;
            startTransition();
            startTransform(index * width * -1);
        }
        ulMove.on("webkitTransitionEnd", function () {
            console.log(index);
            if (index > 6) {
                index = 1;
                endTransition();
                startTransform(index * width * -1);
            } else if (index < 1) {
                index = 6;
                endTransition();
                startTransform(index * width * -1);
            }

        });
        ulMove.mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(moveBanner, 2000);
        })
    }

    //product部分

$(".pro-main li.item").click(function(){
    $(this).next("div").slideToggle();
    console.log($(this).index());
});
    $("#gun label").on("click",function(){
        if($(this).children("b").css("display") === "block"){
            $(this).children("b").css("display","none");
            return false;
        }else {
            $(this).children("b").css("display","block");
            return false;
        }
    });
    var tag = false,ox = 0,line_left = 0,bgLeft = 0;
    $(".pro-main .line-btn").mousedown(function(event){
        ox = event.pageX - line_left;
        tag = true;
    });
    $(document).mouseup(function(){
        tag = false;
    });
    $(".pro-main .line").mousemove(function(event){
        if(tag){
            line_left = event.pageX - ox;
            if(line_left<0){
                line_left = 0;
            }else if(line_left>$(this).width()){
                line_left = $(this).width();
            }
            $(".pro-main .line-btn").css("left",line_left);
            $(".pro-main .line-in").width(line_left);
        }
    }).click(function(event){
        if(!tag){
            bgLeft = $(".pro-main .line-in").offset().left;
            line_left = event.pageX - bgLeft;
            if(line_left<0){
                line_left = 0;
            }else if(line_left>$(this).width()){
                line_left = $(this).width();
            }
            $(".pro-main .line-btn").css("left",line_left);
            $(".pro-main .line-in").width(line_left);
        }
    });
    $(".add").click(function(){
        var pri = parseFloat($(this).siblings(".pro").html().slice(1));
        var p = parseFloat($(this).siblings("input[type='text']").val()?$(this).siblings("input[type='text']").val():0);
        var su = parseFloat(pri*p);
        var befo = parseFloat($("#price").html().slice(1));
        var a = su+befo;
        $("#price").html("$"+a.toFixed(2));
        var n = parseFloat($("#pro_num").html());
        var b = p+n;
        $("#pro_num").html(b);
    });


    //view部分
    $.fn.extend({
        waterfall: function(){
            var totalWidth = $(this).width();
            var itemWidth = $(this).children(".item").width();
            var colNum = Math.floor(totalWidth/itemWidth);
            var margin = (totalWidth - itemWidth*colNum)/(colNum-1);
            var heightArr = [];
            for (var i = 0; i < colNum; i++) {
                heightArr[i] = margin;
            }
            $(this).children(".item").each(function(index,element){
                var currentHeight = $(element).height();
                var minIndex = 0;
                var minHeight = heightArr[0];
                for (var i = 0; i < heightArr.length; i++) {
                    if(heightArr[i]<minHeight){
                        minHeight = heightArr[i];
                        minIndex = i;
                    }
                }
                $(element).css({
                    top: minHeight,
                    left: minIndex*itemWidth+minIndex*margin
                });
                minHeight += currentHeight;
                minHeight += margin;
                heightArr[minIndex] = minHeight;
                // console.log(currentHeight);
            });
            var maxHeight = heightArr[0];
            for (var i = 0; i < heightArr.length; i++) {
                if(heightArr[i]>maxHeight){
                    maxHeight = heightArr[i];
                }
            }
            $(this).height(maxHeight);
        }
    });
    $("#temp").click(function(){
        var flag = false;
        $.ajax({
            url: "./others/waterfall.php",
            type:"get",
            dataType:"json",
            success:function(data){
                var backObj = {
                    items:data
                };
                var resultStr = template("template",backObj);
                $(".wrapper #items").append(resultStr);
                $("#items").waterfall();
            }
        })
    })






























});