
// Footer content with current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleString();

// Wind Chill Calculation for Metric units (Celsius)
function calculateWindChill(temp, windSpeed) {
    // Wind chill formula for metric units (temperature in °C, wind speed in km/h)
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Display wind chill if conditions are met
function displayWindChill() {
    const temperature = 10; // Static value in Celsius
    const windSpeed = 5;    // Static value in km/h
    const windChillElement = document.getElementById('wind-chill');
    
    // Conditions for wind chill calculation (metric units)
    // Temperature <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWindChill();
    
    // Add loading animation to hero image
    const heroImage = document.querySelector('.hero img');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 100);
    }
});