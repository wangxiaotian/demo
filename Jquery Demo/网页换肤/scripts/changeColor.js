$(function(){
	$("#skin li").click(function(){
		$(this).addClass("selected")
		       .siblings().removeClass("selected");
		var href = "css/" + $(this).attr("id") + ".css";
		$("#cssfile").attr("href",href);
		$.cookie("MyCssSkin",this.id,{path:"/",expires:10});
	})
	var cookie_skin = $.cookie("MyCssSkin");
	if(cookie_skin){
		$("#" + cookie_skin).addClass("selected")
		                    .siblings().removeClass("selected");
		$("#cssfile").attr("href","css/" + cookie_skin + ".css");
		$.cookie("MyCssSkin",cookie_skin,{path:"/",expires:10});
	}
})