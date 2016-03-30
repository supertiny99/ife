
var gridView = {
	MAX: 0,
	RANDOMN: 0,
	grid: 0,
	input: 0,
	divsLength: 0,
	divs: 0,

	rounds: 0,
	curRound: 0,
	oneRoundStep: 0,
	index: 0,
	interval: 50,
	timer: null,

	state: 0,
	SORTTING: 1,
	FREE: 0,

	inint: function(){
		this.MAX = 60;
		this.RANDOMN = 30;
		this.grid = document.getElementById( "grid" );
		this.input = document.getElementById( "cin" );
		this.divs = this.grid.getElementsByTagName( "div" );
		this.divsLength = this.grid.getElementsByTagName( "div" ).length;
		document.getElementById( "btnUnshift" ).addEventListener( "click", 
			this.unshift.bind( this ), false );
		document.getElementById( "btnPush" ).addEventListener( "click", 
			this.push.bind( this ), false );
		document.getElementById( "btnShift" ).addEventListener( "click", 
			this.shift.bind( this ), false );
		document.getElementById( "btnPop" ).addEventListener( "click", 
			this.pop.bind( this ), false );
		document.getElementById( "btnRan" ).addEventListener( "click", 
			this.ran.bind( this ), false );
		document.getElementById("btnBubble").addEventListener( "click", 
			this.bubble.bind(this), false);
	},
	canAdd: function(){
		if( this.state == this.FREE && this.divsLength < this.MAX
			&& this.input.value !== undefined){
			var height = this.input.value;
			if ( height.search( /^[1-9][0-9]$|^100$/ ) != -1 ){
				return true;
			}
		}
		return false;
	},
	canDel: function(){
		if ( this.state == this.FREE && this.divsLength > 0 ){
			return true;
		}
		return false;
	},
	unshift: function(){
		if(this.canAdd()){
			var height = this.input.value;
			var div = this.produceDiv(height);
			this.grid.insertBefore( div, this.grid.firstElementChild );
		}
	},
	push: function(){
		if(this.canAdd()){
			var height = this.input.value;
			var div = this.produceDiv(height);
			this.grid.appendChild( div );
		}
	},
	shift: function(){

		this.canDel() && this.grid.removeChild(this.grid.firstElementChild);
	},
	pop: function(){

		this.canDel() && this.grid.removeChild(this.grid.lastElementChild);
	},
	produceDiv: function( height ){
		var div = document.createElement("div");
		div.className = "gridDiv";
		div.style.height = height*3 + "px";
		this.divsLength ++;
		return div;
	},
	ran: function(){
		if( this.divsLength + this.RANDOMN <= this.MAX ){
			for ( var i = 0; i < this.RANDOMN; i++){
				var height = parseInt( Math.random() * 100 + 1 );
				var div = this.produceDiv( height );
				this.grid.appendChild( div );
			}
		}
	},
	bubble: function(){
		if(document.getElementById("interval").value){
			this.interval = document.getElementById("interval").value;}
		this.state = this.SORTTING;
		this.rounds = this.divsLength - 1 ;
		timer = setTimeout( this.bubbleOneRound.bind( this ) , 0);
	},
	bubbleOneRound: function(){
		if( this.curRound < this.rounds ){
			timer = setTimeout( this.bubbleOneTime.bind( this ) , 0);
		}else{
			this.state = this.FREE;
		}
	},
	bubbleOneTime: function(){
		if( this.index < this.rounds - this.curRound ){
			var heightPrevious = parseFloat( this.divs[this.index].style.height) ;
			var heightNext = parseFloat( this.divs[this.index+1].style.height );
			if(heightPrevious>heightNext){
				this.swapDivHeight( this.divs[this.index], this.divs[this.index+1]);
			}
			this.index ++ ;
			time = setTimeout ( arguments.callee.bind(this) , this.interval);
		}else{
			this.index = 0;
			this.curRound ++ ;
			time = setTimeout ( this.bubbleOneRound.bind(this) , 0);
		}
	},
	swapDivHeight: function( div1, div2 ){
		var temp = parseFloat( div1.style.height ) + "px";
		div1.style.height = parseFloat( div2.style.height ) + "px";
		div2.style.height = temp ;
	},


};
window.onload = function(){
	gridView.inint();
}