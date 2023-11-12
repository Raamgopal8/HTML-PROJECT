// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve stored value on page load
    var storedSearchValue = localStorage.getItem('searchValue');
    if (storedSearchValue) {
        document.getElementById('searchInput').value = storedSearchValue;
        displayStoredResults(storedSearchValue);
    }

    // Add event listener for form submission
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get and store the search value
        var searchValue = document.getElementById('searchInput').value;
        localStorage.setItem('searchValue', searchValue);

        // Display stored results
        displayStoredResults(searchValue);

        alert('Search value stored: ' + searchValue);
    });

    // Function to display stored results
    function displayStoredResults(value) {
        var storedResultsList = document.getElementById('storedResultsList');
        var listItem = document.createElement('li');
        listItem.textContent = value;
        storedResultsList.appendChild(listItem);
    }

    // Dropdown menu for pages
    var pageSelect = document.getElementById('pageSelect');

    pageSelect.addEventListener('change', function () {
        var selectedPage = pageSelect.value;

        // Store and display the selected page
        localStorage.setItem('selectedPage', selectedPage);
        alert('Selected page: ' + selectedPage);
    });

    // Retrieve and display stored page on load
    var storedPage = localStorage.getItem('selectedPage');
    if (storedPage) {
        pageSelect.value = storedPage;
        alert('Stored page: ' + storedPage);
    }
});
