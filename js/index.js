 function sports(obj,target){
        clearInterval(obj.timeId); 
        obj.timeId =  setInterval(function(){
            var step =10;
            var leader = obj.offsetLeft;  
            step = leader<target?step:-step;

            if(Math.abs(leader-target) > Math.abs(step)){
                leader = leader+step;
                obj.style.left = leader + "px";
            }else{
                clearInterval(obj.timeId); 
                obj.style.left = target+"px";
            }
        },10);
    }

window.onload=function(){
	/*---------------slider-----------------------*/
	var banner = document.getElementById("banner");
	var slides = banner.children[0];
	var slidePic = slides.children[0];
	var img = slides.offsetWidth;
	var target = -img*this.index;
	sports(slidePic,target);


	/*-------------------panel---------------------------*/
	document.getElementById("tab11").onclick=function(){
		document.getElementById("tab11").className="tab active";
		document.getElementById("tab12").className="tab";
		document.getElementById("tab13").className="tab";
		document.getElementById("tab14").className="tab";
		document.getElementById("tab1").style.display="block";
		document.getElementById("tab2").style.display="none";
		document.getElementById("tab3").style.display="none";
		document.getElementById("tab4").style.display="none";
	}
	document.getElementById("tab12").onclick=function(){
		document.getElementById("tab11").className="tab";
		document.getElementById("tab12").className="tab active";
		document.getElementById("tab13").className="tab";
		document.getElementById("tab14").className="tab";
		document.getElementById("tab1").style.display="none";
		document.getElementById("tab2").style.display="block";
		document.getElementById("tab3").style.display="none";
		document.getElementById("tab4").style.display="none";
	}
	document.getElementById("tab13").onclick=function(){
		document.getElementById("tab11").className="tab";
		document.getElementById("tab12").className="tab";
		document.getElementById("tab13").className="tab active";
		document.getElementById("tab14").className="tab";
		document.getElementById("tab1").style.display="none";
		document.getElementById("tab2").style.display="none";
		document.getElementById("tab3").style.display="block";
		document.getElementById("tab4").style.display="none";
	}
	document.getElementById("tab14").onclick=function(){
		document.getElementById("tab11").className="tab";
		document.getElementById("tab12").className="tab";
		document.getElementById("tab13").className="tab";
		document.getElementById("tab14").className="tab active";
		document.getElementById("tab1").style.display="none";
		document.getElementById("tab2").style.display="none";
		document.getElementById("tab3").style.display="none";
		document.getElementById("tab4").style.display="block";
	}
	
	
	/*----------------Select------------------*/
	
	var country = document.getElementById("country");
	country.onchange=function(){
		var country2 = country.options[country.selectedIndex].text;
		switch(country2){
			case "Select your country":{
				break;
			}
			case "China":{
				var tagName1 = document.createElement("option");
				var inner1 = document.createTextNode("Beijing");
				tagName1.appendChild(inner1);
				document.getElementById("city").appendChild(tagName1);
				var tagName2 = document.createElement("option");
				var inner2 = document.createTextNode("Jilin");
				tagName2.appendChild(inner2);
				document.getElementById("city").appendChild(tagName2);
				break;
			}
			case "America":{
				var tagName1 = document.createElement("option");
				var inner1 = document.createTextNode("Naples");
				tagName1.appendChild(inner1);
				document.getElementById("city").appendChild(tagName1);
				var tagName2 = document.createElement("option");
				var inner2 = document.createTextNode("Atlanta");
				tagName2.appendChild(inner2);
				document.getElementById("city").appendChild(tagName2);
				break;
			}
			case "Japan":{
				var tagName1 = document.createElement("option");
				var inner1 = document.createTextNode("Tokyo");
				tagName1.appendChild(inner1);
				document.getElementById("city").appendChild(tagName1);
				var tagName2 = document.createElement("option");
				var inner2 = document.createTextNode("Daban");
				tagName2.appendChild(inner2);
				document.getElementById("city").appendChild(tagName2);
				break;
			}
			case "UK":{
				var tagName1 = document.createElement("option");
				var inner1 = document.createTextNode("London");
				tagName1.appendChild(inner1);
				document.getElementById("city").appendChild(tagName1);
				var tagName2 = document.createElement("option");
				var inner2 = document.createTextNode("Birminham");
				tagName2.appendChild(inner2);
				document.getElementById("city").appendChild(tagName2);
				break;
			}
		}
		
	}
}

