;(function($){
	$.prototype.color = function(col){
		this.css("color",col);
	}
})(jQuery)//将juery对象当作实参,就可以保证在立即执行函数中的$都是jQuery中的.
//在立即函数前加个分号,以防在压缩时出错
