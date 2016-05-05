$(function(){
	
	//为span 元素绑定单击事件
	$("#content span").click(function(){
		var txt = $("#msg").html() + "<p>内层&lt;span&gt;元素被单击</p>";
		$("#msg").html(txt)
                 
	})
	
	//为div元素绑定单击事件
	$("#content").bind("click",function(){
		var txt = $("#msg").html() + "<p>外层div元素被单击</p>";
		$("#msg").html(txt)
		         
	})
	
	//为body元素绑定单击事件
	$("body").bind("click",function(){
		var txt = $("#msg").html() + "<p>body元素被单击</p>";
		$("#msg").html(txt);
	})
})