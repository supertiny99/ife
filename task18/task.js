
function unshift(){
	var div = addDiv();
	stack.insertBefore(div, stack.firstElementChild);
}

function push(){
	var div = addDiv();
	stack.appendChild(div);
}

function shift(){
	if(stack.firstElementChild){
		alert("删除的元素的值为："+stack.firstElementChild.innerHTML);
		stack.removeChild(stack.firstElementChild);
	}else{
		alert("没有东西给你删了~");
	}
}

function pop(){
	if(stack.lastElementChild){
		alert("删除的元素的值为："+stack.lastElementChild.innerHTML);
		stack.removeChild(stack.lastElementChild);
	}else{
		alert("没有东西给你删了~");
	}
}

function addDiv(){
	var div = document.createElement("div");
	//正则判断输入数据是否为数字
	if(document.body.firstElementChild.value.search(/^[0-9]+$/)!= -1){
		div.innerHTML = document.body.firstElementChild.value;
		div.className = "item";
		//绑定click事件
		div.addEventListener("click",remove);
		return div;
	}else{
		alert("请输入一个数字！");
	}
}
function remove(){
	alert("移除的数值为"+this.innerHTML);
	this.parentNode.removeChild(this);
}
