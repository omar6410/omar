function vibrate(val)
{
	const vibrator = navigator.vibrate(val);
	return vibrator;
}

function audio()
{
	const audio = $(".clickEffect")[0];
	audio.play();
	 // setTimeout(function() 
	 // {
  //   	audio.pause();
 	//  }, 100);
}

function action(action)
{
	if (action == 1) 
	{
		vibrate(200)
	}

	if (action == 2) 
	{
		audio();
	}
}
