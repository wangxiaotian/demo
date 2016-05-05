$(function(){
	var $required = $("<strong class = 'high'>*</strong>");
	$("form :input.required").each(function(){
		$(this).parent().append($required);	
	})
	
	$("form :input").blur(function(){
		
		var $parent = $(this).parent();
		$parent.find(".formtips").remove(".formtips");
		//判断用户名
		if($(this).is("#username")){
			if(this.value == "" || (this.value.length) < 6 ){
				var errorMsg = "请输入至少6位的用户名";
				$parent.append("<span class = 'formtips onError'>" + errorMsg + "</span>");
			}else{
				var okMsg = "输入正确";
				$parent.append("<span class = 'formtips onSuccess'>" + okMsg + "</span>");
			}
		}
		//判断邮箱
		if($(this).is("#email")){
			if(this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
				var errorMsg = "请输入正确的邮箱地址";
				$parent.append("<span class = 'formtips onError'>" + errorMsg + "</span>");
			}else{
				var okMsg = "输入正确";
				$parent.append("<span class = 'formtips onSuccess'>" + okMsg + "</span>");
			}
		}
		
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).triggerHandler("blur");
	});
	
    	
	//提交验证
		$("#send").click(function(){
			$("form :input.required").trigger('blur');
			var numError = $("form .onError").length;
			if(numError){
				return false
			}
			alert("注册成功，密码已发到你的邮箱，请查收");
		})
	
})