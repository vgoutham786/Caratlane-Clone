let mainSection = document.getElementById("data-wrapper");
let filterEl = document.getElementById("filter");
let allBtn = document.getElementById("show-all");
let radioBtns = document.getElementsByClassName("price-select");
let countEl = document.getElementById("count-item");

let allData = [];

// ..............fetching data from db.json................

fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    allData = data;

    renderData(data);
  });

// .............sort functionality.........................

filterEl.addEventListener("change", (e) => {
  // console.log(allData);
  if (filterEl.value == "") {
    console.log(e.target.value);
    renderData(allData);
  } else if (filterEl.value == "HtoL") {
    allData.sort((a, b) => {
      return b.price - a.price;
    });
    renderData(allData);
  } else if (filterEl.value == "LtoH") {
    allData.sort((a, b) => {
      return a.price - b.price;
    });
    renderData(allData);
  }
});

allBtn.addEventListener("click", () => {
  console.log(allData);
  renderData(allData);
});

// ..............side filter functionality............................

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", (e) => {
    for (let j = 0; j < radioBtns.length; j++) {
      if (!e.target && e.target.checked) {
        e.target.checked = false;
      }
    }
    console.log(e.target.checked);
    let [a, b] = e.target.value.trim().split("-").map(Number);
    let filteredData = allData.filter((item) => {
      return item.price >= a && item.price <= b;
    });
    console.log(filteredData);
    renderData(filteredData);
  });
}

// .......................utilities......................................

function renderData(data) {
  mainSection.innerHTML = null;
  let count = 0;
  data.forEach((item) => {
    count++;
    // let card = getCard(item.id, item.image, item.price, item.title);
    let cardEl = createCardEl(item);
    mainSection.append(cardEl);
  });
  countEl.innerText = count;
}

function createCardEl(item) {
  let price = item.price.toLocaleString("en-IN");

  let cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  cardEl.setAttribute("data-id", item.id);

  // let icon = document.createElement("i");
  // icon.classList.add("fa", "fa-xl", "fa-heart-o");

  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", "");
  imgEl.setAttribute("class", "card-img");

  imgEl.addEventListener("click", function () {
    localStorage.setItem("addToCart", JSON.stringify(item));
    window.location.href = "./addToCart.html";
  });

  let cardData = document.createElement("div");
  cardData.setAttribute("class", "card-data");

  let priceEl = document.createElement("h2");
  priceEl.setAttribute("class", "card-price");
  priceEl.innerText = `₹${price}`;

  let checkEl = document.createElement("a");
  checkEl.setAttribute("class", "check-delivery");
  checkEl.innerText = "Check Delivery";

  checkEl.addEventListener("click", function () {
    checkEl.innerHTML = "Delivery by tomorrow!";
  });

  let titleEl = document.createElement("p");
  titleEl.setAttribute("class", "card-title");
  titleEl.innerText = item.title;

  let ViewBtn = document.createElement("button");
  ViewBtn.setAttribute("class", "try-button");
  ViewBtn.innerText = "View Details";

  ViewBtn.addEventListener("click", (e) => {
    console.log(e.target);
    let newArr = [];
    newArr.push(item);
    console.log(newArr);
    localStorage.setItem("addToCart", JSON.stringify(newArr));
    console.log(newArr);
    console.log(item);
    window.location.href = "./addToCart.html";
  });

  let callBtn = document.createElement("button");
  callBtn.setAttribute("class", "call-button");
  callBtn.innerText = "Add to Wishlist";

  callBtn.addEventListener("click", (e) => {
    // console.log(e.target);
    let wishListData = JSON.parse(localStorage.getItem("wishList")) || [];
    let isthere = false;
    for (let i = 0; i < wishListData.length; i++) {
      if (wishListData[i].id == item.id) {
        isthere = true;
        break;
      }
    }
    if (isthere) {
      alert("Already Added");
    } else {
      wishListData.push(item);
      localStorage.setItem("wishList", JSON.stringify(wishListData));
      callBtn.style.backgroundColor = "#EC7454";
      callBtn.style.color = "white";
      callBtn.innerText = "Wishlisted";
    }
  });

  cardData.append(priceEl, checkEl, titleEl, ViewBtn, callBtn);
  // cardEl.append(icon, imgEl, cardData);
  cardEl.append(imgEl, cardData);
  return cardEl;
}

// function getCard(id, imageUrl, price, title) {
//   price = price.toLocaleString("en-IN");
//   let card = ``;
//   card += `
//   <div class="card" data-id="${id}">
//           <img
//             src="${imageUrl}"
//             alt=""
//             class="card-img"
//           />
//           <div class="card-data">
//             <h2 class="card-price">₹${price}</h2>
//             <a href="#" class="check-delivery">Check Delivery Date</a>
//             <p class="card-title">${title}</p>
//             <button class="try-button">View Details</button>
//             <button class="call-button">Add to Wishlist</button>
//           </div>
//         </div>
//   `;
//   // <i class="fa fa-video-camera" aria-hidden="true"></i>
//   return card;
// }

// async function getData() {
//     let res = await fetch("./db.json");
//     let data = await res.json();
//     allData = data;
//     console.log(data);
//     renderData(data);
//   }
//   getData();
