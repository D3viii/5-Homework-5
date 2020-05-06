$(document).ready(function() {
    var calendarArray = [" "]

    $("#currentDay").text(moment().format("MMMM Do YYYY"))

    function init() {
        if(localStorage.getItem("calenderArray") !== null) {
            calendarArray = JSON.parse(localStorage.getItem("calenderArray"))
        } else {
            localStorage.setItem("calendarArray", JSON.stringify(calendarArray))
        }
        
    }
})