# Work-Day-Scheduler

## Overview

The objective is to make a work day schedule to help users make a schedule for work

---

## My goals are to...

* Display the current date at the top of the page
* Save text from the textarea into local storage
* Change the color of the textarea based on the time
* Add a save icon

---

## Preview of webpage...

![preview-of-webpage](https://user-images.githubusercontent.com/105886307/190524965-8bbba912-d700-404c-ac0d-6efe3676981e.png)

Very beautiful I know...

---

## My thought process...

Initially my idea on how to structure all the time blocks looked like this...

![preview-image](https://user-images.githubusercontent.com/105886307/190525586-1ee2d29c-fc84-463e-9cfb-fd4931c48d18.jpg)

But while working on the project I soon came to the realization that the structure dint work visually and it was alot of work to hardcode the time block 8 times so I knew I wanted to create it with DOM and so this is what that looked like.

```javascript 
var timeblock = $("<div>").addClass("row time-block").attr("id", i)
    var timeBox = $("<div>").addClass("col-2 hour")
    var time = $("<p>").text(timeOn + " " + amPm)
    var textArea = $("<textarea>")
    .addClass("col-8 past textArea")
    .text("")
    var saveBtn = $("<button>").addClass("col-2 saveBtn")
    var font = $("<i>").addClass("fa-solid fa-floppy-disk")
```
This created all the elements, and classes that I needed so I proceeded to append everything to its correct parent. After that I just had to break everything down into different steps.

1. Create time blocks
1. Set up moment.js
1. Change the color of the textarea based on the time
1. Save text to local storage when the save button is clicked
1. Be able to load the text when the page is refreshed

---

## How can I see this Work Day Schedule? 

1. Look at the files in this [repository](https://github.com/Steezy1416/Work-Day-Scheduler).
1. Go to the [work-day-schedule](https://steezy1416.github.io/Work-Day-Scheduler/) webpage and open the dev tools.

