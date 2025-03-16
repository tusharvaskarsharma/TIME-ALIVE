// Make sure you have let instead of const
let pastDate = new Date("2025-03-16T12:41:00");

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - pastDate.getFullYear();
  let months = now.getMonth() - pastDate.getMonth();
  let days = now.getDate() - pastDate.getDate();
  let hours = now.getHours() - pastDate.getHours();
  let minutes = now.getMinutes() - pastDate.getMinutes();
  let seconds = now.getSeconds() - pastDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  // Debug log to make sure the script runs
  console.log(`Updating timer: ${years} years, ${months} months`);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = pad(months);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

window.onload = function() {
  setInterval(updateTimer, 1000);
  updateTimer(); // initial call
};
