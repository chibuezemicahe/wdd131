// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the page
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// Wind chill calculation functions
const calculateWindChill = (temperature, windSpeed) => 
    13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16);

const calculateWindChillF = (temperature, windSpeed) => 
    35.74 + (0.6215 * temperature) - (35.75 * windSpeed ** 0.16) + (0.4275 * temperature * windSpeed ** 0.16);

// Define variables
const unit = "A"; // Set to "C" for Celsius or "F" for Fahrenheit
const temperature = -6; // Example temperature
const windSpeed = 4.8; // Example wind speed

// Calculate and display wind chill if conditions are met
let windChill;
if ((unit === "C" && temperature <= 10 && windSpeed > 4.8) || 
    (unit === "F" && temperature <= 50 && windSpeed > 3)) {
    windChill = unit === "C" 
        ? calculateWindChill(temperature, windSpeed) 
        : calculateWindChillF(temperature, windSpeed);
    windChill = windChill.toFixed(2); // Round to 2 decimal places
} else {
    windChill = "N/A";
}

// Display wind chill in the browser
document.getElementById('winchill').textContent = `Wind Chill: ${windChill}°${unit}`;
