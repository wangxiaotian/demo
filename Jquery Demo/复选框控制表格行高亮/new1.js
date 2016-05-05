$(function(){
	$("tbody tr :checkbox:checked").parents("tr").addClass("even");
	$("tbody tr").click(function(){
		if($(this).hasClass("even")){
		    $(this).removeClass("even")
			    .find(":checkbox").prop("checked",false)
	    }else{
		    $(this).addClass("even")
			    .find(":checkbox").prop("checked",true)
		}
	})
	
})