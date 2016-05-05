/*
$(function(){
	$(".tab_menu li:contains('体育')").click(function(){
		var $show = $(".tab_box :contains('体育')");         //  笨方法
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$show.show()
		    .siblings().hide();
		
	})
	$(".tab_menu li:contains('娱乐')").click(function(){
		var $show = $(".tab_box :contains('娱乐')");
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$show.show()
		    .siblings().hide();
		
	})
	$(".tab_menu li:contains('时事')").click(function(){
		var $show = $(".tab_box :contains('时事')");
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$show.show()
		    .siblings().hide();
		
	})
})
*/
$(function(){
	$(".tab_menu ul li").click(function(){             // 简洁！
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		var $index = $(".tab_menu ul li").index(this);
		$(".tab_box>div").eq($index).show()
		    .siblings().hide();
	})
})