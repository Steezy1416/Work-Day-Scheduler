var timeIncrement = 9
var amPm = "am"
var timeBoxValues = []


//loop to create all the timeblocks
for (var i = 0; i < 9; i++) {
    //creating the timeblock elements and setting their attributes
    var timeblock = $("<div>").addClass("row time-block").attr("id", i)
    var timeBox = $("<div>").addClass("col-2 hour")
    var time = $("<p>").text(timeIncrement + amPm)
    var textArea = $("<textarea>")
    .addClass("col-8 past textArea")
    .text("")
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



$(".container").on("click", ".textArea", function () {

    text = $(this)
        .val()
        .trim()
    console.log(text)

    var textInput = $("<textarea>")
        .addClass("col-8 past textArea")
        .attr("data-textarea", i)
        .val(text)

    $(text).replaceWith(textInput)

})

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


    var values = {
        text: newText,
        index: index
    }

    timeBoxValues.push(values)

    //saves text and index to local storage
    localStorage.setItem("object",JSON.stringify(timeBoxValues))

    var valuesDefault = JSON.parse(localStorage.getItem("object"))

    console.log(valuesDefault)
})



