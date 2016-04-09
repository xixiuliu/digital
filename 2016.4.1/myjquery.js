;(function(){
	function $(selector){
		// this.dom = document.getElementById(selector);
		return $.prototype.init(selector);
	}

	$.prototype = {
		init:function(selector){
			this.dom = document.getElementById(selector);
			return this;
		},

		index:function(){
			var ind = this.dom.parentNode.children;
			for(var i = 0;i<ind.length;i++){
				if(ind[i] == this.dom){
					return i;
				}
			}
		},
		click:function(fun){
			this.dom.onclick = fun;
		}

	}
	window.$ = $;//把封装好的内部变量可以让外部使用.
})()
