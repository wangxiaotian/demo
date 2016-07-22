window.onload = function(){
	

	var oUl_a = document.getElementById("title");
	var aLi_a = oUl_a.getElementsByTagName("li");
	
	var oContent = document.getElementById("content");
	var aUl_b = oContent.getElementsByTagName("ul");
	var arrLi_b = [];
	
	var Img = oContent.getElementsByTagName("img")[0];
	var ArrImgUrl = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.png"];
    
	var num = 0;
	
    function move(){
		for (var i = 0; i < aLi_a.length; i++){
			 aLi_a[i].className = "";
		}
		aLi_a[num].className = "change";
		
		for(var j = 0; j < aUl_b.length; j++){
			aUl_b[j].style.visibility = "hidden";
			arrLi_b = aUl_b[j].getElementsByTagName("li");
		}
		arrLi_b[0].className = "active";
		aUl_b[num].style.visibility = "visible";
		Img.src = ArrImgUrl[num];
		
	}	
	move();
	timer = setInterval(function(){
		num++;
		if(num >= aLi_a.length){
			num = 0;
	    }
		move();
	    },2000)
	
	
}
    