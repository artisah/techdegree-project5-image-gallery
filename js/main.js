// Get input element.
var searchTxt = document.getElementById('userSearch');

// Add eventListner with search field
searchTxt.addEventListener('keyup', displayImageBySearchText);

function displayImageBySearchText() {
    // Get value of Input
    let searchTxtLcase = (searchTxt.value).toLowerCase();

    //Get gallery-list ul 
    let list = document.getElementById('gallery-list');
    // Get lists from ul
    let listItem = list.querySelectorAll('li');
    
    // Loop throught collection items gallery-list
    for(let i = 0; i < listItem.length; i++) {
       
       let anchor = listItem[i].getElementsByTagName('a')[0];

       //If matched
        if (anchor.getAttribute("data-title").toLowerCase().indexOf(searchTxtLcase) > -1) 
        {
            //If matched display list items
            listItem[i].style.display = "";
            } else {
            // If not matched hide list items
            listItem[i].style.display = "none";
        }
    }
}

