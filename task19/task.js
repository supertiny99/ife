
function unshift(){
	if(state == STOP){
		var div = addDiv();
		if(div){
			stack.insertBefore(div, stack.firstElementChild);
		}
	}else{
		alert("正在排序！");
	}
}

function push(){
	if(state == STOP){
		var div = addDiv();
		if(div){
			stack.appendChild(div);
		}
	}else{
		alert("正在排序！");
	}
}

function shift(){
	if(state == STOP){
		if(stack.firstElementChild){
			alert("删除的元素的值为："+parseInt(stack.firstElementChild.style.height));
			stack.removeChild(stack.firstElementChild);
		}else{
			alert("没有东西给你删了~");
		}
	}else{
		alert("正在排序！");
	}
}

function pop(){
	if(state == STOP){
		if(stack.lastElementChild){
			alert("删除的元素的值为："+parseInt(stack.lastElementChild.style.height));
			stack.removeChild(stack.lastElementChild);
		}else{
			alert("没有东西给你删了~");
		}
	}else{
		alert("正在排序！");
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
	//alert("移除的数值为"+parseInt(this.style.height));
	if(state == STOP){
		this.parentNode.removeChild(this);
	}else{
		alert("正在排序！");
	}
}
function addRandom(){
	var count = stack.getElementsByTagName("div").length;
	if(count+30<=60){
		for(var i=0; i<30; i++){
			var div = document.createElement("div");
			var height = parseInt(Math.random()*100+1);
			div.className = "item";
			//绑定click事件
			div.addEventListener("click",remove);
			//获取最终样式属性，并设置高度
			div.style.height = height + "px";
			stack.appendChild(div);
		}
	}else{
		alert("添加元素过多！请删除后添加！");
		return false;
	}
}
var i=0;
var j=0;
var timer1,timer2;
var length;
var divs;
var STOP = 0;
var RUNNING = 1;
var state = STOP;
window.onload = function(){	
	divs = stack.getElementsByTagName("div");
	tempDiv = document.createElement("div");
};
function sort(){
	state = RUNNING;
	length = divs.length;
	timer1 = setTimeout(buble,0);
}
function buble(){
	if(j<length+1){
		timer2 = setTimeout(bubleOneTime,0);
	}
}
function bubleOneTime(){
	if(i<length-j-1){
		// console.log(parseInt(divs[i].style.height) + ":" + parseInt(divs[i+1].style.height));
		var heightPrevious = parseInt(divs[i].style.height);
		var heightNext = parseInt(divs[i+1].style.height);
		if(heightPrevious>heightNext){
			divs[i].style.height = heightNext + "px"
			divs[i+1].style.height = heightPrevious + "px";
		}
		i++;
		timer2 = setTimeout(arguments.callee,50);
	}else{
		i=0;
		timer1 = setTimeout(buble,0);
		j++;
		if(j==length){
			state = STOP;
		}
	}	
}
