$(".burger").on('click', function () 
{
	$(".menu").toggleClass('display');

});

$(window).scroll(function() 
{
	if ($(this).scrollTop()>10) 
	{
		$(".menu").removeClass('display');
	

		
	}

});