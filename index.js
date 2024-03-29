// let container = document.getElementById("container");

let first = document.getElementById("first");
let second = document.getElementById("second");

async function fetchData() {
  try {
    let res = await fetch("http://localhost:3000/data?_page=12&_per_page=31");
    let dat = await res.json();
    appendDatafirst(dat.data);
    // console.log(dat.data);
  } catch (err) {
    console.log(err);
  }
}

async function fetchData2() {
  try {
    let res = await fetch("http://localhost:3000/data?_page=7&_per_page=31");
    let dat = await res.json();
    appendDataSecond(dat.data);
    // console.log(dat.data);
  } catch (err) {
    console.log(err);
  }
}

function appendDatafirst(data) {
  let count = 2;

  for (let i = 1; i < 31; i++) {
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

  for (let i = 1; i < 31; i++) {
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

  icard1.style.width = "400px";
  if (data.urlToImage && count == 2) {
    icard2.append(img);
    img.src = data.urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "90%";
    // img.style.height="200px"
  } else if (count == 2 && !data.urlToImage) {
    icard2.append(img);
    img.src = arr[i - 1].urlToImage;
    // icard2.style.width = "50%";
    img.style.width = "90%";
    // img.style.height="200px"
  }
  icard2.style.position = "absolute";
  icard2.classList.add("icard2");

  card.append(icard1, icard2);
  return card;
}
fetchData();

fetchData2();

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
