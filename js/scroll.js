window.onload=function(){
	var client = window.screen.height;
	var scroll;
	var nav = document.getElementById("nav").offsetHeight;
	var longHeight = document.getElementById("long").offsetHeight;
	var wholeHeight = document.body.clientHeight; 
	//var leftNav = document.getElementById("left-column");
	var height;
	height = (client - nav - longHeight-20);
	document.getElementById("left-column").style.height=height+"px";
	document.getElementById("left-column").onscroll = function(){
		height = (client - nav - longHeight-20);
		document.getElementById("left-column").style.height=height+"px";
	}
	window.onscroll = function(){
		if(document.body.scrollTop){
			scroll = document.documentElement.scrollTop || document.body.scrollTop;
			height = (client + scroll - nav - longHeight);
			if((client + scroll)>=wholeHeight){
				height = (wholeHeight - nav - longHeight)
			}
			document.getElementById("left-column").style.height=height+"px";
			console.log(height);
			
			if(document.getElementById("table-head").offsetTop<=(scroll-nav-longHeight)){
				document.getElementById("table-head").style.position = "fixed";
				document.getElementById("table-head").style.top = 0+"px";
				document.getElementById("table-head").style.width=document.getElementsByTagName("tbody")[0].offsetWidth+"px";
				var th=document.getElementsByTagName("th");
				for(var i=0; i<th.length;i++){
					th[i].style.width=(document.getElementsByTagName("tbody")[0].offsetWidth/4)+"px";
				}
			}
			else{
				document.getElementById("table-head").style.position = "static";
			}
		}
	}
	console.log(scroll);
	console.log(nav);
	console.log(longHeight);
	
	
	console.log(height);
}
