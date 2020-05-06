$(document).ready(function () {
  var calenderArray = [];

  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function init() {
    if (localStorage.getItem("calenderArray") !== null) {
      calenderArray = JSON.parse(localStorage.getItem("calenderArray"));
    } else {
      localStorage.setItem("calenderArray", JSON.stringify(calenderArray));
    }
    calenderRender();
  }

  init();

  function calenderRender() {
    for (var i = 9; i < 18; i++) {
      var timeTXT;
      if (i === 9) {
        timeTXT = moment("2020-06-05 0" + i).format("LT");
      } else {
        timeTXT = moment("2020-06-05 " + i).format("LT");
      }
      var timeBLK = $("<div>");
      timeBLK.addClass("row time-block");
      var hourEl = $("<div>");
      hourEl.addClass("col-1 hour");
      hourEl.text(timeTXT);
      var textArea = $("<textarea>");
      textArea.addClass("col-10");
      textArea.val(calenderArray[i - 9]);
      if (moment().hour() > i) {
        textArea.addClass("past");
      } else if (moment().hour() === i) {
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

  function save(event) {
    calenderArray[parseInt($(this).attr("data-time")) - 9] = $(this)
      .prev()
      .val();
    localStorage.setItem("calenderArray", JSON.stringify(calenderArray));
  }

  $("#calendar").on("click", ".saveBtn", save);

});
