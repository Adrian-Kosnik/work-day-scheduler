// * TODO: Display the current day at the top of the calender when a user opens the planner.

// * TODO: Present timeblocks for standard business hours when the user scrolls down.

// * TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// * TODO: Allow a user to enter an event when they click a timeblock

// * TODO: Save the event in local storage when the save button is clicked in that timeblock.

// * TODO: Persist events between refreshes of a page

// ! Start of Current Day section
let currentDayElm = $("#currentDay");
let todayDate = moment().format('dddd, MMMM Do');
let todayDateElm = $("<div>");

currentDayElm.append(todayDate);
// ! End of Current Day section

// ! Start of Color-code timeblock section
// currentHour is in the 24h format 
let currentHour = moment().format('H');
// Selecting all text area elements.
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

// ! Start of User input section

// Selecting all save buttons from the HTML file.
let save9Btn = $('.save9');
let save10Btn = $('.save10');
let save11Btn = $('.save11');
let save12Btn = $('.save12');
let save1Btn = $('.save1');
let save2Btn = $('.save2');
let save3Btn = $('.save3');
let save4Btn = $('.save4');
let save5Btn = $('.save5');

// This event listener checks if the save button was clicked
// and stores the input fields value to browsers memory.
save9Btn.on('click', function() {
    let note9 = textArea9AmElm.val();
    localStorage.setItem('note9', note9);
    alert('Saved');
});
save10Btn.on('click', function() {
    let note10 = textArea10AmElm.val();
    localStorage.setItem('note10', note10);
    alert('Saved');
});
save11Btn.on('click', function() {
    let note11 = textArea11AmElm.val();
    localStorage.setItem('note11', note11);
    alert('Saved');
});
save12Btn.on('click', function() {
    let note12 = textArea12PmElm.val();
    localStorage.setItem('note12', note12);
    alert('Saved');
});
save1Btn.on('click', function() {
    let note1 = textArea1PmElm.val();
    localStorage.setItem('note1', note1);
    alert('Saved');
});
save2Btn.on('click', function() {
    let note2 = textArea2PmElm.val();
    localStorage.setItem('note2', note2);
    alert('Saved');
});
save3Btn.on('click', function() {
    let note3 = textArea3PmElm.val();
    localStorage.setItem('note3', note3);
    alert('Saved');
});
save4Btn.on('click', function() {
    let note4 = textArea4PmElm.val();
    localStorage.setItem('note4', note4);
    alert('Saved');
});
save5Btn.on('click', function() {
    let note5 = textArea5PmElm.val();
    localStorage.setItem('note5', note5);
    alert('Saved');
});

// This checks browsers memory and popultes the input field values
// with whatever is stored in browsers memory.

// This grabs all related values from browser memory.
let am9 = localStorage.getItem('note9');
let am10 = localStorage.getItem('note10');
let am11 = localStorage.getItem('note11');
let pm12 = localStorage.getItem('note12');
let pm1 = localStorage.getItem('note1');
let pm2 = localStorage.getItem('note2');
let pm3 = localStorage.getItem('note3');
let pm4 = localStorage.getItem('note4');
let pm5 = localStorage.getItem('note5');

// This sets the value of each input field to the values stored in memory.
textArea9AmElm.attr('value', am9);
textArea10AmElm.attr('value', am10);
textArea11AmElm.attr('value', am11);
textArea12PmElm.attr('value', pm12);
textArea1PmElm.attr('value', pm1);
textArea2PmElm.attr('value', pm2);
textArea3PmElm.attr('value', pm3);
textArea4PmElm.attr('value', pm4);
textArea5PmElm.attr('value', pm5);


// ! End of User input section