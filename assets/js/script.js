// * TODO: Display the current day at the top of the calender when a user opens the planner.

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


// Selects the time-container div by id.
let timeContainer = $('#time-container');
let hour = 9;
function createTimeBlock(container) {
    for (let i = 0; i <= 8; i++) {
        
        // Builds time blocks. 9am to 5pm in 1 hour increments.
        let timeBlockElm = $('<div>');
        let timeHourElm = $('<div>');
        let saveButtonElm = $('<input type="submit" value="send">');
        let textField = $('<input>');

        timeBlockElm.addClass('time-block');
        timeBlockElm.append(timeHourElm);
        if (hour < 12) {
            timeHourElm.text(`${hour}AM`);
        } else {
            timeHourElm.text(`${hour}PM`);
        };
        timeHourElm.addClass('hour');

        timeBlockElm.append(textField);
        textField.text("this is the text field")
        textField.addClass('row');

        timeBlockElm.append(saveButtonElm);
        saveButtonElm.addClass('saveBtn');
        saveButtonElm.text("save");



        container.append(timeBlockElm);

        if (hour < 12) {
            hour++
        } else if (hour === 12) {
            hour = 1
        }
    
    };
};

createTimeBlock(timeContainer);










// let currentDay = window.setInterval(function () {
//     $(currentDayElm).html(moment().format("dddd, MMMM Do YYYY"))
// }, 1000);
