
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

let url = "http://localhost:3000/stockData";

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
    div_price.innerHTML= `${stoock.cap} <span class="material-symbols-outlined">
    arrow_upward
    </span> `;
    div_price.style.color="green";
  }
  else{
    div_price.innerHTML= `${stoock.cap} <span class="material-symbols-outlined">
    arrow_downward
    </span> `;
    div_price.style.color="red";
  }
  
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

