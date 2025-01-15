// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Here I Get the last modified date of the page
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Here I Select the hamburger and the nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
// Here I Add click event to toggle the menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    if (hamburger.innerHTML === '☰') {
        hamburger.innerHTML = 'x'; // Change to X
    } else {
        hamburger.innerHTML = '☰'; // Change back to hamburger
    }
});

