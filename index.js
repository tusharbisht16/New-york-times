
let searchbtn = document.getElementById("searchbtn");
let inputDiv = document.getElementById("display");

searchbtn.addEventListener("click",()=>{
    inputDiv.classList.toggle("display")
})

let search = document.getElementById("search");
let input = document.getElementById("input");

search.addEventListener("click",(event)=>{
  event.stopPropagation();
   localStorage.setItem("search",input.value);
})



// http://localhost:3000/posts
let stock = document.getElementById("stock");

let url = "https://new-york-times-2.onrender.com/stock";

// let docs = [];

setInterval(()=>{
  fetchData();
},3000);
// console.log(docs)
function stockData(docs){
  let random =  Math.floor(Math.random()*(50-1))+1;
  stock.innerHTML= "";
  
  let stoock = docs[random]
 
  let div_stock = document.createElement("span");
  let div_price = document.createElement("span");
  div_stock.innerText= stoock.stock;
  if(random%2){
    div_price.innerHTML= `${stoock.cap} <i class="fa-solid fa-arrow-up"></i>`;
    div_price.style.color="green";
    // div_price.style.marginLeft = "10px";
  }
  else{
    div_price.innerHTML= `${stoock.cap} <i class="fa-solid fa-arrow-down"></i>`;
    div_price.style.color="red";
    // div_price.style.marginLeft = "15px";
  }
  stock.style.width="150px"
  stock.style.display="flex";
  stock.style.gap="10px"
  
  stock.append(div_stock,div_price);

}



async function fetchData(){
   try {
     let res= await fetch(url)
     let data = await res.json()
    
     stockData(data);// docs= data;
    // console.log(docs)

   }
   catch(error){
     console.log(error)
   }
}


//date functionality


// Create a new Date object
var currentDate = new Date();

// Array of weekday names
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Array of month names
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the index of the weekday (0-6)
var weekdayIndex = currentDate.getDay();

// Get the index of the month (0-11)
var monthIndex = currentDate.getMonth();

// Get the weekday name
var weekdayName = weekdays[weekdayIndex];

// Get the month name
var monthName = months[monthIndex];

// Output the current day of the week and month
console.log("Today is " + weekdayName + ", " + monthName);

var today = new Date();
var jsonDate = {
  "year": today.getFullYear(),
  "month": today.getMonth() , // Months are zero-based, so we add 1
  "date": today.getDate(),
  "day":today.getDay()
}
let date = document.getElementById("date");
date.innerText = `${ weekdays[jsonDate.day]}, ${months[jsonDate.month]} ${jsonDate.date}, ${jsonDate.year}`
date.style.fontSize="12px";
date.style.fontWeight= "20%";

