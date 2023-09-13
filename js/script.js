$(document).ready(function () {
  $(window).scroll(function () {
    // STICKY NAVIGACIONI MENI
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // PRIKAZI MOBILNI MENI
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

const name = document.getElementById("name");
const email = document.getElementById("mail");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const messagesOne = document.getElementById("message");
const telephone = document.getElementById("tel");
const date1 = document.getElementById("datepicker");
const date2 = document.getElementById("datepicker2");

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#datepicker")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        minDate: +1,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#datepicker2")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});

form.addEventListener("submit", (e) => {
  let messages = [];

  let indicator = true;

  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
    window.alert("Name is required");
    indicator = false;
  }
  if (indicator && email.value === "") {
    messages.push("Email must be longer than 6 characters");
    window.alert("Email must be longer than 6 characters");
    indicator = false;
  }
  if (indicator && telephone.value === "") {
    messages.push("Telephone is required");
    window.alert("Telephone is required");
    indicator = false;
  }

  if ((indicator && date1.value === "") || date1.value == null) {
    messages.push("Odaberite datum dolaska");
    window.alert("Please pick a check in date");
    indicator = false;
  }
  if (messages.length > 0) {
    e.preventDefault();
  }
  if (indicator)
    window.alert(
      "Entered data: \n" +
      name.value +
      "\n" +
      telephone.value +
      "\n" +
      email.value +
      "\n" +
      messagesOne.value + "\n" +
      "Check in date: " +
      date1.value +
      "\nSubmited succesfuly!"
    );
  const person = {
    name: name.value,
    telephone: telephone.value,
    email: email.value,
    messages: messagesOne.value,
    date: date1.value
  };

  localStorage.setItem("reservation", JSON.stringify(person));
});
