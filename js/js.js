// JavaScript Document
var body=$('body');

$('.menu a').click(function(){
	$(this).addClass('menu-on').siblings().removeClass('menu-on');
	var text = $(this).text();//nav名称
	//该菜单指向的部分显示，其他部分隐藏
	$('.'+text).show().siblings('.wrapper-js').hide();
	//页面切换时，改变背景颜色
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
//简历右侧
var mySwiper = new Swiper('.right-block', {
	direction : 'vertical',
	loop: false,
	effect : 'flip',
	pagination: '.swiper-pagination',
	mousewheelControl : true,
	observer:true,//修改swiper自己或子元素时，自动初始化swiper
	observeParents:true,//修改swiper的父元素时，自动初始化swiper
	//切换开始时执行
	onTransitionStart: function(swiper){
		if($('.skilled').hasClass('swiper-slide-active')){
			$('.show-block').css('left','35%');
			$('.js').addClass('big').siblings().removeClass('big');
			$('.show-block ul').hide();
			$('#script').show();
			$('.swiper-wrapper').find('.skilled div').show();
		}else{
			$('.swiper-wrapper').find('.skilled div').hide();
		}
	}
});
//项目经验
var projectSwiper = new Swiper('.Experience', {
	// pagination: '.swiper-pagination',
	// paginationClickable: true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	observer:true,//修改swiper自己或子元素时，自动初始化swiper
	observeParents:true,//修改swiper的父元素时，自动初始化swiper
	noSwiping : true,
	noSwipingClass : 'stop-swiping',
	onSlideChangeStart: function(swiper){
		var index=projectSwiper.activeIndex;
		console.log(index);
		$('.Exp-btn li').eq(index).addClass('on-btn').siblings().removeClass('on-btn');
	}
});
 $('.Exp-btn a').click(function(){
	$(this).parent().addClass('on-btn').siblings().removeClass('on-btn');
});
$('#btn-1').click(function(){
	projectSwiper.slideTo(0, 1000, false);
});
$('#btn-2').click(function(){
	projectSwiper.slideTo(1, 1000, false);
});
$('#btn-3').click(function(){
	projectSwiper.slideTo(2, 1000, false);
});
$('#btn-4').click(function(){
	projectSwiper.slideTo(3, 1000, false);
});
$('#btn-5').click(function(){
	projectSwiper.slideTo(4, 1000, false);
});
//进度条
$('.rel-strip').each(function(){
	var long=$(this).parents('li').find('input').attr('value');
	$(this).css('width',long);
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
