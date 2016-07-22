$(function(){
	$("#checkedAll").click(function(){
		$("[name = items]:checkbox").prop("checked",true);
	});
	$("#checkedNo").click(function(){
		$("[name = items]:checkbox").prop("checked",false)
	})
	$("#checkedRev").click(function(){
		var $title = $(":checkbox").attr("checked");
		
		$(":checkbox").each(function(){
			$(this).prop("checked",!$(this).prop("checked"));
			
		})
	})
	$("#send").click(function(){
		var str = "你选中的是:\r\n";
		$(":checkbox:checked").each(function(){
			str += $(this).val()+"\r\n";
		})
		alert(str)
	})
})