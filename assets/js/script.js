// * TODO: Display the current day at the top of the calender when a user opens the planner.

// * TODO: Present timeblocks for standard business hours when the user scrolls down.

// TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// TODO: Allow a user to enter an event when they click a timeblock

// TODO: Save the event in local storage when the save button is clicked in that timeblock.

// TODO: Persist events between refreshes of a page

// ! Start of Current Day section
let currentDayElm = $("#currentDay");
let todayDate = moment().format('dddd, MMMM Do');
let todayDateElm = $("<div>");

currentDayElm.append(todayDate);
// ! End of Current Day section

// ! Start of Color-code timeblock section
// currentHour is in the 24h format 
let currentHour = moment().format('H');
let textArea9AmElm = $('.9-input');
let textArea10AmElm = $('.10-input');
let textArea11AmElm = $('.11-input');
let textArea12PmElm = $('.12-input');
let textArea1PmElm = $('.1-input');
let textArea2PmElm = $('.2-input');
let textArea3PmElm = $('.3-input');
let textArea4PmElm = $('.4-input');
let textArea5PmElm = $('.5-input');

// This section checks the time and applies correct styling
// to the text area of the schedule.
if (currentHour > 9) {
    textArea9AmElm.css('background-color', '#808080')
} else if (currentHour == 9) {
    textArea9AmElm.css('background-color', '#FF0000')
} else if (currentHour < 9) {
    textArea9AmElm.css('background-color', '#90EE90')
};

if (currentHour > 10) {
    textArea10AmElm.css('background-color', '#808080')
} else if (currentHour == 10) {
    textArea10AmElm.css('background-color', '#FF0000')
} else if (currentHour < 10) {
    textArea10AmElm.css('background-color', '#90EE90')
};

if (currentHour > 11) {
    textArea11AmElm.css('background-color', '#808080')
} else if (currentHour == 11) {
    textArea11AmElm.css('background-color', '#FF0000')
} else if (currentHour < 11) {
    textArea11AmElm.css('background-color', '#90EE90')
};

if (currentHour > 12) {
    textArea12PmElm.css('background-color', '#808080')
} else if (currentHour == 12) {
    textArea12PmElm.css('background-color', '#FF0000')
} else if (currentHour < 12) {
    textArea12PmElm.css('background-color', '#90EE90')
};

if (currentHour > 13) {
    textArea1PmElm.css('background-color', '#808080')
} else if (currentHour == 13) {
    textArea1PmElm.css('background-color', '#FF0000')
} else if (currentHour < 13) {
    textArea1PmElm.css('background-color', '#90EE90')
};

if (currentHour > 14) {
    textArea2PmElm.css('background-color', '#808080')
} else if (currentHour == 14) {
    textArea2PmElm.css('background-color', '#FF0000')
} else if (currentHour < 14) {
    textArea2PmElm.css('background-color', '#90EE90')
};

if (currentHour > 15) {
    textArea3PmElm.css('background-color', '#808080')
} else if (currentHour == 15) {
    textArea3PmElm.css('background-color', '#FF0000')
} else if (currentHour < 15) {
    textArea3PmElm.css('background-color', '#90EE90')
};

if (currentHour > 16) {
    textArea4PmElm.css('background-color', '#808080')
} else if (currentHour == 16) {
    textArea4PmElm.css('background-color', '#FF0000')
} else if (currentHour < 16) {
    textArea4PmElm.css('background-color', '#90EE90')
};

if (currentHour > 17) {
    textArea5PmElm.css('background-color', '#808080')
} else if (currentHour == 17) {
    textArea5PmElm.css('background-color', '#FF0000')
} else if (currentHour < 17) {
    textArea5PmElm.css('background-color', '#90EE90')
};


// ! End of Color-code timeblock section