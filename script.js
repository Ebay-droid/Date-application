function myDate() {
  var date = document.getElementById("date").value; 
  var gender1 = document.getElementById("male").value;
  var gender2 = document.getElementById("female").value
  //alert( date).onsubmit; 

//if(date === "12-12-2020" && gender === "male"){
 // alert("yaay").onsubmit;
//}
//else{
  //alert("na-ah").onsubmit
//}

if(gender1 ==="male" && date === "12-12-2020"){
  alert("male")
}
else{
  alert('not male')
}
}

