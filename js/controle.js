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



viewportResponsive();
gradeJS('#gradeCapa');
gradeJS('#gradeEntretenimento');
gradeJS('#gradeEsportes');
gradeJS('#gradeEuaqui');
gradeJS('#gradeMultimidia');
	
$( window ).resize(function() {	
	viewportResponsive();
	gradeJS('#gradeCapa');
	gradeJS('#gradeEntretenimento');
	gradeJS('#gradeEsportes');
	gradeJS('#gradeEuaqui');
	gradeJS('#gradeMultimidia');
	//reorganizaGrade('#gradeCapa');		
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


function gradeJS(obj){


	var gradeID			= $(obj);
	var gradeW			= gradeID.width();
	var gradeCols		= gradeID.data('cols');	

	if(gradeCols === 3){
		var blocoWidth		= 320;
	}

	
	var blocoHeight		= 90;
	var blocoMargin		= 15;
	var blocoClass		= $(obj+' .boxGrade');	



	

	//Tablet size
	if(gradeW < 990){
		if(gradeCols === 4){
			var blocoWidth		= 208;
		}
		var arrayObjLastColy	= [];
		var arrayObjLastCol		= [];

		//console.log(blocoWidth);

		
		$.each(blocoClass, function(key, value){
			var $this		= $(this);
			if($this.data('x') === gradeCols){				
				arrayObjLastColy.push($this.data('y'));
				arrayObjLastCol.push($this);

				contaObjLastCol	= parseInt(arrayObjLastCol.length);					
				$this.addClass('alinhaGrade');
					
			}
					
		});

		$.each(blocoClass, function(key, value){
			var $this		= $(this);
			if($this.hasClass('alinhaGrade')){
				return false;
			}
			else {
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
				

				$this.css({
					'width'	:colSize,
					'height':rowSize,
					'left'	:xPosition,
					'top'	:yPosition
				});	
			}
		});


		var lastBlocoC	= contaObjLastCol;
		if(contaObjLastCol % 2 == 0){
			lastBlocoC = contaObjLastCol;
		}
		else {
			lastBlocoC = contaObjLastCol-1;
		}


		var cX 		= 0;
		var lastY 	= arrayObjLastColy[contaObjLastCol-1];
		$.each($(obj+' .alinhaGrade'), function(key, value){
			cX++;
			var $this		= $(this);
			var rows		= parseInt($this.data('rows'));
			var cols		= parseInt($this.data('cols'));
			var x			= parseInt(cX);
			var y			= parseInt(lastY+1);

			if(cX == lastBlocoC){
				$this.addClass('lastBloco');
			}

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
			$this.css({
				'width'	:colSize,
				'height':rowSize,
				'left'	:xPosition,
				'top'	:yPosition
			});	
		});



		var lastBlocoY		= $(obj+' .lastBloco').data('y');
		var lastBlocoH		= $(obj+' .lastBloco').height();
		var lastBlocoPos	= $(obj+' .lastBloco').position();
		var lastBlocoTop	= lastBlocoPos.top;
		

	}

	//Desktop Size
	else {
		if(gradeCols === 4){
			var blocoWidth		= 236;
		}


		$.each(blocoClass, function(key, value){
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
			
			$this.css({
				'width'	:colSize,
				'height':rowSize,
				'left'	:xPosition,
				'top'	:yPosition
			});	
		});


		var lastBlocoY		= blocoClass.last().data('y');
		var lastBlocoH		= blocoClass.last().height();
		var lastBlocoPos	= blocoClass.last().position();
		var lastBlocoTop	= lastBlocoPos.top;
	}

	gradeID.css({ 'height': lastBlocoTop+lastBlocoH });

}

