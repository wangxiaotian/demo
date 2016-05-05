
$(function(){
	/*
	
	//定义事件
	var index = 0;
	var $word = $("#lunbo #lunboBottom a");
	$($word).mouseover(function(){
		
		index = $($word).index(this);
		showImg(index);
	}).eq(0).mouseover();
	
	//定义执行函数showImg()
	function showImg(index){
		
		var $link = $($word).eq(index).attr("href");
		$("#lunbo #lunboTop").attr("href",$link);
		$("#lunbo #lunboTop img").eq(index).stop(true,true).fadeIn(1000);
		$("#lunbo #lunboTop img").eq(index).siblings().fadeOut(1000);
		$($word).removeClass("opa")
		        .css("opacity",0.7);
		$($word).eq(index).addClass("opa")
		                  .css("opacity",1);
		
	}
*/
	// 添加自动执行
	
	    //事件执行
	var index = 0;
	var $word = $("#lunbo #lunboBottom a");
	$($word).mouseover(function(){
		clearInterval(timer);
		index = $($word).index(this);
		showImg(index);
		setTimeout(timer,4000);
	}).eq(0).mouseover();
	
	//定义执行函数showImg()
	function showImg(index){
		
		var $link = $($word).eq(index).attr("href");
		$("#lunbo #lunboTop").attr("href",$link);
		$("#lunbo #lunboTop img").eq(index).stop(true,true).fadeIn(1000);
		$("#lunbo #lunboTop img").eq(index).siblings().fadeOut(1000);
		$($word).removeClass("opa")
		        .css("opacity",0.7);
		$($word).eq(index).addClass("opa")
		                  .css("opacity",1);
		
	}
	var timer = null;
	//自动轮播
	$("#lunbo").hover(function(){
		if(timer){
			clearInterval(timer);
		}
	},function(){
		timer = setInterval(animateF,3000);
	}).trigger("mouseleave");
	
	//动画函数
	function animateF(){
		
		
		index++;
		if(index == $word.length){
			index = 0;
		}
		var $link = $($word).eq(index).attr("href");
		$("#lunbo #lunboTop").attr("href",$link);
		$("#lunbo #lunboTop img").eq(index).stop(true,true).fadeIn(1000);
		$("#lunbo #lunboTop img").eq(index).siblings().fadeOut(1000);
		$($word).removeClass("opa")
		        .css("opacity",0.7);
		$($word).eq(index).addClass("opa")
		                  .css("opacity",1);
	}
})