// JavaScript Document
//=======����ֲ�ͼ��ʵ��=======
	

	//�Զ��ֲ�
	//�����Զ��ֲ��ĺ���
	var _index=0;
	var timePlay=null;
	function autoPlay(){
		$len_li=$("#Adv ul.button li").length;

		timePlay=setInterval(function(){
			_index++;
			if(_index<$len_li){
				if(_index==($len_li-1)){_index=-1; }//���-1 
				$("#Adv ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
				 
			}else{_index=-1;/*�������к�Ϊ-1,�������ŵ�һ��ͼƬ*/}
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

	
	

	//�Զ��ֲ�
	//�����Զ��ֲ��ĺ���
	var _index2=0;
	var timePlay2=null;
	function autoPlay2(){
		$len_li2=$("#Adv2 ul.button li").length;
		timePlay2=setInterval(function(){
			_index2++;
			if(_index2<$len_li2){
				if(_index2==($len_li2-1)){_index2=-1; }//���-1 
				$("#Adv2 ul.button li").eq(_index2).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
				$("#Adv2 .ImgList").eq(_index2).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
				 
			}else{_index2=-1;/*�������к�Ϊ-1,�������ŵ�һ��ͼƬ*/}
		},3000);	
	};
	
	$(function(){
		
		$("#Adv .ImgList").eq(0).show().siblings("div").hide();
		$("#Adv ul.button li").hover(function(){
			clearInterval(timePlay);//�崦��ʱ������
			_index=$(this).index();//��ȡ��ǰli���к�

			$(this).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť

			$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
		},function(){
			autoPlay();//���ö�ʱ������
		});
		
		
		$("#Adv2 .ImgList").eq(0).show().siblings("div").hide();
	
		$("#Adv2 ul.button li").hover(function(){
			clearInterval(timePlay2);//�崦��ʱ������
			_index2=$(this).index();//��ȡ��ǰli���к�

			$(this).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť

			$("#Adv2 .ImgList").eq(_index2).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
		},function(){
			autoPlay2();
		});
		
		autoPlay();//���ú�ִ��
		autoPlay2();	
	})