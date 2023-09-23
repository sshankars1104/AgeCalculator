var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"

//this is the input for the date
var inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "30%"
inputdate.style.margin = "10px"

//this is for the button
var button = document.createElement("button");
button.innerHTML = "Display date"
button.className = "btn btn-primary"
button.addEventListener("click", displaydata);

//Append it to parent div
pardiv.append(inputdate,button)
var displaydiv = document.createElement("div");
displaydiv.id = "displaydata"
document.body.append(pardiv)
function displaydata() {
    var input = document.getElementById("dob").value;
    var inpdate = new Date(input);
    var pardiv = document.createElement("div");
    pardiv.append(inpdate);

    //currdate
    var currdate = new Date()
    newDiv.append(currdate)

    //millisec
    var millisec= currdate.getTime() - inpdate.getTime()
    var millisecdiff= "Millisec = "+ millisec
    newDiv0.append(millisecdiff)

    //second
    var second =mathfloor(millisec, 1000)
    var seconddiff = "Sec = "+second
    newDiv1.append(seconddiff)
    
    //minutes
    var minutes =mathfloor(second, 60)
    var minutesdiff ="Minutes = "+minutes
    newDiv2.append(minutesdiff)

    //hours
    var hour =mathfloor(minutes, 60)
    var hourdiff ="Hour = "+hour
    newDiv3.append(hourdiff)

    //days
    var day = mathfloor(hour, 24)
    var daydiff = "Days = "+day
    newDiv4.append(daydiff)

    //Months
    var monthdiff = "Months = "+ getmonthdiff(inpdate, currdate)
    newDiv5.append(monthdiff)

    //Years
    var yeardiff ="Years = "+ getyear(inpdate, currdate)
    newDiv6.append(yeardiff)
}
function mathfloor(value1, value2) {
    return Math.floor(value1/value2)
}

function getyear(value1, value2){
    var d1 = new Date(value1);
    var d2 = new Date(value2);
    return d2.getFullYear() - d1.getFullYear()
}
function getmonthdiff(value1, value2) {
    var year = getyear(value1, value2)
    var month = (year * 12) + (value2.getMonth() - value1.getMonth())
    return month
}

//currdate append
var newDiv = document.createElement("div");
newDiv.id = "myDiv";
document.body.appendChild(newDiv);
newDiv.style.textAlign = "center"

//millisec append
var newDiv0 = document.createElement("div");
newDiv0.id = "myDiv0";
document.body.appendChild(newDiv0);
newDiv0.style.textAlign = "center"

//second append
var newDiv1 = document.createElement("div");
newDiv1.id = "newDiv1";
document.body.appendChild(newDiv1);
newDiv1.style.textAlign = "center"

//minutes append
var newDiv2 = document.createElement("div");
newDiv2.id = "newDiv2";
document.body.appendChild(newDiv2);
newDiv2.style.textAlign = "center"

//hours append
var newDiv3 = document.createElement("div");
newDiv3.id = "newDiv3";
document.body.appendChild(newDiv3);
newDiv3.style.textAlign = "center"

//days append
var newDiv4 = document.createElement("div");
newDiv4.id = "newDiv4";
document.body.appendChild(newDiv4);
newDiv4.style.textAlign = "center"

//Months append
var newDiv5 = document.createElement("div");
newDiv5.id = "newDiv5";
document.body.appendChild(newDiv5);
newDiv5.style.textAlign = "center"

 //Years append
var newDiv6 = document.createElement("div");
newDiv5.id = "newDiv6";
document.body.appendChild(newDiv6);
newDiv6.style.textAlign = "center"



