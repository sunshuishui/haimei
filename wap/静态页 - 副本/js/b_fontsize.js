// JavaScript Document
/*new function (){
   var _self = this;
   _self.width = 640;//设置默认最大宽度
   _self.fontSize = 100;//默认字体大小
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
   }
   _self.changePage();
   window.addEventListener("resize",function(){_self.changePage();},false);
};*/

$(window).scroll(function(){
	$ttop=document.body.scrollTop+document.documentElement.scrollTop;
	if($ttop>10){
		$('.back_top').show();
	}else{
		$('.back_top').hide();	
	}
})
$(function(){
	$('.back_top').click(function(){
		window.scroll(0,0);	
	})	
})