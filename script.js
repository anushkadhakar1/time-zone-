document.addEventListener('DOMContentLoaded', () => {
  const selectBox = document.getElementById('box');
  const timeDisplay = document.getElementById('current-time');

  // Function to get the current time in a specific time zone
  const getTimeForZone = (timeZone) => {
    const now = new Date();
    const options = {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Change to true for 12-hour format
    };
    return new Intl.DateTimeFormat('en-US', options).format(now);
  };

  // Mapping country names to time zones
  const timeZones = {
    India: 'Asia/Kolkata',
    'South Africa': 'Africa/Johannesburg',
    USA: 'America/New_York',
    'United Kingdom': 'Europe/London',
    Russia: 'Europe/Moscow',
    China: 'Asia/Shanghai',
  };

  // Update time when a new country is selected
  const updateTime = () => {
    const selectedCountry = selectBox.value;
    const timeZone = timeZones[selectedCountry];
    const currentTime = getTimeForZone(timeZone);
    timeDisplay.textContent = currentTime;
  };

  // Initialize with the default country (India)
  updateTime();

  // Event listener for changes in the dropdown
  selectBox.addEventListener('change', updateTime);

  // Optional: Update the time every second for the selected time zone
  setInterval(updateTime, 1000);
});
