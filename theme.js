function addClassToHtmlElements(theme) {
    $("body").addClass(theme + '-mode');
    $(".tasbeeh").addClass(theme + '-mode');
    $(".target").addClass(theme + '-mode');
    $("textarea").addClass(theme + '-mode');
    $(".nav").addClass(theme + '-mode');
    $("footer").addClass(theme + '-mode');
    $(".target-msg").addClass(theme + '-mode');
    $(".contact").addClass(theme + '-mode');
    $("#options").addClass(theme + '-mode');
    $(".menu").addClass(theme + '-mode');
    $(".contact-textarea").addClass(theme + '-mode');
    $("input").addClass(theme + '-mode');
    $(".classic-tasbeeh-view").addClass(theme + '-mode');
    $(".inline.options-container").addClass(theme + '-mode');

}

function setThemeLocalStorage(theme) {
    localStorage.setItem("currentTheme", theme)
}

function removeClassFromHtmlElements(theme) {
    $("body").removeClass(theme + '-mode');
    $(".tasbeeh").removeClass(theme + '-mode');
    $(".target").removeClass(theme + '-mode');
    $("textarea").removeClass(theme + '-mode');
    $(".nav").removeClass(theme + '-mode');
    $("footer").removeClass(theme + '-mode');
    $(".target-msg").removeClass(theme + '-mode');
    $(".contact").removeClass(theme + '-mode');
    $("#options").removeClass(theme + '-mode');
    $(".menu").removeClass(theme + '-mode');
    $(".contact-textarea").removeClass(theme + '-mode');
    $("input").removeClass(theme + '-mode');
    $(".classic-tasbeeh-view").removeClass(theme + '-mode');
    $(".inline.options-container").removeClass(theme + '-mode');
}

function removeThemeFromLocalStorage() {
    localStorage.removeItem("currentTheme");
}

function enableTheme(theme) {
    addClassToHtmlElements(theme);
    setThemeLocalStorage(theme)
}

function disableTheme(theme) {
    removeClassFromHtmlElements(theme);
    removeThemeFromLocalStorage()
    $('.switch.' + theme).prop("checked", false);
}

function currentTheme() {
    const current_theme = localStorageGetItem("currentTheme")
    if (current_theme) {
        addClassToHtmlElements(current_theme);
        $('.switch.' + current_theme).prop("checked", true);
    }
    else {
        // addClassToHtmlElements(theme);
        $('.switch.' + current_theme).prop("checked", false);
    }
}

function getColors(seletedInput,effectTo,textColor=null)
{
        bgColor = $(seletedInput).val();
        if (textColor != null) {textColor = $(seletedInput).val(); bgColor = null;}
        return customThemes(effectTo, bgColor,textColor);
}

function customThemes(className, bgColor,textColor=null) 
{
    if (bgColor == null) {$(className).css({color:textColor});}
    else{$(className).css({backgroundColor:bgColor});}
    
    localStorage.setItem(className,bgColor+textColor);
    console.log(localStorage.getItem(className))
}

function runCustomTheme(className)
{  
   $(className).css({
       backgroundColor:localStorage.getItem(className) ,
       color:localStorage.getItem(className) 
   });
}

function customThemeDisplay()
{
    runCustomTheme("body")
    runCustomTheme(".nav")
    runCustomTheme(".tasbeeh")
}