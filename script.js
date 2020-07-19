function myDate() {
  var date = document.getElementById("date").value; 
  var gender = document.getElementById("gender").value
  var myDay = new Date(date);
  // alert(date + ','+ ' ' + myDay.getDay() + ',' + ' ' + gender).onsubmit

    if(myDay.getDay() == "0" && gender == "Male"){

     alert("Kwasi").onsubmit;
   }
    else if(myDay.getDay() == "0" && gender == "Female"){
      
      alert("Akosua").onsubmit;
    }
    else if(myDay.getDay() == "1" && gender == "Male"){

      alert("Kwadwo").onsubmit;
    }
    else if(myDay.getDay() == "1" && gender == "Female"){

     alert("Adwoa").onsubmit;
    }
   else if(myDay.getDay() == "2" && gender == "Male"){

      alert("Kwabena").onsubmit;
    }
    else if(myDay.getDay() == "2" && gender == "Female"){

     alert("Abena").onsubmit;
    }
    else if(myDay.getDay() == "3" && gender == "Male"){

      alert("Kwaku").onsubmit;
    }
    else if(myDay.getDay() == "3" && gender == "Female"){

      alert("Akua").onsubmit;
    }
    else if(myDay.getDay() == "4" && gender == "Male"){

      alert("Yaw").onsubmit;
    }
    else if(myDay.getDay() == "4" && gender == "Female"){

      alert("Yaa").onsubmit;
    }
    else if(myDay.getDay() == "5" && gender == "Male"){

      alert("Kofi").onsubmit;
    }
    else if(myDay.getDay() == "5" && gender == "Female"){

      alert("Afua").onsubmit;
    }
    else if(myDay.getDay() == "6" && gender == "Male"){

      alert("Kwame").onsubmit;
    }
    else if(myDay.getDay() == "6" && gender == "Female"){

      alert("Ama").onsubmit;
    }
 
  
}

