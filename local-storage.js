function localStorageAddItem(item,value=null)
{
	localStorage.setItem(item,value);
}

function localStorageRemoveItem(item)
{
	localStorage.removeItem(item);
}

function localStorageGetItem(item)
{
	return localStorage.getItem(item);
}

function clearLocalStorage()
{
	var confirmReset= confirm("Press 'Ok', if you want to clear all data");

	 if (confirmReset == true) 
	 {
		localStorage.clear();
		alert("Please,Refresh the page, to see the changes.")
	 }
	
}