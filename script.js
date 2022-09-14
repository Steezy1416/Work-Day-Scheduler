var timeIncrement = 9
var amPm = "am"
//loop to create all the timeblocks
for (var i = 0; i < 9; i++) {
    //creating the timeblock elements and setting their attributes
    var timeblock = $("<div>").addClass("row time-block")
    var timeBox = $("<div>").addClass("col-2 hour")
    var time = $("<p>").text(timeIncrement + amPm)
    var textArea = $("<textarea>").addClass("col-8 past")
    var saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save")

    //appends all the children to the correct parents
    $(timeBox).append(time)
    $(timeblock).append(timeBox, textArea, saveBtn)
    $(".container").append(timeblock)

    //checks if its past 12 to reset the time increment and change the time from am to pm
    if (timeIncrement === 12) {
        timeIncrement = 0
        amPm = "pm"
    }

    timeIncrement++
}

