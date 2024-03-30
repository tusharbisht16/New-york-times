// let container = document.getElementById("container");
let Dataurl = "https://new-york-times-2.onrender.com/data";
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");


async function fetchData() {
  try {
    let ran = Math.floor(Math.random() * (21 - 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=23`);
    let dat = await res.json();
    appendDatafirst(dat);
    // console.log(dat.data);
  } catch (err) {
    console.log(err);
  }
}
async function fetchDatathird() {
  try {
    let ran = Math.floor(Math.random() * (100 - 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=5`);
    let dat = await res.json();
    appendDatathird(dat);

    // console.log(dat);
  } catch (err) {
    console.log(err);
  }
}
function appendDatathird(data) {
  let count = 1;

  for (let i = 0; i < 5; i++) {
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
    let ran = Math.floor(Math.random() * (21 - 1)) + 1;
    let res = await fetch(`${Dataurl}?_page=${ran}&_limit=23`);
    let dat = await res.json();
    appendDataSecond(dat);
    // console.log(dat.data);
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

  for (let i = 1; i < 25; i++) {
    if (data[i].urlToImage) {
      second.append(createcard2(data[i], count, data, i));
    }
    if (count == 3) {
      count = 1;
      let line = document.createElement("hr");
      second.append(line);
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
    img.style.maxHeight ="80%";
    // img.style.height="200px"
  } else if (count == 2 && !data.urlToImage) {
    icard2.append(img);
    img.src = arr[i - 1].urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "90%";
    img.style.minWidth="300px"
    img.style.maxWidth ="500px";
    img.style.maxHeight ="80%";
    // img.style.height="200px"
  }
  icard2.style.position = "absolute";
  icard2.classList.add("icard2");

  card.append(icard1, icard2);
  return card;
}
fetchData();

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

  icard1.style.width = "360px";
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

  icard1.style.width = "700px";

  icard2.append(img);
  icard2.classList.add("timg");
  img.src = data.urlToImage;
  // icard2.style.width = "50%";
  img.style.width = "200px";
  // img.style.height="200px"

  card.append(icard1, icard2);
  return card;
}


