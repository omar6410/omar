function currentAdsStatus()
{
	// ad = localStorageGetItem("ads");
	// if (ad) 
	// {
	// 	alert("You can disable ads from options.")
	// 	UncheckSwitch('.switch.ad-blocker')
	// 	setTimeout(function() { dislayAds(); }, 15000);
	// }
	// else
	// {
		checkSwitch('.switch.ad-blocker')
		hideAds()	
	// }
}


function dislayAds() 
{
  // const scriptAdMaven = '<script data-cfasync="false" src="//dgw7ae5vrovs7.cloudfront.net/?eawgd=801282"></script>';
  // const scriptAdPro= '<script type="text/javascript" src="//deloplen.com/apu.php?zoneid=2767109" async data-cfasync="false"></script>';
  
  // const script1 =  "<script>(function(d){let s=d.createElement('script');s.async=true;s.src='https://nativesubscribe.pro/code/native.js?h=waWQiOjEwMTUwMjQsInNpZCI6MTAyMDEzMCwid2lkIjozMTY2Niwic3JjIjoyfQ==eyJ';d.head.appendChild(s);})(document);</script>"
  // const script2 = "<script>(function(d){let s=d.createElement('script');s.async=true;s.src='https://olineman.pro/code/pops.js?h=waWQiOjEwMTUwMjQsInNpZCI6MTAyMDEzMCwid2lkIjozMTY2OCwic3JjIjoyfQ==eyJ';d.head.appendChild(s);})(document);</script>"
  // const banner = '<div class="propaller-ads-banner"><iframe src="//dgw7ae5vrovs7.cloudfront.net/br?eawgd=801198" width="950" height="320" scrolling="no" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation"></iframe></div>'
  // $(".ads").html(script1+script2).delay( 500000 );
  // $(".ads.banner").html(banner).delay( 500000 );
  // $(".ads.admaven").html(scriptAdMaven + scriptAdPro).delay( 500000 );

}


function hideAds() 
{
    $(".ads").html("");
}

