// JavaScript Document
$(".shop_infor_pic li").each(function(i){  
	$('.shop_infor_pic li').eq(i).find('img').load(function(){
		$k_width=parseInt($('.shop_infor_pic li').eq(i).width());
		$k_height=parseInt($('.shop_infor_pic li').eq(i).height());
		$img_width=parseInt($('.shop_infor_pic li').eq(i).find('img').width());
		$img_height=parseInt($('.shop_infor_pic li').eq(i).find('img').height());
		
		if(($k_width/$k_height)>($img_width/$img_height)){
			$img_width_now='100%';
			$('.shop_infor_pic li').eq(i).find('img').width($img_width_now);
			$img_height=parseInt($('.shop_infor_pic li').eq(i).find('img').height());
			$margin=($k_height-$img_height)/2;
			$('.shop_infor_pic li').eq(i).find('img').css("marginTop",$margin);
		}else{
			$img_height_now='100%';
			$('.shop_infor_pic li').eq(i).find('img').height($img_height_now);
			$img_width=parseInt($('.shop_infor_pic li').eq(i).find('img').width());
			$margin=($k_width-$img_width)/2;
			$('.shop_infor_pic li').eq(i).find('img').css("marginLeft",$margin);
		}
	});
});	