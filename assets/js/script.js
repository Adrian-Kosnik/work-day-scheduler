// TODO: Display the current day at the top of the calender when a user opens the planner.

// TODO: Present timeblocks for standard business hours when the user scrolls down.

// TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// TODO: Allow a user to enter an event when they click a timeblock

// TODO: Save the event in local storage when the save button is clicked in that timeblock.

// TODO: Persist events between refreshes of a page



// selects the day date section <p> by its id.
let currentDayElm = $('#currentDay');
// gets and appends todays date to the currentDayElm.
let currentDay = moment().format("dddd, MMMM Do YYYY");
currentDayElm.append(currentDay);






// let currentDay = window.setInterval(function () {
//     $(currentDayElm).html(moment().format("dddd, MMMM Do YYYY"))
// }, 1000);
