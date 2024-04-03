
// let container = document.getElementById("container");
let Dataurl = "https://new-york-times-2.onrender.com/data";
let url = "https://new-york-times-2.onrender.com/stock";
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let firstChild= document.getElementsByClassName("");

let loading = document.getElementById("loading");



let defaultImg = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.insider.com%2F62c831d38045920019ae2c5a%3Fwidth%3D700&tbnid=IVmzvfaMhrHj2M&vet=12ahUKEwiN7sSCzZ6FAxW4hWMGHcT0BZUQMygBegQIARBQ..i&imgrefurl=https%3A%2F%2Fwww.businessinsider.com%2Fbiden-stops-short-of-declaring-a-national-climate-emergency-2022-7&docid=NaonEPVp0eY3NM&w=700&h=525&q=joe%20images%20with%20short%20image%20address&ved=2ahUKEwiN7sSCzZ6FAxW4hWMGHcT0BZUQMygBegQIARBQ"
async function fetchDatafirst() {
  try {
    let ran = Math.floor(Math.random() * (35 - 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=23`);
    let dat = await res.json();
    loading.style.display="none";
    appendDatafirst(dat);
  } catch (err) {
    console.log(err);
  }
}

async function fetchDatathird() {
  try {
    let ran = Math.floor(Math.random() * (80- 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=10`);
    let dat = await res.json();
    appendDatathird(dat);

    // console.log(dat);
  } catch (err) {
    console.log(err);
  }
}
function appendDatathird(data) {
  let count = 1;

  for (let i = 0; i < 10; i++) {
    if (data[i].urlToImage) {
      third.append(createCard3(data[i]));
    }

    if (count == 2) {
      count = 1;
      // let line = document.createElement("hr");
      // third.append(line);
    }

    count++;
  }
}

let ran = Math.floor(Math.random() * (21 - 1)) + 1;

async function fetchData2() {
  try {
    let ran = Math.floor(Math.random() * (35 - 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=23`);
    let dat = await res.json();
    appendDataSecond(dat);
    // console.log(dat.data);
  } catch (err) {
    console.log(err);
  }
}
async function getData() {
  try {
    let res = await fetch();
    let dat = await res.json();
  
  } catch (err) {
    console.log(err);
  }
}




function appendDatafirst(data) {
  let count = 2;

  for (let i = 1; i < 23; i++) {
    first.append(createcard(data[i], count, data, i));
    if (count == 3) {
      count = 1;
      let line = document.createElement("hr");
      first.append(line);
    }

    count++;
  }
}
function appendDataSecond(data) {
  let count = 2;

  for (let i = 1; i < 21; i++) {
    if (data[i].urlToImage) {
      second.append(createcard2(data[i], count, data, i));
    }
    if (count == 3) {
      count = 1;
      // let line = document.createElement("hr");
      // second.append(line);
    }
    count++;
  }
}

function createcard(data, count, arr, i) {
  let card = document.createElement("div");
  card.classList.add("card1");
  let icard1 = document.createElement("div");
  let icard2 = document.createElement("div");
  let title = document.createElement("h4");
  let ta = document.createElement("a");
  title.classList.add("title");
  title.append(ta);
  ta.href = data.url;
  let details = document.createElement("p");
  let td = document.createElement("a");

  details.append(td);

  td.href = data.url;
  details.classList.add("details");
  ta.innerText = data.title;
  td.innerText = data.description;
  let img = document.createElement("img");
  img.classList.add("img1");

  icard1.append(title, details);

  icard1.style.width = "350px";
  if (data.urlToImage && count == 2) {
    icard2.append(img);
    img.src = data.urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "90%";
    img.style.minWidth="300px"
    img.style.maxWidth ="500px";
    img.style.maxHeight ="280px";
    // img.style.height="200px"
    img.onerror = `this.src='${defaultImg}'`
  } else if (count == 2 && !data.urlToImage) {
    icard2.append(img);
    img.src = arr[i - 1].urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "90%";
    img.style.minWidth="300px"
    img.style.maxWidth ="500px";
    img.style.maxHeight ="280px";
    img.onerror = `this.src='${defaultImg}'`
    // img.style.height="200px"
  }
  icard2.style.position = "absolute";
  icard2.classList.add("icard2");

  card.append(icard1, icard2);
  return card;
}
fetchDatafirst();

fetchData2();
fetchDatathird();
function createcard2(data) {
  let card = document.createElement("div");
  card.classList.add("card2");
  let icard1 = document.createElement("div");
  let icard2 = document.createElement("div");
  let title = document.createElement("h4");
  let ta = document.createElement("a");
  title.classList.add("title");
  title.append(ta);
  ta.href = data.url;
  let details = document.createElement("p");
  let td = document.createElement("a");

  details.append(td);

  td.href = data.url;
  details.classList.add("details");
  ta.innerText = data.title;
  td.innerText = data.description;
  let img = document.createElement("img");
  img.classList.add("img2");

  icard1.append(title, details);

  icard1.style.width = "270px";
  if (data.urlToImage) {
    icard2.append(img);
    icard2.classList.add("simg");
    img.src = data.urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "270px";
    // img.style.height="200px"
  }

  card.append(icard2, icard1);
  return card;
}

function createCard3(data) {
  let card = document.createElement("div");
  card.classList.add("card3");
  let icard1 = document.createElement("div");
  let icard2 = document.createElement("div");
  let title = document.createElement("h4");
  let ta = document.createElement("a");
  title.classList.add("title");
  title.append(ta);
  ta.href = data.url;
  let details = document.createElement("p");
  let td = document.createElement("a");
  details.append(td);
  td.href = data.url;
  details.classList.add("details");
  ta.innerText = data.title;
  td.innerText = data.description;
  let img = document.createElement("img");
  img.classList.add("img2");


  icard1.append(title, details);
  icard1.classList.add("third-card-para")
  icard1.style.width = "70%";

  icard2.append(img);
  icard2.classList.add("timg");
  img.src = data.urlToImage;
  // icard2.style.width = "50%";
  icard2.style.width = "200px";
  img.style.width = "100%";
  // img.style.height="200px"

  card.append(icard1, icard2);
  return card;
}




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
   window.location.href = 'search.html';
})



// http://localhost:3000/posts
let stock = document.getElementById("stock");



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

function createcardfirst(data) {
  let card = document.createElement("div");
  card.classList.add("firstcard");
  let icar1 = document.createElement("div");
  let icar2 = document.createElement("div");
  let title = document.createElement("h4");
  let ta = document.createElement("a");
  title.classList.add("title");
  title.append(ta);
  ta.href = data.url;
  let details = document.createElement("p");
  let td = document.createElement("a");

  details.append(td);

  td.href = data.url;
  details.classList.add("details");
  ta.innerText = data.title;
  td.innerText = data.description;
  let img = document.createElement("img");

  icar1.append(title, details);
  icar1.style.width = "40%";
  icar1.classList.add("icar1");
  icar2.classList.add("icar2");
    icar2.append(img);
    img.src = data.urlToImage;
    icar2.style.width = "50%";
    icar2.style.maxHeight="270px";
    img.style.maxWidth="100%";
    img.style.maxHeight="270px";
    // img.style.height="200px"
  // icard2.classList.add("");
  card.append(icar2, icar1);
  return card;
}



fetchdatatfirst()
async function fetchdatatfirst() {
  try {
    let ran = Math.floor(Math.random() * (80- 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=5`);
    let dat = await res.json();
    appendDataFirstest(dat);
    // console.log(dat);
  } catch (err) {
    console.log(err);
  }
}

let tfirst= document.getElementById("tfirst");
function appendDataFirstest(data) {
  let count=0;
  for (let i = 0; i < 5; i++) {
    if (data[i].urlToImage&&count<2) {
      tfirst.append(createcardfirst(data[i]));
      count++;
    }
  }
}

function createdCard(data) {
  const card = document.createElement('div');
  card.classList.add("topics");

  let topicurl =  document.createElement("a");
  
  let topic =  document.createElement("h4");
  topic.classList.add("title");
  topicurl.href= data.topicurl;
  topicurl.innerText=data.Topic
  topic.append(topicurl);
  let img = document.createElement('img');
  img.src = data.imgurl;
  topic.style.marginBottom="3px";
  let url1 = document.createElement('a');
  let url2 = document.createElement('a');
  let url3 = document.createElement('a');

  let cardTitle1 = document.createElement('p');
  cardTitle1.classList.add('title');
  url1.textContent = data.title1;
  cardTitle1.append(url1)

  let cardTitle2 = document.createElement('p');
  cardTitle2.classList.add('title');
  url2.textContent = data.title2;
  cardTitle2.append(url2)

  let cardTitle3 = document.createElement('p');
  cardTitle3.classList.add('title');
  url3.textContent = data.title3;
  cardTitle3.append(url3)

  url1.href=data.url1
  url2.href=data.url2
  url3.href=data.url3;
  card.append(topic,img,cardTitle1,cardTitle2,cardTitle3)

  return card;
}
let fourth= document.getElementById("fourth");


function renderCards(apiData) {
  apiData.forEach(topic => {
      const card = createdCard(topic);
      fourth.appendChild(card);
  });
}


fecthtopics();

async function fecthtopics() {
  try {
    let res = await fetch("https://new-york-times-2.onrender.com/data2");
    let dat = await res.json();
    // console.log(dat)
    renderCards(dat);
  } catch (err) {
    console.log(err);
  }
}


// shubham login js
let email = document.getElementById("emailgetfromlocal");

let loginButton = document.getElementById("login-button");
let getEmail = JSON.parse(localStorage.getItem("emailAddress"));
email.textContent= getEmail; //email assign
//open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}
//close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

//Event listener for the login button
loginButton.addEventListener('click', function() {
    // If the button value is "Login", redirect to login.html
    if(loginButton.textContent === 'Login') {
        window.location.href = "login.html";
    }
    // If the button value is "Account", open the popup
    else if(loginButton.textContent === 'Account') {
        openPopup();
    }
});


// Set button value based on whether email is present
if(getEmail == null) {
    loginButton.textContent = 'Login';
    console.log(loginButton.value +" login");
}else{
    loginButton.textContent = 'Account';
    console.log(loginButton.value +" Account");
}

//log out clear local storage
  document.getElementById("logout-link").addEventListener('click', function() {
    localStorage.removeItem("emailAddress");
    //set back to login after logout
    loginButton.textContent = 'Login';
    // window.location.href="index.html";
   
    closePopup();
});
