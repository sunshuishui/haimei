// JavaScript Document
//=======广告轮播图的实现=======
	

	//自动轮播
	//构建自动轮播的函数
	var _index=0;
	var timePlay=null;
	function autoPlay(){
		$len_li=$("#Adv ul.button li").length;

		timePlay=setInterval(function(){
			_index++;
			if(_index<$len_li){
				if(_index==($len_li-1)){_index=-1; }//变成-1 
				$("#Adv ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//显示按扭
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//显示图片
				 
			}else{_index=-1;/*设置序列号为-1,跳到播放第一张图片*/}
		},3000);	
	};
	
	/*function prevpic(){
		$index=$("ul.button .hover").index();
		$len_li=$("ul.button li").length;
		if($index>0){
			$index=$index-1;
		}else{
			$index=$len_li-1;
		}
		$("ul.button li").eq($index).hover();
	}
	function nextpic(){
		$index=$("ul.button .hover").index();
		$len_li=$("ul.button li").length;
		if($index<$len_li-1){
			$index=$index+1;
		}else{
			$index=0;
		}
		$("ul.button li").eq($index).hover();
	}*/

	
	

	//自动轮播
	//构建自动轮播的函数
	var _index2=0;
	var timePlay2=null;
	function autoPlay2(){
		$len_li2=$("#Adv2 ul.button li").length;
		timePlay2=setInterval(function(){
			_index2++;
			if(_index2<$len_li2){
				if(_index2==($len_li2-1)){_index2=-1; }//变成-1 
				$("#Adv2 ul.button li").eq(_index2).addClass("hover").siblings().removeClass("hover");//显示按扭
				$("#Adv2 .ImgList").eq(_index2).fadeIn().siblings("div").fadeOut();//显示图片
				 
			}else{_index2=-1;/*设置序列号为-1,跳到播放第一张图片*/}
		},3000);	
	};
	
	$(function(){
		
		$("#Adv .ImgList").eq(0).show().siblings("div").hide();
		$("#Adv ul.button li").hover(function(){
			clearInterval(timePlay);//清处定时播放器
			_index=$(this).index();//获取当前li序列号

			$(this).addClass("hover").siblings().removeClass("hover");//显示按扭

			$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//显示图片
		},function(){
			autoPlay();//启用定时播放器
		});
		
		
		$("#Adv2 .ImgList").eq(0).show().siblings("div").hide();
	
		$("#Adv2 ul.button li").hover(function(){
			clearInterval(timePlay2);//清处定时播放器
			_index2=$(this).index();//获取当前li序列号

			$(this).addClass("hover").siblings().removeClass("hover");//显示按扭

			$("#Adv2 .ImgList").eq(_index2).fadeIn().siblings("div").fadeOut();//显示图片
		},function(){
			autoPlay2();
		});
		
		autoPlay();//调用和执行
		autoPlay2();	
	})