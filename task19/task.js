
function unshift(){
	var div = addDiv();
	if(div){
		stack.insertBefore(div, stack.firstElementChild);
	}
}

function push(){
	var div = addDiv();
	if(div){
		stack.appendChild(div);
	}
}

function shift(){
	if(stack.firstElementChild){
		alert("删除的元素的值为："+parseInt(stack.firstElementChild.style.height));
		stack.removeChild(stack.firstElementChild);
	}else{
		alert("没有东西给你删了~");
	}
}

function pop(){
	if(stack.lastElementChild){
		alert("删除的元素的值为："+parseInt(stack.lastElementChild.style.height));
		stack.removeChild(stack.lastElementChild);
	}else{
		alert("没有东西给你删了~");
	}
}

function addDiv(){
	var count = stack.getElementsByTagName("div").length;
	if(count<60){
		var div = document.createElement("div");
		//正则判断输入数据是否为数字
		if(document.body.firstElementChild.value.search(/^[1-9][0-9]$|^100$/)!= -1){
			var height = document.body.firstElementChild.value;
			div.className = "item";
			//绑定click事件
			div.addEventListener("click",remove);
			//获取最终样式属性，并设置高度
			div.style.height = height + "px";
			return div;
		}else{
			alert("请输入10-100的数字！");
			return false;
		}
	}else{
		alert("添加元素过多！请删除后添加！");
		return false;
	}
}
function remove(){
	alert("移除的数值为"+parseInt(this.style.height));
	this.parentNode.removeChild(this);
}