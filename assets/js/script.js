$(document).ready(function(){
	$('li').mouseenter(function(){
		$('i',this).fadeTo('fast',1);
	});

	$('li').mouseleave(function(){
		$('i',this).fadeTo('fast',0);
	});

	$('#servitem01').click(function(){
		$('.expreso-break').show();
		$('.expreso-club').hide();
		$('.contentserv').hide();
		$('.refrigerios').hide();
	});

	$('#servitem02').click(function(){
		$('.expreso-club').show();
		$('.expreso-break').hide();
		$('.contentserv').hide();
		$('.refrigerios').hide();
	});

	$('#servitem03').click(function(){
		$('.refrigerios').show();
		$('.expreso-club').hide();
		$('.expreso-break').hide();
		$('.contentserv').hide();
	});

});