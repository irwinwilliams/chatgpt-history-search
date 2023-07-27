// content.js
function filterTitles(filterText) {
    const listOfLists = document.querySelectorAll('ol');
    const titles = [...listOfLists].reduce((accumulator, list) => {
    const liElements = [...list.querySelectorAll('li')];
        return accumulator.concat(liElements);
    }, []);
    //log the array
    console.log(titles.length + " titles found");
    
    titles.forEach((title) => {
        const titleText = title.textContent.toLowerCase();
        if (filterText === '') {
            title.style.display = 'block';
            return;
        }

        if (titleText.includes(filterText)) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });
  }
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'filter_titles') {
      filterTitles(request.filterText);
    }
  });
  