$(function(){
	$("#middle #img a").click(function(){
		var $src = $(this).find("img").attr("src");
		var i = $src.lastIndexOf(".");
		var	$src_f = $src.substring(0,i);
		var $href = $src_f + "_big.jpg";
		
		$("#view a").attr("href",$href);		
	})
})