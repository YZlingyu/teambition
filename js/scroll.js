window.onload=function(){
	
	/*-----------动态生成左侧导航栏----------*/
	var length = leftJSON.nav.length;
	console.log(leftJSON.nav[0].level1);
	console.log(leftJSON.nav[0].level2);
	var txt="";
	for(var i=0; i<length; i++){
		var level1 = leftJSON.nav[i].level1;
		var length2 = leftJSON.nav[i].level2.length;
		var txt2 = "";
		for(var j=0; j<length2; j++){
			var level2 = leftJSON.nav[i].level2[j];
			txt2 += '<li class="level2">'+level2+'</li>';
		}
		txt += '<li class="level1" id="level1" id="nav'+[i]+'">'+level1+'<ul class="sub-nav2" id="sub-nav'+[i]+'">'
				+txt2+'</ul></li>';
		
		document.getElementById("column2").innerHTML = txt;
	}
		
	/*----------------左导航滑动-----------------------*/	
	var client = window.screen.height;
	var scroll;
	var nav = document.getElementById("nav").offsetHeight;
	var longHeight = document.getElementById("long").offsetHeight;
	var wholeHeight = document.body.clientHeight; 
	var height;
	height = (client - nav - longHeight-20);
	document.getElementById("left-column").style.height=height+"px";
	
	
	
	document.getElementById("left-column").onscroll = function(){
		height = (client - nav - longHeight-20);
		document.getElementById("left-column").style.height=height+"px";
		document.getElementById("left-column").scrollHeight=500+"px";
	}
	
	
	window.onscroll = function(){
		if(document.body.scrollTop){
			scroll = document.documentElement.scrollTop || document.body.scrollTop;
			height = (client + scroll - nav - longHeight);
			if((client + scroll)>=wholeHeight){
				height = (wholeHeight - nav - longHeight)
			}
			document.getElementById("left-column").style.height=height+"px";
		//	console.log(height);
			
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
	
	
	/*------------二级导航--------------*/
	function toggle(obj){
		var el = document.getElementById(obj);
		el.style.display = (el.style.display != "none"?"none":"block");
	}

	function addListener(x){
		x.onclick = function clickHandler(){
			toggle(x.childNodes[1].id);
			//console.log(x.childNodes[1].id);
		}
	}
	
	for(var a=0; a<leftJSON.nav.length; a++){
		var levelArray = document.getElementsByClassName("level1");
		addListener(levelArray[a]);
	}
}