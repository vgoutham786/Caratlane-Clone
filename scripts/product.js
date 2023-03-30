let mainSection = document.getElementById("data-wrapper");
let filterEl = document.getElementById("filter");
let allBtn = document.getElementById("show-all");

fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderData(data);
    filterEl.addEventListener("change", (e) => {
      console.log(e.target.value);
      // if ((filterEl.value = "")) {
      //   renderData(data);
      // } else {
      if (filterEl.value == "HtoL") {
        data.sort((a, b) => {
          return b.price - a.price;
        });
        console.log(data);
        renderData(data);
      } else if (filterEl.value == "LtoH") {
        data.sort((a, b) => {
          return a.price - b.price;
        });
        renderData(data);
      }
      // }
    });
  });

allBtn.addEventListener("click", () => {
  renderData(data);
});

function renderData(data) {
  mainSection.innerHTML = null;
  mainSection.innerHTML = data
    .map((item) => {
      let card = getCard(item.id, item.image, item.price, item.title);
      return card;
    })
    .join("");
}

function getCard(id, imageUrl, price, title) {
  price = price.toLocaleString("en-IN");
  let card = ``;
  card += `
  <div class="card" data-id="${id}">
          <img
            src="${imageUrl}"
            alt=""
            class="card-img"
          />
          <div class="card-data">
            <h2 class="card-price">₹${price}</h2>
            <a href="#" class="check-delivery">Check Delivery Date</a>
            <p class="card-title">${title}</p>
            <button class="try-button">View Details</button>
            <button class="call-button">Add to Wishlist</button>
          </div>
        </div>
  `;
  // <i class="fa fa-video-camera" aria-hidden="true"></i>
  return card;
}
