$(function(){
	
	//为span 元素绑定单击事件
	$("#content span").click(function(event){  //阻止事件冒泡，传递事件对象event。事件发生时
	                                            //      event被创建，只有事件处理函数才能访问到。
		var txt = $("#msg").html() + "<p>内层&lt;span&gt;元素被单击</p>";
		$("#msg").html(txt);
		event.stopPropagation();               //阻止事件冒泡方法：event.stopPropagation();
	})
	
	//为div元素绑定单击事件
	$("#content").bind("click",function(){
		var txt = $("#msg").html() + "<p>外层div元素被单击</p>";
		$("#msg").html(txt);
		return false;                          //简写形式为return false;
		                                       //阻止默认行为，比如提交表单。方法为
											   //preventDefault();
	})
	
	//为body元素绑定单击事件
	$("body").bind("click",function(event){
		var txt = $("#msg").html() + "<p>body元素被单击</p>";
		$("#msg").html(txt);
		
	})
})