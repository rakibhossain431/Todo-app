let dest = new Date("february 14,2022 11:00:00").getTime();

 let time = setInterval(function(){

let now = new Date().getTime();
let deff = dest - now;


let days = Math.floor(deff/ (1000*60*60*24));
console.log(days);

 
let hours = Math.floor((deff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);

let minites = Math.floor((deff % (1000*60*60)) / (1000*60));
console.log(minites)

let seconds = Math.floor((deff % (1000*60)) / (1000));
console.log(seconds);

document.getElementById("count").innerHTML = days +"d: " +hours +"h: " + minites +"m: " +seconds +"s: "

},1000);




















