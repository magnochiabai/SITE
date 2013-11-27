function abreFechaMenuBusca(id){		
	var thisID	= id;
	
	$('.select_borda').each(function(){
		if($(this).hasClass('active')){
			if($(this).attr('id') != thisID){
				$('.select_lista_borda').hide();			
				$('.select_borda.active .select_seta').removeClass('ui-icon-triangle-1-n').addClass('ui-icon-triangle-1-s');	
				$('.select_borda.active').removeClass('select_toggleBorda').removeClass('active');
			}
		}
	});

	$('#'+thisID+'_lista').toggle(
		1,
		function(){	
			$('#'+thisID).toggleClass('active'); 
			$('#'+thisID+"_controle").css('background', '#fff');
			$('#'+thisID).toggleClass('select_toggleBorda');	
			$('#'+thisID+' .select_seta').toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-n');
		}	
	);
}