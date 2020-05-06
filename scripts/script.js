$(document).ready(function () {
  var calendarArray = [" ", " ", " "];

  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function init() {
    if (localStorage.getItem("calenderArray") !== null) {
      calendarArray = JSON.parse(localStorage.getItem("calenderArray"));
    } else {
      localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
    }
    calenderRender();
  }

  init();

  function calenderRender() {
    for (var i = 9; i < 18; i++) {
      var timeTXT;
      if (i === 9) {
        timeTXT = moment("2013-05-06 0" + i).format("LT");
      } else {
        timeTXT = moment("2013-05-06" + i).format("LT");
      }
      var timeBLK = $("<div>");
      timeBLK.addClass("row time-block");
      var hourEl = $("<div>");
      hourEl.addClass("col-1 hour");
      hourEl.text(timeTXT);
      var textArea = $("<textarea>");
      textArea.addClass("col-10");
      textArea.val(calendarArray[i - 9]);
      if (moment().hour() > i) {
        textArea.addClass("past");
      } else if (moment().hour() == i) {
        textArea.addClass("present");
      } else {
        textArea.addClass("future");
      }
      var saveBTN = $("<button>");
      saveBTN.addClass("col-1 saveBtn far fa-save fa-2x");
      saveBTN.attr("data-time", i);
      $("#calendar").append(timeBLK);
      timeBLK.append(hourEl);
      timeBLK.append(textArea)
      timeBLK.append(saveBTN);
    }
  }
});
