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
	}else if(text=='Record'){
		body.css('background','#0089A7');//00AA90
	}else if(text=='ZhiHu'){
		body.css('background','#2EA9DF');
	}else if(text=="E-mail"){
		body.css('background','#F19483');
	}
});
//进度条
$('.rel-strip').each(function(){
	var long=$(this).parents('li').find('input').attr('value');
	$(this).css('width',long);
});
//进度条悬停变色
$('.skill li').each(function(){
	$(this).find('a,.rel-strip').css('opacity','0.8');
});
$('.skill li').mouseover(function(){
	$(this).find('a,.rel-strip').css('opacity','1');
});
$('.skill li').mouseout(function(){
	$(this).find('a,.rel-strip').css('opacity','0.8');
});
//canvas绘制小三角形
$(function(){
	var cxt =document.getElementById('triangle').getContext("2d");//定义绘图环境
	//cxt.beginPath();
	cxt.fillStyle = '#fff';//定义填充颜色
	cxt.strokeStyle="#fff";/*设置边框*/
	cxt.lineWidth=1;/*边框的宽度*/
	cxt.moveTo(150,0);
	cxt.lineTo(130,150);
	cxt.lineTo(170,150);
	cxt.stroke();
	cxt.fill();
});
//专业技能按钮hover事件
$('.mini-block a').click(function(){

	var alt = $(this).attr('alt');
	if(alt == 'HTML'){
		$('.show-block').animate({left:'1.5%'},'0');
	}else if(alt == 'script'){
		$('.show-block').animate({left:'35%'},'0');
	}else if(alt == 'other'){
		$('.show-block').animate({left:'67.5%'},'0');
	}
	$(this).parent().addClass('big').siblings().removeClass('big');
	setTimeout(function(){
		if($('#'+alt).is(':hidden')){
			$('.show-block ul').fadeOut(100);
			setTimeout(function(){$('#'+ alt).fadeIn(1000)},100);
		}
	},300);
});
