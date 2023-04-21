// Creating Variableas
var mainCover, clock, amPm, dates, events, am, pm, shortDate, longDate, importantDays;
// Declaring Variables
mainCover = document.querySelector('.main-cover');
clock = mainCover.children[0];
amPm = mainCover.children[1];
am = amPm.children[0];
pm = amPm.children[1];
dates = mainCover.children[2];
shortDate = dates.children[0];
longDate = dates.children[1];
events = mainCover.children[3];


importantDays = {
 nationalDays: ['Child Day', 'Independence Day', 'Victory Day'],
 internationalDays: ['Language Martyrs Day'],
 religiousDays: ['Eidul Fitr', 'Eidul Adha']
};


// Function to detect events
var eventsDetector = (date, month, year) => {
 if (date == 21 && month == 02) {
  events.innerHTML = importantDays.internationalDays[0];
 }
 else if (date == 07 && month == 03) {
  events.innerHTML = importantDays.nationalDays[0];
 }
 else if (date == 26 && month == 03) {
  events.innerHTML = importantDays.nationalDays[1];
 }
 else if (date == 16 && month == 12) {
  events.innerHTML = importantDays.nationalDays[2];
 }
 else if (date == 22 && month == 04 && year == 2023) {
  events.innerHTML = importantDays.religiousDays[0];
 }
 else {
  events.innerHTML = "No events";
 }
}

var watch = () => {
 // Creating Variables 
 var mainDate, hours, minutes, seconds, totalTime, dates, longMonths, longMonth, shortMonth, years, totalShortDate, totalLongDate, day, days;
 // Declaring Variables 
 longMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 mainDate = new Date();
 hours = formate1to10(process12(processAmPm(mainDate.getHours())));
 minutes = formate1to10(mainDate.getMinutes());
 seconds = formate1to10(mainDate.getSeconds());
 dates = formate1to10(mainDate.getDate());
 longMonth = longMonths[mainDate.getMonth()];
 shortMonth = formate1to10(mainDate.getMonth() + 1);
 years = mainDate.getFullYear();
 day = days[mainDate.getDay()];
 totalTime = `${hours}:${minutes}:${seconds}`;
 totalShortDate = `${dates}·${shortMonth}·${years}`;
 totalLongDate = `${day}, ${longMonth} ${dates}`;
 // Adding Texts on elements 
 document.querySelector('.time').textContent = totalTime;
 document.querySelector('.short-date').textContent = totalShortDate;
 document.querySelector('.long-date').textContent = totalLongDate;
 // Calling function to detect events
 eventsDetector(dates, shortMonth, years);
}
// Calling ❝watch❞ Function again and again
setInterval(watch, 10);
// Fumction to process 24 hours to 12 hours timing method
var process12 = (hour) => {
 if (hour > 12) {
  hour = hour - 12;
 }
 else if (hour == 00) {
  hour = 12;
 }
 return hour;
}
// Function  to process AM-PM
var processAmPm = (hour) => {
 if (hour >= 12) {
  pm.style.color = "#fff";
  pm.style.fontWeight = "600";
  am.style.color = "#CFCFCF";
 } else {
  pm.style.color = "#CFCFCF";
  am.style.color = "#fff";
  am.style.fontWeight = "600";
 }
 return hour;
}
// Formating Values of 1 length
var formate1to10 = (value) => {
 if (value < 10) {
  value = "0" + value;
 }
 return value;
}

//Designedand developed by MD Afaeid Sarler
