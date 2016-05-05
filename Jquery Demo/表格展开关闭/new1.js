
$(function(){
	//前台设计组
	$("#row_01").click(function(){
		if($(this).hasClass("even")){
			$(this).removeClass();
			$(".child_row_01").show();
		}else{
			$(this).addClass("even");
			$(".child_row_01").hide();
		}
	})
	//前台开发组
	$("#row_02").click(function(){
		if($(this).hasClass("even")){
			$(this).removeClass();
			$(".child_row_02").show();
		}else{
			$(this).addClass("even");
			$(".child_row_02").hide();
		}
	})
	//后台开发组
	$("#row_03").click(function(){
		if($(this).hasClass("even")){
			$(this).removeClass();
			$(".child_row_03").show();
		}else{
			$(this).addClass("even");
			$(".child_row_03").hide();
		}
	})
})


/*
$(function(){
	$("tr.parent").click(function(){
		$(this)
		.toggleClass("even")
		.siblings('.child_' + this.id).toogle();
	})
})
*/