currentAdsStatus()
brandName();
customThemeDisplay()

const date_1 = $( ".start-date" ).val();
const date_2 = $( ".end-date" ).val();
const lastDayMessage = "Today is the last day"; 
const currentDate = $.datepicker.formatDate('yy-mm-dd', new Date());


function options() 
{
    $(".useful-options").toggleClass("display");
    $(".arrow").toggleClass("arrow-up");

}

function dateDifference(date_1,date_2)
{
    const dateStart = new Date(date_1)
    const dateEnd = new Date(date_2);
    const timeDifference = dateEnd.getTime() - dateStart.getTime();
    
    
    //Get days differece
    const milliSecondInOneSecond = 1000;
    const secondInOneHour = 3600;
    const hoursInOneDay = 24;

    const remainingDays = timeDifference / (milliSecondInOneSecond*secondInOneHour*hoursInOneDay);
    return remainingDays;

}

//clear stored dates
function clearDateLocalStorage()
{
    localStorage.removeItem('start-date');
    localStorage.removeItem('end-date');
    localStorage.removeItem('duration');
    localStorage.removeItem('daysRemaining');
    $( ".end-date" ).val("");
    $( ".duration" ).val("");

}

function AddNewDateLocalStorage()
{
    localStorage.setItem('start-date',$(".start-date").val());
    localStorage.setItem('end-date',$( ".end-date" ).val());
    localStorage.setItem('duration',$(".duration").val());
    localStorage.setItem('daysRemaining',daysRemaining );
   

}


$(document).ready(function()
{ 
    
    //dates
    if (localStorage.getItem("start-date") != "") 
    {
        $(".start").html(localStorage.getItem("start-date"))
    }
     if (localStorage.getItem("duration") != "") 
    {
        $(".duration").val(localStorage.getItem("duration"))
    }

    if (localStorage.getItem("end-date") != "") 
    {
        $(".end").html(localStorage.getItem("end-date"));
    
        //if end date is not empty, do this
         const days = dateDifference(currentDate, localStorage.getItem("end-date"));
         //Deleting local storage after target is completed      
           
        if (days == -1) 
        {
            clearDateLocalStorage();
            
            $(".last-day-message").html("");
        }

        //last day
        if (days  < 1 ) 
        {
            $(".last-day-message").html("");
            $(".last-day-message").html(lastDayMessage);
        }

         //Days Remaining
        if (localStorage.getItem("duration") == "") 
        {
            $(".last-day-message").html("");
        }
        else
        {
            // const days = parseInt(localStorage.getItem("duration")) -  parseInt(days );
                if (days == 1) 
                {
                    daysMessage = " day remaining";
                }
                else
                {
                    daysMessage = " days remaining";
                }

  

                if (days == 0) 
                {
                    $(".last-day-message").html(lastDayMessage);
                }
                else
                {
                    $(".last-day-message").html(days+daysMessage);
                }

                
                // alert(daysMessage+days+localStorage.getItem("duration")+days)
                


                if (localStorage.getItem("daysRemaining") == null) 
                {
                	 $(".last-day-message").html("");
                }

    }
        
    }

    //click action

   if (localStorage.getItem("vibrate") == null) 
   {  
    $( '.switch.beep' ).prop( "checked", true );
    $( '.switch.vibrate' ).prop( "checked", false );
   }
   else
   {
    $( '.switch.vibrate' ).prop( "checked", true );
    $( '.switch.beep' ).prop( "checked", false );
   }

   //themes

     currentTheme()

    $('.switch.dark').click(function()
    {
        if($(this).prop("checked") == true)
        {
            $(".switch.blue").prop( "checked", false)
            disableTheme("blue");
            enableTheme("dark");
        }
        else if($(this).prop("checked") == false)
        {
            disableTheme("dark");
        }
    });

    $('.switch.blue').click(function()
    {
        if($(this).prop("checked") == true)
        {
            $(".switch.dark").prop( "checked", false)
            disableTheme("dark");
            enableTheme("blue");
        }
        else if($(this).prop("checked") == false)
        {
            disableTheme("blue");
        }
    });

    //click sound/effect

    $('.switch.vibrate').on('change',function()
    {
        if($(this).prop("checked") == true)
        {
            $('.switch.beep').prop( "checked", false );
            localStorage.setItem("vibrate","1");
            localStorage.removeItem("beep");          
        }
        else
        {
            $('.switch.beep').prop( "checked", true );
            $('.switch.vibrate').prop( "checked", false );
            localStorage.removeItem("vibrate");
            localStorage.setItem("beep","1");      
        }
    });

    $('.switch.beep').on('change',function()
    {
        if($(this).prop("checked") == false)
        {
            $('.switch.beep').prop( "checked", false );
            localStorage.setItem("vibrate","1");
            localStorage.removeItem("beep");  
        }
        else
        {
            $('.switch.beep').prop( "checked", true );
            $('.switch.vibrate').prop( "checked", false );
            localStorage.removeItem("vibrate");
            localStorage.setItem("beep","1");     
        }
    });

        //Dates functions
          $( function()
          {
            $( ".start-date" ).datepicker();
            $( ".start-date" ).datepicker("option", "dateFormat", "yy-mm-dd");

            if ( $( ".start-date" ).val() == "") 
            {
                $( ".start-date" ).val(currentDate);
            } 

                   

            const startDate = $( ".start-date" ).val(); 
            const endDate  = $( ".end-date" ).val();

           
            $( ".end-date" ).datepicker();
            $( ".end-date" ).datepicker("option", "dateFormat", "yy-mm-dd");


            //end date on change
            $(".end-date").change(function() 
            {
                
                const dayDiff = dateDifference($( ".start-date" ).val(),$( ".end-date" ).val())
                // alert($( ".end-date" ).val())

                if (dayDiff < 1) 
                {
                    $('.duration').val("");
                } 
                else
                {
                     $('.duration').val(dayDiff);
                }

                
            });

            //start date on change
            $(".start-date").change(function() 
            {
               const dayDiff = dateDifference(date_1,date_2);

                if (dayDiff < 1) 
                {
                    $('.duration').val(0);
                } 
                else
                {
                     $('.duration').val(dayDiff);
                }

                
            });

          

             $(".save-memory").on('click', function() 
              {

                //one day remaining
               daysRemaining = dateDifference(date_1,date_2);

                if (daysRemaining < 1 ) 
                {
                    alert("Can't save this duration");
                    daysRemaining = "";    
                }
				else
                if ($( ".end-date" ).val() == "") 
				{
					alert("Ending date is required");
				}
                else 
                if($(".duration").val()== "")
                {
                    alert("Duration is required");
                }
				else
				{
                  const durationData = $(".duration").val();
				  // localstorage
                  AddNewDateLocalStorage();
                  alert('Saved');
                  if (durationData > 1) 
                  {
                  	daysMessage = " days remaining"
                  }
                  else
                  {
                  	daysMessage = " day remaining";
              	  }

                  $(".last-day-message").html(durationData + daysMessage);
				}

                $(".end").html($( ".end-date" ).val());
                $(".start").html($( ".start-date" ).val());
                  
              });

             $(".delete-memory").on('click', function() 
	          {
	          	const confirmEraseMemory= confirm("Press 'Ok' if you want delete saved dates");
	          	if (confirmEraseMemory == true) 
	          	{
                  clearDateLocalStorage();
                  alert('Deleted');
                  $(".last-day-message").html("");
                  $(".end").html("");
                  $(".start").html("");

	          	}
	          	  

	          });


             $('.duration').keyup(function() 
             {
               
               const duration =  parseInt($('.duration').val())


                if ($('.duration').val() == "") 
                {
                    $('.end-date').val("");
                }
                else if ($('.duration').val() == 0) 
                {
                    $('.end-date').val("");
                }
                else
                {
                     var myDate = $(".start-date").datepicker('getDate'); // Retrieve selected date
                    myDate.setDate(myDate.getDate() + duration); // Add 7 days

                    $('.end-date').val($.datepicker.formatDate('yy-mm-dd', myDate)); // Reformat
                    // alert(myDate)
                }

               
               
             });

           
          });

        //brand name change
        $(".save-name").click(function() 
        {
            changeBrandName()
        });

        //reset brand name
        $(".reset-name").click(function() 
        {
            resetBrandName()
        });
        
          
           $('.switch.ad-blocker').click(function()
            {
                if($(this).prop("checked") == true)
                {
                    localStorageRemoveItem("ads"); 
                    hideAds()
                }
                else if($(this).prop("checked") == false)
                {
                    localStorageAddItem("ads");
                    dislayAds();
                }
            });

     });


$('.body-color').change(function(event) 
{
    getColors('.body-color',"body")
});

$('.tasbeeh-color').change(function(event) 
{
    getColors('.tasbeeh-color',".tasbeeh")
});

$('.header-color').change(function(event) 
{
    getColors('.header-color',".nav")
});

$('.header-text-color').change(function(event) 
{
    getColors('.header-text-color',"header")
});


$('.header-options-color').change(function(event) 
{
    getColors('.header-options-color',".menu.display")
});


$('.footer-color').change(function(event) 
{
    getColors('.footer-color',".footer-content")
});

$('.footer-text-color').change(function(event) 
{
    getColors('.footer-text-color',".footer-content",".footer-text-color")
});

$('.footer-color').change(function(event) 
{
    getColors('.footer-color',".footer-content")
});


 
	
