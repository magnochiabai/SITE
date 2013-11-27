
viewportResponsive();	
$( window ).resize(function() {	
	viewportResponsive();

	//reorganizaGrade('#gradeCapa');		
});



$(function(){
	//===============================================
	// MENU DROPDOWN
	//===============================================	
	$('.menu').click(function(){
		var $this 	= $(this);	
		if($this.hasClass('active')){
			return false;
		}
		else {
			$('.menu').removeClass('active').find('.icongol-small-arrowup').removeClass('icongol-small-arrowup').addClass('icongol-small-arrowdown');
			$this.addClass('active').find('.icongol-small-arrowdown').removeClass('icongol-small-arrowdown').addClass('icongol-small-arrowup');
		}
		return false;
	});
	$('html').click(function(){
		$('.menu').removeClass('active').find('.icongol-small-arrowup').removeClass('icongol-small-arrowup').addClass('icongol-small-arrowdown');
	});
	//===============================================


	$('.lerdepois').click(function(){
		$(this).find('.icon-plus').removeClass('icon-plus').addClass('icon-ok');
		$(this).find('.hide').remove();
	});


	//===============================================
	// GRADE
	//===============================================
	//var gradeJS	= $('.gradeJS');
		gradeJS('#gradeCapa');
		/*gradeJS('#gradeEntretenimento');
		gradeJS('#gradeEsportes');
		gradeJS('#gradeEuaqui');
		gradeJS('#gradeMultimidia');*/
		
	//===============================================	



	$('#btn-search-top').click(function(){
		var menuSize = $('#barra-topo-menu .container').width();

		if($('#search-top').hasClass('active')){
			$('#input-search').select();
		}
		else {
			$('#search-top').animate({ 'width': (parseInt(menuSize)-15) }).addClass('active');
			//$('#search-top').addClass('transition').toggleClass('searchOpen');
			$('#search-top').find('.hide').show();
		}
		return false;
	});
	$('#btn-closesearch').click(function(){
		var menuSize = $('#barra-topo-menu .container').width();

		if($('#search-top').hasClass('active')){
			$('#search-top').animate({ 'width': '50px'}).removeClass('active');
			$('#search-top').find('.hide').hide();
		}
		else {
			
		}
		return false;
	});
});





function viewportResponsive(){
	$(window).scroll(function() {
		if($(window).width() > 989){			
			if($(this).scrollTop() > 95) {
				
				$('#barra-fixa').css({ 'position':'fixed'});
				$('#barra-topo-logo').removeClass('hidden-mob').addClass('hidden-dsk');
				$('#logo_reduzida').removeClass('hidden-dsk');
				$('#wrap').css({ 'margin-top':'178px' });
			}
			else {
				$('#barra-topo-logo').removeClass('hidden-dsk').addClass('hidden-mob');
				$('#barra-fixa').css({ 'position':'relative'});
				$('#logo_reduzida').addClass('hidden-dsk');
				$('#wrap').css({ 'margin-top':'20px' });
			}
		}
		else {
			$('#barra-fixa').css({ 'position':'fixed'});
			$('#wrap').css({ 'margin-top':'80px' });
			$('#barra-topo-logo').removeClass('hidden-dsk').addClass('hidden-mob');
		}
	});
}


function reorganizaGrade(obj){
	/*var gradeID			= $(obj);
	var gradeH			= $(obj).height();

	var blocoClass		= $(obj+' .boxGrade');	

	//console.log(blocoClass.length);
	var lastBlocoY		= blocoClass.last().data('y');
	var lastBlocoH		= blocoClass.last().height();
	var lastBlocoPos	= blocoClass.last().position();
	var lastBlocoTop	= lastBlocoPos.top;


	blocoClass.each(function(){
		var $this		= $(this);

		var rows		= parseInt($this.data('rows'));
		var cols		= parseInt($this.data('cols'));
		var x			= parseInt($this.data('x'));
		var y			= parseInt($this.data('y'));


		if(x === 3){			
			$this.css({
				'left'	:0,
				'top'	:gradeH
			});
		}

		gradeID.css({'height':gradeH+250});
	});*/



}


function gradeJS(obj){

	var gradeID			= $(obj);
	var gradeCols		= gradeID.data('cols');

	if($(window).width() > 989){
		gradeID.addClass('desksize').removeClass('mobilesize');
	}
	else {
		gradeID.addClass('mobilesize').removeClass('desksize');
	}

	if(gradeCols === 3){
		var blocoWidth		= 320;
	}
	if(gradeCols === 4){
		var blocoWidth		= 236;
	}
	var blocoHeight		= 90;
	var blocoMargin		= 15;
	var blocoClass		= $(obj+' .boxGrade');	
	var lastBlocoY		= blocoClass.last().data('y');

	blocoClass.each(function(){
		var $this		= $(this);
		var rows		= parseInt($this.data('rows'));
		var cols		= parseInt($this.data('cols'));
		var x			= parseInt($this.data('x'));
		var y			= parseInt($this.data('y'));


		
		if(cols > 1){
			var colSize		= (cols*blocoWidth)+((cols-1)*blocoMargin);					
		}
		else {
			var colSize		= blocoWidth;			
		}

		if(rows > 1){
			var rowSize		= (rows*blocoHeight)+((rows-1)*blocoMargin);
		}
		else {
			var rowSize		= blocoHeight;
		}


		if(gradeID.hasClass('desksize')){
			if(x > 1){
				var xPosition	= (x-1)*colSize+((x-1)*blocoMargin);	
			}
			else {
				var xPosition	= 0;
			}

			if(y > 1){
				var yPosition	= (y-1)*blocoHeight+(y-1)*blocoMargin;
			}
			else {
				var yPosition	= 0;
			}
		}
		else {
			/*if(x === gradeCols){
				if(y > 1){
					var xPosition	= (y-rows)*colSize+((y-rows)*blocoMargin);					
				}
				else {
					var xPosition	= 0;
				}
				var yPosition	= (lastBlocoY)*blocoHeight+(lastBlocoY)*blocoMargin;
				
			}
			else {
				if(x > 1){
					var xPosition	= (x-1)*colSize+((x-1)*blocoMargin);	
				}
				else {
					var xPosition	= 0;
				}	
				if(y > 1){
					var yPosition	= (y-1)*blocoHeight+(y-1)*blocoMargin;
				}
				else {
					var yPosition	= 0;
				}			
			}*/
			if($this.data('x') === 3){
				
				var y			= y+1;
				console.log(y);
			}

		}

		
		
		

		$this.css({
			'width'	:colSize,
			'height':rowSize,
			'left'	:xPosition,
			'top'	:yPosition
		});	
	});


	//Aplica altura inicial da grade	
	var lastBlocoH		= blocoClass.last().height();
	var lastBlocoPos	= blocoClass.last().position();
	var lastBlocoTop	= lastBlocoPos.top;
	gradeID.css({ 'height': lastBlocoTop+lastBlocoH });


	
	
}