let currentDate = new Date();

// Function to fetch classes for the current date and update UI
function fetchClassesForCurrentDate() {
    // Convert the current date to a string in the format "YYYY-MM-DD"
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const dateString = `${year}-${formattedMonth}-${formattedDay}`;

    // Make an AJAX request to fetch classes for the current date
    fetch(`/bookClass/${dateString}`)
        .then(response => response.json())
        .then(data => {
            // Update UI with the fetched classes data
            updateClassesUI(data);
        })
        .catch(error => console.error('Error fetching classes:', error));
}


  // Function to update the UI with classes data
function updateClassesUI(classes) {
    // Get the container element where you want to display the classes
    const gridContainer = document.querySelector('.grid-container');

    // Clear any existing classes displayed in the grid
    gridContainer.innerHTML = '';

    // Iterate over the classes data and create HTML elements for each class
    classes.forEach(classItem => {
        // Create a button element for the class
        const button = document.createElement('button');
        button.classList.add('grid-item');

        // Set the content of the button
        button.innerHTML = `
            ${classItem.hour}<br>
            מאמנת: ${classItem.coach}
        `;

        // Add a 'click' event listener to the button
        button.addEventListener('click', function() {
        // Change the button's color to yellow
        this.style.backgroundColor = '#A6BDD9';

        // Delay the alert by a small amount of time to allow the color change to render
        setTimeout(() => {
            alert('נרשמת לשיעור ב ' + classItem.hour + ' עם ' + classItem.coach + ' בהצלחה!');
        }, 0);
});

        // Append the button to the grid container
        gridContainer.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const dayNumElement = document.getElementById('dayNum');
    const monthElement = document.getElementById('month');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const currentDate = new Date();

    console.log("Current date before change:", currentDate);

    // Function to change day
    function changeDay(offset) {
        // Get the current day and month values
        let day = parseInt(dayNumElement.textContent);
        console.log("Day before change:", day)
        let currentMonth = monthElement.textContent.trim();
        console.log("Current month before change:", currentMonth);

        // Find the index of the current month
        let monthIndex = monthNames.indexOf(currentMonth) + 1;
        console.log("Month index before change:", monthIndex)
        // Increment the day by the offset
        day += offset;

        // Check if the day exceeds the maximum days in the current month
        const maxDaysInMonth = new Date(new Date().getFullYear(), monthIndex, 0).getDate();
        if (day > maxDaysInMonth) {
            day = 1;
            monthIndex++; // Increment month if day exceeds maximum days
            if (monthIndex > 12) {
                monthIndex = 1; // January
            }
            currentMonth = monthNames[monthIndex - 1];
        } else if (day < 1) {
            monthIndex--; // Decrement month if day is less than 1
            if (monthIndex < 1) {
                monthIndex = 12; // December
            }
            currentMonth = monthNames[monthIndex - 1];
            day = new Date(new Date().getFullYear(), monthIndex, 0).getDate();
        }

        // Update the day and month elements
        dayNumElement.textContent = day;
        monthElement.textContent = currentMonth;

        // Update the URL
        const year = currentDate.getFullYear();
        const formattedMonth = monthIndex.toString().padStart(2, '0'); // Ensure two-digit month
        const formattedDay = day.toString().padStart(2, '0'); // Ensure two-digit day
        const dateString = `${year}-${formattedMonth}-${formattedDay}`;
        history.pushState(null, null, `/bookClass/${dateString}`);

        // Update currentDate to the new date
        currentDate = new Date(year, monthIndex - 1, day);
        console.log("Current date after change:", currentDate);
        // Make an AJAX request to fetch classes for the current date
        fetchClassesForCurrentDate();
    }

    // Event listener for the "Last" button
    document.getElementById('last').addEventListener('click', function() {
        changeDay(-1);
    });

    // Event listener for the "Next" button
    document.getElementById('next').addEventListener('click', function() {
        changeDay(1);
    });

    // Initial fetch of classes for the current date after DOM content is loaded
    fetchClassesForCurrentDate();
});




