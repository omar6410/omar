const defaultBrandName = "<b>T</b>asbeeh <b>C</b>ounter</span>";

function setBrandToDefault()
{
	$(".logo a").html("Tasbeeh Counter");
	$(".brand_name").html("<b>T</b>asbeeh <b>C</b>ounter</span>");
	$(".brand_name").removeClass('custom-brand-font');
}

function addBrandNameLocalStorage()
{
	localStorage.setItem('brandName',$(".brand-name").val());
}

function defaultNameLocalStorage()
{
	//default names
	localStorage.setItem('tabeehBrandName',"<b>T</b>asbeeh <b>C</b>ounter</span>");
	localStorage.setItem('headerBrandName',"Tasbeeh Counter");
}

function removeBrandNameLocalStorage()
{
	// remove custome name
	defaultNameLocalStorage()
	localStorage.removeItem('brandName');
	setBrandToDefault()
}

function brandName()
{
	const localBrandName = localStorage.getItem("brandName");
	if(localBrandName != null)
	{	
		$(".brand_name").html("");
		$(".brand_name").html(localStorage.getItem("brandName"));
		$(".logo a").html(localStorage.getItem("brandName"));
		$(".brand-name").val(localStorage.getItem("brandName"))

		$(".brand_name").addClass('custom-brand-font');
	}
	else
	{
		setBrandToDefault()
	}
}

function changeBrandName()
{	

	defaultNameLocalStorage()
	const currentBrandName = $(".brand_name").html();
	const newBrandInput = $(".brand-name").val();

	if ($(".brand-name").val()  == "") 
	{
		setBrandToDefault();
	}
	if($(".brand-name").val() != "")
	{
		$(".brand_name").html(newBrandInput);
		addBrandNameLocalStorage();
	}

	
}

function resetBrandName()
{
	removeBrandNameLocalStorage();
}


$(".brand-name").keyup(function() 
	{
		if ($(".brand-name").val()  == "") 
		{
			setBrandToDefault();
		}
		if($(".brand-name").val() != "")
		{
			$(".brand_name").addClass('custom-brand-font');
			$(".brand_name").html($(".brand-name").val());
			$(".logo a").html($(".brand-name").val());
		}
	});
