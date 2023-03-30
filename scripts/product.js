fetch("./db.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderData(data);
  });

async function renderData(data) {}

function getCard() {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
}
