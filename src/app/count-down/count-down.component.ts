import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  ngOnInit(): void {
    // Set the date we're counting down to/
     var countDownDate = new Date("July 9, 2023 21:08:00").getTime();

  function countdowncalculation() {

   // Get todays date and time
   var now = new Date().getTime();

   // Find the distance between now an the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
   // Output the result in an element with id="demo"
   document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
 
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("demo").innerHTML = "Now Wait is Over!"
      setTimeout(function() {
        window.location.href = "/home";
      }, 3000);
      
     }
 }

 // Update the count down every 1 second
 var countdownfunction = setInterval(countdowncalculation, 1000);
 }

}
