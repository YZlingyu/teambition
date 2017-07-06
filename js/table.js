var length4 = rightJSON.table.length;
//console.log(length);
var txt3 = "";
for(var b=0; b<length4; b++){
	txt3 += '<tr><td>'+rightJSON.table[b].name+'</td><td>'+rightJSON.table[b].content+'</td><td>'+rightJSON.table[b].value+'</td>'
		 +'<td><button class="tiny-btn" id="edit'+b+'">编辑</button><button class="tiny-btn" id="delete'+b+'">删除</button></td></tr>';
}
document.getElementById("table-body").innerHTML = txt3;

/*--------按钮函数------*/
var model = document.getElementById("model");
var name = document.getElementById("name").value;
var content = document.getElementById("content").value;
var value = document.getElementById("value").value;
var yes = document.getElementById("yes");
var cancel = document.getElementById("cancel");
var yes2 = document.getElementById("yes2");
var cancel2 = document.getElementById("cancel2");
function addEventListener1(y){
	y.onclick = function editRow(y){
		mask.style.display = "block";
		model.style.display = "block";
	};
	yes.onclick = function(){
		
	};
	cancel.onclick = function(){
		model.style.display = "none";
		mask.style.display = "none";
	};
}

function addEventListener2(z){
	z.onclick = function deleteRow(z){
		mask.style.display = "block";
		model2.style.display = "block";
	}
	yes2.onclick = function(){
		z.parentNode.parentNode.style.display = "none";
		model2.style.display = "none";
		mask.style.display = "none";
	};
	cancel2.onclick = function(){
		model2.style.display = "none";
		mask.style.display = "none";
	};
}
for(var b=0; b<length4; b++){
	var deleteNode = document.getElementById("delete"+b);
	var editNode = document.getElementById("edit"+b);
	addEventListener1(editNode);
	addEventListener2(deleteNode);
}
