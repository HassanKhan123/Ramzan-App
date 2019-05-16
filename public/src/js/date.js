var sehripara=document.getElementById("sehri");
var iftarpara=document.getElementById("iftar");

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var head2 = document.getElementsByTagName("h1")[1];

var date = new Date().getDate();
var date1 = new Date().getMonth();

console.log(months[date1]);
var date2 = new Date().getFullYear();


var newDate = date + "-" + months[date1] + "-" + date2;
console.log(newDate);


var curDate=new Date();
var date=curDate.getDate();
var month=curDate.getMonth();


// for(var i =0; i < ramzanDates.length;i++){
//     if(newDate === ramzanDates[i].date){
//         head2.innerHTML="Today is "+ramzanDates[i].ramzan+" ramzan";
//     }
// }

if(date===7 && month === 4){
    var time=new Date("May 7, 2019 04:29").getTime();
    calcSehr();
    var time1=new Date("May 7, 2019 19:05").getTime();
    calcIftaar();
    calcDate(2);

}

else if(date === 8 && month === 4){
    var time=new Date("May 8, 2019 04:28").getTime();
    calcSehr();
    var time1=new Date("May 8, 2019 19:06").getTime();
    calcIftaar();
   
    calcDate(3);


}

else if(date === 9 && month === 4){
    var time=new Date("May 9, 2019 04:27").getTime();
    calcSehr();
    var time1=new Date("May 9, 2019 19:07").getTime();
    calcIftaar();
    
    calcDate(4);


}


else if(date === 10 && month === 4){
    var time=new Date("May 10, 2019 04:26").getTime();
    calcSehr();
    var time1=new Date("May 10, 2019 19:06").getTime();
    calcIftaar();
    calcDate(5);



}


else if(date === 11 && month === 4){
    var time=new Date("May 11, 2019 04:26").getTime();
    calcSehr();
    var time1=new Date("May 11, 2019 19:08").getTime();
    calcIftaar();
    calcDate(6);


}


else if(date === 12 && month === 4){
    var time=new Date("May 12, 2019 04:25").getTime();
    calcSehr();
    var time1=new Date("May 12, 2019 19:08").getTime();
    calcIftaar();
    calcDate(7);


}

else if(date === 13 && month === 4){
    var time=new Date("May 13, 2019 04:24").getTime();
    calcSehr();
    var time1=new Date("May 13, 2019 19:09").getTime();
    calcIftaar();
    calcDate(8);


}
else if(date === 14 && month === 4){
    var time=new Date("May 14, 2019 04:23").getTime();
    calcSehr();
    var time1=new Date("May 14, 2019 19:09").getTime();
    calcIftaar();
    calcDate(9);


}
else if(date === 15 && month === 4){
    var time=new Date("May 15, 2019 04:23").getTime();
    calcSehr();
    var time1=new Date("May 15, 2019 19:10").getTime();
    calcIftaar();
    calcDate(10);


}
else if(date === 16 && month === 4){
    var time=new Date("May 16, 2019 04:22").getTime();
    calcSehr();
    var time1=new Date("May 16, 2019 19:10").getTime();
    calcIftaar();
    calcDate(11);


}
else if(date === 17 && month === 4){
    var time=new Date("May 17, 2019 04:21").getTime();
    calcSehr();
    var time1=new Date("May 17, 2019 19:11").getTime();
    calcIftaar();
    calcDate(12);


}
else if(date === 18 && month === 4){
    var time=new Date("May 18, 2019 04:21").getTime();
    calcSehr();
    var time1=new Date("May 18, 2019 19:11").getTime();
    calcIftaar();
    calcDate(13);


}
else if(date === 19 && month === 4){
    var time=new Date("May 19, 2019 04:20").getTime();
    calcSehr();
    var time1=new Date("May 19, 2019 19:12").getTime();
    calcIftaar();
    calcDate(14);


}
else if(date === 20 && month === 4){
    var time=new Date("May 20, 2019 04:19").getTime();
    calcSehr();
    var time1=new Date("May 20, 2019 19:12").getTime();
    calcIftaar();
    calcDate(15);


}
else if(date === 21 && month === 4){
    var time=new Date("May 21, 2019 04:19").getTime();
    calcSehr();
    var time1=new Date("May 21, 2019 19:13").getTime();
    calcIftaar();
    calcDate(16);


}
else if(date === 22 && month === 4){
    var time=new Date("May 22, 2019 04:18").getTime();
    calcSehr();
    var time1=new Date("May 22, 2019 19:13").getTime();
    calcIftaar();
    calcDate(17);


}
else if(date === 23 && month === 4){
    var time=new Date("May 23, 2019 04:18").getTime();
    calcSehr();
    var time1=new Date("May 23, 2019 19:14").getTime();
    calcIftaar();
    calcDate(18);


}
else if(date === 24 && month === 4){
    var time=new Date("May 24, 2019 04:17").getTime();
    calcSehr();
    var time1=new Date("May 24, 2019 19:14").getTime();
    calcIftaar();
    calcDate(19);


}
else if(date === 25 && month === 4){
    var time=new Date("May 25, 2019 04:17").getTime();
    calcSehr();
    var time1=new Date("May 25, 2019 19:15").getTime();
    calcIftaar();
    calcDate(20);


}
else if(date === 26 && month === 4){
    var time=new Date("May 26, 2019 04:16").getTime();
    calcSehr();
    var time1=new Date("May 26, 2019 19:15").getTime();
    calcIftaar();
    calcDate(21);


}
else if(date === 27 && month === 4){
    var time=new Date("May 27, 2019 04:16").getTime();
    calcSehr();
    var time1=new Date("May 27, 2019 19:16").getTime();
    calcIftaar();
    calcDate(22);


}
else if(date === 28 && month === 4){
    var time=new Date("May 28, 2019 04:15").getTime();
    calcSehr();
    var time1=new Date("May 28, 2019 19:16").getTime();
    calcIftaar();
    calcDate(23);


}
else if(date === 29 && month === 4){
    var time=new Date("May 29, 2019 04:15").getTime();
    calcSehr();
    var time1=new Date("May 29, 2019 19:17").getTime();
    calcIftaar();
    calcDate(24);


}
else if(date === 30 && month === 4){
    var time=new Date("May 30, 2019 04:15").getTime();
    calcSehr();
    var time1=new Date("May 30, 2019 19:17").getTime();
    calcIftaar();
    calcDate(25);


}
else if(date === 31 && month === 4){
    var time=new Date("May 31, 2019 04:14").getTime();
    calcSehr();
    var time1=new Date("May 31, 2019 19:18").getTime();
    calcIftaar();
    calcDate(26);


}
else if(date === 1 && month === 5){
    var time=new Date("June 1, 2019 04:14").getTime();
    calcSehr();
    var time1=new Date("June 1, 2019 19:18").getTime();
    calcIftaar();
    calcDate(27);


}

else if(date === 2 && month === 5){
    var time=new Date("June 2, 2019 04:14").getTime();
    calcSehr();
    var time1=new Date("June 2, 2019 19:18").getTime();
    calcIftaar();
    calcDate(28);


}
else if(date === 3 && month === 5){
    var time=new Date("June 3, 2019 04:13").getTime();
    calcSehr();
    var time1=new Date("June 3, 2019 19:19").getTime();
    calcIftaar();
    calcDate(29);


}
else if(date === 4 && month === 5){
    var time=new Date("June 4, 2019 04:13").getTime();
    calcSehr();
    var time1=new Date("June 4, 2019 19:19").getTime();
    calcIftaar();
    calcDate(30);


}

else if(date === 5 && month === 5){
    var time=new Date("June 5, 2019 04:13").getTime();
    calcSehr();
    var time1=new Date("June 5, 2019 19:20").getTime();
    calcIftaar();
    


}




function calcSehr(){
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = time - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        sehripara.innerHTML ="Time left in Sehri: "+ days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            sehripara.innerHTML = "Time left in Sehri : -";
        }
    }, 1000);

}


function calcIftaar(){
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = time1 - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        iftarpara.innerHTML ="Time left in Iftar: "+ days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            iftarpara.innerHTML = "Time left in Iftar : -";
        }
    }, 1000);
}


function calcDate(x){
    var now = new Date().getTime();
    var distance = time1-now;
    if(distance < 0){
        head2.innerHTML="Today is "+x+" ramzan";
    }
    else{

        head2.innerHTML="Today is "+(x-1)+" ramzan";
    }
}


function forward(){
    window.location.href="src/calendar.html";
}