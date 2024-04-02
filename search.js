let keyword = localStorage.getItem("search");
let getEmail = JSON.parse(localStorage.getItem("emailAddress"));
let loginButton = document.getElementById("login-button");
let seconddiv = document.getElementById("seconddiv");
let searchedfor =document.getElementById("searchedfor");
let totalcount= document.getElementById("totalcount");



let searchbtn = document.getElementById("searchbtn");
let inputDiv = document.getElementById("display");
searchedfor.value= keyword;


searchbtn.addEventListener("click", () => {
  inputDiv.classList.toggle("display");
});

let search = document.getElementById("search");
let input = document.getElementById("input");
let searchbtn2= document.getElementById("searchbtn2");

search.addEventListener("click", (event) => {
  event.stopPropagation();
  localStorage.setItem("search", input.value);
});

searchbtn2.addEventListener("click",()=>{
  localStorage.setItem("search", searchedfor.value);
  location.reload()
})

// Set button value based on whether email is present
if (getEmail == null) {
  loginButton.textContent = "Login";
} else {
  loginButton.textContent = "Account";
}

fetchData();
fetchtotal()
async function fetchtotal() {
  try {
    let res = await fetch(
      `https://new-york-times-2.onrender.com/data?q=${keyword}&_page=1`
    );
    let dat = await res.json();
 
    totalcount.innerText= res.headers.get('X-Total-Count');
  } catch (error) {
    console.log(error);
  }
}


async function fetchData() {
  try {
    let res = await fetch(
      `https://new-york-times-2.onrender.com/data?q=${keyword}`
    );
    let dat = await res.json();
    appendData(dat);
    // console.log(dat);
  } catch (error) {
    console.log(error);
  }
}

function appendData(data) {
  data.forEach((element) => {
    seconddiv.append(createCard(element));
  });
}

function createCard(data) {
  let card = document.createElement("div");
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
 img.src= data.urlToImage;
 img.style.maxWidth="500px"
 icard1.append(title,details);
 icard2.append(img);
  card.append(icard1, icard2);
  return card;
}
