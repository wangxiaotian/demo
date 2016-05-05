$(function(){
	//产品介绍 start
	var $oLi = $("#middle #box_intro ul li");
	var $oP =  $("#middle #box_intro #par p");
	$oLi.click(function(){
		$(this).addClass("add")
		    .siblings().removeClass("add");
		var index = $oLi.index(this);
		$oP.eq(index).show()
		   .siblings().hide();
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
	//产品介绍 end
	
	//尺寸选择 start
	var $oSize = $("#left #size li");
	
	$oSize.click(function(){
		$(this).addClass("cur")
		       .siblings().removeClass("cur");
		var $oSize_txt = $(this).html();
		$("#left pre.size span").text($oSize_txt);
	})
	//尺寸选择 end
	
	//小图切换 start
	$("#middle #img a").click(function(){
		var $src = $(this).find("img").attr("src");
		var i = $src.lastIndexOf(".");
		var	$src_f = $src.substring(0,i);
		var $href = $src_f + "_big.jpg";
		
		$("#view a").attr("href",$href);		
	})
    //小图切换 end
	//数量和价格联动 start
	var span = $("#left pre.numb span");
	var price = span.text();
	$("#left select").change(function(){
		var num = $(this).val();
		var amount = num*price;
		span.text(amount);
	}).change();
	//数量和价格联动 end
	//星级评分 start
	$("#left ul li a").click(function(){
		var tit = $(this).text();
		var txt = "您给出的评分为 " + tit + " 分";
		$("#left span.txt").html(txt);
		var star = $(this).parent().attr("class");
		$("#left ul.rating").attr("class","rating " + star + "star");
        return false;		
	})
	//星级评分 end
	$("#left img.cont").click(function(){
		var item = $("#left h4").text();
		var Isize = $("#left pre.size span").text();
		var Inumb = $("#left select").val();
		var Icolor = $("#left #msg li span.color").text();
		var Iprice = $("#left pre.numb span").text();
		var dialog = "感谢您的购买。\n您购买的\n" +
                        "产品为：" + item + "；\n" + 
                        "颜色为：" + Icolor + "色；\n" + 
						"尺寸为：" + Isize + "：\n" + 
						"数量为：" + Inumb + "件：\n" + 
						"总价为：" + Iprice + "元；"
		alert(dialog);
	})
	
	
})