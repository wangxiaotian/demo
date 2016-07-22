$(function(){
	//导航条效果
	$("nav li").mouseover(function(){
		$(this).children(".navbox").show();
		
	})
	$("nav li").mouseout(function(){
		$(this).children(".navbox").hide();
		
	})
	//搜索框效果
	$(function(){
		$("#top>input").focus(function(){
			if($(this).val() == this.defaultValue){
			    $(this).val("");
			}
		}).blur(function(){
			if($(this).val() == ""){
				$(this).val(this.defaultValue);
			}
		}).keyup(function(e){
			if(e.which == 13){
				alert("没找到该商品");
			}
		})
	})
	//促销商品效果
	$("#content #search a.promoted").append('<s class = "hot"></s>');
	//网页换肤效果 
	
	$("#skin li").click(function(){
		$(this).addClass("selected")
		       .siblings().removeClass("selected");
		$("#cssfile").attr("href","styles/skin/" + this.id + ".css");
		$.cookie("MyCssSkin",this.id,{path:"/",expires:10});
        	
	});
	
	var cookie_skin = $.cookie("MyCssSkin");
	if(cookie_skin){
		$("#" + cookie_skin).addClass("selected")
		                    .siblings().removeClass("selected");
		$("#cssfile").attr("href","styles/skin/" + cookie_skin + ".css");
		$.cookie("MyCssSkin",cookie_skin,{path:"/",expires:10});
	}
	
})