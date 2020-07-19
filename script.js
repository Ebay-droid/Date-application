function myDate() {
  var date = document.getElementById("date").value; 
  var gender = document.getElementById("gender").value
 //validate date value
 //1. check if value exists.
 if (date == '') {
alert("Please select date");
return;
 }
 console.log(date)
 //2. check if date format is right.

  
  var myDay = new Date(date);
  var currentDay = myDay.getDay();

  if (currentDay < '0' || currentDay > '31') {
    alert( Your date is invalid)
  }

  displayName(currentDay, gender);
    
}

function displayName(currentDay, gender) {
  if (gender == "Male") {
    if (currentDay == "0")
      alert("Kwasi").onsubmit;
    if (currentDay == "1")
      alert("Kwadvo").onsubmit;
    if (currentDay == "2")
      alert("Kwabena").onsubmit;
    if (currentDay == "3")
      alert("Kwaku").onsubmit;
    if (currentDay == "4")
      alert("Yaw").onsubmit;
    if (currentDay == "5")
      alert("Kofi").onsubmit;
    if (currentDay == "6")
      alert("Kwame").onsubmit;

  }
  else {
    if (currentDay == "0")
      alert("Akosua").onsubmit;
    if (currentDay == "1")
      alert("Adowa").onsubmit;
    if (currentDay == "2")
      alert("Abena").onsubmit;
    if (currentDay == "3")
      alert("Akua").onsubmit;
    if (currentDay == "4")
      alert("Yaa").onsubmit;
    if (currentDay == "5")
      alert("Afua").onsubmit;
    if (currentDay == "6")
      alert("Ama").onsubmit;


  }
}

