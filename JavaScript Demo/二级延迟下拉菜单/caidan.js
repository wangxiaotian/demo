window.onload = function(){
	var oLi = document.querySelectorAll("#box>li");
	var timer = null,
        oChild;
	for (var i = 0; i < oLi.length; i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			clearTimeout(timer);
			var oUl = document.getElementsByClassName("secondary");
			for(var j = 0; j < oUl.length; j++){
				oUl[j].style.display = "none"
			}
			oChild = this.getElementsByTagName("ul")[0];		//这里实际上是修改了全局作用域中的变量，所以在mouseout中才有定义（引用了全局中的变量）
			oChild.style.display = "block";
		}
		oLi[i].onmouseout = function(){
			timer = setTimeout(function(){
		        oChild.style.display = "none";      //只有当onmouseover函数调用过后，mouseout中的oChild才有定义
		                                            
				
	        },1000);	
		}
        	
	}
   
}