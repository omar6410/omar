 // function themeSwitchChecker(theme,secondTheme)
 // {
 //    alert(theme)

 //        if($(theme).prop("checked") == true)
 //        {
 //            $(".switch.secondTheme").prop( "checked", false)
 //            disableTheme(secondTheme);
 //            enableTheme(enableTheme);
 //        }
 //        else if($(theme).prop("checked") == false)
 //        {
 //            disableTheme(enableTheme);
 //        }

 // }
 // 
  function switchChecker(switchName)
  {
        if($(switchName).prop("checked") == true)
        {
            return true;
        }
        else if($(switchName).prop("checked") == false)
        {
           return false;
        }
  } 

  function checkSwitch(switchName)
  {
    $(switchName).prop( "checked", true );
  }

   function uncheckSwitch(switchName)
  {
    $(switchName).prop( "checked", false );
  }    
         