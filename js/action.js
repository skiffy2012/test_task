$(document).ready(function() {
	$('.images').click(function(){
	  if($(this).hasClass('markered')){
	   $(this).find('img').remove('.marker');
	   $(this).removeClass('markered');
	  }else{
	   $(this).addClass('markered');
	   $(this).append('<img class="marker" src="img/8.png">');
	  }
	 });
});



