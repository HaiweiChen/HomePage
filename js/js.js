// JavaScript Document
$('.menu a').click(function(){
	$(this).addClass('menu-on').siblings().removeClass('menu-on');
});
