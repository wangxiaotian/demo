$(function(){
	$("#bottomList a").click(function(){
		$(this).addClass("current")
		       .siblings().removeClass("current");
		var index = $("#bottomList a").index(this);
		var $width = $("#box1").width();
		
		$("#bottom ul").stop(true,false).animate({left:-(index*$width)},1000)
		
		return false;
	})
})