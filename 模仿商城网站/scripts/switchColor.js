$(function(){
	$("#left #small_img li").click(function(){
		
		var $txt = $(this).find("img").attr("alt");
		$("#left #msg li").find("span.color").text($txt);
		var $attr = $(this).find("img").attr("class");
		$("#middle #img a").css({"display":"none"});
	    $("#middle #img").find("a."+$attr).show();
		var imgSrc = $(this).find("img").attr("src");
		var i = imgSrc.lastIndexOf(".");
		var unit = imgSrc.substring(i);
		imgSrc = imgSrc.substring(0,i);
	
		var imgSrc_small = imgSrc + "_one_small" + unit;
		var imgSrc_big = imgSrc + "_one_big" + unit;
		$("#middle #pic a img").attr("src",imgSrc_small);
		$("#middle #view a").attr("href",imgSrc_big);	
	
	    $("#middle #img").find("a."+$attr).eq(0).click();
	})
})