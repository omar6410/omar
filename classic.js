jQuery(document).ready(function() 
{

	const input =  localStorage.getItem('classicInput');
	const target = localStorage.getItem('classicTarget');

	if (input == null) 
	{
		$(".classic_numbers").val(0);
	}
	else
	{
		$(".classic_numbers").val(input);
	}


	if (target == null) 
	{
		$(".target .classic").val(0);
	}
	else
	{
		$(".target .classic").val(target);
	}
});

$(".draggable").draggable({ axis: 'y', cursor:'pointer', revert:true,
 stop: function()
{

	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var addOne = num + 1;
	clickEffect();

	var $el = $(".add_button"),
    x = 100,
    originalColor = $el.css("background");

	$el.css("background", "#77ff7b");
	setTimeout(function(){
	  $el.css("background", originalColor);
	}, x);
	// $(".target input").val(addOne);
	// $(".target").flip({axis:'x'});
	
	if ($(".target .value").val() == 0) 
	{
		$(".target input").val(0);
	}
	else
	{
		var value = $(".target .value").val();
		var newValue = value-1;
		$(".target input").val(newValue);
		$(".target").flip('toggle');

		if (newValue == 0) 
		{
			navigator.vibrate(1000);
			alert("Target is complete");
		}
	}
	//local storage

		var classicInput = $(".classic-tasbeeh-view input").val();
		classicInput = parseInt(classicInput)+1;
		var classicTargetNum = $(".target .classic").val()

		
		localStorage.setItem('classicInput', classicInput);
		localStorage.setItem('classicTarget', classicTargetNum);



	return $("#numbers").val(addOne);
},start:function() 
{
	$(".circle").toggleClass('color-1 color-2');
	
}});








// ball goes down another fall from top
// tree ball with class of in out middle
// add animation and toggle classes
// 
// 	//digital tasbeeh
		// if (window.location.href.indexOf("index.html") > -1) 
		// {
		// 	var digitalInput = $("#numbers").val();
		// 	var targetNum = $(".target .digital").val()
		// 	localStorage.setItem('digitalInput', digitalInput);
		// 	localStorage.setItem('target', targetNum);
		// }
		// //classic tasbeeh
		// if (window.location.href.indexOf("classic.html") > -1) 
		// {
		// 	var classicInput = $("#classic_numbers").val();
		// 	var classicTargetNum = $(".target .classic").val()
		// 	localStorage.setItem('classicInput', classicInput);
		// 	localStorage.setItem('classicTarget', classicTargetNum);
		// }
