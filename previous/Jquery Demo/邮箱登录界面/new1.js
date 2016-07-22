$(document).ready(function(){
	//设置邮箱地址
	$("#address").focus(function(){
		var txt_value = $(this).val();
		if(txt_value == "请输入邮箱地址"){
			$(this).val("");
		}
	})
	$("#address").blur(function(){
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val("请输入邮箱地址");
		}
	})
	//设置邮箱密码
	$("#password").focus(function(){
		var txt_value = $(this).val();
		if(txt_value == "请输入邮箱密码"){
			$(this).val("");
		}
	})
	$("#password").blur(function(){
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val("请输入邮箱密码");
		}
	})
	
})