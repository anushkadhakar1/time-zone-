document.addEventListener('DOMContentLoaded', () => {
  const selectBox = document.getElementById('box');
  const timeDisplay = document.getElementById('current-time');

  
  const getTimeForZone = (timeZone) => {
    const now = new Date();
    const options = {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, 
    };
    return new Intl.DateTimeFormat('en-US', options).format(now);
  };


  const timeZones = {
    India: 'Asia/Kolkata',
    'South Africa': 'Africa/Johannesburg',
    USA: 'America/New_York',
    'United Kingdom': 'Europe/London',
    Russia: 'Europe/Moscow',
    China: 'Asia/Shanghai',
  };


  const updateTime = () => {
    const selectedCountry = selectBox.value;
    const timeZone = timeZones[selectedCountry];
    const currentTime = getTimeForZone(timeZone);
    timeDisplay.textContent = currentTime;
  };


  updateTime();


  selectBox.addEventListener('change', updateTime);


  setInterval(updateTime, 1000);
});
