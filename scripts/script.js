$(document).ready(function() {
    var calendarArray = [" "]

    $("#currentDay").text(moment().format("MMMM Do YYYY"))

    function init() {
        if(localStorage.getItem("calenderArray") !== null) {
            calendarArray = JSON.parse(localStorage.getItem("calenderArray"))
        } else {
            localStorage.setItem("calendarArray", JSON.stringify(calendarArray))
        }
        calenderRender()
        
    }

    init()

    function calenderRender() {
        for (var i = 9; i < 18; i++) {
            var timeTXT;
            if (i === 9) {
                timeTXT = moment("2013-05-06 0" + i).format("LT")
            } else {
                timeTXT = moment("2013-05-06" + i).format("LT")
            }
            
        }
    }
})