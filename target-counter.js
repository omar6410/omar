$(".target").flip(
{
  axis:'x',
  trigger: 'manual'
});

$('.value-2').click(function()
	{
		$(".target").flip('toggle');
	});