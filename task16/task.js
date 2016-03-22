/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
//var aqiData = [];
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityInput = document.getElementById("aqi-city-input").value.trim();
	var valueInput = document.getElementById("aqi-value-input").value.trim();
	var reg1 =/^[\u4e00-\u9f5a]*[a-z]*[A-Z]*$/;
	var reg2 = /^[0-9]+$/;
	var result1 = cityInput.search(reg1);
	var result2 = valueInput.search(reg2);
	//console.log(result1);
	//console.log(result2);
	if(result1!=-1 && result2!=-1){
		//aqiData.push([cityInput, valueInput]);
		aqiData[cityInput] = parseInt(valueInput);
	}else if(result2 == -1){
		alert("空气质量指数输入有误！");
	}else if(result1 == -1){
		alert("城市名称有误");
	}
	//console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	document.getElementById("aqi-table").innerHTML = "";
	var ths = ["城市","空气质量","操作"];
	var fragment = document.createDocumentFragment();
	var tr = document.createElement("tr");
	for(var i=0; i<3; i++){
		var td = document.createElement("td");
		td.innerHTML = ths[i];
		tr.appendChild(td);
	}
	fragment.appendChild(tr);
	/*for(var r=0; r<aqiData.length; r++){
		var tr = document.createElement("tr");
		for(var c=0; c<2; c++){
			var td = document.createElement("td");
			td.innerHTML = aqiData[r][c];
			tr.appendChild(td);
		}
		var td = document.createElement("td");
		var btn = document.createElement("button");
		btn.innerHTML = "删除";
		tr.appendChild(btn);
		fragment.appendChild(tr);
	}*/
	for(var key in aqiData){
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		td1.innerHTML = key;
		tr.appendChild(td1);
		var td2 = document.createElement("td");
		td2.innerHTML = aqiData[key];
		tr.appendChild(td2);
		var td3 = document.createElement("td");
		var btn = document.createElement("button");
		btn.innerHTML = "删除";
		btn.onclick = function(){
			delBtnHandle(this);
		};
		td3.appendChild(btn);
		tr.appendChild(td3);
		fragment.appendChild(tr);
	}

	document.getElementById("aqi-table").appendChild(fragment);

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(btn) {
  // do sth.
  var city = btn.parentNode.parentNode.firstElementChild.innerHTML;
  delete aqiData[city];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = function(){
  		addBtnHandle();
  };
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}
window.onload = function(){
	init();
}