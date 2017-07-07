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
		alert("yes");
		var name = document.getElementById("name").value;
		var content = document.getElementById("content").value;
		var value = document.getElementById("value").value;
		var id = y.id.charAt(4);
		console.log(id);
		var table_ago={
			"id":id-1,
			"name":rightJSON.table[id-1].name,
			"content":rightJSON.table[id-1].content,
			"value":rightJSON.table[id-1].value
		}
		var table_now = {
			"id":id-1,
			"name":name,
			"content":content,
			"value":value
		}
		/*rightJSON.table[id-1].name=name;
		rightJSON.table[id-1].content=content;
		rightJSON.table[id-1].value=value;*/
		console.log(table_now);
		console.log(table_ago);
		//console.log(rightJSON.table[id-1].name);
		rightJSON.table.splice(id-1,1,table_now);
		console.log(JSON.stringify(rightJSON.table));
		
		model.style.display = "none";
		mask.style.display = "none";
		location.reload();
	};
	cancel.onclick = function(){
		model.style.display = "none";
		mask.style.display = "none";
	};
	return rightJSON;
}

function addEventListener2(z){
	z.onclick = function deleteRow(z){
		mask.style.display = "block";
		model2.style.display = "block";
	}
	yes2.onclick = function(){
		var id2 = z.id.charAt(6);
		//z.parentNode.parentNode.style.display = "none";
		delete rightJSON.table[id2];
		var table_ago={
			"id":id2-1,
			"name":rightJSON.table[id2-1].name,
			"content":rightJSON.table[id2-1].content,
			"value":rightJSON.table[id2-1].value
		}
		rightJSON.table.splice(id2-1,1);
		model2.style.display = "none";
		mask.style.display = "none";
		location.reload();
	};
	cancel2.onclick = function(){
		model2.style.display = "none";
		mask.style.display = "none";
	};
	return rightJSON;
}
for(var b=0; b<length4; b++){
	var deleteNode = document.getElementById("delete"+b);
	var editNode = document.getElementById("edit"+b);
	addEventListener1(editNode);
	addEventListener2(deleteNode);
}
