var ramzanDates=[
    {
        ramzan:1,
        date:"7-May-2019",
        sehri: "04:29 AM",
        iftar:"7:05 PM"

    },
    {
        ramzan:2,
        date:"8-May-2019",
        sehri:"04:28 AM",
        iftar:"7:06 PM"

    },
    {
        ramzan:3,
        date:"9-May-2019",
        sehri:"04:27 AM",
        iftar:"7:07 PM"

    },
    {
        ramzan:4,
        date:"10-May-2019",
        sehri:"04:26 AM",
        iftar:"7:07 PM"

    },
    {
        ramzan:5,
        date:"11-May-2019",
        sehri:"04:26 AM",
        iftar:"7:08 PM"

    },
    {
        ramzan:6,
        date:"12-May-2019",
        sehri:"04:25 AM",
        iftar:"7:08 PM"

    },
    {
        ramzan:7,
        date:"13-May-2019",
        sehri:"04:24 AM",
        iftar:"7:09 PM"

    },
    {
        ramzan:8,
        date:"14-May-2019",
        sehri:"04:23 AM",
        iftar:"7:09 PM"

    },
    {
        ramzan:9,
        date:"15-May-2019",
        sehri:"04:23 AM",
        iftar:"7:10 PM"

    },
    {
        ramzan:10,
        date:"16-May-2019",
        sehri:"04:22 AM",
        iftar:"7:10 PM"

    },
    {
        ramzan:11,
        date:"17-May-2019",
        sehri:"04:21 AM",
        iftar:"7:11 PM"

    },
    {
        ramzan:12,
        date:"18-May-2019",
        sehri:"04:21 AM",
        iftar:"7:11 PM"

    },
    {
        ramzan:13,
        date:"19-May-2019",
        sehri:"04:20 AM",
        iftar:"7:12 PM"

    },
    {
        ramzan:14,
        date:"20-May-2019",
        sehri:"04:19 AM",
        iftar:"7:12 PM"

    },
    {
        ramzan:15,
        date:"21-May-2019",
        sehri:"04:19 AM",
        iftar:"7:13 PM"

    },
    {
        ramzan:16,
        date:"22-May-2019",
        sehri:"04:18 AM",
        iftar:"7:13 PM"

    },
    {
        ramzan:17,
        date:"23-May-2019",
        sehri:"04:18 AM",
        iftar:"7:14 PM"

    },
    {
        ramzan:18,
        date:"24-May-2019",
        sehri:"04:17 AM",
        iftar:"7:14 PM"

    },
    {
        ramzan:19,
        date:"25-May-2019",
        sehri:"04:17 AM",
        iftar:"7:15 PM"

    },
    {
        ramzan:20,
        date:"26-May-2019",
        sehri:"04:16 AM",
        iftar:"7:15 PM"

    },
    {
        ramzan:21,
        date:"27-May-2019",
        sehri:"04:16 AM",
        iftar:"7:16 PM"

    },
    {
        ramzan:22,
        date:"28-May-2019",
        sehri:"04:15 AM",
        iftar:"7:16 PM"

    },
    {
        ramzan:23,
        date:"29-May-2019",
        sehri:"04:15 AM",
        iftar:"7:17 PM"

    },
    {
        ramzan:24,
        date:"30-May-2019",
        sehri:"04:15 AM",
        iftar:"7:17 PM"

    },
    {
        ramzan:25,
        date:"31-May-2019",
        sehri:"04:14 AM",
        iftar:"7:18 PM"

    },
    {
        ramzan:26,
        date:"1-June-2019",
        sehri:"04:14 AM",
        iftar:"7:18 PM"

    },
    {
        ramzan:27,
        date:"2-June-2019",
        sehri:"04:14 AM",
        iftar:"7:18 PM"

    },
    {
        ramzan:28,
        date:"3-June-2019",
        sehri:"04:13 AM",
        iftar:"7:19 PM"

    },
    {
        ramzan:29,
        date:"4-June-2019",
        sehri:"04:13 AM",
        iftar:"7:19 PM"

    },
    {
        ramzan:30,
        date:"5-June-2019",
        sehri:"04:13 AM",
        iftar:"7:20 PM"

    }
]


var tab=document.getElementsByTagName("table")[0];

for(var i=0;i<ramzanDates.length;i++){
    var row=document.createElement("tr");
    var dt1=document.createElement("td");
    var dt2=document.createElement("td");
    var dt3=document.createElement("td");
    var dt4=document.createElement("td");


    dt1.innerHTML=ramzanDates[i].ramzan;
    
    dt2.innerHTML=ramzanDates[i].date;
   

    dt3.innerHTML=ramzanDates[i].sehri;
    

    dt4.innerHTML=ramzanDates[i].iftar;
   

    row.appendChild(dt1);
    row.appendChild(dt2);

    row.appendChild(dt3);

    row.appendChild(dt4);

    tab.appendChild(row);



}


function back(){
    window.location.href="../index.html";
}






// var userDate=new Date(bday+bmonth+byear);
// var newUserDate=userDate.getTime();

// var date=new Date().getTime();
// console.log(newUserDate);
// console.log(date);

// var age=date-newUserDate;
// console.log(age);
// var calculatedAge=Math.floor(age/1000/60/60/24/365);
// console.log("Your age is "+calculatedAge);