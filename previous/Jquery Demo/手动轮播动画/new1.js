$(function(){
	
	var page = 1;
	
	var i = 4;
	var len = $("ul li").length;
	var page_cont = Math.ceil(len/i);
	
	$("span.next").click(function(){
		
		if(!$("ul").is(":animated")){
			if(page == page_cont){
				$("ul").animate({left:"0px"},500);
				page = 1;
				
			}else{
				$("ul").animate({left:"-=500px"},500);
				page++;	
			}
			$(".highlight_tip span").eq(page-1).addClass("current");  
		    $(".highlight_tip span").eq(page-1).siblings().removeClass("current");
		}
		
	})
	$("span.prev").click(function(){
		if(!$("ul").is(":animated")){
			
		    if(page == 1){
				$("ul").animate({left:"-1525px"},500);
				page = page_cont;
			
			}else{
		        $("ul").animate({left:"+=500px"},500);
			    page--;
			}
			$(".highlight_tip span").eq(page-1).addClass("current");  
		    $(".highlight_tip span").eq(page-1).siblings().removeClass("current");
		}
	})
})