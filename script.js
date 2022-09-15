var timeOn = 9
var realTime = 9
var amPm = "am"
var day = moment().format("dddd MMM Do")
$("#currentDay").text(day)

//loop to create all the timeblocks
for (var i = 0; i < 9; i++) {

    //creating the timeblock elements and setting their attributes
    var timeblock = $("<div>").addClass("row time-block").attr("id", i)
    var timeBox = $("<div>").addClass("col-2 hour")
    var time = $("<p>").text(timeOn + " " + amPm)
    var textArea = $("<textarea>")
    .addClass("col-8 past textArea")
    .text("")
    var saveBtn = $("<button>").addClass("col-2 saveBtn")
    var font = $("<i>").addClass("fa-solid fa-floppy-disk")

    //appends all the children to the correct parents
    $(timeBox).append(time)
    $(saveBtn).append(font)
    $(timeblock).append(timeBox, textArea, saveBtn)
    $(".container").append(timeblock)

    //checks if its past 12 to reset the time increment and change the time from am to pm
    if (timeOn === 11) {
        amPm = "pm"
    }
    if (timeOn === 12) {
        timeOn = 0
    }

    //calls statusChanges to change the colore of the textarea
    statusChanger()

    timeOn++
    realTime++
}

//changes color of textarea based on the hour
function statusChanger () {
    hour = moment().hour()
    console.log(hour)

    //adds and removes classes that the textarea might or might not have based on the iterration
    if (hour === realTime) {
        $(textArea).removeClass("past")
        $(textArea).removeClass("future")
        $(textArea).addClass("present")
    }
    else if (hour < realTime) {
        $(textArea).removeClass("present")
        $(textArea).removeClass("future")
        $(textArea).addClass("future")
    }
    else {
        $(textArea).removeClass("present")
        $(textArea).removeClass("future")
        $(textArea).addClass("past")
    }
}

// saves the timeblock text
$(".container").on("click", ".saveBtn", function () {
    //finds the textarea sibling and gets its value
    newText = $(this)
        .siblings(".textArea")
        .val()
    
    //gets the save button index
    var index = $(this)
        .parent(".time-block")
        .attr("id")

    //saves text and index to local storage
    localStorage.setItem(index, newText)
})

//manually gets the text value from local storage
$('#0 .textArea').val(localStorage.getItem('0'));
$('#1 .textArea').val(localStorage.getItem('1'));
$('#2 .textArea').val(localStorage.getItem('2'));
$('#3 .textArea').val(localStorage.getItem('3'));
$('#4 .textArea').val(localStorage.getItem('4'));
$('#5 .textArea').val(localStorage.getItem('5'));
$('#6 .textArea').val(localStorage.getItem('6'));
$('#7 .textArea').val(localStorage.getItem('7'));
$('#8 .textArea').val(localStorage.getItem('8'));
$('#9 .textArea').val(localStorage.getItem('9'));

