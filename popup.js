document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const filterButton = document.getElementById('filterButton');
    const clearButton = document.getElementById('clearButton');
  
    filterButton.addEventListener('click', searchFilter);
    filterInput.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          filterButton.click();
        }
      });
    clearButton.addEventListener('click', function () {
        filterInput.value = '';
        searchFilter();
    });
  });
  

function searchFilter() {
    //log the value of the input
    console.log(filterInput.value);
    const filterText = filterInput.value.toLowerCase();
    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'filter_titles', filterText });
    });
}

