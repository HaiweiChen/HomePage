// JavaScript Document
var body=$('body');
$('.menu a').click(function(){
	$(this).addClass('menu-on').siblings().removeClass('menu-on');
	$('.wrapper,.LOGO-wrapper').hide()
	var text = $(this).text();
	$('.'+text).show();
	if(text=="Home"){
		body.css('background','#90B44B');
	}else if(text=='Social'){
		body.css('background','#DDD23B');
	}else if(text=='GitHub'){
		body.css('background','#81C7D4');
	}else if(text=='WeiBo'){
		body.css('background','#ddd');
	}else if(text=='ZhiHu'){
		body.css('background','#2EA9DF');
	}else if(text=="E-mail"){
		body.css('background','#F19483');
	}
});
